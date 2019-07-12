<?php

namespace App\Http\Controllers;

use App\Services;
use Illuminate\Http\Request;
use JWTAuth;

class ServicesController extends Controller
{
    public function add(Request $request)
    {dd($request->input());
// return view ("services");

        $service = new Services();
        $service->name = $request->name;
        $service->description = $request->description;
        $service->avatar = $request->avatar;
        $service->status = $request->status;
        $service->save();
 
          
     return response()->json([
            'success' => true,
            'data' => $service
        ], 200);
    }
 
    
    public function getAuthUser(Request $request)
    {
        $this->validate($request, [
            'token' => 'required'
        ]);
 
       

        $service = JWTAuth::authenticate($request->token);
 
        return response()->json(['services' => $service]);
    }

    public function get()
        {
            $service=Services::all();
            return response()->json(['services' => $service]);
        }
}

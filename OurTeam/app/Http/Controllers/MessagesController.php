<?php

namespace App\Http\Controllers;
use App\Messages;
use Illuminate\Http\Request;
use JWTAuth;

class MessagesController extends Controller
{
    public function register(Request $request)
    {
        $msg = new Messages();
        $msg->name = $request->name;
        $msg->email = $request->email;
        $msg->subject = $request->subject;
        $msg->message = $request->message;
      
        $msg->save();
 
          
     return response()->json([
            'success' => true,
            'data' => $msg
        ], 200);
    }

    public function getAuthUser(Request $request)
    {
        $this->validate($request, [
            'token' => 'required'
        ]);
 
       

        $msg = JWTAuth::authenticate($request->token);
 
        return response()->json(['messages' => $msg]);
    }
}

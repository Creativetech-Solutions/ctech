<?php

namespace App\Http\Controllers;
use App\OurTeam;
use Illuminate\Http\Request;
use JWTAuth;

class OurTeamController extends Controller
{
    public function register(Request $request)
    {
        // dd($request->input());
        $team = new OurTeam();
        $team->name = $request->name;
        $team->designation = $request->designation;
        $team->description = $request->description;
        $team->avatar = $request->avatar;
        $team->save();
 
          
     return response()->json([
            'success' => true,
            'data' => $team
        ], 200);
    }
 
    
    public function getAuthUser(Request $request)
    {
        $this->validate($request, [
            'token' => 'required'
        ]);
 
       

        $team = JWTAuth::authenticate($request->token);
 
        return response()->json(['our_teams' => $team]);
    }

    public function getTeam()
        {
            $team=OurTeam::all();
            return response()->json(['our_teams' => $team]);
        }
}

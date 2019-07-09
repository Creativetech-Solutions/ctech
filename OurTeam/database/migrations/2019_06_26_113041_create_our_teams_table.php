<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOurTeamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
  public function up()
{
    Schema::create('our_teams', function (Blueprint $table) {
        $table->increments('id');
        $table->string('name');
        $table->string('designation');
        $table->string('description');
        $table->string('avatar');
        $table->string('position');
        $table->timestamps();

       
    });
}

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('our_teams');
    }
}

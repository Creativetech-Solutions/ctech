<?php

namespace App\Http\Controllers\Admin;


use Backpack\CRUD\app\Http\Controllers\CrudController;

// VALIDATION: change the requests to match your own file names if you need form validation
use App\Http\Requests\ServicesRequest as StoreRequest;
use App\Http\Requests\ServicesRequest as UpdateRequest;
use Backpack\CRUD\CrudPanel;


/**
 * Class ServicesCrudController
 * @package App\Http\Controllers\Admin
 * @property-read CrudPanel $crud
 */
class ServicesCrudController extends CrudController
{
    public function setup()
    {
        /*
        |--------------------------------------------------------------------------
        | CrudPanel Basic Information
        |--------------------------------------------------------------------------
        */
        $this->crud->setModel('App\Models\Services');
        $this->crud->setRoute(config('backpack.base.route_prefix') . '/services');
        $this->crud->setEntityNameStrings('services', 'services');

   

        /*
        |--------------------------------------------------------------------------
        | CrudPanel Configuration
        |--------------------------------------------------------------------------
        */

        // TODO: remove setFromDb() and manually define Fields and Columns
        $this->crud->setFromDb();

        // add asterisk for fields that are required in ServicesRequest
        $this->crud->setRequiredFields(StoreRequest::class, 'create');
        $this->crud->setRequiredFields(UpdateRequest::class, 'edit');
     
     $this->crud->addField([   // Textarea
    'name' => 'description',
    'label' => 'Description',
    'type' => 'textarea'
]);

        $this->crud->addField([ // image
    'label' => "Avatar",
    'name' => "avatar",
    'type' => 'image',
    'upload' => true,
    'crop' => false, // set to true to allow cropping, false to disable
    'aspect_ratio' => 1, // ommit or set to 0 to allow any aspect ratio
    // 'disk' => 's3_bucket', // in case you need to show images from a different disk
    // 'prefix' => 'uploads/images/profile_pictures/' // in case your db value is only the file name (no path), you can use this to prepend your path to the image src (in HTML), before it's shown to the user;
]);

$this->crud->addField([
    'name'        => 'status', // the name of the db column
    'label'       => 'Status', // the input label
    'type'        => 'radio',
    'options'     => [ // the key will be stored in the db, the value will be shown as label; 
                        0 => "Un-Published",
                        1 => "Published"
                    ],
    // optional
    //'inline'      => false, // show the radios all on the same line?
]);
    }
     
    public function store(StoreRequest $request)
    {

        /* $uri = $request->avatar;
        $img = explode(',', $uri);
        $ini =substr($img[0], 11);
        $type = explode(';', $ini); */
        
            $img_name = "/uploads/services/service-".time().".png";
        $path = public_path().$img_name;
        
        $img = \Image::make(file_get_contents($request->avatar))->save($path);    

        $request['avatar'] = $img_name;

        
    

    
      
        // your additional operations before save here
        $redirect_location = parent::storeCrud($request);
        // your additional operations after save here
        // use $this->data['entry'] or $this->crud->entry
        return $redirect_location;
    }

    public function update(UpdateRequest $request)
    {
        // your additional operations before save here
        $redirect_location = parent::updateCrud($request);
        // your additional operations after save here
        // use $this->data['entry'] or $this->crud->entry
        return $redirect_location;
    }

    
}


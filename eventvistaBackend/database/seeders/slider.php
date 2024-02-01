<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class slider extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('sliders')->delete();

        \DB::table('sliders')->insert(array(
            0 =>
            array(
                'name' => '1', 'type' => 'app', 'path' => 'https://inabudhabistore.ae/public/uploads/media/y8DFgYVnlqdnb5er9A9auam6aUimTSMb2VsN7aLf.jpg'
            ),
            1 =>
            array(
                'name' => '1', 'type' => 'app', 'path' => 'https://inabudhabistore.ae/public/uploads/media/CwQtxPLBZ8ygwKjklvPljcQYVddFQd5rLTbjPz3N.png'
            ),
            2 =>
            array(
                'name' => '1', 'type' => 'app', 'path' => 'https://inabudhabistore.ae/public/uploads/media/KaON1mPfEWzYkLoFt5KRI28oGnwjmrAxs41ZevFz.jpg'
            ),
            3 =>
            array(
                'name' => '1', 'type' => 'app', 'path' => 'https://inabudhabistore.ae/public/uploads/media/thpBt9YaByzE3MS3XnKMEbtXY7GqlPOhk5FQ4ZpS.jpg'
            ),

        ));
    }
}

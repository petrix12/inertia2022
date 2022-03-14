<?php

namespace Database\Seeders;

use App\Models\Contact;
use App\Models\Country;
use App\Models\Organization;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        Country::factory(5)->create();
        Organization::factory(20)->create();
        Contact::factory(100)->create();
    }
}
<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class StudentWebiner extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $students = [
            [
                'name' => 'Test User',
                'email' => 'test@example.com',
                'phone' => '01676814280',
                'university' => 'UIU',
                'semister' => '8',
                'course_name' => 'python',
                'webiner_date' => '2022-04-22', 
                'status' => 1      
            ],
            [
                'name' => 'hello',
                'email' => 'gdfh@example.com',
                'phone' => '01676814281',
                'university' => 'UIU',
                'semister' => '8',
                'course_name' => 'python',
                'webiner_date' => '2022-04-22',
                'status' => 1  
            ],
        ];
        DB::table('student_webiners')->insert($students);
    
    }
}
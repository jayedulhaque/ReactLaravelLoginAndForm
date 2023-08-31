<?php

namespace App\Http\Controllers;

use App\Models\StudentWebiner;
use Illuminate\Http\Request;

class StudentWebinerController extends Controller
{
    protected $table = 'student_webiners';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(StudentWebiner::get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $studentWbiner = new StudentWebiner;

        $studentWbiner->name = $request->get('name');
        $studentWbiner->email = $request->get('email');
        $studentWbiner->phone = $request->get('phone');
        $studentWbiner->university = $request->get('university');
        $studentWbiner->semister = $request->get('semister');
        $studentWbiner->course_name = $request->get('course_name');
        $studentWbiner->webiner_date = $request->get('webiner_date');
        $studentWbiner->status = 1;
        $studentWbiner->save();
        return response()->json('Success');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\StudentWebiner  $studentWebiner
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(StudentWebiner::whereId($id)->first());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\StudentWebiner  $studentWebiner
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response()->json(StudentWebiner::whereId($id)->first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\StudentWebiner  $studentWebiner
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $studentWbiner = StudentWebiner::whereId($id)->first();
        $studentWbiner->name = $request->get('name');
        $studentWbiner->email = $request->get('email');
        $studentWbiner->phone = $request->get('phone');
        $studentWbiner->university = $request->get('university');
        $studentWbiner->semister = $request->get('semister');
        $studentWbiner->course_name = $request->get('course_name');
        $studentWbiner->webiner_date = $request->get('webiner_date');
        $studentWbiner->status = 1;
        $studentWbiner->save();
        return response()->json('Success');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\StudentWebiner  $studentWebiner
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        StudentWebiner::whereId($id)->first()->delete();
        return response()->json('Success');
    }
}
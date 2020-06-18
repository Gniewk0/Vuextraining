@extends('layout')

@section('content')
<div class="d-flex flex-column justify-content-center">
    <div class="d-flex justify-content-center mt-5">
        <h1>Hello</h1>
    </div>

    <div class="d-flex justify-content-center mt-5">
        <button type="button" class="btn btn-primary" onclick="window.location='{{ url("/index") }}'">Next</button>
    </div>
</div>

@endsection

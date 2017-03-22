@extends('layouts.master')

@section('blog_header')
	{{-- <div class="blog-header">
      <div class="container">
        <h1 class="blog-title">The Bootstrap Blog</h1>
        <p class="lead blog-description">An example blog template built with Bootstrap.</p>
      </div> 
    </div> --}}
    <div id="root">
	    <blog-header>
	    	<template slot="title">
	    		Simple Social Network
	    	</template>
	    	Stay Connected and Share Your Thoughts.
	    </blog-header>
    </div>
@endsection


@section('content')

	@foreach ($posts as $post)
		@include("posts.partials.single_post")
	@endforeach

	<nav class="blog-pagination">
		<a class="btn btn-outline-primary" href="#">Older</a>
		<a class="btn btn-outline-secondary disabled" href="#">Newer</a>
	</nav>

@endsection

@section('sidebar')
	@include('layouts.sidebar')
@stop
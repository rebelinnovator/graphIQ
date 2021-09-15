@extends('initialLayout')
@section('content')
<div class="initialContent">
    <div class="postCategory">
        <div class="item" id="news_item">
            NEWS
        </div>
        <div class="item" id="posts_item">
            POSTS
        </div>
        <div class="item" id="ideas_item">
            IDEAS
        </div>
    </div>
    <div class="postContent">
        <h1 class="title"></h1>
            
    </div>
</div>
@endsection
@section('script')
<script src="{{asset('js/post.js')}}"></script>

@endsection

@extends('chartLayout')

@section('content')
<div class="chartContent">
    <div class="chartPanel">
        <div class="chartSymbolPanel">
        </div>
        <div class="chartGraphPanel" id="chartGraphPanel">
            chart
        </div>
    </div>
    </div>
@endsection
@section('script')
<script src="{{asset('js/chartpanel.js')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/js/socket.io.js')}}"></script>
<!-- <script type="text/javascript" src="{{asset('js/chart/js/jquery.min.js')}}"></script> -->
<script type="text/javascript" src="{{asset('js/chart/charting_library/charting_library.standalone.js')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/datafeeds/udf/datafeed.js')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/js/script.js?v=1.2')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/js/left_menu.js?v=1.1.1.1')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/js/master.js')}}"></script>
@endsection
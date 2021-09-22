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
<!-- Modal -->

<div class="modal fade custom-modal" id="chartModal" tabindex="-1" role="dialog" aria-labelledby="chartModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="chartModalTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="modalchart">
        
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
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
<script type="text/javascript" src="{{asset('js/chart/js/chartmodalscript.js?v=1.2')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/js/left_menu.js?v=1.1.1.1')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/js/master.js')}}"></script>
<script>
    // $('#myModal').on('shown.bs.modal', function () {
    //     $('#myInput').trigger('focus')  
    // })
</script>
@endsection
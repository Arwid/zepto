// Make sure that every Ajax request sends the CSRF token
(function($){
  $.ajaxSettings.headers = $.ajaxSettings.headers || {}
  var token = $('meta[name="csrf-token"]').attr('content');
  $.ajaxSettings.headers['X-CSRF-Token'] = token;
})(Zepto);
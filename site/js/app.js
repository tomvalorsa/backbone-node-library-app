var app = app || {};

$(document).ready(function() {

  // Bind a date picker to the date input field
  $( '#releaseDate' ).datepicker();

  new app.LibraryView();

});

$(document).ready(function () {

  $('#newMovieForm').click(() => {
    $.ajax({
      url: '/api/movie',
      type: 'post',
      dataType: 'json',
      data: $('#newMovieForm').serialize(),
      success: (d) => {
        $('#errResult').text(JSON.stringify(d));
      }
    });
  });
 
    $("#display").submit(e => {
      e.preventDefault();
      $.ajax({
        url: "/api/movie",
        type: "get",
        data: $("#display").serialize(),
        success: d => {
          $("#result").text(d.string || d);
          $("#jsonResult").text(JSON.stringify(d));
        }
      });
    });
  });

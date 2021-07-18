$(document).ready(function () {
  function data() {
    $.ajax({
      url: "process.php",
      type: "post",
      success: function (status) {
        $("#joke").text(status);
      }
    });
  }
  data();

  $("#btn").on("click", function () {
    data();
  });
});

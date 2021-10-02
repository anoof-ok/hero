$(document).ready(function () {
    $("#form1").validate({
        rules: {
          emailadd: {
            required: true,
            email: true
          },
        },
        messages: {
            emailadd:"valid"
        }
      });
});
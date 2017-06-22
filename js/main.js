$(document).ready(function()
{
  $('#luhms_submit').on('click', function()
  {
    $('.alert').css('display', 'none');
    var valid = validate($('#luhms_input').val());
    $('.input_number').text($('#luhms_input').val());
    if(valid)
    {
      $('.alert-success').css('display', 'block');
    }
    else
    {
      $('.alert-danger').css('display', 'block');
    }
  });
});


function validate(num)
{
   var result     = false,
   numArray       = new Array(),
   sum            = 0;


   numArray       = num.split('');

   for(var i = 0; i< numArray.length; i += 2)
   {
      numArray[i] = numArray[i]*2;
      if(numArray[i] >= 10)
      {
         var temp = new Array();
         temp = numArray[i].toString().split('');
         sum = sum + parseInt(temp[0]) + parseInt(temp[1]);
      }
      else
      {
           sum = sum + parseInt(numArray[i]);
      }
      sum = sum + parseInt(numArray[i+1]);
   }
   if(sum % 10 === 0)
   {
       result = true;
   }
   return result;
}

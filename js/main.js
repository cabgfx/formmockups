$(function() {
  
  $('#bold-labels-toggle').change(function() {
    $('form label').toggleClass('bold');
  });

  $('#block-labels-toggle').change(function() {
    $('form label').toggleClass('block');
  });

  $('#form-styles-toggle').change(function() {
    $('#tools style').toggleClass('hidden');
  });

  $('#font-family').keyup(function() {
    var $value = $(this).val(),
        $form = $('form');
    
    if ($value == '') {
      $form.removeAttr('style');
    } else {
      $form.attr('style', function() { return "font-family: "+ $value +";" });
    }

  });
  
  $('#page-background').keyup(function() {
    var $value = $(this).val(),
        $page = $('body');

    if ($value == '') {
      $page.removeAttr('style');
    } else {
      $page.attr('style', function() { return "background: "+ $value +";" });
    }
  });
});
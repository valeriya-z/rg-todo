//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree
$(document).ready(function() {

$('.new-list').on("click", function(){
$('#new_project').fadeIn(300);
$('body').append('<div id="mask"></div>');
$('#mask').fadeIn(300);
 return false;
});
$('a.close, #mask').on('click', function() { 
  $('#mask , #new_project').fadeOut(300 , function() {
    $('#mask').remove();  
   }); 
  return false;
  });

$('a.list_project').each(function(){
  var regV = /project_\d/gi;     
  var result = $(this).attr("id").match(regV); 
  var $formId = "#"+"edit_" + result[0];
  $(this).on("click", function(){
  $($formId).parent().fadeIn(300);
  $('body').append('<div id="mask"></div>');
  $('#mask').fadeIn(300);
     return false;
   });
 $('a.close-list, #mask').on('click', function() { 
 $($formId).parent().fadeOut(300);
 $('#mask').fadeOut(300 , function() {
 $('#mask').remove();  
   }); 
  return false;
  });
 });

$('a.item_task').each(function(){
  var regV = /task_\d/gi;     
  var result = $(this).attr("id").match(regV); 
  var $formId = "#"+"edit_" + result[0];
  $(this).on("click", function(){
  $($formId).parent().fadeIn(300);
  $('body').append('<div id="mask"></div>');
  $('#mask').fadeIn(300);
     return false;
   });
 $('a.close-task, #mask').on('click', function() { 
 $($formId).parent().fadeOut(300);
 $('#mask').fadeOut(300 , function() {
 $('#mask').remove();  
   }); 
  return false;
  });
 });
});

 
/*
$(".new-list").on("click", function() {
       popup = $(this).attr('title');
       showPopup(popup);
     });

	function showPopup(popup) {
	$(popup).fadeIn(500);
	var popMargTop = ($(popup).height() + 24) / 2; 
  var popMargLeft = ($(popup).width() + 24) / 2; 
    $(popup).css({ 
        'margin-top' : -popMargTop,
        'margin-left' : -popMargLeft
      });
    $('body').append('<div id="mask"></div>');
    $('#mask').fadeIn(300);
	return false;
    }; */
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
  $(".task-check").bind('change', function(){
  if (this.checked){
    project_id = $(this).closest('.project').attr('id');
    project_id = project_id.substr(project_id.indexOf("_")+1);
    $.ajax({
      url: 'projects/'+project_id+'/tasks/'+this.value+'/toggle',
      type: 'POST',
      data: {"completed": this.checked}
    });
    $(this).closest('.task').removeClass('open').addClass('done');
  }
  else {
    $(this).closest('.task').removeClass('done').addClass('open');
  }
  });
});
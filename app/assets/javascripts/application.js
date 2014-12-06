//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree
$(document).ready(function() {
$('.mask').on('click',function(){
  $(this).fadeOut(300);
  $('.popup').fadeOut(300);
});
$('.close').on('click',function(){
  $('.mask').fadeOut(300);
  $('.popup').fadeOut(300);
});
$('.new-list').on("click", function(){
  $('#new_project, .mask').fadeIn(300);
  return false;
});
$('.edit_project').each(function(){
  var $formId = '#form_' + $(this).attr("id");
  $(this).on('click',function(){
    $('.mask').fadeIn(300);
    $($formId).parent().fadeIn(300);
    console.log($formId);
   });
});
$('.edit_task').each(function(){
  var $taskFormId = '#form_' + $(this).attr("id");
  $(this).on('click',function(){
    $('.mask').fadeIn(300);
    $($taskFormId).parent().fadeIn(300);
    console.log($taskFormId);
   });
});
$('.link-to-upload').each(function(){
  var $taskUploadId = '#form-' + $(this).attr("id");
  $(this).on('click',function(){
    $('.mask').fadeIn(300);
    $($taskUploadId).parent().fadeIn(300);
   });
})
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
$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');
    

    $('.FB_reactions').facebookReactions({
      //postUrl: "save.php"
    });

    $('.FB_reactions2').facebookReactions({
      //postUrl: "save.php"
    });

    new FgEmojiPicker({
      trigger: ['#emojipickerButton'],
      position: ['top', 'left'],
      emit(obj, triggerElement) {
        const emoji = obj.emoji;
        document.querySelector('#maincommentInput').value += emoji;
      }
  });


    // disabled video click play or paus option
    var videoNode = document.getElementById('liveVideoBox');
    if (videoNode) {
      videoNode.addEventListener('click', function(event){
        event.preventDefault();
      });
    }











});
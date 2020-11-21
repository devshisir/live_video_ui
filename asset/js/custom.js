$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');
    

    $('.FB_reactions').facebookReactions({
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












});
var showText = function (target, message, index, interval) {    
  if (index < message.length) { 
    $(target).append(message[index++]); 
    setTimeout(function () { showText(target, message, index, interval); }, interval); 
  } 
}
    
$(function () { 
  setTimeout(() => {
    showText("#email-text", "nenad.manoilov@gmail.com", 0, 100);    
  }, 500)
 
}); 
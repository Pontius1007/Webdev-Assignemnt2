//Confirms that everything is loaded before executing
document.addEventListener('DOMContentLoaded',
function main() {
  var gif_list = ["http://i.imgur.com/k4v2BV5.gif", "http://i.imgur.com/Slbx9GT.gif"
                  , "http://i.imgur.com/1gLixzB.gif", "http://i.imgur.com/bMfiF3d.gif"
                  , "http://i.imgur.com/cHC5p0z.gif", "http://i.imgur.com/1Mh8yhv.gif"
                  , "https://media.giphy.com/media/ND6xkVPaj8tHO/giphy.gif"
                  , "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
                  , "https://media.giphy.com/media/Rsjxzfs7GfFU4/giphy.gif"
                  , "https://media.giphy.com/media/10rW4Xw9eO0RmU/giphy.gif" ]
    var i = -1;

    //Add method for preloading GIFs? 

    var change_var = function changeGif(){
      var gif = document.getElementById('cat_gif');
      i++;
      gif.src = gif_list[(i) % (gif_list.length)];
    }

    document.getElementById("button_1").addEventListener("click", change_var);

}, false);

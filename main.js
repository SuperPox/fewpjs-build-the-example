// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeHearts = document.querySelectorAll(".like-glyph");
for (const glyph of likeHearts)
{
  glyph.addEventListener("click", likeClick);
}

function likeClick(h)
{
  const heart = h.target;
  mimicServerCall("Url")
  .then(function(serverMessage)
    {
      if (heart == FULL_HEART){
        heart.innerText = FULL_HEART;
      }
      else {
        heart.innerText = EMPTY_HEART;
      }
      
    })

  .catch(function(error)
  {
    const modal = document.getElementById("modal");
    modal.className = "";
    modal.innerText = error;
    setTimeout(() =>  modal.className = "hidden", 3000);
  });
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

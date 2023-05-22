const voteUp = document.querySelector("#up-votes");
const voteDown = document.querySelector("#down-votes");
const voteUpImage = voteUp.querySelector("img");
const voteDownImage = voteDown.querySelector("img");
const numOfUpVotes = document.querySelector("#up-votes-count");
const numOfDownVotes = document.querySelector("#down-votes-count");

let initialNumOfUpVotes = Math.floor(Math.random() * 5000) + 200;
let initialNumOfDownVotes = Math.floor(Math.random() * 500) + 200;
numOfUpVotes.textContent = initialNumOfUpVotes;
numOfDownVotes.textContent = initialNumOfDownVotes;

let hasVotedUp = false;
let hasVotedDown = false;

voteUp.addEventListener("click", () => {
  voteUpImage.classList.add("slide-out-up");
  setTimeout(function () {
    voteUpImage.classList.remove("slide-out-up");
  }, 1300);
  if (!hasVotedUp && !hasVotedDown) {
    numOfUpVotes.textContent = parseInt(numOfUpVotes.textContent) + 1;
    hasVotedUp = true;
  } else if (!hasVotedUp && hasVotedDown) {
    numOfUpVotes.textContent = parseInt(numOfUpVotes.textContent) + 1;
    numOfDownVotes.textContent = parseInt(numOfDownVotes.textContent) - 1;
    hasVotedUp = true;
    hasVotedDown = false;
  }
});

voteDown.addEventListener("click", () => {
  voteDownImage.classList.add("hinge");
  setTimeout(function () {
    voteDownImage.classList.remove("hinge");
  }, 2300);
  if (!hasVotedUp && !hasVotedDown) {
    numOfDownVotes.textContent = parseInt(numOfDownVotes.textContent) + 1;
    hasVotedDown = true;
  } else if (!hasVotedDown && hasVotedUp) {
    numOfUpVotes.textContent = parseInt(numOfUpVotes.textContent) - 1;
    numOfDownVotes.textContent = parseInt(numOfDownVotes.textContent) + 1;
    hasVotedDown = true;
    hasVotedUp = false;
  }
});

// const voteUp = document.querySelector("#up-votes i");
// const voteDown = document.querySelector("#down-votes i");
// const numOfUpVotes = document.querySelector("#up-votes p");
// const numOfDownVotes = document.querySelector("#down-votes p");

// let initialNumOfUpVotes = Math.floor(Math.random() * 5000) + 200;
// let initialNumOfDownVotes = Math.floor(Math.random() * 500) + 200;

// initialNumOfUpVotes = 100;
// initialNumOfDownVotes = 9;

// numOfUpVotes.textContent = initialNumOfUpVotes;
// numOfDownVotes.textContent = initialNumOfDownVotes;

// let hasVotedUp = false;
// let hasVotedDown = false;

// voteUp.addEventListener("click", () => {
//   if (!hasVotedUp && !hasVotedDown) {
//     numOfUpVotes.textContent = parseInt(numOfUpVotes.textContent) + 1;
//     hasVotedUp = true;
//   } else if (!hasVotedUp && hasVotedDown) {
//     numOfUpVotes.textContent = parseInt(numOfUpVotes.textContent) + 1;
//     numOfDownVotes.textContent = parseInt(numOfDownVotes.textContent) - 1;
//     hasVotedUp = true;
//     hasVotedDown = false;
//   }
// });

// voteDown.addEventListener("click", () => {
//   if (!hasVotedUp && !hasVotedDown) {
//     numOfDownVotes.textContent = parseInt(numOfDownVotes.textContent) + 1;
//     hasVotedDown = true;
//   } else if (!hasVotedDown && hasVotedUp) {
//     numOfUpVotes.textContent = parseInt(numOfUpVotes.textContent) - 1;
//     numOfDownVotes.textContent = parseInt(numOfDownVotes.textContent) + 1;
//     hasVotedDown = true;
//     hasVotedUp = false;
//   }
// });

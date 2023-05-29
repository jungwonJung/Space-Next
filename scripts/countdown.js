import { getData } from "./getData.js";
import { displayMap } from "./getLocation.js";

const countdown = document.getElementById("countdown");
const infoBox = document.getElementById("info-box");

async function countDown() {
  const { missonName, vehicleName, sort_date, launchDescription } =
    await getData();

  const currentUnixTime = Date.now() / 1000; // get now time with unix time stamp

  let comparedTime = Infinity; // compared Time now with next schdule time

  const unixTimestamp = Number(sort_date); // for example 1600002341
  const diff = unixTimestamp - currentUnixTime; //  for example unixTimestamp = 24  currentTimeUnix = 21

  // try find most closest time schedule
  comparedTime = diff;

  if (comparedTime !== Infinity) {
    const days = String(Math.floor(comparedTime / (24 * 60 * 60))).padStart(
      2,
      "0"
    );
    const hours = String(
      Math.floor((comparedTime % (24 * 60 * 60)) / (60 * 60))
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((comparedTime % (60 * 60)) / 60)
    ).padStart(2, "0");
    const seconds = String(Math.floor(comparedTime % 60)).padStart(2, "0");

    countdown.innerHTML = `<div class="separateTime"><p class="timeChange">${days}:</p> <p class="times">Day(s)</p></div>
    <div class="separateTime"><p class="timeChange">${hours}:</p> <p class="times">Hour(s)</p></div>
    <div class="separateTime"><p class="timeChange">${minutes}:</p> <p class="times">Minute(s)</p></div>
    <div class="separateTime"><p class="timeChange">${seconds}</p> <p class="times">Second(s)</p></div>`;

    infoBox.innerHTML = `
      <p><b style="color:#0AC6FF;">Mission:</b> ${missonName}</p><br>
      <p><b style="color:#0AC6FF;">Rocket:</b> ${vehicleName}</p><br>
      <p><b style="color:#0AC6FF;"> Description:</b> ${launchDescription} </p>
    `;
  } else {
    countdown.innerHTML = "No upcoming events found";
  }
}

window.onload = () => {
  countDown();
  displayMap();
  setInterval(countDown, 1000);
};

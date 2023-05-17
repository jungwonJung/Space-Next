const API_URL = "https://fdo.rocketlaunch.live/json/launches/next/5";
const countdown = document.getElementById("countdown");

let nextScheduleDatas = {
  sort_date: 0,
  vehicleName: "",
  missonName: "",
  launchDescription: "",
  country: "",
  location: "",
  state: "",
};

async function getData() {
  // rest API get post update delete
  try {
    const response = await fetch(API_URL);
    if (response.status === 200) {
      const data = await response.json();
      const findData = data.result.find(
        (item) => item.provider.name === "SpaceX"
      );
      nextScheduleDatas.sort_date = findData.sort_date;
      nextScheduleDatas.vehicleName = findData.vehicle.name;
      nextScheduleDatas.missonName = findData.name;
      nextScheduleDatas.launchDescription = findData.launch_description;
      nextScheduleDatas.country = findData.pad.location.country;
      nextScheduleDatas.location = findData.pad.location.name;
      nextScheduleDatas.state = findData.pad.location.state;
      return nextScheduleDatas;
    } else {
      throw new Error("404");
    }
  } catch (error) {
    console.error(error);
  }
}

async function countDown() {
  const {
    missonName,
    vehicleName,
    country,
    state,
    location,
    launchDescription,
  } = await getData();

  const currentUnixTime = Date.now() / 1000; // get now time with unix time stamp

  let comparedTime = Infinity; // compared Time now with next schdule time

  const unixTimestamp = Number(nextScheduleDatas.sort_date); // for example 1600002341
  const diff = unixTimestamp - currentUnixTime; //  for example unixTimestamp = 24  currentTimeUnix = 21

  // try find most closest time schedule
  comparedTime = diff;

  if (comparedTime !== Infinity) {
    const days = Math.floor(comparedTime / (24 * 60 * 60));
    const hours = Math.floor((comparedTime % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((comparedTime % (60 * 60)) / 60);
    const seconds = Math.floor(comparedTime % 60);
    countdown.innerHTML = `
    Next event </br> 
    Mission Name: ${missonName}} </br> 
    Vehicle Name: ${vehicleName} </br>
    Country: ${country} </br>
    State: ${state} </br>
    Location: ${location} </br>
    Description: ${launchDescription} </br>
    ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds
  `;
  } else {
    countdown.innerHTML = "No upcoming events found";
  }
}

window.onload = () => {
  countDown();
  // setInterval(countDown, 1000);
};

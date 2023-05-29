import { getData } from "./getData.js";
const data = await getData();

const API_BING =
  "AlwdnW7MMtPdYqpELeL8RZhaTO_Q_sLaonj958GFtex5jqKeHuVWg-n3dinIfBsN";

async function getLocation() {
  // fetch basic data for upcoming SpaceX launch from rocketlaunch PPI

  const locationOfLaunch = data.location;
  const { state, country } = data;

  // Display Rocket Info in div next to map

  const mapInfo = document.querySelector(".map-info");
  mapInfo.innerHTML = `
    <p>Country: <span class="launch-detail">${country}<br>
    <p>State: <span class="launch-detail">${state}<br>
    <p>Launch Pad: <span class="launch-detail">${locationOfLaunch}<br>`;

  // Determine coordinates from one of four possible facilities where rocket can be launched

  let coordinates = [];

  if (locationOfLaunch.toLowerCase().includes("vandenberg")) {
    coordinates = [34.74822601041721, -120.57115951808824];
  } else if (locationOfLaunch.toLowerCase().includes("canaveral")) {
    coordinates = [28.48881372110607, -80.57280264767809];
  } else if (locationOfLaunch.toLowerCase().includes("kennedy")) {
    coordinates = [28.627470055861785, -80.62079108999897];
  } else if (locationOfLaunch.toLowerCase().includes("texas")) {
    coordinates = [25.997489955299834, -97.15726721895248];
  }

  return coordinates;
}

function getMap(lon, lat, name) {
  let map = new Microsoft.Maps.Map("#myMap", {
    credentials: API_BING,
    mapTypeId: Microsoft.Maps.MapTypeId.canvasDark,
    supportedMapTypes: [
      Microsoft.Maps.MapTypeId.road,
      Microsoft.Maps.MapTypeId.aerial,
      Microsoft.Maps.MapTypeId.canvasDark,
    ],
    center: new Microsoft.Maps.Location(lon, lat),
  });

  let center = map.getCenter();

  //Create custom Pushpin
  let pin = new Microsoft.Maps.Pushpin(center, {
    title: name,
    color: "#0ac6ff",
    // subTitle: 'City Center',
    // text: '1'
  });

  //Add the pushpin to the map
  map.entities.push(pin);
}

export async function displayMap() {
  const [lon, lat] = await getLocation();
  getMap(lon, lat, data.location);
}

export default displayMap;

const API_BING = "AlwdnW7MMtPdYqpELeL8RZhaTO_Q_sLaonj958GFtex5jqKeHuVWg-n3dinIfBsN";
let isUpcomingLaunchDisplayed = false;

async function getLocation() {
  
  // fetch basic data for upcoming SpaceX launch from rocketlaunch PPI

  const rocketLaunchPromise = await fetch("https://fdo.rocketlaunch.live/json/launches/next/5");
  const rocketLaunchData = await rocketLaunchPromise.json();
  let nextSpaceXLaunch = rocketLaunchData.result.find(launch => launch.provider.name === "SpaceX");
  let locationOfLaunch = nextSpaceXLaunch.pad.location.name;
  
  // Display Rocket Info in div next to map

  const mapInfo = document.querySelector(".map-info");
  const {name, state, country} = nextSpaceXLaunch.pad.location;
  mapInfo.innerHTML = `
    <p>Country: <span class="launch-detail">${country}<br>
    <p>State: <span class="launch-detail">${state}<br>
    <p>Launch Pad: <span class="launch-detail">${name}<br>`
  
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

  const [lon, lat] = coordinates;
  GetMap(lon, lat, locationOfLaunch)
}

function GetMap(lon, lat, name) {
  
  if(isUpcomingLaunchDisplayed === false) {
    getLocation();
    isUpcomingLaunchDisplayed = true;
    return;
  }
   
    let map = new Microsoft.Maps.Map('#myMap', {
      credentials: API_BING,
      mapTypeId: Microsoft.Maps.MapTypeId.canvasDark,
    supportedMapTypes: [Microsoft.Maps.MapTypeId.road, Microsoft.Maps.MapTypeId.aerial, Microsoft.Maps.MapTypeId.canvasDark],
      center: new Microsoft.Maps.Location(lon, lat)
  });



  let center = map.getCenter();

  //Create custom Pushpin
  let pin = new Microsoft.Maps.Pushpin(center, {
      title: name,
      color: '#0ac6ff'
      // subTitle: 'City Center',
      // text: '1'
  });

  //Add the pushpin to the map
  map.entities.push(pin);

   }


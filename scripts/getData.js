const API_URL = "https://fdo.rocketlaunch.live/json/launches/next/5";

let nextScheduleDatas = {
  sort_date: 0,
  vehicleName: "",
  missonName: "",
  launchDescription: "",
  country: "",
  location: "",
  state: "",
};

export async function getData() {
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

export default getData;

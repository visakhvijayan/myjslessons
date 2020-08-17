/*
function showDevice(device: { id: number; name: string }) {
  console.log(device);
}

let myDevice = { id: 123, name: "Visakh's device" };
showDevice(myDevice);
*/

// The above code to interface
interface Device {
  id: number;
  name: string;
}

function showDevice(device: Device) {
  console.log(device);
}
let myDevice = { id: 123, name: "Visakh's device" };
showDevice(myDevice);

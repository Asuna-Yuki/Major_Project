const spawner = require("child_process").spawn;

// string
// const data = "data to go in python";

// json
const test = [20, 59, 60, 28, 70.3, 7.0, 150.9];

console.log("data send to python: ", JSON.stringify(test));

const python_process = spawner("python", [
  "../../backend/sendData.py",
  JSON.stringify(test),
]);

python_process.stdout.on("data", (data) => {
  console.log("Data recived from python: ", JSON.parse(data.toString()));
});

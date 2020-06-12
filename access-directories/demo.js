var fs = require("fs");

fs.readdir("c:/", (err, data) => {
  console.log(data);
});

var data = {
  name: "saurav",
};

fs.writeFile("data.json", JSON.stringify(data), (err) => {
  if (err) {
    return console.log(err);
  } else {
    console.log("Hello World > helloword.txt");
  }
});

// fs.writeFile("data.json", "Hello World", (err) => {
//   if (err) {
//     return console.log(err);
//   } else {
//     console.log("Hello World > helloword.txt");
//   }
// });

const fs = require("fs");
const path = require("path");
const users = require("../Data/dataUsers.json");
const { v4: uuidv4 } = require("uuid");
const { resolve } = require("path");
const { rejects } = require("assert");

async function writeUserData(data) {
  try {
    users.push(data);
    await fs.writeFile(
      path.join("./", "Data", "dataUsers.json"),
      JSON.stringify(users),
      "utf8",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          return true;
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}

async function registerUser(req, res) {
  //collect info
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", async () => {
    const list = body.split("&");

    let bodys = {
      username: list[0].split("=")[1],
      firstname: list[1].split("=")[1],
      lastname: list[2].split("=")[1],
      email: list[3].split("=")[1],
      password: list[4].split("=")[1],
      confirm: list[5].split("=")[1],
    };

    const { firstname, lastname, username, email, password, confirm } = bodys;

    if (confirm === password) {
      //new user object
      const newUser = {
        id: uuidv4(),
        firstname,
        lastname,
        username,
        email,
        password,
      };

      if (writeUserData(newUser)) {
        res.writeHead(201, { "Content-Type": "application/json" });
        await res.end(JSON.stringify(newUser));
      }
    }
  });
}

function getUsers() {
  return users;
}

function registerationpage(res) {
  try {
    fs.readFile(path.join("./", "public", "registerpage.html"), (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  registerUser,
  getUsers,
  registerationpage,
};

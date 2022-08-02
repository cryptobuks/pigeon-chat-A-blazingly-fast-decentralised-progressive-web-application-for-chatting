//order of imports is important
import GUN from "gun";
import "gun/sea";

let peers = [
  // "https://www.raygun.live/gun",
  // "https://gunmeetingserver.herokuapp.com/gun",
  // "https://gun-us.herokuapp.com/gun",
  // "https://gun-eu.herokuapp.com/gun",
  "http://localhost:3000/gun",
];

const initializeDB = () =>
  new GUN({
    peers,
  });

export default initializeDB;

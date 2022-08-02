import { useEffect, useState } from "react";

import GUN from "gun";
import "gun/sea";
import "gun/axe";

import { peers, defaultChatRoomName } from "./gunConfig.js";

const useGunDB = () => {
  const [dbRef, setDBRef] = useState(null);
  const [userDBRef, setUserDBRef] = useState(null);
  const [chatDBRef, setChatDBRef] = useState(null);

  //initialise DBs
  useEffect(() => {
    if (dbRef === null) {
      // setDBRef(new GUN({ peers }));
      setDBRef(new GUN());
    }
  }, []);

  //tasks to do once GUN is initialized
  useEffect(() => {
    if (dbRef !== null && (userDBRef === null || chatDBRef === null)) {
      setUserDBRef(dbRef.user().recall({ sessionStorage: true }));
      setChatDBRef(dbRef.get(defaultChatRoomName)); //initialize an empty array
    }
  }, [dbRef]);

  return {
    dbRef,
    userDBRef,
    chatDBRef,
  };
};

export default useGunDB;

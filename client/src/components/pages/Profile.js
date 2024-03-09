import React, { useState, useEffect } from "react";
import CatHappiness from "../modules/CatHappiness.js";
import "../../utilities.css";
import "./Profile.css";
import Map from "../modules/Map.js";
const Profile = () => {
  const [catHappiness, setCatHappiness] = useState(0);

  useEffect(() => {
    document.title = "Profile Page";
  }, []);

  const incrementCatHappiness = () => {
    setCatHappiness(catHappiness + 1);
  };

  return (
    <div>
      <Map/>
    </div>
  );
};

export default Profile;

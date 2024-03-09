import React from "react";

import "./Map.css";

import Text from "./Text.js";
/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const Map = () => {
  return (
    <div>
        <div className="bbb" >
          <Text posx={540} posy={840} width={120} height={50} contain={"五教的说明"}/>
          <Text posx={330} posy={730} width={110} height={70} contain={"一教的说明"}/>
          
          <Text posx={450} posy={620} width={90} height={70} contain={"食堂的说明"}/>
          
          <Text posx={130} posy={810} width={110} height={40} contain={"隧道的说明"}/>
        </div>
    </div>
  );
};

export default Map;

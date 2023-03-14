import React, { useEffect } from "react";
import { connect } from "react-redux";
import Appnav from "../components/Appnav";


const Layout = (props) => {
  
  return(
    <div>
      <Appnav/>
      {props.children}

    </div>
);
}
export default Layout;
import React from "react";
import { withApp } from "containers";

const Home = () => {
  return <h1>Fucking Finally mate</h1>;
};

export default Home;
export const ConnectedHome = withApp(Home);

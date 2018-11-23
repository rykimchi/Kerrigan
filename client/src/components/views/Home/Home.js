import React from "react";
import Header from 'atoms/Header';
import { withApp } from "containers/App";

const Home = () => {
  return (
      <Header></Header>
  );
};

export default Home;
export const ConnectedHome = withApp(Home);
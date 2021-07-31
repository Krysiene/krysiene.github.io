import React from "react";
import "./index.css";

function Home(props: { homeRef: React.RefObject<HTMLDivElement> }) {
  return (
    <div className="home" ref={ props.homeRef }>
      <div className="middle-horizontal-container">
        <h1>Hi, I'm Chris.</h1>
        <h2>A software engineer.</h2>
      </div>
    </div>
  );
}

export default Home;

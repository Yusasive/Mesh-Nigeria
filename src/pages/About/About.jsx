import React from "react";
import Who from "./Who";
import Mission from "./Mission";

const About = () => {
  return (
    <div>
      <div className="mt-20 lg:mt-24">
        <h1 className="font-bold text-secondary text-3xl lg:text-5xl text-center py-6">WHO WE ARE</h1>
      </div>
      <Who />
      <Mission />
    </div>
  );
};

export default About;

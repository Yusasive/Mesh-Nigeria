import React, { useRef } from "react";
import CountUp from "react-countup";
import { FaSchool } from "react-icons/fa";
import { FaHeartCircleCheck, FaPersonCircleXmark } from "react-icons/fa6";

const NumberCounter = () => {
  const educationRef = useRef(null);
  const socialRef = useRef(null);
  const healthRef = useRef(null);

  return (
    <div className="bg-secondary text-white py-8">
      <div>
        <h1 className="text-4xl text-center font-semibold py-4">Persons Touched</h1>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center justify-center" ref={educationRef}>
          <p className="text-3xl font-semibold">
            <CountUp
              start={0}
              end={980}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              onStart={() => console.log('Education count started')}
            />
          </p>
          <p className="flex flex-row">
            <span className="mr-1">
              <FaSchool />
            </span>
            Education
          </p>
        </div>
        <div className="flex flex-col items-center justify-center" ref={socialRef}>
          <p className="text-3xl font-semibold">
            <CountUp
              end={5860}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              onStart={() => console.log('Social count started')}
            />
          </p>
          <p className="flex flex-row">
            <span className="mr-1">
              <FaPersonCircleXmark />
            </span>
            Social
          </p>
        </div>
        <div className="flex flex-col items-center justify-center" ref={healthRef}>
          <p className="text-3xl font-semibold">
            <CountUp
              end={390}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              onStart={() => console.log('Health count started')}
            />
          </p>
          <p className="flex flex-row">
            <span className="mr-1">
              <FaHeartCircleCheck />
            </span>
            Health
          </p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;

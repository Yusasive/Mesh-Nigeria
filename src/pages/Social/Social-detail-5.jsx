import React from "react";

const SocialDetails5 = () => {
  return (
    <div className="px-4 lg:px-8 mt-20 py-12 space-y-5">
      <h1 className="text-center text-2xl lg:text-4xl font-bold text-secondary">
        SOCIAL INTERVENTION
      </h1>
      <p className="text-xl font-semibold text-justify text-secondary">
        Sensitization of Commercial Drivers on Drug Abuse in 6 motor parks in
        FCT, Abuja
      </p>
      <span>
        <img
          className="mx-auto h-80 w-96"
          src="https://www.meshnigeria.org/wp-content/uploads/2022/02/Sensitization-against-drug-02-546-by-720.jpg"
          alt="MESH Nigeria"
        />
      </span>
      <p className="text-lg font-normal text-justify">
        As part of its social program, MESH organized a drug abuse sensitization
        to commercial motor drivers in 6 motor parks in Abuja namely Jabi, Karu,
        Nyanya, Maraba 1 &2, and New Nyanya from May 2018 through July 2018. The
        sensitization is to create awareness about drug abuse and its effects on
        the users and other members of the society. It is also to change the
        mindset of the drivers about drugs and to live positive lives. Stickers
        were prepared by MESH and professionally printed as IEC materials on
        drug abuse.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <span>
          <img
            src="https://www.meshnigeria.org/wp-content/uploads/2022/03/Sensitization-against-drug-400by-313.jpg"
            alt="MESH Nigeria"
          />
        </span>
        <span>
          <img
            src="https://www.meshnigeria.org/wp-content/uploads/2022/03/Sensitization-against-drug-400-by-313.jpg"
            alt="MESH Nigeria"
          />
        </span>
        <span>
          <img
            src="https://www.meshnigeria.org/wp-content/uploads/2022/03/Sensitization-against-drug-398-by-312.jpg"
            alt="MESH Nigeria"
          />
        </span>
        <span>
          <img
            src="https://www.meshnigeria.org/wp-content/uploads/2022/03/Sensitization-against-drug-422-by-304.jpg"
            alt="MESH Nigeria"
          />
        </span>
      </div>
      <p className="text-lg text-primary font-semibold text-center">
        Participants from different locations
      </p>
    </div>
  );
};

export default SocialDetails5;

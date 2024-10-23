import React from "react";
import { motion } from "framer-motion";

const Education = () => {

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="space-y-5 py-12 mt-12 lg:mt-20 px-4 lg:px-8">
      <motion.h1
        className="text-3xl lg:text-5xl text-center text-blue-900 font-bold"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        SUPPORT TO SCHOOLS
      </motion.h1>

      <div className="space-y-3">
        <motion.p
          className="text-lg font-semibold text-justify"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          Provision of School Uniforms to IDPs at Durumi, Abuja
        </motion.p>

        <motion.p
          className="text-base font-normal text-justify"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          The Internal Displaced Persons (IDPs) are part of the target group of
          MESH, because they constitute part of the less privileged in the
          society. In November 2017, MESH designed and donated school uniforms
          for all the pupils of IDP Primary School, Durumi, Abuja. The objective
          of the project was to increase the enrolment and retention of the IDP
          school pupils. A total of{" "}
          <span className="text-primary font-semibold">213 uniforms</span> were
          donated to the school pupils (boys and girls) of the IDP camp. MESH
          also provided uniform ‘hijabs’ to the girls.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {[
            {
              src: "https://www.meshnigeria.org/wp-content/uploads/2022/02/School-Uniform-Sample-02-408-by-306-400x284.jpg",
              alt: "Females Students with Hijabs",
            },
            {
              src: "https://www.meshnigeria.org/wp-content/uploads/2022/02/School-Uniform-Presentation-02-448-by-292-400x284.jpg",
              alt: "Group Photo with Students",
            },
            {
              src: "https://www.meshnigeria.org/wp-content/uploads/2022/02/School-Uniform-Male-Sample-05-400-by-302-400x284.jpg",
              alt: "School Badge Sample",
            },
            {
              src: "https://www.meshnigeria.org/wp-content/uploads/2022/02/School-barge-01-468-by-408-400x284.jpg",
              alt: "School Uniform Male Sample",
            },
            {
              src: "https://www.meshnigeria.org/wp-content/uploads/2022/02/Group-Photo-with-Students-02-458-by330-400x284.jpg",
              alt: "School Uniform Presentation",
            },
            {
              src: "https://www.meshnigeria.org/wp-content/uploads/2022/02/School-Uniform-Sample-02-408-by-306-400x284.jpg",
              alt: "Female School Uniform Sample",
            },
          ].map((image, index) => (
            <motion.span
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
            >
              <img className="rounded-lg" src={image.src} alt={image.alt} />
              <p className="text-lg font-semibold text-center text-secondary">
                {image.alt}
              </p>
            </motion.span>
          ))}
        </div>
      </div>

      {/* Second Section */}
      <div className="space-y-3">
        <motion.p
          className="text-lg font-semibold text-justify"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          Provision of assistance to two Nomadic Schools
        </motion.p>
        <motion.p
          className="text-base font-normal text-justify"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          In March 2018, MESH assisted an L.E.A. Nomadic School in Apo Dutse by
          renovating a one-classroom building for the pre-nursery pupils.
          Similarly, a 3-classroom school building was constructed for a Nomadic
          community school in Anguwar Fulani, Lugbe, FCT.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 gap-6 py-10"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <img
            className="rounded-lg mx-auto"
            src="https://www.meshnigeria.org/wp-content/uploads/2022/02/Renovatio-of-Nomadic-Classrooms-in-Apo-Dutse-Abuja.jpg"
            alt="MESH Nigeria"
          />
        </motion.div>
      </div>

      {/* Third Section */}
      <div className="space-y-3">
        <motion.p
          className="text-lg font-semibold text-justify"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          Equipping Nomadic School with Desks and Chairs
        </motion.p>
        <motion.p
          className="text-base font-normal text-justify"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          One of the projects implemented by MESH was the construction of a
          3-classroom building for the Nomadic school in Angwan Fulani community
          in Lugbe, Abuja. The project was initiated by IbnRaji Educational
          Foundation who sought the assistance of MESH. Having conducted the
          ‘needs assessment’ of the school, a 3-classroom building was
          constructed for the school in March 2018. In addition to the support
          for building construction, MESH supplied 50 wooden desks and 50
          benches to the school in April 2018 and labelled them as being
          donations from Nigerian Supreme Council for Islamic Affairs (NSCIA).
        </motion.p>
        <motion.div
          className="grid grid-cols-1 gap-6 py-10 justify-center align-middle"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <img
            className="rounded-lg mx-auto"
            src="https://www.meshnigeria.org/wp-content/uploads/2022/02/Renovation-003a.jpg"
            alt="MESH Nigeria"
          />
          <img
            className="rounded-lg mx-auto"
            src="https://www.meshnigeria.org/wp-content/uploads/2022/02/Donation-of-3-classrooms-and-handing-over.jpg"
            alt="MESH Nigeria"
          />
        </motion.div>
      </div>

      {/* Fourth Section */}
      <div className="space-y-3">
        <motion.p
          className="text-lg font-semibold text-justify"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          Renovation of Almajiri School in Mararaba, Nasarawa State
        </motion.p>
        <motion.p
          className="text-base font-normal text-justify"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          In July 2019, MESH raised funds for an Almajiri school building where
          at least 65 young boys-‘almajiris sleep. The school is in Unguwan
          Katsinawa, Mararaba, Nasarawa State. The renovation included fixing
          the roof and amending the cement floor of one small room.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 justify-center align-middle"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <span>
            <img
              className="rounded-lg mx-auto"
              src="https://www.meshnigeria.org/wp-content/uploads/2022/03/Roofing-of-Almajiri-School-1b-554-344.jpg"
              alt="MESH Nigeria"
            />
            <p className="text-lg font-semibold text-center text-secondary">
              State of roof before and after repairs
            </p>
          </span>
          <span>
            <img
              className="rounded-lg mx-auto"
              src="https://www.meshnigeria.org/wp-content/uploads/2022/03/Roofing-Almajiri-School-in-Mararaba.jpg"
              alt="MESH Nigeria"
            />
            <p className="text-lg font-semibold text-center text-secondary">
              State of floor before and after repairs
            </p>
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;

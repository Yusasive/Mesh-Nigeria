import React from "react";
import { motion } from "framer-motion";
import brochure from "../../assets/documents/MESH-BROCHURE.pdf";

const containerVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BlogDetails2 = () => {
  return (
    <motion.div
      className="px-4 lg:px-8 mt-20 py-12 space-y-10"
      initial="hidden"
      animate="visible"
      variants={containerVariant}>
      <div className="md:px-40">
        <a
          href={brochure}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl lg:text-3xl text-secondary font-semibold hover:text-blue-500">
          Download the Brochure of MESH Here
        </a>
      </div>
      <motion.div variants={containerVariant}>
        <h1 className="text text-center text-2xl lg:text-5xl font-bold text-primary">
          Brief Report of MESH Projects Implemented
        </h1>
      </motion.div>
      <motion.div variants={containerVariant} className="space-y-5">
        <img
          className="md:mx-auto"
          src="https://www.meshnigeria.org/wp-content/uploads/2022/02/004Edited.jpg"
          alt="Mesh Nigeria"
        />
        <p className="text-lg font-semibold text-justify">
          1. Marriage Counseling
        </p>
        <p className="text-base font-normal text-justify">
          MESH implemented a project Marriage Counseling Seminar on Marriage
          Education and Better Parenting. The objective of the marriage
          counseling was for people to understand the essence of marriage and
          the factors that can influence marriage stability. The major goal is
          for the populace to understand that marriages need some efforts for
          their stability and to avoid the consequences of divorce as much as
          possible. Specifically, participants were expected to learn how to
          keep their marriages or how to manage the behavior of spouses in
          addition to learning parenting styles.
        </p>
        <p className="text-base font-normal text-justify">
          The resource persons for the seminars were Dr. AbdufattahAdeyemi of
          Baynakum Family Centre who counselled on marriages while Madam Ruth
          Haruna and Mrs Opeyemi Elijah of 4 Chidren counseled on
          parenting/child management. A total number of 277 benefited from the
          seminars within 3 months.
        </p>
      </motion.div>
      <motion.div variants={containerVariant} className="space-y-5">
        <p className="text-lg font-semibold text-justify">
          2. Life-skills Training for the Deaf Community
        </p>
        <img
          className="md:mx-auto"
          src="https://www.meshnigeria.org/wp-content/uploads/2022/02/013_CROPPED-FROM-FACEBOOK.jpg"
          alt="Mesh Nigeria"
        />
        <p className="text-lg font-semibold text-justify">
          There were <strong>five (5)</strong> life-skills trainings for
          different Deaf groups.
        </p>
        <p className="text-base font-normal text-justify">
          1. The first training was organized on
          <strong>5th of August 2017 for both men and women deaf people</strong>
          while the second training was also held in Abuja on 22nd August 2017
          and it was mainly for deaf women. Both trainings were on the skills
          for surviving the challenges of life. The objective of the trainings
          was to provide skills about life that could make living a lot easier
          for people by especially working on mindset. At both training events,
          there were video clips on causes of deafness, its symptoms, deafness
          management and deaf daily activities. There were also power-point
          presentations on sex education, marriage counseling and parenting in
          deaf families. A total number of 192 deaf attended the trainings.
        </p>
        <p className="text-base font-normal text-justify">
          2. MESH held a 2-day training for the Muslim Deaf in Ilorin on 4th and
          5th of October 2017. A total of ninety (90) participants attended the
          training. The objective of the training was to teach the deaf about
          survival strategy and coping with life challenges.
        </p>
        <p className="text-base font-normal text-justify">
          ▪ On the 6th and 7th of December, 2017 MESH organized a similar
          training at the ETF Education Resource Centre, Station Dukku in Gombe.
          There were 130 participants some dignitaries such as the National
          President for the deaf in Nigeria, MallamIshiakuAdamu and the Gombe
          State chapter of Joint Association of Person Living with Disability
          (JONAPWD) that was represented by Hon Aligoro.
        </p>
        <p className="text-base font-normal text-justify">
          The last training was held in Lafia on 1st and 2nd February 2018. It
          was also for the deaf community in Nasarawa State. There were 60
          students mobilized from the Secondary School for Special Needs
          Education and 46 non-students in the training. The Special Adviser to
          the Governor on Gender and Disability Matters, Dr. (Hon)
          HajaratDanyaro Ibrahim, gave a goodwill message and formally opened
          the training. Soon after the training, a proposal was prepared on
          behalf of the Nasarawa State Deaf Association and submitted to the
          Nasarawa Government with the hope of getting funds to organize more
          training in the State, offer vocational training and increase access
          to healthcare information by engaging sign interpreters at the
          government health facilities.
        </p>
        <p className="text-lg font-semibold text-justify">
          3. Provision of School Uniforms to IDP Primary Schools
        </p>
        <p className="text-base font-normal text-justify">
          The Internal Displaced Persons (IDPs) are part of the target group of
          MESH, because they constitute part of the less privileged in the
          society.s
        </p>
        <img
          className="md:mx-auto"
          src="https://www.meshnigeria.org/wp-content/uploads/2022/02/024_CROPPED-FROM-FACEBOOK.jpg"
          alt="Mesh Nigeria"
        />
        <p className="text-base font-normal text-justify">
          In November 2017, MESH designed and donated school uniforms for all
          the pupils of IDP Primary School, Durumi, Abuja. The objective of the
          project was to increase the enrolment and retention of the IDP school
          pupils. A total of 213 uniforms were donated to the school pupils
          (boys and girls) of the IDP camp. MESH also provided uniform ‘hijabs’
          to the girls.
        </p>
        <p className="text-lg font-semibold text-justify">
          4. Provision of Assistance to Two Nomadic Schools
        </p>
        <p>
          In March 2018, MESH assisted an L.E.A. Nomadic School in Apo Dutse by
          renovating a one-classroom building for the pre-nursery pupils.
          Similarly, a 3-classroom school building was constructed for a Nomadic
          community school in Anguwar Fulani, Lugbe, FCT.
        </p>
        <p className="text-lg font-semibold text-justify">
          5. Equipping Nomadic School with Desks and Chairs
        </p>
        <p className="text-base font-normal text-justify">
          One of the projects implemented by MESH was the construction of a
          3-classroom building for the Nomadic school in Angwan Fulani community
          in Lugbe, Abuja. The project was initiated by IbnRaji Educational
          Foundation who sought the assistance of MESH.
        </p>
      </motion.div>
      <motion.div
        variants={containerVariant}
        className="flex flex-col md:flex-row justify-evenly">
        <div>
          <img
            src="https://www.meshnigeria.org/wp-content/uploads/2022/02/006Edited.jpg"
            alt="Mesh Nigeria"
          />
          <p className="text-base font-semibold">
            Before Donation of three classrooms for Nomadic Community
          </p>
        </div>
        <div>
          <img
            src="https://www.meshnigeria.org/wp-content/uploads/2022/02/007Edited.jpg"
            alt="Mesh Nigeria"
          />
          <p className="text-base font-semibold">
            After Donation of three classrooms for Nomadic Community
          </p>
        </div>
      </motion.div>
      <motion.div variants={containerVariant} className="space-y-5">
        <p className="text-base font-normal text-justify">
          Having conducted the ‘needs assessment’ of the school, a 3-classroom
          building was constructed for the school in March 2018. In addition to
          the support for building construction, MESH supplied 50 wooden desks
          and 50 benches to the school in April 2018 and labelled them as being
          donations from Nigerian Supreme Council for Islamic Affairs
          (NSCIA).The handing-over ceremony was held on 22ndJune 2018. This was
          to commission the building and officially hand over the school to
          IbnRaji Educational Foundation who in turn hands over to the Nomadic
          community. The commissioning was done by HajiaHalimahJubril, the
          National Amirah of FOMWAN. She represented the NSCIA. The program was
          attended by the Chairman and officials of IbnRaji Educational
          Foundation, MESH officials, the community and the pupils
        </p>
        <p className="text-lg font-semibold text-justify">
          6. Sensitization of Commercial Drivers on Drug Abuse in 6 motor
          parksin FCT, Abujas
        </p>
        <p className="text-base font-normal text-justify">
          As part of its social program, MESH organized a drug abuse
          sensitization to commercial motor drivers in 6 motor parks in Abuja
          namely Jabi, Karu, Nyanya, Maraba 1 &2, and New Nyanya from May 2018
          through July 2018. The sensitization is to create awareness about drug
          abuse and its effects on the users and other members of the society.
          It is also to change the mindset of the drivers about drugs and to
          live positive lives. Stickers were prepared by MESH and professionally
          printed as IEC materials on drug abuse.
        </p>
        <p className="text-lg font-semibold text-justify">
          7. Marriage Education Project in Adamawa, Kano, Niger, Sokoto and Osun
          States
        </p>
        <p className="text-base font-normal text-justify">
          The Project “Mitigating the Problems of Marriage Instability and
          Divorce in Nigeria” is collaboration between Future Assured Initiative
          and Nigerian Supreme Council for Islamic Affairs (NSCIA). The project
          kicks start on the 10th of September 2018. MESH as an implementing
          entity of NSCIA has implemented the project through Marriage Education
          seminars in Adamawa, Kano, Niger, Sokoto and Osun States. The project
          is aimed at bringing Marriage Education information to the community
          to improve and strengthen our marriages and reduce the increasing
          social menace of divorce in the society.
        </p>
        <p className="text-lg font-semibold text-justify">
          8. Marriage Counseling Project Flag Off
        </p>
        <p className="text-base font-normal text-justify">
          Following the successful implementation of the marriage education
          project in 5 states in Nigeria, Future Assured Initiative, the NGO of
          the First Lady of the Federal Republic of Nigeria Hajia Aisha
          Muhammadu Buhari and the Nigerian Supreme Council for Islamic Affairs
          (NSCIA) through its NGO Mission for Education, Social and Health
          (MESH) conceived the idea to bring all concerned stakeholders together
          to discuss the way forward towards repositioning and reducing the
          increased divorce within the Muslim family.
        </p>
        <p className="text-base font-normal text-justify">
          Thus, a National Conference on Marriage and Alamajiri Scourge was
          organised on the theme ‘Repositioning the Muslim Family towards
          National Development’. The National Conference was used as an avenue
          to bring all stakeholders together to discuss the high rate of Divorce
          in the country and Almaijiri especially in Northern Nigeria.
        </p>
        <p>9. Renovation of Almajiri School in Mararaba, Nasarawa State</p>
        <p className="text-base font-normal text-justify">
          In July 2019, the fundraiser Consultant, Amrah Integrated Services
          Limited delivered 375,000 Naira to MESH as the fund raised within the
          one-year contractual year, after deducting its 25% commission. MESH
          expended the money for Almajiri School building where at least 65
          young boys-‘almajiris sleep. The school is in Unguwan Katsinawa,
          Mararaba, Nasarawa State. The total money was spent for replacement of
          their leaking roof, reconstruction of a small room containing 30
          ‘almajiris’ and amending the cement floor of one small room. The
          renovation exercise started from 7th August to 4th of September 2019
          after needs assessment visit of 1st August 2019.
        </p>
        <p className="text-lg font-semibold text-justify">
          10. Donation of Food Items
        </p>
        <p className="text-base font-normal text-justify">
          During the Ramadan of 2019, in the month of May 2019, there was a food
          donation from Ramatu Ibironke Babalakin Foundation to Nigerian Supreme
          Council for Islamic Affairs (NSCIA). As part of its social program,
          MESH donated 20 buckets of the food items (rice, beans, gari, sugar,
          milk and vegetable oil) to Halal Children Ophanage Home in Lugbe and
          Al-Ansaar Homes Ophanage Kuje in Federal Capital City.
        </p>
        <p className="text-lg font-semibold text-justify">
          12. Welfare Palliative by NSCIA
        </p>
        <p className="text-base font-normal text-justify">
          During the Covid-19 lockdown in the country, the Nigerian Supreme
          Council for Islamic Affairs (NSCIA) mobilized fund to provide food
          palliative for about 100 less privilege families within the Federal
          Capital Territory (FCT). The food palliative package consisted 10kg of
          rice, 5k of beans, 5kg of garri, 5kg of semo, salt, sugar, groundnut
          oil and soap. MESH in collaboration with NSCIA distributed the
          palliative in Mpape area of FCT. The food was distributed to disabled
          family, widow and other less privilege families.
        </p>
        <p className="text-lg font-semibold text-justify">
          13. Ramadan Palliative
        </p>
        <p className="text-base font-normal text-justify">
          Ramadan fasting started in April 2020 during the COVID-19 lockdown in
          Nigeria. The effect was devastating on the fasting Muslims in the
          country. Based on this, the NSCIA released fund for Ramadan Food
          Palliative consisting of cooked for ‘iftar’ and raw food. The
          palliative was distributed among some Muslims in the FCT.More than
          5,000 persons were fed with cooked food for ‘Iftar’ and 350 families
          were given raw food which consisted 10kg of rice, 5k of beans, 5kg of
          semo and 5kg of garri. NSCIA and MESH distributed the food in 5
          communities in FCT, which wereCentral Area, Dei-Dei, Kubwa, Lugbe, and
          Nyanya. It was distributed among Muslims through religious leaders and
          Islamic Organizations.
        </p>
        <p className="text-lg font-semibold text-justify">
          14. Medical Outreach in Shetuko Community of FCT.
        </p>
        <p className="text-base font-normal text-justify">
          MESH implemented its first health program tagged Shetuko Medical
          Outreach. The Medical Outreach was organized in collaboration with
          Islamic Medical Association of Nigeria <b>(IMAN)</b> to provide and
          contribute to the improved healthcare of people in Shetuko Community
          of Kuje Area Council in FCT. IMAN is the medical organization under
          the NSCIA which is founded to render and enhance health care service
          delivery by organizing outreach medical services in communities. IMAN
          acquired a building with about 6 rooms in Shetuko community, an old
          rural settlement in Kuje area council, where there is no clinic or
          dispensary to serve the community on medical issues.
        </p>
        <p className="text-base font-normal text-justify">
          The Organisation intends to use the building as health care facility
          to provide health care services to the residents. It therefore
          submitted a Medical Outreach request for funding to MESH. After
          critical analysis of the request and needs assessment to the
          community, MESH approved the proposal and wrote for the release of the
          fund to implement the project in March 2020. The program was postponed
          due to COVID-19 lockdown in the country.
        </p>
        <p className="text-base font-normal text-justify">
          The project provided fund for medical fixed assets in the building
          such as Glucometre, Adult weighing scale, Sphygomomanometer, Infrared
          thermometer, Examination couch, plastic chairs and tables, drugs and
          consumables, designed medical stationery and allowances to medical
          volunteers. The first outreach was held on the 28thSeptember, 2020.
          More than 700 beneficiaries including children and aging people have
          benefitted from the outreach. Medical personnel such as doctors,
          nurses, pharmacies and lab scientist provided services to the people
          while MESH staff provided financial and logistics support.
        </p>
        <p className="text-lg font-semibold text-justify">
          15. Women Empowerment Initiative (WEI)
        </p>
        <p className="text-base font-normal text-justify">
          Base on partly the lessons learnt on marriage education project
          implemented by MESH in FCT and 6 States, and partly of its efforts to
          elevate the status of Muslim women and reducing their rate of
          dependency on their husbands,MESH initiated a project called 16.
          Council of FCT.
        </p>
        <p className="text-lg font-semibold text-justify">
          16. Women Empowerment Initiative in AMAC, FCT.{" "}
        </p>
        <p className="text-base font-normal text-justify">
          The project was aimed at empowering the Muslim women economically by
          providing revolving loan as start-up capital for small scale
          businesses in their community. The criteria for selecting the
          beneficiaries are jobless, single mothers, widows and physically
          challenged. The target for the project was 100 women, that is, 20
          selected from each of the five (5) communities Azhata, Akanpe, Iddo,
          Kabusa and Garki Dutse in Abuja Municipal Area
        </p>
        <p className="text-lg font-semibold text-justify">
          17. Mapping of Muslim Health Facilities
        </p>
        <p className="text-base font-normal text-justify">
          In September 2020, MESH started the mapping of all Muslim health
          facilities across the country. The purpose of the mapping was to have
          a comprehensive database of Muslim health facilities in Nigeria. The
          data generated will be used to coordinate the responsesto reduce the
          scourge of HIV/AIDS, tuberculosis, malaria and other infectious
          disease in Nigeria. From the responses, a total of 15 Muslim health
          facilities are in existence and are put in the database. There are 8
          facilities in FCT. In addition, Adamawa, Kaduna, Oyo, Sokoto and Kwara
          States have 1 facility each and 2 in Taraba State.
        </p>
        <p className="text-lg font-semibold text-justify">
          18. Medical Outtreach in Abuja National Mosque
        </p>
        <p className="text-lg font-semibold text-justify">
          15 The World AIDS Day
        </p>
        <p className="text-base font-normal text-justify">
          MESH joined other NGOs around the globe to mark the 2021 World AIDS
          Day on Friday, 26th of November 2021. The Muslim Faith-Based
          Organization under the Nigerian Supreme Council for Islamic Affairs
          (NSCIA) commemorated the 2021 World AIDS Day with the theme “End
          Inequalities, End AIDS.” Ten mosques were scheduled for HIV/AIDS
          testing services and five mosques were used due to logistics
          challenges. The testing in FOMWAN and Nyanyan Mosques was carried out
          on the 3rd of December, 2021. NACA and Health and Human Services
          Secretariat department of FCT provided HIV test kits, consumables and
          counselors. The total number of three hundred and thirty five (335)
          persons were tested and all are HIV negative. The report is the Muslim
          block activities were added to the national HIV testing in the country
          as the contribution of the Muslim FBOs in the country. The following
          activities were carried out to mark the day:
        </p>
        <p className="text-base font-normal text-justify">
          ▪ Special Jumah Services and prayers at five different Mosques which
          are; Abuja National Mosque, MSSN Abdulateef Adegbite Jumah Mosque
          Gwarimpa, FOMWAN National Mosque Utako, Ansarudeen Mosque Maitama and
          Nyanya Central Mosque.
        </p>
        <p className="text-base font-normal text-justify">
          ▪ Sensitization talk to create awareness about HIV and other health
          related diseases.
        </p>
        <p className="text-lg font-semibold text-justify">
          Testing and Cancelling of Interested Muslims on HIV/AIDS
        </p>
        <img
          src="https://www.meshnigeria.org/wp-content/uploads/2022/02/Screenshot-of-part-of-report.jpg"
          alt="MESH Nigeria"
        />
      </motion.div>
      <motion.div variants={containerVariant}>
        <h1 className="text-xl text-primary font-semibold mb-2">
          MESH PARTNERS
        </h1>
        <ol className="text-base font-normal list-inside list-decimal space-y-2">
          <li>Baynakum Family Counseling Centre, Abuja</li>
          <li>4Children Nigeria (NGO)</li>
          <li>Fathiu-L-Arifina Islamic Organization (FAISMAT)</li>
          <li>IbnRaji Educational Foundation</li>
          <li>FOMWAN in Adamawa, Niger States, Sokoto and Osun States</li>
          <li>A1 Family Counseling Centre, Kano</li>
          <li>Future Assured Initiative, Abuja</li>
          <li>CCM Nigeria</li>
          <li>National Action for the Control Aids (NACA)</li>
          <li>Islamic Medical Association of Nigeria (IMAN)</li>
        </ol>
      </motion.div>
    </motion.div>
  );
};

export default BlogDetails2;

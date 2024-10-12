import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import FooterImg from "../../assets/footer.jpg";
import Logo from "../../assets/Logo.jpg";

const FooterBg = {
  backgroundImage: `url(${FooterImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom center",
};

const Footer = () => {
  return (
    <div style={FooterBg} className="rounded-t-3xl">
      <div className="bg-primary/5">
        <div className="container px-[-20px]">
          <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-black">
            <div className="py-8 px-4 space-y-4">
              <div className="text-2xl flex items-center h-16">
                <img src={Logo} alt="FooterLogo" className="h-16" />
              </div>
              <p className="text-justify">
                MESH is an NGO of Nigerian Supreme Council for Islamic Affairs.
              </p>
              <div className="flex items-center justify-start gap-5 !mt-6">
                <a
                  href="https://www.google.com/maps/dir//Nigerian+Supreme+Council+for+Islamic+Affairs+(NSCIA),+Beside+National+Mosque,+6th+Street,+Central+Business+District,+Central+Business+Dis,+Abuja,+Federal+Capital+Territory+900103,+Central+Business+District/@9.0608212,7.4868604,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x104e0baf1e584c2b:0x59c54b6c480204e1!2m2!1d7.4881333!2d9.0611715?entry=ttu&g_ep=EgoyMDI0MTAwNS4yIKXMDSoASAFQAw%3D%3D"
                  className="hover:text-secondary duration-200">
                  <HiLocationMarker className="text-3xl" />
                </a>
                <a
                  href="https://www.instagram.com/mesh__ng/?next=%2F"
                  className="hover:text-secondary duration-200">
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  href="https://web.facebook.com/NSCIAMESH?mibextid=ZbWKwL&_rdc=1&_rdr"
                  className="hover:text-secondary duration-200">
                  <FaFacebook className="text-3xl" />
                </a>
                <a
                  href="https://x.com/MESH_NG?t=fWJWFe0w_ehYZZweYoCVhw&s=09"
                  className="hover:text-secondary duration-200">
                  <FaTwitter className="text-3xl" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-3 md:ml-14 md:gap-10">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                  Contact Address
                </h1>
                <div className="space-y-2">
                  <p className="text-justify">
                    Nigerian Supreme Council for Islamic Affairs National Mosque
                    Office Complex, Central Area, Abuja.
                  </p>
                  <p>Tel: 08099332299, 08063858823</p>
                  <p>Email: meshnigeria@gmail.com</p>
                </div>
              </div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">
                  Programmes
                </h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Social Interventions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Education Interventions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary duration-200">
                      Health Interventions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="text-center py-6 border-t-2 border-gray-900/10">
              <span className="text-sm text-black/60">
                @copyright 2024 MESH Nigeria
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

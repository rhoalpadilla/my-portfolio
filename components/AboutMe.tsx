import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="flex flex-col items-center text-center px-4 md:px-0">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left txt */}
        <div className="md:w-1/3 text-left text-[#faf8f1]">
          <h1 className="text-3xl font-bold text-[#05fcec] mt-4">
            HELLO!
          </h1>
          <h2 className="text-3xl font-bold text-[#faf8f1] mt-4">
            I am Rho-al Chun T. Padilla
          </h2>
          <p className="mb-4">
            a 21-year-old IT student at the{" "}
            <span className="font-medium text-[#05fcec]">
              University of the Cordilleras
            </span>
            , born on October 14, 2003.
          </p>
        </div>

        {/* Image w/ gloweffct */}
        <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden mb-6 glow-effect">
          <Image
            src="/rhoal.png"
            alt="My Profile Picture"
            width={288}
            height={288}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right txt */}
        <div className="md:w-1/3 text-left text-white mt-6 md:mt-0">
          <p className="mb-4">
            I chose to pursue Information Technology because I find it both fun
            and fulfilling—especially when it comes to{" "}
            <span className="font-medium text-[#05fcec]">web design</span> and
            crafting user experiences.
          </p>
          <p>
            My dream is to become a{" "}
            <span className="font-medium text-[#05fcec]">UI/UX designer</span>,
            where I can combine design thinking with technology to build
            meaningful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

import React from "react";
import Particles from "react-tsparticles";

const Hero = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 h-full w-screen bg-cover bg-center flex flex-col items-center justify-center font-sans ">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            opacity: 0,
          },
          fpsLimit: 60,

          particles: {
            color: {
              value: "#f8f8f8",
            },
            links: {
              color: "#f8f8f8",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="bg-clip-padding backdrop-filter backdrop-blur bg-slate-50 bg-opacity-10  p-8 rounded-3xl drop-shadow-md">
        <div className="mb-8 text-center">
          <h1 className="text-6xl font-black text-slate-100 tracking-tight uppercase">
            Birthday <br /> Invitation!
          </h1>
          <h2 className="text-2xl font-medium text-slate-300 tracking-widest">
            Let's see what all the fuss is about..
          </h2>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-extrabold text-slate-50 uppercase pb-4">
            Some Information
          </h3>
          <div className="flex justify-around">
            <div>
              <h4 className="text-xl font-bold text-slate-100">What?</h4>
              <p className="text-xl font-light text-slate-100 pb-4">
                Karting woohoo! <br /> (2 sessions, €38/person) <br />
                Drinks on me! <br />
                <span className="text-sm opacity-10">
                  Unless your alcoholic..
                </span>
              </p>
              <h4 className="text-xl font-bold text-slate-100">Where?</h4>
              <p className="text-xl font-light text-slate-100 pb-4">
                Budasteenweg 2 <br /> 1830 Machelen
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-100">When?</h4>
              <p className="text-xl font-light text-slate-100 pb-4">
                You really don't know?.. <br /> Time is 16:20. <br />
              </p>
              <h4 className="text-xl font-bold text-slate-100">Extra</h4>
              <p className="text-xl font-light text-slate-100 pb-4">
                Bring your +1! <br /> Tell me if you want to <br /> join dinner
                afterwards <br />
                <span className="text-sm opacity-10">
                  I had to much fun making this
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

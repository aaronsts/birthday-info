import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('./assets/images/cool-background.png')] h-full w-screen bg-cover bg-center flex flex-col items-center justify-center font-sans">
      <div className="bg-clip-padding backdrop-filter backdrop-blur bg-opacity-60 border border-slate-800 p-8 rounded-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-6xl font-black text-slate-900 tracking-tight">
            YOU'RE INVITED <br /> TO MY BIRTHDAY!
          </h1>
          <h2 className="text-2xl font-medium text-slate-800 tracking-widest">
            Let's see what all the fuss is about..
          </h2>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-extrabold text-slate-800 uppercase">
            Some Information
          </h3>
          <h4 className="text-xl font-bold text-slate-900">What?</h4>
          <p className="text-xl font-light text-slate-900">
            We're going Karting woohoo! <br /> (2 sessions, €38/person) <br />
            Drinks on me!
          </p>
          <h4 className="text-xl font-bold text-slate-900">Where?</h4>
          <p className="text-xl font-light text-slate-900">
            Budasteenweg 2 <br /> 1830 Machelen
          </p>
          <h4 className="text-xl font-bold text-slate-900">When?</h4>
          <p className="text-xl font-light text-slate-900">
            You really don't know?.. <br /> Time is 16:20.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

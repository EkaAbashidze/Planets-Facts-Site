import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Button from "./Button";
import Details from "./Details";
import IconSource from "./svg/IconSource";

export default function Planet({ data }) {
  const { name } = useParams();

  const planet = data.find((planet) => planet.name.toLowerCase() === name);

  const location = useLocation();

  const [currentSvg, setCurrentSvg] = useState(planet.images.planet);
  const [geologyClicked, setGeologyClicked] = useState(false);
  const [currentText, setCurrentText] = useState(planet.overview.content);
  const [currentSource, setCurrentSource] = useState(planet.overview.source);

  useEffect(() => {
    const planetOne = data.find((planet) => planet.name.toLowerCase() === name);
    setCurrentSvg(planetOne.images.planet);
    setGeologyClicked(false);
    setCurrentText(planetOne.overview.content);
    setCurrentSource(planetOne.overview.source);
  }, [location.pathname]);

  return (
    <>
      <div className="flex items-center justify-between gap-x-48 mt-32 lg:pr-[165px] lg:pl-[165px] sm:flex-col md:flex-col">
        <div className="flex flex-col items-center">
          <img src={currentSvg} alt="Planet" className="top-[554px] sm:h-[111px] sm:w-[111px] md:w-[184px] md:h-[184px]"/>
          {!geologyClicked ? null : (
            <img 
              src={planet.images.geology}
              alt="Planet Geology"
              className="w-[163px] h-[199px] top-[554px] absolute"
            />
          )}
        </div>
        <div className="text-white max-w-[350px]">
          <h1 className="uppercase font-antonio text-[80px] leading-[104px]">
            {planet.name}
          </h1>
          <p className="my-6 opacity-25">{currentText}</p>
          <a
            className="flex mb-10 opacity-50 items-center gap-x-2"
            target="_blank"
            href={currentSource}
          >
            Source: <b>Wikipedia</b> <IconSource />{" "}
          </a>
          <div className="flex flex-col items-start gap-y-4">
            <Button
              onClick={() => {
                setCurrentSvg(planet.images.planet);
                setCurrentText(planet.overview.content);
                setCurrentSource(planet.overview.source);
                if (geologyClicked) {
                  setGeologyClicked(false);
                }
              }}
              number="01"
              text="OVERVIEW"
              name={planet.name}
            />
            <Button
              onClick={() => {
                setCurrentSvg(planet.images.internal);
                setCurrentText(planet.structure.content);
                setCurrentSource(planet.structure.source);
                if (geologyClicked) {
                  setGeologyClicked(false);
                }
              }}
              number="02"
              text="Internal Structure"
              name={planet.name}
            />
            <Button
              onClick={() => {
                setCurrentSvg(planet.images.planet);
                setGeologyClicked(!geologyClicked);
                setCurrentText(planet.geology.content);
                setCurrentSource(planet.geology.source);
              }}
              number="03"
              text="Surface Geology"
              name={planet.name}
            />
          </div>
        </div>
      </div>

      <div className="flex mt-[87px] justify-center gap-x-8">
        <Details heading="rotation time" text={planet.rotation} />
        <Details heading="revolution time" text={planet.revolution} />
        <Details heading="radius" text={planet.radius} />
        <Details heading="average temp." text={planet.temperature} />
      </div>
    </>
  );
}

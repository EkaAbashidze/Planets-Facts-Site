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
  const [activeBtn, setActiveBtn] = useState("OVERVIEW");

  useEffect(() => {
    const planetOne = data.find((planet) => planet.name.toLowerCase() === name);
    setCurrentSvg(planetOne.images.planet);
    setGeologyClicked(false);
    setCurrentText(planetOne.overview.content);
    setCurrentSource(planetOne.overview.source);
  }, [location.pathname]);

  return (
    <>
      <div className="text-white hidden sm:flex justify-between pr-[24px] pl-[24px]">
        <Button
          onClick={() => {
            setCurrentSvg(planet.images.planet);
            setCurrentText(planet.overview.content);
            setCurrentSource(planet.overview.source);
            setActiveBtn("OVERVIEW");
            if (geologyClicked) {
              setGeologyClicked(false);
            }
          }}
          text="OVERVIEW"
          color={planet.color}
          active={activeBtn === "OVERVIEW"}
        />
        <Button
          onClick={() => {
            setCurrentSvg(planet.images.internal);
            setCurrentText(planet.structure.content);
            setCurrentSource(planet.structure.source);
            setActiveBtn("Structure");
            if (geologyClicked) {
              setGeologyClicked(false);
            }
          }}
          text="Structure"
          color={planet.color}
          active={activeBtn === "Structure"}
        />
        <Button
          onClick={() => {
            setCurrentSvg(planet.images.planet);
            setGeologyClicked(!geologyClicked);
            setCurrentText(planet.geology.content);
            setCurrentSource(planet.geology.source);
            setActiveBtn("Surface");
          }}
          text="Surface"
          color={planet.color}
          active={activeBtn === "Surface"}
        />
      </div>
      <div className="h-[1px] w-full bg-white opacity-20 hidden sm:block"></div>

      <div className="flex items-center sm:text-center justify-center lg:gap-x-48 lg:mt-32 lg:pr-[165px] lg:pl-[165px] flex-col lg:flex-row ">
        <div className="flex flex-col items-center">
          <img
            src={currentSvg}
            alt="Planet"
            className="top-[554px] sm:h-auto sm:w-[38.49%] md:h-auto sm:mt-[95px] sm:mb-[98px] md:mt-[112px] md:mb-[95px] md:w-[63.4%]"
          />
          {!geologyClicked ? null : (
            <img
              src={planet.images.geology}
              alt="Planet Geology"
              className="w-[163px] h-[199px] lg:top-[554px] absolute sm:top-[290px] md:top-[450px] sm:w-[80px] md:w-[120px] md:h-auto sm:h-auto"
            />
          )}
        </div>

        <div className="md:flex md:flex-row md:justify-around md:w-full text-white md:gap-x-[69px] md:mx-[40px] md:items-center">
          <div>
            <div className="text-white lg:max-w-[350px] flex flex-col sm:items-center ">
              <h1 className="uppercase font-antonio font-normal lg:text-[80px] lg:leading-[104px] text-[40px] leading-[52px] md:text-[48px] md:leading-[62px] ">
                {planet.name}
              </h1>
              <p className="my-6 font-normal lg:leading-[25px] lg:text-[14px] max-w-[330px] md:max-w-[330px] text-[11px] leading-[22px] lg:min-h-[175px]">
                {currentText}
              </p>
              <a
                className="flex lg:mb-10 opacity-50 items-center gap-x-2 mb-0 font-normal lg:text-[14px] lg:leading-[25px] font-spartan text-[12px] leading-[25px]"
                target="_blank"
                href={currentSource}
              >
                Source: <b className="underline font-bold">Wikipedia</b>{" "}
                <IconSource />{" "}
              </a>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-start gap-y-4 sm:hidden ">
              <Button
                onClick={() => {
                  setCurrentSvg(planet.images.planet);
                  setCurrentText(planet.overview.content);
                  setCurrentSource(planet.overview.source);
                  setActiveBtn("OVERVIEW");
                  if (geologyClicked) {
                    setGeologyClicked(false);
                  }
                }}
                number="01"
                text="OVERVIEW"
                color={planet.color}
                active={activeBtn === "OVERVIEW"}
              />
              <Button
                onClick={() => {
                  setCurrentSvg(planet.images.internal);
                  setCurrentText(planet.structure.content);
                  setCurrentSource(planet.structure.source);
                  setActiveBtn("Internal Structure");
                  if (geologyClicked) {
                    setGeologyClicked(false);
                  }
                }}
                number="02"
                text="Internal Structure"
                color={planet.color}
                active={activeBtn === "Internal Structure"}
              />
              <Button
                onClick={() => {
                  setCurrentSvg(planet.images.planet);
                  setGeologyClicked(!geologyClicked);
                  setCurrentText(planet.geology.content);
                  setCurrentSource(planet.geology.source);
                  setActiveBtn("Surface Geology");
                }}
                number="03"
                text="Surface Geology"
                color={planet.color}
                active={activeBtn === "Surface Geology"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:mt-[87px] mt-[27px] justify-between lg:gap-x-8 md:gap-x-[11px] sm:flex-col sm:items-center sm:gap-y-2 sm:mt-[28px] md:mx-[39px] lg:mx-[165px]">
        <Details heading="rotation time" text={planet.rotation} />
        <Details heading="revolution time" text={planet.revolution} />
        <Details heading="radius" text={planet.radius} />
        <Details heading="average temp." text={planet.temperature} />
      </div>
    </>
  );
}

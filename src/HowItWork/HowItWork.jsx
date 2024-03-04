import React, { useState } from "react";
import image from "../assets/image1.svg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const HowItWork = () => {
  const steps = [
    {
      name: "step 01",
      isShowed: true,
      description:
        "Fill out our online form to reserve your spot for Summer 2024. The registration fee is $40 and nonrefundable. Included with registration are 5 boxes and packaging tape.",
    },
    {
      name: "step 02",
      isShowed: false,
      description:
        "Schedule a move-out time. We'll send you a form to do so in the Spring. We're offering our move-out services in early June for the 2024 storage season. Stay tuned for specific dates!",
    },
    {
      name: "step 03",
      isShowed: false,
      description:
        "Pick up your boxes. We'll distribute them in front of Lisa's or Allison during reading week. Additional boxes will be available for purchase",
    },
    {
      name: "step 04",
      isShowed: false,
      description:
        "Pack up your sh*t. We'll pick up your items at your door -no need to lift a finger!",
    },
    {
      name: "step 05",
      isShowed: false,
      description:
        "We'll store your belongings in a high security, climate-controlled warehouse. If you live on-campus, we'll deliver your items to your new dorm room before you arrive in the fall. If you live off- campus, we'll contact you in August to set up a delivery appointment.",
    },
  ];
  const [state, setState] = useState(steps);
  const handleClick = (step) => {
    const index = state.findIndex((s) => s.name === step.name);
    const copy = [...state];
    copy[index] = step;
    setState(copy);
  };
  return (
    <div className="how-it-work-container py-5">
      <div className="content max-w-[1200px] px-3 lg:px-0 m-auto flex flex-col lg:flex-row">
        <div className="content-left py-10 flex-1 flex flex-col gap-3">
          <h1 className="text-[35px] sm:text-[60px] uppercase text-slate-700 font-[400]">
            how it works
          </h1>
          <img src={image} className="w-full sm:w-3/4" alt="" />
          <button className="bg-primary w-[150px] sm:w-[200px] text-center px-2 sm:px-6 py-3 sm:py-4 rounded-md text-slate-50 uppercase font-[400] sm:font-[500] tracking-normal">
            register now
          </button>
        </div>
        <div className="content-right py-10 flex-1">
          <div className="steps flex flex-col gap-5 p-4">
            {state.map((step, index) => (
              <div
                className="step-item rounded-md p-2 border-[1px] border-slate-200"
                key={index}
              >
                <div
                  onClick={() => {
                    handleClick({
                      name: step.name,
                      isShowed: step.isShowed ? false : true,
                      description: step.description,
                    });
                  }}
                  className="heading w-full text-primary font-semibold rounded-md flex justify-between items-center pe-2"
                >
                  <h1 className="text-[25px] uppercase">{step.name}</h1>
                  {!step.isShowed ? (
                    <button
                      className="close-icon cursor-pointer"
                      onClick={() => {
                        handleClick({
                          name: step.name,
                          isShowed: step.isShowed ? false : true,
                          description: step.description,
                        });
                      }}
                    >
                      <FaChevronDown />
                    </button>
                  ) : (
                    <button
                      className="close-icon cursor-pointer"
                      onClick={() => {
                        handleClick({
                          name: step.name,
                          isShowed: step.isShowed ? false : true,
                          description: step.description,
                        });
                      }}
                    >
                      <FaChevronUp />
                    </button>
                  )}
                </div>
                {step.isShowed && (
                  <p className="mt-2 text-slate-700 font-[500]">{step.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;

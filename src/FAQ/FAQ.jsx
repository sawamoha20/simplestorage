import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const FAQ = [
    {
      title: "DOES LITTERBOX STORE ITEMS THAT AREN'T LISTED?",
      isShowed: true,
      description: "Yes we do! Please check the pricing tab for commonly stored non-box items. Pricing for unlisted items is handled on an individual basis. Please contact <a href='mailto:contact@simplestorage.ma'>contact@simplestorage.ma</a> to receive a quote.",
    },
    {
      title: "WHAT DOES MY $40 REGISTRATION FEE COVER?",
      isShowed: false,
      description:
        "The $40 registration fee includes 5 Litterbox provided boxes and packing supplies. Each box you fill and choose to store with us will be $49.For example, if you fill 3 of the 5 provided boxes, you would be charged 3 boxes x $49 on top of the $40 registration fee for a total of $187. This covers pick-up from your current room, storage for the entirety of summer, and delivery to your new room before you move in.",
    },
    {
      title: "HOW BIG ARE THE BOXES THAT YOU PROVIDE?",
      isShowed: false,
      description: "Our boxes are 4.5 cubic feet (24in x 18in x 18in).",
    },
    {
      title: "CAN I USE MY OWN BOXES?",
      isShowed: false,
      description:
        "Yes, you can provide your own boxes up to 6 cubic feet (ex. 2 ft x 2 ft x 1.5 ft). However, our boxes are extremely high-quality, double-walled boxes and they are included with every sign-up, so we recommend you use our boxes.",
    },
    {
      title: "DO I HAVE TO BUY MY BOXES?",
      isShowed: false,
      description:
        "No! The $40 reservation fee includes 5 large boxes, packaging tape, a marker, and sticker labels. If you want to buy additional boxes, we sell them for $5 each. However, our customers rarely need to purchase additional boxes.",
    },
    {
      title: "WHERE CAN I PICK UP MY BOXES?",
      isShowed: false,
      description:
        "We will announce 2024 box distribution days in Spring Quarter.",
    },
    {
      title: "WHEN CAN I HAVE MY STUFF PICKED UP?",
      isShowed: false,
      description: "We will announce 2024 pick up dates on March 1!",
    },
    {
      title: "WHEN IS THE EARLIEST MOVE-IN DATE?",
      isShowed: false,
      description: "We will announce 2024 move in dates over the summer!",
    },
    {
      title:
        " I’M LEAVING CAMPUS EARLY / COMING BACK TO CAMPUS EARLY. CAN I STILL STORE WITH LITTERBOX?",
      isShowed: false,
      description:
        "Yes! Our storing pickup and dropoff times are inclusive for students who need to leave/return earlier. The earliest pick-up time we offer is June 5th, and the earliest drop-off time is September 4th.",
    },
    {
      title: " I LIVE OFF-CAMPUS. CAN I STILL STORE WITH LITTERBOX?",
      isShowed: false,
      description: "Yes, as long as you live within 2 miles of campus!",
    },
  ];
  const [state, setState] = useState(FAQ);
  const handleClick = (faq) => {
    const index = state.findIndex((s) => s.title === faq.title);
    const copy = [...state];
    copy[index] = faq;
    setState(copy);
  };
  return (
    <div className="how-it-work-container min-h-screen py-5">
      <div className="content max-w-[1200px] m-auto px-5 lg:px-0">
        <h1 className="text-[25px] mb-10 sm:text-[60px] uppercase text-slate-700 font-[400]">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="faqs flex flex-col gap-5">
          {state.map((f, index) => (
            <div
              className="faq-item rounded-md p-2 border-[1px] border-slate-200"
              key={index}
            >
              <div
                onClick={() => {
                  handleClick({
                    title: f.title,
                    isShowed: f.isShowed ? false : true,
                    description: f.description,
                  });
                }}
                className="heading w-full text-primary font-semibold rounded-md flex justify-between items-center pe-2"
              >
                <h1 className="text-[14px] sm:text-[20px] uppercase">
                  {f.title}
                </h1>
                {!f.isShowed ? (
                  <button
                    className="close-icon cursor-pointer"
                    onClick={() => {
                      handleClick({
                        title: f.title,
                        isShowed: f.isShowed ? false : true,
                        description: f.description,
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
                        title: f.title,
                        isShowed: f.isShowed ? false : true,
                        description: f.description,
                      });
                    }}
                  >
                    <FaChevronUp />
                  </button>
                )}
              </div>
              {f.isShowed && (
                <p dangerouslySetInnerHTML={{ __html: f.description }} className="mt-2 text-slate-700 font-[500]"/>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

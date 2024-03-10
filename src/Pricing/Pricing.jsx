import React from "react";

const Pricing = () => {
  const pricing = [
    {
      name: "Simple Storage - Provided Box - 199dhs",
      details: ["Dimensions: 40cm x 40cm x 60cm", "Maximum weight: 20kg ",
    ],
    },
    {
      name: "Large Items - 399dhs",
      details: [
        "Desk",
        "Bookshelf",
        "Queen bed frame (assembled)",
        "Queen mattress",
        "Queen box spring",
      ],
    },
    {
      name: "Extra-large Items - 650dhs",
      details: [
        "TV (unboxed)",
        "King bed frame (assembled)",
        "King mattress",
        "King box spring",
      ],
    },
    {
      name: "Oversized Items - 800dhs",
      details: ["Dresser (emptied)", "Bean bag chairs"],
    },
    {
      name: "Insurance",
      details: ["Premium insurance - 120dhs"],
    },
    {
      name: "Special Offers",
      details: [
        "two boxes - 299dhs",
        "three boxes - 399dhs",
    ],
    },
    {
      name: "Fees",
      details: [
        "Overweight fee - 200dhs (boxes, suitcases, duffles, trunks, and plastic totes must be under 20kg)",
        "Rescheduling fee (within 72 hours) - 150dhs",
        "Delivery fee (outside of available dates) - 500dhs",
      ],
    },
    {
        name: "Standard Items - 199dhs",
        details: [
          "Suitcase / duffle (under 20kg)",
          "Trunk (under 20kg)",
          "Plastic tote (under 20kg)",
          "Set of 3 plastic drawers (emptied)",
          "Mini-fridge",
          "Fan",
          "Mirror",
          "Bike",
          "Scooter",
          "TV (boxed)",
          "Monitor",
          "Desk chair",
          "Twin mattress",
          "Twin box spring",
          "Disassembled bed frame (any size)",
          "Mattress topper",
          "Twin headboard",
          "Drying rack",
          "Floor lamp",
          "Table lamp",
          "Metal cart",
          "Nightstand",
          "Rug",
          "Vacuum / mop",
          "Printer",
        ],
      },
  ];
  return (
    <div className="pricing-container py-5">
      <div className="content max-w-[1200px] m-auto">
        <h1 className="text-[35px] mb-10 text-center sm:text-[60px] uppercase text-slate-700 font-[400]">
          pricing
        </h1>
        <div className="pricing-items flex flex-wrap items-stretch justify-center gap-4">
           {pricing.map((p ,index)=>(
            <div className="pricing-item p-3 border-[1px] border-slate-200 bg-blue-50 rounded-xl w-[270px] sm:w-[320px]" key={index}>
                <h1 className="inline-block mb-3 rounded-full bg-primary py-1 px-3 text-[14px] sm:text-[17px] font-[500] text-slate-50">{p.name}</h1>
                <ul className="list list-details">
                    {p.details.map((d,index)=>(
                        <li className="list-disc ms-5" key={index}>{d}</li>
                    ))}
                </ul>
            </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

import React from "react";

const Pricing = () => {
  const pricing = [
    {
      name: "Litterbox-Provided Box - $49",
      details: ["Dimensions: 18’’ x 18’’ x 26’’", "Maximum weight: 50 lbs"],
    },
    {
      name: "Large Items - $80",
      details: [
        "Desk",
        "Bookshelf",
        "Queen bed frame (assembled)",
        "Queen mattress",
        "Queen box spring",
      ],
    },
    {
      name: "Extra-large Items - $95",
      details: [
        "TV (unboxed)",
        "King bed frame (assembled)",
        "King mattress",
        "King box spring",
      ],
    },
    {
      name: "Oversized Items - $150",
      details: ["Dresser (emptied)", "Bean bag chairs"],
    },
    {
      name: "Insurance",
      details: ["Premium insurance - $20"],
    },
    {
      name: "Fees",
      details: [
        "Registration - $40",
        "Overweight fee - $100 (boxes, suitcases, duffles, trunks, and plastic totes must be under 50 lbs)",
        "Rescheduling fee (within 72 hours) - $75",
        "Truck delay / reroute - $35",
        "Delivery fee (outside of available dates) - $200",
        "Additional delivery mileage between 2-5 miles - $300",
      ],
    },
    {
        name: "Standard Items - $49",
        details: [
          "Suitcase / duffle (under 50 lbs)",
          "Trunk (under 50 lbs)",
          "Plastic tote (under 50 lbs)",
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

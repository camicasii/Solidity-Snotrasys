import React, { useState, useEffect } from "react";
import info from "../../data/infosection-content";
import CardPricing from "../CardPricing";
import { Card, CardBody, CardHeader, Text } from "@pancakeswap-libs/uikit";

const InfoSection = ({load,handleClick,address}) => {
  const {
    TotalIncome,
    BasicInterestRate,
    DaysReductionPlan,
    AuctionBonus,
    RefBonus,
    MinimalDeposit,
    Earning,
  } = info;  

  

  return (
    <section className="px-12 py-4 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 py-5 gap-12">
        <Card>
          <CardHeader className="text-center">
            <Text bold> Info</Text>
          </CardHeader>

          <CardBody >
          <li className="px-2 py-2 text-[#DA781E]">
              {TotalIncome.content}
            </li>
            <li className="px-2 py-2 text-[#DA781E]">
              {BasicInterestRate.content}
            </li>
            <li className="px-2 py-2 text-[#DA781E]">
              {DaysReductionPlan.content}
            </li>
            <li className="px-2 py-2 text-[#DA781E]">{AuctionBonus.content}</li>
            <li className="px-2 py-2 text-[#DA781E]">{RefBonus.content}</li>
            <li className="px-2 py-2 text-[#DA781E]">
              {MinimalDeposit.content}
            </li>
            <li className="px-2 py-2 text-[#DA781E]">{Earning.content}</li>
          </CardBody>
        </Card>

        <div className="flex flex-wrap content-center m-auto lg:ml-32">
          <CardPricing loading={true} title="Plan Gold" amountPlanOne={0.001}
          load={load}
          handleClick={handleClick}
          address={address}

          
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

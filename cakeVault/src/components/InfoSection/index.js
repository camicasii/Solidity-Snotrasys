import React, { useState, useEffect } from "react";
import info from "../../data/infosection-content";
import CardPricing from "../CardPricing";
import { Card, CardBody, CardHeader, Text, Button } from "@pancakeswap-libs/uikit";

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
        <Card className='card-backgrount'>
          <CardHeader className="text-center">
            <Text bold
            fontSize={24}
            > Info</Text>
          </CardHeader>

          <CardBody className='font-semibold' >
          <li className="px-2 py-2 text-xl text-[#DA781E] font-bold">
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
            <div className='flex justify-around'>
            <div className="px-0 md:px-8 py-5">
   <a
   href='/CAKEVAULT-(English).pdf' 
   
   className='focus:outline-white'
   target='_blank'>
              <Button  variant='primary' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center bg-[#FDBB26]'>
              About
              </Button>
            </a>
          </div>
          <div className="px-0 md:px-8 py-5">
   <a 
   href='/Cakevault-presentacion.pdf' 
   className='focus:outline-white'
   target='_blank'>
              <Button  variant='primary' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center bg-[#FDBB26]'>
              Conocenos
              </Button>
            </a>
          </div>
            </div>
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

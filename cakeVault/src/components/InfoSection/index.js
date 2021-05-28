import React, { useState, useEffect } from "react";
import info from "../../data/infosection-content";
import CardPricing from "../CardPricing";
import Amount from '../Amount';
import { Card, CardBody, CardHeader, Text, Button } from "@pancakeswap-libs/uikit";
import Referrers from "../Referrers";


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
        <div className='card-backgrount' style={{ backgroundImage: "url('info-background.png')" }} >
          <h1 className="px-2 py-4 text-4xl font-medium text-left flex items-center text-[#ca813a]">
            <img className="-mt-14 w-30 h-28" src="pan-bg.svg" alt="pan-bg"/>
          
           Information
          </h1>
          
            <CardBody className='font-semibold' >
<ul>
          <li className="px-2 py-2 text-md text-gray-600 font-bold flex justify-around ">
            <img src="/cake2.png" className="w-4 h-4 pr-1 -ml-3" alt="cake2"/> {TotalIncome.content}
            </li>
            <li className="px-2 py-2 text-md text-gray-600 font-bold flex justify-around">
            <img src="/cake1.png" className="w-4 h-4 pr-1 -ml-4" alt="cake1"/>  {BasicInterestRate.content}
            </li>
            <li className="px-2 py-2 text-md text-gray-600 font-bold flex justify-around">
              <img src="/cake2.png" className="w-4 h-4 sm:-ml-20 -ml-6" alt="cake2"/>{DaysReductionPlan.content}
            </li>
  <li className="px-2 py-2 text-md text-gray-600 font-bold flex justify-around"> <img src="/cake1.png" className="w-4 h-4 pr-1 sm:-ml-12 -ml-3" alt="cake1"/>{AuctionBonus.content}</li>
            <li className="px-2 py-2 text-md text-gray-600 font-bold flex justify-around"><img src="/cake2.png" className="w-4 h-4 sm:-ml-8 -ml-3 pr-1" alt="cake2"/> {RefBonus.content}</li>
            <li className="px-2 py-2 text-md text-gray-600 font-bold flex justify-around">
             <img src="/cake1.png" className="w-4 h-4 pr-1 sm:-ml-16 -ml-3" alt="cake1"/> {MinimalDeposit.content}
            </li>
            <li className="px-2 py-2 text-md text-gray-600 font-bold flex justify-around"><img src="/cake2.png" className="w-4 h-4 sm:-ml-4 -ml-3 pr-1" alt="cake2"/> {Earning.content}</li>
</ul>

            <div className='flex justify-around'>
            <div className="px-0 md:px-8 py-5">
   <a
   href='/CAKEVAULT-(English).pdf' 
   
   className='focus:outline-white'
   target='_blank'>
              <Button  variant='primary' className="bg-gradient-to-br from-orange-primary to-[#FFB000] rounded-full text-white text-2xl font-semibold px-4 py-2 mb-5 ">
              About
              </Button>
            </a>
          </div>
          <div className="px-0 md:px-8 py-5">
   <a 
   href='/Cakevault-presentacion.pdf' 
   className='focus:outline-white'
   target='_blank'>
              <Button  variant='primary'className="bg-gradient-to-br from-orange-primary to-[#FFB000] rounded-full text-white text-2xl font-semibold px-4 py-2 mb-5 ">
              Conocenos
              </Button>
            </a>
          </div>
            </div>
          </CardBody>
        </div>

        <div className="flex flex-wrap content-center m-auto lg:ml-32">
          <CardPricing loading={true} title="Plan Gold" amountPlanOne={0.001}
          load={load}
          handleClick={handleClick}
          address={address}          
          />
        </div>
        <Amount loading={true} title="Plan Gold" amountPlanOne={0.001}
          load={load}
          handleClick={handleClick}
          address={address}          
          />

        <Referrers title="Referrers" loading={true} load={load}
          handleClick={handleClick}
          address={address}  />
      </div>
    </section>
  );
};

export default InfoSection;

import React from 'react'

const HeroSection = (  ) => {



  return(
  <>
    <section className="grid grid-cols-1 md:grid-cols-3 py-12 ">
      <div className="ml-4 bg-black px-3 py-2 rounded text-[#FDBB26] lg:flex items-center justify-start">Total BNB stake: <a>232</a></div>
      <a className=" lg:inline-flex flex-col text-2xl  px-3 py-4 rounded text-black font-bold items-center justify-center bg-[#FDBB26]">
       Contact adress
        <a className="text-base font-normal flex flex-wrap justify-center text-center">{process.env.WALLET_TOKEN}</a>
             </a>
      
      <div className="mr-4 bg-black px-3 py-2 text-[#FDBB26] lg:inline-flex text-right sm:items-center justify-end">Total BNB stake: <a>232</a></div>
    </section>
  </>
)
  }
export default HeroSection

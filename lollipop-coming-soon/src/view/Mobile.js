import React from 'react'
import Cracker from '../assets/svg/Cracker'
import social from '../data/social.json'
import ElipseReponsiveTotal from '../components/ElipseReponsiveTotal'
import PolygonTotalMobile from '../components/PolygonTotalMobile'

const Mobile = (  ) => {

  const {sugarswapEN,sugarswapES,sugarswapfi} = social
    return(
  <>
    <div className="block md:hidden flex">
      <ElipseReponsiveTotal />
      <div className="absolute left-[2.79%] right-[44.13%] top-[3.02%] bottom-[88.71%]">
        <img src="/coming-song.svg"/>
      </div>

      <div className="absolute left-[3.33%] right-[88.89%] top-[13.16%] bottom-[84.06%] w-12">
        <Cracker />
      </div>
 <div className="absolute left-[6.42%]  top-[18.16%] bottom-[61.06%] ">
        <img src="/sugar_mobile.svg" />
      </div>
 <div className="absolute left-[59.22%] right-[27.92%] top-[10.16%] bottom-[77.06%] ">
        <img src="/Grupo_14.svg" />
      </div>
 <div className="absolute left-[79.22%] right-[4.92%] top-[14.16%] bottom-[75.06%] w-16">
        <img src="/Grupo_15890.svg" />
      </div>
 <div className="absolute left-[79.22%] right-[4.92%] top-[14.16%] bottom-[75.06%] ">
        <img src="/Grupo_15890.png" />
      </div>

      <div className="absolute left-[16.42%]  top-[36.16%] ">
        <img src="/logoMobile.svg"/>
      </div>
   <div className="absolute left-[3.42%]  top-[48.16%] w-12">
        <img src="/Grupo_3.svg"/>
      </div>
    <div className="absolute left-[59.22%]  top-[25.16%]  ">
        <img src="/lollipopMobile.svg"/>
      </div>


      <div className="absolute left-[39.22%] right-[41.92%] top-[41.16%] bottom-[b1.06%]">
        <h1 className="text-[#FF469D] font-black text-4xl">Farm</h1>
      </div>
      <div className="absolute left-[62.22%] right-[3%]  top-[41.16%] bottom-[1.06%]">
        <h2 className="rounded-lg pl-2 ml-2 bg-[#541C27] text-white font-bold text-xl">Hold Choco,
get benefits</h2>
      </div>
      <PolygonTotalMobile />
      <div className="absolute left-[44.22%] right-[41.92%] top-[55.16%] bottom-[1.06%] z-10">
        <h2 className="text-blue-400 text-3xl font-bold">Get</h2>
      </div>
      <div className="absolute left-[42.22%] right-[41.92%] top-[60.16%] bottom-[1.06%] z-10 w-24">
        <img src="/textChocoMobile.svg"/>
      </div>
      <div className="absolute left-[57.22%] right-[41.92%] top-[52.16%] bottom-[1.06%] z-0 w-24 z-0">
        <img src="/chocoMobile.svg"/>
      </div>
      <div className="absolute left-[16.22%] right-[41.92%] top-[59.16%] bottom-[1.06%] z-0 w-12 z-0">
        <img src="/Grupo_1.svg"/>
      </div>
      <div className="absolute left-[73.22%] right-[41.92%] top-[59.16%] bottom-[1.06%] z-0 w-24 z-0">
        <img src="/golosina.svg"/> 
      </div>
      <div className="absolute left-[2.22%] right-[41.92%] top-[71.16%] z-0  w-8">
        <img src="/golosinas_2.svg"/>
      </div>
      <div className="absolute left-[13.22%]  top-[71.16%] z-0  ">
             <h1 className="text-[#FF469D] font-black text-xl">BSC most delicious</h1>
<h1 className="text-[#FF469D] font-normal text-sm">yield farming</h1>      </div>
      <div className="absolute left-[13.22%]  top-[81.16%] bottom-[b1.06%] z-0  z-0">
             <h1 className="text-[#FF469D] font-normal text-sm">Hold to earn</h1>
<h1 className="text-[#FF469D] font-black text-xl">big and safe</h1>      </div>

      <div  className="absolute left-[] right-[1%]  top-[81.16%] bottom-[1.06%]">
 <h2 className="rounded-lg pl-2 p-1 ml-2 bg-[#2EA1FA] text-white font-bold text-xl">Innonavate features</h2>
      </div>
     <div  className="absolute  right-[7%]  top-[88.16%] bottom-[1.06%]">
 <h2 className="rounded-lg pl-2 p-1 ml-2 bg-[#2EA1FA] text-white font-bold text-xl">VIP Sections</h2>
      </div>
  <div  className="absolute  left-[43.23%]  top-[88.16%] bottom-[1.06%] w-8">
    <img src="Grupo_4.svg"/>
      </div>
      <div className="grid grid-cols-2  flex space-x-8  top-[104%] left-[0%] right-[-1.6%] absolute  bg-gray-300 py-2">
      

         


        <a href={sugarswapEN} target="_blank">
        <div className="flex ml-4">
          <img src="/telegramMobile.svg"/> 
<h1 className="mt-1 ml-1  text-[#40B3E0] text-sm">@SugarswapEN</h1>
        </div>
        </a>

      <a href={sugarswapES} target="_blank">
        <div className="flex ml-3">
             <img src="/telegramMobile.svg"/> 
<h1 className="mt-1 ml-1  text-[#40B3E0] text-sm">@SugarswapES</h1>
        </div>
        </a>

        <div className="flex mt-1">
          <h1 className="text-pink-500 text-2xl">Follow us</h1>
        </div>

    <a href={sugarswapfi}  target="_blank">
        <div className="flex ml-3 mt-2">
           <img src="/telegramMobile.svg"/> 
<h1 className="mt-1 ml-1  text-[#40B3E0] text-sm">@Sugarswapfi</h1>
        </div>
        </a>
      </div>

         </div> 
  </>
  );
}
export default Mobile

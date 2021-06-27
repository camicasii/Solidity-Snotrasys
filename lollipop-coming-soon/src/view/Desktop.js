import social from "../data/social.json";
import EclipseTotal from '../components/EclipseTotal'
import Choco from "../assets/svg/Choco";
import ChocoText from "../assets/svg/ChocoText";
import PolygonTotal from "../components/PolygonTotal";
import Logo from '../assets/svg/Logo'
import Cracker from "../assets/svg/Cracker";
import LolliText from "../assets/svg/LolliText";
import Telegram from "../assets/svg/Telegram";


function Desktop() {
   const {sugarswapEN,sugarswapES,sugarswapfi} = social

  return (
    <>
      <div className="hidden md:block">

           <EclipseTotal />
      {/*Parte Superior*/}
      <div className="left-[4.6%]  top-[1.27%] bottom-[10.92%] absolute z-0">
        <img src="logo_sugar.svg" className="w-80"/>
      </div>
      <div className="left-[34.6%]  top-[1.27%] bottom-[10.92%] absolute z-0">
        <img src="/Grupo_3.svg"/>
      </div>
      <div className="left-[54.6%]  top-[1.27%] bottom-[10.92%] absolute z-0">
        <img src="/start_2.svg"/>
      </div>
      <div className="left-[64.6%]  top-[1.27%] bottom-[10.92%] absolute z-0">
        <img src="/coming-song.svg"/>
      </div>
      <div className="right-[1%] top-[18.27%] bottom-[10.92%] absolute z-0">
        <img src="/start_1.svg"/>
      </div>
    <div className="right-[7%] top-[18.27%] bottom-[10.92%] absolute z-0">
        <img src="/Grupo_4.svg"/>
      </div>
      {/*Parte Superirior End*/}

      <div className="left-[43.6%]  top-[16.27%] bottom-[10.92%] absolute z-0">
      <h3 className="pl-3 pr-3 pb-2 pt-2 rounded-lg bg-[#1890FF] text-white font-bold text-4xl">Innovate Features</h3>
      </div>
   <div className="left-[46.6%]  top-[26.27%] bottom-[10.92%] absolute z-0">
      <h3 className="pl-3 pr-3 pb-2 pt-2 rounded-lg bg-[#1890FF] text-white font-bold text-4xl">VIP Secction</h3>
      </div>


      <div className="left-[56.6%]  top-[56.27%] bottom-[10.92%] absolute z-0">
        <img src="/Grupo_1.svg"/>
      </div>
    <div className="left-[63.6%]  top-[36.27%] absolute z-0">
        <img src="/golosinas_2.svg"/>
      </div>

      <div className="right-[2%]  top-[56.27%] bottom-[10.92%] absolute z-10">
        <h1 className="text-[#FF469D] py-2 font-black text-5xl">BSC most delicious</h1>
<h1 className="text-[#FF469D] font-normal text-5xl">yield farming</h1>
      </div>

  <div className="right-[12%]  top-[76.27%] bottom-[10.92%] absolute z-10">
        <h1 className="text-[#FF469D] py-2 font-normal text-5xl">Hold to earn</h1>
<h1 className="text-[#FF469D] font-black text-5xl">big and safe</h1>
      </div>

      <div  className="left-[21.6%]  top-[16.27%] bottom-[10.92%] absolute z-0">
        <LolliText />
      </div>
       <div className="left-[40.6%] right-[-34.69%] top-[34.27%] bottom-[10.92%] absolute z-0"> 
          <Choco/>
        </div>
        <div className="left-[31.6%] right-[-34.69%] top-[54.27%] bottom-[10.92%] absolute z-0"> 
          <ChocoText /> 
        </div>
      <div className="left-[2.6%]  top-[38.27%] bottom-[10.92%] absolute z-0">
        <Logo />
      </div>
      <div className="left-[19.6%] right-[-34.69%] top-[46.27%] bottom-[10.92%] absolute z-0">
        <p className="text-pink-500 font-black text-7xl">Farms</p>
      </div>
      <PolygonTotal />
      <div className="left-[21.6%] right-[-34.69%] top-[71.27%] bottom-[10.92%] absolute z-0">
        <h1 className="text-blue-400 font-extrabold text-8xl">Get</h1>
      </div>
      <div className="left-[4.6%]  top-[81.27%] bottom-[10.92%] absolute z-0">
        <Cracker />
      </div>
      <div className="left-[11.6%]  top-[85.27%] bottom-[10.92%] absolute z-0">
      
          <h3 className="pl-3 pr-3 pb-2 pt-2 rounded-lg bg-[#541C27] text-white font-bold text-5xl">Hold Choco, get benefits</h3>
    
      </div>
      <div className="flex space-x-8  top-[104%] left-[0%] right-[-1.6%] absolute  bg-gray-300 py-2">
      

           <h3 className="pl-3 pr-3 pb-2 pt-2 rounded-lg text-normal font-bold text-gray-600 text-5xl">Follow us</h3>


        <a href={sugarswapEN} target="_blank">
        <div className="flex">
          <Telegram /> 
<h1 className="mt-3 ml-1  text-[#40B3E0] text-4xl">@SugarswapEN</h1>
        </div>
        </a>

      <a href={sugarswapES} target="_blank">
        <div className="flex">
          <Telegram /> 
<h1 className="mt-3 ml-1  text-[#40B3E0] text-4xl">@SugarswapES</h1>
        </div>
        </a>

    <a href={sugarswapfi} target="_blank">
        <div className="flex">
          <Telegram /> 
<h1 className="mt-3 ml-1  text-[#40B3E0] text-4xl">@Sugarswapfi</h1>
        </div>
        </a>
      </div>
 </div>
    </>
  );
}

export default Desktop;

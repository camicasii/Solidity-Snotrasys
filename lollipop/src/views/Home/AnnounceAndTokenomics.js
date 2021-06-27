import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import Link from '../../components/link';

const AnnounceAndTokenomics = (  ) => (
  <>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
      <div className="h-full grid gap-4">
        <div className=" h-full bg-cover bg-center bg-fixed bg-white group block rounded-md w-full h-full overflow-hidden text-center shadow-sm  h-auto row-span-2 w-full"  style={{ backgroundImage: `url(/Grupo_998.svg)`}}>
          <img src="/home/Grupo_1044.svg" alt="start" className="absolute sm:ml-[220px] ml-44 -mt-4"/>
          <div className="mt-14 text-blue-400 font-bold text-xl">ANNOUNCEMENTS</div>
          <div className="px-4">
     <TwitterTimelineEmbed source Type="gocerberusfi"
  screenName="gocerberusfi"
  options={{height: 400}}/>
          </div>

        </div>

      </div>
      <div className=" h-full bg-cover bg-center bg-fixed bg-white group block rounded-md w-full h-full overflow-hidden text-center shadow-sm  h-auto row-span-2 w-full "  style={{ backgroundImage: `url(/Grupo_998.svg)`}}>
        <img src="/home/Grupo_15890.svg" className="absolute sm:ml-[220px] ml-40 -mt-6 w-20" alt="Grupo_15890"/>
          <div className="mt-14 text-blue-400 font-bold text-2xl">Tokenomics</div>
        <p className="text-xs mt-4 px-8 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <p className="text-xs mt-6 px-8 text-gray-600">Total income: based on your tarrif plan (from 8% to 30% daily)</p>
 <p className="text-xs mt-4 px-8 text-gray-600">Community Bonus +1% daily (maximun 8%) , only for new deposits</p>
 <p className="text-xs mt-4 px-8 text-gray-600">Daily Hold Bonus +0.5% - Maximun 6%.</p>
 <p className="text-xs mt-4 px-8 text-gray-600">Pool Bonus +0.1% for every 200 cake maximum 8%.</p>
        <p className="text-xs mt-4 px-8 text-gray-600">Ref Bonus: get Additional 5% 2% 1% for every user you invite.</p>
<p className="text-xs mt-4 px-8 text-gray-600">Minimal deposit: 0.25 CAKE, no maximal limit.</p>
<p className="text-xs mt-4 px-8 text-gray-600">Earning every moment, withdraw and Reinvets any time , once a day.</p>
        <div className="mt-8 mb-4">
 <Link to="/" className="font-medium py-3 px-4     cursor-pointer bg-blue-500  text-white rounded text-sm text-center w-48 ">know more</Link>
        </div>

        </div>
    </div>   
  </>
)
export default AnnounceAndTokenomics

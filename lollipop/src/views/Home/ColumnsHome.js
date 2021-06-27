import React from 'react'
import Link from '../../components/link';

const ColumnsHome = (  ) => (
  <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
      <div className="h-full grid gap-4">
        {/*ColumnCasino*/}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden sm:p-8 p-5 m-0 lg:mt-4 flex sm:flex-row flex-col sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 items-center sm:text-left text-center grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="flex sm:space-x-4 space-x-[80px]  text-center">
              <img src="/home/poker.svg" alt="poker"/>
  <h1 className="text-blue-400 mt-3 font-bold text-3xl ">Casino</h1>

            </div>

            <div className="md:text-xl text-md  font-semibold text-pink-500 mt-4">Candy To harvest</div>
  <div className="text-2xl mt-4 font-bold text-gray-400">0.000</div>
 <div className="text-sm mt-4 font-bold text-gray-400">$0.000</div>
         <div className="my-5 h-16">
            <Link to="/" className="font-medium py-3 px-4 text-yellow-100
               cursor-pointer bg-pink-500  text-white rounded text-lg text-center w-48 ">Collect Winnings</Link>
         </div>
          </div>
       
          <div>
 <div className="flex justify-center	">
              <img src="/home/Grupo_1059.svg" alt="Grupo_1059" className="w-20"/>


            </div>

            <div className="md:text-sm text-md  font-semibold text-gray-400 mt-4 text-center">Total jackpot this round</div>
  <div className="text-2xl mt-4 font-bold text-gray-400 text-center">Coming Soon</div>

         <div className="my-5 h-16 mt-[60px]  ">
            <Link to="/" className="font-medium py-3 px-4 text-yellow-100
               cursor-pointer bg-pink-500  text-white rounded text-lg text-center w-48 ">Approve Candy</Link>
         </div>

          </div>
        </div>

        {/*ColumnCasinoEnd*/}

        {/*ColumnValorTotalBloqueado*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <div className="bg-white shadow-sm rounded-lg overflow-hidden sm:p-8 p-5 h-auto sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 items-center sm:text-left text-center">
 <div className=" ml-3">
              <img src="/home/Recurso_1.svg" alt="Recurso_1" className=" w-8"/>
            </div>
            <div className=" py-2 font-semibold text-pink-500">
              <div className="font-normal text-blue-400 text-xs">Valor total bloqueado (TVL)</div>
              <div className=" font-semibold text-pink-500">$7,977,258,079</div>
              <div className=" text-gray-400 text-xs py-2">Across all LPs and Syrup Pools</div>
            </div>
          </div>
 <div className="bg-white shadow-sm rounded-lg overflow-hidden sm:p-8 p-5 h-auto sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 items-center sm:text-left text-center">
 <div className=" ml-3">
              <img src="/home/choco.svg" alt="choco" className=" w-6"/>
            </div>
            <div className=" py-2 font-semibold text-pink-500">
              <div className="font-normal text-blue-400 text-xs">Valor total bloqueado (TVL)</div>
              <div className=" font-semibold text-pink-500">$7,977,258,079</div>
              <div className=" text-gray-400 text-xs py-2">Across all LPs and Syrup Pools</div>
            </div>
          </div>
        </div>
        {/*ColumnValorTotalBloqueadoEnd*/}


      </div>
{/*Two Column*/}
      <div className="grid gap-4">
        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-sm rounded-lg overflow-hidden sm:p-8 p-5 h-auto flex flex sm:flex-row flex-col sm:space-x-5 space-x-0 sm:space-y-0 space-y-1  sm:text-left text-center grid grid-cols-1 lg:grid-cols-2">
          {/*Candy Stats*/}
          <div>    
            <div className="flex sm:space-x-4 space-x-24  text-center">
              <img src="/home/Recurso_1.svg" alt="Recurso_1" className="w-12"/>
  <h1 className="text-blue-400 mt-3 font-bold text-xl ">Candy Stats</h1>

            </div>
            <div className="py-8 font-semibold text-pink-500 text-md">
              <ul>
                <li className="py-2">Total Candy Supply</li>
                <li className="py-2">Total Candy Burned</li>
                <li className="py-2">New Candy/block</li>
              </ul>
            </div>
          </div>

          <div >
            <div className="flex sm:space-x-4 space-x-24  text-center">
              <img src="/home/metamask.svg" alt="metamask" className="w-6"/>
  <h1 className="text-yellow-500 mt-3 font-normal text-sm ">Add Candy to Metamask</h1>

            </div>
            <div className="py-8 px-8 mt-4 font-light text-blue-400 text-xs ">
              <ul>
                <li className="py-2">176,352,283</li>
                <li className="py-2">Total Candy Burned</li>
                <li className="py-2">New Candy/block</li>
              </ul>
            </div>
</div>

        </div>
        {/*EndCandyStats*/}

        {/*ChocoStats*/}
 <div className="bg-white dark:bg-gray-800 dark:text-gray-200 shadow-sm rounded-lg overflow-hidden sm:p-8 p-5 h-auto flex flex sm:flex-row flex-col sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 items-center sm:text-left text-center">
      <div>    
            <div className="flex sm:space-x-4 space-x-1  text-center">
              <img src="/home/choco.svg" alt="choco" className="w-8"/>
  <h1 className="text-blue-400 mt-3 font-bold text-xl ">Choco Stats</h1>

            </div>
            <div className="py-8 font-semibold text-pink-500">
              <ul>
                <li className="py-2">Total Candy Supply</li>
                <li className="py-2">Total Candy Burned</li>
                <li className="py-2">New Candy/block</li>
              </ul>
            </div>
          </div>

     <div className="px-6">
            <div className="flex sm:space-x-4 space-x-1  text-center mt-2">
              <img src="/home/metamask.svg" alt="metamask" className="w-7 "/>
  <h1 className="text-yellow-500  font-normal text-sm ">Add Candy to Metamask</h1>

            </div>
            <div className="py-8 px-8  font-light text-blue-400  text-xs">
              <ul>
                <li className="py-3">176,352,283</li>
                <li className="py-3">Total Candy Burned</li>
                <li className="py-3">New Candy/block</li>
              </ul>
            </div>
</div>


        </div>
      </div>

    </div>
    {/*Casino*/}
    <div className="mt-5 bg-white dark:bg-gray-800 dark:text-gray-200 shadow-sm rounded-lg overflow-hidden sm:p-8 p-5 lg:col-span-6"><div className="sm:grid grid-cols-2 flex flex-col-reverse">
      <div className="flex flex-col justify-center sm:pr-10 sm:pt-0 pt-5">
 <div className="flex sm:space-x-4 space-x-1  text-center">
              <img src="/home/poker.svg" alt="poker"/>
   <img src="/home/Grupo_960.svg" alt="Grupo_960"/>


            </div>
        <div className="text-sm text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</div>
           <Link to="/" className="font-medium py-2 px-0  mt-4    cursor-pointer bg-blue-500  text-white rounded text-xs text-center w-48 ">Approve Candy</Link>
      </div>
      <div>
        <img src="/home/Grupo_854.svg" alt="Grupo_854"/>
      </div>
    </div></div>
    {/*CasinoEnd*/}
 

  </>
)
export default ColumnsHome

import React from 'react'
import Link from '../link';


const FarmsAndStaking = (  ) => {
    
    return(
  <>
    <div className="bg-white  shadow-sm rounded-lg overflow-hidden sm:p-8 p-5 lg:col-span-6">
      <h1 className="text-3xl font-bold text-center text-blue-400">Farms & Staking</h1>
      <div className="sm:grid grid-cols-3 flex flex-col items-center">
        <div className="flex sm:pr-0 sm:pt-0 pt-5">
         <div className="flex flex-col md:flex-row mt-4 ">
           <div className="md:w-1/2 max-w-md flex flex-col justify-center items-center ">
          <img alt="card img" class="rounded-t " src="/home/Recurso_1.svg"/>
      </div>
      <div className="flex md:justify-end w-full md:w-3/2 -mt-5 ">
         <div className="">
            <div className=" rounded-full mt-6 ml-4">
             
 <div className="md:text-2xl text-2xl  font-semibold text-pink-500">Candy To harvest</div>
         <div className="text-5xl mt-4 font-bold text-gray-400">0.000</div>
 <div className="text-sm mt-4 font-bold text-gray-400">$0.000</div>
         <div className="my-5 h-16">
            <Link to="/censo-nacional-de-viveros" class="font-medium py-2 px-4 text-yellow-100
               cursor-pointer bg-pink-500  text-white rounded text-lg text-center w-48 ">Harvest all (0)</Link>
         </div>
        
            </div>
         </div>
      </div>
   </div>
        </div>

        <div className="flex justify-center sm:grid hidden mt-8">
          <img src="/home/golosinas.svg"/>
        </div>
   <div className="flex  sm:pt-0 pt-5 mr-8">
         <div className="flex flex-col md:flex-row mt-4 ">
           <div className="  flex flex-col justify-center items-center ">
       

     <div className="">
            <div className=" rounded-full ">
             
 <div className="md:text-2xl text-2xl  font-semibold text-pink-500 -mr-24">Candy To harvest</div>
         <div className="text-5xl mt-4 font-bold text-gray-400">0.000</div>
 <div className="text-sm mt-4 font-bold text-gray-400">$0.000</div>
         <div className="my-5 h-16">
            <Link to="/censo-nacional-de-viveros" class="font-medium py-2 px-4 text-yellow-100
               cursor-pointer bg-blue-500  text-white rounded text-lg text-center w-48 ">Harvest all (0)</Link>
         </div>
        
            </div>
         </div>
      </div>
      <div className="flex md:justify-end w-full md:w-2/6 -mt-5 ml-6">
       <img alt="card img" class="rounded-t " src="/home/choco.svg" alt="choco"/>
      </div>
   </div>


        </div>

      </div>
    </div> 
  </>
  );
}
export default FarmsAndStaking

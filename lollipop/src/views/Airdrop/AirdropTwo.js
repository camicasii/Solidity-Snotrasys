import React from 'react'
import Link from '../../components/link'

const AirdropTwo = (  ) => {
    
    return(
  <>
    
   <div className="hero-headline flex flex-col items-center justify-center  text-center z-40 mt-16">

    

      <div className="grid lg:grid-cols-3 grid-cols-3 space-y-3 lg:space-y-0 gap-8">
        <div>
 <img alt="card img" className="rounded-t z-10" src="/airdrop/Grupo_15278.svg"/> 
        </div>
        <div>
 <img alt="card img" className="rounded-t z-10" src="/choco-lolli.svg"/> 
        </div>
  <div className="justify-center justify-items-center -mt-4">
 <img alt="card img" className="rounded-t z-10 ml-4" src="/airdrop/Grupo_15040.svg"/> 
        </div>

            </div>

  <div className="md:w-2/3 max-w-md flex flex-col justify-center">
  
    <div className="md:text-xl text-lg mt-4  font-bold text-gray-500 z-10">Hello crypto world, today a new way of seeing the world of DEFI has
been born, my name is lollipop together with my partner Choco we
come to positively change your finances</div>
     <div className="flex space-x-4 mt-4">
        <div><img src="/home/dias99.svg"/></div>
  <div><img src="/home/dias99One.svg"/></div>
  <div className="mt-6"><img src="/home/group.svg"/></div>
  <div><img src="/home/dias99.svg"/></div>
  <div className="mt-6"><img src="/home/group.svg"/></div>
  <div><img src="/home/dias99One.svg"/></div>
     </div>
      </div>


     <ul className="mt-8 text-gray-500 my-5 font-semibold md:text-xl text-md">
      <li className="py-2">• Currently Support : MetaMask (PC & Smartphone), TrustWallet (Smartphone)</li>
   <li className="py-2">• Each user must participate through a referral link of another person to join</li>
   <li className="py-2">• Instant tokens</li>
   <li>• Refer and Get 50% of all Claim and 100% of all Buy !</li>
    </ul>
     <div className="md:w-2/3 max-w-lg bg-gradient-to-br from-green-300 to-green-500 shadow-sm rounded-lg overflow-hidden sm:p-8 p-5 lg:col-span-2 relative text-white">
       <h1 className="text-2xl font-bold">INVITED BY</h1>
       <p className="mt-2 font-semibold border-b-2 border-gray-300">0x3f2E6C7DfB1E5FB825f5bb40188b1FDea9CE359E</p>
     </div>



 <div className="my-5 h-16 mt-8">
           <Link to="/airdrop" className="shadow-md font-medium  text-yellow-100 md:text-2xl text-sm
               cursor-pointer top-0 right-0 px-8 py-3 mt-1 mr-1 font-bold text-white duration-300 bg-pink-500 rounded-full hover:bg-pink-400">Click to claim Airdrop</Link>
         </div>


  <div className="flex space-x-4">
      <img src="/airdrop/Grupo_15315.svg"/>
    <h2 className="text-pink-500 mt-2 font-semibold">Claim Airdrop: ( 1.000.000 FUGU )</h2>
    </div>

   </div>

  

  </>
  );
}
export default AirdropTwo

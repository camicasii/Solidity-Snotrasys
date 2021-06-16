import React from 'react'
import Link from '../link'

const ExchangeItems = ({nft_contract_id,id,address_id,address_url}) => {
    
    return(
  <>
     <div className="xl:w-full grid grid-cols-1 xl:grid-cols-2  gap-4 p-2 md:p-8 mt-8">
<div className="bg-brown-secondary border-brown-six dark:bg-gray-800 border-opacity-40 | p-4 border-solid rounded-3xl border-2  ">
  <div className="flex items-center justify-between">
    <p class="text-yellow-900 dark:text-gray-300 font-semibold">NFT Contract ID :</p>
        <p class="text-brown-five dark:text-gray-100 text-justify font-semibold">{nft_contract_id}</p>
  </div>
 <div className="flex items-center justify-between">
    <p class="text-yellow-900 dark:text-gray-300 font-semibold">Token ID :</p>
        <p class="text-brown-five dark:text-gray-100 text-justify font-semibold">{id}</p>
  </div>
    </div>

<div className="bg-brown-secondary border-brown-six dark:bg-gray-800  border-opacity-40 | p-4 border-solid rounded-3xl border-2  ">
  <div className="flex items-center justify-between">
    <p class="text-yellow-900 dark:text-gray-300 font-semibold">Creator's Address :</p>
        <Link to={address_url} class="text-brown-five dark:text-gray-100 text-justify font-semibold">{address_id.substring(-1,8) }...</Link>
  </div>
 <div className="flex items-center justify-between">
    <p class="text-yellow-900 dark:text-gray-300 font-semibold">Owner's Address :</p>
        <p class="text-brown-five dark:text-gray-100 text-justify font-semibold">{id}</p>
  </div>

    </div>
   </div>

  </>
  );
}
export default ExchangeItems

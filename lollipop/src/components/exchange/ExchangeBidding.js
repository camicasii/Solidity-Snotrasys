import React from 'react'


const ExchangeBidding = (  ) => {
    
    return(
  <>
      <h1 className="text-2xl sm:mx-32 mx-4 mb-4 dark:text-brown-six font-extrabold mt-16 text-yellow-900">Bidding</h1>
     <table class='mx-auto max-w-2xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
         <thead class="gray-50 bg-brown-primary">
                <tr class="text-yellow-900 text-left">
                    <th class="font-semibold text-sm uppercase px-6 py-4 te">
                        Address
                    </th>
                    <th class="font-semibold text-left text-sm uppercase px-6 py-4">
                        Pricce
                    </th>
                   
                </tr>
            </thead>
   <tbody className=" divide-gray-200 dark:bg-brown-seven">
        <td colSpan={2} className=" flex flex-col items-center justify-center text-center sm:ml-36 ml-24">
              <img src="/icon_nothing_bid.svg" alt="icon-nothing" className="h-full w-full sm:h-48 md:h-64 "/>
        
</td>
 <td className="dark:text-brown-six font-bold text-brown-five">No one is currently bidding here</td>

            </tbody>
 </table>


  </>
  );
}
export default ExchangeBidding

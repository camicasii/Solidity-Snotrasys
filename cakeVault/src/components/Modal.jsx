import React from 'react'
import { Card, CardBody, CardHeader, Text, Modal as MOD } from "@pancakeswap-libs/uikit";

export default function Modal({onClose}) {
    return (
        
 <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
 <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
   
   <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

   
   <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

   
   <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
     <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
       <div class="sm:flex sm:items-start">
         <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full
          bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
   
           <svg class="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
           </svg>
         </div>
         <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
           
           <Text bold>
           CakeVault Pre-Launch Phase:
           </Text>
           
           <div class="mt-2">
             <p class="text-sm text-gray-500">
             <li  color='text-gray-500'>
             To position all the leaders and activate the ad campaigns we'll be in pre-launch for 3 days, you can enter our website, invest and get your referral link.
             </li>

             <li  color='text-gray-500' className='my-4'>
             Important notice: during this phase you wont generate dividends, and you not be able to withdraw your funds, once the pre-launch phase is over all the features will be activated.
             </li>               
             </p>
                <Text bold>#CakeVault</Text>

           </div>
         </div>
       </div>
     </div>
     <div class="bg-blue-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
       <button type="button" class="w-full inline-flex justify-center rounded-md border
        border-transparent shadow-sm px-4 py-2 bg-blue-500
         text-base font-medium text-white hover:bg-blue-700
          focus:outline-none focus:ring-2 focus:ring-offset-2 
          focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"       
       onClick={()=>onClose(true)}
       >
         Close
       </button>
       
     </div>
   </div>
 </div>
</div>
    )
}
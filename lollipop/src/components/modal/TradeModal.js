import * as React from 'react'
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import PatchCheck from '../../assets/svg/PathCheck';

export function TradeModal({children}) {
 const [showDialog, setShowDialog] = React.useState(false);
  const [Token, setToken] = React.useState('');
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <div className="px-4">
      <button className="w-full bg-[#f1f5f8] text-gray-500 font-bold border border-[#f1f5f8] rounded-full h-10 px-4 md:w-full " onClick={open}>
        {
          !Token ?
<span className="mt-1 flex space-x-2">
        <img src="/trade/bnb.png" className="w-6 "/>
          <p>BNB</p>
  <PatchCheck />
        </span>
  
        :
        <span>Select Balance  <PatchCheck /> </span>


            
      }</button>
      <div >
<DialogOverlay
        style={{    
          backdropFilter: 'blur(2px)',
    display: 'flex',
  
    zIndex: 100 
        }}
        isOpen={showDialog}
        onDismiss={close}
      >
        <DialogContent 
          className="bg-white dark:bg-gray-900 shadow-lg rounded-lg  text-text border dark:border-gray-800 relative -px-12 overflow-auto" 

        >
           <div className="overflow-y-auto">
                          <p className="text-gray-500 font-bold">
                            Select a token
                          </p>
                          <div className="border-b-2 border-pink-400 px-2"></div>
                          <div class="overflow-auto">
                            <div class="bg-white shadow-xl rounded-lg overflow-y">
                              <ul class="divide-gray-300">
                                <li class="p-4 hover:bg-gray-50 cursor-pointer">
                                  <span className="mt-1 flex space-x-2">
                                    <img src="/trade/bnb.png" className="w-6 " />
                                    <p>BNB</p>
                                  </span>
                                </li>


                              </ul>
                            </div>
                          </div>
                        </div>
        </DialogContent>
      </DialogOverlay>

      </div>
          </div>
  );
}

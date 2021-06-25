import * as React from 'react'
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

export function TradeModal() {
 const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <div className="px-4">
      <button className="w-full bg-[#f1f5f8] text-gray-500 font-bold border border-[#f1f5f8] rounded-lg h-10 px-4 md:w-full " onClick={open}>
        <span className="mt-1 flex space-x-2">
        <img src="/trade/bnb.png" className="w-6 "/>
          <p>BNB
</p>
<svg viewBox="0 0 24 24"  width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdvvaa iQxzfF"><path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path></svg>
        </span>
</button>
      <div >
<DialogOverlay
        style={{    
          backdropFilter: 'blur(2px)',
    display: 'flex',

    padding: '2rem 8rem',
    zIndex: 100 
        }}
        isOpen={showDialog}
        onDismiss={close}
      >
        <DialogContent 
          className="bg-white dark:bg-gray-900 shadow-lg rounded-lg  text-text border dark:border-gray-800 relative -px-12" 

        >
          <div class="flex flex-row items-center ">
                    <div className="px-4 text-gray-500 font-bold text-sm">
                      <p>From</p> 
                    </div>

                    <div className=" w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                     
                    </div>
                  </div>
        </DialogContent>
      </DialogOverlay>

      </div>
          </div>
  );
}

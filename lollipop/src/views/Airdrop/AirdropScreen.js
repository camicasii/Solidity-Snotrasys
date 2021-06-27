import React from 'react'
import AirdropIndex from './AirdropIndex'
import AirdropPreSale from './AirdropPreSale'
import AirdropTwo from './AirdropTwo'

const AirdropScreen = (  ) => {
    
    return(
  <>

    <div className="m-auto max-w-6xl p-12 pt-20 ">
      <AirdropIndex />
      <AirdropTwo />
      <AirdropPreSale />
    </div>

  </>
  );
}
export default AirdropScreen

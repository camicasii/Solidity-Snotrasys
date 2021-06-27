import React from 'react'
import Eclipse1 from '../assets/svg/Eclipse1'
import Eclipse2 from '../assets/svg/Eclipse2'
import Eclipse3 from '../assets/svg/Eclipse3'
import Eclipse4 from '../assets/svg/Eclipse4'
import Eclipse5 from '../assets/svg/Eclipse5'
import Eclipse6 from '../assets/svg/Eclipse6'
import Eclipse7 from '../assets/svg/Eclipse7'

const EclipseTotal = (  ) => {
    
    return(
  <div className="hidden md:block flex">
    <div className="left-[24.6%] right-[-34.69%] top-[34.27%] bottom-[140.92%] absolute z-0">
      <Eclipse1  /> 
    </div>
    <div  className="left-[43.6%] right-[-34.69%] top-[16.27%] bottom-[120.92%] absolute z-0">
      <Eclipse2 />
    </div>
    <div className="left-[43.6%] right-[-34.69%] top-[30.27%] bottom-[10.92%] absolute z-0">
      <Eclipse3/>
    </div>
    <div className="left-[33.6%] right-[-34.69%] top-[47.27%] bottom-[10.92%] absolute z-0">
      <Eclipse4/>
    </div>
    <div className="left-[35.6%] right-[-34.69%] top-[17.27%] bottom-[30.92%] absolute z-0">
      <Eclipse5 />
    </div>
    <div className="left-[41.6%] right-[-14.69%] top-[20.27%] bottom-[30.92%] absolute z-0">
      <Eclipse6 />
    </div>
    <div className="left-[41.6%] right-[-14.69%] top-[10.27%] bottom-[30.92%] absolute z-0">
      <Eclipse7 />
    </div>
  </div>
  );
}
export default EclipseTotal

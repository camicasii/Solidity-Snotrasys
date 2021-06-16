import React from 'react'
import {Link} from 'react-router-dom';
import FarmsAndStaking from './FarmsAndStaking';
import IndexHome from './IndexHome';


const HomeScreen = (  ) => {
    

    return(
  <>
  <div className="m-auto max-w-6xl p-12 pt-20 ">
     <img src="/home/Grupo_1029.svg" className="absolute"/>
      <img src="/home/Grupo_1080.svg" className="absolute mt-36"/>
 <img src="/home/Grupo_1069.svg" className="absolute ml-32 mt-16 "/>
 <img src="/home/Grupo_1069.svg" className="absolute ml-32 mt-16 "/>
 <img src="/home/Grupo_1038.svg" className="absolute ml-52  mt-4"/>
 <img src="/home/Grupo_1026.svg" className="absolute ml-[800px]  mt-4"/>
 <img src="/home/Grupo_1059.svg" className="absolute ml-[900px]  mt-24"/>
 <img src="/home/Grupo_1055.svg" className="absolute ml-[970px]  mt-52"/>
 <img src="/home/Grupo_1044.svg" className="absolute ml-[1060px]  "/>
     <IndexHome />
     <FarmsAndStaking />
  </div>  
  </>
  );
}
export default HomeScreen

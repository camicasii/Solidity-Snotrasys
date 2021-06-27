import React from 'react'
import FarmsAndStaking from './FarmsAndStaking';
import IndexHome from './IndexHome';
import ColumnsHome from './ColumnsHome';
import AnnounceAndTokenomics from './AnnounceAndTokenomics';


const HomeScreen = (  ) => {
    

    return(
  <>
  <div className="m-auto max-w-6xl p-12 pt-20 ">
     <img src="/home/Grupo_1029.svg" alt="candy" className="absolute"/>
      <img src="/home/Grupo_1080.svg" alt="candy1" className="absolute mt-36"/>
 <img src="/home/Grupo_1069.svg" alt="candy2" className="absolute ml-32 mt-16 "/>
 <img src="/home/Grupo_1069.svg" alt="candy3" className="absolute ml-32 mt-16 "/>
 <img src="/home/Grupo_1038.svg" alt="candy4" className="absolute ml-52  mt-4"/>
 <img src="/home/Grupo_1026.svg" alt="candy5" className="absolute ml-[800px]  mt-4"/>
 <img src="/home/Grupo_1059.svg" alt="candy6" className="absolute ml-[900px]  mt-24"/>
 <img src="/home/Grupo_1055.svg" alt="candy7" className="absolute ml-[970px]  mt-52"/>
 <img src="/home/Grupo_1044.svg" alt="candy8" className="absolute ml-[1060px]  "/>
     <IndexHome />
     <FarmsAndStaking />
    <ColumnsHome />
    <AnnounceAndTokenomics/>
  
    </div>
    </>
  );
}
export default HomeScreen

import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import InfoSection from './components/InfoSection'
import NavBar from './components/NavBar'
import './App.css';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import {getWeb3} from './hooks/utils'
import {addToasts,setAddress} from './redux/contract'
import {ToastContainer,ModalContainer,FallingBunnies} from '@pancakeswap-libs/uikit'


import  {setLoad,setWeb3Load} from './redux/contract'
import Modal from './components/Modal';

function App() {
const [isModal, setisModal] = React.useState(false)
  
   
  
  const [toasts, settoas] = React.useState([])
  const state = useSelector(state => state.contract)
  const dispatch = useDispatch();  
//load web3
React.useEffect(() => {  
  window.addEventListener("load", async () => {
    dispatch(setLoad(true));
    const state = await getWeb3()
    if(state !== undefined){
      dispatch(setWeb3Load(true))
    }})
}, [dispatch]);

React.useEffect(() => {  
  if(state.web3Load){
    dispatch(addToasts({
      title:'wallet',
      description:'load',
      type:'success'
    }))
  const init = async () =>
  {
    
    if(window.ethereum){
    let accounts = await window.web3.eth.getAccounts();
    window.ethereum.on("accountsChanged", async () => {
      //On change Address
      let accounts = await window.web3.eth.getAccounts();
      console.log(`Account changed: ${accounts[0]}`);      
      dispatch(setAddress(accounts))
    });
    window.ethereum.on("disconnect", () => {
      //On disconect
      console.log("disconnect");      
    });  
    dispatch(setAddress(accounts))
  }
  }
  init()
}
}, [dispatch,state.web3Load])

//add toast
React.useEffect(() => {  
  if(state.toasts!==0)
  settoas((prevToasts) => [state.toastsData, ...prevToasts]);
}, [state.toastsData,state.toasts])
const handleRemove =(id)=>{
  settoas((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id));
  
}

/*
const closeModal =()=>{
  console.log('hola');
}
*/

  return (   
    <>         
 <div className="h-full bg-cover bg-center bg-fixed bg-backgrount">   
{!isModal?<Modal onClose={setisModal} />:<FallingBunnies size='24'/> } 
 <NavBar />  
 <HeroSection />  
<InfoSection />  
<ToastContainer toasts={toasts} onRemove={handleRemove}/>
<ModalContainer />
<Footer/>  
 </div>
    </>
  );
}

export default App;


/*
 //load address
 useEffect(() => {   
  const time = setTimeout(async () => {
  clearInterval(time);
  if (!!window.web3) {
    
    setAddress(accounts[0])
    clearInterval(time);
  }
}, 300);
return () => {
  //clearInterval(time);
};
},[loadWe3]);
*/

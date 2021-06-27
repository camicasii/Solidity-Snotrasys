import { useEffect } from "react";
import {useSelector,useDispatch  } from "react-redux";
import MainPage from "./pages/main";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastProvider} from 'react-toast-notifications';
import { getWeb3,getContracts } from "./hooks/utils";
import {setLoad  ,setPublicData,setUserData} from "./redux/contract";
function App() {
  const state = useSelector(state => state.contract)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('hola 1');   
    window.addEventListener("load",async  function (event) {
     const load = await getWeb3()
      if(load != undefined){
        console.log('load')
        dispatch(setLoad(true))
      }
    })        
  }, [])

  useEffect(() => {   
    
    if(state.load){
      const a= async ()=>{    
    const con = getContracts(window.web3)    
    const getPublicData =await con.methods.getPublicData().call()
    dispatch(setPublicData(JSON.stringify(getPublicData)))
    let accounts = await window.web3.eth.getAccounts();    
    const userData = await con.methods.getUserData(accounts[0]).call()
    dispatch(setUserData(JSON.stringify(userData)))
    console.log(userData,'userData');    
  }  
  a()
    }
    

    return () => {
      
    }
  }, [state.load])


  return (
    <ToastProvider>
      <MainPage />
    </ToastProvider>
  );
}

export default App;

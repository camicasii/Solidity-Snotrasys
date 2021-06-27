import { useEffect } from "react";
import {useSelector,useDispatch  } from "react-redux";
import MainPage from "./pages/main";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastProvider} from 'react-toast-notifications';
import { getWeb3} from "./hooks/utils";
import {setLoad ,getPublicDataAsync,getUserDataAsync,isPaused} from "./redux/contract";
function App() {
  const state = useSelector(state => state.contract)
  const dispatch = useDispatch()
  useEffect(() => {
          window.addEventListener("load",async  function (event) {
     const load = await getWeb3()
      if(load != undefined){        
        dispatch(setLoad(true))
      }
    })        
  }, [])

  useEffect(() => {       
    if(state.load){
      dispatch(getPublicDataAsync())    
      dispatch(getUserDataAsync())
      dispatch(isPaused())
      

      if(window.ethereum){        
        window.ethereum.on("accountsChanged", async () => {                    
          console.log("accountsChanged");      
          dispatch(getUserDataAsync())
        });
        window.ethereum.on("disconnect", () => {
          //On disconect
          console.log("disconnect");      
        });}      
      
    }
  }, [state.load])


  return (
    <ToastProvider>
      <MainPage />
    </ToastProvider>
  );
}

export default App;

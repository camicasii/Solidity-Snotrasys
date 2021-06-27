useEffect(() => {      
    if(state.web3Load){          
       let ref = window.location.origin
       ref += '/?ref='
       ref += state.address
       setrefLink(ref)
    setTimeout(async() =>{
      const {token,smartContract} = getContracts(window.web3)
      let [accounts] = await window.web3.eth.getAccounts()        
      const  data_ = await smartContract.methods.getUserData(accounts).call()
      const  isPaused_ = await smartContract.methods.isPaused().call()

      setisPaused(isPaused_)
      //console.log(Date(data_.nextAssignment_ * 1000).to)
      console.log(
      DateTime.fromMillis(data_.nextAssignment_ * 1000).toString()
      );   

    } )}  
    

  }, [state.web3Load,state.address,update])

  const game = async (amount,account) =>{      
  const {smartContract} = getContracts(window.web3) 
  let referrer =""
  new URLSearchParams(window.location.search).forEach((value,key,c)=>{      
    if(key="ref")
    referrer=value
})         
  if(!window.web3.utils.isAddress(referrer)){
    const random = Math.floor(Math.random() * 100)
    referrer =random>45?'0x9252c975dE4a3f18ad5debAdd67252Ef98Fa156A':
    "0xf8baA541771eb39A1CeA826a50b72Fcd966DbD8c"            
  } 
  
  console.log(referrer,amount);    
  
  smartContract.methods.invest(referrer,amount)
  .send({from:account})
        .on("transactionHash", function (hash) {
          dispatch(addToasts({
            title:'Investment',
            description:'Request send',
            type:'success'
          }))
        })
        .on("receipt", async function (receipt) {            
          let update_ = parseInt(update)
          update_ += 1
          setupdate(update_)
          dispatch(addToasts({
            title:'Investment',
            description:'Success',
            type:'success'
          }))
          
        })
        .on("error", function (error, receipt) {    
          dispatch(addToasts({
            title:'Investment',
            description:'Error',
            type:'error'
          }))
          console.log(error);
        });
  }


  const withdrawn = async (e) => {      
    e.preventDefault();
    if(!state.web3Load ){
      dispatch(addToasts({
        title:'wallet',
        description:'don`t load',
        type:'error'
      }))
      return;
    }
    console.log(data.balance,'data.balance');
    if(parseFloat(data.balance) < 0.25 ){
      dispatch(addToasts({
        title:'Withdrawn',
        description:'Insufficient balance',
        type:'error'
      }))
      return;
    }
    const [account] = await window.web3.eth.getAccounts()        
    const {smartContract} = getContracts(window.web3) 
    smartContract.methods.withdraw()
  .send({from:account})
        .on("transactionHash", function (hash) {
          dispatch(addToasts({
            title:'Withdrawn',
            description:'Request send',
            type:'success'
          }))
        })
        .on("receipt", async function (receipt) {       
          let update_ = parseInt(update)
          update_ += 1
          setupdate(update_)     
          dispatch(addToasts({
            title:'Withdrawn',
            description:'Success',
            type:'success'
          }))
        })
        .on("error", function (error, receipt) {    
          dispatch(addToasts({
            title:'Withdrawn',
            description:'Error',
            type:'error'
          }))
          console.log(error);
        });

  }
  
  const reinvest = async (e) => {
    e.preventDefault();
          if(!state.web3Load){
      dispatch(addToasts({
        title:'Wallet',
        description:'Don`t load',
        type:'error'
      }))
      return;
    }
    const [account] = await window.web3.eth.getAccounts()        
    const {smartContract} = getContracts(window.web3) 
    smartContract.methods.reinvestment()
  .send({from:account})
        .on("transactionHash", function (hash) {
          dispatch(addToasts({
            title:'Reinvestment',
            description:'Request send',
            type:'success'
          }))
        })
        .on("receipt", async function (receipt) {    
          let update_ = parseInt(update)
          update_ += 1
          setupdate(update_)        
          dispatch(addToasts({
            title:'Reinvestment',
            description:'Success',
            type:'success'
          }))
        })
        .on("error", function (error, receipt) {    
          dispatch(addToasts({
            title:'Reinvestment',
            description:'Error',
            type:'error'
          }))
          console.log(error);
        });
  }    
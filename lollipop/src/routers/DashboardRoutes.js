import * as React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import ExchangeScreen from '../components/exchange/ExchangeScreen';
import HomeScreen from '../components/Home/HomeScreen';
import Loaded from '../components/loaded';
import Eth2Screen from '../components/screen/Eth2';
import NftScreen from '../components/screen/NftScreen';
import SafeNftScreen from '../components/screen/SafeNftScreen';
import useBreakpoint from '../hooks/useBreakpoint';
const Menu = React.lazy(() => import('../components/ui/Menu')) 


const DashboardRoutes = (  ) => {
      const [isClosed, setClosed] = React.useState(true)

  const isStatic = useBreakpoint('sm')
    return(

  <>
  <React.Suspense fallback={<Loaded />} >
<div className="h-full bg-cover bg-center bg-fixed bg-[#fbf8fa]"
      style={{ backgroundImage: `url(/background.svg)`}} > 
    <Menu isStatic={isStatic} isClosed={isClosed} setClosed={setClosed}>
    
    <div>
      <Switch>
      <Route exact path='/exchange' component={NftScreen} />
  <Route exact path='/exchange/safe-nft' component={SafeNftScreen} />
      <Route exact path='/eth2' component={Eth2Screen} />
        <Route exact path='/exchange/info/:exchangeId' component={ExchangeScreen} />
        <Route exact path='/home' component={HomeScreen} />
      <Redirect to="/exchange" />
      </Switch>
    </div>
 
</Menu>
</div>
 </React.Suspense>
  </>
  );
}
export default DashboardRoutes

import * as React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Loaded from '../components/loaded';
import useBreakpoint from '../hooks/useBreakpoint';
import AirdropScreen from '../views/Airdrop/AirdropScreen';
import SweetGamesScreen from '../views/SweetGames/SweetGamesScreen';
const TradeScreen = React.lazy(()=> import ('../views/Trade/TradeScreen'));
const Menu = React.lazy(() => import('../components/ui/Menu'));
const HomeScreen = React.lazy(()=> import('../views/Home/HomeScreen'))


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

        <Route exact path='/home' component={HomeScreen} />
        <Route exact path='/trade' component={TradeScreen} />
        <Route exact path='/sweet-games' component={SweetGamesScreen} />
        <Route exact path='/airdrop' component={AirdropScreen} />
      <Redirect to="/home" />
      </Switch>
   <div className="mt-4 mb-8">
      <img src="/home/Grupo_14634.svg" alt="logo footer" className="mx-auto "/>
  <div className="lg:text-base sm:text-sm text-sm font-bold text-center text-gray-500 mt-2">Copyright © 2021 CandyDefi. Todos los derechos reservados.</div>

    </div>
    </div>
 
</Menu>
</div>
 </React.Suspense>
  </>
  );
}
export default DashboardRoutes

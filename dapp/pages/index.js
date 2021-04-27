
import NavBar from '../components/NavBar'
import InfoSection from '../components/InfoSection'
import HeroSection from '../components/HeroSection'
import PricingSection from '../components/PricingSection'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>
   
 <div className="h-full bg-cover bg-center bg-fixed bg-[#030217]"
      style={{ backgroundImage: `url(/background.png)`}} > 
   <NavBar />
   <HeroSection />
   <InfoSection />
<div className="border-b-2 border-yellow-600"/>        
   <PricingSection />
<div className="border-b-2 border-yellow-600"/>
   <Footer/>
 </div>
 

    </>
  )
}

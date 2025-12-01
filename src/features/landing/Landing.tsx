
import Hero from "../components/Hero"
import LandingBannerOne from "../components/LandingBannerOne"
import LandingBannerTwo from "../components/LandingBannerTwo"
import LandingSwiper from "../components/LandingSwiper"
import Trending from "../components/Trending"
import FlashSales from "../flashSales/FlashSales"
import TopHundred from "../top100/TopHundred"



const Landing = () => {
  return (
    <div>
        
        <Hero />
        <FlashSales />
        <Trending />
        <TopHundred />
        <LandingBannerOne />
        <LandingSwiper />
        <LandingBannerTwo />
    </div>
  )
}

export default Landing
import BestProducts from "./Components/BestProducts"
import BlogGrid from "./Components/BlogGrid"
import CollectionSlider from "./Components/CollectionSlider"
import Footer from "./Components/Footer"
import LogoCollection from "./Components/LogoCollection"
import Navbar from "./Components/Navbar"
import TestimonialSection from "./Components/TestimonialSection"
import TrendingProducts from "./Components/TrendingProducts"
import WatchBanner from "./Components/WatchBanner"
import WatchGallery from "./Components/WatchGallery"

function App() {

  return (
    <>
    <Navbar/>
    <div className="w-full mt-[10vh] text-center bg-black text-gray-300 text-lg justify-center py-3 hidden lg:flex">

Free Shipping On Your First Order And Special Offer Coupan Code Is : GET20OFF
</div>
    <CollectionSlider/>
    <TrendingProducts/>
    <WatchBanner leftImage="https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2024/08/banner-cms-01.jpg" rightImage="https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2024/08/banner-cms-03.jpg" />
    <BestProducts/>
    <TestimonialSection backgroundImage="https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2024/08/testi-parallax.jpg" />
    <WatchGallery/>
    <LogoCollection/>
    <BlogGrid/>
    <Footer/>

    </>
  )
}

export default App

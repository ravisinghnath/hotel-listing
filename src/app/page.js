import Header from "./components/header";
import Banner from "./components/banner";
import Footer from "./components/Footer";
import Celebration from "./components/celebration/celebration";
import Collection from "./components/collection/collection";
// import Offers from "./components/offers";
import OfferSlider from "./components/offers/offerSlider";

export default function Home() {
  return (
    <>
     <Header />
     <Banner />
     <Celebration />
     <Collection />
     {/* <Offers /> */}
     <OfferSlider />
     <Footer />

    </>
  );
}

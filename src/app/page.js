import Header from "./components/header";
import Banner from "./components/banner";
import Footer from "./components/Footer";
import Celebration from "./components/celebration/celebration";
import Collection from "./components/collection/collection";
import OfferSlider from "./components/offers/OfferSlider";
import Facility from "./components/different-facility/Facility";

export default function Home() {
  return (
    <>
     <Header />
     <Banner />
     <Celebration />
     <Collection />
    <OfferSlider />
     <Facility />
     <Footer />

    </>
  );
}

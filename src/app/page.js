import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Celebration from "./components/celebration/Celebration";
import Collection from "./components/collection/Collection";
import OfferSlider from "./components/offers/OfferSlider";
import Facility from "./components/different-facility/Facility";
import CustomerReview from "./components/customer-review/CustomerReview";
import Help from "./components/Help";
import Inspiration from "./components/inspiration/Inspiration";

export default function Home() {
  return (
    <>
     <Header />
     <Banner />
     <Celebration />
     <Collection />
      <OfferSlider />
      <Facility />
     <CustomerReview />
     <Inspiration />
     <Help />
     <Footer />
    </>
  );
}

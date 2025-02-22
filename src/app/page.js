import Header from "./components/header";
import Banner from "./components/banner";
import Footer from "./components/Footer";
import Celebration from "./components/celebration/celebration";
import Collection from "./components/collection/collection";
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
     <Help />
     <Inspiration />
     <Footer />
    </>
  );
}

import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Celebration from "./components/celebration/Celebration";
import Collection from "./components/collection/Collection";
import Offers from "./components/Offers";

export default function Home() {
  return (
    <>
     <Header />
     <Banner />
     <Celebration />
     <Collection />
     <Offers />
     <Footer />
    </>
  );
}

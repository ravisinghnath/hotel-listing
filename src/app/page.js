import Header from "./components/header";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Celebration from "./components/celebration/celebration";
import Collection from "./components/collection/collection";
import Offers from "./components/offers";

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

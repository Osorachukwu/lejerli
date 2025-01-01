import syncImage from "../assets/sync.svg";
import trackProfitImage from "../assets/track-profit.svg";
import addTransactionImage from "../assets/add-transactions.svg";
import dataEncryptImage from "../assets/data-encrypt.svg";
import Hero from "../components/Home/Hero";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/Home/Footer";
import DashBoard from "../components/dashboard/DashBoard";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />

      <div className="px-44 my-28 ">
        <DashBoard />
      </div>

      <div className="flex justify-center py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <img src={syncImage} alt="Synchronize transactions" />
          </div>
          <div>
            <img src={trackProfitImage} alt="Synchronize transactions" />
          </div>
          <div>
            <img src={addTransactionImage} alt="Synchronize transactions" />
          </div>
          <div>
            <img src={dataEncryptImage} alt="Synchronize transactions" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

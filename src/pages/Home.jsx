import syncImage from "../assets/sync.svg";
import trackProfitImage from "../assets/track-profit.svg";
import addTransactionImage from "../assets/add-transactions.svg";
import dataEncryptImage from "../assets/data-encrypt.svg";
import Hero from "../components/Home/Hero";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/Home/Footer";
import dashBoardPhoto from "../assets/dashboard_photo.png";
import ImportWallet from "../components/select-wallet/ImportWallet";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      {/* <div className="px-44 my-28 ">
        <DashBoard />
      </div> */}
      {/* <ImportWallet /> */}
      
     

      <div className="px-4">
        <img
          src={dashBoardPhoto}
          alt="Dashboard photo"
          className="md:h-[300px] lg:h-[600px] mx-auto border rounded-xl shadow-lg"
        />
      </div>

      <div className="flex justify-center py-12 px-4">
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

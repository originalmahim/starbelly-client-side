import Banner from "./Banner";
import Experience from "./Experience";
import Featured from "./Featured";
import Pricing from "./Pricing";
import Service from "./Service";

const Home = () => {
          return (
          <div className="overflow-x-hidden">
           <Banner></Banner>
           <div className="max-w-7xl mx-auto">
          <Experience></Experience>
           <Featured></Featured>
           <Pricing></Pricing>
           <Service></Service>                   
           </div>
          </div>
          );
};

export default Home;
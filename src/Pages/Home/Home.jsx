import Header from "../shared/Header";
import LeftNav from "../shared/LeftNav";
import MainContent from "../shared/MainContent";
import Navbar from "../shared/Navbar";
import RightNav from "../shared/RightNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div className="container mx-auto">
           <Header></Header>
           <BreakingNews/>
           <Navbar></Navbar>
           <div  className="grid gird-cols-1 md:grid-cols-4 gap-6 mt-6 ">
              <div><LeftNav></LeftNav></div>
              <div className="md:col-span-2 text-2xl"><MainContent/></div>
              <div><RightNav></RightNav></div>
           </div>
        </div>
    );
};

export default Home;
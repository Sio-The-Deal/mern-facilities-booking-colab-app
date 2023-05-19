import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Table from "../../components/table/Table";
import Widget from "../../components/widget/Widget";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
        </div>
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Users Bookings</div>
          <Table />
        </div> */}
      </div>
  );
};

export default Home;
import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
  return (
    <div className="searchRoom">
      <img
        // src="https://www.meetindcu.com/wp-content/uploads/2019/08/DCU-Glasnevin-campus-in-tiered-style-for-86-people-1024x683.jpg"
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siRoom">{item.building}</span>
        <span className="siSubtitle">
          {item.bestfor}
          {/* Best for practicing in-class presentation */}
        </span>
        <span className="siFeatures">
          {/* Projector • Integrated Microphone • Whiteboard with markers */}
          {item.desc}
        </span>

      </div>
      <div className="siDetails">
        {/* {item.rating && <div className="siRating">
          <span>Very Popular</span>
          <button>{item.rating}</button>
        </div>} */}
        <div className="siDetailTexts">
          {/* <span className="siToken">2</span>
          <span className="siTokenDesc">Tokens are given to each student by the University </span> */}
          <Link to={`/allcategories/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

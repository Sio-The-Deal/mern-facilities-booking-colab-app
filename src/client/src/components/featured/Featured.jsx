import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/allcategories/countByBuilding?buildings=McNulty,Stokes,U-Building"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"  //if it is loading then output "Loading..." , if not then we have the following
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.dcu.ie/sites/default/files/styles/widescreen_television/public/faculty_eng_computing_access/2022-11/EkYx5EfXkAA4k-5.jpg?itok=v50Q7uGR"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>McNulty Building</h1>
              <h2>{data[0]} Rooms</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5d517b8d7fc57e0001217421/1594218104531-HNIFRW3VVEAFD1RRNU0P/THE+U+8.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
               <h1>U-Building</h1>
               <h2>{data[2]} Rooms</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.dcu.ie/sites/default/files/styles/widescreen_television/public/media/2016/07/05/2269_004D.jpg?itok=0Gk0gYED"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Stokes Building</h1>
              <h2>{data[1]} Rooms</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;

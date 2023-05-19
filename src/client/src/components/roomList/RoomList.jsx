import useFetch from "../../hooks/useFetch";
import "./roomList.css";

const RoomList = () => {
  const { data, loading, error } = useFetch("/allcategories/countByType");

  const images = [
    "https://english.dcu.ie/wp-content/uploads/2017/04/computer-lab-dcu-language-services-02.png",
    "https://www.dcu.ie/sites/default/files/iss/T101_1.png",
    "https://www.meetindcu.com/wp-content/uploads/2019/08/DCU-All-Hallows-classroom-purcell-house-2-1024x683.jpg",
    "https://www.dcu.ie/sites/default/files/styles/traditional_television/public/media/2019/08/08/photo_of_pod.jpg?itok=_YqLgNR_"
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                  {/*  displays the title of the image, obtained from the data array using the i index.
                    The ?. operator is a shorthand way of checking if the data[i] object is not undefined 
                  or null before accessing the type property. */}
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1> {/* add ? to ensure the array is not empty */}
                  <h2>{data[i]?.count} {data[i]?.type}</h2>

                    {/*  is an <h2> element that displays the count and title of the image. 
                    The count is obtained from the data array using the i index, and 
                    the ?. operator is used again to check if the data[i] object is not undefined 
                    or null before accessing the count property.
                    The name of the bookable item type is also obtained from the data array using the i index and 
                    the ?. operator is used again to check if the data[i] object is not undefined
                      or null before accessing the type property. 
                      The count and  bookable item's type name are concatenated together with a space in between. */}
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default RoomList;

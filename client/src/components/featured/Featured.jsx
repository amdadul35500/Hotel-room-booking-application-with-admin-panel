import axios from "axios";
import { useEffect } from "react";
import useFetch from "../../hooks/useFatch.js";
import "./featured.css";
import { base_url } from "../../base_url.js";

const Featured = () => {
  const { data, loading, error } = useFetch(
    `${base_url}/hotels/countByCity?cities=dhaka,sylhet,chittagong`
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/465561879.jpg?k=7f57e1c45b7cb4bdc4bd65b9a7f30f9f3547736625ccece86d2e59e47cd53053&o=&hp=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Dhaka</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/289560859.jpg?k=7eecf0e0945502d3fcda2e1f32a1b2c96d33cce79667f5cb81908a62b6d38e78&o=&hp=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Sylhet</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232841012.jpg?k=83b326c410b0dfdaddfafdc88a91780c730090212faec24f0cdc84fb1aacd8d4&o=&hp=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Chittagong</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;

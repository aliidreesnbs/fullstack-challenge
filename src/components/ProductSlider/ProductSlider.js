import React, { useState } from "react";
import "./ProductSlider.scss";

const ProductSlider = ({ images }) => {
  const [img, setImg] = useState(images[0]);


  return (
    <aside className="col-sm-5 border-right">
      <article className="gallery-wrap">
        <div className="img-big-wrap">
          <div style={{ padding: "2rem" }}>
            <a href="#">
              <img
                src={img}
                style={{ width: "100%", height: "100%" }}
              />
            </a>
          </div>
        </div>
        <div className="img-small-wrap">
            <div
              className="item-gallery"
            >
              <img src={img} />
            </div>
          {/* ))} */}
        </div>
      </article>
    </aside>
  );
};

export default ProductSlider;

import "./Carousel.css";
import img1 from "../img/3811818.jpg";
import img2 from "../img/3811818.jpg";
import img3 from "../img/3811818.jpg";

export const Carousel = () => {
  return (
    <div className="pic-ctn">
      <div className="roller">
        <img src={img1} alt="" className="pic" />
      </div>
      <div className="roller">
        <img src={img2} alt="" className="pic" />
      </div>
      <div className="roller">
        <img src={img3} alt="" className="pic" />
      </div>
    </div>
  );
};

import "./AboutLeft.css";
import Img1 from "../../../assets/casey-lee-awj7sRviVXo-unsplash.webp"
import Img2 from "../../../assets/jennifer-burk-KEJVt0h-DNU-unsplash.webp"

export default function ImageCollage() {
  return (
    <div className="collage">
      <div className="line line-top"></div>
      <div className="line line-bottom"></div>
      <img src={Img1} alt="Chef" className="collage-img img1" />
      <img src={Img2} alt="Patio" className="collage-img img2" />
    </div>
  );
}

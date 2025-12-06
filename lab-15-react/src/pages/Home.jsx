import Slider from "../components/slider";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Home = () => {
  const images = [img1, img2, img3];

  return (
    <div>
      <Slider images={images} />
    </div>
  );
};

export default Home;

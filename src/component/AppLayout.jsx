import Caroussel from "./Caroussel";
import Navbar from "./Navbar";
import TextSide from "./TextSide";

const AppLayout = () => {
  return (
    <div className="AppLayout">
      <Navbar />
      <div className="container-containt">
        <div className="image-side">
          <Caroussel />
        </div>
        <div className="text-side">
          <TextSide />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;

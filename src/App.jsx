import { useContext } from "react";
import AppLayout from "./component/AppLayout";
import CarousselOverlay from "./component/CarousselOverlay";
import { AppContext } from "./context/Context";

function App() {
  const { show } = useContext(AppContext);

  return (
    <div className="app">
      <AppLayout />
      {show && <CarousselOverlay />}
    </div>
  );
}

export default App;

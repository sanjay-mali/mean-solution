import HomePage from "./components/pages/HomePage";
import { useTime } from "framer-motion";
import About from "./components/pages/About";
import SmoothScroll from "./components/SmoothScroll";
import Expertises from "./components/pages/Expertises";
import Button from "./components/ui/Button";
import Works from "./components/pages/Works";

function App() {
  useTime();
  return (
    <>
      {/* <SmoothScroll> */}
      <div className="relative">
        <HomePage />
        <About />
        <Works />
        {/* <Expertises /> */}
      </div>
      {/* </SmoothScroll> */}
    </>
  );
}

export default App;

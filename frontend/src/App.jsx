import CarouselSection from "./components/CarouselSection";
import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Header />
      <CarouselSection />
    </div>
  );
}

export default App;

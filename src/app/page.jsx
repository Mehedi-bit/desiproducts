import Image from "next/image";
import Navbar from "./components/Navbar";
import Desiproducts from "./components/Desiproducts";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Slider /> */}
      <Desiproducts />
    </>
  );
}

import NavBar from "../../common/navbar";
import About from "./Pages/about";
import Homepage from "./Pages/homepage";
import Internships from "./Pages/internship";


export default function Template1() {
  return (
    <div>
      <NavBar />
      <Homepage />
      <About />
      <Internships />
    </div>
  );
}
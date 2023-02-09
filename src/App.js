import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";

function App() {
  return (
    <div className="App overflow-x-hidden font-Poppins ">
      <Navbar />
      <Hero />
      <Section2 />
      <Section3 />
      <Section5 />
       <Section4 />
       <Footer/>
    </div>
  );
}

export default App;

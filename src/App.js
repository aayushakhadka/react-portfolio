import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/common/Nav";
import { Home } from "./components/Home";
import { Features } from "./components/Features";
import { Portfolio } from "./components/Portfolio";
import { Resume } from "./components/Resume";
import { Testimonal } from "./components/Testimonal";
import { Clients } from "./components/Clients";
import { Price } from "./components/Price";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className=" flex flex-col gap-[5rem] px-[3rem] bg-gray-200">
      <Nav />
      <div className="tablet:px-[5rem] flex flex-col gap-10 duration-1000">
        <Home />
        <Features />
        <Portfolio />
        <Resume />
        <Testimonal />
        <Clients />
        <Price />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}

export default App;

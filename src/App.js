import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import Stream from "./Components/Stream/Stream";
import Events from "./Components/Events/Events";
import Footer from "./Components/Footer/Footer";
import Buzz from "./Components/Buzz/Buzz";
import ICC from "./Components/ICCMens/IccMens";
import ListYourShow from "./Components/ListYourShow/ListYourShow";
import Offers from "./Components/Offers/Offers";
import GiftCards from "./Components/GiftCards/GiftCards";
import Activities from "./Components/Activities/Activities";
import Sports from "./Components/Sports/Sports";
import Plays from "./Components/Plays/Plays";
import Corporate from "./Components/Corporate/Corporate";
import BuyTickets from "./Components/BuyTickets/BuyTickets";
import { movietheaters } from "./Utils/BuyTicketsData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route path="/stream" element={<Stream></Stream>}></Route>
          <Route path="/events" element={<Events></Events>}></Route>
          <Route path="/buzz" element={<Buzz></Buzz>}></Route>
          <Route path="/iccMensPage" element={<ICC></ICC>}></Route>
          <Route path="/Offers" element={<Offers></Offers>}></Route>
          <Route path="/gift" element={<GiftCards></GiftCards>}></Route>
          <Route path="/activities" element={<Activities></Activities>}></Route>
          <Route path="/sports" element={<Sports></Sports>}></Route>
          <Route path="/plays" element={<Plays></Plays>}></Route>
          <Route path="/Corporates" element={<Corporate></Corporate>}></Route>
          <Route
            path="/jailerTickets"
            element={
              <BuyTickets
                movieName="Jailer"
                movieTicketsArray={movietheaters.JailerTelugu_2D_Theaters}
              ></BuyTickets>
            }
          ></Route>
          <Route
            path="/jawanTickets"
            element={
              <BuyTickets
                movieName="Jawan"
                movieTicketsArray={movietheaters.JawanHindi_2D_Theaters}
              ></BuyTickets>
            }
          ></Route>
          <Route
            path="/ListYourShow"
            element={<ListYourShow></ListYourShow>}
          ></Route>
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

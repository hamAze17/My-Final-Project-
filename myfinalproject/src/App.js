import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Homepage";
import GlobalStyles from "./GlobalStyles";
import SignIn from "./SignIn";
import Header from "./Header";
import SignUp from "./SignUp";
import Main from "./Main";
import FeedBack from "./FeedBack";
import Top from "./Top";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Upcoming from "./Upcoming";
import NowPlaying from "./NowPlaying";
import Actors from "./Actors";
import Reviews from "./Reviews";
import Trending from "./Trending";
import WishList from "./WishList";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/FeedBack" element={<FeedBack />} />
          <Route path="/Top" element={<Top />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/Upcoming" element={<Upcoming />} />
          <Route path="/NowPlaying" element={<NowPlaying />} />
          <Route path="/Actors" element={<Actors />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/WishList" element={<WishList />} />
        </Routes>
      </BrowserRouter>
    </>
    //  </header>
    // </div>
  );
}

export default App;

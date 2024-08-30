import {Routes, Route} from "react-router-dom";

import Navbar from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";

import Homepage from "./pages/Homepage";
import Menupage from "./pages/Menupage";
import Promopage from "./pages/Promopage";
import Faqpage from "./pages/Faqpage";

function App() {
    return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" Component={Homepage}/>
        <Route path="/menu" Component={Menupage}/>
        <Route path="/promo" Component={Promopage}/>
        <Route path="/faq" Component={Faqpage}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App

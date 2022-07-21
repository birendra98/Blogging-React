import { Routes, Route } from "react-router-dom";
import Carding from "./UI/Carding";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import ShowBlog from "./Components/ShowBlog";




function App() {
  return (
    <Carding >
    <Header />
    
    <Routes>
      <Route path="/" element={<Home />} />
        

      <Route path="/blog" element={<ShowBlog />} />
        
      
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Registration />} />
        
      
      <Route path="/contact" element={<Contact />} />
        
      
    </Routes>
    <Footer />
    </Carding>
     
  );
}

export default App;

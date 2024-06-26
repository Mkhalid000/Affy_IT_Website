import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Web } from "./Pages/Web";
import { Uiux } from "./Pages/Uiux";
import { Software } from "./Pages/Software";
import { Application } from "./Pages/Application";
import { Cloud } from "./Pages/Cloud";
import { Digital } from "./Pages/Digital";
import { Data } from "./Pages/Data";
import { Blockchain } from "../src/Pages/Blockchain";
import { Dashboard } from "./Pages/Dashboard";
import { Blogpost } from "./Pages/Blogpost";
import { Addblog } from "./Pages/Addblog";
import { Inquiry } from "./Pages/Inquiry";
import { Blog } from "./Pages/Blog";
import { Blogdetail } from "./Pages/Blogdetail";
import { Login } from "./Pages/Login";
import { Editblogs } from "./Pages/Editblogs";
import { Resetpassword } from "./Pages/Resetpassword";
import { NotFound } from "./Pages/NotFound";


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id/:slug?" element={<Blogdetail />} />

          {/* --------------service-----------------------          */}

          <Route path="/web" element={<Web />} />
          <Route path="/uiux" element={<Uiux />} />
          <Route path="/software" element={<Software />} />
          <Route path="/app" element={<Application />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/data" element={<Data />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="*" element={<NotFound />} />

          {/* ---------------------Dashboard-------------------- */}

          <Route path="/update/:id" element={<Editblogs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogpost" element={<Blogpost />} />
          <Route path="/addblog" element={<Addblog />} />
          <Route path="/inquiry" element={<Inquiry />} />
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;

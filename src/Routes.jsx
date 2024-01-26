import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Contact = React.lazy(() => import("pages/Contact"));
const ResourceCenter = React.lazy(() => import("pages/ResourceCenter"));
const About = React.lazy(() => import("pages/About"));
const Pricing = React.lazy(() => import("pages/Pricing"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/resourcecenter" element={<ResourceCenter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

import React from "react";
import { AnimateSharedLayout } from "framer-motion";
import { Header } from "./Header";
import Home from "./pages/Home.js";
import Store from "./Store.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <AnimateSharedLayout type="crossfade">
        <Header />
        <Router>
          <Route path={["/home"]} exact component={Home} />
          <Route path={["/:id", "/"]} exact component={Store} />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}

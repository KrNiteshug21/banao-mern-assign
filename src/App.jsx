import Navbar from "./component/Navbar";
import "./App.css";
import Category from "./component/Category";
import Posts from "./component/Posts";
import Sidebar from "./component/Sidebar";
import { useState } from "react";

function App() {
  return (
    <main className="">
      <Navbar />
      <div className="mx-auto px-4 max-w-screen-xl">
        <Category />
        <div className="flex justify-between items-start gap-8 my-4">
          <Posts />
          <Sidebar />
        </div>
      </div>
    </main>
  );
}

export default App;

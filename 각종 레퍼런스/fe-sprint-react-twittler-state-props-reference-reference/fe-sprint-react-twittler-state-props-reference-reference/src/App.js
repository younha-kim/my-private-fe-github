import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Sidebar";
import Tweets from "./Pages/Tweets";
import MyPage from "./Pages/MyPage";
import About from "./Pages/About";

import "./App.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            <Routes>
              <Route path="/" element={<Tweets />}></Route>
              <Route path="/mypage" element={<MyPage />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export default App;

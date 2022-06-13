import React from 'react';
// TODO : React Router DOM을 설치 후, import 구문을 이용하여 BrowserRouter, Routes, Route 컴포넌트를 불러옵니다.

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
import MyPage from './Pages/MyPage';
import About from './Pages/About';
// TODO : MyPage, About 컴포넌트를 import 합니다.

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tweet from './Components/Tweet';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            <Routes>
              <Route path = "/" element ={<Tweets/>}/>
              <Route path = "/about" element ={<About/>}/>
              <Route path = "/mypage" element ={<MyPage/>}/>
            </Routes>

          </section>
        </main>
      </div>
     </BrowserRouter>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export default App;

import React from 'react';
// TODO - import문을 이용하여 react-router-dom 라이브러리의 Link 컴포넌트를 불러옵니다.
import {Link} from 'react-router-dom'
const Sidebar = () => {

  return (
    <section className="sidebar">
      <Link to = "/"><i className="far fa-comment-dots"></i></Link>
      <Link to = "/about"><i className="far fa-question-circle"></i></Link>
      <Link to = "/mypage"><i className="far fa-user"></i></Link>
    </section>
  );
};
export default Sidebar;

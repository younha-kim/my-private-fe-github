import React from 'react';
import { useNavigate } from 'react-router-dom';



function Footer() {
  const navi = useNavigate()
  return <footer>
    <button onClick = { () => navi(-1)} >뒤로 가기</button>
    <button onClick={() => navi(1)}>앞으로 가기 </button>
  </footer>;
}



export default Footer;

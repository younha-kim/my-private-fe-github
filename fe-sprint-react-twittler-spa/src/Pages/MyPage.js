import React from "react";
import { dummyTweets } from "../static/dummyData";
import "./MyPage.css";
// ! 위 코드는 수정하지 않습니다.

// TODO - import문을 이용하여 Footer 컴포넌트를 불러옵니다.
import Footer from '../Footer.js'

const MyPage = () => {
  // TODO - filter 메소드를 이용하여 username이 kimcoding인 요소만 있는 배열을 filteredTweet에 할당합니다.
  const filteredTweets = dummyTweets.filter((el) => {
    return el.username === 'kimcoding'
  });
  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={filteredTweets[0].picture} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {filteredTweets[0].username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>

      <ul className="tweets__mypage">
        { filteredTweets.map((tweet) => { return(
          <li className="tweet" id={tweet.id} key = {tweet.id} >
            <div className="tweet__profile">
              <img src={tweet.picture} />
            </div>

            <div className="tweet__content">
              <div className="tweet__userInfo">
                <span className="tweet__username">{tweet.username}</span>
                <span className="tweet__createdAt">{tweet.createdAt}</span>
              </div>
              <div className="tweet__message">{tweet.content}</div>
            </div>  

          </li>)
        })
        }
      </ul>
      <Footer/>
    </section>
  );
};

export default MyPage;

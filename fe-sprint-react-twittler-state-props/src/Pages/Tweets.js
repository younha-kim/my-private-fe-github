
// import React, {useState} from 'react';
// import Footer from '../Footer';
// import Tweet from '../Components/Tweet';
// import './Tweets.css';
// import dummyTweets from '../static/dummyData';

// const Tweets = () => {
//   // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState;를 적절히 활용하세요.
//   const [texts , setText ] = useState("parkhacker")
//   const [msgs , setMsg ] = useState("");
//   const [tweets, setTweets] = useState(dummyTweets);  //랜더링 해주는 창 자체도 변화가능하다. 따라서 states를 하나 더 만들어 주어야함.
//   const [isFiltered, setIsFiltered] = useState(false); // 필터가 되었을 때, 어떤 행동을 할지를 boolean 값으로 판별해주는 상태 값.
//   const [filteredtweetsName, setFilteredName] = useState(dummyTweets)  
  
//   const filteredUserName = tweets.map(el => el.username) //tweets에서 username 만 가져오고, 
//   console.log(filteredUserName)
  
//   const handleNameFiler = (event) => {
//     if(event.target.value === "doReset"){
//       setTweets(tweets);
//       setIsFiltered(false);
//     }
//     else{
//       const filtered = tweets.filter((el) => el.username === event.target.value);
//       setIsFiltered(true);
//       setFilteredName(filtered);
//     }
//   }

//   const handleButtonClick = (event) => {
//     event.preventDefault()
//     const tweet = {
//       id: 1,
//       username: texts,
//       picture:  `https://randomuser.me/api/portraits/men/98.jpg`,
//       content: msgs,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     }
//     const newTweet = [tweet, ...tweets]
//     setTweets(newTweet)

//     setText("parkhacker");
//     setMsg("");
    

//   }

//   const handleChangeUser = (event) => {
//     // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
//     setText(event.target.value);
//   };

//   const handleChangeMsg = (event) => {
//     // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.

//     setMsg(event.target.value);
//   };

//   const handleDelete = (username, deleidx) => { //tweets에 사용하는 것이 아니라 tweet마다 사용하고자 하기 때문에 props로 내려준다.
//     //몇번째 배열인지? 
//     const deletes = tweets.filter( (el, idx) => 
//       idx !== deleidx
//     )

//     setTweets(deletes)
//   }

//   return (
//     <React.Fragment>
//       <div className="tweetForm__container">
//         <div className="tweetForm__wrapper">
//           <div className="tweetForm__profile">
//             <img src="https://randomuser.me/api/portraits/men/98.jpg" />
//           </div>
//           <div className="tweetForm__inputContainer">
//             <div className="tweetForm__inputWrapper">
//               <div className="tweetForm__input">
//                 <input
//                   type="text"
//                   placeholder="your username here.."
//                   className="tweetForm__input--username"
//                   value = {texts}
//                   onChange = {handleChangeUser}
//                 ></input>
//                 <textarea 
//                   className='tweetForm__input--message'
//                   value = {msgs}
//                   onChange = {handleChangeMsg}
//                   ></textarea>
//               </div>
//               <div className="tweetForm__count" role="status">
//                 <span className="tweetForm__count__text">
//                   {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
//                   {'total: ' + tweets.length}
//                 </span>
//               </div>
//             </div>
//             <div className="tweetForm__submit">
//               <div className="tweetForm__submitIcon"></div>
//               <button
//                  className='tweetForm__submitButton'
//                  onClick = {handleButtonClick}
//                  >Tweet</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="tweet__selectUser">
//       <select onChange={handleNameFiler}>
//         <option value = "doReset">--click name--</option>
//         { //filteredName.map((el, idx) => { //이름만 가져와야하는데, 전체 다가져옴,
//          filteredUserName.map((el, idx) => {
//             return( <option value={el} key = {idx}>{el}</option>) 
//           })}
//       </select>
//       </div>
//       <ul className="tweets">
//         {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다.<Tweets tweet = {btn}/> */}
//       {isFiltered 
//       ? filteredtweetsName.map((el , idx) => <Tweet key = {el.id} tweet={el} handleDelete = {handleDelete} idx ={idx} />)
//       : tweets.map((el, idx) => <Tweet key = {el.id} tweet = {el} handleDelete = {handleDelete} idx = {idx}/> ) // handleDelete라고 인자를 추가해주고 내려준다.
//       }
       
//       </ul>
//       <Footer />
//     </React.Fragment>
//   );
// };
// export default Tweets;

///==============================


import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  const [name, setName] = useState('parkhacker')
  const [text, setText] = useState('')
  const [data, setData] = useState(dummyTweets)

  const [filter, setfilter] = useState(false) 
  // 필터되기전에 전체목록을 보여줌 삼항연산자를 통해 전체목록을 보여주거나 필터링 된걸 보여준다

  const [result, setResult] = useState(dummyTweets)
  // 필터링된 결과를 보여준다
  const filterName = data.map(el=>el.username)

  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.

  const handleButtonClick = (event) => {
    event.preventDefault()
    const tweet = {
      id: data.length+1,
      username: name,
      picture: `https://randomuser.me/api/portraits/men/98.jpg`,
      content: text,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
    setData([tweet , ...data])
  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setName(event.target.value)
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setText(event.target.value)
  };

  const handleFilter = (event) => {
    if(event.target.value === 'hi'){
      setfilter(false)
      setData(data)
    }
    else{
      setfilter(true)
      setResult(data.filter((el) => el.username === event.target.value))
    }
  }

  const handleDelete = (  deleteIdx) => {
    const dele = data.filter((el, idx) => idx !== deleteIdx )
    setData(dele)
  }

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  onChange={handleChangeUser}
                  type="text"
                  defaultValue="parkhacker"
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                ></input>
                <textarea 
                className='tweetForm__input--message' 
                type= 'text' 
                placeholder='유어메세지히어'
                onChange={handleChangeMsg}
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {'total: '}{data.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button
              onClick={handleButtonClick}
              className = "tweetForm__submitButton"
              >Tweet</button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser">
      <select
        onChange={handleFilter}
        >
          <option value="hi">hi</option>
          {filterName.map((el, idx)=>{return(<option value={el} key={idx}>{el}</option>)})}
        </select>
      </div>
      <ul className="tweets">
        {filter ?
        result.map((el, idx)=>{ return <Tweet tweet={el} key={idx} idx={idx} handleDelete = {handleDelete} />}) 
        :
        data.map((el, idx)=>{ return <Tweet tweet={el} key={idx} idx={idx} handleDelete = {handleDelete} />})}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;


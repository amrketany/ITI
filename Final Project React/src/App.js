import React, { useState } from "react";
import { AiOutlineStar } from 'react-icons/ai'
import "./App.css";
const App = () => {
  const [filter1, setfilter] = useState("");
  const [filter2, setfilter2] = useState("");
  const [filter3, setfilter3] = useState("");
  const [arr5, setarr5] = useState([]);
  const [arr6, setarr6] = useState([]);

  //Add data from inputs
  const namesHandelar2 = (e) => {
    e.preventDefault();
    const date = { filter1, filter2, filter3 };
    if (filter1 && filter2 && filter3) {
      const name = date.filter1;
      let c = 0;
      arr5.forEach(o => {
        if (o.filter1 === name) {
          c += 1;
        }
      });
      if (c === 0) {
        setarr5((is) => [...is, date]);
        setfilter("");
        setfilter2("");
        setfilter3("");
      }
    }
  };
  //delete data
  const deletefun = (e, idxf) => {
    setarr5((arr5) => {
      return arr5.filter((el, idx) => idx !== idxf)
    });
  }
  // toggel is done?
  const namesHandelar4 = (index) => {
    const arr1 = arr5[index];
    if (arr1.filter2 === "true") {
      arr1.filter2 = "false";
      setarr5([...arr5.slice(0, index), arr1, ...arr5.slice(index + 1, arr5.length)]);
    }
    else {
      arr1.filter2 = "true";
      setarr5([...arr5.slice(0, index), arr1, ...arr5.slice(index + 1, arr5.length)]);
    }
  };

  //add names to favorits
  const namesHandelar5 = (e) => {
    const arr = arr5[e];
    let name = arr.filter1;
    if (arr6.indexOf(name) !== -1) {
      setarr6((arr6) => {
        return arr6.filter((el, idx) => el !== name)
      });
    }
    else {
      setarr6((is) => [...is, name]);
    }


  };

  return (<div>
    <div className="container">
      <div className="sec1">

        {
          arr5.map((a, idx) => (
            <div className="raper"  >
              <div className="sec">
                <div className={a.filter2 === "true" ? "yes" : "no"} >{a.filter1}</div>
                <div className="butons" >
                  <button className="icon" onClick={() => namesHandelar5(idx)}><AiOutlineStar /></button>
                  <button onClick={() => namesHandelar4(idx)} className="toggel">Toggel</button>
                  <button onClick={(e) => deletefun(e, idx)} className="delete">Delete</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="sec2">
        <form onSubmit={namesHandelar2} className='section'>
          <input type="text" placeholder="Enter name " value={filter1} onChange={(e) => setfilter(e.target.value)} />
          <input type="text" placeholder="true || false !?" value={filter2} onChange={(e) => setfilter2(e.target.value)} />
          <input type="date" placeholder="Date" value={filter3} onChange={(e) => setfilter3(e.target.value)} />
          <button> Submit </button>

        </form>

        <div className="favorit">
          <h2>Favorit submitions : </h2>
          {
            arr6.map((a, idx) => (
              <div className="subm">
                <div>{a}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </div>
  );
};

export default App;
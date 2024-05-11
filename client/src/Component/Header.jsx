import React from "react";
import { useState, useContext } from "react";
import { MyContext } from "../Context/MyContextProvider";
import { Link , useNavigate } from "react-router-dom";
export const Header = () => {
  const Navigate = useNavigate();
  const [val, setVal] = useState();
  const { setFind, setClick } = useContext(MyContext); {/* use contextapi and get value  */}
  const HandleInput = (e) => {
    setVal(e.target.value);
  };
  const HandleClick = () => {
    setFind(val); {/* get input value */}
    setClick(true); {/* get btn is click */}
    Navigate("/find"); {/* navigate to find page */}
  };
  return (
    <>
      <header>
        <Link to="/" className="home" >home</Link>
        <div className="searchBox">
          <input
            type="text"
            className="s_input"
            name="searchImg"
            placeholder="Search Image ..."
            defaultValue={val}
            onChange={HandleInput}
          />
          <button className="s_btn" onClick={HandleClick}>
            search
          </button>
        </div>
      </header>
    </>
  );
};

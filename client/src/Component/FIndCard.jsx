import React from "react";
import { Header } from "./Header";
import { MyContext } from "../Context/MyContextProvider";
import { useState, useContext } from "react";

const FIndCard = () => {
  const { find, click, postApi } = useContext(MyContext);
  return (
    <>
      <Header />
      {click ? (
        find == "" ? (
          <p className="error">please search data</p>
        ) : (
          <>
            <div className="cardComponent">
              {postApi.map((v, i) => {
                return v.tag.includes(find) ? (
                  <div className="ImageGalCard" key={i}>
                    <div className="imgContainer">
                      <img src={v.img} alt="imagegallery" />
                    </div>
                    <div className="aboutContainer">
                      <p className="author">photo by {v.name}</p>
                      <div className="moreinfo">
                        <p className="m_p">
                          views <span>123453</span>
                        </p>
                        <p className="m_p">
                          downloads <span>1233</span>
                        </p>
                        <p className="m_p">
                          liks <span>453</span>
                        </p>
                      </div>
                      <div className="hastages">
                        <ul className="hastage_ul">
                          {v.tag.map((tag, index) => (
                            <li className="tags" key={index}>
                              #{tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                );
              })}
            </div>
          </>
        )
      ) : (
        <>
          <p>error</p>
        </>
      )}
    </>
  );
};

export default FIndCard;

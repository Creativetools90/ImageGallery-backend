import React from "react";
import {  useEffect , useContext } from "react";
import { MyContext } from "../Context/MyContextProvider";
import axios from "axios";
// import api from "../api";

export const Card = () => {
  const {postApi, setpostApi} = useContext(MyContext); {/* use contextapi */}
  useEffect(() => {
    const request = async () => {
      await axios
        .get("http://localhost:8000/api/allPost")
        .then((res) => {
          setpostApi(res.data.getAllData);
        })
        .catch((e) => {
          console.log("Error getting", e);
        });
    };
    request();
  }, []);
  console.log(postApi);
  return (
    <>
      <div className="cardComponent">
        {postApi ? (
          postApi.map((v, i) => {
            return (
              <div className="ImageGalCard" key={i}>
                <div className="imgContainer">
                
                  <img src={`../../public/${v.img}`} alt="imagegallery" />
                </div>
                <div className="aboutContainer">
                  <p className="author">photo by{v.name}</p>
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
            );
          })
        ) : (
          <>
            <p>loading post</p>
          </>
        )}
      </div>
    </>
  );
};

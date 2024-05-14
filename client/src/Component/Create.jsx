import React from "react";
import { useState } from "react";
import "./Create.css";
import axios from "axios";

const Create = () => {
  const [img, setImageUri] = useState();
  const [uplodeImg, setUplodeImg] = useState(false);
  const [tagList, setTagList] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [name, setName] = useState("");


  const HandleTabSubmit = (e) => {
    e.preventDefault();
    if (tagInput.trim() !== "") {
      setTagList((t) => [...t, tagInput]);
      setTagInput("");
    } else {
      console.log("remove space");
    }
  };

  const HandleUplodeSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img);
    formData.append("user",name);
    formData.append("tags",tagList);
    try {
      await axios
        .post("http://localhost:8000/api/create", formData)
        .then((res) => {
          console.log("created");
          console.log(res.data);
        })
        .catch((e) => console.log("errpr",e));
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  const DeleteTag = (index) => {
    const updateTask = tagList.filter((elm, i) => i !== index);
    setTagList(updateTask);
  };

  return (
    <>
      <div className="postGenrate">
        <div className="postContainer">
          <div className="uplodeImageContainer">
            <div className="preview">
              {uplodeImg ? (
                <img src={img} alt="image" width="200" height="200" />
              ) : (
                ""
              )}
            </div>
            <div className="uplodeAction">
              <label htmlFor="imguplode">
                <p className="uplimg">upload image</p>
              </label>
              <input
                type="file"
                id="imguplode"
                name="img"
                onChange={(e) =>setImageUri(e.target.files[0])}
                className="uplodeImgInput"
                accept="image/png, image/gif, image/jpeg, image/jpg"
              />
            </div>
          </div>
          <div className="uplodePostinfo">
            <form onSubmit={HandleUplodeSubmit}>
              <div className="group">
                <label htmlFor="name">photo by</label>
                <input
                  type="text"
                  className="info"
                  name="name"
                  id="name"
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  autoComplete="on"
                />
              </div>
              <div className="group">
                <label htmlFor="tags">tags</label>
                <div>
                  <input
                    type="text"
                    className="info"
                    name="tag"
                    id="tags"
                    placeholder="tags"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)} // Changed from 'tags' to 'tagInput'
                    autoComplete="on"
                  />
                  <button className="uploadbtn" onClick={HandleTabSubmit}>
                    add
                  </button>
                </div>
              </div>

              <div className="taglist">
                <ul>
                  {tagList.map((v, i) => { // Changed from 'tag' to 'tagList'
                    return (
                      <li className="listtag" key={i}>
                        #{v}
                        <span className="del" onClick={() => DeleteTag(i)}>
                          ❌
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="upload">
                <button type="submit" className="uploadbtn">upload</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;

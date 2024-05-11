import React from "react";
import { useState } from "react";
import "./Create.css";
import axios from "axios";

const Create = () => {
  const [img, setImageUri] = useState();
  const [uplodeImg, setUplodeImg] = useState(false);
  const [tagList, setTagList] = useState([]);
  const [tagInput, setTagInput] = useState(""); // Changed from 'tags' to 'tagInput'
  const [name, setName] = useState("");

  const HandleImageConvert64 = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      setImageUri(e.target.result);
      setUplodeImg(true);
    };
    reader.onerror = (error) => {
      console.log("error", error);
    };
  };

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
    const data = { name, tag: tagList }; // Changed from 'tag' to 'tagList'
    console.log(data);
    try {
      await axios
        .post("http://localhost:8000/api/create", data)
        .then(() => {
          console.log("created"); // Fixed typo
        })
        .catch((e) => console.log(e));
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
                onChange={HandleImageConvert64}
                className="uplodeImgInput"
                accept="image/*"
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
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="tags">tags</label>
                <div>
                  <input
                    type="text"
                    className="info"
                    name="tag"
                    placeholder="tags"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)} // Changed from 'tags' to 'tagInput'
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

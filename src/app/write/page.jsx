"use client";

import React, { useRef, useState } from "react";
import styles from "./writePage.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import Quill from "quill";

// const quill = new Quill("#editor");

const WritePage = () => {
  const [value, setValue] = useState("");
  // Quill toolbar options
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["link", "image", "video", "formula"],
    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ];
  return (
    <div className={styles.container}>
      <ReactQuill
        value={value}
        theme="snow"
        onChange={setValue}
        placeholder={`It's gonna be good...`}
        modules={{ toolbar: toolbarOptions }}
      />
      {/* <p>Content: {value}</p> */}
      <div className={styles.buttons}>
        <button>Save as draft</button>
        <button>Publish</button>
      </div>
    </div>
  );
};

export default WritePage;

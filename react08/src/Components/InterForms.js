import React, { useEffect, useRef } from "react";
import bgImage from "./images/logo.png";

function InterForms() {
  // let engMarks = useRef();
  // let sansMarks = useRef();
  // let mathAMarks = useRef();
  // let mathBMarks = useRef();
  // let physMarks = useRef();
  // let chemMarks = useRef();
  // let physPraMarks = useRef();
  // let chemPraMarks = useRef();

  let engInputMarksRef = useRef();
  let sansInputMarksRef = useRef();
  let mathAInputMarksRef = useRef();
  let mathBInputMarksRef = useRef();
  let physInputMarksRef = useRef();
  let chemInputMarksRef = useRef();
  let physInputPraMarksRef = useRef();
  let chemInputPraMarksRef = useRef();
  let resultParaRef = useRef();

  let engResSpanRef = useRef();
  let sansResSpanRef = useRef();
  let mathAResSpanRef = useRef();
  let mathBResSpanRef = useRef();
  let physResSpanRef = useRef();
  let chemResSpanRef = useRef();
  let physPraResSpanRef = useRef();
  let chemPraResSpanRef = useRef();

  useEffect(() => {
    console.log("Component loaded");
  }, []);

  return (
    <div>
      <h1>BOARD OF INTERMEDIATE EDUCATION,A.P.</h1>
      <h3>Vidhya Bhavan, Nampally, Hyderabad - 500 001</h3>
      <img src={bgImage} alt=""></img>
      <h2>INTERMEDIATE</h2>
      <h2>
        <ins>PASS CERTIFICATE CUM MEMORANDUM OF MARKS</ins>
      </h2>
      <p>
        This is to certify that <strong>K SNEHA LATHA</strong>
      </p>
      <p>
        Father Name:<strong>K SRINIVASULU RAO</strong>
      </p>
      <p>
        Mother Name:<strong>K LAKSHMI SUJATHA</strong> bearing
      </p>
      <p>
        Registered No. <strong>2310223428</strong> has appeared at the
        Intermediate Public Examination
      </p>
      <p>
        held in <strong>MARCH - 2024</strong> and passed with
        <strong>ENGLISH</strong>
      </p>
      <p>as the medium of Instruction.</p>
      <p>
        The subjects in which <strong>she</strong> was examined and the marks
        awarded are as follows:
      </p>
      <form>
        <div>
          <label>ENGLISH</label>
          <input
            ref={engInputMarksRef}
            onFocus={() => {
              engInputMarksRef.current.style.backgroundColor = "deepskyblue";
            }}
            onChange={() => {
              engResSpanRef.current.innerHTML =
                engInputMarksRef.current.value >= 35 ? "PASS" : "FAIL";
              engInputMarksRef.current.style.backgroundColor = "gold";
            }}
            onBlur={() => {
              engInputMarksRef.current.style.backgroundColor = "antiquewhite";
            }}
          ></input>
          <span ref={engResSpanRef}></span>
        </div>
        <div>
          <label>SANSKRIT</label>
          <input
            ref={sansInputMarksRef}
            onFocus={() => {
              sansInputMarksRef.current.style.backgroundColor = "deepskyblue";
            }}
            onChange={() => {
              sansResSpanRef.current.innerHTML =
                sansInputMarksRef.current.value >= 35 ? "PASS" : "FAIL";
              sansInputMarksRef.current.style.backgroundColor = "gold";
            }}
            onBlur={() => {
              sansInputMarksRef.current.style.backgroundColor = "antiquewhite";
            }}
          ></input>
          <span ref={sansResSpanRef}></span>
        </div>
        <div>
          <label>MATHEMATICS-A</label>
          <input
            ref={mathAInputMarksRef}
            onFocus={() => {
              mathAInputMarksRef.current.style.backgroundColor = "deepskyblue";
            }}
            onChange={() => {
              mathAResSpanRef.current.innerHTML =
                mathAInputMarksRef.current.value >= 21 ? "PASS" : "FAIL";
              mathAInputMarksRef.current.style.backgroundColor = "gold";
            }}
            onBlur={() => {
              mathAInputMarksRef.current.style.backgroundColor = "antiquewhite";
            }}
          ></input>
          <span ref={mathAResSpanRef}></span>
        </div>
        <div>
          <label>MATHEMATICS-B</label>
          <input
            ref={mathBInputMarksRef}
            onFocus={() => {
              mathBInputMarksRef.current.style.backgroundColor = "deepskyblue";
            }}
            onChange={() => {
              mathBResSpanRef.current.innerHTML =
                mathBInputMarksRef.current.value >= 21 ? "PASS" : "FAIL";
              mathBInputMarksRef.current.style.backgroundColor = "gold";
            }}
            onBlur={() => {
              mathBInputMarksRef.current.style.backgroundColor = "antiquewhite";
            }}
          ></input>
          <span ref={mathBResSpanRef}></span>
        </div>
        <div>
          <label>PHYSICS</label>
          <input
            ref={physInputMarksRef}
            onFocus={() => {
              physInputMarksRef.current.style.backgroundColor = "deepskyblue";
            }}
            onChange={() => {
              physResSpanRef.current.innerHTML =
                physInputMarksRef.current.value >= 21 ? "PASS" : "FAIL";
              physInputMarksRef.current.style.backgroundColor = "gold";
            }}
            onBlur={() => {
              physInputMarksRef.current.style.backgroundColor = "antiquewhite";
            }}
          ></input>
          <span ref={physResSpanRef}></span>
        </div>
        <div>
          <label>CHEMISTRY</label>
          <input
            ref={chemInputMarksRef}
            onFocus={() => {
              chemInputMarksRef.current.style.backgroundColor = "deepskyblue";
            }}
            onChange={() => {
              chemResSpanRef.current.innerHTML =
                chemInputMarksRef.current.value >= 21 ? "PASS" : "FAIL";
              chemInputMarksRef.current.style.backgroundColor = "gold";
            }}
            onBlur={() => {
              chemInputMarksRef.current.style.backgroundColor = "antiquewhite";
            }}
          ></input>
          <span ref={chemResSpanRef}></span>
        </div>
        <div>
          <label>PHYSICS PRACTICAL</label>
          <input
            ref={physInputPraMarksRef}
            onFocus={() => {
              physInputPraMarksRef.current.style.backgroundColor =
                "deepskyblue";
            }}
            onChange={() => {
              physPraResSpanRef.current.innerHTML =
                physInputPraMarksRef.current.value >= 9 ? "PASS" : "FAIL";
              physInputPraMarksRef.current.style.backgroundColor = "gold";
            }}
            onBlur={() => {
              physInputPraMarksRef.current.style.backgroundColor =
                "antiquewhite";
            }}
          ></input>
          <span ref={physPraResSpanRef}></span>
        </div>
        <div>
          <label>CHEMISTRY PRACTICAL</label>
          <input
            ref={chemInputPraMarksRef}
            onFocus={() => {
              chemInputPraMarksRef.current.style.backgroundColor =
                "deepskyblue";
            }}
            onChange={() => {
              chemPraResSpanRef.current.innerHTML =
                chemInputPraMarksRef.current.value >= 9 ? "PASS" : "FAIL";
              chemInputPraMarksRef.current.style.backgroundColor = "gold";
            }}
            onBlur={() => {
              chemInputPraMarksRef.current.style.backgroundColor =
                "antiquewhite";
            }}
          ></input>
          <span ref={chemPraResSpanRef}></span>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              let engMarks = Number(engInputMarksRef.current.value);
              let sansMarks = Number(sansInputMarksRef.current.value);
              let mathAMarks = Number(mathAInputMarksRef.current.value);
              let mathBMarks = Number(mathBInputMarksRef.current.value);
              let physMarks = Number(physInputMarksRef.current.value);
              let chemMarks = Number(chemInputMarksRef.current.value);
              let physPraMarks = Number(physInputPraMarksRef.current.value);
              let chemPraMarks = Number(chemInputPraMarksRef.current.value);

              let totalMarks =
                engMarks +
                sansMarks +
                mathAMarks +
                mathBMarks +
                physMarks +
                chemMarks +
                physPraMarks +
                chemPraMarks;
              let percentage = (totalMarks / 1000) * 100;
              // alert("Hi");
              // alert(totalMarks);
              // alert(percentage);
              console.log("Hi to Developers");
              console.log(totalMarks);
              console.log(percentage);
              resultParaRef.current.innerHTML = `The Total Marks are ${totalMarks}  with Percentage of ${percentage.toFixed(
                2
              )}`;
            }}
          >
            TOTAL MARKS
          </button>

          <button
            type="click"
            onMouseMove={() => {
              // alert("reset");
            }}
          >
            RESET
          </button>
          <p ref={resultParaRef}></p>
        </div>
      </form>
    </div>
  );
}

export default InterForms;

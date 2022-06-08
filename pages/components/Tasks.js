import { useRef, useState, useEffect, useLayoutEffect } from "react";

import style from "../../styles/Tasks.module.css";
import Script from "next/script";
import axios from "axios";
import { Router } from "next/router";
export default function Tasks() {
  let Inputref = useRef();
  let AddButton = useRef();
  let l = 0;
  let index;
  let TaskStr;
  let initial = "Some Key";
  const [Task, setTask] = useState("");
  const [TaskList, setTaskList] = useState([]);
  const [Done, setDone] = useState([]);
  const [Clicked, setClicked] = useState(false);
  const [SpanColor, setSpanColor] = useState("black");
  // const [ProgressColor, setProgressColor] = useState("red");

  const [ShowMenu, setShowMenu] = useState(true);
  // const [Quote, setQuote] = useState({
  //   text: "Things do not change, we change.",
  //   author: "Henry Thoreau",
  // });
  const [Quote, setQuote] = useState("Things do not change, we change.");
  const getRandomIndex = () => {
    let randomNum = Math.floor(Math.random() * 1643);
    return randomNum;
  };

  const getData = async () => {
    const res = await axios.get("https://type.fit/api/quotes ", {
      headers: { Accept: "application/json" },
      type: "GET",
      crossDomain: true,
    });
    let responseData = await res.data;
    setQuote(responseData[getRandomIndex()]);
  };
  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      if (e.key == "Enter" && Inputref.current?.value != "") {
        document.querySelector("#addButton").click();
      }
    });

    setInterval(() => getData(), 15000);
  }, []);
  useEffect(() => {
    try {
      setTaskList(localStorage.getItem("tasks").split(","));
      setDone(localStorage.getItem("donetasks").split(","));
    } catch {
      console.error("Error");
    }

    setTodolistLength(TaskList.length);
  }, []);
  const [TodolistLength, setTodolistLength] = useState(TaskList.length);
  const [ProgressPercent, setProgressPercent] = useState(
    Math.ceil((Done.length / (Done.length + TodolistLength)) * 100)
  );
  useEffect(() => {
    setTodolistLength(TaskList.length);

    localStorage.setItem("tasks", TaskList.toString());
    localStorage.setItem("donetasks", Done.toString());

    setProgressPercent(
      Math.ceil((Done.length / (Done.length + TodolistLength)) * 100)
    );
    document.documentElement.style.setProperty(
      "--progressPercent",
      ProgressPercent
    );

    if (ProgressPercent >= 0 && ProgressPercent <= 20) {
      document.documentElement.style.setProperty("--accent", "red");
    } else if (ProgressPercent >= 21 && ProgressPercent <= 40) {
      document.documentElement.style.setProperty("--accent", "#ff7700");
    } else if (ProgressPercent >= 41 && ProgressPercent <= 50) {
      document.documentElement.style.setProperty("--accent", "#ffca02");
    } else if (ProgressPercent >= 51 && ProgressPercent <= 60) {
      document.documentElement.style.setProperty("--accent", "yellow");
    } else if (ProgressPercent >= 61 && ProgressPercent <= 80) {
      document.documentElement.style.setProperty("--accent", "#75f04e");
    } else if (ProgressPercent >= 81 && ProgressPercent <= 100) {
      document.documentElement.style.setProperty("--accent", "green");
    }
  });

  return (
    <>
      <Script
        src="https://kit.fontawesome.com/3d2f093b4a.js"
        strategy="lazyOnload"
      ></Script>

      <main className={style.todoMain}>
        <div className={style.todoList}>
          <div className={style.topHead}>
            <h1 className={style.aligncenter}>To-Do:({TodolistLength})</h1>
            <label htmlFor="ip">
              <input
                type="text"
                id="ip"
                placeholder="Type the task and press Enter "
                ref={Inputref}
                className={style.inputTodo}
                onChange={(e) => {
                  setTask(e.target.value);
                }}
              />
              <button
                id="addButton"
                ref={AddButton}
                onClick={(e) => {
                  if (Inputref.current.value != "") {
                    TaskList.push(Task);
                    setTask("anish");
                    Inputref.current.value = "";
                    setTodolistLength(TaskList.length);
                  }
                  if (TaskList[0] === "") {
                    TaskList.shift();
                  }
                }}
              >
                Enter
              </button>
            </label>
          </div>
          <ul>
            {TodolistLength == 0 && (
              <div className={style.defaultText}>
                No Tasks.
                <br />
                Sit Back And Chill :)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="150px"
                  height="150px"
                >
                  <linearGradient
                    id="wi9reJZsYu2bf~DD3zafra"
                    x1="27"
                    x2="27"
                    y1="12.101"
                    y2="42.032"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#21ad64" />
                    <stop offset="1" stopColor="#088242" />
                  </linearGradient>
                  <path
                    fill="url(#wi9reJZsYu2bf~DD3zafra)"
                    d="M40,42H14c-1.1,0-2-0.9-2-2V14c0-1.1,0.9-2,2-2h26c1.1,0,2,0.9,2,2v26C42,41.1,41.1,42,40,42z"
                  />
                  <path
                    d="M38,12H12v26h22.319C36.352,38,38,36.352,38,34.319V12z"
                    opacity=".05"
                  />
                  <path
                    d="M37,12H12v25h22.161C35.729,37,37,35.729,37,34.161V12z"
                    opacity=".07"
                  />
                  <linearGradient
                    id="wi9reJZsYu2bf~DD3zafrb"
                    x1="21"
                    x2="21"
                    y1="6.101"
                    y2="36.032"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#9dffce" />
                    <stop offset="1" stopColor="#50d18d" />
                  </linearGradient>
                  <path
                    fill="url(#wi9reJZsYu2bf~DD3zafrb)"
                    d="M34,36H8c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h26c1.1,0,2,0.9,2,2v26C36,35.1,35.1,36,34,36z"
                  />
                  <linearGradient
                    id="wi9reJZsYu2bf~DD3zafrc"
                    x1="12"
                    x2="31"
                    y1="20.793"
                    y2="20.793"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".824" stopColor="#135d36" />
                    <stop offset=".931" stopColor="#125933" />
                    <stop offset="1" stopColor="#11522f" />
                  </linearGradient>
                  <path
                    fill="url(#wi9reJZsYu2bf~DD3zafrc)"
                    d="M18.293,27.707l-6-6c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414	c0.391-0.391,1.024-0.391,1.414,0L19,22.758l8.879-8.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414	c0.391,0.391,0.391,1.024,0,1.414l-11,11C19.317,28.098,18.683,28.098,18.293,27.707z"
                  />
                  {/* ads */}
                </svg>
              </div>
            )}
            {TaskList.map((e) => {
              TaskList[0] === "" ? TaskList.shift() : null;
              return (
                <li key={e}>
                  <span
                    className={style.checkboxspan}
                    style={{ backgroundColor: SpanColor }}
                  >
                    <input
                      className={style.input}
                      type="checkbox"
                      onClick={(e) => {
                        Done.push(
                          e.target.parentElement.parentElement.textContent
                        );
                        e.target.parentElement.parentElement.style.textDecoration =
                          "line-through";
                        e.target.parentElement.style.backgroundColor =
                          "rgb(14, 255, 14)";

                        setTodolistLength(TaskList.length);
                        e.target.style.pointerEvents = "none";
                        TaskStr =
                          e.target.parentElement.parentElement.textContent;
                        index = TaskList.indexOf(TaskStr);

                        setTimeout(() => {
                          TaskList.splice(index, 1);

                          e.target.checked = false;
                          e.target.style.pointerEvents = "all";

                          e.target.parentElement.style.backgroundColor =
                            "black";
                          e.target.parentElement.parentElement.style.textDecoration =
                            "none";

                          setClicked(!Clicked);
                        }, 500);
                      }}
                    />
                  </span>

                  {e}
                </li>
              );
            })}
          </ul>
        </div>

        {/* ************************Done items list**************😁😁***************** */}
        <div className={style.doneList}>
          <h1 className={style.aligncenter}>Done({Done.length})</h1>
          <ol>
            {Done.map((e, index) => {
              Done[0] === "" ? Done.shift() : null;

              return <li key={e}>{`${index + 1}.✅${e}`}</li>;
            })}
            {Done.length !== 0 && (
              <button
                className={style.deleteBtn}
                onClick={() => {
                  setDone([]);
                }}
              >
                <i className="fas fa-trash" id={style.delLogo}></i>
                Delete Done Tasks
              </button>
            )}
          </ol>

          <div
            className={style.Prg_btn}
            onClick={(e) => {
              e.target.style.filter = `invert(${!ShowMenu ? "0" : "1"})`;

              setShowMenu(!ShowMenu);
            }}
          >
            <i
              id={style.opt}
              className={`${style.progressButton} fas fa-tasks`}
            ></i>
          </div>
          <div
            className={style.progress}
            style={
              !ShowMenu
                ? {
                    top: "0%",
                  }
                : {
                    top: "100%",
                  }
            }
            id={style.prg1}
          >
            <h1 className={style.aligncenter}>Progress Bar</h1>
            <h3>
              To-Do:<span> &nbsp;&nbsp;{TodolistLength}</span>
            </h3>
            <h3>
              Done: <span>&nbsp;&nbsp;{Done.length}</span>
            </h3>
            <h3>
              Progress:<span>&nbsp;&nbsp;{ProgressPercent || 0}%</span>
            </h3>
            <input
              type="range"
              min="0"
              max="100"
              value={ProgressPercent || 0}
              className={style.progressbar}
              readOnly
            />
            <div className={style.quoteContainer}>
              <strong>{JSON.stringify(Quote.text)}</strong>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

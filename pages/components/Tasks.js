import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import NavBar from "./NavBar";
import style from "../../styles/Tasks.module.css";
import Image from "next/image";
import checkMark from "../../public/checkmark.svg";
import Script from "next/script";
export default function Tasks() {
  let Inputref = useRef();
  let AddButton = useRef();
  let l = 0;
  let initial = 0;
  const [Task, setTask] = useState("");
  const [TaskList, setTaskList] = useState([""]);
  const [Done, setDone] = useState([]);
  const [Clicked, setClicked] = useState(false);
  const [TodolistLength, setTodolistLength] = useState(TaskList.length - 1);
  const [SpanColor, setSpanColor] = useState("black");
  const [ProgressColor, setProgressColor] = useState("red");
  const [ProgressPercent, setProgressPercent] = useState(
    Math.ceil((Done.length / (Done.length + TodolistLength)) * 100)
  );
  const [ShowMenu, setShowMenu] = useState(true);

  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      if (e.key == "Enter" && Inputref.current.value != "") {
        document.querySelector("#addButton").click();
      }
    });
  }, []);
  useEffect(() => {
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
      <NavBar />
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
                  setTask({
                    note: e.target.value,
                  });
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
                    TaskList.length == 0
                      ? setTodolistLength(TaskList.length - 1)
                      : setTodolistLength(TodolistLength + 1);
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
                    <stop offset="0" stop-color="#21ad64" />
                    <stop offset="1" stop-color="#088242" />
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
                    <stop offset="0" stop-color="#9dffce" />
                    <stop offset="1" stop-color="#50d18d" />
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
                    <stop offset=".824" stop-color="#135d36" />
                    <stop offset=".931" stop-color="#125933" />
                    <stop offset="1" stop-color="#11522f" />
                  </linearGradient>
                  <path
                    fill="url(#wi9reJZsYu2bf~DD3zafrc)"
                    d="M18.293,27.707l-6-6c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414	c0.391-0.391,1.024-0.391,1.414,0L19,22.758l8.879-8.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414	c0.391,0.391,0.391,1.024,0,1.414l-11,11C19.317,28.098,18.683,28.098,18.293,27.707z"
                  />
                </svg>
              </div>
            )}
            {TaskList.map((e) => {
              {
                l++;
              }
              return (
                <li>
                  {l > 1 ? (
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
                          setTodolistLength(TodolistLength - 1);
                          e.target.style.pointerEvents = "none";

                          setTimeout(() => {
                            e.target.parentElement.parentElement.style.display =
                              "none";

                            setClicked(!Clicked);
                            e.target.parentElement.style.backgroundColor =
                              "rgb(14, 255, 14)";
                          }, 1000);
                        }}
                      />
                    </span>
                  ) : null}
                  {e.note}
                </li>
              );
            })}
          </ul>
        </div>

        {/* ******************************************************* */}
        <div className={style.doneList}>
          <h1 className={style.aligncenter}>Done({Done.length})</h1>
          <ol>
            {Done.map((e) => {
              return (
                <li>
                  <Image src={checkMark} className={style.checkedImg}></Image>
                  {e}
                </li>
              );
            })}
            {Done.length !== 0 && (
              <button
                className={style.deleteBtn}
                onClick={() => {
                  setDone([]);
                }}
              >
                <i class="fas fa-trash" id={style.delLogo}></i>
                Delete Done Tasks
              </button>
            )}
          </ol>
          <div
            className={style.Prg_btn}
            onClick={(e) => {
              // console.log(
              //   e.target.parentElement.parentElement.children[3].style.right
              // );
              ShowMenu
                ? (e.target.parentElement.parentElement.children[3].style.right =
                    "150px")
                : (e.target.parentElement.parentElement.children[3].style.right =
                    "-480px");
              setShowMenu(!ShowMenu);
            }}
          >
            <i
              id={style.opt}
              className={`${style.progressButton} fas fa-tasks`}
            ></i>
          </div>
          <div className={style.progress} id={style.prg1}>
            <h1 className={style.aligncenter}>Progress Bar</h1>
            <h3>
              To-Do:<span> {TodolistLength}</span>
            </h3>
            <h3>
              Done: <span>{Done.length}</span>
            </h3>
            <h3>
              Progress:<span>{ProgressPercent}%</span>
            </h3>
            <input
              type="range"
              min="0"
              max="100"
              value={ProgressPercent}
              class={style.progressbar}
            />
            {/* {console.log(ProgressPercent)} */}
          </div>
        </div>
      </main>
    </>
  );
}

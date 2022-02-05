import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import NavBar from "./NavBar";
import style from "../../styles/Tasks.module.css";
import Image from "next/image";
import checkmark from "../../public/checkmark.svg";

export default function Tasks() {
  let Inputref = useRef();
  let AddButton = useRef();
  let l = 0;
  const [Task, setTask] = useState("");
  const [TaskList, setTaskList] = useState([""]);
  const [Done, setDone] = useState([]);
  const [Clicked, setClicked] = useState(false);
  let initial = 0;
  // useEffect(() => {
  //   setDone(Done);
  // }, [Done]);
  // useCallback(() => {
  //   console.log(AddButton.current);

  //   AddButton.current.click();
  // }, [TaskList]);
  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      if (e.key == "Enter" && Inputref.current.value != "") {
        document.querySelector("#addButton").click();
      }
    });
  }, []);

  return (
    <>
      <NavBar />
      <main className={style.todoMain}>
        <div className={style.todoList}>
          <label htmlFor="ip">
            <input
              type="text"
              id="ip"
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
                TaskList.push(Task);
                setTask("anish");
                Inputref.current.value = "";
              }}
            >
              Add
            </button>
          </label>
          <ul>
            {TaskList.map((e) => {
              {
                l++;
              }
              return (
                <li>
                  {e.note}

                  {l > 1 ? (
                    <input
                      type="checkbox"
                      onClick={(e) => {
                        Done.push(e.target.parentElement.textContent);
                        e.target.parentElement.style.textDecoration =
                          "line-through";

                        setTimeout(() => {
                          e.target.parentElement.style.display = "none";
                          setClicked(!Clicked);
                        }, 2000);
                      }}
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.doneList}>
          <ol>
            <h3>Done Items</h3>
            {Done.map((e) => {
              return <li>{e}</li>;
            })}
          </ol>
        </div>

        <div classname={style.progress}>Hello</div>
      </main>
      <div
        style={{
          backgroundColor: "blue",
          width: "100px",
          height: "40px",
        }}
      >
        <button
          onClick={(e) => {
            e.target.parentElement.style.display = "none";
          }}
        >
          Delete
        </button>
        {/* <button onClick={() => setClicked(!Clicked)}>gen</button> */}
      </div>
      <div className={style.checkBox}>
        <svg
          width="347"
          height="347"
          viewBox="0 0 347 347"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icons8-check-circle (1) 1">
            <path
              id={style.round}
              d="M289.528 146.391C291.697 155.066 292.781 163.741 292.781 173.5C292.781 239.647 239.647 292.781 173.5 292.781C107.353 292.781 54.2188 239.647 54.2188 173.5C54.2188 107.353 107.353 54.2188 173.5 54.2188C206.031 54.2188 234.225 67.2313 255.913 87.8344L271.094 72.6531C246.153 47.7125 211.453 32.5312 173.5 32.5312C95.425 32.5312 32.5312 95.425 32.5312 173.5C32.5312 251.575 95.425 314.469 173.5 314.469C251.575 314.469 314.469 251.575 314.469 173.5C314.469 158.319 312.3 143.137 306.878 129.041L289.528 146.391Z"
              fill="black"
            />
            <path
              id={style.mark}
              d="M173.5 235.309L111.691 173.5L126.872 157.234L173.5 203.862L296.034 81.3281L311.216 97.5938L173.5 235.309Z"
              fill="#1C6516"
            />
          </g>
        </svg>
      </div>
    </>
  );
}

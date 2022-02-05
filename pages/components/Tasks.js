import { useRef, useState, useEffect } from "react";
import NavBar from "./NavBar";
import style from "../../styles/Tasks.module.css";

export default function Tasks() {
  let Inputref = useRef();
  let l = 0;
  const [Task, setTask] = useState("");
  const [TaskList, setTaskList] = useState([""]);
  const [Done, setDone] = useState([]);
  let initial = 0;
  useEffect(() => {
    setDone(Done);
  }, [Done]);

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
              onClick={(e) => {
                TaskList.push(Task);
                setTask("ansih");
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
                    <button
                      onClick={(e) => {
                        Done.push(e.target.parentElement.textContent);
                        setDone(Done);
                        console.log(Done);

                        e.target.parentElement.style.display = "none";
                      }}
                    >
                      Delete
                    </button>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.doneList}>
          <ol>
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
            console.log((e.target.parentElement.style.display = "none"));
          }}
        >
          Delete
        </button>
        <button>gen</button>
      </div>
    </>
  );
}
let TaskArr = [
  {
    note: "lorem If you use this site regularly and would like to help keep the site on the Internet, plea",
    id: 1,
    done: false,
  },
  {
    note: "lorem If you use this site regularly and would like to help keep the site on the Internet, plea",
    id: 1,
    done: false,
  },
  {
    note: "lorem If you use this site regularly and would like to help keep the site on the Internet, plea",
    id: 1,
    done: false,
  },
  {
    note: "lorem If you use this site regularly and would like to help keep the site on the Internet, plea",
    id: 1,
    done: false,
  },
  {
    note: "lorem If you use this site regularly and would like to help keep the site on the Internet, plea",
    id: 1,
    done: false,
  },
  {
    note: "lorem If you use this site regularly and would like to help keep the site on the Internet, plea",
    id: 1,
    done: false,
  },
  {
    note: "lorem If you use this site regularly and would like to help keep the site on the Internet, plea",
    id: 1,
    done: false,
  },
  {
    note: "lorem If you use this site regularly and would like to help keep the site on the Internet, plea",
    id: 1,
    done: false,
  },
];

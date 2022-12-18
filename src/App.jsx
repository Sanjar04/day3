import { MainLayout } from "./layout/layout";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";

function App() {
  const [todo, setTodo] = React.useState([]);
  const [value, setValue] = React.useState("");

  const submit = (e) => {
    e.preventDefault();

    if (value === "") {
      toast.info("Iltimos vazifa kriting!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    } else {
      setTodo([...todo, { name: value, id: Math.round(Math.random() * 1000) }]);
      setValue("");
      toast.success("Moffaqqiyatli qo'shildi!", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    
  };

  const deletTodo = (id) => {
    setTodo((item) => {
      return item.filter((el) => el.id != id);
    });
  };

  return (

    <div className="App">
      <ToastContainer/>
      <MainLayout>
        <div className="container">
          <form className="fromTodo" onSubmit={submit}>
            <input
              className="inputTodo"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
            />
            <button className="btnTodo" type="submit">Add</button>
          </form>
          <ul>
            {todo?.map((item) => (
              <li className="itemTodo" key={item.id}>
                <p className="copyTodo">{item.name}</p>
                <button
                  className="deleteTodo"
                  onClick={() => {
                    deletTodo(item.id);
                    toast.warning("Moffaqqiyatli o'chirildi!", {
                      position: "bottom-left",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                      });
                  }}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>
      </MainLayout>
    </div>
  );
}

export default App;

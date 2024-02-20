import React, { useState, useEffect } from "react";
import "./style.css";

// get local storage data back
const getLocalData = () => {
  const list = localStorage.getItem("myTodoList");
  if (list) {
    return JSON.parse(list);
  } else return [];
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [toggleBtn, setToggleBtn] = useState(false);
  const [EditedItemId, setEditedItemId] = useState("");

  // fun() to add items in array
  const addItem = () => {
    if (!inputData) {
      alert("Please fill the data");
    }
    // to edit a task
    else if (inputData && toggleBtn) {
      setItems(
        items.map((currElem) => {
          if (currElem.id === EditedItemId) {
            return { ...currElem, name: inputData };
          }
          return currElem;
        })
      );
      setInputData("");
      setEditedItemId(null);
      setToggleBtn(false);
    }
    // to add a new task
    else {
      const newInputdata = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, newInputdata]);
      setInputData("");
    }
  };

  // fun() to edit item
  const editItem = (id) => {
    const edited_item = items.find((currElem) => {
      return currElem.id === id;
    });
    setEditedItemId(id);
    setInputData(edited_item.name);
    setToggleBtn(true);
  };
  // fun() to delete item
  const deleteItem = (id) => {
    const updatedItems = items.filter((currElem) => {
      return currElem.id !== id;
    });
    setItems(updatedItems);
  };
  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add your list here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Item"
              className="form-control"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            {toggleBtn ? (
              <i className="far fa-edit add-btn" onClick={() => addItem()} />
            ) : (
              <i className="fa fa-plus add-btn" onClick={() => addItem()} />
            )}
          </div>
        </div>

        <div className="showItems">
          {items.map((currElem, index) => {
            return (
              <div className="eachItem" key={currElem.id}>
                <h3>{currElem.name}</h3>
                <div className="todo-btn">
                  <i
                    className="far fa-edit add-btn"
                    onClick={() => editItem(currElem.id)}
                  />
                  <i
                    className="far fa-trash-alt add-btn"
                    onClick={() => deleteItem(currElem.id)}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="showItems">
          <button
            className="btn effect04"
            data-sm-link-text="Remove All"
            onClick={() => setItems([])}
          >
            <span>CHECK LIST</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;

import { useState, useReducer } from "react";
import SubTitle from "../Subtitle";
import Button from "../Button";
import "./checklist.css";
import list from "../Product/list.json";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-items":
      return {
        items: [...state.items, { name: action.payload, isCompleted: false }],
      };
    case "risk-items":
      return {
        ...state,
        items: state.items.map((item, index) =>
          index === action.payload
            ? { ...item, isCompleted: !item.isCompleted }
            : item
        ),
      };
    default:
      return state;
  }
};

const CheckList = () => {
  const [state, dispatch] = useReducer(reducer, { items: [] });
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="checklist">
      <div className="card pink checklist-client">
        <SubTitle subtitle="CheckList" />
        <p>Make a checklist of what you need</p>
        <div className="checklist-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            onClick={() => {
              dispatch({ type: "add-items", payload: inputValue });
              setInputValue("");
            }}
            className="blue"
            text="Add items"
          />
        </div>
        <div className="checklist-items">
          <ul>
            {state.items.map((task, index) => (
              <li
                key={index}
                onClick={() => dispatch({ type: "risk-items", payload: index })}
                style={{
                  textDecoration: task.isCompleted ? "line-through" : "none",
                }}
              >
                {task.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card yellow checklist-card">
        <SubTitle subtitle="CheckList Ideas" />
        <ul>
          {list.map((product, id) => (
            <li key={id}>{product.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckList;

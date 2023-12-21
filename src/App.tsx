import ListGroup from "./components/ListGroup";
import { Fragment } from "react";

function App() {
  const items = ["new york", "tehran", "leeds", "peterzburg", "mazandaran"];
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;

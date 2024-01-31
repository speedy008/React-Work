import { useState } from "react";
import './ListGroup.css'

interface ListGroupProps {
  items: {
    cityname: string
    type: string
  }[]
  heading: string
  onSelectItem: (item: {cityname:string, type:string}) => void
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {

  const message = items.length === 0 && <p>No Item Found</p>;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h2>{heading}</h2>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item)
            }}
          >
            {item.cityname}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

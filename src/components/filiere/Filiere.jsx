import React from "react";
import Card from "../card/Card";
import { filieres } from "../../pages/stand/filieres";

export default function Speaker(props) {
  return (
    <div>
      <ul>
        {filieres.map((val, key) => {
          return (
            <li key={key}>
              <Card
                name={val.name}
                description={val.description}
                sourceimg={val.sourceimg}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

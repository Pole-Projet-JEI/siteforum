import React from "react";
import Card from "../card/Card";

export default function Filiere(props) {
  return (
    <div>
     
        
              <Card
                name={props.name}
                description={props.description}
                image={props.image}
              />
    
    </div>
  );
}

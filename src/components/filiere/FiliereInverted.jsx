import React from "react";
import CardInverted from "../card/CardInverted";

export default function Filiere(props) {
  return (
    <div>
     
        
              <CardInverted
                name={props.name}
                description={props.description}
                image={props.image}
              />
    
    </div>
  );
}
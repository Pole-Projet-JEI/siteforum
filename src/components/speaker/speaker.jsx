import React from "react";
import Cardsocial from "../cardsocial/Cardsocial";
import CardsocialInverted from "../cardSocialInverted/CardSocialInverted";
export default function Speaker(props) {
  return (
    <div>

{ (props.id % 2 !==0 ? <Cardsocial
                name={props.name}
                description={props.description}
                title={props.title}
                fb={props.fb}
                insta={props.insta}
                linkedin={props.linkedin}
                image={props.image}
              /> : <CardsocialInverted
              name={props.name}
              description={props.description}
              title={props.title}
              fb={props.fb}
              insta={props.insta}
              linkedin={props.linkedin}
              image={props.image}
            /> ) }
           
              
    
    </div>
  );
}

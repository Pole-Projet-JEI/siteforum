import React from "react";
import Cardsocial from "../cardsocial/Cardsocial";
import { SpeakersData } from "../../pages/speakers/SpeakersData";
import photo from "../../pages/speakers/speaker.jpg";

export default function Speaker(props) {
  return (
    <div>
      <ul>
        {SpeakersData.map((val, key) => {
          return (
            <li key={key}>
              <Cardsocial
                name={val.name}
                description={val.description}
                lienfb={val.lienfb}
                lieninsta={val.lieninsta}
                lienlink={val.lienlink}
                sourceimg={photo}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

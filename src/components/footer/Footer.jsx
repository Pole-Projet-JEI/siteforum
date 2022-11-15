import SocialMedia from "../socialmediaBox/SocialMedia";
import ScrollIntoView from 'react-scroll-into-view'
import classes from "./footer.module.css";
import logo from "./logoJei2.png";
import EmailIcon from "@mui/icons-material/Email";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer1}>
        <div className={classes.footerelement}>
          <img src={logo} className={classes.image} alt=""></img>
        </div>
        <div className={classes.footerelement}>
          <h2 className={classes.titre}>INFORMATIONS</h2>
          <div>
            <p>
            <ScrollIntoView smooth="true" selector="#formContact">
            <EmailIcon className={classes.icon} />
              <a className={classes.link} href="/#formContact">
                Contact
              </a>
                </ScrollIntoView>
              
            </p>
          </div>
          <div>
            <p>
              <ConfirmationNumberIcon className={classes.icon} />
              <a className={classes.link} href="https://www.eventbrite.com/cc/forum-insat-entreprise-workshops-1381869?fbclid=IwAR2F8TxJC7nN-bGqhJVJb95N2w555NdGdInSds7URauoXfXX0wYGbqh4iuA" target="_blank" >
                Ticket
              </a>
            </p>
          </div>
          <div>
            <p>
              {" "}
              <QuestionAnswerIcon className={classes.icon} />
              <a className={classes.link} href="/faq">
                FAQ
              </a>
            </p>
          </div>
        </div>
        <div className={classes.footerelement}>
          <h2 className={classes.titre}>SUIVEZ-NOUS</h2>
          <SocialMedia size="28px" />
        </div>
      </div>
      <div className={classes.footer2}>
        <hr />
        <p>
          <CopyrightIcon className={classes.icon2} />
          2022, Junior Entreprise INSAT, Tous les droits sont réservés
        </p>
      </div>
    </div>
  );
}

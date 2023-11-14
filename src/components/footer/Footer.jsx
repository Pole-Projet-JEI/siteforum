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
            <ScrollIntoView smooth="true" selector="#formContact">
              <p>
                <EmailIcon className={classes.icon} />
                <a className={classes.link} href="/#formContact">
                  Contact
                </a>
              </p>
            </ScrollIntoView>
          </div>
          <div>
            <p>
              <ConfirmationNumberIcon className={classes.icon} />
              <a className={classes.link} href="https://fabskill.com/fr/event/22?fbclid=IwAR0UmDAXnBS7AJxcOnAayMbaqYZyuU0pJOgralx9yYdy-OlgJg_fl-qHdQ4" target="_blank" >
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
          <SocialMedia
              size="28px"
              fb={"https://www.facebook.com/events/1105043313793907/?active_tab=discussion"}
              insta={"https://www.instagram.com/junior_entreprise_insat"}
              linkedin={"https://www.linkedin.com/company/junior-entreprise-insat/"}
          />
        </div>
      </div>
      <div className={classes.footer2}>
        <hr />
        <p>
          <CopyrightIcon className={classes.icon2} />
          2023, Junior Entreprise INSAT, Tous les droits sont réservés
        </p>
      </div>
    </div>
  );
}

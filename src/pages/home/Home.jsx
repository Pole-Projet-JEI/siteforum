import classes from './home.module.css';
import Navbar from '../../components/navbar/Navbar';

function Home() {
  return (
    <div className={classes.home}>
      <div className={classes.first_part}>
        <Navbar />
      </div>
      
    </div>
  );
}

export default Home;

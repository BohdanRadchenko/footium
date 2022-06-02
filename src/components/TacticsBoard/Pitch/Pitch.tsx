import Background from "./Background/Background";
import classes from "./Pitch.module.css";
import { team } from "../../../utility/constants";
console.log(team);
const Pitch: React.FC = () => (
  <div className={classes.container}>
    <Background />
  </div>
);

export default Pitch;

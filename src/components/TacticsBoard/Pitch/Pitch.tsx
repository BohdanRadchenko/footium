import Background from "./Background/Background";
import Board from "./Board/Board";
import classes from "./Pitch.module.css";

const Pitch: React.FC = () => (
  <div className={classes.container}>
    <Background />
    <Board />
  </div>
);

export default Pitch;

import { Fragment } from "react";
import { team1 } from "../../data";
import Pitch from "./Pitch/Pitch";
import Substitute from "./Substitute/Substitute";
import classes from "./TacticsBoard.module.css";

const TacticsBoard: React.FC = () => (
  <div className={classes.container}>
    <div className={classes.board}>
      <Pitch />
    </div>
    <div className={classes.subsCol}>
      {team1.subs.map((player) => (
        <Fragment key={player.id}>
          <Substitute player={player} />
        </Fragment>
      ))}
    </div>
  </div>
);

export default TacticsBoard;

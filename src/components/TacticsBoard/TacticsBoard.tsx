import { Fragment, FC } from "react";
import { useSelector } from "../../store";
import Pitch from "./Pitch/Pitch";
import Substitute from "./Substitute/Substitute";
import classes from "./TacticsBoard.module.css";
import Box from "../Box/Box";
import Dustbin from "../Dustbin/Dustbin";
import { Team } from "../../types";
import Formation from "./Pitch/Formation/Formation";

const TacticsBoard: FC = () => {
  const { subs } = useSelector(({ players }) => players as Team);

  return (
    <div>
      <Formation />
      <div>
        <div className={classes.container}>
          <div className={classes.board}>
            <Pitch />
          </div>
          <div className={classes.subsCol}>
            {Boolean(subs) &&
              Boolean(subs.length) &&
              subs.map((player) => (
                <Fragment key={player.id}>
                  <Dustbin player={player}>
                    <Box player={player}>
                      <Substitute player={player} />
                    </Box>
                  </Dustbin>
                </Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TacticsBoard;

import React, { memo, useMemo } from "react";
import { useSelector } from "../../../../store";
import { positionPlayers } from "../../../../helpers";
import Cell from "./Cell/Cell";
import cls from "./Board.module.css";

const Board = () => {
  const {
    players: { firstEleven },
    tactic,
  } = useSelector((store) => store);

  const positions = useMemo(
    () => positionPlayers(firstEleven, tactic),
    [firstEleven, tactic]
  );

  return (
    <div className={cls.container}>
      <div className={cls.background}>
        {positions.map((el, i) => (
          <Cell key={`cell-${i}`} player={el} />
        ))}
      </div>
    </div>
  );
};

export default memo(Board);

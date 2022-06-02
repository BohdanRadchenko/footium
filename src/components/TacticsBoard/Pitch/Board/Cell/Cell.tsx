import React, { memo } from "react";
import Dustbin from "../../../../Dustbin/Dustbin";
import { Player } from "../../../../../types";
import PlayerCard from "../../../PlayerCard/PlayerCard";
import Box from "../../../../Box/Box";
import cls from "./Cell.module.css";

type TCellProps = {
  player: Player;
};

const Cell = ({ player }: TCellProps) => {
  return (
    <div className={cls.container}>
      {Boolean(player) && (
        <Dustbin player={player}>
          <Box player={player}>
            <PlayerCard player={player} />
          </Box>
        </Dustbin>
      )}
    </div>
  );
};

export default memo(Cell);

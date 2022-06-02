import React, { memo, useMemo } from "react";
import { useDrop } from "react-dnd";
import { EPlayerPosition, Player } from "../../types";
import cls from "./Dustbin.module.css";

type TDustbinProps = {
  children: React.ReactNode;
  player: Player;
};

const Dustbin = ({ children, player }: TDustbinProps) => {
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: player.isGk ? EPlayerPosition.GOALKEEPER : EPlayerPosition.FIELD,
      drop: (props, monitor) => ({
        drag: { ...(props as Object) },
        drop: player,
      }),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [player]
  );

  const isActive = useMemo(() => canDrop && isOver, [isOver, canDrop]);

  const classes = useMemo(() => {
    if (isActive) {
      return cls.over;
    } else if (canDrop) {
      return cls.drop;
    }
  }, [isOver, canDrop]);

  return (
    <div ref={drop} className={classes}>
      {children}
    </div>
  );
};

export default memo(Dustbin);

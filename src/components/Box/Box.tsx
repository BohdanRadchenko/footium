import React, { memo } from "react";
import { useDrag } from "react-dnd";
import { EPlayerPosition, Player } from "../../types";
import { useDispatch, dropPlayers } from "../../store";

type TDropResult = {
  drop: Player;
  drag: Player;
};

type TBoxProps = {
  children: React.ReactNode;
  player: Player;
};

const Box = ({ children, player }: TBoxProps) => {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: player.isGk ? EPlayerPosition.GOALKEEPER : EPlayerPosition.FIELD,
      item: player,
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult<TDropResult>();
        if (dropResult) {
          dispatch(dropPlayers(dropResult));
        }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId(),
      }),
    }),
    [player]
  );

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.4 : 1 }}>
      {children}
    </div>
  );
};

export default memo(Box);

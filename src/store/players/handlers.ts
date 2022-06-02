import { TDropPlayersProps } from "./playersActions";
import { Team } from "../../types";

export const handleDropPlayers = (
  state: Team,
  { drop, drag }: TDropPlayersProps
) => {
  if (drop.id === drag.id) return state;
  if (drop.isGk !== drag.isGk) return state;
  const players = [...state.firstEleven, ...state.subs];
  const field = players.map((player, i) => {
    if (player.id === drop.id) return { ...drag, isSub: drop.isSub };
    if (player.id === drag.id) return { ...drop, isSub: drag.isSub };
    return player;
  });

  return {
    ...state,
    subs: field.filter((p) => p.isSub),
    firstEleven: field.filter((p) => !p.isSub),
  };
};

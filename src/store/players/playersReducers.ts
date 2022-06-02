import { Team } from "../../types";
import { EPlayerTypes } from "../types";
import { team1 } from "../../data";
import { TDropPlayersProps } from "./playersActions";
import { handleDropPlayers } from "./handlers";

type TReducersProps = { type: EPlayerTypes; payload: TDropPlayersProps };

const playersReducers = (
  state: Team = team1,
  { type, payload }: TReducersProps
) => {
  switch (type) {
    case EPlayerTypes.DROP:
      return handleDropPlayers(state, payload);
    default:
      return state;
  }
};

export default playersReducers;

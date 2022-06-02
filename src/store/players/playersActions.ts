import { EPlayerTypes } from "../types";
import { Player } from "../../types";

export type TDropPlayersProps = {
  drop: Player;
  drag: Player;
};

export const dropPlayers = (data: TDropPlayersProps) => ({
  type: EPlayerTypes.DROP,
  payload: data,
});

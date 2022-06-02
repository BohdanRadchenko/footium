import { Formations, Player } from "../types";

const cells = new Array(35).fill(null);

const tacticsIndex = {
  [Formations.CLASSIC]: [1, 2, 3, 11, 12, 13, 20, 21, 23, 24, 32],
};

export const positionPlayers = (
  players: Player[],
  formation: Formations = Formations.CLASSIC
) => {
  let playerIdx = 0;
  let cell = [...cells];
  tacticsIndex[formation].forEach((tIdx) => {
    cell[tIdx] = players[playerIdx];
    playerIdx++;
  });
  return cell;
};

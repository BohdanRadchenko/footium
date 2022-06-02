import { EFormations, Player } from "../types";

const cells = new Array(35).fill(null);

const tacticsIndex = {
  [EFormations.CLASSIC]: [1, 2, 3, 11, 12, 13, 20, 21, 23, 24, 32],
  [EFormations.DEF]: [1, 3, 7, 10, 14, 16, 18, 22, 26, 28, 32],
  [EFormations.ATTACK]: [1, 3, 7, 10, 11, 13, 14, 22, 26, 28, 32],
};

export const positionPlayers = (
  players: Player[],
  formation: EFormations = EFormations.CLASSIC
) => {
  let playerIdx = 0;
  let cell = [...cells];
  tacticsIndex[formation].forEach((tIdx) => {
    cell[tIdx] = players[playerIdx];
    playerIdx++;
  });
  return cell;
};

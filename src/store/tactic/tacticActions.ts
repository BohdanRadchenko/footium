import { ETacticAction } from "../types";
import { EFormations } from "../../types";

export const setTactic = (type: EFormations) => ({
  type: ETacticAction.SET,
  payload: type,
});

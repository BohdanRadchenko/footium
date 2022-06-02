import { EFormations } from "../../types";
import { ETacticAction } from "../types";

type TTacticReducersProps = {
  type: ETacticAction;
  payload: EFormations;
};

const tacticReducers = (
  state: EFormations = EFormations.CLASSIC,
  { type, payload }: TTacticReducersProps
) => {
  switch (type) {
    case ETacticAction.SET:
      return payload;
    default:
      return state;
  }
};

export default tacticReducers;

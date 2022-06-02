import React, { memo, useCallback } from "react";
import MenuItem from "@mui/material/MenuItem";
import { EFormations } from "../../../../types";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import cls from "./Formation.module.css";
import { setTactic, useDispatch, useSelector } from "../../../../store";

const convertValue = {
  [EFormations.CLASSIC]: "4-3-3-1",
  [EFormations.DEF]: "2-4-4-1",
  [EFormations.ATTACK]: "3-4-3-1",
};

const options = Object.entries(EFormations).map(([k, v]) => ({
  name: k,
  value: convertValue[k as keyof typeof EFormations],
}));

const Formation = () => {
  const dispatch = useDispatch();
  const tactic = useSelector(({ tactic }) => tactic);

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      const { value } = event.target;
      dispatch(setTactic(EFormations[value as keyof typeof EFormations]));
    },
    [dispatch]
  );

  return (
    <div className={cls.container}>
      <div className={cls.title}>FORMATION</div>
      <Select value={tactic} onChange={handleChange}>
        {options.map(({ name, value }) => (
          <MenuItem value={name} key={name}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default memo(Formation);

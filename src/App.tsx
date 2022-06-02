import React, { memo, useMemo } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TacticsBoard from "./components/TacticsBoard/TacticsBoard";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <TacticsBoard />
      </DndProvider>
    </div>
  );
};
export default memo(App);

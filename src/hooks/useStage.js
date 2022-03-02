import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = (prevStage) => {
      //   First flush the stage
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[i] === "clear" ? [0, "clear"] : cell))
      );

      // Then draw the tetromino
      Player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });
    };
    setStage((prev) => updateStage(prev));
  }, []);

  return [stage, setStage];
};

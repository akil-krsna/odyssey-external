"use client";

import Level1 from "@/components/levels/Level1";
import Level2 from "@/components/levels/Level2";
import Level3 from "@/components/levels/Level3";
import Level4 from "@/components/levels/Level4";
import Level5 from "@/components/levels/Level5";
import React, { useEffect, useState } from "react";

const Game = () => {
    const [currentLevel, setCurrentLevel] = useState(5);

    const handleLevelComplete = (curLevel) => {
        console.log("function called");
        // Update state to switch to the next level
        setCurrentLevel(curLevel);
    };

    return (
        <div className="w-screen ">
            {currentLevel === 1 && <Level1 onComplete={handleLevelComplete} />}
            {currentLevel === 2 && <Level2 onComplete={handleLevelComplete} />}
            {currentLevel === 3 && <Level3 onComplete={handleLevelComplete} />}
            {currentLevel === 4 && <Level4 onComplete={handleLevelComplete} />}
            {currentLevel === 5 && <Level5 onComplete={handleLevelComplete} />}
        </div>
    );
};

export default Game;

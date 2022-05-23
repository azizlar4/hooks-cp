import PlayerCard from "./PlayerCard";
import { React, useState } from "react";
import { nba_player } from "./../Data/data";
import Add from "./Add";

const PlayerList = ({ input }) => {
  const [players, setPlayers] = useState(nba_player);
  const add = (newPlayer) => {
    setPlayers([...players, newPlayer]);
  };
  return (
    <>
      <Add newplayer={add} />
      <div style={{ display: "flex", justifyContent: "space-evenly",alignItems:"baseline" ,flexWrap:"wrap", marginTop:"20px", marginBottom:"15px"}}>
        {players
          .filter(
            (player) =>
              player.name
                .toLocaleLowerCase()
                .includes(input.toLocaleLowerCase()) ||
              Number(player.rate) >= input
          )
          .map((el) => (
            <PlayerCard Players={el} />
          ))}
      </div>
    </>
  );
};

export default PlayerList;

import { Game } from "@/app/types/game";
import GameThumbnail from "./gameThumbnail";

interface GameCategory {
  id: number;
  attributes: {
    name: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    slug: string;
    games: {
      data: Game[];
    };
  };
}

interface GameRowProps {
  category: GameCategory;
}

export default function GameRow(props: GameRowProps) {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-2xl mb-4">
        {props.category.attributes.name}
      </h3>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col flex-wrap md:flex-row gap-[26px] w-full">
          {props.category.attributes.games.data.map((game) => {
            return <GameThumbnail key={game.id} game={game} />;
          })}
        </div>
      </div>
    </div>
  );
}

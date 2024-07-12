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
      <div className="flex flex-wrap gap-[26px]">
        {props.category.attributes.games.data.map((game) => {
          return <GameThumbnail game={game} />;
        })}
      </div>
    </div>
  );
}

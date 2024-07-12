import { Game } from "@/app/types/game";
import Image from "next/image";

interface GameThumbnailProps {
  game: Game;
}

export default async function GameThumbnail(props: GameThumbnailProps) {
  const imageUrl = `${process.env.STRAPI_BASE_URL}${props.game.attributes.thumbnail.data.attributes.url}`;

  //   console.log(props.game.attributes.thumbnail.data.attributes.url, data);

  return (
    <div
      className="rounded-lg overflow-hidden shadow-md transform-gpu hover:shadow-lg hover:scale-[1.02] transition duration-[0.2s]
      min-w-[200px] min-h-[200px]
    "
    >
      <Image
        // className="min-w-[200px] min-h-[200px]"
        className="object-cover max-w-none w-full"
        width={200}
        height={200}
        alt={`A thumbnail image for the game ${props.game.attributes.title}.`}
        // src={props.game?.attributes?.thumbnail?.data?.attributes?.url || ""}
        src={imageUrl}
      />
    </div>
  );
}

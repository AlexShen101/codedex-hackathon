import { Game } from "@/app/types/game";

interface GameThumbnailProps {
  game: Game;
}

export default async function GameThumbnail(props: GameThumbnailProps) {
  // generate image url to embed
  const imageUrl =
    process.env.NODE_ENV === "development" ||
    typeof process.env.NODE_ENV === "undefined"
      ? `${process.env.STRAPI_BASE_URL}${props.game.attributes.thumbnail.data.attributes.url}`
      : props.game.attributes.thumbnail.data.attributes.url;

  //   console.log(props.game.attributes.thumbnail.data.attributes.url, data);

  return (
    <div
      className="rounded-lg overflow-hidden shadow-md transform-gpu hover:shadow-lg hover:scale-[1.02] transition duration-[0.2s]
      min-w-[200px] min-h-[200px] w-full md:w-auto h-[200px] md:h-auto relative
    "
    >
      <div
        className="absolute opacity-0 hover:opacity-100 bg-black/80 z-[200] top-0 left-0 w-full h-full transition duration-[0.2s] p-4
      transform-gpu hover:scale-[1.02] select-none"
      >
        <h3 className="font-bold text-white text-4xl md:text-2xl mb-4 md:mb-2 truncate">
          {props.game.attributes.title}
        </h3>
        <p className="text-white text-2xl md:text-base">
          {props.game.attributes.description}
        </p>
      </div>
      {/* <Image
        className="object-cover max-w-none w-full"
        width={200}
        height={200}
        alt={`A thumbnail image for the game ${props.game.attributes.title}.`}
        src={imageUrl}
      /> */}
      <img
        className="object-cover max-w-none w-full absolute top-0 left-0"
        width={200}
        height={200}
        alt={`A thumbnail image for the game ${props.game.attributes.title}.`}
        src={imageUrl}
      />
    </div>
  );
}

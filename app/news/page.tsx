import Image from 'next/image'

export default function News() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">News</h1>
      <div className="space-y-6">
        <div className="flex border rounded-lg overflow-hidden shadow-lg">
          <Image src='/patch article.webp' width={674} height={653} alt="People playing a board game" className="w-1/3 object-cover" />
          <div className="p-4 w-2/3 bg-white">
            <h2 className="text-xl font-semibold mb-2">‘Board Game Cafe’ Opens on Park Slope’s Fifth Avenue</h2>
            <p className="text-gray-600 mb-4">January 2, 2020</p>
            <button className="bg-black text-white py-2 px-4 rounded">Read Article</button>
          </div>
        </div>
        <div className="flex border rounded-lg overflow-hidden shadow-lg">
          <Image src='/cafe_image.webp' width={726} height={572} alt="Image of the cafe window" className="w-1/3 object-cover" />
          <div className="p-4 w-2/3 bg-white">
            <h2 className="text-xl font-semibold mb-2">Board Game Cafe Opens in Park Slope</h2>
            <p className="text-gray-600 mb-4">January 6, 2020</p>
            <button className="bg-black text-white py-2 px-4 rounded">Read Article</button>
          </div>
        </div>
      </div>
    </div>
  )
}
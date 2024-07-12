
export default function Feedback() {
  return (
    <div className="max-w-2xl mx-auto mt-20 p-10 bg-white">
      <h1 className="text-4xl font-bold mb-8">Give Us Feedback!</h1>
      <p className="text-xl mb-8">Submit general questions, suggestions, and boardgame recommendations below!</p>
      <form>
        <div className="mb-8">
          <input className="w-full border-b-4 border-green focus:outline-none text-lg py-2 bg-white text-black placeholder-black" type="email" id="email" placeholder="Email" />
        </div>
        <div className="mb-8">
          <input className="w-full border-b-4 border-green focus:outline-none text-lg py-2 bg-white text-black placeholder-black" type="text" id="subject" placeholder="Subject" />
        </div>
        <div className="mb-8">
          <label className="block text-lg font-medium mb-4" htmlFor="message">How can we improve?</label>
          <textarea className="w-full h-48 bg-gray-300 focus:outline-none text-lg p-2" id="message"></textarea>
        </div>
      </form>
    </div>
  )
}
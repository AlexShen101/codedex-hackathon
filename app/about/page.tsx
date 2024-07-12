import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex items-center h-60v bg-black">
        <h1 className="text-6xl font-bold text-white float-left ml-[15%] z-10">
          About Sip & Play
        </h1>
      </div>
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Our Story</h1>
        <p className="text-2xl mb-6">
          Founder, Jonathan Li, shares a passion for board games, boba, and
          delicious food, so he combined them all to become Sip & Play, Park
          Slope's first board game cafe. It is a straightforward concept, come
          in with your friends and family to play any board game from our
          library of 300+ games! We hope when you visit, you also enjoy our
          coffee, espresso, boba, sandwiches, and snacks!
        </p>
        <Image
          src="/storefront.png"
          alt="Storefront of Sip & Play with a sign that says 'Sip & Play' and a large window with a view of the cafe"
          className="rounded-xl shadow-md"
          width={1600}
          height={883}
        />
      </div>
    </>
  );
}

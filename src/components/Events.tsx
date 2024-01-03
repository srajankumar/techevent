import Link from "next/link";

const events = [
  {
    id: 1,
    name: "Talk 1",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro recusandae voluptas.",
    imageSrc: "/devhost.png",
  },
  {
    id: 2,
    name: "Talk 2",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro recusandae voluptas.",

    imageSrc: "/devhost.png",
  },
  {
    id: 3,
    name: "Talk 3",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro recusandae voluptas.",

    imageSrc: "/devhost.png",
  },
  {
    id: 4,
    name: "Talk 4",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro recusandae voluptas.",

    imageSrc: "/devhost.png",
  },
];

export default function Events() {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold my-5">Events</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {events.map((event) => (
            <div key={event.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={event.imageSrc}
                  alt={event.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                {event.name}
              </h3>
              <p className="mt-1 font-medium text-gray-700">
                {event.description}
              </p>
              <div className="my-5">
                <Link
                  href={event.href}
                  className="bg-indigo-600 hover:opacity-75 transition-all duration-300 text-white font-semibold py-2 px-3 rounded-md"
                >
                  Register
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Check, Waves } from "components/Icons"

const pricing = [
  {
    name: "Meet & Greet",
    price: "0",
    duration: "15",
    description: "A brief free session to get to know each other and determine if you are interested.",
    bullets: ["Completely Free", "Talk Through Goals", "Find Out Background", "Become BFFs"],
  },
  {
    name: "Full Session",
    price: "60",
    duration: "45",
    description: "A completely personalized pair-programming session to learn modern frontend development.",
    bullets: ["Personalized Session", "Unlimited Questions", "You Choose The Topics", "Also Become BFFs"],
  },
]

export default function InstructionPricing() {
  return (
    <>
      <span className="z-0 w-full h-16 block bg-gray-900 text-gray-100 rotate-180">
        <Waves />
      </span>
      <section id="pricing" className="section-spacing relative">
        <div className="bg-gray-900 absolute w-full h-full top-0 left-0 z-0 lg:h-4/6"></div>
        <div className="relative container text-white z-20">
          <div className="lg:text-center">
            <h3 className="font-bold text-3xl">One Size Fits All Pricing.</h3>
            <p className="mt-2 text-lg">Completely personalized sessions, all at one low price.</p>
          </div>
        </div>
        <div className="relative mt-16 container grid gap-16 grid-cols-1 lg:gap-24 lg:grid-cols-2">
          {pricing.map((item) => (
            <div key={item.name} className="bg-white rounded p-8 flex flex-col items-start shadow-lg">
              <span className="bg-indigo-100 text-indigo-500 px-4 py-2 rounded">{item.name}</span>
              <div className="mt-8 flex items-center leading-none">
                <span className="font-black text-4xl">${item.price}</span>
                <span className="text-gray-700 text-sm ml-2">for {item.duration} mins</span>
              </div>
              <p className="mt-4">{item.description}</p>
              <div className="mt-4 space-y-2">
                {item.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center">
                    <span className="block w-4 h-4 text-indigo-400">
                      <Check />
                    </span>
                    <span className="ml-2">{bullet}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8"></div>
              <a className="mt-auto button w-full text-center" href="#schedule">
                Schedule Now
              </a>
            </div>
          ))}
        </div>
      </section>
      <span className="z-0 w-full h-16 block bg-gray-900 text-gray-100 lg:hidden">
        <Waves />
      </span>
    </>
  )
}

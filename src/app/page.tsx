import MemeDisplay from "@/components/MemeDisplay"
import MemeItem from "@/components/MemeItem"

export default function Home() {
  return (
    <>
      <header className="flex flex-row items-center justify-between py-3 px-8">
        <div>
          <p className="font-bold text-lg">Meker</p>
        </div>
        <div>
          <button
            type="button"
            className="text-white bg-blue-700 rounded-lg px-3 py-1 text-sm flex flex-row items-center gap-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Export
          </button>
        </div>
      </header>
      <div className="w-full h-screen flex flex-row">
        <section className="flex-none w-96 flex flex-col p-8">
          <p className="text-xl font-bold">Templates</p>
          <div className="grid grid-cols-2 gap-4 py-6">
            <MemeItem />
            <MemeItem />
            <MemeItem />
            <MemeItem />
            <MemeItem />
            <MemeItem />
          </div>
        </section>
        <MemeDisplay
          background={{
            src: "/memes/disaster_girl.jpg",
            alt: "",
            height: 257,
            width: 388,
          }}
          textareas={[
            { className: "", id: "text1", left: 0, top: 300, text: "LOL" },
          ]}
        />
      </div>
    </>
  )
}

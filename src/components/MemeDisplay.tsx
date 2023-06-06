import { FC } from "react"
import { Anton } from "next/font/google"
import Image from "next/image"
import { twMerge } from "tailwind-merge"

const anton = Anton({ subsets: ["latin"], weight: "400" })

const MemeDisplay: FC<{
  background: { src: string; width: number; height: number; alt: string }
  textareas: {
    id: string
    top: number
    left: number
    // width: number
    // height: number
    // color: string
    // fontSize: number
    className: string
    text: string
  }[]
}> = ({ background, textareas }) => {
  return (
    <>
      <section className="flex-1 flex flex-col items-center justify-center p-24 bg-neutral-950">
        <div className="max-w-xl w-full relative">
          <Image {...background} className="object-contain w-full h-full" />
          {textareas.map(({ id, className, left, text, top }) => (
            <div
              key={id}
              className={twMerge("absolute w-full", className)}
              style={{ top, left }}
            >
              <div
                contentEditable
                className={`${anton.className} text-white text-center text-5xl white-contrast-outline`}
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex-none w-96 flex flex-col p-8">
        <p className="text-xl font-bold">Texts</p>
      </section>
    </>
  )
}

export default MemeDisplay

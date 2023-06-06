"use client"

import React, { FC, useState } from "react"
import { Anton } from "next/font/google"
import Image from "next/image"
import { MemeTemplate } from "@/data/types"

const anton = Anton({ subsets: ["latin"], weight: "400" })

const MemeDisplay: FC<MemeTemplate> = ({ background, textareas }) => {
  const [texts, setTexts] = useState<{ [key: string]: string }>(
    textareas.reduce((accumulator, value, index) => {
      return { ...accumulator, [value.id]: value.text }
    }, {})
  )

  return (
    <>
      <section className="flex-1 flex flex-col items-center justify-center p-24 bg-neutral-950">
        <div className="max-w-xl w-full relative">
          <Image {...background} className="object-contain w-full h-full" />
          {textareas.map(({ id, left, text, top, width }) => (
            <div
              key={id}
              className="absolute break-all"
              style={{ top, left, maxWidth: width, width: "100%" }}
            >
              <div
                className={`${anton.className} text-white text-center text-5xl white-contrast-outline`}
              >
                {texts?.[id] ?? text}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex-none w-96 flex flex-col p-8">
        <p className="text-2xl font-bold">Texts</p>
        <div className="py-2"></div>
        {Object.entries(texts).map(([id, text]) => (
          <div className="py-2">
            <label className="space-y-2">
              <p className="font-medium capitalize">{id}</p>
              <input
                type="text"
                value={text}
                className="bg-neutral-950 rounded-lg w-full"
                onChange={(event) => {
                  setTexts((prev) => ({ ...prev, [id]: event.target.value }))
                }}
              />
            </label>
          </div>
        ))}
      </section>
    </>
  )
}

export default MemeDisplay

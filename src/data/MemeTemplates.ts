import { MemeTemplate } from "./types"

const memeTemplates: MemeTemplate[] = [
  {
    id: "disaster-girl",
    background: {
      src: "/memes/disaster_girl.jpg",
      alt: "",
      height: 257,
      width: 388,
    },
    textareas: [
      {
        id: "main",
        left: 0,
        top: 300,
        width: "100%",
        text: "LOL",
      },
    ],
  },
  {
    id: "drake",
    background: {
      src: "/memes/drake.jpg",
      alt: "",
      height: 250,
      width: 250,
    },
    textareas: [
      { id: "text1", left: 325, top: 125, width: "40%", text: "JavaScript" },
      { id: "text2", left: 325, top: 405, width: "40%", text: "TypeScript" },
    ],
  },
]

export default memeTemplates

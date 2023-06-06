export type BackgroundImage = {
  src: string
  width: number
  height: number
  alt: string
}

export type Textarea = {
  className: string
  id: string
  left: number
  top: number
  text: string
}

export type MemeTemplate = {
  id: string
  background: BackgroundImage
  textareas: Textarea[]
}

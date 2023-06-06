export type BackgroundImage = {
  src: string
  width: number
  height: number
  alt: string
}

export type Textarea = {
  width: string | number
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

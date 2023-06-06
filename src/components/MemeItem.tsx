import { FC } from "react"

const MemeItem: FC = () => {
  return (
    <div className="space-y-2">
      <img src="/memes/drake.jpg" alt="" className="rounded-lg" />
      <p className="text-base text-center">Drake</p>
    </div>
  )
}

export default MemeItem

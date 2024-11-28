import {Avatar} from "./BlogCard"


export default function Appbar() {
  return (
    <div className="border-b flex justify-between px-10 py-4">
        <div className="flex flex-col justify-center font-bold text-lg">
            Medium
        </div>
        <div>
            <Avatar name="Pushker" size="big"/>
        </div>
    </div>
  )
}

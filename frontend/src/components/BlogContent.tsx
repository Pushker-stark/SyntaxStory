import { Blog } from "../hooks"
import Appbar from "./Appbar"
import { Avatar } from "./BlogCard"

export default function BlogContent({ blog }: { blog: any }) {
  return (<div>
    <Appbar />
    <div className="flex justify-center">
      <div className='grid grid-cols-12 px-10 w-full bg-yellow-200 pt-200 max-w-screen-xl'>
        <div className='col-span-8'>
          <div className="text-5xl font-extrabold">
            {/* {blog.title} */}
            title
          </div>
          <div className="text-slate-500 pt-2">
            {/* {blog.content} */}
            content
          </div>
        </div>
        <div className="col-span-4">
          <div className="text-slate-600 text-lg">
            Author
          </div>
          <div className="flex w-full">
            <div className="pr-4 flex flex-col justify-center">
              <Avatar name={blog.author.name || "Anonymous"} size={"small"} />
            </div>
            <div>
              <div className="text-xl font-bold">
                {blog.author.name || "Anonymous"}
              </div>
              <div className="pt-2 text-slate-500">
                Random catch about the author's ability to grab the users
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>)
}

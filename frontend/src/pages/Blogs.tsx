import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

export default function Blogs() {
   const {loading,blogs} = useBlogs();
   
   if(loading){
    return <div>
        loading...
    </div>
   }
   //store it directly here
  // store it in a context variable
  //custom hook

  return (<div>
    <Appbar />
    <div className="flex justify-center">
      <div className="w-2/3">
        <BlogCard
          authorName={"Pushker"}
          title={"title of the blog"}
          content={"content of the blog"}
          publishedDate={"28 nov 2024"}
        />
        <BlogCard
          authorName={"Pushker"}
          title={"title of the blog"}
          content={"content of the blog"}
          publishedDate={"28 nov 2024"}
        />
        <BlogCard
          authorName={"Pushker"}
          title={"title of the blog"}
          content={"content of the blog"}
          publishedDate={"28 nov 2024"}
        />
        <BlogCard
          authorName={"Pushker"}
          title={"title of the blog"}
          content={"content of the blog"}
          publishedDate={"28 nov 2024"}
        />
        <BlogCard
          authorName={"Pushker"}
          title={"title of the blog"}
          content={"content of the blog"}
          publishedDate={"28 nov 2024"}
        />
      </div>
    </div>
  </div>
  )
}

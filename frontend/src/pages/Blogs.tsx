import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import BlogSkeleton from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export default function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
      </div>
    </div>
  }
  //store it directly here
  // store it in a context variable
  //custom hook

  return (<div>
    <Appbar />
    <div className="flex justify-center">
      <div className="w-2/3">
        {blogs.map(blog => <BlogCard
          id={blog.id}
          authorName={blog.author.name || "Anonymous"}
          title={blog.title}
          content={blog.content}
          publishedDate={blog.publishedDate}
        />
        )}

      </div>
    </div>
  </div>
  )
}

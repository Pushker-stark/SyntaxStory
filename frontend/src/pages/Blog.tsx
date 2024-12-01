import { useParams } from "react-router-dom";
import BlogContent from "../components/BlogContent";
import { useBlog } from "../hooks"
import Spinner from "../components/Spinner";
import Appbar from "../components/Appbar";

//atomFamilies /selector Families comes in
export default function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || ""
  });

  if (loading||!blog) {
    return <div>
      <Appbar />
      <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
          <Spinner />
        </div>
      </div>
      </div>
  }
  return (
    <div>
      <BlogContent blog={blog} />
    </div>
  )
}

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export default function BlogCard({
  authorName,
  title,
  content,
  publishedDate
}: BlogCardProps) {
  return (
    <div className="p-4 border-b border-slate-200 pb-4">
      <div className="flex">
        <Avatar name={authorName} size="small" />
        <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
          {authorName} 
        </div>
        <div className="pl-2  text-slate-500"><span>&#183;</span></div>
        <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
          {publishedDate}
        </div>
      </div>
      <div className="text-xl font-semibold pt-2">
        {title}
      </div>
      <div className="text-lg font-thin">
        {content.slice(0, 100) + "..."}
      </div>
      <div className="text-slate-500 text-sm font-thin pt-4">
        {`${Math.ceil(content.length / 100)} minutes read`}
      </div>
     
    </div>
  )
}

export  function Avatar({ name,size="small" }: { name: string ,size:"small"|"big"}) {
  return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-sky-950 ${size==="small"?"w-6 h-6":"w-10 h-10"}`}>
    <span className={`${size==="small"?"text-xs":"text-lg"} font-medium text-gray-600 dark:text-gray-300`}>{name[0]}</span>
  </div>

}
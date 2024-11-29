
export default function BlogSkeleton() {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div className="p-4 border-b border-slate-200 pb-4 cursor-pointer">
      <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

        <div className="flex">
          <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
          <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
          </div>
          <div className="pl-2  text-slate-500"><div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div></div>
          <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
          <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">
        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
        </div>
        <div className="text-lg font-thin">
        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
        <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
        </div>

      </div>
      
      <span className="sr-only">Loading...</span>
    </div>
  )
}

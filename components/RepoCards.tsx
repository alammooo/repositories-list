import axios from "axios"
import { BsStar } from "react-icons/bs"
import { BiGitRepoForked } from "react-icons/bi"
import { VscEye } from "react-icons/vsc"
import { useEffect, useState } from "react"
import { useAppDispatch } from "@/app/hooks"
import { fetchRepo } from "@/features/seeder/seederSlice"

export default function RepoCards() {
  const [datas, setDatas] = useState([])
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRepo("sandhikagalih")).then((res) => {
      setDatas(res.payload)
    })
  }, [])

  useEffect(()=>{
    console.log(datas)
  },[datas])
  const dateFormatter = (date: string) => {
    const toFormatDate = new Date(date)
    const year = toFormatDate.getFullYear()
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]
    const monthIndex = toFormatDate.getMonth()
    const monthName = monthNames[monthIndex]
    const day = ("0" + toFormatDate.getDate()).slice(-2)
    const formattedDate = day + " " + monthName + " " + year
    return formattedDate
  }
  if (datas.length > 0) {
    return (
      <>
        {datas?.map((data: any) => (
          <main
            className="p-5 shadow-md h-96 w-96 border border-zinc-300 bg-slate-50 bg-opacity-30"
            key={data.id}>
            <div className="flex items-center gap-4">
              <div className="rounded-full w-12 h-12 overflow-hidden border">
                <img
                  className="w-full h-full object-cover"
                  src={data.owner.avatar_url}
                  alt={data.owner.login}
                />
              </div>
              <div>
                <h1 className="text-zinc-700 font-bold text-lg">
                  {data.owner.login}
                </h1>
                <h1 className="text-zinc-600 rounded-md text-sm">
                  {data.owner.type}
                </h1>
              </div>
            </div>
            <div>
              <div className="flex gap-4 mt-3 items-center">
                <h1 className="text-2xl font-medium">{data.name}</h1>
                <h1 className="text-sm capitalize text-center block text-zinc-50 rounded-md px-2 py-1 bg-blue-500 max-h-7">
                  {data.visibility}
                </h1>
                <h1 className="text-sm capitalize text-center block text-zinc-50 rounded-md px-2 py-1 bg-emerald-500 max-h-7">
                  {data.size} kB
                </h1>
              </div>
              <a
                href={data.html_url}
                target="_blank"
                className="text-sm mt-1 font-light text-zinc-400 underline">
                {data.full_name}
              </a>
            </div>

            <hr className="w-full border-black mx-auto mt-3" />

            <div className="flex mt-3 gap-4 justify-center">
              <h1 className="font-medium flex gap-2 items-center">
                <span>
                  <BsStar className="fill-zinc-500 w-5 h-5" />
                </span>
                {data.stargazers_count}
              </h1>
              <h1 className="font-medium flex gap-2 items-center">
                <span>
                  <BiGitRepoForked className="fill-zinc-500 w-5 h-5" />
                </span>
                {data.forks_count}
              </h1>
              <h1 className="font-medium flex gap-2 items-center ">
                <span>
                  <VscEye className="fill-zinc-500 w-5 h-5" />
                </span>
                {data.watchers_count}
              </h1>
            </div>
            <div>
              <h1 className="mt-3 text-zinc-700">{data.description}</h1>
            </div>
            <div className="mt-2">
              <h1 className="flex gap-3 items-center font-medium">
                Topics :
                {data.topics.length > 0
                  ? data.topics?.map((el: string) => (
                      <span className="capitalize bg-blue-500 px-2 py-1 rounded-md text-white">
                        {el}
                      </span>
                    ))
                  : " No topics"}
              </h1>
            </div>
            <div className="justify-between flex mt-2">
              <h1 className="text-sm">{dateFormatter(data.created_at)}</h1>
            </div>
          </main>
        ))}
      </>
    )
  }
  else{
    return <h1 className="text-center text-2xl font-medium col-span-3 animate-pulse">Loading...</h1>
  }
}

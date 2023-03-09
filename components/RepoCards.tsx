import { BsStar } from "react-icons/bs"
import { BiGitRepoForked } from "react-icons/bi"
import { VscEye } from "react-icons/vsc"
import { dateFormatter } from "@/helpers/formatDate"
import { RepoInterface } from "@/interfaces/Interfaces"

export default function RepoCards({
  datas,
  noData,
}: {
  datas: any
  noData: boolean
}) {
  if (noData) {
    return (
      <div className="text-center font-medium text-xl text-red col-span-3 text-red-500">
        Please input other Username or try again
      </div>
    )
  } else {
    return (
      <>
        {datas.map((data: RepoInterface) => (
          <div>
            <main
              className="p-5 shadow-md flex flex-col justify-between min-h-[350px] w-96 border border-zinc-300 bg-slate-50 bg-opacity-30 hover:bg-rose-50 duration-300"
              key={data.id}>
              <div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full w-12 h-12 overflow-hidden border">
                    <img
                      className="w-full h-full object-cover"
                      src={data.owner.avatar_url}
                      alt={data.owner.login}
                    />
                  </div>
                  <div>
                    <a
                      href={data.owner.html_url}
                      target="_blank"
                      className="text-zinc-700 font-bold text-lg">
                      {data.owner.login}
                    </a>
                    <h1 className="text-zinc-600 rounded-md text-sm">
                      {data.owner.type}
                    </h1>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-1 mt-3">
                    <h1 className="text-xl font-medium">{data.name}</h1>
                    <div className="flex gap-2 text-xs capitalize text-center text-zinc-50">
                      <h1 className=" block rounded-md px-2 py-0.5 bg-red-500">
                        {data.visibility}
                      </h1>
                      <h1 className="block text-zinc-50 rounded-md px-2 py-0.5 bg-blue-500">
                        {data.size} kB
                      </h1>
                    </div>
                  </div>
                  <a
                    href={data.html_url}
                    target="_blank"
                    className="text-xs mt-1 font-light text-zinc-400 underline">
                    {data.full_name}
                  </a>
                </div>

                <hr className="w-full border-black mx-auto mt-1" />

                <div className="flex mt-1 gap-4 justify-center">
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
                  <h1 className="flex gap-1 items-center font-medium flex-wrap text-sm">
                    Topics :
                    {data.topics.length > 0
                      ? data.topics?.map((el: string) => (
                          <span className="capitalize bg-zinc-900 px-2 py-1 rounded text-white">
                            {el}
                          </span>
                        ))
                      : " No topics"}
                  </h1>
                </div>
              </div>
            </main>
            <div className="grid grid-cols-2 justify-between text-sm bg-zinc-700 px-5 py-3 text-white">
              <h1 className="">
                Open issues :{" "}
                <span className="font-medium">{data.open_issues}</span>
              </h1>
              <h1 className="text-left justify-self-end">
                Created :{" "}
                <span className="font-medium">
                  {dateFormatter(data.created_at)}
                </span>
              </h1>
              <h1 className="">
                Branch :{" "}
                <span className="font-medium">{data.default_branch}</span>
              </h1>
              <h1 className="text-left justify-self-end">
                Last Push :{" "}
                <span className="font-medium">
                  {dateFormatter(data.pushed_at)}
                </span>
              </h1>
            </div>
          </div>
        ))}
      </>
    )
  }
}

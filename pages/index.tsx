import RepoCards from "@/components/RepoCards"
import { useAppSelector, useAppDispatch } from "@/app/hooks"
import { useState, useEffect, useRef } from "react"
import { fetchRepo } from "@/features/seeder/seederSlice"
import Spinner from "@/components/Spinner"
import { BsGithub } from "react-icons/bs"

export default function Home() {
  const [username, setUsername] = useState("sandhikagalih")
  const [datas, setDatas] = useState([])
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(true)
  const [noData, setNoData] = useState(false)

  useEffect(() => {
    dispatch(fetchRepo(username))
      .then((res) => {
        setDatas(res.payload)
      })
      .then(() => {
        setLoading(false)
      })
  }, [])

  function onSubmit(e: any) {
    e.preventDefault()
    setLoading(true)
    setUsername(e.target[0].value)
    dispatch(fetchRepo(username))
      .then((res) => {
        if (res.payload.message === "Not Found") {
          setNoData(true)
        } else {
          setNoData(false)
        }
        setDatas(res.payload)
      })
      .then(() => {
        setLoading(false)
      })
  }

  return (
    <main className="container flex flex-col gap-3 md:gap-10 mx-auto mt-16">
      <h1 className="text-center font-black text-3xl md:text-8xl text-zinc-700">
        The.
        <span className="bg-gradient-to-r from-red-700 to-rose-500 bg-clip-text animate-pulse-s">
          Github.
        </span>
        Repositories.
      </h1>
      <h1 className="text-zinc-400 text-lg md:text-3xl max-w-2xl text-center mx-auto">
        Providing list of users's Github Repository, showcasing with interactive
        and extraodinary cards
      </h1>

      <form
        onSubmit={onSubmit}
        className="mx-auto">
        <h1 className="text-center text-lg font-medium mb-3">
          Please enter a Github username
        </h1>
        <div className="flex gap-3">
          <input
            className="md:w-[500px] focus:border-red-500 focus:ring-red-500"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            className="px-7 bg-rose-600 text-white font-medium rounded-sm cursor-pointer active:scale-95 hover:bg-rose-500 duration-200">
            Find User!
          </button>
        </div>
      </form>

      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 mx-auto gap-7">
          <RepoCards
            datas={datas}
            noData={noData}
          />
        </div>
      )}

      <a
        href="https://github.com/alammooo/repositories-list"
        target="_blank"
        className="fixed inset-3 inline w-8 h-8">
        <BsGithub className="w-full h-full hover:fill-red-500 duration-200" />
      </a>

      <div className="fixed bottom-4 right-4 w-60 hidden 2xl:block">
        <img
          src="https://upload.wikimedia.org/wikipedia/id/thumb/c/c4/Telkom_Indonesia_2013.svg/640px-Telkom_Indonesia_2013.svg.png"
          alt="pt-telkom"
        />
      </div>
    </main>
  )
}

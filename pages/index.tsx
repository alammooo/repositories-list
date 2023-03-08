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
        setDatas(res.payload)
        console.log(res, "THIS IS RES")
      })
      .then(() => {
        setLoading(false)
      })
  }

  return (
    <main className="container flex flex-col gap-10 mx-auto mt-16">
      <h1 className="text-center font-black text-8xl text-zinc-700">
        The.
        <span className="bg-gradient-to-r from-blue-700 to-sky-400 bg-clip-text animate-pulse-s">
          Github.
        </span>
        Repositories.
      </h1>
      <h1 className="text-zinc-400 text-3xl max-w-2xl text-center mx-auto">
        Providing list of users's Github Repository, showcasing with interactive
        and extraodinary cards
      </h1>

      <form
        onSubmit={onSubmit}
        className="mx-auto">
        <h1 className="text-center text-lg font-medium mb-3">
          Please enter a Github username :
        </h1>
        <div className="flex gap-3 ">
          <input
            className="w-[500px]"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            className="px-5 py-1.5 bg-blue-600 text-white font-medium rounded-md cursor-pointer active:scale-95">
            Submit
          </button>
        </div>
      </form>

      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-3 mx-auto gap-7">
          <RepoCards datas={datas} />
        </div>
      )}

      <a
        href="https://github.com/alammooo/repositories-list"
        target="_blank"
        className="fixed inset-3">
        <BsGithub className="w-8 h-8 hover:fill-blue-500 duration-200" />
      </a>
    </main>
  )
}

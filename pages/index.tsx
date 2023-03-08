import RepoCards from "@/components/RepoCards"
import { useAppSelector, useAppDispatch } from "@/app/hooks"
import { useState, useEffect, useRef } from "react"
import { fetchRepo } from "@/features/seeder/seederSlice"

export default function Home() {
  const [username, setUsername] = useState("alammooo")
  const dispatch = useAppDispatch()

  function onSubmit(e: any) {
    e.preventDefault()
    if (username === "") return "sandhikagalih"
    setUsername(username)
    dispatch(fetchRepo(username))
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
            className="px-5 py-1.5 bg-blue-600 text-white font-medium rounded-md">
            Submit
          </button>
        </div>
      </form>

      <div className="grid grid-cols-3 mx-auto gap-7">
        <RepoCards />
      </div>
    </main>
  )
}

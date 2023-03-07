import { Inter } from "next/font/google"
import { useDispatch, useSelector } from "react-redux"
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
} from "react"
const myArray = Array.from({ length: 30 }, (_, i) => i + 1)

export default function Home() {
  const dispatch = useDispatch()
  const { repository } = useSelector((state: any) => state)

  useEffect(() => {
    console.log(repository)
  }, [repository])

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

      <pre></pre>

      <div className="grid grid-cols-3 mx-auto gap-7">
        {myArray.map((e, i) => (
          <div
            className="p-3 shadow-md h-96 w-96 border border-zinc-300"
            key={i}>
            <h1>Test cards</h1>
          </div>
        ))}
      </div>
    </main>
  )
}

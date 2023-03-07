import RepoCards from "@/components/RepoCards"

export default function Home() {
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
        <RepoCards />
      </div>
    </main>
  )
}

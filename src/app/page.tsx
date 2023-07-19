export default function Home() {
  return (
    <main className="w-sreen h-screen overflow-auto flex flex-col items-center bg-zinc-800 text-neutral-300 font-poppins">
      <title>Dev Blog</title>
      <section>
        <div className="mt-3 text-center">
          <h1 className="text-[3rem]">Welcome to DevBlog</h1>
          <p>
            A full-stack blog made with Next.js, TailwindCSS, Github GraphQL
          </p>
        </div>
      </section>
    </main>
  )
}

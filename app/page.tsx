import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <Navbar />

      <section className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h1 className="text-5xl font-bold text-black">
          Team Chat 🚀
        </h1>

        <p className="mt-6 text-lg text-zinc-600">
          A workspace for team communication and collaboration.
        </p>

        <a
          href="/chat"
          className="mt-8 px-8 py-3 bg-black text-white rounded-lg"
        >
          Open Chat
        </a>
      </section>
    </main>
  );
}
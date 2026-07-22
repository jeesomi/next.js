export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 border-b">
      <h2 className="text-xl font-bold">
        Our AI Lab 🚀
      </h2>

      <div className="flex gap-6">
        <a href="#" className="hover:text-blue-500">
          Home
        </a>

        <a href="#" className="hover:text-blue-500">
          Projects
        </a>

        <a href="#" className="hover:text-blue-500">
          Contact
        </a>
      </div>
    </nav>
  );
}
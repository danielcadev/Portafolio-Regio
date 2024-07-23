
export default function Footer() {
  return (
    <footer className="p-5 text-center bg-gradient-to-r from-blue-800 to-black">
      <p className="text-white">
        © {new Date().getFullYear()} - Regiossoft
      </p>
      <p className="text-gray-400">
        Todos los derechos reservados.
      </p>
    </footer>
  );
}
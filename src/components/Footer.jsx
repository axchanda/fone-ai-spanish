import logo from '../images/logo.png'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="FoneAI Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Derechos de autor */}
        <p className="text-[11px] text-gray-500">
          © 2026 Fone AI. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
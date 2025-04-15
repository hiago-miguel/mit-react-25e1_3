export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AllMart. Todos os direitos reservados.
        </p>
        <div className="mt-2 flex justify-center gap-4 text-sm">
          <a href="#" className="hover:text-white transition-colors">Sobre</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}

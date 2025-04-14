export default function Dashboard({ user, onLogout }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-6">Bem-vindo, {user?.email}!</p>
      <button
        onClick={onLogout}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors"
      >
        Sair
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Welcome to the User Directory App</h1>
        <p className="text-lg text-gray-800 mb-6">
          This application provides details of users fetched dynamically from an API. Click below to explore user information!
        </p>
        <a
          href="/users"
          className="px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-800 transition"
        >
          View All Users
        </a>
      </div>
    </div>
  );
}

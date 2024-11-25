export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="w-11/12 md:w-2/3 lg:w-1/2 bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to the User Directory App! This application is designed to provide seamless access to user data fetched dynamically from an external API. With a clean interface and responsive design, the app enables users to explore information effortlessly.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Explore our <span className="font-semibold text-indigo-600">Users</span> page to see detailed information about individual users and their associated details.
        </p>
        <a
          href="/users"
          className="inline-block px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-800 transition"
        >
          View Users
        </a>
      </div>
    </div>
  );
}

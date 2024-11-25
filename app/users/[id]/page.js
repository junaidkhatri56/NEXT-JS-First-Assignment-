import React from 'react'

const SingleUser = async({ params: { id } }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  console.log(user);

  return (
    <div className="flex items-center justify-center min-h-screen max-h-screen bg-gradient-to-br from-blue-200 to-indigo-300 overflow-hidden">
      <div className="card w-96 bg-white shadow-2xl p-8 rounded-lg">
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">{user.name}</h2>
        <p className="text-gray-800 text-center mb-4">
          <span className="font-semibold">Username:</span> {user.username}
        </p>
        <p className="text-gray-800 text-center mb-4">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p className="text-gray-800 text-center mb-4">
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>
        <p className="text-gray-800 text-center mb-4">
          <span className="font-semibold">Website:</span>{" "}
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            {user.website}
          </a>
        </p>
        <p className="text-gray-800 text-center mb-4">
          <span className="font-semibold">Address:</span>{" "}
          {`${user.address.street}, ${user.address.suite}, ${user.address.city} - ${user.address.zipcode}`}
        </p>
        <p className="text-gray-800 text-center">
          <span className="font-semibold">Company:</span> {user.company.name}
        </p>
      </div>
    </div>
  );
};

export default SingleUser;

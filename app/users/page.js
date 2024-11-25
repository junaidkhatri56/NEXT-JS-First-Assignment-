import Link from "next/link";
import React from "react";

const Users = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await data.json();
  console.log(response);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex flex-col items-center pt-28">
      <h1 className="text-4xl font-bold text-indigo-700 mb-8">User Directory</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {response.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white shadow-lg rounded-lg w-60 hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-105"
          >
            <Link href={`/users/${item.id}`}>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

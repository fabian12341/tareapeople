"use client";
import useRandomUser from "../hooks/useRandomUser";

const RandomUserCard = () => {
  const { user, loading, error } = useRandomUser();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>No user found</p>;

  return (
    <div className="p-4 border rounded shadow-md max-w-sm mx-auto">
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className="rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center">
        {user.name.first} {user.name.last}
      </h2>
      <p className="text-gray-600 text-center">{user.email}</p>
      <p className="text-gray-500 text-center">
        {user.location.city}, {user.location.country}
      </p>
    </div>
  );
};

export default RandomUserCard;

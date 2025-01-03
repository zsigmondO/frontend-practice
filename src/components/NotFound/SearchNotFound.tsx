function SearchNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="text-xl mb-4">
          We couldn't find any results for your search.
        </p>
        <p className="text-gray-600 mb-6">
          Please try again with different search parameters.
        </p>
      </div>
    </div>
  );
}

export default SearchNotFound;

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* Navigation bar at the top */}
      <Navbar />

      {/* Placeholder main content, padded to avoid overlap with fixed navbar */}
      <main className="pt-20 px-6">
        <h1 className="text-2xl font-semibold">Welcome to UNIwise</h1>
        <p className="mt-4 text-gray-600">
          Start building your page content below the navigation.
        </p>
      </main>
    </>
  );
}

export default App;



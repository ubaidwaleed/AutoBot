import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home({ token }) {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col flex-grow ml-16">
          <Sidebar />
          <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
              <h1 className="mb-8 font-bold text-white text-7xl animate-pulse">
                Coming Soon
              </h1>
              <p className="mb-8 text-xl text-white">
                We're working hard to bring you something amazing. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

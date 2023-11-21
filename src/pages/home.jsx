import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col flex-grow ml-16">
          <Sidebar />
          <div>
            <div className="z-1">helloo from home</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

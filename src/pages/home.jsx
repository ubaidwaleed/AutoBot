import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home({ token }) {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col flex-grow ml-16">
          <Sidebar />
          <div>
            <div className="z-1">
              helloo to home, {token.user.user_metadata.full_name}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

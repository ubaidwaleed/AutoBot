import Sidebar from "../components/Sidebar";
import Welcome from "../components/home/welcome";
import DashboardCard1 from "../components/home/dashboardCard1";
import DashboardCard2 from "../components/home/dashboardCard2";
import DashboardCard3 from "../components/home/dashboardCard3";
import DashboardCard4 from "../components/home/dashBoardCard4";
import DashboardCard5 from "../components/home/dashBoardCard5";
import DashboardCard6 from "../components/home/dashboardCard6";
import DashboardCard7 from "../components/home/dashboardCard7";
import DashboardCard8 from "../components/home/dashboardCard8";
import DashboardCard9 from "../components/home/dashboardCard9";

function Home({ token }) {
  // Check if the user type is "admin"
  const isAdmin = token.user.user_metadata.type === "admin";
  const isUser = token.user.user_metadata.type === "user";
  const email = token.user.email;

  return (
    <>
      <div className="flex">
        <div className="flex flex-col flex-grow ml-16">
          <Sidebar />

          {/* Content area */}
          <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
            <main>
              <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
                <Welcome token={token} />
                <div className="grid grid-cols-12 gap-6">
                  {isAdmin && <DashboardCard1 />}
                  {isAdmin && <DashboardCard2 />}
                  {isAdmin && <DashboardCard3 />}
                  {isAdmin && <DashboardCard4 />}
                  {isAdmin && <DashboardCard5 />}
                  {isAdmin && <DashboardCard6 />}
                  {isAdmin && <DashboardCard7 />}
                  {isUser && <DashboardCard9 email={email} />}
                  {isUser && <DashboardCard8 email={email} />}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

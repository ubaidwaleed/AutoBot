import { useNavigate } from "react-router-dom";
import logo1 from "../assets/images/autobot-logo1.png";
import autobot1 from "../assets/images/autobot1.png";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Perform your login logic here

    // Assuming the login was successful, navigate to the home page
    navigate("/home");
  };
  return (
    <>
      <section className="flex flex-col items-center h-screen md:flex-row">
        <div className="flex items-center justify-center w-full h-screen px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12">
          <div className="w-full h-100">
            <div className="flex flex-col items-center justify-center w-full h-100">
              <img src={logo1} alt="Logo1" className="w-80 h-50" />
            </div>
            <p className="mt-10 text-lg text-center text-gray-500">
              Log in to experience the best auto motive experience
            </p>
            <h1 className="mt-12 text-xl font-bold leading-tight md:text-2xl">
              Log in to your account
            </h1>

            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  minLength="6"
                  className="w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-2 text-right">
                <a
                  onClick={() => navigate("/forgot-password")} // Navigate to login page
                  className="text-sm font-semibold text-gray-700 cursor-pointer hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                onClick={handleLogin}
                type="submit"
                className="block w-full px-4 py-3 mt-6 font-semibold text-white duration-300 bg-indigo-500 rounded-lg hover:-translate-y-1 hover:scale-100 hover:bg-indigo-400 focus:bg-indigo-400 "
              >
                Log In
              </button>
            </form>

            <hr className="w-full my-6 border-gray-300" />

            <p className="mt-8">
              Need an account?{" "}
              <a
                onClick={() => navigate("/signup")} // Navigate to Signup page
                className="font-semibold text-blue-500 cursor-pointer hover:text-blue-700"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
        <div className="relative hidden w-full h-screen lg:block md:w-1/2 xl:w-2/3">
          <img
            src={autobot1}
            alt="Logo2"
            className="object-cover w-full h-full"
          />
          {/* <div className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-30">
            <div className="absolute text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <img src={logo2}></img>
              <h1 className="mt-4 text-xl">Transforming car commerce online</h1>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Login;

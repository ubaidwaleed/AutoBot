import { useNavigate } from "react-router-dom";
import logo1 from "../assets/images/autobot-logo1.png";
import autobot1 from "../assets/images/autobot1.png";
import { useState, useEffect } from "react";
import { supabase } from "../supabase/client";
import { toast } from "react-toastify";

function UpdatePassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [hash, setHash] = useState(null);

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastForgotPassword = toast.loading("Updating password...", {
      autoClose: false,
    });

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    console.log("Password submitted:", password);

    try {
      const { data, error: updateError } = await supabase.auth.updateUser({
        password: password,
      });

      if (data) {
        toast.update(toastForgotPassword, {
          type: toast.TYPE.SUCCESS,
          render: "Password update successful! Redirecting to login.",
          autoClose: 5000,
          isLoading: false,
        });
        navigate("/"); // Redirect to login page after successful password update
      } else if (updateError) {
        toast.update(toastForgotPassword, {
          type: toast.TYPE.ERROR,
          render: "Error updating password. Please try again.",
          autoClose: 3000,
          isLoading: false,
        });
        throw updateError;
      }
    } catch (error) {
      console.error("Error updating password:", error.message);
      toast.update(toastForgotPassword, {
        type: toast.TYPE.ERROR,
        render: "Error updating password. Please try again.",
        autoClose: 3000,
        isLoading: false,
      });
    }
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
              Recover your password and experience the best automotive service.
            </p>

            <h1 className="mt-12 text-xl font-bold leading-tight md:text-2xl">
              Password Recovery
            </h1>

            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
              </div>

              {error && <p className="text-red-500">{error}</p>}

              <button
                type="submit"
                className="block w-full px-4 py-3 mt-6 font-semibold text-white duration-300 bg-indigo-500 rounded-lg hover:-translate-y-1 hover:scale-100 hover:bg-indigo-400 focus:bg-indigo-400"
              >
                Reset Password
              </button>
            </form>

            <hr className="w-full my-6 border-gray-300" />

            <p className="mt-8">
              Go to login{" "}
              <a
                onClick={() => navigate("/")} // Navigate to login page
                className="font-semibold text-blue-500 cursor-pointer hover:text-blue-700"
              >
                Log In
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

export default UpdatePassword;

import { useNavigate } from "react-router-dom";
import logo1 from "../assets/images/autobot-logo1.png";
import autobot1 from "../assets/images/autobot1.png";
import { useState } from "react";
import { supabase } from "../supabase/client";
import { toast } from "react-toastify";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  // Function to handle changes in the email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastForgotPassword = toast.loading(
      "Sending password reset email...",
      {
        autoClose: false,
      }
    );

    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + "/update-password", // Replace with your redirect URL
      });
      if (error) {
        console.error("Error resetting password:", error.message);
        toast.update(toastForgotPassword, {
          type: toast.TYPE.ERROR,
          render: "Error sending password reset email. Please try again.",
          autoClose: 3000, // Adjust the time or set it to 0 for manual close
          isLoading: false,
        });
      } else {
        console.log("Password reset link sent to", email);
        console.log("Response data:", data);
        toast.update(toastForgotPassword, {
          type: toast.TYPE.SUCCESS,
          render: "Password reset link sent successfully! Check your email.",
          autoClose: 5000, // Adjust the time or set it to 0 for manual close
          isLoading: false,
        });
      }
    } catch (error) {
      console.error("Error resetting password:", error.message);
      toast.update(toastForgotPassword, {
        type: toast.TYPE.ERROR,
        render: "Error sending password reset email. Please try again.",
        autoClose: 3000, // Adjust the time or set it to 0 for manual close
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
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none"
                  value={email} // Set the value of the input to the 'email' state
                  onChange={handleEmailChange} // Handle changes in the input
                  required
                />
              </div>

              <button
                type="submit"
                className="block w-full px-4 py-3 mt-6 font-semibold text-white duration-300 bg-indigo-500 rounded-lg hover:-translate-y-1 hover:scale-100 hover:bg-indigo-400 focus:bg-indigo-400 "
              >
                Send Verification Code
              </button>
            </form>

            <hr className="w-full my-6 border-gray-300" />

            <p className="mt-8">
              Remember your password?{" "}
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
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;

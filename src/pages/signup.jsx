import { useNavigate } from "react-router-dom";
import logo1 from "../assets/images/autobot-logo1.png";
import autobot1 from "../assets/images/autobot1.png";
import { useState } from "react";
import { supabase } from "../supabase/client";
import { toast } from "react-toastify";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { password, confirmPassword } = formData;

    const toastSignup = toast.loading("Signing up...", { autoClose: false });

    if (password === confirmPassword) {
      // Passwords match, proceed with form submission
      setPasswordsMatch(true);
      console.log("Form submitted with valid data:", formData);

      // Submitting to Supabase
      try {
        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.name,
            },
          },
        });

        // Log the response from Supabase
        if (error) {
          console.error("Sign up error:", error);
          // alert("Error signing up. Please try again."); // Show an error message to the user
          toast.update(toastSignup, {
            type: toast.TYPE.ERROR,
            render: "Error signing up. Please try again.",
            autoClose: 5000, // Adjust the time or set it to 0 for manual close
            isLoading: false,
          });
        } else {
          console.log("Sign up successful. Response data:", data);
          // alert("Check your email for verification link");

          toast.update(toastSignup, {
            type: toast.TYPE.SUCCESS,
            render:
              "Sign up successfully! Check your email for verification link.",
            autoClose: 10000, // Adjust the time or set it to 0 for manual close
            isLoading: false,
          });

          setFormData({
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
          });
        }
      } catch (error) {
        console.error("Caught an exception:", error);
        // alert("An error occurred. Please try again."); // Show an error message to the user
        toast.update(toastSignup, {
          type: toast.TYPE.ERROR,
          render: "Error signing up. Please try again.",
          autoClose: 5000, // Adjust the time or set it to 0 for manual close
          isLoading: false,
        });
      }
    } else {
      // Passwords don't match, indicate the error
      setPasswordsMatch(false);
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
              Sign Up to experience the best auto motive experience
            </p>
            <h1 className="mt-12 text-xl font-bold leading-tight md:text-2xl">
              Create a new account
            </h1>

            <form className="mt-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text" // Change input type to "text" for the name
                  name="name" // Provide a name attribute for the name input
                  id="name" // Provide a unique id for the name input
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email" // Provide a name attribute for the email input
                  id="email" // Provide a unique id for the email input
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password" // Provide a name attribute for the password input
                  id="password" // Provide a unique id for the password input
                  placeholder="Enter Password"
                  minLength="6"
                  className="w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword" // Provide a name attribute for the password input
                  id="password" // Provide a unique id for the password input
                  placeholder="Confirm Password"
                  minLength="6"
                  className={`w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none ${
                    !passwordsMatch ? "border-red-500" : ""
                  }`}
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                {!passwordsMatch && (
                  <p className="mt-1 text-sm text-red-500">
                    Passwords do not match.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="block w-full px-4 py-3 mt-6 font-semibold text-white duration-300 bg-indigo-500 rounded-lg hover:-translate-y-1 hover:scale-100 hover:bg-indigo-400 focus:bg-indigo-400 "
              >
                Sign Up
              </button>
            </form>

            <hr className="w-full my-6 border-gray-300" />

            <p className="mt-8">
              Already have an account?{" "}
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

export default SignUp;

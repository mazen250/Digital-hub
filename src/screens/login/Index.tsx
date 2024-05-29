import { Link } from "react-router-dom";
import Logo from "../../assets/digitalhub-logo.png";
import userStore from "../../stores/userStores";
import { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
function Index() {
  const { setUser } = userStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (email !== "" && password !== "") {
      setUser({
        id: 1,
        email: email,
        password: password,
      });
      message.success("Login Successful");
      navigate("/");
    } else {
      message.error("Please fill all the fields");
    }
  };

  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 h-screen">
        <Link to="/" className="flex  mb-6 text-2xl font-semibold text-white">
          <img
            className=" w-44 h-16 mr-2 object-contain"
            src={Logo}
            alt="logo"
          />
        </Link>
        <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold md:text-2xl text-white">
              Sign in to your account
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border sm:text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="example@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  placeholder="••••••••"
                  className=" border sm:text-sm rounded-lg border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start"></div>
                <Link
                  to="/forget-password"
                  className="text-sm font-medium text-gray-100 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg p-2.5"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-400">
                Don't have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium hover:underline text-blue-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;

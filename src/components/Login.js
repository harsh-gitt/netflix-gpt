import React, { useRef, useState } from "react";
import Browse from "./Browse";
import Header from "./Header";

const Login = () => {
  //Toggle Sign in Form Feature
  const [isSignInForm, setisSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  console.log(email.current);

  console.log(email, password, name);

  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
          className="absolute"
        />
      </div>
      <form className="w-3/12 p-12 absolute my-24 mx-auto right-0 left-0 bg-black bg-opacity-80">
        <h1 className="text-3xl text text-white p-2 my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700 rounded-lg"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-2 my-2 w-full bg-gray-700 rounded-lg"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700 rounded-lg"
          ref={password}
        />
        <button
          onClick={(event) => event.preventDefault()}
          className="p-4 my-4 text-white bg-red-700 w-full rounded-lg font-bold"
        >
          Sign In
        </button>
        <p
          onClick={() => {
            return setisSignInForm(!isSignInForm);
          }}
          className="p-2 my-2 text-white cursor-pointer text-sm hover:bg-red-500"
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered! Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

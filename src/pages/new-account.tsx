import { useRef } from "react";
import { useRouter } from "next/router";
const NewAccountForm= () => {
  // use of useRef to capture input value
  const nameInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  // use of useRouter from next/router to redirect this page to the Homepage
  const router = useRouter();

  const newAccountHandler = async (event) => {
    event.preventDefault();

    const userData = {
      name: nameInputRef.current.value,
      username: usernameInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    const response = await fetch("/api/account", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "content-Type": "application/json",
      },
    });

    // parses JSON response into native JavaScript objects
    const data = await response.json();

    console.log(data);

    // redirects this page to the Homepage
    router.replace("/");
  };

  const INPUT_STYLE =
    "my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md";

  return (
    <div className="flex-col px-12 py-12 max-w-3xl mx-auto shadow-xl rounded-2xl">
      <h1 className="font-light text-4xl">Add a new account</h1>
      <form onSubmit={newAccountHandler}>
        <input
          type="text"
          placeholder="Name"
          required
          ref={nameInputRef}
          className={INPUT_STYLE}
        />
        <input
          type="text"
          placeholder="Username"
          required
          ref={usernameInputRef}
          className={INPUT_STYLE}
        />
        <input
          type="text"
          placeholder="password"
          required
          ref={passwordInputRef}
          className={INPUT_STYLE}
        />
        <button
          type="submit"
          className="bg-yellow-500 text-gray-800 font-medium text-xl inline-flex  w-full items-center px-4 py-4 rounded-xl"
        >
          Add Now
        </button>
      </form>
    </div>
  );
};

export default NewAccountForm;

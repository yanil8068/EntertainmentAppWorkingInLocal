import React, { useContext, useEffect } from "react";
import MyContext from "../context/Context";

const Toast = () => {
  const { toast, setToast, toastMessage } = useContext(MyContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast, toastMessage]);

  return (
    <div
      className={`fixed z-50 top-5  bg-white  bg-opacity-50 rounded-lg px-4 py-2 ${
        toast ? "block" : "hidden"
      }`}
    >
      <p className="text-white"> {toastMessage}</p>
    </div>
  );
};

export default Toast;

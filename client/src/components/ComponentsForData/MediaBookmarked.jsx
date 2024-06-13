import React from "react";
import { FaBookmark } from "react-icons/fa";

// bookmark logo
function MediaBookmarked({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute p-3 top-1 right-1 bg-black opacity-50 hover:bg-white hover:text-black duration-100 cursor-pointer rounded-full z-10"
    >
      <FaBookmark />
    </div>
  );
}

export default MediaBookmarked;

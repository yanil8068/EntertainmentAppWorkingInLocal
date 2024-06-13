// // importing installed packages
// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// // importing custom packages
// import Loading from "../components/CssComponents/Loading";
// import Media from "../components/MediaComponents/Media";
// import baseUrl from "../utils/baseUrl";
// import MyContext from "../context/MyContext";

// // bookmark media
// function Bookmarks() {
//   const { isAuthenticated } = useContext(MyContext);
//   const [mediaData, setMediaData] = useState([]);

//   // bookmark media data fetching
//   useEffect(() => {
//     if (isAuthenticated) {
//       const fetchData = async () => {
//         try {
//           const { data } = await axios.get(`${baseUrl}/media/bookmark/get`, {
//             headers: {
//               "Content-Type": "application/json",
//             },
//             withCredentials: true,
//           });
//           setMediaData(data.data);
//         } catch (error) {
//           // console.error("Error fetching media data:", error);
//         }
//       };
//       fetchData();
//     }
//   }, [isAuthenticated]);

//   // css style
//   const containerStyle = "p-4 mt-2 flex flex-col gap-6";
//   const headingStyle = "text-2xl md:text-4xl font-bold";
//   const wrapperStyle =
//     "grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";

//   return (
//     <div className={containerStyle}>
//       <h1 className={headingStyle}> Bookmarks </h1>

//       {isAuthenticated ? (
//         <>
//           {
//             // render bookmark media
//             mediaData && mediaData.length > 0 ? (
//               <div className={wrapperStyle}>
//                 <Media mediaData={mediaData} />
//               </div>
//             ) : (
//               // render loading
//               <div>Empty!!!!..</div>
//             )
//           }
//         </>
//       ) : (
//         <>
//           <div className="flex flex-col gap-4">
//             <div>No Account Found </div>
//             <Link
//               to="/profile"
//               className="px-6 py-3 w-32 text-center bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
//             >
//               Visit Here
//             </Link>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Bookmarks;

// importing installed packages
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// importing custom packages
import Media from "../components/ComponentsForData/Media";
import baseUrl from "../utilities/baseUrl";
import MyContext from "../context/Context";

// bookmark media
function Bookmarks() {
  const { isAuthenticated } = useContext(MyContext);
  const [mediaData, setMediaData] = useState([]);

  // bookmark media data fetching
  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(`${baseUrl}/media/bookmark/get`, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          });
          setMediaData(data.data);
        } catch (error) {
          // Handle error
        }
      };
      fetchData();
    }
  }, [isAuthenticated]);

  // Filter movies and TV series
  const movies = mediaData.filter((media) => media.mediaType === "movie");
  const tvSeries = mediaData.filter((media) => media.mediaType === "tv");

  // CSS style
  const containerStyle = "p-4 mt-2 flex flex-col gap-6";
  const headingStyle = "text-2xl md:text-4xl font-bold";
  const wrapperStyle =
    "grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4";

  return (
    <div className={containerStyle}>
      <h1 className={headingStyle}>Bookmarks</h1>

      {isAuthenticated ? (
        <>
          {movies.length > 0 ? (
            <>
              <h2 className="text-xl md:text-2xl ">Bookmarked Movies</h2>
              <div className={wrapperStyle}>
                <Media mediaData={movies} />
              </div>
            </>
          ) : (
            <div>No bookmarked movies</div>
          )}

          {tvSeries.length > 0 ? (
            <>
              <h2 className="text-xl md:text-2xl  mt-8">
                Bookmarked TV Series
              </h2>
              <div className={wrapperStyle}>
                <Media mediaData={tvSeries} />
              </div>
            </>
          ) : (
            <div>No bookmarked TV series</div>
          )}
        </>
      ) : (
        <div className="flex flex-col gap-4">
          <div>No Account Found</div>
          <Link
            to="/profile"
            className="px-6 py-3 w-32 text-center bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
          >
            Visit Here
          </Link>
        </div>
      )}
    </div>
  );
}

export default Bookmarks;

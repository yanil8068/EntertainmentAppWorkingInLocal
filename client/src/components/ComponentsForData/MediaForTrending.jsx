// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import MyContext from "../../context/MyContext";
// import baseUrl from "../../utils/baseUrl";
// import MediaImage from "./MediaImage";
// import MediaBookmark from "./MediaBookmark";
// import MediaBookmarked from "./MediaBookmarked";
// import MediaInfo from "./MediaInfo";
// import MediaPlay from "./MediaPlay";

// function MediaForTrending({ mediaData }) {
//   const { isAuthenticated, setToast, setToastMessage } = useContext(MyContext);
//   const [isHovered, setIsHovered] = useState(null);
//   const [bookmarkedIds, setBookmarkedIds] = useState([]);
//   const [bookmarkStatus, setBookmarkStatus] = useState(null);

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
//           setBookmarkedIds(data.data.map((bookmark) => bookmark.id));
//         } catch (error) {
//           // Handle error
//         }
//       };
//       fetchData();
//     }
//   }, [bookmarkStatus, isAuthenticated]);

//   const deleteBookmark = async (id) => {
//     try {
//       await axios.delete(`${baseUrl}/media/bookmark/delete/${id}`, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       });
//       setBookmarkStatus(id);
//       setToast(true);
//       setToastMessage("Bookmark Deleted Successfully");
//     } catch (error) {
//       setToast(true);
//       setToastMessage("Error Happened");
//     }
//   };

//   const postData = async (singleMediaData) => {
//     if (isAuthenticated) {
//       try {
//         const { id, title, image, isAdult, mediaType, releaseDate } =
//           singleMediaData;

//         await axios.post(
//           `${baseUrl}/media/bookmark/add`,
//           {
//             id: id,
//             title: title,
//             image: image,
//             isAdult: isAdult,
//             mediaType: mediaType,
//             releaseDate: releaseDate,
//           },
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//             withCredentials: true,
//           }
//         );

//         setBookmarkStatus(id);
//         setToast(true);
//         setToastMessage("Bookmark added Successfully");
//       } catch (error) {
//         setToast(true);
//         setToastMessage("Error Happened");
//       }
//     } else {
//       setToast(true);
//       setToastMessage("No Account Found");
//     }
//   };

//   return (
//     <>
//       {mediaData &&
//         mediaData.map((singleMediaData) => (
//           <div
//             key={singleMediaData.id}
//             className="flex flex-col gap-2 relative"
//           >
//             <div
//               onMouseEnter={() => setIsHovered(singleMediaData.id)}
//               onMouseLeave={() => setIsHovered(null)}
//             >
//               <MediaImage
//                 singleMediaData={singleMediaData}
//                 mediaType={"Movie"}
//               />
//               {isHovered === singleMediaData.id && (
//                 <MediaPlay singleMediaData={singleMediaData} />
//               )}
//             </div>
//             <div className="absolute inset-0 flex justify-center items-center">
//               {bookmarkedIds.includes(singleMediaData.id) ? (
//                 <MediaBookmarked
//                   onClick={() => {
//                     deleteBookmark(singleMediaData.id);
//                   }}
//                 />
//               ) : (
//                 <MediaBookmark
//                   onClick={() => {
//                     postData(singleMediaData);
//                   }}
//                 />
//               )}
//               <MediaInfo singleMediaData={singleMediaData} />
//             </div>
//           </div>
//         ))}
//     </>
//   );
// }

// export default MediaForTrending;

// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import MyContext from "../../context/MyContext";
// import baseUrl from "../../utils/baseUrl";
// import MediaImage from "./MediaImage";
// import MediaBookmark from "./MediaBookmark";
// import MediaBookmarked from "./MediaBookmarked";
// import MediaInfo from "./MediaInfo";
// import MediaPlay from "./MediaPlay";

// function MediaForTrending({ mediaData }) {
//   const { isAuthenticated, setToast, setToastMessage } = useContext(MyContext);
//   const [isHovered, setIsHovered] = useState(null);
//   const [bookmarkedIds, setBookmarkedIds] = useState([]);
//   const [bookmarkStatus, setBookmarkStatus] = useState(null);

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
//           setBookmarkedIds(data.data.map((bookmark) => bookmark.id));
//         } catch (error) {
//           // Handle error
//         }
//       };
//       fetchData();
//     }
//   }, [bookmarkStatus, isAuthenticated]);

//   const deleteBookmark = async (id) => {
//     try {
//       await axios.delete(`${baseUrl}/media/bookmark/delete/${id}`, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       });
//       setBookmarkStatus(id);
//       setToast(true);
//       setToastMessage("Bookmark Deleted Successfully");
//     } catch (error) {
//       setToast(true);
//       setToastMessage("Error Happened");
//     }
//   };

//   const postData = async (singleMediaData) => {
//     if (isAuthenticated) {
//       try {
//         const { id, title, image, isAdult, mediaType, releaseDate } =
//           singleMediaData;

//         await axios.post(
//           `${baseUrl}/media/bookmark/add`,
//           {
//             id: id,
//             title: title,
//             image: image,
//             isAdult: isAdult,
//             mediaType: mediaType,
//             releaseDate: releaseDate,
//           },
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//             withCredentials: true,
//           }
//         );

//         setBookmarkStatus(id);
//         setToast(true);
//         setToastMessage("Bookmark added Successfully");
//       } catch (error) {
//         setToast(true);
//         setToastMessage("Error Happened");
//       }
//     } else {
//       setToast(true);
//       setToastMessage("No Account Found");
//     }
//   };

//   return (
//     <>
//       {mediaData &&
//         mediaData.map((singleMediaData) => (
//           <div
//             key={singleMediaData.id}
//             className="flex flex-col gap-2 relative"
//           >
//             <div
//               onMouseEnter={() => setIsHovered(singleMediaData.id)}
//               onMouseLeave={() => setIsHovered(null)}
//               className="relative"
//             >
//               <MediaImage
//                 singleMediaData={singleMediaData}
//                 mediaType={"Movie"}
//               />
//               {isHovered === singleMediaData.id && (
//                 <MediaPlay singleMediaData={singleMediaData} />
//               )}
//               <div className="absolute bottom-0 left-0">
//                 <MediaInfo singleMediaData={singleMediaData} />
//               </div>
//             </div>
//             <div className="absolute inset-0 flex justify-center items-center">
//               {bookmarkedIds.includes(singleMediaData.id) ? (
//                 <MediaBookmarked
//                   onClick={() => {
//                     deleteBookmark(singleMediaData.id);
//                   }}
//                 />
//               ) : (
//                 <MediaBookmark
//                   onClick={() => {
//                     postData(singleMediaData);
//                   }}
//                 />
//               )}
//             </div>
//           </div>
//         ))}
//     </>
//   );
// }

// export default MediaForTrending;

///////////////////////perfect but without play
// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import MyContext from "../../context/MyContext";
// import baseUrl from "../../utils/baseUrl";
// import MediaImage from "./MediaImage";
// import MediaBookmark from "./MediaBookmark";
// import MediaBookmarked from "./MediaBookmarked";
// import MediaInfo from "./MediaInfo";
// import MediaPlay from "./MediaPlay";

// function MediaForTrending({ mediaData }) {
//   const { isAuthenticated, setToast, setToastMessage } = useContext(MyContext);
//   const [isHovered, setIsHovered] = useState(null);
//   const [bookmarkedIds, setBookmarkedIds] = useState([]);
//   const [bookmarkStatus, setBookmarkStatus] = useState(null);

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
//           setBookmarkedIds(data.data.map((bookmark) => bookmark.id));
//         } catch (error) {
//           // Handle error
//         }
//       };
//       fetchData();
//     }
//   }, [bookmarkStatus, isAuthenticated]);

//   const deleteBookmark = async (id) => {
//     try {
//       await axios.delete(`${baseUrl}/media/bookmark/delete/${id}`, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       });
//       setBookmarkStatus(id);
//       setToast(true);
//       setToastMessage("Bookmark Deleted Successfully");
//     } catch (error) {
//       setToast(true);
//       setToastMessage("Error Happened");
//     }
//   };

//   const postData = async (singleMediaData) => {
//     if (isAuthenticated) {
//       try {
//         const { id, title, image, isAdult, mediaType, releaseDate } =
//           singleMediaData;

//         await axios.post(
//           `${baseUrl}/media/bookmark/add`,
//           {
//             id: id,
//             title: title,
//             image: image,
//             isAdult: isAdult,
//             mediaType: mediaType,
//             releaseDate: releaseDate,
//           },
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//             withCredentials: true,
//           }
//         );

//         setBookmarkStatus(id);
//         setToast(true);
//         setToastMessage("Bookmark added Successfully");
//       } catch (error) {
//         setToast(true);
//         setToastMessage("Error Happened");
//       }
//     } else {
//       setToast(true);
//       setToastMessage("No Account Found");
//     }
//   };

//   return (
//     <div className="flex sm:grid grid-rows-1 grid-flow-col gap-4 sm:gap-5 lg:gap-7  px-2">
//       {mediaData &&
//         mediaData.map((singleMediaData) => (
//           <div
//             key={singleMediaData.id}
//             className="relative flex flex-col items-center w-[230px] sm:w-[200px] lg:w-[340px]  flex-shrink-0"
//           >
//             <div
//               onMouseEnter={() => setIsHovered(singleMediaData.id)}
//               onMouseLeave={() => setIsHovered(null)}
//               className="relative w-full"
//             >
//               <MediaImage
//                 singleMediaData={singleMediaData}
//                 mediaType={"Movie"}
//                 className="w-full h-auto rounded"
//               />
//               {isHovered === singleMediaData.id && (
//                 <MediaPlay
//                   singleMediaData={singleMediaData}
//                   className="absolute inset-0"
//                 />
//               )}
//               <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/70 to-transparent text-white font-light">
//                 <MediaInfo singleMediaData={singleMediaData} />
//               </div>
//             </div>
//             <div className="absolute inset-0 flex justify-end items-start p-2">
//               {bookmarkedIds.includes(singleMediaData.id) ? (
//                 <MediaBookmarked
//                   onClick={() => {
//                     deleteBookmark(singleMediaData.id);
//                   }}
//                   className="w-6 h-6"
//                 />
//               ) : (
//                 <MediaBookmark
//                   onClick={() => {
//                     postData(singleMediaData);
//                   }}
//                   className="w-6 h-6"
//                 />
//               )}
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// }

// export default MediaForTrending;

/////////////////////////////////
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MyContext from "../../context/Context";
import baseUrl from "../../utilities/baseUrl";
import MediaImage from "./MediaImage";
import MediaBookmark from "./MediaBookmark";
import MediaBookmarked from "./MediaBookmarked";
import MediaInfo from "./MediaInfo";
import MediaPlay from "./MediaPlay";

function MediaForTrending({ mediaData }) {
  const { isAuthenticated, setToast, setToastMessage } = useContext(MyContext);
  const [isHovered, setIsHovered] = useState(null);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [bookmarkStatus, setBookmarkStatus] = useState(null);

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
          setBookmarkedIds(data.data.map((bookmark) => bookmark.id));
        } catch (error) {
          // Handle error
        }
      };
      fetchData();
    }
  }, [bookmarkStatus, isAuthenticated]);

  const deleteBookmark = async (id) => {
    try {
      await axios.delete(`${baseUrl}/media/bookmark/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setBookmarkStatus(id);
      setToast(true);
      setToastMessage("Bookmark Deleted Successfully");
    } catch (error) {
      setToast(true);
      setToastMessage("Error Happened");
    }
  };

  const postData = async (singleMediaData) => {
    if (isAuthenticated) {
      try {
        const { id, title, image, isAdult, mediaType, releaseDate } =
          singleMediaData;

        await axios.post(
          `${baseUrl}/media/bookmark/add`,
          {
            id: id,
            title: title,
            image: image,
            isAdult: isAdult,
            mediaType: mediaType,
            releaseDate: releaseDate,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        setBookmarkStatus(id);
        setToast(true);
        setToastMessage("Bookmark added Successfully");
      } catch (error) {
        setToast(true);
        setToastMessage("Error Happened");
      }
    } else {
      setToast(true);
      setToastMessage("No Account Found");
    }
  };

  return (
    <div className="flex sm:grid grid-rows-1 grid-flow-col gap-4 sm:gap-5 lg:gap-7 px-2">
      {mediaData &&
        mediaData.map((singleMediaData) => (
          <div
            key={singleMediaData.id}
            className="relative flex flex-col items-center w-[230px] sm:w-[200px] lg:w-[340px] flex-shrink-0"
          >
            <div
              onMouseEnter={() => setIsHovered(singleMediaData.id)}
              onMouseLeave={() => setIsHovered(null)}
              className="relative w-full"
            >
              <MediaImage
                singleMediaData={singleMediaData}
                mediaType={"Movie"}
                className="w-full h-auto rounded"
              />
              {isHovered === singleMediaData.id && (
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                  <MediaPlay singleMediaData={singleMediaData} />
                </div>
              )}
              <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/70 to-transparent text-white font-light">
                <MediaInfo singleMediaData={singleMediaData} />
              </div>
            </div>
            <div className="absolute top-2 right-2 flex">
              {bookmarkedIds.includes(singleMediaData.id) ? (
                <MediaBookmarked
                  onClick={() => {
                    deleteBookmark(singleMediaData.id);
                  }}
                  className="w-6 h-6 cursor-pointer"
                />
              ) : (
                <MediaBookmark
                  onClick={() => {
                    postData(singleMediaData);
                  }}
                  className="w-6 h-6 cursor-pointer"
                />
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

export default MediaForTrending;

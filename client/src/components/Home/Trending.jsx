// from installed packages
import React from "react";
import { useQuery } from "react-query";
// import { DNA } from "react-loader-spinner";
import Loading from "../ExtraComponents/Loading";

// from custom files
import fetchMultiMedia from "../../utilities/fetchAll";
import MediaForTrending from "../ComponentsForData/MediaForTrending";
// import Media from "../MediaComponents/Media";

// trending media components
function Trending() {
  // fetch media
  const {
    data: mediaData,
    isLoading,
    isError,
  } = useQuery([1, "trending"], () => fetchMultiMedia(1, "trending"));

  // render loading or error
  if (isLoading) return <Loading height={50} width={50} />;
  if (isError) return <div>Error fetching data</div>;

  // css style
  const containerStyle = "p-4 mt-2 flex flex-col gap-6";
  const headingStyle = "text-2xl md:text-4xl ";
  const wrapperStyle =
    "flex sm:grid grid-rows-1 grid-flow-col overflow-x-scroll gap-5 lg:gap-7 scrollbar-corner-transparent scrollbar scrollbar-thumb-darkRed scrollbar-track-transparent";

  return (
    <>
      <div className={containerStyle}>
        <h1 className={headingStyle}> Trending </h1>
        <div
          className={wrapperStyle}
          style={{ gridAutoColumns: "minmax(230px, auto)" }}
        >
          <MediaForTrending mediaData={mediaData} />
        </div>
      </div>
    </>
  );
}

export default Trending;

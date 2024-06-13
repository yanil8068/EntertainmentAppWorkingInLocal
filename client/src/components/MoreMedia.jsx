// importing from installed packages
import React from "react";
import { useQuery } from "react-query";
// import { DNA } from "react-loader-spinner";
import Loading from "./ExtraComponents/Loading";

import Media from "./ComponentsForData/Media";
import fetchMultiMedia from "../utilities/fetchAll";

function MoreMedia({ currentPage, mediaType }) {
  // fetching media
  const {
    data: mediaData,
    isLoading,
    isError,
  } = useQuery([currentPage, mediaType], () =>
    fetchMultiMedia(currentPage, mediaType)
  );

  // render loading or error
  if (isLoading) return <Loading height={50} width={50} />;
  if (isError) return <div>Error fetching data</div>;

  // css style
  const wrapperStyle =
    "grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4";

  // Render Movie media
  return (
    <div className={wrapperStyle}>
      <Media mediaData={mediaData} />
    </div>
  );
}

export default MoreMedia;

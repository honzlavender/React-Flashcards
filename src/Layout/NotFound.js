import React from "react";
import Breadcrumb from "../Components/Breadcrumb";

function NotFound() {
  //incase someone arrives on an invalid page this is rendered
  //a little garfield as a treat
  return (
    <>
    <Breadcrumb currentPage="Sorry!"/>
    <div className="NotFound">
      <h1>Not Found</h1>
      <img src="/image/image.png" alt="cool"></img>
    </div>
    </>
  );
}

export default NotFound;

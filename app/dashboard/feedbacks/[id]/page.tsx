import React from "react";

interface params {
  id: string;
}

const page = ({ id }: params) => {
  console.log(id);
  return <div>{id}</div>;
};

export default page;

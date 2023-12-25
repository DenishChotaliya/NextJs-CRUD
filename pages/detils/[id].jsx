// pages/details/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";

const DetailPage = ({ data }) => {
  const router = useRouter();

  console.log("data",data);

  return (
    <div>
      <Navbar2/>
      {data && (
        <>
          <div className="p-4 border items-start border-slate-300 my-3 flex justify-between ">
            <div className="text-center m-auto">
              <h1>Id: {data?.id}</h1>
              <h2>Name: {data?.name}</h2>
              <h3>Password: {data?.password}</h3>
              <h3>City: {data?.city}</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const itemId = params.id;
  const response = await fetch(
    `https://658192d63dfdd1b11c43a201.mockapi.io/cred/` + itemId
  );
 
  const data = await response.json();
 
  return {
    props: {
      data,
    },
  };
}

export default DetailPage;

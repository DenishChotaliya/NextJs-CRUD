
import Link from "next/link";
import React from "react";
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";
import { TbListDetails } from "react-icons/tb";
import { useRouter } from "next/router";
import Navbar from "./components/Navbar";

export const getStaticProps = async () => {
  const res = await fetch("https://658192d63dfdd1b11c43a201.mockapi.io/cred");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default function index({ data }) {
  const router = useRouter();
  const remove = (id) => {
    if (window.confirm("Do you want to remove?")) {
      const res = fetch(
        `https://658192d63dfdd1b11c43a201.mockapi.io/cred/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "API-Key": process.env.DATA_API_KEY,
          },
        }
      );
    };
  };
  return (
    <>
      <Navbar />
      {/* <h1 className="bg-red-600">hello </h1> */}
      {data?.map((item) => {
        return (
          <div className="p-4 border items-start border-slate-300 my-3 flex justify-between ">
            <div key={item.id}>
              <h1>Id: {item.id}</h1>
              <h2>Name: {item.name}</h2>
              <h3>Password: {item.password}</h3>
              <h3>City: {item.city}</h3>
            </div>
            <div className="flex gap-2  ">
              <button
                onClick={() => {
                  remove(item.id);
                }}
              >
                <HiOutlineTrash size={25} color="red" />
              </button>
              <Link href={`/edit/${item.id}`}>
                <HiPencilAlt size={25} />
              </Link>
              <Link href={`/detils/` + item.id}>
              <TbListDetails size={25} />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

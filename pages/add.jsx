import { useState } from "react";
import { useRouter } from "next/router";
import Navbar2 from "./components/Navbar2";

const AddItem = () => {
  //   const [itemName, setItemName] = useState('');
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [number, setNumber] = useState("");
//   const [city, setCity] = useState("");
const [itemName, setItemName] = useState({});

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://658192d63dfdd1b11c43a201.mockapi.io/cred",
      {
        method: "POST",
        body: JSON.stringify(itemName),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      router.push("/");
    }
  };

  return (
    <div>
      <Navbar2 />
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="border border-slate-500 px-8 py-2 "
          type="text"
          placeholder="Name"
          value={itemName.name}
            onChange={(get) =>
              setItemName({ ...itemName, name: get.target.value })
            }
        />
        <input
          type="Password"
          placeholder="Password"
          className="border border-slate-500 px-8 py-2 "
          value={itemName.password}
          onChange={(get) =>
            setItemName({ ...itemName, password: get.target.value })
          }
        />
        <input
          type="tel"
          placeholder="Number"
          maxLength={10}
          className="border border-slate-500 px-8 py-2 "
          value={itemName.number}
            onChange={(get) =>
              setItemName({ ...itemName, number: get.target.value })
            }
        />
        <input
          type="text"
          placeholder="city"
          className="border border-slate-500 px-8 py-2 "
          value={itemName.city}
            onChange={(get) =>
              setItemName({ ...itemName, city: get.target.value })
            }
        />
        <button
          className="bg-orange-400 font-bold  text-white py-3 px-6 w-fit"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddItem;

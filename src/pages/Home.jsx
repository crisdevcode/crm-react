import { useEffect, useState } from "react";
import Client from "../components/Client";

const Home = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClientsAPI = async () => {
      try {
        const url = "http://localhost:4000/clients";
        const response = await fetch(url);
        const result = await response.json();

        setClients(result);
      } catch (error) {
        console.log(error);
      }
    };

    getClientsAPI();
  }, []);

  const handleDelete = async (id) => {
    const confirmAlert = confirm("Do you want to delete this client?");

    if (confirmAlert) {
      try {
        const url = `http://localhost:4000/clients/${id}`;
        const response = await fetch(url, {
          method: "DELETE",
        });
        await response.json();

        const arrayClients = clients.filter((client) => client.id !== id);
        setClients(arrayClients);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3">Manage clients</p>

      <table className="w-full mt-5 table-auto shadow  bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Contact</th>
            <th className="p-2">Company</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <Client
              key={client.id}
              client={client}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;

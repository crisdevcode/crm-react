import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const ViewClient = () => {
  const { id } = useParams();

  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getClientAPI = async () => {
      try {
        const url = `http://localhost:4000/clients/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        setClient(result);
      } catch (error) {
        console.log(error);
      }

      setLoading(!loading);
    };

    getClientAPI();
  }, []);

  return loading ? (
    <Spinner />
  ) : Object.keys(client).length === 0 ? (
    <p>No hay resultados</p>
  ) : (
    <div>
      <h1 className="font-black text-4xl text-blue-900">
        View Client: {client.name}
      </h1>
      <p className="mt-3">Client Information</p>

      {client.name && (
        <p className="text-4xl text-gray-600 mt-10">
          <span className="text-gray-800 uppercase font-bold">Client: </span>
          {client.name}
        </p>
      )}
      {client.email && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {client.email}
        </p>
      )}
      {client.phone && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Phone: </span>
          {client.phone}
        </p>
      )}
      {client.company && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Company: </span>
          {client.company}
        </p>
      )}
      {client.notes && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="text-gray-800 uppercase font-bold">Notes: </span>
          {client.notes}
        </p>
      )}
    </div>
  );
};

export default ViewClient;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormComponent from "../components/FormComponent";

const EditClient = () => {
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
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Edit Client</h1>
      <p className="mt-3">Use this form to edit client data.</p>

      {client?.name ? (
        <FormComponent client={client} loading={loading} />
      ) : (
        <p>Invalid Client ID</p>
      )}
    </>
  );
};

export default EditClient;

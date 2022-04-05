import FormComponent from "../components/FormComponent";

const NewClient = () => {
  return (
    <>
      <h1>Nuevo Cliente</h1>
      <p className="mt-3">
        Llena los siguientes campos para registrar un cliente
      </p>

      <FormComponent />
    </>
  );
};

export default NewClient;

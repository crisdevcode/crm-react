import FormComponent from "../components/FormComponent";

const NewClient = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New Client</h1>
      <p className="mt-3">Fill in the fields to register a client</p>

      <FormComponent />
    </>
  );
};

export default NewClient;

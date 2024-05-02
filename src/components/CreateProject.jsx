import Input from "../components/Input";
import { useState } from "react";

export default function CreateProject({ create, dataForm }) {
  const [inputForm, setInputForm] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleInputChange = (event, inputName) => {
    setInputForm({
      ...inputForm,
      [inputName]: event.target.value,
    });
  };

  function handleCreate() {
    return create("");
  }

	function handleSubmit(event) {
		event.preventDefault();
		let formData = []
		formData.push(inputForm)
		dataForm(formData)
		console.log(inputForm);
	}
  return (
    <div className="w-3/4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row-reverse">
          <button
            type="submit"
            className="flex m-1 items-center justify-center px-4 py-2 bg-slate-950 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Save
          </button>
          <button
            onClick={handleCreate}
            className="flex m-1 items-center justify-center px-4 py-2 bg-slate-200 text-black rounded-md hover:bg-slate-300 focus:outline-none focus:bg-gray-700"
          >
            Cancel
          </button>
        </div>
        <Input
          isTextarea={false}
          label={"TITLE"}
          type={"text"}
          value={inputForm.title}
          change={(event) => handleInputChange(event, "title")}
        />
        <Input
          isTextarea={true}
          label={"DESCRIPTION"}
          type={"text"}
          value={inputForm.description}
          change={(event) => handleInputChange(event, "description")}
        />
        <Input
          isTextarea={false}
          label={"DUE DATE"}
          type={"date"}
          value={inputForm.date}
          change={(event) => handleInputChange(event, "date")}
        />
      </form>
    </div>
  );
}

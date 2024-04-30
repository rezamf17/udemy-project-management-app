import Input from "../components/Input";

export default function CreateProject({create}) {

	function handleCreate(){
		return create("")
	}
  return (
    <div className="w-3/4">
      <div className="flex flex-row-reverse">
				<button className="flex m-1 items-center justify-center px-4 py-2 bg-slate-950 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
				<button onClick={handleCreate} className="flex m-1 items-center justify-center px-4 py-2 bg-slate-200 text-black rounded-md hover:bg-slate-300 focus:outline-none focus:bg-gray-700">Cancel</button>
			</div>
      <Input isTextarea={false} label={"TITLE"} type={"text"} />
      <Input isTextarea={true} label={"DESCRIPTION"} type={"text"} />
      <Input isTextarea={false} label={"DUE DATE"} type={"date"} />
    </div>
  );
}

import Input from "./Input.jsx"
import { useState } from "react"

export default function AddTask({ job, dataForm }) {
	const [task, setTask] = useState("")
	const [arrayTodo, setArrayTodo] = useState([]);
	const [index, setIndex] = useState(1);

	function addTask() {
    // Salin arrayTodo saat ini
    const updatedArrayTodo = [...arrayTodo];

    // Tambahkan tugas baru ke salinan arrayTodo
    updatedArrayTodo.push({
      id: index,
      todo: task
    });

    // Perbarui state arrayTodo dengan salinan yang telah diperbarui
    setArrayTodo(updatedArrayTodo);

    // Perbarui index untuk tugas berikutnya
    setIndex(prevIndex => prevIndex + 1);

    // Setel task ke string kosong untuk membersihkan input
    setTask('');

    // Panggil fungsi job dengan arrayTodo yang baru
    job(updatedArrayTodo);

    console.log('todo', updatedArrayTodo);
	}

	function clearTask(data, index){
		// console.log('clear data', data);
		// console.log('index clear data', index);
		arrayTodo.splice(index, 2)
		console.log('arrayTodo clear data', arrayTodo);
		setArrayTodo([...arrayTodo]);
		// setArrayTodo(prevArrayTodo => prevArrayTodo.filter(item => item.id !== data));
	}

	const handleInputChange = (event) => {
		setTask(event.target.value)
	};

	return (
		<>
			<h1 className="font-bold text-3xl">TASKS</h1>
			<div className="flex">
				<Input isTextarea={false} label={"Task ToDo"} type={"text"} value={task} change={(event) => handleInputChange(event)} />
				<a href="#" className="flex-auto text-gray-600 m-5 mt-7 font-bold" onClick={addTask}>Add Task</a>
			</div>
			{
				dataForm.task && dataForm.task.length > 0 ? (
					dataForm.task.map((result, index) => (
						<div className="flex justify-between bg-slate-100 p-5" key={index}>
							<div className="">{result.todo}</div>
							<div className="" >
								<a href="#"  onClick={() => clearTask(result.id, index)}>Clear</a>
							</div>
						</div>
					))
				) : (
					<div>There are no tasks.</div>
				)
			}
		</>
	)
}
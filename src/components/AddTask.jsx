import Input from "./Input.jsx"
import { useState } from "react"

export default function AddTask({ job, dataForm }) {
	const [task, setTask] = useState("")
	const [arrayTodo, setArrayTodo] = useState([]);
	let index = 0

	function addTask() {
		console.log('add task', task)
		arrayTodo.push({
			id: index++,
			todo: task
		})

		setArrayTodo([...arrayTodo]);
		setTask('')
		job(arrayTodo)
		console.log('todo', arrayTodo)
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
					dataForm.task.map((result) => (
						<div className="flex justify-between bg-slate-100 p-5" key={result.id}>
							<div className="">{result.todo}</div>
							<div className="">Clear</div>
						</div>
					))
				) : (
					<div>There are no tasks.</div>
				)
			}
		</>
	)
}
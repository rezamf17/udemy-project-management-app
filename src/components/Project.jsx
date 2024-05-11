import AddTask from "./AddTask"
import NoProject from "./NoProject";

export default function Project({ profile, job, deleteProfile }) {

	function handleJob(data) {
		job(data)
		console.log('job in project', data)
	}
	console.log('profile in project'	, profile)
	function handleDeleteProfile() {
		deleteProfile(profile)
	}

	if (profile.length === 0) {
		return (
			<NoProject />
		)
		
	}
	return (
		<div className="w-3/4">
			<div className="flex justify-between">
				<h1 className="text-5xl ">{profile[0].title}</h1>
				<a href="#" className="text-gray-600" onClick={handleDeleteProfile}>Delete</a>
			</div>
			<div>
				<p className="text-gray-400 mt-3"><i>{profile[0].date}</i></p>
				<div className="mt-4">
					<p>{profile[0].description}</p>
				</div>
			</div>
			<br />
			<hr />
			<AddTask job={handleJob} dataForm={profile[0]} />
		</div>
	)
}
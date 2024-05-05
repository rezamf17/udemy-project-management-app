export default function Project({ profile }) {

	console.log('profile', profile);
	return (
		<div className="w-3/4">
			<div className="flex justify-between">
				<h1 className="text-5xl ">{profile[0].title}</h1>
				<a href="#" className="text-gray-600">Delete</a>
			</div>
			<div>
				<p className="text-gray-400 mt-3"><i>{profile[0].date}</i></p>
				<div className="mt-4">
					<p>{profile[0].description}</p>
				</div>
			</div>
			<br />
			<hr />
		</div>
	)
}
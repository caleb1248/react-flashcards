import { useParams, Navigate } from 'react-router-dom';

export default function Import() {
	const deck = JSON.parse(atob(useParams().deck)),
		id = Math.round(Math.random() * 2000).toString();

	localStorage.setItem("keys", JSON.stringify([
		...JSON.parse(localStorage.getItem("keys")),
		id
	]));

	localStorage.setItem(id, JSON.stringify(deck));
	return <Navigate to={`/view/${id}`} />
}
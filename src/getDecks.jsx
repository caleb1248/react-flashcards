export default function getDeck(id) {
	return JSON.parse(localStorage.getItem(id));
}
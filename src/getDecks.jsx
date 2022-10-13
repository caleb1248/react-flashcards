export default function getDeck(id) {
	try {
		return JSON.parse(localStorage[id])
	} catch {
		return null;
	}
}
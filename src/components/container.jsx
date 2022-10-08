import { Navigate, useParams } from 'react-router-dom';
import getDeck from '../getDecks';

export default function DeckContainer({ children }) {
	return getDeck(useParams().theID) == null ? <Navigate to="/" /> : children
}
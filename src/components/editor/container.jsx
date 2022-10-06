import {Navigate, useParams} from 'react-router-dom';
import Editor from './editor';
import getDeck from '../../getDecks';

export default function EditorContainer() {
	return getDeck(useParams().theID) == null? <Navigate to="/" />: <Editor/>
}
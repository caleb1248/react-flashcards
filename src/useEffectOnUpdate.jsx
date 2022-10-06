import { useEffect, useRef } from "react";

export default function useEffectOnUpdate(callback, whenWhatUpdates) {
	const didMount = useRef(false);
	useEffect(() => {
		if(didMount.current) {
			return callback();
		} else {
			didMount.current = true;
		}
	}, whenWhatUpdates);
}
import { sections } from "./initialState";

interface actionType {
	newState: sections;
}

export function reducer(state: sections, action: actionType): sections {
	return state;
}

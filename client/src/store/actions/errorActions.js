import { CLEAR_ERROR } from './types';

export const clearErrors = () => {
	return {
		type: CLEAR_ERROR,
	};
};

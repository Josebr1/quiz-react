import { createReducer } from 'reduxsauce';
import { SubjectTypes } from './../actions/Subject';

export const INITIAL_STATE = { error: false, loading: false, subject : { name: '', description: ''}};

export const createSuccess = (state = INITIAL_STATE, action) => {}

export const createError = (state = INITIAL_STATE, action) => {}

export const isLoading = (state = INITIAL_STATE, action) => {}

export const HANDLER = {
    [SubjectTypes.CREATE_SUCCESS] : createSuccess,
    [SubjectTypes.CREATE_ERROR] : createError,
    [SubjectTypes.IS_LOADING] : isLoading,
}
export default createReducer(INITIAL_STATE, HANDLER);
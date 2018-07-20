import { createActions } from 'reduxsauce';

const { Types: Creators } = createActions({
    createSuccess: ['subject'],
    createError: ['error'],
    isLoading: ['loading']
});

export const SubjectTypes = Types;
export default Creators;
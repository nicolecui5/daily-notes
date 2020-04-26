import { dispatch } from 'redux';
import axios from 'axios';
import {
  FETCH_NOTES_FAILURE,
  FETCH_NOTES_INIT,
  FETCH_NOTES_SUCCESS
} from "../actions";

export const fetchNoteInit = () => ({
    action: FETCH_NOTES_FAILURE,
    payload: {
        isLoading: true;
    }
    
});
    
export const fetchNoteSuccess =(data) => ({
    action: FETCH_NOTES_SUCCESS,
    payload:{
        isLoading: false;
        data: data
    }
})

export const fetchNoteFailure =(error) => ({
    action: FETCH_NOTES_FAILURE,
    payload:{
        isLoading: false;
        error: error
    }
})

export const fetchNote = async ({ year, month, day }) => {
    dispatch(fetchNoteInit());
    try {
        const note = await axios.get(`http://localhost:3001/api/note/getNoteByDate/:${year}-:${month}-:${day}`);
        dispatch(fetchNoteSuccess(note));
    } catch (error) {
        dispatch(fetchNoteFailure(error));
    }
};

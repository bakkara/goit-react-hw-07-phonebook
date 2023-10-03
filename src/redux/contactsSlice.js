import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const contactsInitialState = {
    contacts: [],
    isLoading: false,
    error: null
  };


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload)
            },
            prepare(name,number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                        }
                    }
            }
        },
        deleteContact: {
            reducer(state, action) {
                state.contacts = state.contacts.filter(element => element.id !== action.payload);
            }
        }

       
    }
})


export const contactsReducer = contactsSlice.reducer

export const { addContact, deleteContact } = contactsSlice.actions
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ContactData } from "../types/types";

export interface ContactState {
    info: ContactData[];
}

const initialState: ContactState = {
    info: [],
};

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addNewContact: (state: ContactState, action: PayloadAction<ContactData>) => {
            console.log('Add New Contact - Reducer');
            state.info = [...state.info, action.payload];
        },

        removeContact: (state: ContactState, action: PayloadAction<{ id: string }>) => {
            console.log('Remove Contact - Reducer');
            const index = state.info.findIndex((info: ContactData) => info.id === action.payload.id);
            let newContactList = [...state.info];
            if (index >= 0) {
                newContactList.splice(index, 1);
            } else {
                console.log(`Can not remove contact (id: ${action.payload.id}) as it is not in the contacts list.`)
            }
            state.info = newContactList;
        },
    }
});

// Action creators are generated for each case reducer function
export const { addNewContact, removeContact } = contactSlice.actions;

// Selectors -> retrieving items in state to use in different components
export const selectContactItems = (state: RootState) => state.contact.info;
export const selectContactItemsWithId = (state: RootState, id: string) => {
    state.contact.info.filter((info: ContactData) => info.id === id);
};


export default contactSlice.reducer;
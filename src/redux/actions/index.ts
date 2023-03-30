import { ContactData } from "../../types/types";
import {Dispatch} from "react";
export const selectPerson = (peopleId: string) => {
    return {
        type: 'SELECTED_PERSON',
        selectId: peopleId,
    };
};

export const noneSelected = () => {
    return {
        type: 'NONE_SELECTED',
    };
};


export const formUpdate = ({ prop, value }) => {
    return {
        type: 'FORM_UPDATE',
        payload: { prop, value },
    };
};




export const createNewContact = (contactInfo: ContactData) => {
    return (dispatch: Dispatch<ContactData>) => {
        fetch("http://localhost:3000/contact", {
            method: "POST",
            body: JSON.stringify({
                "firstName": contactInfo.firstName,
                "lastName": contactInfo.lastName,
                "email": contactInfo.email,
                "company": contactInfo.company,
                "phone": contactInfo.phone,
                "notes": contactInfo.notes,
                "created_date": contactInfo.created_date,
            }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then((response) => console.log(response))
            .then(() => {
                dispatch({ type: 'NEW_CONTACT' });
            })
            .catch(error => console.log(error))
    };
};


export const loadInitialContacts = () => {
    return (dispatch: Dispatch<ContactData>) => {
        fetch('http://192.168.2.19:3000/contact')
            .then((response) => {
                return response.json();})
            .then((data) => {
                dispatch({ type: 'INITIAL_FETCH', payload: data })
            })
            .catch(error => console.log(error))
    };
};


export const deleteContact = (id: string) => {
    return (dispatch: Dispatch<ContactData>) => {
        fetch("http://localhost:3000/contact/"+id, { method: "DELETE"})
            .then(() => {
                dispatch({ type: 'DELETE_CONTACT'});
            })
    }
}

export const updateContact = (person: ContactData) => {
    return {
        type: 'UPDATE_CONTACT',
        payload: person,
    }
}

export const saveContact = (contactInfo: ContactData) => {
    return (dispatch: Dispatch<ContactData>) => {
        fetch("http://localhost:3000/contact/" + contactInfo.id, {
            method: "PUT",
            body: JSON.stringify({
                "firstName": contactInfo.firstName,
                "lastName": contactInfo.lastName,
                "phone": contactInfo.phone,
                "email": contactInfo.email,
                "company": contactInfo.company,
                "notes": contactInfo.notes,
                "created_date": contactInfo.created_date,
            }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then((response) => console.log(response))
            .then(() => {
                dispatch({ type: 'SAVE_CONTACT' });
            })
            .catch(error => console.log(error))
    };
}
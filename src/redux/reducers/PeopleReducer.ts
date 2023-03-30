const initialState = {
    people: [],
    detailView: false,
    personSelected: null,
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    notes: '',
    created_date: '',
    toUpdate: false,
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'INITIAL_FETCH':
            return {
                ...state,
                people: action.payload,
            }

        case 'SELECTED_PERSON':
            return {
                ...state,
                detailView: true,
                personSelected: action.selectId
            }

        case 'NONE_SELECTED':
            return {
                ...state,
                detailView: false,
                personSelected: null
            }

        case 'FORM_UPDATE':
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }

        case 'NEW_CONTACT':
            return {
                ...state,
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                company: '',
                project: '',
                notes: '',
            }

        case "ADD_PERSON":
            return {
                ...state,
                ...action.newPerson
            }

        case 'UPDATE_CONTACT':
            return {
                ...state,
                toUpdate: true,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                company: action.payload.company,
                phone: action.payload.phone,
                notes: action.payload.notes,
                created_date: action.payload.created_date,
                id: action.payload.id,
            }

        case 'SAVE_CONTACT':
            return {
                ...state,
                toUpdate: false,
                detailView: false,
                firstName: '',
                lastName: '',
                email: '',
                company: '',
                phone: '',
                notes: '',
                created_date: '',
                id: '',
            }

        case "DELETE_CONTACT":
            return {
                ...state,
                detailView: false,
                personSelected: null,
            }

        default:
            return state;
    }
}
import {
    addNewContact,
    getContacts,
    getContactWithID,
    //updateContact,
    //deleteContact
} from '../controllers/crmController';

import { Request, Response, Application, NextFunction } from 'express';

const routes = (app: Application) => {
    app.route('/contact')
        .get((req: Request, res: Response, next: NextFunction) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)

        // POST endpoint
        .post(addNewContact);

    app.route('/contact/:contactId')
        // get specific contact
        .get(getContactWithID)

        // put request
        //.put(updateContact)

        // delete request
        //.delete(deleteContact);
}

export default routes;
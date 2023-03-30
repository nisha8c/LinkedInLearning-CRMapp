import mongoose, {models, model} from 'mongoose';
import { ContactSchema } from '../models/crmModel';
import { Request, Response } from 'express';

//const Contact = mongoose.model('Contact', ContactSchema);
const Contact = models?.Contact || model('Contact', ContactSchema);

export const addNewContact = (req: Request, res: Response) => {
    let newContact = new Contact(req.body);

    newContact.save((err: Error, contact: any) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContacts = async (req: Request, res: Response) => {

    const data = await Contact.find().exec();
    res.status(200).json(data);
};

export const getContactWithID = (req: Request, res: Response) => {
    Contact.findById(req.params.contactId, (err: Error, contact: any) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}

/*
export const updateContact = (req: Request, res: Response) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, { new: true }, (err: Error, contact: any) => {
        if (err) res.send(err);
        res.json(contact);
    })
}

export const deleteContact = (req: Request, res: Response) => {
    Contact.remove({ _id: req.params.contactId }, (err: Error, contact: any) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact'});
    })
} */
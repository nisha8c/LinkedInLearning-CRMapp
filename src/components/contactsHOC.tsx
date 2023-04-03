// Higher Order component Example.
// Note: name of HOC starts with small letter, unlike normal react components.

import {Component, useEffect, useState} from "react";
import * as dotenv from 'dotenv';
import {ContactData} from "../types/types";
dotenv.config();

//const server_url = process.env.SERVER_URL;

const userHOC = (Component: any) => {
    return (props: any) => {
        const [contact, setContact] = useState<ContactData[]>([]);

        useEffect(() => {
            (async () => {
                const response = await fetch("http://localhost:3000/contact")
                    //await fetch(`${server_url}`);
                const data = await response.json();
                setContact(data);
            }) ();
        });

        return <Component {...props} contact={contact} />
    }
}
export default userHOC;
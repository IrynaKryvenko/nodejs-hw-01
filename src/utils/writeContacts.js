import { PATH_DB } from '../constants/contacts.js';
import  { readContacts } from './readContacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    const currentData = await readContacts();
    const newData = JSON.stringify([...currentData, ...updatedContacts], undefined, 2);
    try {
        await fs.writeFile(PATH_DB, newData, 'utf-8');
        console.log('success');
    } catch (error) {
        console.log(error);
    }
};

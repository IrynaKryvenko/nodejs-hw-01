import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
    try {
        const data = await readContacts();
        if (data.length === 0) return console.log('File is empty.')
        data.pop();
        await fs.writeFile(PATH_DB, JSON.stringify([...data], undefined, 2 , 'utf8'));
    } catch (error) {
        console.log(error);
    }
 };

removeLastContact();

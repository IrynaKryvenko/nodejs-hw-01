import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    const contArr = [];
    for (let i = 0; i < number; i++){
        contArr.push(createFakeContact());
    }
    await writeContacts(contArr);

};

generateContacts(5);

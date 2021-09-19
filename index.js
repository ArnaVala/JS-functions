// JavaScript Introduction
// FUNCTIONS

// ----------- TASK 1 -----------
console.log('') // used for clearer formatting in console.log
console.log('----------- TASK 1 -----------')
console.log('') // used for clearer formatting in console.log

// CREATE A CONTACT LIST
/* Create a contact list where every contact must have a name and email, and can (i.e. might not have) have phoneNumber and company. */

const contactList = [
   {
      name: 'Dale Cooper',
      email: 'dale.cooper@mail.com',
      phoneNumber: 2323233,
      company: 'FBI'
   },
   {
      name: 'Log Lady',
      email: 'log.lady@mail.com',
      company: 'Wood Logs',
      phoneNumber: ''
   },
   {
      name: 'Lawrence Jacoby',
      email: 'dr.jacoby@mail.com',
      company: '',
      phoneNumber: ''
   }
]
// This is the original contactList 
console.log(contactList);

// THE TASKS - FUNCTIONS

// ----------- TASK 2 -----------
console.log('') // used for clearer formatting in console.log
console.log('----------- TASK 2 -----------')
console.log('') // used for clearer formatting in console.log
/* ADD function to add a new contact to the list:
Parameters:
- name
- email
- phone number
- company
*/

// setting parameters values to function

// create a function which checks if email already exist when adding new contact
function addContact(name, email, phoneNumber, company) {
   let result = '';

   // isDuplicate variable is set to false. If a duplicate email is found - then the variable changes to true.
   let isEmailDuplicate = false;
   // iterate through the existing email props and check if there is duplicate
   for (var i = 0, x = contactList.length; i < x; i++) {
      // a variable for existing emails
      let existEmail = (contactList[i].email);
      // change isEmailDuplicate to true if the email already exists
      if (email === existEmail) {
         isEmailDuplicate = true;
      }
   }

   // Now make an if/else statement that - console.log (result)
   if (name === '' || email === '') {
      // if name or email strings empty, then throw ERROR
      result = 'Missing fields';
   } else if (isEmailDuplicate === true) {
      // if the isEmailDuplicate function results in true - then throw error
      result = 'Duplicate was found';
   } else {
   // SUCCESS: if it passes both above then it pushes contact to contactList 
      contactList.push({
         'name': name,
         'email': email,
         'phoneNumber': phoneNumber,
         'company': company
      });
      // success 
      result = `${name} was added`;
   }
   // show result in console
   console.log(result); 
};


console.log('----- testing the functions ----')
console.log('') // used for clearer formatting in console.log

// Testing the function
addContact('Jacoby', 'dr.jacoby@mail.com', 4444444, 'this company') // Email duplicate found
addContact('Arna Vala','', 5555555, 'another company') // Missing fields
addContact('Arna Vala', 'arnavala@mail.com', '', '') // Success - Arna Vala added



console.log('') // used for clearer formatting in console.log
console.log('----- New contact List -----')

// show new contactList with Arna vala added
console.log(contactList);



// ----------- TASK 3 -----------
console.log('') // used for clearer formatting in console.log
console.log('----------- TASK 3 -----------')
console.log('') // used for clearer formatting in console.log
/* 
REMOVE contact FUNCTION
- Remove corresponding contact / Email address is the unique identifier
Parameters:
- email
*/

// create a removeContact function- email is Unique Identifier (UID)
function removeContact(emailUID) {
   let result = '';

   // set emailDoesExist to false 
   let emailIsExisting = false;
   let contactName = ''; //name of the email owner - so we can log
   let contact; //contact - so we can delete (splice)

   // check if email exists in contactList.
   for (var i = 0, x = contactList.length; i < x; i++) {
      let existEmail = (contactList[i].email);
   
      if (emailUID === existEmail) {
         emailIsExisting = true;
         contactName = contactList[i].name;
         contact = i;
      }
   };

   // If/else statement: 
   //remove contact if there if emailIsExisting = true(the email exists)
   if (emailIsExisting === true) {
      //remove from contactList 
      contactList.splice(contact, 1);
      //success
      result = `${contactName} was removed`;
   } else {
     //Throw Error result if there is no matching email
      result = 'Contact not found';
   }
   // show result in console
   console.log(result);
}

// Testing the function
console.log('----- testing the functions ----')
console.log('') // used for clearer formatting in console.log
removeContact('this@mail.com') // throws error result
removeContact('arnavala@mail.com') //removes contact

// show new contactList with contact removed
console.log('----- New contact List -----')
console.log('') // used for clearer formatting in console.log
console.log(contactList);


// ----------- TASK 4 -----------
console.log('') // used for clearer formatting in console.log
console.log('----------- TASK 4 -----------')
console.log('') // used for clearer formatting in console.log

/* 
EDIT contact FUNCTION 
Update/Increment the corresponding contact’s data with the information that’s passed in / Email address is the unique identifier
Parameters:
- email
- newData= property: value - with new info for the contact
 */

// create function editContact

function editContact(emailUID, newProp, newValue) {
   let result = '';

   // set emailDoesExist to false 
   let emailIsExisting = false;
   let contactName = ''; //name of the email owner - so we can log
   let contact; //contact - so we can delete (splice)

   // check if email exists in contactList - like earlier
   for (var i = 0, x = contactList.length; i < x; i++) {
      let existEmail = (contactList[i].email);
   
      if (emailUID === existEmail) {
         emailIsExisting = true;
         contactName = contactList[i].name;
         contact = i;
      }
   };

   // If/else statement:
   // check if emailIsExisting = true,
   // If emailIsExisting = true - success and change the info
   // If emailIsExisting = false - throw error
   if (emailIsExisting === true) {
      contactList[contact][newProp] = newValue;
      result=`${contactName} was updated.`
   } else {
      result= 'Contact not found'
   }
   console.log(result)
}

// Testing the function
console.log('----- testing the functions ----')
console.log('') // used for clearer formatting in console.log

// editContact(emailUID, newProps, newValue)
editContact("log.lady@mail.com", "company", "Twin Peaks Logdge ",);  // this will change company value
editContact("log.lady@mail.com", "phoneNumber", 5333333) // this will add a age(newProps):50(newValue)
editContact("not.existing@mail.com", "name", "Won't compute") // this will pass error - contact not found

console.log('') // used for clearer formatting in console.log
console.log('----- New contact List -----')
console.log(contactList) // see age:20 (newProp:newValue) has been added


// ----------- TASK 5 -----------
console.log('') // used for clearer formatting in console.log
console.log('----------- TASK 5 -----------')

/* 
getContactInfo FUNCTION
Output information for the corresponding contact / Email address is the unique identifier
Parameters:
- email (emailUID)
*/

function getContactInfo(emailUID) {
   let result = '';
   
    // set emailDoesExist to false - same stuff as earlier
   let emailIsExisting = false; 
   let contact; //

   for (var i = 0, x = contactList.length; i < x; i++) {
      let existEmail = (contactList[i].email);

      if (emailUID === existEmail) {
         emailIsExisting = true;
         contact = i;
      }
   };

   // IF statement: emailIsExisting = true, then success and get contact info
   // If/else statement: if emailIsExisting = false, then throw error
  if (emailIsExisting === true) {
    result = `
Name: ${contactList[contact].name}
E-mail: ${contactList[contact].email}`;
    //Since the phone number and company strings might be empty, we can pass those through if statements to only add them if they are available.

    if (contactList[contact].phoneNumber !== '' || undefined ) {
      result += `
Phone number: ${contactList[contact].phoneNumber}`;
    };

    if (contactList[contact].company !== '' || undefined) {
      result += `
Company: ${contactList[contact].company}`;
    };
  } else {
    result = "Contact not found";
  };

  console.log(result);
};

    /* NOT SURE WHY _ but if not 'pulling Name:{}, Email: {}, Phone Number {}, 
   Company: { }, to the beginning of the line, the format goes bonkers. */

// Testing function
console.log('----- testing the functions ----')
console.log('') // used for clearer formatting in console.log

getContactInfo('dale.cooper@mail.com') // has all props
getContactInfo('dr.jacoby@mail.com') // has only name and email

console.log('') // used for clearer formatting in console.log
getContactInfo('not.existing@mail.com') //throws error


// ----------- TASK 6 -----------
console.log('') // used for clearer formatting in console.log
console.log('----------- TASK 6 -----------')
console.log('') // used for clearer formatting in console.log

/* 
listAllContacts() FUNCTION
List all contacts available in the contact list
Output example:
“Anna Valsdóttir <ana@tskoli.is>, Jón Jónsson <jon@tskoli.is>, Hildur Eriksdóttir <hildur@tskoli.is>”
*/

function listAllContacts() {
   let listContacts = '';

   // for..in - to check through all the contact properties
   for (var i = 0, x = contactList.length; i < x; i++) {
      for (let props in contactList[i]) {
         // use switch to extract name and email to the listContacts
         switch (props) {
            case 'name':
               listContacts += contactList[i].name
               break;
            case 'email':
               listContacts += ` <${contactList[i].email}>, `
         }
      }
   }
   console.log(listContacts)
};

console.log('----- testing the functions ----')
console.log('') // used for clearer formatting in console.log
// Testing function
listAllContacts();


// ----------- TASK 7 -----------
console.log('') // used for clearer formatting in console.log
console.log('----------- TASK 7 -----------')
console.log('') // used for clearer formatting in console.log

/* 
clearContacts FUNCTION
Remove all contacts from the list /)
*/

const clearContacts = () => {
// ask user if they want to proceed in deleting all contacts
let proceed = confirm('Do you want to proceed to delete all contacts?')
 if (proceed === true) {
    
    for (let i = 0, l = contactList.length; i < l; i++) {
      delete contactList[i];
    };
    console.log("The contact list was cleared.");
 } else {
    console.log("Operation canceled.");
 }
};

console.log('----- testing the functions ----')
console.log('') // used for clearer formatting in console.log

//If opening the index.html and viewing in browser, the contact list will be deleted from the start. Click cancel to view the outputs before deleting all the contactList.


// NOTE : clearContacts does not work in VSCode console.log 

clearContacts();


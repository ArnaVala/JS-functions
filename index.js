// JavaScript Introduction
// FUNCTIONS

// ----------- TASK 1 - CREATE A CONTACT LIST  -----------
console.log('') // used for clearer formatting in console.log
console.log('----------- TASK 1 - CREATE A CONTACT LIST -----------')
console.log('') // used for clearer formatting in console.log

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



// ----------- TASK 2 - ADD CONTACT -----------
console.log('') // used for clearer formatting in console.log
console.log('----------- TASK 2 - ADD CONTACT -----------')

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
      result = `${name} was added`;
   }
   console.log(result); 
};

// Testing the function
console.log('----- add contact test ----')
console.log('') // used for clearer formatting in console.log
// Call function
addContact('Jacoby', 'dr.jacoby@mail.com', 4444444, 'this company') // Email duplicate found
addContact('Arna Vala','', 5555555, 'another company') // Missing fields
addContact('Arna Vala', 'arnavala@mail.com', '', '') // Success - Arna Vala added



// ----------- TASK 3 -REMOVE CONTACT -----------
console.log('') // used for clearer formatting in console.log
console.log('----------- TASK 3 -REMOVE CONTACT -----------')

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
console.log('----- remove contact test ----')
console.log('') // used for clearer formatting in console.log
// Call function
removeContact('this@mail.com') // throws error result
removeContact('arnavala@mail.com') //removes contact



// ----------- TASK 4 - EDIT CONTACT -----------
console.log('') // used for clearer formatting in console.log
console.log('----------- TASK 4 - EDIT CONTACT -----------')

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
console.log('----- edit contact test ----')
console.log('') //used for clearer formatting in console.log

// Call function - editContact(emailUID, newProps, newValue)
editContact("log.lady@mail.com", "company", "Twin Peaks Logdge ",); // this will change company value
editContact("log.lady@mail.com", "phoneNumber", 5333333) //this will add a age(newProps):50(newValue)
editContact("not.existing@mail.com", "name", "Won't compute") //this will pass error - contact not found



// ----------- TASK 5 - Get Contact Info Function -----------
console.log('') // used for clearer formatting in console.log
console.log('----------- TASK 5 - GET CONTACT INFO -----------')

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

    /*Since the phone number and company strings might be empty, 
    we can pass those through if statements to only add them if they are available.*/
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

console.log('----- getting contact info test ----')
console.log('') //used for clearer formatting in console.log

// Calling function
getContactInfo('dale.cooper@mail.com') // has all props
getContactInfo('dr.jacoby@mail.com') // has only name and email

console.log('') //used for clearer formatting in console.log
getContactInfo('not.existing@mail.com') //throws error



// ----------- TASK 6 LIST ALL CONTACTS -----------
console.log('') // used for clearer formatting in console.log
console.log('----------- TASK 6 -LIST ALL CONTACTS -----------')

// Using forEach array function
function listAllContacts() {
  contactList.forEach(contact => console.log(`${contact.name} <${contact.email}>, `))
};

// testing function
console.log('----- list all contacts test ----')
console.log('') //used for clearer formatting in console.log
// Calling function
listAllContacts(); 



// ----------- TASK 7 CLEAR ALL CONTACTS -----------

console.log('') // used for clearer formatting in console.log
console.log('----------- TASK 7 - CLEAR ALL CONTACTS  -----------')

const clearContacts = () => {
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


console.log('----- clear all contacts test ----')
console.log('') //used for clearer formatting in console.log
//call function
clearContacts(); 

/* If opening the index.html and viewing in browser, the contact list will be deleted from the start. Click cancel to view the outputs before deleting all the contactList.
NOTE : clearContacts does not work in VSCode console.log */


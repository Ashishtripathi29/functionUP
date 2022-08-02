const person = {
    name: "Akash",
    mobile: 999999999,
    address: {
        pincode: 1234,
        city: "gurgaon",
        state: "haryana",
        emails: ["asd@gmail.com", "abc@yahoo.com", "rty@hotmail.com"],
    },
};

// const newPerson=JSON.parse(JSON.stringify(person))
// newPerson.name="Rahul"
// newPerson.address.pincode=4567
// newPerson.address.emails[0]='asd#outlool.com'
// console.log(person)
// console.log(newPerson)


Object.freeze(person)
// console.log({...person})
let newPerson={...person,address:{...person.address}}
newPerson.name="Rahul"
newPerson.address.pincode=4567
newPerson.address.emails[0]="asd@outgmail.com"
console.log(newPerson)
console.log(person)

/**
 * 
 * 
 * make a copy of the person object and in that copy 
 * change its name to "Rahul",  
 * pincode to 4567 
 * and first email in the list to 'asd@outlook.com'
 * 
 * make sure that original person is not affected by these operation
 * 
 *  your new person should look like this 
 * const newPerson = {
    name:"Rahul",
    mobile:999999999,
    address:{
        pincode:4567,
        city:"gurgaon",
        state:"haryana",
        emails:['asd@outlook.com', 'abc@yahoo.com', 'rty@hotmail.com']
    }
}
  
 *  CAUTION: DO NOT USE JSON.parse(JSON.stringify())
    Hint: use destructuring at every level, i.e. copy each level shallowly
 */


 

/**
 * explain the difference between primitive and non primitive data types when we use the following operator
 * 1. assignment operator
 * 2. equality operator
 *
 *
 */
const a=5
const b=a
console.log(a===b)
//b=7
console.log(a)
console.log(b)

const arr=[1,2,3,4]
const arr2=arr
console.log(arr===arr2)


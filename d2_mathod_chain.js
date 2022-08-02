const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        location: "rampur",
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        location: "gurgaon",
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        location: "gurgaon",
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        location: "alwar",
    },
    {
        firstName: "Jay",
        location: "gurgaon"
    },
];

// return the full names of the facebook users who belong to guragon
// HINT: use higher order functions and chain them

const newPerson=facebookProfiles.filter(Element=>Element.location==="gurgaon");
console.log(newPerson)



// ======================================================================== //

// function filterOddNumbers(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const evenNumbers = [1, 2, 3, 4, 5].push(6).filter(filterOddNumbers);
// console.log(evenNumbers)


/**
 * Q1. without actually running this code, you need to answer whether this code will run or not along with the reason
 
//  * it does not run becouse of push() return the index number and it is not a arrays and we have to pass  the array as a parmeter for filter and pass the function 


Q2. now run the above code and see the result/error. 

// after the running the code i have seen the error is  [1,2,3,4,5].push(...).filter is not a function 


Analyze the difference bw your answer before and after running the code 
// asnwer of both is correct beforing running and after running

Q2. correct the code so that method chain starts working
 * 
 */

function filterOddNumbers(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const evenNumbers = [1, 2, 3, 4, 5]
evenNumbers.push(6)
const myEvenNum=evenNumbers.filter(filterOddNumbers);
console.log(myEvenNum)

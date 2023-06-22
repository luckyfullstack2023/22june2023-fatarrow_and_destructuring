
let students = {
    fname: "Lucky",
    lname: "khamari",
    mobNo: "8249180716",
    address:"Nayagarh",
    age:23
}

// I want to extract some information from the student object

let {fname:fn,lname:ln,mobNo:mb,address:ad,age:ag} = students;
console.log(`My name is ${fn + " " + ln} and I have ${ag} year old . Now i leave in my village ${ad} and my mobile number is ${mb}`);
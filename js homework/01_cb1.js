function sayName(greet, cb){
    console.log(greet);
    
    name("yashank", "lakhena"); 
}

function name(fname, lname){
    console.log(fname + lname);
    
}

sayName("welcome", name)

//************************ 2 ***************************** */

function calculate(a, b, cb){
    let ans = operation(a,b);
    return ans;
}

function operation(a, b){
    return a*b;
}

console.log(calculate(5, 10, operation));

//************************* 3 ******************************** */

function delay(cb){
    setTimeout(() => {
        cb();
    },5000)
}

function message(){
    console.log("this is example 3");
}

delay(message);

//*************************** 4 ***************************************** */

function repeater(repeat, cb){
    for(let i=1; i<=repeat; i++){
        //console.log(cb(), i);    // puchna he
        cb();
    }
}

function repeatmsg(){
    console.log("message");
}

repeater(5, repeatmsg);

//**************************** 5 ***************************** */

function compare(a,b, cb){
    return cb(a,b);
}

function greater(a,b){
    if(a>=b){
        return a;
    }
    else{
        return b;
    }
}

console.log(compare(4, 5, greater));

//************************** 6 *************************************** */

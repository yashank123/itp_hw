function repeater(repeat, cb){
    for(let i=1; i<=repeat; i++){
        console.log(cb(), i);    // puchna he
        //cb();
    }
}

function repeatmsg(){
    console.log("message");
}

repeater(5, repeatmsg);
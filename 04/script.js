console.log("conditional statments");

// Conditional Statements 
// if else

    // const age = 20;

    // if(age>=18) {
    //     console.log("yes");
    // } else {
    //     console.log("no");
    // }


    // in this we can multiple condition like 
    // else if 

    // const age = 18;
    // if(age>=70) {
    //     console.log("yes");
    // } else if (age>=18) {
    //     console.log("yess u  not new to this");

    
    // } else {
    //     console.log("no");
    // }




    // Switch Case Statements 

    // so when to use switch case is when we call the customer person they say type 1 for to get info on data 
    // and typr for network so in such cases we use switch cases 

    // in switch case if condition matches it run the next case below it to stop that we use the break 
    // so break does what if in that case run that case only and did not move aghe okk

    // so default whn in switch case whne does not match anything thn 

    // const option = 4;

    // switch(option) {
    //     case 1: {
    //         console.log("hindi");
    //         break;
    //     }
    //     case 2 : {
    //         console.log("english");
    //     }
    //     default : {
    //         console.log("no valid option")
    //     }

    // }

        const a = 4;
        const operation = '+'
        const b = 4;



    switch(operation) {
        case '+': {
            console.log(a+b);
            break;
        }
        case '-': {
            console.log(b-a);
        }
        case '*' : {
            console.log(b*a);
        }
        default : {
            console.log("no valid option")
        }

    }


    let x = "abc";

switch(x) {
  case "abcd":
    console.log("string 5");
    break;
  case 5:
    console.log("number 5");
    break;
      case 'abc':
    console.log("number 5");
    break;
  default:
    console.log("no match");
}
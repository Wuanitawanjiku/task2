//nested (closures)
//anonymous
function greeting() {
    var frenchGreeting = "bonjour Duo! ";
    var say = function() { console.log(frenchGreeting); }   //function expression(variable value is a function)
    // Local variable that ends up within the closure 
    
    return say;
  }  //immmediately invoked function
  var greetingClosure = greeting(); 
  greetingClosure(); // ‘Hello, world!’   //anonymous function


 
  //function constructor function  to create multiple objects 
function Date(){
    this.name= "Wuanita",
    this.date = 1,
    this.month="April",
    this.year=2020
}
let date = new Date();
console.log(date.name);
console.log(date.date);

let week =new Date();
console.log(date.month);
console.log(date.year);
//Pick a day of the week
//conditionals (switch)
function days(dayOfWeek){
switch(dayOfWeek){
    case 0:
        nameOfDay = "Sunday";
        console.log(nameOfDay);
        quote = "Time to take a small break!";
        console.log(quote);
        break;
        case 1:
            nameOfDay = "Monday";
            console.log(nameOfDay);
            quote = "Monday blues!";
            console.log(quote);
            break;
            case 2:
                nameOfDay = "Tuesday";
                console.log(nameOfDay);
                quote = "Research,design day!";
                console.log(quote);
                break;
                case 3:
                    nameOfDay = "Wednesday";
                    console.log(nameOfDay);
                    quote = "End month!";
                    console.log(quote);
                    break;
                    case 4:
                        nameOfDay = "Thursday";
                        console.log(nameOfDay)
                        quote = "April Fool's Day!";
                        console.log(quote);
                        break;
                        case 5:
                            nameOfDay = "Friday";
                            console.log(nameOfDay);
                            quote = "Weekend is here!";
                            console.log(quote);
                            break;
                            case 6:
                                nameOfDay = "Saturday";
                                console.log(nameOfDay);
                                quote = "Finally some alone time!";
                                console.log(quote);
                                break;
                                default:
                                    console.log("Rest");
                                    break;
}
}
console.log(days(7));
//display day of the week
//display quote


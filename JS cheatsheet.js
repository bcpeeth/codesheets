single line comment //
multi line comment /*...*/



DATA TYPES {

    1.  Number: //Any number, including numbers with decimals: 4, 8, 1516, 23.42.

    2.  String: //Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ". Though we prefer single quotes. Some people like to think of string as a fancy word for text.

    3.  Boolean: //This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a "yes" or "no" question.

    4.  Null: //This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).

    5.  Undefined: //This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null.

    6.  Symbol: //A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.

    7.  Object: //Collections of related data.

}



OPERATORS {

    1.  Add: +
    2.  Subtract: -
    3.  Multiply: *
    4.  Divide: /
    5.  Remainder: %
    //The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can: 11 % 3 equals 2 because 3 fits into 11 three times, leaving 2 as the remainder.

    //The . is another operator! We call it the dot operator.

}



CONCATENATION {

    //Operators aren't just for numbers! When a + operator is used on two strings, it appends the right string to the left string:

    console.log('hi' + 'ya'); // Prints 'hiya'
    console.log('wo' + 'ah'); // Prints 'woah'
    console.log('I love to ' + 'code.')
    // Prints 'I love to code.' - notice the space at the end of 'I love to '

    //This process of appending one string to another is called concatenation.
}



PROPERTIES {

    //When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. Every string instance has a property called length that stores the number of characters in that string.

    //You can retrieve property information by appending the string with a period and the property name.

    console.log('Hello'.length); // Prints 5
}



METHODS {

    //Methods are actions we can perform. JavaScript provides a number of string methods.

    //We call, or use, these methods by appending an instance with a period (the dot operator), the name of the method, and opening and closing parentheses: ie. 'example string'.methodName().

    examples methods:

    .toUpperCase(): //The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

    .startsWith(): //The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

    .getFullYear(): //The getFullYear() method returns the year of the specified date according to local time.

    .trim(): //The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

    .trimEnd(): //The trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method.

    .trimStart(): //The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.

    methods index: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Methods_Index

}



BUILT IN OBJECTS {

    //In addition to console, there are other objects built into JavaScript. 

    //For example, if you wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built-in Math object.

    //The great thing about objects is that they have methods! Let's call the .random() method from the built-in Math object:

    console.log(Math.random()); // Prints a random number between 0 and 1

    //To generate a random number between 0 and 50, we could multiply this result by 50, like so:

    Math.random() * 50;

    //To ensure the answer is a whole number, we can take advantage of another useful Math method called Math.floor().
    //Math.floor() takes a decimal number, and rounds down to the nearest whole number. You can use Math.floor() to round down a random number like this:

    Math.floor(Math.random() * 50);

    ///In this case:
    1.  //Math.random generates a random number between 0 and 1.
    2.  //We then multiply that number by 50, so now we have a number between 0 and 50.
    3.  //Then, Math.floor() rounds the number down to the nearest whole number.

    //Checks if number is an integer
    console.log(Number.isInteger(2017))

    //Returns the smallest integer greater than or equal to a number.
    console.log(Math.ceil(45))

    //Check JavaScript documentation for more objects 

}



VARIABLES {

    //In programming, a variable is a container for a value.
    var   //Prior ES6
    let   //After ES6
    const //After ES6

    ///Information stored in variables, such as a username, account number, or even personalized greeting can then be found in memory.

    //Variables also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves.

    //In short, variables label and store data in memory. There are only a few things you can do with variables:
    1.  //Create a variable with a descriptive name.
    2.  //Store or update information stored in a variable.
    3.  //Reference or “get” information stored in a variable.

    ///It is important to distinguish that variables are not values; they contain values and represent them with a name.

    Example:

    var myName = 'Arya';
    console.log(myName);
    // Output: Arya

    ///Let's consider the example above:

    var //short for variable, is a JavaScript keyword that creates, or declares, a new variable.

    myName //is the variable's name. Capitalizing in this way is a standard convention in JavaScript called camel casing.

    = //is the assignment operator. It assigns the value ('Arya') to the variable (myName).

    'Arya' //is the value assigned (=) to the variable myName. You can also say that the myName variable is initialized with a value of 'Arya'.

    //After the variable is declared, the string value 'Arya' is printed to the console by referencing the variable name: 
    console.log(myName)

    //There are a few general rules for naming variables:
    1.  //Variable names cannot start with numbers.
    2.  //Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to create two variables that have the same name using different cases.
    3.  //Variable names cannot be the same as keywords. For a comprehensive list of keywords check out MDN's keyword documentation.

    let //keyword signals that the variable can be reassigned a different value. Take a look at the example:
    let meal = 'Enchiladas';
    console.log(meal); // Output: Enchiladas
    meal = 'Burrito';
    console.log(meal); // Output: Burrito


    ///We can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of undefined:
    let price;
    console.log(price); // Output: undefined
    price = 350;
    console.log(price); // Output: 350


    const //variable cannot be reassigned because it is constant. If you try to reassign a const variable, you'll get a TypeError.

    //Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you'll get a SyntaxError.

    //If you're trying to decide between which keyword to use, let or const, think about whether you'll need to reassign the variable later on. If you do need to reassign the variable use let, otherwise, use const.

}



MATHEMATICAL ASSIGNMENT OPERATORS {

    Example:

    let w = 4;
    w = w + 1;
    console.log(w); // Output: 5

    //In the example above, we created the variable w with the number 4 assigned to it. The following line, w = w + 1, increases the value of w from 4 to 5.

    //Another way we could have reassigned w after performing some mathematical operation on it is to use built-in mathematical assignment operators. 

    Mathematical assignment operators
    1. +=
    let w = 4;
    w += 1;
    console.log(w); // Output: 5

    2. -=
    let x = 20;
    x -= 5; // Can be written as x = x - 5
    console.log(x); // Output: 15

    3. *=
    let y = 50;
    y *= 2; // Can be written as y = y * 2
    console.log(y); // Output: 100

    4. /=
    let z = 8;
    z /= 2; // Can be written as z = z / 2
    console.log(z); // Output: 4

    The Increment and Decrement Operator
    //Other mathematical assignment operators include the increment operator (++) and decrement operator (--).
    //The increment operator will increase the value of the variable by 1. The decrement operator will decrease the value of the variable by 1. For example:
    let a = 10;
    a++;
    console.log(a); // Output: 11

}



STRING CONCATENATION WITH VARIABLES {
    //The + operator can be used to combine two string values even if those values are being stored in variables:

    let myPet = 'armadillo';
    console.log('I own a pet ' + myPet + '.'); 
    // Output: 'I own a pet armadillo.'

}



STRING INTERPOLATION {

    //In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. Check out the following example where a template literal is used to log strings together:

    const myPet = 'armadillo';
    console.log(`I own a pet ${myPet}.`);
    // Output: I own a pet armadillo.

    //Notice that:
    1. //a template literal is wrapped by backticks ` (this key is usually located on the top of your keyboard, left of the 1 key).
    2. //Inside the template literal, you'll see a placeholder, ${myPet}. The value of myPet is inserted into the template literal.
    3. //When we interpolate `I own a pet ${myPet}.`, the output we print is the string: 'I own a pet armadillo.'
    
    //One of the biggest benefits to using template literals is the readability of the code. Using template literals, you can more easily tell what the new string will be. You also don't have to worry about escaping double quotes or single quotes.

    Example:

    let myName = 'Pedro';
    let myCity = 'Santarem';

    console.log(`My name is ${myName}. My favorite city is ${myCity}.`)

    // Output: My name is Pedro. My favorite cir=ty is Santarem.

}


 
TYPEOF OPERATOR {

    //If you need to check the data type of a variable's value, you can use the typeof operator.
    //The typeof operator checks the value to its right and returns, or passes back, a string of the data type.

    const unknown1 = 'foo';
    console.log(typeof unknown1); // Output: string

    const unknown2 = 10;
    console.log(typeof unknown2); // Output: number

    const unknown3 = true; 
    console.log(typeof unknown3); // Output: boolean

}



CONDITIONAL STATEMENTS {
    //A conditional statement checks specific condition(s) and performs a task based on the condition(s).

    The 'if' keyword
    //The if statement is composed of:
    1. //The if keyword followed by a set of parentheses () which is followed by a code block, or block statement, indicated by a set of curly braces {}.
    2. //Inside the parentheses (), a condition is provided that evaluates to true or false.
    3. //If the condition evaluates to true, the code inside the curly braces {} runs, or executes.
    4. //If the condition evaluates to false, the block won't execute.

    Example:

    let sale = true
    if (sale) {
    console.log('Time to buy!')
    }
    // Output: Time to buy!


    let sale = true
    sale = false;
    if (sale) {
    console.log('Time to buy!')
    }
    // Output: empty



    If...Else Statements
    //In many cases, we'll have code we want to run if our condition evaluates to false. If we wanted to add some default behavior to the if statement, we can add an else statement to run a block of code when the condition evaluates to false. Take a look at the inclusion of an else statement:

    if (false) {
        console.log('The code in this block will not run.');
      } else {
        console.log('But the code in this block will!');
      }
      // Prints "But the code in this block will!"

}



COMPARISON OPERATORS {
    //When writing conditional statements, sometimes we need to use different types of operators to compare values. These operators are called comparison operators.

    //Here is a list of some handy comparison operators and their syntax:
    //Less than: <
    //Greater than: >
    //Less than or equal to: <=
    //Greater than or equal to: >=
    //Is equal to: ===
    //Is NOT equal to: !==

    //It can be helpful to think of comparison statements as questions. When the answer is "yes", the statement evaluates to true, and when the answer is "no", the statement evaluates to false. The code above would be asking: is 10 less than 12? Yes! So 10 < 12 evaluates to true.

    //We can also use comparison operators on different data types like strings:

    'apples' === 'oranges' // false

    //In the example above, we're using the identity operator (===) to check if the string 'apples' is the same as the string 'oranges'. Since the two strings are not the same, the comparison statement evaluates to false.

    //All comparison statements evaluate to either true or false and are made up of:

    //1. Two values that will be compared.
    //2. An operator that separates the values and compares them accordingly (>, <, <=,>=,===).

    Example:

    let hungerLevel = 7;

    if(hungerLevel > 7) {
    console.log('Time to eat!')
    }else {
    console.log('We can eat later!')
    };       
    // Prints "We can eat later!"

}



LOGICAL OPERATORS {
    //Working with conditionals means that we will be using booleans, true or false values. In JavaScript, there are operators that work with boolean values known as logical operators. We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators:
    1. //the and operator (&&)
    2. //the or operator (||)
    3. //the not operator, otherwise known as the bang operator (!)


    //1. When we use the && operator, we are checking that two things are true:
    if (stopLight === 'green' && pedestrians === 0) {
      console.log('Go!');
    } else {
      console.log('Stop');
    }

    //When using the && operator, both conditions must evaluate to true for the entire condition to evaluate to true and execute. Otherwise, if either condition is false, the && condition will evaluate to false and the else block will execute.
    

    //2. If we only care about either condition being true, we can use the || operator:
    if (day === 'Saturday' || day === 'Sunday') {
      console.log('Enjoy the weekend!');
    } else {
      console.log('Do some work.');
    }

    //When using the || operator, only one of the conditions must evaluate to true for the overall statement to evaluate to true. In the code example above, if either day === 'Saturday' or day === 'Sunday' evaluates to true the if's condition will evaluate to true and its code block will execute. If the first condition in an || statement evaluates to true, the second condition won't even be checked. Only if day === 'Saturday' evaluates to false will day === 'Sunday' be evaluated. The code in the else statement above will execute only if both comparisons evaluate to false.
    
   
    //3. The ! not operator reverses, or negates, the value of a boolean:
    let excited = true;
    console.log(!excited); // Prints false
    
    let sleepy = false;
    console.log(!sleepy); // Prints true

    //Essentially, the ! operator will either take a true value and pass back false, or it will take a false value and pass back true.
    
    //Logical operators are often used in conditional statements to add another layer of logic to our code.

    Example:

    let mood = 'sleepy';
    let tirednessLevel = 6;

    if (mood === 'sleepy' && tirednessLevel > 8) {
    console.log('time to sleep');
    } else {
    console.log('not bed time yet');
    } // Prints 'not bed time yet

}
    
    
    
TRUTHY AND FALSY {
    //Sometimes, you'll want to check if a variable exists and you won't necessarily want it to equal a specific value— you'll only check to see if the variable has been assigned a value.

    Example:

    let myVariable = 'I Exist!';
    if (myVariable) {
    console.log(myVariable)
    } else {
    console.log('The variable does not exist.')
    }

    //The code block in the if statement will run because myVariable has a truthy value; even though the value of myVariable is not explicitly the value true, when used in a boolean or conditional context, it evaluates to true because it has been assigned a non-falsy value.

    //So which values are falsy— or evaluate to false when checked as a condition? The list of falsy values includes:
    1. //0
    2. //Empty strings like "" or ''
    3. //null which represent when there is no value at all
    4. //undefined which represent when a declared variable lacks a value
    5. //NaN, or Not a Number
    
    
    //Here’s an example with numbers:
    let numberOfApples = 0;

    if (numberOfApples){
    console.log('Let us eat apples!');
    } else {
    console.log('No apples left!');
    }
    // Prints 'No apples left!'
    
    ///The condition evaluates to false because the value of the numberOfApples is 0. Since 0 is a falsy value, the code block in the else statement will run.

    Examples:

    let wordCount = 1;

    if (wordCount) {
    console.log("Great! You've started your work!");
    } else {
    console.log('Better get to work!');
    }
    // Prints "Great! You've started your work!"


    let favoritePhrase = '';

    if (favoritePhrase) {
    console.log("This string doesn't seem to be empty.");
    } else {
    console.log('This string is definitely empty.');
    }
    // Prints 'This string is definitely empty.'


    Truthy and Falsy Assignment
    //Say you have a website and want to take a user's username to make a personalized greeting. Sometimes, the user does not have an account, making the username variable falsy. The code below checks if username is defined and assigns a default string if it is not:
    let defaultName;
    if (username) {
    defaultName = username;
    } else {
    defaultName = 'Stranger';
    }

    //If you combine your knowledge of logical operators you can use a short-hand for the code above. In a boolean condition, JavaScript assigns the truthy value to a variable if you use the || operator in your assignment:

    let defaultName = username || 'Stranger';

    //Because || or statements check the left-hand condition first, the variable defaultName will be assigned the actual value of username if is truthy, and it will be assigned the value of 'Stranger' if username is falsy. This concept is also referred to as short-circuit evaluation.


    Examples:

    1.  let tool = '';

        // Use short circuit evaluation to assign  writingUtensil variable below:
        let writingUtensil = tool || 'pen'

        console.log(`The ${writingUtensil} is mightier than the sword.`);
        // Prints 'The pen is mightier than the sword.'

    2.  let tool = 'marker';

        // Use short circuit evaluation to assign  writingUtensil variable below:
        let writingUtensil = tool || 'pen'

        console.log(`The ${writingUtensil} is mightier than the sword.`);
        // Prints 'The marker is mightier than the sword.'    

}



TERNARY OPERATOR {
    //In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.

    //Take a look at the if...else statement example:

    let isNightTime = true;

    if (isNightTime) {
    console.log('Turn on the lights!');
    } else {
    console.log('Turn off the lights!');
    }

    //We can use a ternary operator to perform the same functionality:

    isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
    
    //In the example above:
    1. //The condition, isNightTime, is provided before the ?.
    2. //Two expressions follow the ? and are separated by a colon :.
    3. //If the condition evaluates to true, the first expression executes.
    4. //If the condition evaluates to false, the second expression executes.
    
    //Like if...else statements, ternary operators can be used for conditions which evaluate to true or false.

    Examples:

    1. let isLocked = false;
    isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.')
    // Prints 'You will not needd a key to open the door.'


    2. let isCorrect = true
    isCorrect ? console.log('Correct!') : console.log('Incorrect!')
    // Prints 'Correct!'


    3. let favoritePhrase = 'Love That!';
    favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!")
    //Prints 'I love that!'

}



THE ELSE IF STATEMENT {
    //The else if statement allows for more than two possible outcomes. You can add as many else if statements as you’d like, to make more complex conditionals!

    //The else if statement always comes after the if statement and before the else statement. The else if statement also takes a condition.

    Example:

    let stopLight = 'yellow';

    if (stopLight === 'red') {
    console.log('Stop!');
    } else if (stopLight === 'yellow') {
    console.log('Slow down.');
    } else if (stopLight === 'green') {
    console.log('Go!');
    } else {
    console.log('Caution, unknown!');
    }
    //Prints 'Slow down'

    //The else if statements allow you to have multiple possible outcomes. if/else if/else statements are read from top to bottom, so the first condition that evaluates to true from the top to bottom is the block that gets executed.

    //In the example above, since stopLight === 'red' evaluates to false and stopLight === 'yellow' evaluates to true, the code inside the first else if statement is executed. The rest of the conditions are not evaluated. If none of the conditions evaluated to true, then the code in the else statement would have executed.

}



THE SWITCH KEYWORD {
    //A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:

    let groceryItem = 'papaya';

    switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime':
        console.log('Limes are $1.49');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    default:
        console.log('Invalid item');
        break;
    }
    // Prints 'Papayas are $1.29'
    
    
    // The switch keyword initiates the statement and is followed by ( ... ), which contains the value that each case will compare. In the example, the value or expression of the switch statement is groceryItem.

    // Inside the block, { ... }, there are multiple cases. The case keyword checks if the expression matches the specified value that comes after it. The value following the first case is 'tomato'. If the value of groceryItem equalled 'tomato', that case's console.log() would run.
    
    //The value of groceryItem is 'papaya', so the third case runs— Papayas are $1.29 is logged to the console.
    
    //The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without the break keyword at the end of each case, the program would execute the code for all matching cases and the default code as well. This behavior is different from if/else conditional statements which execute only one block of code.

    //At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run.    

}



FUNCTIONS {
    //In programming, we often use code to perform a specific task multiple times. Instead of rewriting the same code, we can group a block of code together and associate it with one task, then we can reuse that block of code whenever we need to perform the task again. We achieve this by creating a function. 
    //A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

    
    FUNCTION DECLARATIONS
        //A function declaration consists of:
        1. //The function keyword.
        2. //The name of the function, or its identifier, followed by parentheses.
        3. //A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.

        //Be aware of the hoisting feature in JavaScript which allows access to function declarations before they're defined.

        Example:

        console.log(greetWorld()); // Output: Hello, World!

        function greetWorld() {
        console.log('Hello, World!');
        }


    CALLING A FUNCTION    
        //A function declaration does not ask the code inside the function body to run, it just declares the existence of the function. The code inside a function body runs, or executes, only when the function is called. 
        //To call a function in your code, you type the function name followed by parentheses.

        Example:

        //notice event order

        1   function getGreeting() {
        3       console.log('Hello, World!');
            }

        2   getGreeting();
            //getGreeting();
            //getGreeting();

        4   //Code after function call

        Note: 
        //Functions can be called as many times as you need them. On step 2, we can add more calls to the function getGreeting()


    PARAMETERS AND ARGUMENTS
        //So far, the functions we've created execute a task without an input. However, some functions can take inputs and use the inputs to perform a task. 
        //When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called.

        Example:

        function calculateArea(rectWidth, rectHeight) {
            console.log(rectWidth * rectHeight);
        }
        //calculateArea(), computes the area of a rectangle, based on two inputs, width and height. The parameters are specified between the parenthesis as width and height, and inside the function body, they act just like regular variables. width and height act as placeholders for values that will be multiplied together.

        //When calling a function that has parameters, we specify the values in the parentheses that follow the function name. The values that are passed to the function when it is called are called arguments. Arguments can be passed to the function as values or variables.
        calculateArea(10, 6)

        //The order in which arguments are passed and assigned follows the order that the parameters are declared.
        const rectWidth = 10;
        const rectHeight = 6;
        calculateArea(rectWidth, rectHeight);

        //The variables rectWidth and rectHeight are initialized with the values for the height and width of a rectangle before being used in the function call.

        Example:

        function sayThanks(name) {
            console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
        }
        sayThanks('Cole')
        //Prints 'Thank you for your purchase Cole! We appreciate your business.'


    DEFAULT PARAMETERS
        //Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.

        Example:

        1   function greeting(name = 'stranger') {
                console.log(`Hello, ${name}!`)
            }
            
            greeting('Nick') // Output: Hello, Nick!
            greeting() // Output: Hello, stranger!


        2   function makeShoppingList(item1, item2, item3) {
                console.log(`Remember to buy ${item1}`);
                console.log(`Remember to buy ${item2}`);
                console.log(`Remember to buy ${item3}`);
            }
            //Imagine that you always purchase milk, bread, and eggs every time you go shopping for groceries. To make creating a grocery list easier, we can assign default values to the parameters in makeShoppingList().

            function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
                console.log(`Remember to buy ${item1}`);
                console.log(`Remember to buy ${item2}`);
                console.log(`Remember to buy ${item3}`);
            }

            makeShoppingList();
            //Prints:   Remember to buy milk
            //          Remember to buy bread
            //          Remember to buy eggs

    
    RETURN
        //When a function is called, the computer will run through the function's code and evaluate the result of calling the function. By default that resulting value is undefined.

        Examples:

        1.  function rectangleArea(width, height) {
                let area = width * height 
            }
            console.log(rectangleArea(5, 7)) // Prints undefined
            
            //In the example above, the function worked fine, and the computer did calculate the area as 35, but we didn't capture it. We need to capture the result of that function by using the keyword return.
            function rectangleArea(width, height) {
                let area = width * height 
            }
            console.log(rectangleArea(5, 7));
            return area;
            //Prints 35 


        2.  function rectangleArea(width, height) {
                if (width < 0 || height < 0) {
                  return 'You need positive integers to calculate area!';
                }
                return width * height;
            }
            
            //If an argument for width or height is less than 0, then rectangleArea() will return 'You need positive integers to calculate area!'. The second return statement width * height will not run.


    HELPER FUNCTIONS
        //We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. 

        Example:

        //If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could write two functions like:

        function multiplyByNineFifths(number) {
        return number * (9/5);
        };

        function getFahrenheit(celsius) {
        return multiplyByNineFifths(celsius) + 32;
        };

        getFahrenheit(15); // Returns 59

        //In the example above:
        1. //getFahrenheit() is called and 15 is passed as an argument.
        2. //The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.
        3. //multiplyByNineFifths() takes the argument of 15 for the number parameter.
        4. //The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.
        5. //27 is returned back to the function call in getFahrenheit().
        6. //getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.
        7. //Finally, 59 is returned back to the function call getFahrenheit(15).


    FUNCTION EXPRESSIONS   
        //Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

        Example:

        const calculateArea = function(widht, height) {
            const area = width * height;
            return area;
        }

        //To declare a function expression:

        1. //Declare a variable to make the variable’s name be the name, or identifier, of your function. Since the release of ES6, it is common practice to use const as the keyword to declare the variable.

        2. //Assign as that variable's value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body.

        
        //To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.

        variableName(argument1, argument2)

        //Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.

        Example:

        const plantNeedsWater = function(day) {
            if (day === 'Wednesday') {
              return true;
            } else {
              return false;
            }
          }
          
        plantNeedsWater('Tuesday');
        
        console.log(plantNeedsWater('Tuesday'))
        //Prints false


    ARROW FUNCTIONS
        //ES6 introduced arrow function syntax, a shorter way to write functions by using the special "fat arrow" () => notation.

        //Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { }.

        Example:

        //without arrow function
        const rectangleArea = function(width, height) {
            let area = width * height;
            return area
        }

        //with arrow function
        const rectangleArea = (width, height) => {
            let area = width * height;
            return area
        }


    CONCISE BODY ARROW FUNCTIONS
        //JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body. We'll explore a few of these techniques below:

        1. //Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.

            zero parameters
            const functionName = () => {};

            one parameter
            const functionName = paramOne => {};

            two or more parameters
            const functionName = (paramOne, paramTwo) => {};

        2. //A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

            single-line block
            const sumNumbers = number => number + number;

            multi-line block
            const sumNumbers = number => {
                const sum = number + number;
                return sum;
            }

            

        Examples:

        1.  const squareNum = (num) => {
                return num * num;
            };

            //Can be refactored to

            const squareNum = num => num * num;

            //Notice the following changes:

            1.  //The parentheses around num have been removed, since it has a single parameter.
            2.  //The curly braces { } have been removed since the function consists of a single-line block.
            3.  //The return keyword has been removed since the function consists of a single-line block.

        
        2.  const plantNeedsWater = (day) => {
            return day === 'Wednesday' ? true : false;
            };
        
            //Can be refactored to

            const plantNeedsWater = day => day === 'Wednesday' ? true : false;
        
}



SCOPE {
//Scope defines where variables can be accessed or referenced. While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context.

    BLOCKS AND SCOPE
        //We've seen blocks used before in functions and if statements. A block is the code found inside a set of curly braces {}. Blocks help us group one or more statements together and serve as an important structural marker for our code.

        Example:
        
        1.  const logSkyColor = () => {
                let color = 'blue'; 
                console.log(color); // blue 
            };
        //Notice that the function body is actually a block of code.

        2.  if (dusk) {
                let color = 'pink';
                console.log(color); // pink
            };
        //Notice the block in the if statement.

        3.  const city = 'New York City';

            function logCitySkyline() {
            let skyscraper = 'Empire State Building';
            return 'The stars over the ' + skyscraper + ' in ' + city;
            }
            
            console.log(logCitySkyline());
            //Prints 'The stars over the Empire State Buiding in New York City


    GLOBAL SCOPE
        //In global scope, variables are declared outside of blocks. These variables are called global variables. Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.

        Example:

        const color = 'blue'

        const returnSkyColor = () => {
        return color; // blue 
        };

        console.log(returnSkyColor()); // blue
                
        //Even though the color variable is defined outside of the block, it can be accessed in the function block, giving it global scope.
        //In turn, color can be accessed within the returnSkyColor function block.

        Example:

        let satellite = 'The Moon';
        let galaxy = 'The Milky Way';
        let stars = 'North Star';

        function callMyNightSky() {
        return 'Night Sky: ' + satellite + ', ' + stars + ' and ' + galaxy;
        }

        console.log(callMyNightSky());
        //Prints Night Sky: The Moon, North Star and The Milky Way


    BLOCK SCOPE
        ///When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. We say that variable has block scope because it is only accessible to the lines of code within that block.

        //Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.

        //Block scope works like this:

        const logSkyColor = () => {
        let color = 'blue'; 
        console.log(color); // blue 
        };

        logSkyColor(); // blue 
        console.log(color); // ReferenceError

        Notice that:
        1.  //We define a function logSkyColor().
        2.  //Within the function, the color variable is only available within the curly braces of the function.
        3.  //If we try to log the same variable outside the function, throws a ReferenceError.


    SCOPE POLLUTION
        //When you declare global variables, they go to the global namespace. The global namespace allows the variables to be accessible from anywhere in the program. These variables remain there until the program finishes which means our global namespace can fill up really quickly.

        //Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes. Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents. For example, globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.

        Examples:

        A   let num = 50;

            const logNum = () => {
            num = 100; // Take note of this line of code
            console.log(num);
            };

            logNum(); // Prints 100
            console.log(num); // Prints 100

            Notice that:
            1.  //We have a variable num.
            2.  //Inside the function body of logNum(), we want to declare a new variable but forgot to use the let keyword.
            3.  //When we call logNum(), num gets reassigned to 100.
            4.  //The reassignment inside logNum() affects the global variable num.
            5.  //Even though the reassignment is allowed and we won't get an error, if we decided to use num later, we'll unknowingly use the new value of num.

        
        B   const logSkyColor = () => {
                const dusk = true;
                let color = 'blue'; 
                if (dusk) {
                    let color = 'pink';
                    console.log(color); // pink
                }
                console.log(color); // blue 
            };
            
            console.log(color); // ReferenceError

            Notice that:
            1.  //We create a variable dusk inside the logSkyColor() function.
            2.  //After the if statement, we define a new code block with the {} braces. Here we assign a new value to the variable color if the if statement is truthy.
            3.  //Within the if block, the color variable holds the value 'pink', though outside the if block, in the function body, the color variable holds the value 'blue'.
            4.  //While we use block scope, we still pollute our namespace by reusing the same variable name twice. A better practice would be to rename the variable inside the block.

}



ARRAYS {
    //Arrays are JavaScript's way of making lists. Arrays can store any data types (including strings, numbers, and booleans). Like lists, arrays are ordered, meaning each item has a numbered position.

    let concepts = ['element example', 10, true]

    1.  //The array is represented by the square brackets [] and the content inside.
    2.  //Each content item inside an array is called an element.
    3.  //There are three different elements inside the array.
    4.  //Each element inside the array is a different data type.


    ACCESSING ELEMENTS
        //Each element in an array has a numbered position known as its index.
        //Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. 
        //You can also access individual characters in a string using bracket notation and the index. For instance, you can write:

        const hello = 'Hello World';
        console.log(hello[6]);
        // Output: W

        Example:
                
        const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

        let listItem = famousSayings[0];
        console.log(listItem)               
        //Prints: Fortune favors the brave.
        console.log(famousSayings[2])
        //Prints: Where there is love there is life.
        console.log(famousSayings[3])
        //Prints: Undefined


    UPDATE ELEMENTS
        //Once you have access to an element in an array, you can update its value.
        
        Example:

        let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

        seasons[3] = 'Autumn';
        console.log(seasons); 
        //Output: ['Winter', 'Spring', 'Summer', 'Autumn']


    ARRAYS WITH LET AND CONST
        //Variables declared with let can be reassigned.

        //Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.

        Example:

        let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

        const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
        
        condiments[0] = 'Mayo';
        console.log(condiments)
        //Prints: [ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]
        
        condiments = ['Mayo'];
        console.log(condiments);
        //Prints: [ 'Mayo' ]
                    
        utensils[3] = 'Spoon';
        console.log(utensils);
        //Prints: [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]


    THE .LENGHT PROPERTY
        //One of an array's built-in properties is length and it returns the number of items in the array. 

        Example:

        const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

        console.log(newYearsResolutions.length);
        // Output: 2


    THE .PUSH() METHOD
        //The .push method allows to add items to the end of an array.

        Example:

        const itemTracker = ['item 0', 'item 1', 'item 2'];

        itemTracker.push('item 3', 'item 4');

        console.log(itemTracker); 
        // Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];


    THE .POP() METHOD
        //The .pop() method removes the last item of an array.

        Example:

        const newItemTracker = ['item 0', 'item 1', 'item 2'];

        const removed = newItemTracker.pop();

        console.log(newItemTracker); 
        // Output: [ 'item 0', 'item 1' ]
        console.log(removed);
        // Output: item 2

        1.  //In the example above, calling .pop() on the newItemTracker array removed item 2 from the end.
        2.  //.pop() does not take any arguments, it simply removes the last element of newItemTracker.
        3.  //.pop() returns the value of the last element. In the example, we store the returned value in a variable removed to be used for later.
        4.  //.pop() is a method that mutates the initial array.

    OTHER ARRAY METHODS

        .shift() //Removes the first item of an array.

            Example:

            const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

            groceryList.shift();

            console.log(groceryList);
            //Prints: [ 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]

        
        .unshift() //Adds a new item to the beginning of an array.

            Example:

            const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

            groceryList.unshift('popcorn');

            console.log(groceryList);
            //Prints: [ 'popcorn', orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]


        .slice() //'Slices' the array from a given index position to another index position.

            Example:

            const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

            console.log(groceryList.slice(1, 4));
            //Prints: [ 'bananas', 'coffee beans', 'brown rice' ]


        .indexOf() //Finds the index of a particular element in the array.

            Example:

            const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

            const pastaIndex = groceryList.indexOf('pasta');

            console.log(pastaIndex);
            //Prints: 4

    ARRAYS AND FUNCTIONS
        //What happens if we try to change an array inside a function? Does the array keep the change after the function call or is it scoped to inside the function?

        Example:

        const flowers = ['peony', 'daffodil', 'marigold'];

        function addFlower(arr) {
            arr.push('lily');
        }

        addFlower(flowers);

        console.log(flowers); 
        //Prints: ['peony', 'daffodil', 'marigold', 'lily']


        //Let's go over what happened in the example:
        1.  //The flowers array that has 3 elements.
        2.  //The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr.
        3.  //We call addFlower() with an argument of flowers which will execute the code inside addFlower.
        4.  //We check the value of flowers and it now includes the 'lily' element! The array was mutated!

        //When you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well. You might also see this concept explained as pass-by-reference since what we're actually passing the function is a reference to where the variable memory is stored and changing the memory.


        Examples:

        A   const concept = ['arrays', 'can', 'be', 'mutated'];

            function changeArr(arr){
                arr[3] = 'MUTATED';
            }

            changeArr(concept);

            console.log(concept);
            //Prints: [ 'arrays', 'can', 'be', 'MUTATED' ]

        B   const concept = ['arrays', 'can', 'be', 'mutated'];
            
            function removeElement(newArr) {
                newArr.pop()
            }
            
            removeElement(concept);
            
            console.log(concept)
            //Prints: [ 'arrays', 'can', 'be' ] 


    NESTED ARRAYS
        //Earlier we mentioned that arrays can store other arrays. When an array contains another array it is known as a nested array. 

        Example:

        const nestedArr = [[1], [2, 3]];

        console.log(nestedArr[1]); 
        // Output: [2, 3]

        console.log(nestedArr[1][0]); 
        // Output: 2

        //To access the nested arrays we can use bracket notation with the index value, just like we did to access any other element:
        //If we wanted to access the elements within the nested array we can chain, or add on, more bracket notation with index values.

}



LOOPS {
    //A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached. 
    
    //When using loops the generic term iterate simply means "to repeat".


    REPEATING TASKS MANUALLY

        Example:

        let vacationSpots = ['Lisbon', 'Dubai', 'Snow'];

        console.log(vacationSpots[0]);
        console.log(vacationSpots[1]);
        console.log(vacationSpots[2]);
        //Prints: Lisbon
        //        Dubai
        //        Snow

        //Now imagine that the vacation list had 100 places on it— logging each array element to the console by hand would be a tedious task!


    THE FOR LOOP
        //The typical for loop includes an iterator variable that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. Iterator variables can have any name, but it’s best practice to use a descriptive variable name.

        //A for loop contains three expressions separated by ; inside the parentheses:

        1.  //an initialization starts the loop and can also be used to declare the iterator variable.
        2.  //a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
        3.  //an iteration statement is used to update the iterator variable on each loop.

        Example:

        for (let counter = 0; counter < 4; counter++) {
            console.log(counter);
        };
        //Prints:   0
        //          1
        //          2
        //          3

        //Let’s break down the example:

        1.  //The initialization is let counter = 0, so the loop will start counting at 0.
        2.  //The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, counter, is less 4.
        3.  //The iteration statement is counter++. This means after each loop, the value of counter will increase by 1. For the first iteration counter will equal 0, for the second iteration counter will equal 1, and so on.
        4.  //The code block is inside of the curly braces, console.log(counter), will execute until the condition evaluates to false. The condition will be false when counter is greater than or equal to 4 — the point that the condition becomes false is sometimes called the stop condition.

        //This for loop makes it possible to write 0, 1, 2, and 3 programmatically.


    LOOPING IN REVERSE
        //To run a backward for loop, we must:

        1.  //The set the iterator variable to the highest desired value in the initialization expression.
        2.  //Set the stopping condition for when the iterator variable is less than the desired amount.
        3.  //The iterator should decrease in intervals after each iteration.

        Example:

        for (let counter = 3; counter >= 0; counter--){
            console.log(counter)
        };
        ///Prints   3
        //          2
        //          1
        //          0


    LOOPING THROUGH ARRAYS
        //To loop through each element in an array, a for loop should use the array's .length property in its condition.


        Example:
        A   const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];

            for (let i = 0; i < animals.length; i++) {
                console.log(animals[i]);
            };
            //Prints:  Grizzly Bear
            //         Sloth
            //         Sea Lion

            ///In the loop above, we've named our iterator variable i. When we use i to iterate through arrays we can think of it as being short-hand for the word index. 
            //Notice how our stopping condition checks that i is less than animals.length. Remember that arrays are zero-indexed, the index of the last element of an array is equivalent to the length of that array minus 1. If we tried to access an element at the index of animals.length we will have gone too far!

        B   const vacationSpots = ['Bali', 'Paris', 'Tulum'];

            for (let i = 0; i < vacationSpots.length; i++ ){
                console.log('I would love to visit ' + vacationSpots[i]);
            };
            //Prints: I would love to visit Bali
            //        I would love to visit Paris
            //        I would love to visit Tulum


    NESTED LOOPS
        //When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.

        Example:
        
        A   const myArray = [6, 19, 20];
            const yourArray = [19, 81, 2];
            for (let i = 0; i < myArray.length; i++) {
                for (let j = 0; j < yourArray.length; j++) {
                    if (myArray[i] === yourArray[j]) {
                    console.log('Both loops have the number: ' + yourArray[j])
                    }
                }
            };

            //For each element in the outer loop array, myArray, the inner loop will run in its entirety comparing the current element from the outer array, myArray[i], to each element in the inner array, yourArray[j]. When it finds a match, it prints a string to the console.


        B   let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
            let tinasFollowers = ['Sam', 'Marta', 'Elle'];
            let mutualFollowers = [];
            
            for (let i = 0; i < bobsFollowers.length; i++) {
                for (let j = 0; j < tinasFollowers.length; j++) {
                    if (bobsFollowers[i] === tinasFollowers[j]) {
                        mutualFollowers.push(bobsFollowers[i]);
                    }
                }
            };

            1.  //Make a variable called bobsFollowers and set it equal to an array with four strings representing the names of Bob's friends.
            2.  //Make a variable called tinasFollowers and set it equal to an array with three strings representing the names of Tina's friends. Make exactly two of these the same as two of the friends in the bobsFollowers array.
            3.  //Create a third variable named mutualFollowers and set it to an empty array.
            4.  //Create a nested loop that iterates through bobsFollowers as the array for the outer loop, and tinasFollowers as the array for the inner array. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.


    THE WHILE LOOP
        //Let's start by converting a for loop into a while loop:

        // A for loop that prints 1, 2, and 3
        for (let counterOne = 1; counterOne < 4; counterOne++){
            console.log(counterOne);
        }
        
        // A while loop that prints 1, 2, and 3
        let counterTwo = 1;
        while (counterTwo < 4) {
            console.log(counterTwo);
            counterTwo++;
        }

        1.  //The counterTwo variable is declared before the loop. We can access it inside our while loop since it's in the global scope.
        2.  //We start our loop with the keyword while followed by our stopping condition, or test condition. This will be evaluated before each round of the loop. While the condition evaluates to true, the block will continue to run. Once it evaluates to false the loop will stop.
        3.  //Next, we have our loop's code block which prints counterTwo to the console and increments counterTwo.

        //What would happen if we didn't increment counterTwo inside our block? If we didn't include this, counterTwo would always have its initial value, 0. That would mean the testing condition counterTwo < 4 would always evaluate to true and our loop would never stop running! This is called an infinite loop and it's something we always want to avoid.

        Example:
        const cards = ['diamond', 'spade', 'heart', 'club'];
        let currentCard
        while (currentCard !== 'spade') {
            currentCard = cards[Math.floor(Math.random() * 4)];
            console.log(currentCard)
        }

        //Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We'll use this number to index the cards array, and assign the value of currentCard to a random element from that array. 
        s//The while loop repeats as long as the randomly obtained card is not 'spade'


    DO...WHILE STATEMENTS
        //A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met. 

        Example:

        let countString = '';
        let i = 0;

        do {
            countString = countString + i; i++;
        } while (i < 5);

        console.log(countString);

        //In this example, the code block makes changes to the countString variable by appending the string form of the i variable to it. First, the code block after the do keyword is executed once. Then the condition is evaluated. If the condition evaluates to true, the block will execute again. The looping stops when the condition evaluates to false.

        //Note that the while and do...while loop are different! Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.

        const firstMessage = 'I will print!';
        const secondMessage = 'I will not print!'; 

        // A do while with a stopping condition that evaluates to false
        do {
            console.log(firstMessage)
        } while (true === false);

        // A while loop with a stopping condition that evaluates to false
        while (true === false){
            console.log(secondMessage)
        };


    THE BREAK KEYWORD
        //In our code, when we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn't been met, we can use the keyword break.

        Example:

        A   for (let i = 0; i < 99; i++) {
                if (i > 2 ) {
                break;
                }
                console.log('Banana.');
            }
            
            console.log('Orange you glad I broke out the loop!');
            //Prints:  Banana.
            //         Banana.
            //         Banana.
            //         Orange you glad I broke out the loop!


        B   const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

            for (let i = 0; i < rapperArray.length; i++){
                console.log(rapperArray[i]);
                if (rapperArray[i] ===  'Notorious B.I.G.'){
                    break;
                }
            }
            console.log("And if you don't know, now you know.");
            //Prints:  Lil' Kim
            //         Jay-Z
            //         Notorious B.I.G.
            //         And if you don't know, now you know.

            1.  //Log each element from rapperArray in a for loop with the iterator variable rapperArrayIndex.
            2.  //After the for loop, log the string "And if you don't know, now you know." to the console. Note: since there's a single quote character, ', in our string, we can use double quotes around the string to make sure character prints.
            3.  //Add a break inside your loop's block that breaks out of the loop if the element at the current index in the rapperArray is 'Notorious B.I.G.'.

}



HIGHER-ORDER FUNCTIONS {
    //Higher-order functions are functions that accept other functions as arguments and/or return functions as output. This enables us to build abstractions on other abstractions, just like "We hosted a birthday party" is an abstraction that may build on the abstraction "We made a cake."

    FUNCTIONS AS DATA
        //JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.

        Example:

        const announceThatIAmDoingImportantWork = () => {
            console.log("I’m doing very important work!");
        };

        //This function has an annoyingly long name that hurts the readability of any code in which it's used.

        //We can re-assign the function to a variable with a suitably short name:

        const busy = announceThatIAmDoingImportantWork;

        busy(); //This function call barely takes any space!

        //busy is a variable that holds a reference to our original function. If we could look up the address in memory of busy and the address in memory of announceThatIAmDoingImportantWork they would point to the same place. Our new busy() function can be invoked with parentheses as if that was the name we originally gave our function.

        //Notice how we assign announceThatIAmDoingImportantWork without parentheses as the value to the busy variable. We want to assign the value of the function itself, not the value it returns when invoked.

        //In JavaScript, functions are first class objects, this means that like other objects you've encountered, JavaScript functions can have properties and methods.

        //Since functions are a type of object, they have properties such as .length and .name and methods such as .toString().

        Example:

        const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
            for(let i = 1; i <= 1000000; i++) {
                if ( (2 + 2) != 4) {
                    console.log('Something has gone very wrong :( ');
                }
            }
        }
          
        const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
        
        is2p2();
        
        console.log(is2p2.name); //Prints: checkThatTwoPlusTwoEqualsFourAMillionTimes


    FUNCTIONS AS PARAMETERS
        //We can also pass functions (into other functions) as parameters. 

        //A higher-order function is a function that either accepts functions as parameters, returns a function, or both! We call the functions that get passed in as parameters and invoked callback functions because they get called during the execution of the higher-order function.

        //When we pass a function in as an argument to another function, we don't invoke it. Invoking the function would evaluate to the return value of that function call. With callbacks, we pass in the function itself by typing the function name without the parentheses (that would evaluate to the result of calling the function):

        const timeFuncRuntime = funcParameter => {
            let t1 = Date.now();
            funcParameter();
            let t2 = Date.now();
            return t2 - t1;
        }
         
        const addOneToOne = () => 1 + 1;
        
        timeFuncRuntime(addOneToOne);

        1.  //We wrote a higher-order function, timeFuncRuntime(). It takes in a function as an argument, saves a starting time, invokes the callback function, records the time after the function was called, and returns the time the function took to run by subtracting the starting time from the ending time.

        2.  //This higher-order function could be used with any callback function which makes it a potentially powerful piece of code.

        3.  //We then invoked timeFuncRuntime() first with the addOneToOne() function - note how we passed in addOneToOne and did not invoke it.

        timeFuncRuntime(() => {
            for (let i = 10; i>0; i--){
                console.log(i);
            }
        });

        //In this example, we invoked timeFuncRuntime() with an anonymous function that counts backwards from 10. Anonymous functions can be arguments too!

        Example:

        const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
            for(let i = 1; i <= 1000000; i++) {
                if ( (2 + 2) != 4) {
                    console.log('Something has gone very wrong :( ');
                }
            }
        };
          
        const addTwo = num => num + 2;
        
        const timeFuncRuntime = funcParameter => {
            let t1 = Date.now();
            funcParameter();
            let t2 = Date.now();
            return t2 - t1;
        };

        1.  //Save a variable, time2p2. Assign as its value the result of invoking the timeFuncRuntime() function with the checkThatTwoPlusTwoEqualsFourAMillionTimes() function.

        const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

        2.  //Write a higher-order function, checkConsistentOutput(). This function should have two parameters: a function and a value. It should call the argument function with the value two times. If the callback function produces the same result twice, it should return the result of the function call, otherwise, it should return the string 'This function returned inconsistent results'

        const checkConsistentOutput = (func, val) => {
            let firstTry = func(val);
            let secondTry = func(val);
            if (firstTry === secondTry) {
                return firstTry
            } else {
                return 'This function returned inconsistent results'
            }
        };

        3.  //Invoke your checkConsistentOutput() with the addTwo() function we wrote and a number as arguments.

        checkConsistentOutput(addTwo, 10);

}


ITERATORS {
    //Besides the for loop, we also have access to built-in array methods which make looping easier.

    //The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as iterators. Iterators are methods called on arrays to manipulate elements and return values.

    Examples:

    .forEach() {

        const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

        artists.forEach(artist => {
            console.log(artist + ' is one of my favorite artists.');
        });
        //Prints: Picasso is one of my favorite artists.
        //        Kahlo is one of my favorite artists.
        //        Matisse is one of my favorite artists.
        //        Utamaro is one of my favorite artists.
    }

    
    .map() {

        A   const numbers = [1, 2, 3, 4, 5];

            const squareNumbers = numbers.map(number => {
                return number * number;
            });
            
            console.log(squareNumbers); //Prints:  [ 1, 4, 9, 16, 25 ]


        B   const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

            const secretMessage = animals.map(animal => animal[0]);
            
            console.log(secretMessage.join('')); //Prints: HelloWorld

            //Used .map() to create a new array that contains the first character of each string in the animals array. 
            //Saved the new array to a const variable named secretMessage.


        C   const bigNumbers = [100, 200, 300, 400, 500];

            const smallNumbers = bigNumbers.map(num => num/100);
            
            console.log(smallNumbers); //Prints:  [ 1, 2, 3, 4, 5 ]

            //Used .map() to divide all the numbers in bigNumbers by 100.
            //Saved the returned values to a variable declared with const called smallNumbers.

    }


    .filter() {

        A   const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

            const onlyNumbers = things.filter(thing => {
                return typeof thing === 'number';
            });
            
            console.log(onlyNumbers); //Prints:  [ 5, 3.14, 100 ]


        B   const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

            const shortWords = words.filter(word => {
                return word.length < 6;
            });

            console.log(words); //Prints: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
            console.log(shortWords); //Prints: ['chair', 'music', 'brick', 'pen', 'door']

            1.  //words is an array that contains string elements.
            2.  //const shortWords = declares a new variable that will store the returned array from invoking .filter().
            3.  //The callback function is an arrow function has a single parameter, word. Each element in the words array will be passed to this function as an argument.
            4.  //word.length < 6; is the condition in the callback function. Any word from the words array that has fewer than 6 characters will be added to the shortWords array.

        
        C   const randomNumbers = [375, 200, 3.14, 7, 13, 852];

            const smallNumbers = randomNumbers.filter(num => {
                return num < 250;
            });
            
            console.log(smallNumbers); //Prints: [ 200, 3.14, 7, 13 ]

            //Called the .filter() method on randomNumbers to return values that are less than 250. 
            //Saved them to a new array called smallNumbers, declared with const.


        D   const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
            
            const longFavoriteWords = favoriteWords.filter(word => {
            return word.length > 7;
            })
            console.log(longFavoriteWords); //Prints: [ 'nostalgia', 'hyperbole', 'esoteric' ]

            //Invoked .filter() on the favoriteWords array to return elements that have more than 7 characters.
            //Saved the returned array to a const variable named longFavoriteWords.

    }


    THE .findIndex() METHOD {
        //Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.

        Example:

        A   const jumbledNums = [123, 25, 78, 5, 9]; 

            const lessThanTen = jumbledNums.findIndex(num => {
                return num < 10;
            });

            1.  //jumbledNums is an array that contains elements that are numbers.
            2.  //const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().
            3.  //The callback function is an arrow function has a single parameter, num. Each element in the jumbledNums array will be passed to this function as an argument.
            4.  //num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition.

            console.log(lessThanTen); // Output: 3

            console.log(jumbledNums[3]); // Output: 5

            //The element in index 3 is the number 5. This makes sense since 5 is the first element that is less than 10.

            //If there isn't a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.

            const greaterThan1000 = jumbledNums.findIndex(num => {
                return num > 1000;
            });
            
            console.log(greaterThan1000); // Output: -1


        B   const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

            1. //Invoke .findIndex() on the the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.

            const foundAnimal = animals.findIndex(animal => {
                return animal === 'elephant';
            });
            
            2.  //Call .findIndex() on the animals array return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.
            const startsWithS = animals.findIndex(animal => {
                return animal[0] === 's' ? true : false;
            });

    }
        
        
    THE .reduce() METHOD {
        //The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.

        Example:

        const numbers = [1, 2, 4, 10];

        const summedNums = numbers.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        })

        console.log(summedNums) // Output: 17

        //let's go over the use of .reduce() from the example above:

        1.  //numbers is an array that contains numbers.
        2.  //summedNums is a variable that stores the returned value of invoking .reduce() on numbers.
        3.  //numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument.
        4.  //The callback function has two parameters, accumulator and currentValue. The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element.
        5.  //As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration, currentValue takes on the value of the current element in the looping process.

        //The .reduce() method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!).

        Example:

        A   const numbers = [1, 2, 4, 10];

            const summedNums = numbers.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            }, 100)  // <- Second argument for .reduce()

            console.log(summedNums); // Output: 117


        B   const newNumbers = [1, 3, 5, 7];

            const newSum = newNumbers.reduce((accumulator, currentValue) => {
            console.log('The value of accumulator: ', accumulator);
            console.log('The value of currentValue: ', currentValue);
            return accumulator + currentValue;
            }, 10)
            
            console.log(newSum)
            //Prints  The value of accumulator:  10
            //        The value of currentValue:  1
            //        The value of accumulator:  11
            //        The value of currentValue:  3
            //        The value of accumulator:  14
            //        The value of currentValue:  5
            //        The value of accumulator:  19
            //        The value of currentValue:  7
            //        26

    }


    OTHER ITERATORS {

        const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

        1.  //Check if there are words that are fewer than 6 characters long.
        
            console.log(words.some(word => {
                return word.length < 6;
            }));
            //Prints: true


        2.  //Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.
        
            const interestingWords = words.filter((word) => {
                return word.length > 5
            });
        
        
        3.  // Check if every element has more than 5 characters
        
            console.log(interestingWords.every((word) => {return word.length > 5}));

    }


    CHOOSING THE RIGHT ITERATOR {

        .forEach()  
        //is used to execute the same code on every element in an array but does not change the array and returns undefined.

        .map()  
        //executes the same code on every element in an array and returns a new array with the updated elements.

        .filter()
        //checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.

        .findIndex() 
        //returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.

        .reduce()
        //iterates through an array and takes the values of the elements and returns a single value.

        //All iterator methods takes a callback function that can be pre-defined, or a function expression, or an arrow function.
        
        //You can visit the Mozilla Developer Network to learn more about iterator methods (and all other parts of JavaScript!).

    }

}


OBJECTS {
    //Objects are one of the seven types of data types in Javascript.

    //At their core, JavaScript objects are containers storing related data and functionality, but that deceptively simple task is extremely powerful in practice.


    CREATING OBJECT LITERALS {
        //Objects can be assigned to variables just like any JavaScript type. We use curly braces, {}, to designate an object literal:

        let spaceship = {}; // spaceship is an empty object

        //We fill an object with unordered data. This data is organized into key-value pairs. A key is like a variable name that points to a location in memory that holds a value.

        //A key's value can be of any data type in the language including functions or other objects.

        //We make a key-value pair by writing the key's name, or identifier, followed by a colon and then the value. We separate each key-value pair in an object literal with a comma (,). Keys are strings, but when we have a key that does not have any special characters in it, JavaScript allows us to omit the quotation marks:

        let spaceship = {
            'Fuel Type': 'diesel',
            color: 'silver' 
        };

        //The spaceship object has two properties Fuel Type and color. 'Fuel Type' has quotation marks because it contains a space character.

    }
            
    ACCESSING PROPERTIES {

        The dot notation
            //With property dot notation, we write the object's name, followed by the dot operator and then the property name (key):

            let spaceship = {
            homePlanet: 'Earth',
            color: 'silver'
            };

            spaceship.homePlanet; // Returns 'Earth',
            spaceship.color; // Returns 'silver',

            //If we try to access a property that does not exist on that object, undefined will be returned.


        Bracket notation
            //The second way to access a key's value is by using bracket notation, [ ].

            //We've used bracket notation when indexing an array:
            
            ['A', 'B', 'C'][0]; // Returns 'A'

            //To use bracket notation to access an object's property, we pass in the property name (key) as a string.

            
            //We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.

            let spaceship = {
            'Fuel Type': 'Turbo Fuel',
            'Active Duty': true,
            homePlanet: 'Earth',
            numCrew: 5
            };

            spaceship['Active Duty'];   // Returns true
            spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
            spaceship['numCrew'];   // Returns 5
            spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined


            //With bracket notation you can also use a variable inside the brackets to select the keys of an object. This can be especially helpful when working with functions:

            let returnAnyProp = (objectName, propName) => objectName[propName];

            returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'
            
            //If we tried to write our returnAnyProp() function with dot notation (objectName.propName) the computer would look for a key of 'propName' on our object and not the value of the propName parameter.


            Example:

            let spaceship = {
                'Fuel Type' : 'Turbo Fuel',
                'Active Mission' : true,
                homePlanet : 'Earth', 
                numCrew: 5
            };
            
            let propName =  'Active Mission';
            
            
            let isActive = spaceship['Active Mission'];

            console.log(isActive);  //Prints: true
            
            console.log(spaceship[propName]);  //Prints: true

    }


    PROPERTY ASSIGNMENT {
        //Objects are mutable meaning we can update them after we create them!

        //We can use either dot notation, ., or bracket notation, [], and the assignment operator, = to add new key-value pairs to an object or change an existing property.

        Example:

        spaceship['Fuel Type'] = 'vegetable oil';
        spaceship.color = 'gold';

        //One of two things can happen with property assignment:

        1.  //If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
        2.  //If there was no property with that name, a new property will be added to the object.
        
        //It's important to know that although we can't reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there.

        const spaceship = {type: 'shuttle'};

        spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
        spaceship.type = 'alien'; // Changes the value of the type property
        spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'


        //You can delete a property from an object with the delete operator.

        const spaceship = {
            'Fuel Type': 'Turbo Fuel',
            homePlanet: 'Earth',
            mission: 'Explore the universe', 
            'Secret Mission': 'Explore Mars'
        };

        delete spaceship.mission;  // Removes the mission property
        delete spaceship['Secret Mission']  //Removes 'Secret Mission' property

    }


    METHODS {
        //When the data stored on an object is a function we call that a method. 
        //A property is what an object has, while a method is what an object does.

        //We can include methods in our object literals by creating ordinary, comma-separated key-value pairs. The key serves as our method's name, while the value is an anonymous function expression.

        const alienShip = {
            invade: function () { 
                console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
            }
        };

        //With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
        
        const alienShip = {
            invade () { 
                console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
            }
        };

        //Object methods are invoked by appending the object's name with the dot operator followed by the method name and parentheses:

        alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'


        Example:

        let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

        1.  //Create an alienShip object. It should contain a method .retreat() which will console.log() the retreatMessage.

            let alienShip = {
                retreat() {
                    console.log(retreatMessage)
                },
            };

        2. //Add another method to your object literal. This method, .takeOff(), should console.log() the string 'Spim... Borp... Glix... Blastoff!'.

            let alienShip = {
                retreat() {
                    console.log(retreatMessage)
                },
                takeOff() {
                    console.log('Spim... Borp... Glix... Blastoff!')
                }
            };

            3.  //Invoke your two methods: first .retreat() then .takeOff().

            alienShip.retreat();

            alienShip.takeOff();

    }


    NESTED OBJECTS {
        //In application code, objects are often nested— an object might have another object as a property which in turn could have a property that's an array of even more objects!

        //In our spaceship object, we want a crew object. This will contain all the crew members. Each of those crew members are objects themselves. They have properties like name, and degree, and they each have unique methods based on their roles. We can also nest other objects in the spaceship such as a telescope or nest details about the spaceship's computers inside a parent nanoelectronics object.

        const spaceship = {
            telescope: {
            yearBuilt: 2018,
            model: '91031-XLT',
            focalLength: 2032 
            },
        crew: {
            captain: { 
                name: 'Sandra', 
                degree: 'Computer Engineering', 
                encourageTeam() { console.log('We got this!') } 
                }
        },
        engine: {
            model: 'Nimbus2000'
            },
            nanoelectronics: {
                computer: {
                terabytes: 100,
                monitors: 'HD'
                },
            'back-up': {
                battery: 'Lithium',
                terabytes: 50
                }
        }
        };

        //We can chain operators to access nested properties. We'll have to pay attention to which operator makes sense to use in each layer. It can be helpful to pretend you are the computer and evaluate each expression from left to right so that each operation starts to feel a little more manageable.

        spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'


        Example:

        let spaceship = {
            passengers: null, 
            telescope: {
              yearBuilt: 2018,
              model: "91031-XLT",
              focalLength: 2032 
            },
            crew: {
              captain: { 
                name: 'Sandra', 
                degree: 'Computer Engineering', 
                encourageTeam() { console.log('We got this!') },
               'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
            },
            engine: {
              model: "Nimbus2000"
            },
            nanoelectronics: {
              computer: {
                terabytes: 100,
                monitors: "HD"
              },
              backup: {
                battery: "Lithium",
                terabytes: 50
              }
            }
        }; 
          
        1.  //Create a variable capFave and assign the captain's favorite food (the element in the 0th index of her 'favorite foods' array) to it.

        let capFave = spaceship.crew.captain['favorite foods'][0];
        

        2.  //Assign an array of objects to the passengers property. These objects should represent the spaceship's passengers as individual objects.

        passengers: [{name: 'Space Dog'}],

        3.  //Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). Make sure to use bracket and dot notation to get the passenger object through nested access (don't just copy the object into the variable!)

        let firstPassenger = spaceship.passengers[0];

    }


    PASS BY REFERENCE {
        //Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object. As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).

        const spaceship = {
            homePlanet : 'Earth',
            color : 'silver'
        };

        let paintIt = obj => {
            obj.color = 'glorious gold'
        };
        
        paintIt(spaceship);
        
        spaceship.color // Returns 'glorious gold'

        //Our function paintIt() permanently changed the color of our spaceship object. However, reassignment of the spaceship variable wouldn't work in the same way:

        let spaceship = {
            homePlanet : 'Earth',
            color : 'red'
        };

        let tryReassignment = obj => {
            obj = {
            identified : false, 
            'transport type' : 'flying'
            }
            console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
        
        };

        tryReassignment(spaceship) // The attempt at reassignment does not work.
        spaceship // Still returns {homePlanet : 'Earth', color : 'red'};
        
        spaceship = {
            identified : false, 
            'transport type': 'flying'
        }; // Regular reassignment still works.

        //Let's look at what happened in the code example:
        
        1.  //We declared this spaceship object with let. This allowed us to reassign it to a new object with identified and 'transport type' properties with no problems.
        2  //When we tried the same thing using a function designed to reassign the object passed into it, the reassignment didn't stick (even though calling console.log() on the object produced the expected result).
        3.  //When we passed spaceship into that function, obj became a reference to the memory location of the spaceship object, but not to the spaceship variable. This is because the obj parameter of the tryReassignment() function is a variable in its own right. The body of tryReassignment() has no knowledge of the spaceship variable at all!
        4.  //When we did the reassignment in the body of tryReassignment(), the obj variable came to refer to the memory location of the object {'identified' : false, 'transport type' : 'flying'}, while the spaceship variable was completely unchanged from its earlier value.

        Example: 

        let spaceship = {
            'Fuel Type' : 'Turbo Fuel',
            homePlanet : 'Earth'
        };
        

        1.  //Write a function greenEnergy() that has an object as a parameter and sets that object's 'Fuel Type' property to 'avocado oil'.
        
        let greenEnergy = obj => {
        obj['Fuel Type'] = 'avocado oil';
        }


        2.  //Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object's disabled property to true.
        
        let remotelyDisable = obj => {
        obj.disabled = true;
        }
        

        3.  //Call your two functions with the spaceship object in the code editor, then console.log() the spaceship object to confirm those properties were changed/added.

        greenEnergy(spaceship);
        
        remotelyDisable(spaceship);
        
        console.log(spaceship)  //Prints: { 'Fuel Type': 'avocado oil', homePlanet: 'Earth', disabled: true }

    }


    LOOPING THROUGH OBJECTS {
        //JavaScript has given us alternative solution for iterating through objects with the for...in syntax.

        let spaceship = {
            crew: {
            captain: { 
                name: 'Lily', 
                degree: 'Computer Engineering', 
                cheerTeam() { console.log('You got this!') } 
                },
            'chief officer': { 
                name: 'Dan', 
                degree: 'Aerospace Engineering', 
                agree() { console.log('I agree, captain!') } 
                },
            medic: { 
                name: 'Clementine', 
                degree: 'Physics', 
                announce() { console.log(`Jets on!`) } },
            translator: {
                name: 'Shauna', 
                degree: 'Conservation Science', 
                powerFuel() { console.log('The tank is full!') } 
                }
            }
        }; 

        // for...in
        for (let crewMember in spaceship.crew) {
          console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
        };

        //Our for...in will iterate through each element of the spaceship.crew object. In each iteration, the variable crewMember is set to one of spaceship.crew's keys, enabling us to log a list of crew members' role and name.


        Example:

        let spaceship = {
            crew: {
            captain: { 
                name: 'Lily', 
                degree: 'Computer Engineering', 
                cheerTeam() { console.log('You got this!') } 
                },
            'chief officer': { 
                name: 'Dan', 
                degree: 'Aerospace Engineering', 
                agree() { console.log('I agree, captain!') } 
                },
            medic: { 
                name: 'Clementine', 
                degree: 'Physics', 
                announce() { console.log(`Jets on!`) } },
            translator: {
                name: 'Shauna', 
                degree: 'Conservation Science', 
                powerFuel() { console.log('The tank is full!') } 
                }
            }
        }; 
        
        1.  //Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew roles and names in the following format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.
        
        for (let crewMember in spaceship.crew) {
          console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
        };

        2.  //Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew names and degrees in the following format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.
        
        for (let crewMember in spaceship.crew) {
          console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
        };

    }

}



ADVANCED OBJECTS {

    THE THIS KEYWORD {
        //Objects are collections of related data and functionality. We store that functionality in methods on our objects:

        const goat = {
            dietType: 'herbivore',
            makeSound() {
              console.log('baaa');
            }
        };

        //In our goat object we have a .makeSound() method. We can invoke the .makeSound() method on goat.

        goat.makeSound(); // Prints baaa

        //What if we wanted to add a new method to our goat object called .diet() that prints the goat's dietType?

        const goat = {
            dietType: 'herbivore',
            makeSound() {
                console.log('baaa');
            },
            diet() {
                console.log(dietType);
            }
        };

        goat.diet(); 
        // Output will be "ReferenceError: dietType is not defined"
        //This happens because inside the scope of the .diet() method, we don't automatically have access to other properties of the goat object.

        //Here's where the this keyword comes to the rescue. If we change the .diet() method to use the this, the .diet() works! :

        const goat = {
            dietType: 'herbivore',
            makeSound() {
                console.log('baaa');
            },
            diet() {
                console.log(this.dietType);
            }
        };
        
        goat.diet(); 
        // Output: herbivore

        //The this keyword references the calling object which provides access to the calling object's properties. In the example above, the calling object is goat and by using this we're accessing the goat object itself, and then the dietType property of goat by using property dot notation.

        Example:

        1. //Create an object called robot. Add a property of model and assign to it a value of '1E78V2'. Add another property, energyLevel and assign to it a value of 100.

        const robot = {
            model: '1E78V2',
            energyLevel: 100,
        };

        2. //Inside the robot object, add a method named provideInfo. Inside the body of provideInfo(), return the following string by using interpolation: I am MODEL and my current energy level is ENERGYLEVEL.
        //Replace 'MODEL' and 'ENERGYLEVEL' with the calling object's model and energyLevel property. Remember, to get the access to the calling object's properties inside a method, you have to use the this keyword!

        const robot = {
            model: '1E78V2',
            energyLevel: 100,
            provideInfo() { 
                return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
            }
        };

        3.  //Check if .provideInfo() has access to the internal properties of robot. Log the result of calling .provideInfo() method on robot to the console.

        const robot = {
            model: '1E78V2',
            energyLevel: 100,
            provideInfo() { 
                return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
            }
        };
          
        console.log(robot.provideInfo());  //Prints: I am 1E78V2 and my current energy level is 100.
    }


    ARROW FUNCTIONS AND THIS {
        //We saw in the previous exercise that for a method, the calling object is the object the method belongs to. If we use the this keyword in a method then the value of this is the calling object. However, it becomes a bit more complicated when we start using arrow functions for methods.

        Example:

        const goat = {
            dietType: 'herbivore',
            makeSound() {
                console.log('baaa');
            },
            diet: () => {
                console.log(this.dietType);
            }
        };
        
        goat.diet(); // Prints undefined

        //So what happened? Notice that in the .diet() is defined using an arrow function.

        //Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. In the code snippet above, the value of this is the global object, or an object that exists in the global scope, which doesn't have a dietType property and therefore returns undefined.
    }


    PRIVACY {
        //Accessing and updating properties is fundamental in working with objects. However, there are cases in which we don't want other code simply accessing and updating an object's properties. When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.

        //Certain languages have privacy built-in for objects, but JavaScript does not have this feature. Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered.

        Example:

        const bankAccount = {
            _amount: 1000
        }
        // _amount is not intended to be directly manipulated. WE can, however, reassign it:
        bankAccount._amount = 1000000;

        //Later, we'll cover the use of methods called getters and setters. Both methods are used to respect the intention of properties prepended, or began, with _. Getters can return the value of internal properties and setters can safely reassign property values.

        Example:

        const robot = {
            _energyLevel: 100,
            recharge(){
              this._energyLevel += 30;
              console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
            }
        };

        1.  //Reassign the _energyLevel property to 'high'

            robot._energyLevel = 'high';

        2.  //Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel. Call .recharge() on robot.

            robot.recharge();
            ///Prints: Recharged! Energy is currently at high30%.
    }


    GETTERS {
        //Getters are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property! 

        Example:

        const person = {
            _firstName: 'John',
            _lastName: 'Doe',
            get fullName() {
                if (this._firstName && this._lastName){
                    return `${this._firstName} ${this._lastName}`;
                } else {
                    return 'Missing a first name or a last name.';
                }
            }
        }
        
        // To call the getter method: 
        person.fullName; // 'John Doe'

        //Notice that:

        1.  //We use the get keyword followed by a function.
        2.  //We use an if...else conditional to check if both _firstName and _lastName exist (by making sure they both return truthy values) and then return a different value depending on the result.
        3.  //We can access the calling object's internal properties using this. In fullName, we're accessing both this._firstName and this._lastName.
        4.  //In the last line we call fullName on person. In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we're accessing a property.

        
        //Now that we've gone over syntax, let's discuss what some notable advantages of using a getter method:

        1.  //Getters can perform an action on the data when getting a property.
        2.  //Getters can return different values using conditionals.
        3.  //In a getter, we can access the properties of the calling object using this.
        4.  //The functionality of our code is easier for other developers to understand.
        5.  //Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. If we do so, then calling the method will result in an infinite call stack error. One workaround is to add an underscore before the property name like we did in the example above.

        Example:

        const robot = {
            _model: '1E78V2',
            _energyLevel: 100,
        };
          
        1.  //In robot, create a getter method named energyLevel using the get keyword. Leave function body blank for now.

        const robot = {
            _model: '1E78V2',
            _energyLevel: 100,
            get energyLevel() {
                
            }
        };

        2.  //Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator. If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel.

        const robot = {
            _model: '1E78V2',
            _energyLevel: 100,
            get energyLevel() {
                if(typeof this._energyLevel === 'number') {
                    return 'My current energy level is ' + this._energyLevel
                } 
            }
        };

        3.  //If this._energyLevel isn't a number it could be that the _energyLevel property was altered. Let's add a default return statement for when such a scenario arises
        //Add an else statement that returns 'System malfunction: cannot retrieve energy level'.
            
        const robot = {
            _model: '1E78V2',
            _energyLevel: 100,
            get energyLevel() {
                if(typeof this._energyLevel === 'number') {
                    return 'My current energy level is ' + this._energyLevel
                } else {
                    return 'System malfunction: cannot retrieve energy level'
                }
            }
        };

        4.  //Log the result of calling the getter method energyLevel on robot to the console. (Notice that the method will return a formatted response rather than just accessing a property!)

        const robot = {
            _model: '1E78V2',
            _energyLevel: 100,
            get energyLevel() {
                if(typeof this._energyLevel === 'number') {
                    return 'My current energy level is ' + this._energyLevel
                } else {
                    return 'System malfunction: cannot retrieve energy level'
                }
            }
        };

        console.log(robot.energyLevel);
        //Prints: My current energy level is 100
    }


    SETTERS {
        //Along with getter methods, we can also create setter methods which reassign values of existing properties within an object.

        Example:

        const person = {
            _age: 37,
            set age(newAge) {
                if (typeof newAge === 'number') {
                    this._age = newAge;
                } else {
                    console.log('You must assign a number to age');
                }
            }
        };

        //Notice that:
        1.  //We can perform a check for what value is being assigned to this._age.
        2.  //When we use the setter method, only values that are numbers will reassign this._age
        3.  //There are different outputs depending on what values are used to reassign this._age.

        Then to use the setter method:

        person.age = 40;
        console.log(person._age); // Logs: 40
        person.age = '40'; // Logs: You must assign a number to age

        //Setter methods like age do not need to be called with a set of parentheses. Syntactically, it looks like we're reassigning the value of a property.

        //Like getter methods, there are similar advantages to using setter methods that include checking input, performing actions on properties, and displaying a clear intention for how the object is supposed to be used. Nonetheless, even with a setter method, it is still possible to directly reassign properties. For example, in the example above, we can still set ._age directly:

        person._age = 'forty-five'
        console.log(person._age); // Prints forty-five


        Example:

        const robot = {
            _model: '1E78V2',
            _energyLevel: 100,
            _numOfSensors: 15,
            get numOfSensors(){
                if(typeof this._numOfSensors === 'number'){
                    return this._numOfSensors;
                } else {
                    return 'Sensors are currently down.'
                }
            },
        }

        1.  //Add a setter method named numOfSensors using the set keyword. Provide a parameter of num. Leave the function body empty for now.

        const robot = {
            _model: '1E78V2',
            _energyLevel: 100,
            _numOfSensors: 15,
            get numOfSensors(){
                if(typeof this._numOfSensors === 'number'){
                    return this._numOfSensors;
                } else {
                    return 'Sensors are currently down.'
                }
            },
            set numOfSensors(num) {

            }
        }

        2.  //Add a check to see if num is a number using the typeof operator.
        //num should also be greater than or equal to 0.
        //If both conditions are met, reassign this._numOfSensors to num.

        const robot = {
            _model: '1E78V2',
            _energyLevel: 100,
            _numOfSensors: 15,
            get numOfSensors(){
                if(typeof this._numOfSensors === 'number'){
                    return this._numOfSensors;
                } else {
                    return 'Sensors are currently down.'
                }
            },
            set numOfSensors(num) {
                if(typeof num === 'number' && num >= 0) {
                    this._numOfSensors = num;
                }
            }
        }

        3.  //Add an else that logs 'Pass in a number that is greater than or equal to 0' to the console.

        const robot = {
            _model: '1E78V2',
            _energyLevel: 100,
            _numOfSensors: 15,
            get numOfSensors(){
                if(typeof this._numOfSensors === 'number'){
                    return this._numOfSensors;
                } else {
                    return 'Sensors are currently down.'
                }
            },
            set numOfSensors(num) {
                if(typeof num === 'number' && num >= 0) {
                    this._numOfSensors = num;
                } else {
                    console.log('Pass in a number that is greater than or equal to 0')
                }   
            }
        }

        4.  //Use the numOfSensors setter method on robot to assign _numOfSensors to 100. To check that the setter method worked, console.log() robot.numOfSensors.

        robot.numOfSensors = 100;
        console.log(robot.numOfSensors); //Prints: 100

    }
}
single line comment // 
multi line comment /*...*/



DATA TYPES {

    1.  Number: // Any number, including numbers with decimals: 4, 8, 1516, 23.42.

    2.  String: // Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ". Though we prefer single quotes. Some people like to think of string as a fancy word for text.

    3.  Boolean: // This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a "yes" or "no" question.

    4.  Null: // This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).

    5.  Undefined: // This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null.

    6.  Symbol: // A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.

    7.  Object: // Collections of related data.

}



OPERATORS {

    1.  Add: +
    2.  Subtract: -
    3.  Multiply: *
    4.  Divide: /
    5.  Remainder: %
    // The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can: 11 % 3 equals 2 because 3 fits into 11 three times, leaving 2 as the remainder.

    // The . is another operator! We call it the dot operator.

}



CONCATENATION {

    // Operators aren't just for numbers! When a + operator is used on two strings, it appends the right string to the left string:

    console.log('hi' + 'ya'); //  Prints 'hiya'
    console.log('wo' + 'ah'); //  Prints 'woah'
    console.log('I love to ' + 'code.')
    //  Prints 'I love to code.' - notice the space at the end of 'I love to '

    // This process of appending one string to another is called concatenation.
}



PROPERTIES {

    // When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. Every string instance has a property called length that stores the number of characters in that string.

    // You can retrieve property information by appending the string with a period and the property name.

    console.log('Hello'.length); //  Prints 5
}



METHODS {

    // Methods are actions we can perform. JavaScript provides a number of string methods.

    // We call, or use, these methods by appending an instance with a period (the dot operator), the name of the method, and opening and closing parentheses: ie. 'example string'.methodName().

    examples methods:

    .toUpperCase(): // The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

    .startsWith(): // The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

    .getFullYear(): // The getFullYear() method returns the year of the specified date according to local time.

    .trim(): // The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

    .trimEnd(): // The trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method.

    .trimStart(): // The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.

    methods index: https:// developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Methods_Index

}



BUILT IN OBJECTS {

    // In addition to console, there are other objects built into JavaScript. 

    // For example, if you wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built-in Math object.

    // The great thing about objects is that they have methods! Let's call the .random() method from the built-in Math object:

    console.log(Math.random()); //  Prints a random number between 0 and 1

    // To generate a random number between 0 and 50, we could multiply this result by 50, like so:

    Math.random() * 50;

    // To ensure the answer is a whole number, we can take advantage of another useful Math method called Math.floor().
    // Math.floor() takes a decimal number, and rounds down to the nearest whole number. You can use Math.floor() to round down a random number like this:

    Math.floor(Math.random() * 50);

    // /In this case:
    1.  // Math.random generates a random number between 0 and 1.
    2.  // We then multiply that number by 50, so now we have a number between 0 and 50.
    3.  // Then, Math.floor() rounds the number down to the nearest whole number.

    // Checks if number is an integer
    console.log(Number.isInteger(2017))

    // Returns the smallest integer greater than or equal to a number.
    console.log(Math.ceil(45))

    // Check JavaScript documentation for more objects 

}



VARIABLES {

    // In programming, a variable is a container for a value.
    var   // Prior ES6
    let   // After ES6
    const // After ES6

    // /Information stored in variables, such as a username, account number, or even personalized greeting can then be found in memory.

    // Variables also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves.

    // In short, variables label and store data in memory. There are only a few things you can do with variables:
    1.  // Create a variable with a descriptive name.
    2.  // Store or update information stored in a variable.
    3.  // Reference or “get” information stored in a variable.

    // /It is important to distinguish that variables are not values; they contain values and represent them with a name.

    Example:

    var myName = 'Arya';
    console.log(myName);
    //  Output: Arya

    // /Let's consider the example above:

    var // short for variable, is a JavaScript keyword that creates, or declares, a new variable.

    myName // is the variable's name. Capitalizing in this way is a standard convention in JavaScript called camel casing.

    = // is the assignment operator. It assigns the value ('Arya') to the variable (myName).

    'Arya' // is the value assigned (=) to the variable myName. You can also say that the myName variable is initialized with a value of 'Arya'.

    // After the variable is declared, the string value 'Arya' is printed to the console by referencing the variable name: 
    console.log(myName)

    // There are a few general rules for naming variables:
    1.  // Variable names cannot start with numbers.
    2.  // Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to create two variables that have the same name using different cases.
    3.  // Variable names cannot be the same as keywords. For a comprehensive list of keywords check out MDN's keyword documentation.

    let // keyword signals that the variable can be reassigned a different value. Take a look at the example:
    let meal = 'Enchiladas';
    console.log(meal); //  Output: Enchiladas
    meal = 'Burrito';
    console.log(meal); //  Output: Burrito


    // /We can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of undefined:
    let price;
    console.log(price); //  Output: undefined
    price = 350;
    console.log(price); //  Output: 350


    const // variable cannot be reassigned because it is constant. If you try to reassign a const variable, you'll get a TypeError.

    // Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you'll get a SyntaxError.

    // If you're trying to decide between which keyword to use, let or const, think about whether you'll need to reassign the variable later on. If you do need to reassign the variable use let, otherwise, use const.

}



MATHEMATICAL ASSIGNMENT OPERATORS {

    Example:

    let w = 4;
    w = w + 1;
    console.log(w); //  Output: 5

    // In the example above, we created the variable w with the number 4 assigned to it. The following line, w = w + 1, increases the value of w from 4 to 5.

    // Another way we could have reassigned w after performing some mathematical operation on it is to use built-in mathematical assignment operators. 

    Mathematical assignment operators
    1. +=
    let w = 4;
    w += 1;
    console.log(w); //  Output: 5

    2. -=
    let x = 20;
    x -= 5; //  Can be written as x = x - 5
    console.log(x); //  Output: 15

    3. *=
    let y = 50;
    y *= 2; //  Can be written as y = y * 2
    console.log(y); //  Output: 100

    4. /=
    let z = 8;
    z /= 2; //  Can be written as z = z / 2
    console.log(z); //  Output: 4

    The Increment and Decrement Operator
    // Other mathematical assignment operators include the increment operator (++) and decrement operator (--).
    // The increment operator will increase the value of the variable by 1. The decrement operator will decrease the value of the variable by 1. For example:
    let a = 10;
    a++;
    console.log(a); //  Output: 11

}



STRING CONCATENATION WITH VARIABLES {
    // The + operator can be used to combine two string values even if those values are being stored in variables:

    let myPet = 'armadillo';
    console.log('I own a pet ' + myPet + '.'); 
    //  Output: 'I own a pet armadillo.'

}



STRING INTERPOLATION {

    // In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. Check out the following example where a template literal is used to log strings together:

    const myPet = 'armadillo';
    console.log(`I own a pet ${myPet}.`);
    //  Output: I own a pet armadillo.

    // Notice that:
    1. // a template literal is wrapped by backticks ` (this key is usually located on the top of your keyboard, left of the 1 key).
    2. // Inside the template literal, you'll see a placeholder, ${myPet}. The value of myPet is inserted into the template literal.
    3. // When we interpolate `I own a pet ${myPet}.`, the output we print is the string: 'I own a pet armadillo.'
    
    // One of the biggest benefits to using template literals is the readability of the code. Using template literals, you can more easily tell what the new string will be. You also don't have to worry about escaping double quotes or single quotes.

    Example:

    let myName = 'Pedro';
    let myCity = 'Santarem';

    console.log(`My name is ${myName}. My favorite city is ${myCity}.`)

    //  Output: My name is Pedro. My favorite cir=ty is Santarem.

}


 
TYPEOF OPERATOR {

    // If you need to check the data type of a variable's value, you can use the typeof operator.
    // The typeof operator checks the value to its right and returns, or passes back, a string of the data type.

    const unknown1 = 'foo';
    console.log(typeof unknown1); //  Output: string

    const unknown2 = 10;
    console.log(typeof unknown2); //  Output: number

    const unknown3 = true; 
    console.log(typeof unknown3); //  Output: boolean

}



CONDITIONAL STATEMENTS {
    // A conditional statement checks specific condition(s) and performs a task based on the condition(s).

    The 'if' keyword
    // The if statement is composed of:
    1. // The if keyword followed by a set of parentheses () which is followed by a code block, or block statement, indicated by a set of curly braces {}.
    2. // Inside the parentheses (), a condition is provided that evaluates to true or false.
    3. // If the condition evaluates to true, the code inside the curly braces {} runs, or executes.
    4. // If the condition evaluates to false, the block won't execute.

    Example:

    let sale = true
    if (sale) {
    console.log('Time to buy!')
    }
    //  Output: Time to buy!


    let sale = true
    sale = false;
    if (sale) {
    console.log('Time to buy!')
    }
    //  Output: empty



    If...Else Statements
    // In many cases, we'll have code we want to run if our condition evaluates to false. If we wanted to add some default behavior to the if statement, we can add an else statement to run a block of code when the condition evaluates to false. Take a look at the inclusion of an else statement:

    if (false) {
        console.log('The code in this block will not run.');
      } else {
        console.log('But the code in this block will!');
      }
      //  Prints "But the code in this block will!"

}



COMPARISON OPERATORS {
    // When writing conditional statements, sometimes we need to use different types of operators to compare values. These operators are called comparison operators.

    // Here is a list of some handy comparison operators and their syntax:
    // Less than: <
    // Greater than: >
    // Less than or equal to: <=
    // Greater than or equal to: >=
    // Is equal to: ===
    // Is NOT equal to: !==

    // It can be helpful to think of comparison statements as questions. When the answer is "yes", the statement evaluates to true, and when the answer is "no", the statement evaluates to false. The code above would be asking: is 10 less than 12? Yes! So 10 < 12 evaluates to true.

    // We can also use comparison operators on different data types like strings:

    'apples' === 'oranges' //  false

    // In the example above, we're using the identity operator (===) to check if the string 'apples' is the same as the string 'oranges'. Since the two strings are not the same, the comparison statement evaluates to false.

    // All comparison statements evaluate to either true or false and are made up of:

    // 1. Two values that will be compared.
    // 2. An operator that separates the values and compares them accordingly (>, <, <=,>=,===).

    Example:

    let hungerLevel = 7;

    if(hungerLevel > 7) {
    console.log('Time to eat!')
    }else {
    console.log('We can eat later!')
    };       
    //  Prints "We can eat later!"

}



LOGICAL OPERATORS {
    // Working with conditionals means that we will be using booleans, true or false values. In JavaScript, there are operators that work with boolean values known as logical operators. We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators:
    1. // the and operator (&&)
    2. // the or operator (||)
    3. // the not operator, otherwise known as the bang operator (!)


    // 1. When we use the && operator, we are checking that two things are true:
    if (stopLight === 'green' && pedestrians === 0) {
      console.log('Go!');
    } else {
      console.log('Stop');
    }

    // When using the && operator, both conditions must evaluate to true for the entire condition to evaluate to true and execute. Otherwise, if either condition is false, the && condition will evaluate to false and the else block will execute.
    

    // 2. If we only care about either condition being true, we can use the || operator:
    if (day === 'Saturday' || day === 'Sunday') {
      console.log('Enjoy the weekend!');
    } else {
      console.log('Do some work.');
    }

    // When using the || operator, only one of the conditions must evaluate to true for the overall statement to evaluate to true. In the code example above, if either day === 'Saturday' or day === 'Sunday' evaluates to true the if's condition will evaluate to true and its code block will execute. If the first condition in an || statement evaluates to true, the second condition won't even be checked. Only if day === 'Saturday' evaluates to false will day === 'Sunday' be evaluated. The code in the else statement above will execute only if both comparisons evaluate to false.
    
   
    // 3. The ! not operator reverses, or negates, the value of a boolean:
    let excited = true;
    console.log(!excited); //  Prints false
    
    let sleepy = false;
    console.log(!sleepy); //  Prints true

    // Essentially, the ! operator will either take a true value and pass back false, or it will take a false value and pass back true.
    
    // Logical operators are often used in conditional statements to add another layer of logic to our code.

    Example:

    let mood = 'sleepy';
    let tirednessLevel = 6;

    if (mood === 'sleepy' && tirednessLevel > 8) {
    console.log('time to sleep');
    } else {
    console.log('not bed time yet');
    } //  Prints 'not bed time yet

}
    
    
    
TRUTHY AND FALSY {
    // Sometimes, you'll want to check if a variable exists and you won't necessarily want it to equal a specific value— you'll only check to see if the variable has been assigned a value.

    Example:

    let myVariable = 'I Exist!';
    if (myVariable) {
    console.log(myVariable)
    } else {
    console.log('The variable does not exist.')
    }

    // The code block in the if statement will run because myVariable has a truthy value; even though the value of myVariable is not explicitly the value true, when used in a boolean or conditional context, it evaluates to true because it has been assigned a non-falsy value.

    // So which values are falsy— or evaluate to false when checked as a condition? The list of falsy values includes:
    1. // 0
    2. // Empty strings like "" or ''
    3. // null which represent when there is no value at all
    4. // undefined which represent when a declared variable lacks a value
    5. // NaN, or Not a Number
    
    
    // Here’s an example with numbers:
    let numberOfApples = 0;

    if (numberOfApples){
    console.log('Let us eat apples!');
    } else {
    console.log('No apples left!');
    }
    //  Prints 'No apples left!'
    
    // /The condition evaluates to false because the value of the numberOfApples is 0. Since 0 is a falsy value, the code block in the else statement will run.

    Examples:

    let wordCount = 1;

    if (wordCount) {
    console.log("Great! You've started your work!");
    } else {
    console.log('Better get to work!');
    }
    //  Prints "Great! You've started your work!"


    let favoritePhrase = '';

    if (favoritePhrase) {
    console.log("This string doesn't seem to be empty.");
    } else {
    console.log('This string is definitely empty.');
    }
    //  Prints 'This string is definitely empty.'


    Truthy and Falsy Assignment
    // Say you have a website and want to take a user's username to make a personalized greeting. Sometimes, the user does not have an account, making the username variable falsy. The code below checks if username is defined and assigns a default string if it is not:
    let defaultName;
    if (username) {
    defaultName = username;
    } else {
    defaultName = 'Stranger';
    }

    // If you combine your knowledge of logical operators you can use a short-hand for the code above. In a boolean condition, JavaScript assigns the truthy value to a variable if you use the || operator in your assignment:

    let defaultName = username || 'Stranger';

    // Because || or statements check the left-hand condition first, the variable defaultName will be assigned the actual value of username if is truthy, and it will be assigned the value of 'Stranger' if username is falsy. This concept is also referred to as short-circuit evaluation.


    Examples:

    1.  let tool = '';

        //  Use short circuit evaluation to assign  writingUtensil variable below:
        let writingUtensil = tool || 'pen'

        console.log(`The ${writingUtensil} is mightier than the sword.`);
        //  Prints 'The pen is mightier than the sword.'

    2.  let tool = 'marker';

        //  Use short circuit evaluation to assign  writingUtensil variable below:
        let writingUtensil = tool || 'pen'

        console.log(`The ${writingUtensil} is mightier than the sword.`);
        //  Prints 'The marker is mightier than the sword.'    

}



TERNARY OPERATOR {
    // In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.

    // Take a look at the if...else statement example:

    let isNightTime = true;

    if (isNightTime) {
    console.log('Turn on the lights!');
    } else {
    console.log('Turn off the lights!');
    }

    // We can use a ternary operator to perform the same functionality:

    isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
    
    // In the example above:
    1. // The condition, isNightTime, is provided before the ?.
    2. // Two expressions follow the ? and are separated by a colon :.
    3. // If the condition evaluates to true, the first expression executes.
    4. // If the condition evaluates to false, the second expression executes.
    
    // Like if...else statements, ternary operators can be used for conditions which evaluate to true or false.

    Examples:

    1. let isLocked = false;
    isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.')
    //  Prints 'You will not needd a key to open the door.'


    2. let isCorrect = true
    isCorrect ? console.log('Correct!') : console.log('Incorrect!')
    //  Prints 'Correct!'


    3. let favoritePhrase = 'Love That!';
    favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!")
    // Prints 'I love that!'

}



THE ELSE IF STATEMENT {
    // The else if statement allows for more than two possible outcomes. You can add as many else if statements as you’d like, to make more complex conditionals!

    // The else if statement always comes after the if statement and before the else statement. The else if statement also takes a condition.

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
    // Prints 'Slow down'

    // The else if statements allow you to have multiple possible outcomes. if/else if/else statements are read from top to bottom, so the first condition that evaluates to true from the top to bottom is the block that gets executed.

    // In the example above, since stopLight === 'red' evaluates to false and stopLight === 'yellow' evaluates to true, the code inside the first else if statement is executed. The rest of the conditions are not evaluated. If none of the conditions evaluated to true, then the code in the else statement would have executed.

}



THE SWITCH KEYWORD {
    // A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:

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
    //  Prints 'Papayas are $1.29'
    
    
    //  The switch keyword initiates the statement and is followed by ( ... ), which contains the value that each case will compare. In the example, the value or expression of the switch statement is groceryItem.

    //  Inside the block, { ... }, there are multiple cases. The case keyword checks if the expression matches the specified value that comes after it. The value following the first case is 'tomato'. If the value of groceryItem equalled 'tomato', that case's console.log() would run.
    
    // The value of groceryItem is 'papaya', so the third case runs— Papayas are $1.29 is logged to the console.
    
    // The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without the break keyword at the end of each case, the program would execute the code for all matching cases and the default code as well. This behavior is different from if/else conditional statements which execute only one block of code.

    // At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run.    

}



FUNCTIONS {
    // In programming, we often use code to perform a specific task multiple times. Instead of rewriting the same code, we can group a block of code together and associate it with one task, then we can reuse that block of code whenever we need to perform the task again. We achieve this by creating a function. 
    // A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

    
    FUNCTION DECLARATIONS
        // A function declaration consists of:
        1. // The function keyword.
        2. // The name of the function, or its identifier, followed by parentheses.
        3. // A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.

        // Be aware of the hoisting feature in JavaScript which allows access to function declarations before they're defined.

        Example:

        console.log(greetWorld()); //  Output: Hello, World!

        function greetWorld() {
        console.log('Hello, World!');
        }


    CALLING A FUNCTION    
        // A function declaration does not ask the code inside the function body to run, it just declares the existence of the function. The code inside a function body runs, or executes, only when the function is called. 
        // To call a function in your code, you type the function name followed by parentheses.

        Example:

        // notice event order

        1   function getGreeting() {
        3       console.log('Hello, World!');
            }

        2   getGreeting();
            // getGreeting();
            // getGreeting();

        4   // Code after function call

        Note: 
        // Functions can be called as many times as you need them. On step 2, we can add more calls to the function getGreeting()


    PARAMETERS AND ARGUMENTS
        // So far, the functions we've created execute a task without an input. However, some functions can take inputs and use the inputs to perform a task. 
        // When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called.

        Example:

        function calculateArea(rectWidth, rectHeight) {
            console.log(rectWidth * rectHeight);
        }
        // calculateArea(), computes the area of a rectangle, based on two inputs, width and height. The parameters are specified between the parenthesis as width and height, and inside the function body, they act just like regular variables. width and height act as placeholders for values that will be multiplied together.

        // When calling a function that has parameters, we specify the values in the parentheses that follow the function name. The values that are passed to the function when it is called are called arguments. Arguments can be passed to the function as values or variables.
        calculateArea(10, 6)

        // The order in which arguments are passed and assigned follows the order that the parameters are declared.
        const rectWidth = 10;
        const rectHeight = 6;
        calculateArea(rectWidth, rectHeight);

        // The variables rectWidth and rectHeight are initialized with the values for the height and width of a rectangle before being used in the function call.

        Example:

        function sayThanks(name) {
            console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
        }
        sayThanks('Cole')
        // Prints 'Thank you for your purchase Cole! We appreciate your business.'


    DEFAULT PARAMETERS
        // Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.

        Example:

        1   function greeting(name = 'stranger') {
                console.log(`Hello, ${name}!`)
            }
            
            greeting('Nick') //  Output: Hello, Nick!
            greeting() //  Output: Hello, stranger!


        2   function makeShoppingList(item1, item2, item3) {
                console.log(`Remember to buy ${item1}`);
                console.log(`Remember to buy ${item2}`);
                console.log(`Remember to buy ${item3}`);
            }
            // Imagine that you always purchase milk, bread, and eggs every time you go shopping for groceries. To make creating a grocery list easier, we can assign default values to the parameters in makeShoppingList().

            function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
                console.log(`Remember to buy ${item1}`);
                console.log(`Remember to buy ${item2}`);
                console.log(`Remember to buy ${item3}`);
            }

            makeShoppingList();
            // Prints:   Remember to buy milk
            //           Remember to buy bread
            //           Remember to buy eggs

    
    RETURN
        // When a function is called, the computer will run through the function's code and evaluate the result of calling the function. By default that resulting value is undefined.

        Examples:

        1.  function rectangleArea(width, height) {
                let area = width * height 
            }
            console.log(rectangleArea(5, 7)) //  Prints undefined
            
            // In the example above, the function worked fine, and the computer did calculate the area as 35, but we didn't capture it. We need to capture the result of that function by using the keyword return.
            function rectangleArea(width, height) {
                let area = width * height 
            }
            console.log(rectangleArea(5, 7));
            return area;
            // Prints 35 


        2.  function rectangleArea(width, height) {
                if (width < 0 || height < 0) {
                  return 'You need positive integers to calculate area!';
                }
                return width * height;
            }
            
            // If an argument for width or height is less than 0, then rectangleArea() will return 'You need positive integers to calculate area!'. The second return statement width * height will not run.


    HELPER FUNCTIONS
        // We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. 

        Example:

        // If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could write two functions like:

        function multiplyByNineFifths(number) {
        return number * (9/5);
        };

        function getFahrenheit(celsius) {
        return multiplyByNineFifths(celsius) + 32;
        };

        getFahrenheit(15); //  Returns 59

        // In the example above:
        1. // getFahrenheit() is called and 15 is passed as an argument.
        2. // The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.
        3. // multiplyByNineFifths() takes the argument of 15 for the number parameter.
        4. // The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.
        5. // 27 is returned back to the function call in getFahrenheit().
        6. // getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.
        7. // Finally, 59 is returned back to the function call getFahrenheit(15).


    FUNCTION EXPRESSIONS   
        // Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

        Example:

        const calculateArea = function(widht, height) {
            const area = width * height;
            return area;
        }

        // To declare a function expression:

        1. // Declare a variable to make the variable’s name be the name, or identifier, of your function. Since the release of ES6, it is common practice to use const as the keyword to declare the variable.

        2. // Assign as that variable's value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body.

        
        // To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.

        variableName(argument1, argument2)

        // Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.

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
        // Prints false


    ARROW FUNCTIONS
        // ES6 introduced arrow function syntax, a shorter way to write functions by using the special "fat arrow" () => notation.

        // Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { }.

        Example:

        // without arrow function
        const rectangleArea = function(width, height) {
            let area = width * height;
            return area
        }

        // with arrow function
        const rectangleArea = (width, height) => {
            let area = width * height;
            return area
        }


    CONCISE BODY ARROW FUNCTIONS
        // JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body. We'll explore a few of these techniques below:

        1. // Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.

            zero parameters
            const functionName = () => {};

            one parameter
            const functionName = paramOne => {};

            two or more parameters
            const functionName = (paramOne, paramTwo) => {};

        2. // A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

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

            // Can be refactored to

            const squareNum = num => num * num;

            // Notice the following changes:

            1.  // The parentheses around num have been removed, since it has a single parameter.
            2.  // The curly braces { } have been removed since the function consists of a single-line block.
            3.  // The return keyword has been removed since the function consists of a single-line block.

        
        2.  const plantNeedsWater = (day) => {
            return day === 'Wednesday' ? true : false;
            };
        
            // Can be refactored to

            const plantNeedsWater = day => day === 'Wednesday' ? true : false;
        
}



SCOPE {
// Scope defines where variables can be accessed or referenced. While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context.

    BLOCKS AND SCOPE
        // We've seen blocks used before in functions and if statements. A block is the code found inside a set of curly braces {}. Blocks help us group one or more statements together and serve as an important structural marker for our code.

        Example:
        
        1.  const logSkyColor = () => {
                let color = 'blue'; 
                console.log(color); //  blue 
            };
        // Notice that the function body is actually a block of code.

        2.  if (dusk) {
                let color = 'pink';
                console.log(color); //  pink
            };
        // Notice the block in the if statement.

        3.  const city = 'New York City';

            function logCitySkyline() {
            let skyscraper = 'Empire State Building';
            return 'The stars over the ' + skyscraper + ' in ' + city;
            }
            
            console.log(logCitySkyline());
            // Prints 'The stars over the Empire State Buiding in New York City


    GLOBAL SCOPE
        // In global scope, variables are declared outside of blocks. These variables are called global variables. Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.

        Example:

        const color = 'blue'

        const returnSkyColor = () => {
        return color; //  blue 
        };

        console.log(returnSkyColor()); //  blue
                
        // Even though the color variable is defined outside of the block, it can be accessed in the function block, giving it global scope.
        // In turn, color can be accessed within the returnSkyColor function block.

        Example:

        let satellite = 'The Moon';
        let galaxy = 'The Milky Way';
        let stars = 'North Star';

        function callMyNightSky() {
        return 'Night Sky: ' + satellite + ', ' + stars + ' and ' + galaxy;
        }

        console.log(callMyNightSky());
        // Prints Night Sky: The Moon, North Star and The Milky Way


    BLOCK SCOPE
        // /When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. We say that variable has block scope because it is only accessible to the lines of code within that block.

        // Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.

        // Block scope works like this:

        const logSkyColor = () => {
        let color = 'blue'; 
        console.log(color); //  blue 
        };

        logSkyColor(); //  blue 
        console.log(color); //  ReferenceError

        Notice that:
        1.  // We define a function logSkyColor().
        2.  // Within the function, the color variable is only available within the curly braces of the function.
        3.  // If we try to log the same variable outside the function, throws a ReferenceError.


    SCOPE POLLUTION
        // When you declare global variables, they go to the global namespace. The global namespace allows the variables to be accessible from anywhere in the program. These variables remain there until the program finishes which means our global namespace can fill up really quickly.

        // Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes. Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents. For example, globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.

        Examples:

        A   let num = 50;

            const logNum = () => {
            num = 100; //  Take note of this line of code
            console.log(num);
            };

            logNum(); //  Prints 100
            console.log(num); //  Prints 100

            Notice that:
            1.  // We have a variable num.
            2.  // Inside the function body of logNum(), we want to declare a new variable but forgot to use the let keyword.
            3.  // When we call logNum(), num gets reassigned to 100.
            4.  // The reassignment inside logNum() affects the global variable num.
            5.  // Even though the reassignment is allowed and we won't get an error, if we decided to use num later, we'll unknowingly use the new value of num.

        
        B   const logSkyColor = () => {
                const dusk = true;
                let color = 'blue'; 
                if (dusk) {
                    let color = 'pink';
                    console.log(color); //  pink
                }
                console.log(color); //  blue 
            };
            
            console.log(color); //  ReferenceError

            Notice that:
            1.  // We create a variable dusk inside the logSkyColor() function.
            2.  // After the if statement, we define a new code block with the {} braces. Here we assign a new value to the variable color if the if statement is truthy.
            3.  // Within the if block, the color variable holds the value 'pink', though outside the if block, in the function body, the color variable holds the value 'blue'.
            4.  // While we use block scope, we still pollute our namespace by reusing the same variable name twice. A better practice would be to rename the variable inside the block.

}



ARRAYS {
    // Arrays are JavaScript's way of making lists. Arrays can store any data types (including strings, numbers, and booleans). Like lists, arrays are ordered, meaning each item has a numbered position.

    let concepts = ['element example', 10, true]

    1.  // The array is represented by the square brackets [] and the content inside.
    2.  // Each content item inside an array is called an element.
    3.  // There are three different elements inside the array.
    4.  // Each element inside the array is a different data type.


    ACCESSING ELEMENTS
        // Each element in an array has a numbered position known as its index.
        // Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. 
        // You can also access individual characters in a string using bracket notation and the index. For instance, you can write:

        const hello = 'Hello World';
        console.log(hello[6]);
        //  Output: W

        Example:
                
        const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

        let listItem = famousSayings[0];
        console.log(listItem)               
        // Prints: Fortune favors the brave.
        console.log(famousSayings[2])
        // Prints: Where there is love there is life.
        console.log(famousSayings[3])
        // Prints: Undefined


    UPDATE ELEMENTS
        // Once you have access to an element in an array, you can update its value.
        
        Example:

        let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

        seasons[3] = 'Autumn';
        console.log(seasons); 
        // Output: ['Winter', 'Spring', 'Summer', 'Autumn']


    ARRAYS WITH LET AND CONST
        // Variables declared with let can be reassigned.

        // Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.

        Example:

        let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

        const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
        
        condiments[0] = 'Mayo';
        console.log(condiments)
        // Prints: [ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]
        
        condiments = ['Mayo'];
        console.log(condiments);
        // Prints: [ 'Mayo' ]
                    
        utensils[3] = 'Spoon';
        console.log(utensils);
        // Prints: [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]


    THE .LENGHT PROPERTY
        // One of an array's built-in properties is length and it returns the number of items in the array. 

        Example:

        const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

        console.log(newYearsResolutions.length);
        //  Output: 2


    THE .PUSH() METHOD
        // The .push method allows to add items to the end of an array.

        Example:

        const itemTracker = ['item 0', 'item 1', 'item 2'];

        itemTracker.push('item 3', 'item 4');

        console.log(itemTracker); 
        //  Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];


    THE .POP() METHOD
        // The .pop() method removes the last item of an array.

        Example:

        const newItemTracker = ['item 0', 'item 1', 'item 2'];

        const removed = newItemTracker.pop();

        console.log(newItemTracker); 
        //  Output: [ 'item 0', 'item 1' ]
        console.log(removed);
        //  Output: item 2

        1.  // In the example above, calling .pop() on the newItemTracker array removed item 2 from the end.
        2.  // .pop() does not take any arguments, it simply removes the last element of newItemTracker.
        3.  // .pop() returns the value of the last element. In the example, we store the returned value in a variable removed to be used for later.
        4.  // .pop() is a method that mutates the initial array.

    OTHER ARRAY METHODS

        .shift() // Removes the first item of an array.

            Example:

            const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

            groceryList.shift();

            console.log(groceryList);
            // Prints: [ 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]

        
        .unshift() // Adds a new item to the beginning of an array.

            Example:

            const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

            groceryList.unshift('popcorn');

            console.log(groceryList);
            // Prints: [ 'popcorn', orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]


        .slice() // 'Slices' the array from a given index position to another index position.

            Example:

            const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

            console.log(groceryList.slice(1, 4));
            // Prints: [ 'bananas', 'coffee beans', 'brown rice' ]


        .indexOf() // Finds the index of a particular element in the array.

            Example:

            const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

            const pastaIndex = groceryList.indexOf('pasta');

            console.log(pastaIndex);
            // Prints: 4

    ARRAYS AND FUNCTIONS
        // What happens if we try to change an array inside a function? Does the array keep the change after the function call or is it scoped to inside the function?

        Example:

        const flowers = ['peony', 'daffodil', 'marigold'];

        function addFlower(arr) {
            arr.push('lily');
        }

        addFlower(flowers);

        console.log(flowers); 
        // Prints: ['peony', 'daffodil', 'marigold', 'lily']


        // Let's go over what happened in the example:
        1.  // The flowers array that has 3 elements.
        2.  // The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr.
        3.  // We call addFlower() with an argument of flowers which will execute the code inside addFlower.
        4.  // We check the value of flowers and it now includes the 'lily' element! The array was mutated!

        // When you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well. You might also see this concept explained as pass-by-reference since what we're actually passing the function is a reference to where the variable memory is stored and changing the memory.


        Examples:

        A   const concept = ['arrays', 'can', 'be', 'mutated'];

            function changeArr(arr){
                arr[3] = 'MUTATED';
            }

            changeArr(concept);

            console.log(concept);
            // Prints: [ 'arrays', 'can', 'be', 'MUTATED' ]

        B   const concept = ['arrays', 'can', 'be', 'mutated'];
            
            function removeElement(newArr) {
                newArr.pop()
            }
            
            removeElement(concept);
            
            console.log(concept)
            // Prints: [ 'arrays', 'can', 'be' ] 


    NESTED ARRAYS
        // Earlier we mentioned that arrays can store other arrays. When an array contains another array it is known as a nested array. 

        Example:

        const nestedArr = [[1], [2, 3]];

        console.log(nestedArr[1]); 
        //  Output: [2, 3]

        console.log(nestedArr[1][0]); 
        //  Output: 2

        // To access the nested arrays we can use bracket notation with the index value, just like we did to access any other element:
        // If we wanted to access the elements within the nested array we can chain, or add on, more bracket notation with index values.

}



LOOPS {
    // A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached. 
    
    // When using loops the generic term iterate simply means "to repeat".


    REPEATING TASKS MANUALLY

        Example:

        let vacationSpots = ['Lisbon', 'Dubai', 'Snow'];

        console.log(vacationSpots[0]);
        console.log(vacationSpots[1]);
        console.log(vacationSpots[2]);
        // Prints: Lisbon
        //         Dubai
        //         Snow

        // Now imagine that the vacation list had 100 places on it— logging each array element to the console by hand would be a tedious task!


    THE FOR LOOP
        // The typical for loop includes an iterator variable that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. Iterator variables can have any name, but it’s best practice to use a descriptive variable name.

        // A for loop contains three expressions separated by ; inside the parentheses:

        1.  // an initialization starts the loop and can also be used to declare the iterator variable.
        2.  // a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
        3.  // an iteration statement is used to update the iterator variable on each loop.

        Example:

        for (let counter = 0; counter < 4; counter++) {
            console.log(counter);
        };
        // Prints:   0
        //           1
        //           2
        //           3

        // Let’s break down the example:

        1.  // The initialization is let counter = 0, so the loop will start counting at 0.
        2.  // The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, counter, is less 4.
        3.  // The iteration statement is counter++. This means after each loop, the value of counter will increase by 1. For the first iteration counter will equal 0, for the second iteration counter will equal 1, and so on.
        4.  // The code block is inside of the curly braces, console.log(counter), will execute until the condition evaluates to false. The condition will be false when counter is greater than or equal to 4 — the point that the condition becomes false is sometimes called the stop condition.

        // This for loop makes it possible to write 0, 1, 2, and 3 programmatically.


    LOOPING IN REVERSE
        // To run a backward for loop, we must:

        1.  // The set the iterator variable to the highest desired value in the initialization expression.
        2.  // Set the stopping condition for when the iterator variable is less than the desired amount.
        3.  // The iterator should decrease in intervals after each iteration.

        Example:

        for (let counter = 3; counter >= 0; counter--){
            console.log(counter)
        };
        // /Prints   3
        //           2
        //           1
        //           0


    LOOPING THROUGH ARRAYS
        // To loop through each element in an array, a for loop should use the array's .length property in its condition.


        Example:
        A   const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];

            for (let i = 0; i < animals.length; i++) {
                console.log(animals[i]);
            };
            // Prints:  Grizzly Bear
            //          Sloth
            //          Sea Lion

            // /In the loop above, we've named our iterator variable i. When we use i to iterate through arrays we can think of it as being short-hand for the word index. 
            // Notice how our stopping condition checks that i is less than animals.length. Remember that arrays are zero-indexed, the index of the last element of an array is equivalent to the length of that array minus 1. If we tried to access an element at the index of animals.length we will have gone too far!

        B   const vacationSpots = ['Bali', 'Paris', 'Tulum'];

            for (let i = 0; i < vacationSpots.length; i++ ){
                console.log('I would love to visit ' + vacationSpots[i]);
            };
            // Prints: I would love to visit Bali
            //         I would love to visit Paris
            //         I would love to visit Tulum


    NESTED LOOPS
        // When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.

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

            // For each element in the outer loop array, myArray, the inner loop will run in its entirety comparing the current element from the outer array, myArray[i], to each element in the inner array, yourArray[j]. When it finds a match, it prints a string to the console.


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

            1.  // Make a variable called bobsFollowers and set it equal to an array with four strings representing the names of Bob's friends.
            2.  // Make a variable called tinasFollowers and set it equal to an array with three strings representing the names of Tina's friends. Make exactly two of these the same as two of the friends in the bobsFollowers array.
            3.  // Create a third variable named mutualFollowers and set it to an empty array.
            4.  // Create a nested loop that iterates through bobsFollowers as the array for the outer loop, and tinasFollowers as the array for the inner array. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.


    THE WHILE LOOP
        // Let's start by converting a for loop into a while loop:

        //  A for loop that prints 1, 2, and 3
        for (let counterOne = 1; counterOne < 4; counterOne++){
            console.log(counterOne);
        }
        
        //  A while loop that prints 1, 2, and 3
        let counterTwo = 1;
        while (counterTwo < 4) {
            console.log(counterTwo);
            counterTwo++;
        }

        1.  // The counterTwo variable is declared before the loop. We can access it inside our while loop since it's in the global scope.
        2.  // We start our loop with the keyword while followed by our stopping condition, or test condition. This will be evaluated before each round of the loop. While the condition evaluates to true, the block will continue to run. Once it evaluates to false the loop will stop.
        3.  // Next, we have our loop's code block which prints counterTwo to the console and increments counterTwo.

        // What would happen if we didn't increment counterTwo inside our block? If we didn't include this, counterTwo would always have its initial value, 0. That would mean the testing condition counterTwo < 4 would always evaluate to true and our loop would never stop running! This is called an infinite loop and it's something we always want to avoid.

        Example:
        const cards = ['diamond', 'spade', 'heart', 'club'];
        let currentCard
        while (currentCard !== 'spade') {
            currentCard = cards[Math.floor(Math.random() * 4)];
            console.log(currentCard)
        }

        // Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We'll use this number to index the cards array, and assign the value of currentCard to a random element from that array. 
        s// The while loop repeats as long as the randomly obtained card is not 'spade'


    DO...WHILE STATEMENTS
        // A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met. 

        Example:

        let countString = '';
        let i = 0;

        do {
            countString = countString + i; i++;
        } while (i < 5);

        console.log(countString);

        // In this example, the code block makes changes to the countString variable by appending the string form of the i variable to it. First, the code block after the do keyword is executed once. Then the condition is evaluated. If the condition evaluates to true, the block will execute again. The looping stops when the condition evaluates to false.

        // Note that the while and do...while loop are different! Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.

        const firstMessage = 'I will print!';
        const secondMessage = 'I will not print!'; 

        //  A do while with a stopping condition that evaluates to false
        do {
            console.log(firstMessage)
        } while (true === false);

        //  A while loop with a stopping condition that evaluates to false
        while (true === false){
            console.log(secondMessage)
        };


    THE BREAK KEYWORD
        // In our code, when we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn't been met, we can use the keyword break.

        Example:

        A   for (let i = 0; i < 99; i++) {
                if (i > 2 ) {
                break;
                }
                console.log('Banana.');
            }
            
            console.log('Orange you glad I broke out the loop!');
            // Prints:  Banana.
            //          Banana.
            //          Banana.
            //          Orange you glad I broke out the loop!


        B   const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

            for (let i = 0; i < rapperArray.length; i++){
                console.log(rapperArray[i]);
                if (rapperArray[i] ===  'Notorious B.I.G.'){
                    break;
                }
            }
            console.log("And if you don't know, now you know.");
            // Prints:  Lil' Kim
            //          Jay-Z
            //          Notorious B.I.G.
            //          And if you don't know, now you know.

            1.  // Log each element from rapperArray in a for loop with the iterator variable rapperArrayIndex.
            2.  // After the for loop, log the string "And if you don't know, now you know." to the console. Note: since there's a single quote character, ', in our string, we can use double quotes around the string to make sure character prints.
            3.  // Add a break inside your loop's block that breaks out of the loop if the element at the current index in the rapperArray is 'Notorious B.I.G.'.

}



HIGHER-ORDER FUNCTIONS {
    // Higher-order functions are functions that accept other functions as arguments and/or return functions as output. This enables us to build abstractions on other abstractions, just like "We hosted a birthday party" is an abstraction that may build on the abstraction "We made a cake."

    FUNCTIONS AS DATA
        // JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.

        Example:

        const announceThatIAmDoingImportantWork = () => {
            console.log("I’m doing very important work!");
        };

        // This function has an annoyingly long name that hurts the readability of any code in which it's used.

        // We can re-assign the function to a variable with a suitably short name:

        const busy = announceThatIAmDoingImportantWork;

        busy(); // This function call barely takes any space!

        // busy is a variable that holds a reference to our original function. If we could look up the address in memory of busy and the address in memory of announceThatIAmDoingImportantWork they would point to the same place. Our new busy() function can be invoked with parentheses as if that was the name we originally gave our function.

        // Notice how we assign announceThatIAmDoingImportantWork without parentheses as the value to the busy variable. We want to assign the value of the function itself, not the value it returns when invoked.

        // In JavaScript, functions are first class objects, this means that like other objects you've encountered, JavaScript functions can have properties and methods.

        // Since functions are a type of object, they have properties such as .length and .name and methods such as .toString().

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
        
        console.log(is2p2.name); // Prints: checkThatTwoPlusTwoEqualsFourAMillionTimes


    FUNCTIONS AS PARAMETERS
        // We can also pass functions (into other functions) as parameters. 

        // A higher-order function is a function that either accepts functions as parameters, returns a function, or both! We call the functions that get passed in as parameters and invoked callback functions because they get called during the execution of the higher-order function.

        // When we pass a function in as an argument to another function, we don't invoke it. Invoking the function would evaluate to the return value of that function call. With callbacks, we pass in the function itself by typing the function name without the parentheses (that would evaluate to the result of calling the function):

        const timeFuncRuntime = funcParameter => {
            let t1 = Date.now();
            funcParameter();
            let t2 = Date.now();
            return t2 - t1;
        }
         
        const addOneToOne = () => 1 + 1;
        
        timeFuncRuntime(addOneToOne);

        1.  // We wrote a higher-order function, timeFuncRuntime(). It takes in a function as an argument, saves a starting time, invokes the callback function, records the time after the function was called, and returns the time the function took to run by subtracting the starting time from the ending time.

        2.  // This higher-order function could be used with any callback function which makes it a potentially powerful piece of code.

        3.  // We then invoked timeFuncRuntime() first with the addOneToOne() function - note how we passed in addOneToOne and did not invoke it.

        timeFuncRuntime(() => {
            for (let i = 10; i>0; i--){
                console.log(i);
            }
        });

        // In this example, we invoked timeFuncRuntime() with an anonymous function that counts backwards from 10. Anonymous functions can be arguments too!

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

        1.  // Save a variable, time2p2. Assign as its value the result of invoking the timeFuncRuntime() function with the checkThatTwoPlusTwoEqualsFourAMillionTimes() function.

        const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

        2.  // Write a higher-order function, checkConsistentOutput(). This function should have two parameters: a function and a value. It should call the argument function with the value two times. If the callback function produces the same result twice, it should return the result of the function call, otherwise, it should return the string 'This function returned inconsistent results'

        const checkConsistentOutput = (func, val) => {
            let firstTry = func(val);
            let secondTry = func(val);
            if (firstTry === secondTry) {
                return firstTry
            } else {
                return 'This function returned inconsistent results'
            }
        };

        3.  // Invoke your checkConsistentOutput() with the addTwo() function we wrote and a number as arguments.

        checkConsistentOutput(addTwo, 10);

}


ITERATORS {
    // Besides the for loop, we also have access to built-in array methods which make looping easier.

    // The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as iterators. Iterators are methods called on arrays to manipulate elements and return values.

    Examples:

    .forEach() {

        const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

        artists.forEach(artist => {
            console.log(artist + ' is one of my favorite artists.');
        });
        // Prints: Picasso is one of my favorite artists.
        //         Kahlo is one of my favorite artists.
        //         Matisse is one of my favorite artists.
        //         Utamaro is one of my favorite artists.
    }

    
    .map() {

        A   const numbers = [1, 2, 3, 4, 5];

            const squareNumbers = numbers.map(number => {
                return number * number;
            });
            
            console.log(squareNumbers); // Prints:  [ 1, 4, 9, 16, 25 ]


        B   const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

            const secretMessage = animals.map(animal => animal[0]);
            
            console.log(secretMessage.join('')); // Prints: HelloWorld

            // Used .map() to create a new array that contains the first character of each string in the animals array. 
            // Saved the new array to a const variable named secretMessage.


        C   const bigNumbers = [100, 200, 300, 400, 500];

            const smallNumbers = bigNumbers.map(num => num/100);
            
            console.log(smallNumbers); // Prints:  [ 1, 2, 3, 4, 5 ]

            // Used .map() to divide all the numbers in bigNumbers by 100.
            // Saved the returned values to a variable declared with const called smallNumbers.

    }


    .filter() {

        A   const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

            const onlyNumbers = things.filter(thing => {
                return typeof thing === 'number';
            });
            
            console.log(onlyNumbers); // Prints:  [ 5, 3.14, 100 ]


        B   const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

            const shortWords = words.filter(word => {
                return word.length < 6;
            });

            console.log(words); // Prints: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
            console.log(shortWords); // Prints: ['chair', 'music', 'brick', 'pen', 'door']

            1.  // words is an array that contains string elements.
            2.  // const shortWords = declares a new variable that will store the returned array from invoking .filter().
            3.  // The callback function is an arrow function has a single parameter, word. Each element in the words array will be passed to this function as an argument.
            4.  // word.length < 6; is the condition in the callback function. Any word from the words array that has fewer than 6 characters will be added to the shortWords array.

        
        C   const randomNumbers = [375, 200, 3.14, 7, 13, 852];

            const smallNumbers = randomNumbers.filter(num => {
                return num < 250;
            });
            
            console.log(smallNumbers); // Prints: [ 200, 3.14, 7, 13 ]

            // Called the .filter() method on randomNumbers to return values that are less than 250. 
            // Saved them to a new array called smallNumbers, declared with const.


        D   const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
            
            const longFavoriteWords = favoriteWords.filter(word => {
            return word.length > 7;
            })
            console.log(longFavoriteWords); // Prints: [ 'nostalgia', 'hyperbole', 'esoteric' ]

            // Invoked .filter() on the favoriteWords array to return elements that have more than 7 characters.
            // Saved the returned array to a const variable named longFavoriteWords.

    }


    THE .findIndex() METHOD {
        // Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.

        Example:

        A   const jumbledNums = [123, 25, 78, 5, 9]; 

            const lessThanTen = jumbledNums.findIndex(num => {
                return num < 10;
            });

            1.  // jumbledNums is an array that contains elements that are numbers.
            2.  // const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().
            3.  // The callback function is an arrow function has a single parameter, num. Each element in the jumbledNums array will be passed to this function as an argument.
            4.  // num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition.

            console.log(lessThanTen); //  Output: 3

            console.log(jumbledNums[3]); //  Output: 5

            // The element in index 3 is the number 5. This makes sense since 5 is the first element that is less than 10.

            // If there isn't a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.

            const greaterThan1000 = jumbledNums.findIndex(num => {
                return num > 1000;
            });
            
            console.log(greaterThan1000); //  Output: -1


        B   const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

            1. // Invoke .findIndex() on the the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.

            const foundAnimal = animals.findIndex(animal => {
                return animal === 'elephant';
            });
            
            2.  // Call .findIndex() on the animals array return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.
            const startsWithS = animals.findIndex(animal => {
                return animal[0] === 's' ? true : false;
            });

    }
        
        
    THE .reduce() METHOD {
        // The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.

        Example:

        const numbers = [1, 2, 4, 10];

        const summedNums = numbers.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        })

        console.log(summedNums) //  Output: 17

        // let's go over the use of .reduce() from the example above:

        1.  // numbers is an array that contains numbers.
        2.  // summedNums is a variable that stores the returned value of invoking .reduce() on numbers.
        3.  // numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument.
        4.  // The callback function has two parameters, accumulator and currentValue. The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element.
        5.  // As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration, currentValue takes on the value of the current element in the looping process.

        // The .reduce() method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!).

        Example:

        A   const numbers = [1, 2, 4, 10];

            const summedNums = numbers.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            }, 100)  //  <- Second argument for .reduce()

            console.log(summedNums); //  Output: 117


        B   const newNumbers = [1, 3, 5, 7];

            const newSum = newNumbers.reduce((accumulator, currentValue) => {
            console.log('The value of accumulator: ', accumulator);
            console.log('The value of currentValue: ', currentValue);
            return accumulator + currentValue;
            }, 10)
            
            console.log(newSum)
            // Prints  The value of accumulator:  10
            //         The value of currentValue:  1
            //         The value of accumulator:  11
            //         The value of currentValue:  3
            //         The value of accumulator:  14
            //         The value of currentValue:  5
            //         The value of accumulator:  19
            //         The value of currentValue:  7
            //         26

    }


    OTHER ITERATORS {

        const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

        1.  // Check if there are words that are fewer than 6 characters long.
        
            console.log(words.some(word => {
                return word.length < 6;
            }));
            // Prints: true


        2.  // Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.
        
            const interestingWords = words.filter((word) => {
                return word.length > 5
            });
        
        
        3.  //  Check if every element has more than 5 characters
        
            console.log(interestingWords.every((word) => {return word.length > 5}));

    }


    CHOOSING THE RIGHT ITERATOR {

        .forEach()  
        // is used to execute the same code on every element in an array but does not change the array and returns undefined.

        .map()  
        // executes the same code on every element in an array and returns a new array with the updated elements.

        .filter()
        // checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.

        .findIndex() 
        // returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.

        .reduce()
        // iterates through an array and takes the values of the elements and returns a single value.

        // All iterator methods takes a callback function that can be pre-defined, or a function expression, or an arrow function.
        
        // You can visit the Mozilla Developer Network to learn more about iterator methods (and all other parts of JavaScript!).

    }

}


OBJECTS {
    // Objects are one of the seven types of data types in Javascript.

    // At their core, JavaScript objects are containers storing related data and functionality, but that deceptively simple task is extremely powerful in practice.


    CREATING OBJECT LITERALS {
        // Objects can be assigned to variables just like any JavaScript type. We use curly braces, {}, to designate an object literal:

        let spaceship = {}; //  spaceship is an empty object

        // We fill an object with unordered data. This data is organized into key-value pairs. A key is like a variable name that points to a location in memory that holds a value.

        // A key's value can be of any data type in the language including functions or other objects.

        // We make a key-value pair by writing the key's name, or identifier, followed by a colon and then the value. We separate each key-value pair in an object literal with a comma (,). Keys are strings, but when we have a key that does not have any special characters in it, JavaScript allows us to omit the quotation marks:

        let spaceship = {
            'Fuel Type': 'diesel',
            color: 'silver' 
        };

        // The spaceship object has two properties Fuel Type and color. 'Fuel Type' has quotation marks because it contains a space character.

    }
            
    ACCESSING PROPERTIES {

        The dot notation
            // With property dot notation, we write the object's name, followed by the dot operator and then the property name (key):

            let spaceship = {
            homePlanet: 'Earth',
            color: 'silver'
            };

            spaceship.homePlanet; //  Returns 'Earth',
            spaceship.color; //  Returns 'silver',

            // If we try to access a property that does not exist on that object, undefined will be returned.


        Bracket notation
            // The second way to access a key's value is by using bracket notation, [ ].

            // We've used bracket notation when indexing an array:
            
            ['A', 'B', 'C'][0]; //  Returns 'A'

            // To use bracket notation to access an object's property, we pass in the property name (key) as a string.

            
            // We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.

            let spaceship = {
            'Fuel Type': 'Turbo Fuel',
            'Active Duty': true,
            homePlanet: 'Earth',
            numCrew: 5
            };

            spaceship['Active Duty'];   //  Returns true
            spaceship['Fuel Type'];   //  Returns  'Turbo Fuel'
            spaceship['numCrew'];   //  Returns 5
            spaceship['!!!!!!!!!!!!!!!'];   //  Returns undefined


            // With bracket notation you can also use a variable inside the brackets to select the keys of an object. This can be especially helpful when working with functions:

            let returnAnyProp = (objectName, propName) => objectName[propName];

            returnAnyProp(spaceship, 'homePlanet'); //  Returns 'Earth'
            
            // If we tried to write our returnAnyProp() function with dot notation (objectName.propName) the computer would look for a key of 'propName' on our object and not the value of the propName parameter.


            Example:

            let spaceship = {
                'Fuel Type' : 'Turbo Fuel',
                'Active Mission' : true,
                homePlanet : 'Earth', 
                numCrew: 5
            };
            
            let propName =  'Active Mission';
            
            
            let isActive = spaceship['Active Mission'];

            console.log(isActive);  // Prints: true
            
            console.log(spaceship[propName]);  // Prints: true

    }


    PROPERTY ASSIGNMENT {
        // Objects are mutable meaning we can update them after we create them!

        // We can use either dot notation, ., or bracket notation, [], and the assignment operator, = to add new key-value pairs to an object or change an existing property.

        Example:

        spaceship['Fuel Type'] = 'vegetable oil';
        spaceship.color = 'gold';

        // One of two things can happen with property assignment:

        1.  // If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
        2.  // If there was no property with that name, a new property will be added to the object.
        
        // It's important to know that although we can't reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there.

        const spaceship = {type: 'shuttle'};

        spaceship = {type: 'alien'}; //  TypeError: Assignment to constant variable.
        spaceship.type = 'alien'; //  Changes the value of the type property
        spaceship.speed = 'Mach 5'; //  Creates a new key of 'speed' with a value of 'Mach 5'


        // You can delete a property from an object with the delete operator.

        const spaceship = {
            'Fuel Type': 'Turbo Fuel',
            homePlanet: 'Earth',
            mission: 'Explore the universe', 
            'Secret Mission': 'Explore Mars'
        };

        delete spaceship.mission;  //  Removes the mission property
        delete spaceship['Secret Mission']  // Removes 'Secret Mission' property

    }


    METHODS {
        // When the data stored on an object is a function we call that a method. 
        // A property is what an object has, while a method is what an object does.

        // We can include methods in our object literals by creating ordinary, comma-separated key-value pairs. The key serves as our method's name, while the value is an anonymous function expression.

        const alienShip = {
            invade: function () { 
                console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
            }
        };

        // With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
        
        const alienShip = {
            invade () { 
                console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
            }
        };

        // Object methods are invoked by appending the object's name with the dot operator followed by the method name and parentheses:

        alienShip.invade(); //  Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'


        Example:

        let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

        1.  // Create an alienShip object. It should contain a method .retreat() which will console.log() the retreatMessage.

            let alienShip = {
                retreat() {
                    console.log(retreatMessage)
                },
            };

        2. // Add another method to your object literal. This method, .takeOff(), should console.log() the string 'Spim... Borp... Glix... Blastoff!'.

            let alienShip = {
                retreat() {
                    console.log(retreatMessage)
                },
                takeOff() {
                    console.log('Spim... Borp... Glix... Blastoff!')
                }
            };

            3.  // Invoke your two methods: first .retreat() then .takeOff().

            alienShip.retreat();

            alienShip.takeOff();

    }


    NESTED OBJECTS {
        // In application code, objects are often nested— an object might have another object as a property which in turn could have a property that's an array of even more objects!

        // In our spaceship object, we want a crew object. This will contain all the crew members. Each of those crew members are objects themselves. They have properties like name, and degree, and they each have unique methods based on their roles. We can also nest other objects in the spaceship such as a telescope or nest details about the spaceship's computers inside a parent nanoelectronics object.

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

        // We can chain operators to access nested properties. We'll have to pay attention to which operator makes sense to use in each layer. It can be helpful to pretend you are the computer and evaluate each expression from left to right so that each operation starts to feel a little more manageable.

        spaceship.nanoelectronics['back-up'].battery; //  Returns 'Lithium'


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
          
        1.  // Create a variable capFave and assign the captain's favorite food (the element in the 0th index of her 'favorite foods' array) to it.

        let capFave = spaceship.crew.captain['favorite foods'][0];
        

        2.  // Assign an array of objects to the passengers property. These objects should represent the spaceship's passengers as individual objects.

        passengers: [{name: 'Space Dog'}],

        3.  // Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). Make sure to use bracket and dot notation to get the passenger object through nested access (don't just copy the object into the variable!)

        let firstPassenger = spaceship.passengers[0];

    }


    PASS BY REFERENCE {
        // Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object. As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).

        const spaceship = {
            homePlanet : 'Earth',
            color : 'silver'
        };

        let paintIt = obj => {
            obj.color = 'glorious gold'
        };
        
        paintIt(spaceship);
        
        spaceship.color //  Returns 'glorious gold'

        // Our function paintIt() permanently changed the color of our spaceship object. However, reassignment of the spaceship variable wouldn't work in the same way:

        let spaceship = {
            homePlanet : 'Earth',
            color : 'red'
        };

        let tryReassignment = obj => {
            obj = {
            identified : false, 
            'transport type' : 'flying'
            }
            console.log(obj) //  Prints {'identified': false, 'transport type': 'flying'}
        
        };

        tryReassignment(spaceship) //  The attempt at reassignment does not work.
        spaceship //  Still returns {homePlanet : 'Earth', color : 'red'};
        
        spaceship = {
            identified : false, 
            'transport type': 'flying'
        }; //  Regular reassignment still works.

        // Let's look at what happened in the code example:
        
        1.  // We declared this spaceship object with let. This allowed us to reassign it to a new object with identified and 'transport type' properties with no problems.
        2  // When we tried the same thing using a function designed to reassign the object passed into it, the reassignment didn't stick (even though calling console.log() on the object produced the expected result).
        3.  // When we passed spaceship into that function, obj became a reference to the memory location of the spaceship object, but not to the spaceship variable. This is because the obj parameter of the tryReassignment() function is a variable in its own right. The body of tryReassignment() has no knowledge of the spaceship variable at all!
        4.  // When we did the reassignment in the body of tryReassignment(), the obj variable came to refer to the memory location of the object {'identified' : false, 'transport type' : 'flying'}, while the spaceship variable was completely unchanged from its earlier value.

        Example: 

        let spaceship = {
            'Fuel Type' : 'Turbo Fuel',
            homePlanet : 'Earth'
        };
        

        1.  // Write a function greenEnergy() that has an object as a parameter and sets that object's 'Fuel Type' property to 'avocado oil'.
        
        let greenEnergy = obj => {
        obj['Fuel Type'] = 'avocado oil';
        }


        2.  // Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object's disabled property to true.
        
        let remotelyDisable = obj => {
        obj.disabled = true;
        }
        

        3.  // Call your two functions with the spaceship object in the code editor, then console.log() the spaceship object to confirm those properties were changed/added.

        greenEnergy(spaceship);
        
        remotelyDisable(spaceship);
        
        console.log(spaceship)  // Prints: { 'Fuel Type': 'avocado oil', homePlanet: 'Earth', disabled: true }

    }


    LOOPING THROUGH OBJECTS {
        // JavaScript has given us alternative solution for iterating through objects with the for...in syntax.

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

        //  for...in
        for (let crewMember in spaceship.crew) {
          console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
        };

        // Our for...in will iterate through each element of the spaceship.crew object. In each iteration, the variable crewMember is set to one of spaceship.crew's keys, enabling us to log a list of crew members' role and name.


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
        
        1.  // Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew roles and names in the following format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.
        
        for (let crewMember in spaceship.crew) {
          console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
        };

        2.  // Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew names and degrees in the following format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.
        
        for (let crewMember in spaceship.crew) {
          console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
        };

    }

}



ADVANCED OBJECTS {

    THE THIS KEYWORD {
        // Objects are collections of related data and functionality. We store that functionality in methods on our objects:

        const goat = {
            dietType: 'herbivore',
            makeSound() {
              console.log('baaa');
            }
        };

        // In our goat object we have a .makeSound() method. We can invoke the .makeSound() method on goat.

        goat.makeSound(); //  Prints baaa

        // What if we wanted to add a new method to our goat object called .diet() that prints the goat's dietType?

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
        //  Output will be "ReferenceError: dietType is not defined"
        // This happens because inside the scope of the .diet() method, we don't automatically have access to other properties of the goat object.

        // Here's where the this keyword comes to the rescue. If we change the .diet() method to use the this, the .diet() works! :

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
        //  Output: herbivore

        // The this keyword references the calling object which provides access to the calling object's properties. In the example above, the calling object is goat and by using this we're accessing the goat object itself, and then the dietType property of goat by using property dot notation.

        Example:

        1. // Create an object called robot. Add a property of model and assign to it a value of '1E78V2'. Add another property, energyLevel and assign to it a value of 100.

        const robot = {
            model: '1E78V2',
            energyLevel: 100,
        };

        2. // Inside the robot object, add a method named provideInfo. Inside the body of provideInfo(), return the following string by using interpolation: I am MODEL and my current energy level is ENERGYLEVEL.
        // Replace 'MODEL' and 'ENERGYLEVEL' with the calling object's model and energyLevel property. Remember, to get the access to the calling object's properties inside a method, you have to use the this keyword!

        const robot = {
            model: '1E78V2',
            energyLevel: 100,
            provideInfo() { 
                return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
            }
        };

        3.  // Check if .provideInfo() has access to the internal properties of robot. Log the result of calling .provideInfo() method on robot to the console.

        const robot = {
            model: '1E78V2',
            energyLevel: 100,
            provideInfo() { 
                return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
            }
        };
          
        console.log(robot.provideInfo());  // Prints: I am 1E78V2 and my current energy level is 100.
    }


    ARROW FUNCTIONS AND THIS {
        // We saw in the previous exercise that for a method, the calling object is the object the method belongs to. If we use the this keyword in a method then the value of this is the calling object. However, it becomes a bit more complicated when we start using arrow functions for methods.

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
        
        goat.diet(); //  Prints undefined

        // So what happened? Notice that in the .diet() is defined using an arrow function.

        // Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. In the code snippet above, the value of this is the global object, or an object that exists in the global scope, which doesn't have a dietType property and therefore returns undefined.
    }


    PRIVACY {
        // Accessing and updating properties is fundamental in working with objects. However, there are cases in which we don't want other code simply accessing and updating an object's properties. When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.

        // Certain languages have privacy built-in for objects, but JavaScript does not have this feature. Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered.

        Example:

        const bankAccount = {
            _amount: 1000
        }
        //  _amount is not intended to be directly manipulated. WE can, however, reassign it:
        bankAccount._amount = 1000000;

        // Later, we'll cover the use of methods called getters and setters. Both methods are used to respect the intention of properties prepended, or began, with _. Getters can return the value of internal properties and setters can safely reassign property values.

        Example:

        const robot = {
            _energyLevel: 100,
            recharge(){
              this._energyLevel += 30;
              console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
            }
        };

        1.  // Reassign the _energyLevel property to 'high'

            robot._energyLevel = 'high';

        2.  // Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel. Call .recharge() on robot.

            robot.recharge();
            // /Prints: Recharged! Energy is currently at high30%.
    }


    GETTERS {
        // Getters are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property! 

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
        
        //  To call the getter method: 
        person.fullName; //  'John Doe'

        // Notice that:

        1.  // We use the get keyword followed by a function.
        2.  // We use an if...else conditional to check if both _firstName and _lastName exist (by making sure they both return truthy values) and then return a different value depending on the result.
        3.  // We can access the calling object's internal properties using this. In fullName, we're accessing both this._firstName and this._lastName.
        4.  // In the last line we call fullName on person. In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we're accessing a property.

        
        // Now that we've gone over syntax, let's discuss what some notable advantages of using a getter method:

        1.  // Getters can perform an action on the data when getting a property.
        2.  // Getters can return different values using conditionals.
        3.  // In a getter, we can access the properties of the calling object using this.
        4.  // The functionality of our code is easier for other developers to understand.
        5.  // Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. If we do so, then calling the method will result in an infinite call stack error. One workaround is to add an underscore before the property name like we did in the example above.

        Example:

        const robot = {
            _model: '1E78V2',
            _energyLevel: 100,
        };
          
        1.  // In robot, create a getter method named energyLevel using the get keyword. Leave function body blank for now.

        const robot = {
            _model: '1E78V2',
            _energyLevel: 100,
            get energyLevel() {
                
            }
        };

        2.  // Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator. If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel.

        const robot = {
            _model: '1E78V2',
            _energyLevel: 100,
            get energyLevel() {
                if(typeof this._energyLevel === 'number') {
                    return 'My current energy level is ' + this._energyLevel
                } 
            }
        };

        3.  // If this._energyLevel isn't a number it could be that the _energyLevel property was altered. Let's add a default return statement for when such a scenario arises
        // Add an else statement that returns 'System malfunction: cannot retrieve energy level'.
            
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

        4.  // Log the result of calling the getter method energyLevel on robot to the console. (Notice that the method will return a formatted response rather than just accessing a property!)

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
        // Prints: My current energy level is 100
    }


    SETTERS {
        // Along with getter methods, we can also create setter methods which reassign values of existing properties within an object.

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

        // Notice that:
        1.  // We can perform a check for what value is being assigned to this._age.
        2.  // When we use the setter method, only values that are numbers will reassign this._age
        3.  // There are different outputs depending on what values are used to reassign this._age.

        Then to use the setter method:

        person.age = 40;
        console.log(person._age); //  Logs: 40
        person.age = '40'; //  Logs: You must assign a number to age

        // Setter methods like age do not need to be called with a set of parentheses. Syntactically, it looks like we're reassigning the value of a property.

        // Like getter methods, there are similar advantages to using setter methods that include checking input, performing actions on properties, and displaying a clear intention for how the object is supposed to be used. Nonetheless, even with a setter method, it is still possible to directly reassign properties. For example, in the example above, we can still set ._age directly:

        person._age = 'forty-five'
        console.log(person._age); //  Prints forty-five


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

        1.  // Add a setter method named numOfSensors using the set keyword. Provide a parameter of num. Leave the function body empty for now.

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

        2.  // Add a check to see if num is a number using the typeof operator.
        // num should also be greater than or equal to 0.
        // If both conditions are met, reassign this._numOfSensors to num.

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

        3.  // Add an else that logs 'Pass in a number that is greater than or equal to 0' to the console.

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

        4.  // Use the numOfSensors setter method on robot to assign _numOfSensors to 100. To check that the setter method worked, console.log() robot.numOfSensors.

        robot.numOfSensors = 100;
        console.log(robot.numOfSensors); // Prints: 100

    }


    FACTORY FUNCTIONS {
        // A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned.

        Example:

        const monsterFactory = (name, age, energySource, catchPhrase) => {
            return { 
                name: name,
                age: age, 
                energySource: energySource,
                scare() {
                    console.log(catchPhrase);
                } 
            }
        };

        // In the monsterFactory function above, it has four parameters and returns an object that has the properties: name, age, energySource, and scare(). To make an object that represents a specific monster like a ghost, we can call monsterFactory with the necessary arguments and assign the return value to a variable:

        const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
        ghost.scare(); //  'BOO!'

        // With monsterFactory in place, we don't have to create an object literal every time we need a new monster. Instead, we can invoke the monsterFactory function with the necessary arguments to make a monster for us!

        Example:

        1.  // Create a factory function named robotFactory that has two parameters model and mobile. Make the function return an object. In the object, add a key of model with the value of the model parameter. Add another property that has a key of mobile with a value of the mobile parameter. Then add a method named beep without a parameter that will log 'Beep Boop' to the console.

        const robotFactory= (model, mobile) => {
            return {
                model: model,
                mobile: mobile,
                beep() {
                    console.log('Beep Boop')
                }
            }
        }

        2.  // Use your factory function by declaring a const variable named tinCan. Assign to tinCan the value of calling robotFactory with the first argument of 'P-500' and the second argument of true.

        const tinCan = robotFactory('P-500', true);

        3.  // Let's now check what tinCan can do! Call .beep() on tinCan. You should see 'Beep Boop' printed to the console which means the factory function produced a robot object! 

        const robotFactory = (model, mobile) => {
            return {
                model: model,
                mobile: mobile,
                beep() {
                    console.log('Beep Boop')
                }
            }
        }
          
        const tinCan = robotFactory('P-500', true);
          
        tinCan.beep(); // Prints: Beep Boop 
    }


    PROPERTY VALUE SHORTHAND {
        // ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.
        
        // In the previous exercise, we created a factory function that helped us create objects. We had to assign each property a key and value even though the key name was the same as the parameter name we assigned to it.

        // If we had to include more properties, that process would quickly become tedious! But we can use a destructuring technique, called property value shorthand, to save ourselves some keystrokes. The example below works exactly like the example above:

        const monsterFactory = (name, age) => {
            return { 
                name,
                age 
            }
        };

        // Notice that we don't have to repeat ourselves for property assignments!

        Example:

        function robotFactory(model, mobile) {
            return {
                model: model,
                mobile: mobile,
                beep() {
                    console.log('Beep Boop');
                }
            }
        }

        1.  // Use the property value shorthand and refactor the factory function.

        function robotFactory(model, mobile) {
            return {
                model,
                mobile,
                beep() {
                    console.log('Beep Boop');
                }
            }
        }

        //  To check that the property value shorthand technique worked:
        const newRobot = robotFactory('P-501', false)
        console.log(newRobot.model)
        console.log(newRobot.mobile)

        // Prints: P-501
        //         false

    }


    DESTRUCTURED ASSIGNMENT {
        // We often want to extract key-value pairs from objects and save them as properties. Take for example the following object:

        const vampire = {
            name: 'Dracula',
            residence: 'Transylvania',
            preferences: {
                day: 'stay inside',
                night: 'satisfy appetite'
            }
        };

        // If we wanted to extract the residence property as a variable, we could using the following code:

        const residence = vampire.residence; 
        console.log(residence); //  Prints 'Transylvania'

        // However, we can also take advantage of a destructuring technique called destructured assignment to save ourselves some keystrokes. In destructured assignment we create a variable with the name of an object's key that is wrapped in curly braces { } and assign to it the object. Take a look at the example below:

        const { residence } = vampire; 
        console.log(residence); //  Prints 'Transylvania'

        // Look back at the vampire object's properties in the first code example. Then, in the example above, we declare a new variable residence that extracts the value of the residence property of vampire. When we log the value of residence to the console, 'Transylvania' is printed.

        // We can even use destructured assignment to grab nested properties of an object:

        const { day } = vampire.preferences; 
        console.log(day); //  Prints 'stay inside'

        Example:

        const robot = {
            model: '1E78V2',
            energyLevel: 100,
            functionality: {
                beep() {
                    console.log('Beep Boop');
                },
                fireLaser() {
                    console.log('Pew Pew');
                },
            }
        };

        1.  // Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot.

        const { functionality } = robot;

        2.  // Since functionality is referencing robot.functionality we can call the methods available to robot.functionality simply through functionality. Take advantage of this shortcut and call the .beep() method on functionality.

        functionality.beep();
    }


    BUILT-IN OBJECT METHODS {
        // We can also take advantage of built-in methods for Objects! For example, we have access to object instance methods like: .hasOwnProperty(), .valueOf(), and many more!
        // There are also useful Object class methods such as Object.assign(), Object.entries(), and Object.keys() just to name a few.

        Example:

        const robot = {
            model: 'SAL-1000',
            mobile: true,
            sentient: false,
            armor: 'Steel-plated',
            energyLevel: 75
        };

        1.  // We'd like to grab the property names, otherwise known as keys, and save the keys in an array which is assigned to robotKeys. Accomplish this by using the Object.keys() method.

        const robotKeys = Object.keys(robot);

        console.log(robotKeys);
        // Prints: [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

        2.  // Object.entries() will also return an array, but the array will contain more arrays that have both the key and value of the properties in an object. Declare a const variable named robotEntries and assign to it the entries of robot by calling Object.entries().

        const robotEntries = Object.entries(robot);

        console.log(robotEntries);
        // Prints: [ [ 'model', 'SAL-1000' ],
        //           [ 'mobile', true ],
        //           [ 'sentient', false ],
        //           [ 'armor', 'Steel-plated' ],
        //           [ 'energyLevel', 75 ] ]

        3.  // What if we want another object that has the properties of robot but with a few additional properties. 
        // Using Object.assign(), declare a const variable named newRobot. newRobot will be a new object that has all the properties of robot and the properties in the following object: {laserBlaster: true, voiceRecognition: true}. Make sure that you are not changing the robot object!

        const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

        console.log(newRobot);
        // Prints: { laserBlaster: true,
        //           voiceRecognition: true,
        //           model: 'SAL-1000',
        //           mobile: true,
        //           sentient: false,
        //           armor: 'Steel-plated',
        //           energyLevel: 75 }
    }
}


CLASSES {
    // JavaScript is an object-oriented programming (OOP) language we can use to model real-world items. Classes are a tool that developers use to quickly produce similar objects.

    Example:

    // Take, for example, an object representing a dog named halley. This dog's name (a key) is "Halley" (a value) and has an age (another key) of 3 (another value). We create the halley object.

    let halley = {
        _name: 'Halley',
        _behavior: 0,
      
        get name() {
            return this._name;
        },
      
        get behavior() {
            return this._behavior;
        },
      
        incrementBehavior() {
            this._behavior++;
        }
    }

    // Now, imagine you own a dog daycare and want to create a catalog of all the dogs who belong to the daycare. Instead of using the syntax above for every dog that joins the daycare, we can create a Dog class that serves as a template for creating new Dog objects. For each new dog, you can provide a value for their name:

    class Dog {
        constructor(name) {
            this._name = name;
            this._behavior = 0;
        }
      
        get name() {
            return this._name;
        }
        get behavior() {
            return this._behavior;
        }   
      
        incrementBehavior() {
            this._behavior ++;
        }
    }

    const halley = new Dog('Halley');

    console.log(halley.name); //  Prints: Halley
    console.log(halley.behavior); //  Prints: 0

    halley.incrementBehavior(); //  Add one to behavior
    console.log(halley.name); //  Prints: Halley
    console.log(halley.behavior); //  Prints: 1


    CONSTRUCTOR {
        // Although you may see similarities between class and object syntax, there is one important method that sets them apart. It's called the constructor method. JavaScript calls the constructor() method every time it creates a new instance of a class.

        Examples: 

        A   class Dog {
                constructor(name) {
                    this.name = name;
                    this.behavior = 0;
                }
            }

            1.  // Dog is the name of our class. By convention, we capitalize and CamelCase class names.
            2.  // JavaScript will invoke the constructor() method every time we create a new instance of our Dog class.
            3.  // This constructor() method accepts one argument, name.
            4.  // Inside of the constructor() method, we use the this keyword. In the context of a class, this refers to an instance of that class. In the Dog class, we use this to set the value of the Dog instance's name property to the name argument.
            5.  // Under this.name, we create a property called behavior, which will keep track of the number of times a dog misbehaves. The behavior property is always initialized to zero.


        B   1.  // Create an empty class named Surgeon.

            class Surgeon {

            }

            2.  // Inside the Surgeon class, create a constructor() method that accepts two parameters: name and department.

            class Surgeon {
                constructor(name, department) {

                }
            }

            3.  // Inside the Surgeon constructor(), create name and department properties and set them equal to your input parameters.

            class Surgeon {
                constructor(name, department) {
                    this.name = name;
                    this.department = department;
                }
            }

            4.  // Create a new surgeon called Kelly. Kelly is Orthopedic

            class Surgeon {
                constructor(name, department) {
                    this.name = name;
                    this.department = department;
                }
            }

            const kelly = new Surgeon('Kelly', 'Orthopedic')

            console.log(kelly); 
            // Prints: Surgeon { name: 'Kelly', department: 'Orthopedic' }
    }


    INSTANCE  {
        // An instance is an object that contains the property names and methods of a class, but with unique property values.

        Example:

        class Dog {
            constructor(name) {
                this.name = name;
                this.behavior = 0;
            } 
        }
          
        const halley = new Dog('Halley'); //  Create new Dog instance
        console.log(halley.name); //  Log the name value saved to halley
        //  Output: 'Halley'

        // Below our Dog class, we use the new keyword to create an instance of our Dog class. Let's consider the line of code step-by-step.

        1.  // We create a new variable named halley that will store an instance of our Dog class.
        2.  // We use the new keyword to generate a new instance of the Dog class. The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.
        3.  // We pass the 'Halley' string to the Dog constructor, which sets the name property to 'Halley'.
        4.  // Finally, we log the value saved to the name key in our halley object, which logs 'Halley' to the console.
    }


    METHODS {
        // Class method and getter syntax is the same as it is for objects except you can not include commas between methods.

        Example:

        A   class Dog {
                constructor(name) {
                    this._name = name;
                    this._behavior = 0;
                }
            
                get name() {
                    return this._name;
                }
            
                get behavior() {
                    return this._behavior;
                }
            
                incrementBehavior() {
                    this._behavior++;
                }
            }


        B   class Surgeon {
                constructor(name, department) {
                    this.name = name;
                    this.department = department;
                }
            }

            1.  // In the Surgeon constructor, prepend the name and department properties with an underscore (_).

            class Surgeon {
                constructor(name, department) {
                    this._name = name;
                    this._department = department;
                }
            }

            2.  // Inside of the constructor(), add a property named _remainingVacationDays and set it equal to 20.

            class Surgeon {
                constructor(name, department) {
                    this._name = name;
                    this._department = department;
                    this._remainingVacationDays = 20;
                }
            }

            3.  // Under the constructor(), create a getter called name that returns the value saved to _name. Then, under the name getter, create a getter called department that returns the value saved to _department. And finally, under the department getter, create a getter called remainingVacationDays that returns the value saved to _remainingVacationDays.

            class Surgeon {
                constructor(name, department) {
                    this._name = name;
                    this._department = department;
                    this._remainingVacationDays = 20;
                }

                get name() {
                    return this._name;
                }

                get department() {
                    return this._department;
                }

                get remainingVacationDays() {
                    return this._remainingVacationDays;
                }
            }
                
            4.  // Under the remainingVacationDays getter, create a method called takeVacationDays that accepts one argument named daysOff. Inside of the method, subtract daysOff from the number saved to _remainingVacationDays. Set _remainingVacationDays to the result.

            class Surgeon {
                constructor(name, department) {
                    this._name = name;
                    this._department = department;
                    this._remainingVacationDays = 20;
                }

                get name() {
                    return this._name;
                }

                get department() {
                    return this._department;
                }

                get remainingVacationDays() {
                    return this._remainingVacationDays;
                }

                takeVacationDays(daysOff) {
                    this._remainingVacationDays -= daysOff;
                }
            }
    }

    METHOD CALLS {
        // Finally, let's use our new methods to access and manipulate data from Dog instances.

        Example:

        A   class Dog {
                constructor(name) {
                    this._name = name;
                    this._behavior = 0;
                }
            
                get name() {
                    return this._name;
                }
            
                get behavior() {
                    return this._behavior;
                }   
            
                incrementBehavior() {
                    this._behavior++;
                }
            }
            
            const halley = new Dog('Halley');

            // The syntax for calling methods and getters on an instance is the same as calling them on an object — append the instance with a period, then the property or method name. For methods, you must also include opening and closing parentheses.

            // Let's take a moment to create two Dog instances and call our .incrementBehavior() method on one of them.

            let nikko = new Dog('Nikko'); //  Create dog named Nikko
            nikko.incrementBehavior(); //  Add 1 to nikko instance's behavior
            let bradford = new Dog('Bradford'); //  Create dog name Bradford
            console.log(nikko.behavior); //  Logs 1 to the console
            console.log(bradford.behavior); //  Logs 0 to the console


        B   class Surgeon {
                constructor(name, department) {
                    this._name = name;
                    this._department = department;
                    this._remainingVacationDays = 20;
                }
                
                get name() {
                    return this._name;
                }
                
                get department() {
                    return this._department;
                }
                
                get remainingVacationDays() {
                    return this._remainingVacationDays;
                }
                
                takeVacationDays(daysOff) {
                    this._remainingVacationDays -= daysOff;
                }
            }
            
            const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
            const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
            
            console.log(surgeonCurry.name);  // Prints: Curry
            
            surgeonCurry.takeVacationDays(3);  // Takes 3 days of vacation from Curry remaining vacation days.
            
            console.log(surgeonCurry.remainingVacationDays)  // Prints: 17;
    }


    INHERITANCE {
        // Imagine our doggy daycare is so successful that we decide to expand the business and open a kitty daycare. Before the daycare opens, we need to create a Cat class so we can quickly generate Cat instances. We know that the properties in our Cat class (name, behavior) are similar to the properties in our Dog class, though, there will be some differences, because of course, cats are not dogs.

        Example:

        class Cat {
            constructor(name, usesLitter) {
                this._name = name;
                this._usesLitter = usesLitter;
                this._behavior = 0;
            }
          
            get name() {
                return this._name;
            }
          
            get usesLitter() {
                return this._usesLitter;
            }
          
            get behavior() {
                return this._behavior;
            }  
          
            incrementBehavior() {
                this._behavior++;
            }
        }

        //  /In the example above, we create a Cat class. It shares a couple of properties (_name and _behavior) and a method (.incrementBehavior()) with the Dog class from earlier exercises. The Cat class also contains one additional property (_usesLitter), that holds a boolean value to indicate whether a cat can use their litter box.

        // When multiple classes share properties or methods, they become candidates for inheritance — a tool developers use to decrease the amount of code they need to write.

        // With inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share. The child classes inherit the properties and methods from their parent class.

        // Let's abstract the shared properties and methods from our Cat and Dog classes into a parent class called Animal.

        class Animal {
            constructor(name) {
                this._name = name;
                this._behavior = 0;
            }
          
            get name() {
                return this._name;
            }
          
            get behavior() {
                return this._behavior;
            }   
          
            incrementBehavior() {
                this._behavior++;
            }
        }

        //  /In the example above, the Animal class contains the properties and methods that the Cat and Dog classes share (name, behavior, .incrementBehavior()).

        Example:

        1.  // Create a parent class named HospitalEmployee. Add a constructor with name as an argument.

        class HospitalEmployee {
            constructor(name) {
                this._name = name;
                this._remainingVacationDays = 20;
            }
        }

        2.  // Inside of the constructor(), set the instance's _name to name and _remainingVacationDays to 20.

        class HospitalEmployee {
            constructor(name) {
                this._name = name;
                this._remainingVacationDays = 20;
            }
        }

        3.  // Under the constructor, create getters for your _name and _remainingVacationDays properties.  Inside the getter, return the property's value.

        class HospitalEmployee {
            constructor(name) {
                this._name = name;
                this._remainingVacationDays = 20;
            }
            
            get name() {
                return this._name;
            }
          
            get remainingVacationDays() {
                return this._remainingVacationDays;
            }
        }

        4.  // Under the getters, add a method called takeVacationDays. This method should accept one argument, called daysOff. Inside the method, subtract daysOff from _remainingVacationDays. Save the result to _remainingVacationDays.

        class HospitalEmployee {
            constructor(name) {
                this._name = name;
                this._remainingVacationDays = 20;
            }
            
            get name() {
                return this._name;
            }
          
            get remainingVacationDays() {
                return this._remainingVacationDays;
            }
            
            takeVacationDays(daysOff) {
                this._remainingVacationDays -= daysOff;
            }
        }
    }


    INHERITANCE II {
        // We've abstracted the shared properties and methods of our Cat and Dog classes into a parent class called Animal.
        // Now that we have these shared properties and methods in the parent Animal class, we can extend them to the subclass, Cat.

        class Cat extends Animal {
            constructor(name, usesLitter) {
                super(name);
                this._usesLitter = usesLitter;
            }
        }

        // In the example above, we create a new class named Cat that extends the Animal class. Let's pay special attention to our new keywords: extends and super.

        1.  // The extends keyword makes the methods of the animal class available inside the cat class.
        2.  // The constructor, called when you create a new Cat object, accepts two arguments, name and usesLitter.
        3.  // The super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Cat class to the constructor of the Animal class. When the Animal constructor runs, it sets this._name = name; for new Cat instances.
        4.  // _usesLitter is a new property that is unique to the Cat class, so we set it in the Cat constructor.

        // Notice, we call super on the first line of our constructor(), then set the usesLitter property on the second line. In a constructor(), you must always call the super method before you can use the this keyword — if you do not, JavaScript will throw a reference error. To avoid reference errors, it is best practice to call super on the first line of subclass constructors.


        // Below, we create a new Cat instance and call its name with the same syntax as we did with the Dog class:

        const bryceCat = new Cat('Bryce', false); 
        console.log(bryceCat._name); //  output: Bryce

        //  In the example above, we create a new instance the Cat class, named bryceCat. We pass it 'Bryce' and false for our name and usesLitter arguments. When we call console.log(bryceCat._name) our program prints, Bryce.

        //  In this example, we abandoned best practices by calling our _name property directly. In the next example, we'll address this by calling an inherited getter method for our name property.

        Example:

        class HospitalEmployee {
            constructor(name) {
                this._name = name;
                this._remainingVacationDays = 20;
            }
            
            get name() {
                return this._name;
            }
            
            get remainingVacationDays() {
                return this._remainingVacationDays;
            }
            
            takeVacationDays(daysOff) {
                this._remainingVacationDays -= daysOff;
            }
        }

        1.  // Create the Nurse class as a child of the HospitalEmployee class, with the following properties and methods:
            //   Properties: _name, _remainingVacationDays (set to 20 inside constructor()), _certifications
            //   Methods: .takeVacationDays(), .addCertification()
            // Create an empty class named Nurse that extends HospitalEmployee.

            class HospitalEmployee {
                constructor(name) {
                    this._name = name;
                    this._remainingVacationDays = 20;
                }
                
                get name() {
                    return this._name;
                }
                
                get remainingVacationDays() {
                    return this._remainingVacationDays;
                }
                
                takeVacationDays(daysOff) {
                    this._remainingVacationDays -= daysOff;
                }
            }

            class Nurse extends HospitalEmployee {

            }

            
        2.  // Inside the Nurse class, create a constructor() that accepts two arguments. Use the list of properties above to name these arguments.

        class HospitalEmployee {
            constructor(name) {
                this._name = name;
                this._remainingVacationDays = 20;
            }
            
            get name() {
                return this._name;
            }
            
            get remainingVacationDays() {
                return this._remainingVacationDays;
            }
            
            takeVacationDays(daysOff) {
                this._remainingVacationDays -= daysOff;
            }
        }

        class Nurse extends HospitalEmployee {
            constructor(name, certifications) {

            }
        }


        3.  // In the Nurse constructor, call the parent's constructor method and pass the appropiate value(s).

        class HospitalEmployee {
            constructor(name) {
                this._name = name;
                this._remainingVacationDays = 20;
            }
            
            get name() {
                return this._name;
            }
            
            get remainingVacationDays() {
                return this._remainingVacationDays;
            }
            
            takeVacationDays(daysOff) {
                this._remainingVacationDays -= daysOff;
            }
        }

        class Nurse extends HospitalEmployee {
            constructor(name, certifications) {
                super(name);
            }
        }


        4.  // Inside of the Nurse constructor, and under super, set _certifications.

        class HospitalEmployee {
            constructor(name) {
                this._name = name;
                this._remainingVacationDays = 20;
            }
            
            get name() {
                return this._name;
            }
            
            get remainingVacationDays() {
                return this._remainingVacationDays;
            }
            
            takeVacationDays(daysOff) {
                this._remainingVacationDays -= daysOff;
            }
        }

        class Nurse extends HospitalEmployee {
            constructor(name, certifications) {
                super(name);
                this._certifications =  certifications;
            }
        }


        5.  // Under the Nurse class, create a new instance of Nurse and save it to a constant variable named nurseOlynyk. Pass in the following values for each property:
        //   name: 'Olynyk'
        //   certifications: ['Trauma', 'Pediatrics']

        class HospitalEmployee {
            constructor(name) {
                this._name = name;
                this._remainingVacationDays = 20;
            }
            
            get name() {
                return this._name;
            }
            
            get remainingVacationDays() {
                return this._remainingVacationDays;
            }
            
            takeVacationDays(daysOff) {
                this._remainingVacationDays -= daysOff;
            }
        }

        class Nurse extends HospitalEmployee {
            constructor(name, certifications) {
                super(name);
                this._certifications =  certifications;
            }
        }

        const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
        console.log(nurseOlynyk); 
        // Prints: Nurse {
        //           _name: 'Olynyk',
        //           _remainingVacationDays: 20,
        //           _certifications: [ 'Trauma', 'Pediatrics' ] }

    }
    

    INHERITANCE III {
        // Now that we know how to create an object that inherits properties from a parent class let's turn our attention to methods.
        // When we call extends in a class declaration, all of the parent methods are available to the child class.

        Example:

        A   // Consider the following class
              
            class Animal {
                constructor(name) {
                    this._name = name;
                    this._behavior = 0;
                }
            
                get name() {
                    return this._name;
                }
            
                get behavior() {
                    return this._behavior;
                }
            
                incrementBehavior() {
                    this._behavior++;
                }
            } 
            
            
            class Cat extends Animal {
                constructor(name, usesLitter) {
                    super(name);
                    this._usesLitter = usesLitter;
                }
            }
            
            const bryceCat = new Cat('Bryce', false);

            // Since the extends keyword brings all of the parent's getters and methods into the child class, bryceCat.name accesses the name getter and returns the value saved to the name property.

            // Now consider a more involved example using the class above:

            bryceCat.incrementBehavior(); //  Call .incrementBehavior() on Cat instance 

            console.log(bryceCat.behavior); //  Log value saved to behavior
            // Prints: 1

            1.  // The Cat class inherits the _behavior property, behavior getter, and the .incrementBehavior() method from the Animal class.
            2.  // When we created the bryceCat instance, the Animal constructor set the _behavior property to zero.
            3.  // The first line of code calls the inherited .incrementBehavior() method, which increases the bryceCat _behavior value from zero to one.
            4.  // The second line of code calls the behavior getter and logs the value saved to _behavior (1).
    }


    INHERITANCE IV {
        // In addition to the inherited features, child classes can contain their own properties, getters, setters, and methods.

        Example:

        class HospitalEmployee {
            constructor(name) {
                this._name = name;
                this._remainingVacationDays = 20;
            }
            
            get name() {
                return this._name;
            }
            
            get remainingVacationDays() {
                return this._remainingVacationDays;
            }
            
            takeVacationDays(daysOff) {
                this._remainingVacationDays -= daysOff;
            }
        }


        class Nurse extends HospitalEmployee {
            constructor(name, certifications) {
                super(name);
                this._certifications = certifications;
            } 
        }

        1.  // Under the Nurse constructor(), add a getter that returns the value saved to the Nurse instance's _certifications.

        class Nurse extends HospitalEmployee {
            constructor(name, certifications) {
                super(name);
                this._certifications = certifications;
            } 

            get certifications() {
                return this._certifications;
            }
        }

        2.  // Add a method called addCertification under the certifications getter. The method should accept one input (newCertification). Inside the method, use the push method to add the newCertification value to the nurse's certifications array.

        class Nurse extends HospitalEmployee {
            constructor(name, certifications) {
                super(name);
                this._certifications = certifications;
            } 

            get certifications() {
                return this._certifications;
            }

            addCertification(newCertification) {
                this._certifications.push(newCertification);
            }
        }

        3.  // Call the .addCertification() method on nurseOlynyk with a parameter of 'Genetics'. Log the value saved in 'certifications'.

        nurseOlynyk.addCertification('Genetics');

        console.log(nurseOlynyk.certifications);
        // Prints: [ 'Trauma', 'Pediatrics', 'Genetics' ]
    }


    STATIC METHODS {
        // Sometimes we want a class to have methods that aren't available in individual instances, but that we can call directly from the class.

        // Take the Date class, for example — you can both create Date instances to represent whatever date you want, and call static methods, like Date.now() which returns the current date, directly from the class. The .now() method is static, so you can call it directly from the class, but not from an instance of the class.

        Example:

        A  class Animal {
                constructor(name) {
                    this._name = name;
                    this._behavior = 0;
                }
            
                static generateName() {
                    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
                    const randomNumber = Math.floor(Math.random()*5);
                    return names[randomNumber];
                }
            }

            // In the example above, we create a static method called .generateName() that returns a random name when it's called. Because of the static keyword, we can only access .generateName() by appending it to the Animal class.

            // We call the .generateName() method with the following syntax:

            console.log(Animal.generateName()); //  returns a name

            // You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses (See below).

            const tyson = new Animal('Tyson'); 
            tyson.generateName(); //  TypeError

            // The example above will result in an error, because you cannot call static methods (.generateName()) on an instance (tyson).


        B   class HospitalEmployee {
                constructor(name) {
                    this._name = name;
                    this._remainingVacationDays = 20;
                }
                
                get name() {
                    return this._name;
                }
                
                get remainingVacationDays() {
                    return this._remainingVacationDays;
                }
                
                takeVacationDays(daysOff) {
                    this._remainingVacationDays -= daysOff;
                }
            }

            1.  // Inside of your HospitalEmployee class, create a static method called generatePassword. When it's called, this method should return a random integer between zero and 10,000.

            class HospitalEmployee {
                constructor(name) {
                    this._name = name;
                    this._remainingVacationDays = 20;
                }
                
                get name() {
                    return this._name;
                }
                
                get remainingVacationDays() {
                    return this._remainingVacationDays;
                }
                
                takeVacationDays(daysOff) {
                    this._remainingVacationDays -= daysOff;
                }
                
                static generatePassword() {
                    return Math.floor(Math.random() * 10000);
                }

                // Math.floor() - returns the largest integer less than or equal to a given number.
                // Math.random() - returns a floating-point, pseudo-random number in the range 0–1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
            }
    }
}

BROWSER COMPATIBILITY AND TRANSPILATION {

    WHY ES6 {
        // The version of JavaScript that preceded ES6 is called JavaScript ES5. Three reasons for the ES5 to ES6 updates are listed below:

        1. // A similarity to other programming languages — JavaScript ES6 is syntactically more similar to other object-oriented programming languages. This leads to less friction when experienced, non-JavaScript developers want to learn JavaScript.
        
        2.  // Readability and economy of code — The new syntax is often easier to understand (more readable) and requires fewer characters to create the same functionality (economy of code).
        
        3.  // Addresses sources of ES5 bugs — Some ES5 syntax led to common bugs. With ES6, Ecma introduced syntax that mitigates some of the most common pitfalls.

        // Because ES6 addressed the above issues, Ecma knew that adoption by web developers would occur quickly, while web browser support lagged behind.

        // To limit the impact of ES6 browser compatibility issues, Ecma made the new syntax backwards compatible, which means you can map JavaScript ES6 code to ES5.
    }


    TRANSPILATION WITH BABEL {
        // Because ES6 is predictably backwards compatible, a collection of JavaScript programmers developed a JavaScript library called Babel that transpiles ES6 JavaScript to ES5.

        // Transpilation is the process of converting one programming language to another.

        // Before we can add Babel to our project directory, we need to run npm init. The npm init command creates a package.json file in the root directory.

        // A package.json file contains information about the current JavaScript project. Some of this information includes:

        1.  // Metadata — This includes a project title, description, authors, and more.
        2.  // A list of node packages required for the project — If another developer wants to run your project, npm looks inside package.json and downloads the packages in this list.
        3.  // Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process. In a later exercise, we will add a script that runs Babel and transpiles ES6 to ES5.
        
        // If you have Node installed on your computer, you can create a package.json file by typing npm init into the terminal. The terminal prompts you to fill in fields for the project's metadata (name, description, etc.)

        // You are not required to answer the prompts, though we recommend at minimum, you add your own title and description. If you don't want to fill in a field, you can press enter. npm will leave fill these fields with default values or leave them empty when it creates the package.json file.

        // After you run npm init your directory structure will contain the following files and folders:

        project
        |_ src
        |___ main.js
        |_ package.json

        // npm adds the package.json file to the same level as the src directory.

        // We install Babel with the following two commands:

        $ npm install babel-cli -D
        $ npm install babel-preset-env -D

        // The babel-cli package includes command line Babel tools, and the babel-preset-env package has the code that maps any JavaScript feature, ES6 and above (ES6+), to ES5.

        // The -D flag instructs npm to add each package to a property called devDependencies in package.json. Once the project's dependencies are listed in devDependencies, other developers can run your project without installing each package separately. Instead, they can simply run npm install — it instructs npm to look inside package.json and download all of the packages listed in devDependencies.

        // Once you npm install packages, you can find the Babel packages and all their dependencies in the node_modules folder. The new directory structure contains the following:

        project
        |_ node_modules
        |___ .bin
        |___ ...
        |_ src
        |___ main.js
        |_ package.json
                
        // The ... in the file structure above is a placeholder for 100+ packages that npm installed.

    }


    .BABELRC {
        // Now that you've downloaded the Babel packages, you need to specify the version of the source JavaScript code.

        // You can specify the initial JavaScript version inside of a file named .babelrc. In your root directory, you can run touch .babelrc to create this file. Your project directory contains the following folders and files:

        project
        |_ node_modules
        |___ .bin
        |___ ...
        |_ src
        |___ main.js
        |_ .babelrc
        |_ package.json

        //  Inside .babelrc you need to define the preset for your source JavaScript file. The preset specifies the version of your initial JavaScript file.

        //  Usually, you want to transpile JavaScript code from versions ES6 and later (ES6+) to ES5. From this point on, we will refer to our source code as ES6+, because Ecma introduces new syntax with each new version of JavaScript.

        //  To specify that we are transpiling code from an ES6+ source, we have to add the following JavaScript object into .babelrc:

        {
        "presets": ["env"]
        }

        //  When you run Babel, it looks in .babelrc to determine the version of the initial JavaScript file. In this case, ["env"] instructs Babel to transpile any code from versions ES6 and later.
    }


    BABEL SOURCE LIB {
        // There's one last step before we can transpile our code. We need to specify a script in package.json that initiates the ES6+ to ES5 transpilation.

        // Inside of the package.json file, there is a property named "scripts" that holds an object for specifying command line shortcuts. It looks like this:

        ...
        "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
        }, ...

        //  In the code above, the "scripts" property contains an object with one property called "test". Below the "test" property, we will add a script that runs Babel like this:

        ...
        "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "babel src -d lib"
        }

        //  In the "scripts" object above, we add a property called "build". The property's value, "babel src -d lib", is a command line method that transpiles ES6+ code to ES5. Let's consider each argument in the method call:

        //       babel — The Babel command call responsible for transpiling code.
        //       src — Instructs Babel to transpile all JavaScript code inside the src directory.
        //       -d — Instructs Babel to write the transpiled code to a directory.
        //       lib — Babel writes the transpiled code to a directory called lib.
        //       In the next exercise, we'll run the babel src -d lib method to transpile our ES6+ code.

    }


    BUILD {
        // We're ready to transpile our code! In the last exercise, we wrote the following script in package.json:
        
        "build": "babel src -d lib"

        // Now, we need to call "build" from the command line to transpile and write ES5 code to a directory called lib.
        
        // From the command line, we type:
        
        npm run build

        // The command above runs the build script in package.json.
        
        // Babel writes the ES5 code to a file named main.js (it's always the same name as the original file), inside of a folder called lib. The resulting directory structure is:
        
        project
        |_ lib
        |___ main.js
        |_ node_modules
        |___ .bin
        |___ ...
        |_ src
        |___ main.js
        |_ .babelrc
        |_ package.json
        // Notice, the directory contains a new folder named lib, with one file, called main.js.
        
        // The npm run build command will transpile all JavaScript files inside of the src folder. This is helpful as you build larger JavaScript projects — regardless of the number of JavaScript files, you only need to run one command (npm run build) to transpile all of your code
    }
}



INTERMEDIATE JAVASCRIPT MODULES { 
    // JavaScript modules are reusable pieces of code that can be exported from one program and imported for use in another program.

    // Modules are particularly useful for a number of reasons. By separating code with similar logic into files called modules, we can:

    1.  //find, fix, and debug code more easily;
    2.  //reuse and recycle defined logic in different parts of our application;
    3.  //keep information private and protected from other modules;
    4.  //and, importantly, prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.


    MODULE.EXPORTS {
        // We get started with modules by defining a module in one file and making the module available for use in another file. Below is an example of how to define a module and how to export it using the statement module.exports.

        // In menu.js we write:

        let Menu = {};
        Menu.specialty = "Roasted Beet Burger with Mint Sauce";

        module.exports = Menu;
        
        // Let's consider what this code means.

        1.  //let Menu = {}; creates the object that represents the module Menu. The statement contains an uppercase variable named Menu which is set equal to an object.
        2.  //Menu.specialty is defined as a property of the Menu module. We add data to the Menu object by setting properties on that object and giving the properties a value.
        3.  //"Roasted Beet Burger with Mint Sauce"; is the value stored in the Menu.specialty property.
        4.  //module.exports = Menu; exports the Menu object as a module. module is a variable that represents the module, and exports exposes the module as an object.

        // The pattern we use to export modules is thus:

        1.  //Define an object to represent the module.
        2.  //Add data or behavior to the module.
        3.  //Export the module.
    }


    REQUIRE {
        // To make use of the exported module and the behavior we define within it, we import the module. A common way to do this is with the require() function.

        // For instance, say we want the module to control the menu's data and behavior, and we want a separate file to handle placing an order. We would create a separate file order.js and import the Menu module from menu.js to order.js using require():

        // In order.js we would write:

        const Menu = require('./menu.js');

        function placeOrder() {
            console.log('My order is: ' + Menu.specialty);
        }

        placeOrder();

        // We now have the entire behavior of Menu available in order.js. Here, we notice:

        1.  //In order.js we import the module by creating a variable with const called Menu and setting it equal to the value of the require() function. We can set this variable to any variable name we like, such as menuItems.
        2.  //require() is a JavaScript function that enables a module to load by passing in the module's filepath as a parameter.
        3.  //'./menu.js' is the argument we pass to the require() function.
        4.  //The placeOrder() function then uses the Menu module in its function definition. By calling Menu.specialty, we access the property specialty defined in the Menu module.
        5.  //We can then invoke the function using placeOrder()
        
        // Taking a closer look, the pattern to import a module is:

        1.  //Import the module
        2.  //Use the module and its properties within a program.

        Example:

        1.  //Create an object named Airplane. Save the file as 1-airplane.js
        
        let Airplane = {};

        2.  //Add a property to the Airplane object named myAirplane and set it equal to "StarJet".

        let Airplane = {};

        Airplane.myAirplane = "Starjet";

        3.  //Export the module.

        let Airplane = {};

        Airplane.myAirplane = "StarJet";

        module.exports = Airplane;

        4.  //Create a new file called 1-missinControl.js. Use the require() function to import the Airplane module from 1-airplane.js.

        const Airplane = require('./1-airplane.js');

        5.  //In 1-missionControl.js, define a function displayAirplane(). In the function, log the value of the module and its property to the console.

        const Airplane = require('./1-airplane.js');

        function displayAirplane() {
            console.log(Airplane.myAirplane); 
        }

        6.  //Call the displayAirplane() function. In the console, you should see the name of the airplane you defined in the module.

        const Airplane = require('./1-airplane.js');

        function displayAirplane() {
        console.log(Airplane.myAirplane);
        }

        displayAirplane();
        //Prints: StarJet
    }


    MODULE EXPORTS II {
        // We can also wrap any collection of data and functions in an object, and export the object using module.exports. In menu.js, we could write:

        let Menu = {};

        module.exports = {
            specialty: "Roasted Beet Burger with Mint Sauce",
            getSpecialty: function() {
                return this.specialty;
            } 
        };
        
        1.  //module.exports exposes the current module as an object.
        2.  //specialty and getSpecialty are properties on the object.

        // Then in order.js, we write:

        const Menu = require('./menu.js');

        console.log(Menu.getSpecialty());

        // Here we can still access the behavior in the Menu module.

        Example:

        1.  //We'll start writing a new module from scratch. Again, in 2-airplane.js create an object named Airplane.

        let Airplane = {};

        2.  //Set module.exports equal to an empty object.

        let Airplane = {};

        module.exports = {};

        3.  //Within the object, create a key called myAirplane and set it to a value "CloudJet".

        let Airplane = {};

        module.exports = {
            myAirplane = 'CloudJet '
        }

        4.  //Again, within module.exports, create another key displayAirplane and set it to an anonymous function. The function should use the this statement to return myAirplane.

        let Airplane = {};

        module.exports = {
            myAirplane = 'CloudJet ',
            displayAirplane: function() {
                return this.myAirplane;
            }
        }

        5.  //In a new file called 2-missionControl.js use the require() function to import the Airplane module.

        const Airplane = require('./2-airplane.js');

        6.  //In 2-missionControl.js log the displayAirplane() to the console, noting that it is a method of the Airplane object.

        const Airplane = require('./2-airplane.js');
        console.log(Airplane.displayAirplane());s
    }


    EXPORT DEFAULT {
        // The default export syntax works similarly to the module.exports syntax, allowing us to export one module per file.

        Exmaple:

        let Menu = {};

        export default Menu;

        1.  //export default uses the JavaScript export statement to export JavaScript objects, functions, and primitive data types.
        2.  //Menu refers to the name of the Menu object, the object that we are setting the properties on within our modules.

        // When using ES6 syntax, we use export default in place of module.exports.

        Example:

        1.  //Create an Airplane module from scratch, this time exporting the module with export default. Create an object to represent the module called Airplane.

        let Airplane = {};
        export default Airplane;

        2.  //Create an availableAirplanes variable and set it equal to an empty array. Be sure that availableAirplanes is a property of the Airplane object.

        let Airplane = {};

        Airplane.availableAirplanes = [];

        export default Airplane;

        3.  //In the availableAirplanes array, add two array elements that are both of type object.
            //The first object should contain a property name with a value 'AeroJet' and a property fuelCapacity with a value of 800.
            //The second object should have a property name with a value of SkyJet and a property fuelCapacity with a value of 500.

            let Airplane = {};

            Airplane.availableAirplanes = [
              {
                name: 'AeroJet',
                fuelCapacity: 800
              },
              {
                name: 'SkyJet',
                fuelCapacity: 500
              },  
            ];
    
            export default Airplane;
    }


    IMPORT {
        // ES6 module syntax also introduces the import keyword for importing objects. In our order.js example, we import an object like this:

        import Menu from './menu';

        1.  //The import keyword begins the statement.
        2.  //The keyword Menu here specifies the name of the variable to store the default export in.
        3.  //from specifies where to load the module from.
        4.  //'./menu' is the name of the module to load. When dealing with local files, it specifically refers to the name of the file without the extension of the file.

        // We can then continue using the Menu module in the order.js file.

        Example:

        1.  //In missionControl.js we'll use the module Airplane to display the fuel capacity of both our airplanes.
            //Use the import keyword to import the Airplane module.

        import Airplane from './airplane';

        2.  //Define a function displayFuelCapacity().

        import Airplane from './airplane';

        function displayFuelCapacity() {};

        3.  //Within the body of the displayFuelCapacity function, use forEach() to iterate over the Airplane.availableAirplanes array.
            //The forEach() should take an anonymous function as a parameter. We'll add more in the next step.

        import Airplane from './airplane';

        function displayFuelCapacity() {
            Airplane.availableAirplanes.forEach(function() {});
        };

        4.  //Pass the anonymous function you created in the last step a parameter of element.

        import Airplane from './airplane';

        function displayFuelCapacity() {
            Airplane.availableAirplanes.forEach(function(element) {});
        };

        5.  //Within the displayFuelCapacity function, use console.log() to output the element's name and its fuel capacity.

        import Airplane from './airplane';

        function displayFuelCapacity() {
            Airplane.availableAirplanes.forEach(function(element) {
                console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
            });
        };

        6.  //Call the displayFuelCapacity function.

        import Airplane from './airplane';

        function displayFuelCapacity() {
            Airplane.availableAirplanes.forEach(function(element) {
                console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
            });
        }

        displayFuelCapacity();
    }


    NAMED EXPORTS {
        // In addition to default export, named exports allow us to export data through the use of variables.

        Example:

        A   
            // In menu.js we would be sure to give each piece of data a distinct variable name:

            let specialty = '';
            function isVegetarian() {
            }; 
            function isLowSodium() {
            }; 

            export { specialty, isVegetarian };

            1.  //Notice that, when we use named exports, we are not setting the properties on an object. Each export is stored in its own variable.
            2.  //specialty is a string object, while isVegetarian and isLowSodium are objects in the form of functions. Recall that in JavaScript, every function is in fact a function object.
            3.  //export { specialty, isVegetarian }; exports objects by their variable names. Notice the keyword export is the prefix.
            4.  //specialty and isVegetarian are exported, while isLowSodium is not exported, since it is not specified.


        B   
            let Airplane = {};

            Airplane.availableAirplanes = [
                {
                    name: 'AeroJet',
                    fuelCapacity: 800
                }, 
                {
                    name: 'SkyJet',
                    fuelCapacity: 500
                }
            ];
            
            export default Airplane;

            1.  //Remove the statement that sets Airplane to an empty object, and remove the entire export default line. You will see an error in the console.

                Airplane.availableAirplanes = [
                    {
                        name: 'AeroJet',
                        fuelCapacity: 800
                    }, 
                    {
                        name: 'SkyJet',
                        fuelCapacity: 500
                    }
                ];

            2.  //Modify the availableAirplanes array such that it is a variable defined with let and no longer a property on the Airplane object.

            let availableAirplanes = [
                {
                    name: 'AeroJet',
                    fuelCapacity: 800
                }, 
                {
                    name: 'SkyJet',
                    fuelCapacity: 500
                }
            ];

            3.  //In the first object, AeroJet, add a property availableStaff, and set it equal to an array with the elements 'pilots', 'flightAttendants', 'engineers', 'medicalAssistance', and 'sensorOperators'.
            //In the second object, SkyJet, add a property availableStaff, and set it equal to an array with the elements 'pilots' and 'flightAttendants'.

            let availableAirplanes = [
                {
                    name: 'AeroJet',
                    fuelCapacity: 800,
                    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
                }, 
                {
                    name: 'SkyJet',
                    fuelCapacity: 500,
                    availableStaff: ['pilots', 'flightAttendants']
                }
            ];

            4.  //Define a new variable with let named flightRequirements. Within the flightRequirements object, add a property requiredStaff, and set this equal to 4.

            let availableAirplanes = [
                {
                    name: 'AeroJet',
                    fuelCapacity: 800,
                    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
                }, 
                {
                    name: 'SkyJet',
                    fuelCapacity: 500,
                    availableStaff: ['pilots', 'flightAttendants']
                }
            ];

            let flightRequirements = {
                requiredStaff: 4
            }

            5.  //Define a function with the name meetsStaffRequirements() that takes availableStaff and requiredStaff as parameters. In the body of the meetsStaffRequirements() function, write logic to check if the length of the availableStaff array is greater than or equal to requiredStaff.

            let availableAirplanes = [
                {
                    name: 'AeroJet',
                    fuelCapacity: 800,
                    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
                }, 
                {
                    name: 'SkyJet',
                    fuelCapacity: 500,
                    availableStaff: ['pilots', 'flightAttendants']
                }
            ];

            let flightRequirements = {
                requiredStaff: 4
            }

            function meetsStaffRequirements(availableStaff, requiredStaff) {
                if (availableStaff.lenght >= requiredStaff) {
                    retur: true;
                } else {
                    return: false;
                }
            }

            6.  //Using the export keyword, export the variables availableAirplanes, flightRequirements and meetsStaffRequirements.

            let availableAirplanes = [
                {
                    name: 'AeroJet',
                    fuelCapacity: 800,
                    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
                }, 
                {
                    name: 'SkyJet',
                    fuelCapacity: 500,
                    availableStaff: ['pilots', 'flightAttendants']
                }
            ];

            let flightRequirements = {
                requiredStaff: 4
            }

            function meetsStaffRequirements(availableStaff, requiredStaff) {
                if (availableStaff.lenght >= requiredStaff) {
                    retur: true;
                } else {
                    return: false;
                }
            }

            export { availableAirplanes, flightRequirements, meetsStaffRequirements  }
    }


    NAMED IMPORTS {
        // To import objects stored in a variable, we use the import keyword and include the variables in a set of {}.

        // In the order.js file, for example, we would write:

        import { specialty, isVegetarian } from './menu';

        console.log(specialty);

        1.  //Here specialty and isVegetarian are imported.
        2.  //If we did not want to import either of these variables, we could omit them from the import statement.
        3.  //We can then use these objects as in within our code. For example, we would use specialty instead of Menu.specialty.

        Example:

        import Airplane from './airplane';

        function displayFuelCapacity() {
            Airplane.availableAirplanes.forEach(function(element) {
                console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
            });
        }

        displayFuelCapacity();


        1.  //Change the import statement such that it imports the availableAirplanes, flightRequirements, and meetsStaffRequirements variables.

        import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

        function displayFuelCapacity() {
        Airplane.availableAirplanes.forEach(function(element) {
            console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
        });
        }

        displayFuelCapacity();

        2.  //Now, modify any instance of the Airplane.availableAirplanes variable, so that you only use availableAirplanes.

        import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

        function displayFuelCapacity() {
        availableAirplanes.forEach(function(element) {
            console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
        });
        }

        displayFuelCapacity();

        3.  //Define a function displayStaffStatus().Within the body of the displayStaffStatus() function, use the forEach to iterate over the availableAirplanes array.
        //Specifically, the forEach() should take a function as a parameter. The function should in turn take element as a parameter.

        import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

        function displayFuelCapacity() {
        availableAirplanes.forEach(function(element) {
            console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
        });
        }

        displayFuelCapacity();

        function displayStaffStatus() {
            availableAirplanes.forEach(function(element) {
             
            });
        }

        4.  //Within the displayStaffStatus() function, use console.log() to output the element's name. We'll add more in the next step.

        import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

        function displayFuelCapacity() {
        availableAirplanes.forEach(function(element) {
            console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
        });
        }

        displayFuelCapacity();

        function displayStaffStatus() {
            availableAirplanes.forEach(function(element) {
                console.log(element.name)
            });
        }

        5.  //Continuing within the displayStaffStatus() function, modify the console.log() statement to output (element name) + ' meets staff requirements: ' + (true/false)
        // To do this, we can call the meetsStaffRequirements method, passing in two parameters element.availableStaff and flightRequirements.requiredStaff.

        import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

        function displayFuelCapacity() {
        availableAirplanes.forEach(function(element) {
            console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
        });
        }

        displayFuelCapacity();

        function displayStaffStatus() {
            availableAirplanes.forEach(function(element) {
                console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
            });
        }

        6. //Call the displayStaffStatus function.

        import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

        function displayFuelCapacity() {
        availableAirplanes.forEach(function(element) {
            console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
        });
        }

        displayFuelCapacity();

        function displayStaffStatus() {
            availableAirplanes.forEach(function(element) {
                console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
            });
        }

        displayStaffStatus();
    }


    EXPORT NAMED EXPORTS {
        // Named exports are also distinct in that they can be exported as soon as they are declared, by placing the keyword export in front of variable declarations.

        // In menu.js

        export let specialty = '';
        export function isVegetarian() {
        }; 
        function isLowSodium() {
        };

        1.  //The export keyword allows us to export objects upon declaration, as shown in export let specialty and export function isVegetarian() {}.
        2.  //We no longer need an export statement at the bottom of our file, since this behavior is handled above.

        Exmple:

        let availableAirplanes = [{
            name: 'AeroJet',
            fuelCapacity: 800,
            availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
           }, 
           {name: 'SkyJet',
            fuelCapacity: 500,
            availableStaff: ['pilots', 'flightAttendants']
           }];
           
        let flightRequirements = {
            requiredStaff: 4,
        };
           
        function meetsStaffRequirements(availableStaff, requiredStaff) {
            if (availableStaff.length >= requiredStaff) {
            return true;
            } else {
            return false;
            }
        };
           
        export { availableAirplanes, flightRequirements, meetsStaffRequirements};

        1.  //To the first object AeroJet, add a property maxSpeed with a value of 1200 and a property minSpeed with a value of 300.

        let availableAirplanes = [{
            name: 'AeroJet',
            fuelCapacity: 800,
            availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
            maxSpeed: 1200,
            minSpeed: 300
           }, 
           {name: 'SkyJet',
            fuelCapacity: 500,
            availableStaff: ['pilots', 'flightAttendants']
           }];
           
        let flightRequirements = {
            requiredStaff: 4,
        };
           
        function meetsStaffRequirements(availableStaff, requiredStaff) {
            if (availableStaff.length >= requiredStaff) {
            return true;
            } else {
            return false;
            }
        };

        2.  //To the second object SkyJet, add a property maxSpeed with a value of 800 and a property minSpeed with a value of 200.

        let availableAirplanes = [{
            name: 'AeroJet',
            fuelCapacity: 800,
            availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
            maxSpeed: 1200,
            minSpeed: 300
           }, 
           {name: 'SkyJet',
            fuelCapacity: 500,
            availableStaff: ['pilots', 'flightAttendants'],
            maxSpeed: 800,
            minSpeed: 200
           }];
           
        let flightRequirements = {
            requiredStaff: 4,
        };
           
        function meetsStaffRequirements(availableStaff, requiredStaff) {
            if (availableStaff.length >= requiredStaff) {
            return true;
            } else {
            return false;
            }
        };

        3.  //Within the flightRequirements object, add a property requiredSpeedRange and set this equal to 700.

        let availableAirplanes = [{
            name: 'AeroJet',
            fuelCapacity: 800,
            availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
            maxSpeed: 1200,
            minSpeed: 300
           }, 
           {name: 'SkyJet',
            fuelCapacity: 500,
            availableStaff: ['pilots', 'flightAttendants'],
            maxSpeed: 800,
            minSpeed: 200
           }];
           
        let flightRequirements = {
            requiredStaff: 4,
            requiredSpeedRange: 700
        };
           
        function meetsStaffRequirements(availableStaff, requiredStaff) {
            if (availableStaff.length >= requiredStaff) {
            return true;
            } else {
            return false;
            }
        };

        4.  //Add a new function meetsSpeedRangeRequirements() that takes three arguments maxSpeed, minSpeed and requiredSpeedRange.

        let availableAirplanes = [{
            name: 'AeroJet',
            fuelCapacity: 800,
            availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
            maxSpeed: 1200,
            minSpeed: 300
           }, 
           {name: 'SkyJet',
            fuelCapacity: 500,
            availableStaff: ['pilots', 'flightAttendants'],
            maxSpeed: 800,
            minSpeed: 200
           }];
           
        let flightRequirements = {
            requiredStaff: 4,
            requiredSpeedRange: 700
        };
           
        function meetsStaffRequirements(availableStaff, requiredStaff) {
            if (availableStaff.length >= requiredStaff) {
            return true;
            } else {
            return false;
            }
        };

        function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {

        }

        5.  //Within the meetsSpeedRangeRequirements function, create a variable range, and set it to the difference between maxSpeed and minSpeed.

        let availableAirplanes = [{
            name: 'AeroJet',
            fuelCapacity: 800,
            availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
            maxSpeed: 1200,
            minSpeed: 300
           }, 
           {name: 'SkyJet',
            fuelCapacity: 500,
            availableStaff: ['pilots', 'flightAttendants'],
            maxSpeed: 800,
            minSpeed: 200
           }];
           
        let flightRequirements = {
            requiredStaff: 4,
            requiredSpeedRange: 700
        };
           
        function meetsStaffRequirements(availableStaff, requiredStaff) {
            if (availableStaff.length >= requiredStaff) {
            return true;
            } else {
            return false;
            }
        };

        function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
            let range = maxSpeed - minSpeed;
        }

        6.  //In the body of the meetsSpeedRangeRequirements() function, create logic to check if the range is greater than the requiredSpeedRange.

        let availableAirplanes = [{
            name: 'AeroJet',
            fuelCapacity: 800,
            availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
            maxSpeed: 1200,
            minSpeed: 300
           }, 
           {name: 'SkyJet',
            fuelCapacity: 500,
            availableStaff: ['pilots', 'flightAttendants'],
            maxSpeed: 800,
            minSpeed: 200
           }];
           
        let flightRequirements = {
            requiredStaff: 4,
            requiredSpeedRange: 700
        };
           
        function meetsStaffRequirements(availableStaff, requiredStaff) {
            if (availableStaff.length >= requiredStaff) {
            return true;
            } else {
            return false;
            }
        };

        function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
            let range = maxSpeed - minSpeed;
            if (range > requiredSpeedRange) {
                return true;
                } else {
                return false;
            }
        }

        7.  //Use export to export the variables as soon as they are declared, and remove the export statement at the bottom of the file.

        export let availableAirplanes = [{
            name: 'AeroJet',
            fuelCapacity: 800,
            availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
            maxSpeed: 1200,
            minSpeed: 300
           }, 
           {name: 'SkyJet',
            fuelCapacity: 500,
            availableStaff: ['pilots', 'flightAttendants'],
            maxSpeed: 800,
            minSpeed: 200
           }];
           
        export let flightRequirements = {
            requiredStaff: 4,
            requiredSpeedRange: 700
        };
           
        export function meetsStaffRequirements(availableStaff, requiredStaff) {
            if (availableStaff.length >= requiredStaff) {
            return true;
            } else {
            return false;
            }
        };

        export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
            let range = maxSpeed - minSpeed;
            if (range > requiredSpeedRange) {
                return true;
                } else {
                return false;
            }
        }
    }


    IMPORT NAMED IMPORTS {
        // To import variables that are declared, we simply use the original syntax that describes the variable name. In other words, exporting upon declaration does not have an impact on how we import the variables.

        import { specialty, isVegetarian } from 'menu';
        
    }


    EXPORT AS {
        // Named exports also conveniently offer a way to change the name of variables when we export or import them. We can do this with the as keyword.

        let specialty = '';
        let isVegetarian = function() {
        }; 
        let isLowSodium = function() {
        }; 

        export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };

        1.  //In the above example, take a look at the export statement at the bottom of the of the file.
        2.  //The as keyword allows us to give a variable name an alias as demonstrated in specialty as chefsSpecial and isVegetarian as isVeg.
        3.  //Since we did not give isLowSodium an alias, it will maintain its original name.


        Example:

        let availableAirplanes = [
            {name: 'AeroJet',
             fuelCapacity: 800,
             availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
             maxSpeed: 1200,
             minSpeed: 300
            }, 
            {name: 'SkyJet',
             fuelCapacity: 500,
             availableStaff: ['pilots', 'flightAttendants'],
             maxSpeed: 800,
             minSpeed: 200
            }
        ];
            
        let flightRequirements = {
            requiredStaff: 4,
            requiredSpeedRange: 700
        };
            
        function meetsStaffRequirements(availableStaff, requiredStaff) {
            if (availableStaff.length >= requiredStaff) {
            return true;
            } else {
            return false;
            }
        };
            
        function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
            let range = maxSpeed - minSpeed;
            if (range > requiredSpeedRange) {
            return true;
            } else {
            return false;
            }
        };
            
        export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs };
    }


    IMPORT AS {
        // To import named export aliases with the as keyword, we add the aliased variable in our import statement.

        import { chefsSpecial, isVeg } from './menu';

        1.  //We import chefsSpecial and isVeg from the Menu object.
        2.  //Here, note that we have an option to alias an object that was not previously aliased when exported. For example, the isLowSodium object that we exported could be aliased with the as keyword when imported: import {isLowSodium as saltFree} from 'Menu';

        // Another way of using aliases is to import the entire module as an alias:

        import * as Carte from './menu';

        Carte.chefsSpecial;
        Carte.isVeg();
        Carte.isLowSodium();

        1.  //This allows us to import an entire module from menu.js as an alias Carte.
        2.  //In this example, whatever name we exported would be available to us as properties of that module. For example, if we exported the aliases chefsSpecial and isVeg, these would be available to us. If we did not give an alias to isLowSodium, we would call it as defined on the Carte module.
    }


    COMBINING EXPORT STATEMENTS {
        // We can also use named exports and default exports together. In menu.js:

        let specialty = '';
        function isVegetarian() {
        }; 
        function isLowSodium() {
        }; 
        function isGlutenFree() {
        };

        export { specialty as chefsSpecial, isVegetarian as isVeg };
        export default isGlutenFree;

        // Here we use the keyword export to export the named exports at the bottom of the file. Meanwhile, we export the isGlutenFree variable using the export default syntax.

        // This would also work if we exported most of the variables as declared and exported others with the export default syntax.

        export let Menu = {};

        export let specialty = '';
        export let isVegetarian = function() {
        }; 
        export let isLowSodium = function() {
        }; 
        let isGlutenFree = function() {
        };

        export default isGlutenFree;

        // Here we use the export keyword to export the variables upon declaration, and again export the isGlutenFree variable using the export default syntax

        // While it's better to avoid combining two methods of exporting, it is useful on occasion. For example, if you suspect developers may only be interested in importing a specific function and won't need to import the entire default export.
    }


    COMBINING IMPORT STATEMENTS {
        // We can import the collection of objects and functions with the same data.

        // We can use an import keyword to import both types of variables as such:

        import { specialty, isVegetarian, isLowSodium } from './menu';

        import GlutenFree from './menu';
    }
}

REQUESTS {
    // There are many types of HTTP requests. The four most commonly used types of HTTP requests are GET, POST, PUT, and DELETE.
    // In this lesson, we'll cover GET and POST requests. We will explain how to make GET and POST requests by using JavaScript's XHR object. We'll also incorporate query strings into our requests.

    // With a GET request, we're retrieving, or getting, information from some source (usually a website). 
    
    // For a POST request, we're posting information to a source that will process the information and send it back.

    // We'll use the Datamuse API for GET requests and the Rebrandly URL Shortener API for POST requests. To complete the exercise on POST, make sure you create a Rebrandly API Key.

    // When we click a call-to-action button, we're sending a GET request. The requested data will be retrived to us under JSON (JavaScript Object Notation) format.


    HTTP REQUESTS {
        // One of JavaScript's greatest assets is its non-blocking properties, or that it is an asynchronous language.

        // JavaScript uses an event loop to handle asynchronous function calls. When a program is run, function calls are made and added to a stack. The functions that make requests that need to wait for servers to respond then get sent to a separate queue. Once the stack has cleared, then the functions in the queue are executed.

        // Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and how to handle asynchronous events.

        Example:

        1.  // We use setTimeout(), which will pass a function call to the queue. The first argument is a callback and the second argument is the number of milliseconds the program must wait before the callback can be run. The other console.log() calls are run from the stack.

        console.log('First message!');
        setTimeout(() => {
            console.log('This message will always run last...');
        }, 2500);
        console.log('Second message!');

        // Prints: First message!
        //         Second message!
        //         This message will always run last...



        2.  // What if we change the 2500 in setTimeout() to be 0? Essentially the callback doesn't need to wait before it can be called.

        console.log('First message!');
        setTimeout(() => {
            console.log('This message will always run last...');
        }, 0);
        console.log('Second message!');

        // Prints: First message!
        //         Second message!
        //         This message will always run last...




    }


    XHR GET REQUESTS I {
        // Asynchronous JavaScript and XML (AJAX), enables requests to be made after the initial page load. Initially, AJAX was used only for XML formatted data, now it can be used to make requests that have many different formats.

        // Similarly, the XMLHttpRequest (XHR) API, named for XML, can be used to make many kinds of requests and supports other forms of data.
    }


    XHR GET REQUESTS II {
        // We are going to reconstruct XHR GET request boilerplate code step-by-step until we have written a complete GET request.

        // XHR GET diagram: https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/XHR+GET+diagram.svg 

        1.  //First, we need to create the XMLHttpRequest object using the new operator. Save this object in a const called xhr.

        const xhr = new XMLHttpRequest;

        2.  //Next, save the following URL to a const called url. Make sure the URL is wrapped in quotes so that it is a string. https://api-to-call.com/endpoint

        const xhr = new XMLHttpRequest;

        const url = "https://api-to-call.com/endpoint";

        3.  //Set the responseType property of the xhr object to equal 'json'.

        const xhr = new XMLHttpRequest;

        const url = "https://api-to-call.com/endpoint";

        xhr.responseType = 'json';

        4.  //Set the xhr.onreadystatechange event handler equal to an anonymous arrow function. Leave the function empty.

        const xhr = new XMLHttpRequest;

        const url = "https://api-to-call.com/endpoint";

        xhr.responseType = 'json';

        xhr.onreadystatechange = () => {

        }

        5.  //In the code block of the function you created in the previous step, add this conditional statement:
        if (xhr.readyState === XMLHttpRequest.DONE) { }
        // The purpose of this conditional statement checks to see if the request has finished.

        const xhr = new XMLHttpRequest;

        const url = "https://api-to-call.com/endpoint";

        xhr.responseType = 'json';

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) { }
        }

        6.  //In the code block of the conditional statement, return the response property of xhr.

        const xhr = new XMLHttpRequest;

        const url = "https://api-to-call.com/endpoint";

        xhr.responseType = 'json';

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) { 
                return xhr.response;
            }
        }

        7.  //Below the function you created in the previous two steps, call the .open() method on the xhr object and pass it 'GET' and url as arguments.
            // .open() creates a new request and the arguments passed in determine the type and URL of the request.

        const xhr = new XMLHttpRequest;

        const url = "https://api-to-call.com/endpoint";

        xhr.responseType = 'json';

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) { 
                return xhr.response;
            }
        }

        xhr.open('GET', url);

        8.  //On the following line, call the .send() method on the xhr object. Do not pass it any arguments.
            // Nice work! You've written the boilerplate code for an AJAX GET request using an XMLHttpRequest object.

            const xhr = new XMLHttpRequest;

            const url = "https://api-to-call.com/endpoint";
    
            xhr.responseType = 'json';
    
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) { 
                    return xhr.response;
                }
            }
    
            xhr.open('GET', url);

            xhr.send();


    }


    XHR GET REQUESTS III {
        // In this exercise, you will incorporate that boilerplate code to make a GET request to the Datamuse API to search for words that rhyme!
        // Datamuse API Documentation: https://www.datamuse.com/api/

        Example:

        // Information to reach API

        // Selecting page elements
        const inputField = document.querySelector('#input');
        const submit = document.querySelector('#submit');
        const responseField = document.querySelector('#responseField');

        // AJAX function
        const getSuggestions = () => {

        }

        // Clear previous results and display results to webpage
        const displaySuggestions = (event) => {
        event.preventDefault();
        while(responseField.firstChild){
            responseField.removeChild(responseField.firstChild);
        };
        getSuggestions();
        }

        submit.addEventListener('click', displaySuggestions);


        1.  //Create a const named url and save to it the following URL (as a string): https://api.datamuse.com/words?
        // You'll be using this URL to direct your request.

        // Information to reach API
        const url = 'https://api.datamuse.com/words?';

        2.  //Underneath const url, create another const named queryParams and assign it to 'rel_rhy='
        // 'rel_rhy=' is the start of a parameter for the query string. This parameter will narrow your search to words that rhyme.

        // Information to reach API
        const url = 'https://api.datamuse.com/words?';

        const queryParams = 'rel_rhy=';

        3.  //In the function getSuggestions(), create a const named wordQuery and assign it to be inputField.value.
        // inputField.value grabs what is in the inputField and assigns it to the variable wordQuery.
        // You'll be working in getSuggestions() for the rest of the exercise.

        // AJAX function
        const getSuggestions = () => {
            const wordQuery = inputField.value;
        }

        4.  //Now create another const named endpoint, and assign equal to a string that concatenates url, queryParams, and wordQuery.
        // endpoint will store the value of the entire URL and query string.

        // AJAX function
        const getSuggestions = () => {
            const wordQuery = inputField.value;
            const endpoint = `${url}${queryParams}${wordQuery}`;
                            
        }

        5.  //You can now start on the XMLHttpRequest object. Declare a const named xhr and use the new operator to create the XMLHttpRequest object.

        const getSuggestions = () => {
            const wordQuery = inputField.value;
            const endpoint = `${url}${queryParams}${wordQuery}`;
            
            const xhr = new XMLHttpRequest();
        }

        6.  //Set the responseType of xhr to 'json'. When data is sent back, it will be in JSON format.
        // Assign an anonymous arrow function to the onreadystatechange event handler of xhr.

        const getSuggestions = () => {
            const wordQuery = inputField.value;
            const endpoint = `${url}${queryParams}${wordQuery}`;
            
            const xhr = new XMLHttpRequest();

            xhr.responseType = 'json';
  
            xhr.onreadystatechange = () => {
              
            }
        }

        7.  //Include the following code inside the code block of the anonymous arrow function you just created: if (xhr.readyState === XMLHttpRequest.DONE) { renderRawResponse(xhr.response) }
        // The renderRawResponse() helper function can be viewed at public/helperFunctions.js.

        const getSuggestions = () => {
            const wordQuery = inputField.value;
            const endpoint = `${url}${queryParams}${wordQuery}`;
            
            const xhr = new XMLHttpRequest();

            xhr.responseType = 'json';
  
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) { renderRawResponse(xhr.response) }
            }
        }

        8.  //Below the anonymous arrow function you just created (but still inside of getSuggestions()), call the .open() method on the XHR object and pass it 'GET' and endpoint as respective arguments. This method call will create a new request using the two arguments: 'GET' sets the method and url sets the destination.
        // Underneath .open(), call the .send() method on xhr and pass it no arguments. The .send() method will send the request to the server.

        const getSuggestions = () => {
            const wordQuery = inputField.value;
            const endpoint = `${url}${queryParams}${wordQuery}`;
            
            const xhr = new XMLHttpRequest();

            xhr.responseType = 'json';
  
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) { renderRawResponse(xhr.response) }
            }

            xhr.open('GET', endpoint);

            xhr.send();
        }
    }


    XHR GET REQUESTS IV {
        // A query string contains additional information to be sent with a request. The Datamuse API allows us to retrieve more specific data with query strings attached to the request URL.

        // A query string is separated from the URL using a ? character. After ?, you can then create a parameter which is a key value pair joined by a =. 
        
        Example:

        'https://api.datamuse.com/words?key=value'

        // If you want to add an additional parameter you will have to use the & character to separate your parameters.

        Example:

        'https://api.datamuse.com/words?key=value&anotherKey=anotherValue'

    }


    XHR POST REQUEST I {
        // The major difference between a GET request and POST request is that a POST request requires additional information to be sent through the request. This additional information is sent in the body of the post request.

        // We are going to reconstruct the code from the previous exercise step-by-step until we have written a complete AJAX POST request.

        Example:

        1.  //Create a new XMLHttpRequest object using the new operator, and save it in a const called xhr. The XMLHttpRequest object is used in JavaScript to interact with servers.

        const xhr = new XMLHttpRequest();

        2.  //Save the following URL to a const called url. Make sure the URL is wrapped in quotes so that it is a string.

        https://api-to-call.com/endpoint

        // The URL will direct the request to the correct server.

        const xhr = new XMLHttpRequest();
        const url = 'https://api-to-call.com/endpoint';

        3.  //Create a new const called data, and save this line of code to it:

        JSON.stringify({id: '200'});

        // JSON.stringify() will convert a value to a JSON string. By converting the value to a string, we can then send the data to a server.

        const xhr = new XMLHttpRequest();
        const url = 'https://api-to-call.com/endpoint';
        const data = JSON.stringify({id: '200'});

        4.  //Set the responseType property of the xhr object to be 'json'.

        const xhr = new XMLHttpRequest();
        const url = 'https://api-to-call.com/endpoint';
        const data = JSON.stringify({id: '200'});

        xhr.responseType = 'json';

        5.  //Set the xhr.onreadystatechange event handler equal to an anonymous arrow function. Leave the function empty until the next step.
        // .onreadystatechange will contain the event handler that will be called when xhr's state changes.

        const xhr = new XMLHttpRequest();
        const url = 'https://api-to-call.com/endpoint';
        const data = JSON.stringify({id: '200'});

        xhr.responseType = 'json';

        xhr.onreadystatechange = () => {

        }

        6.  //In the code block of the function you created in the previous step, add a conditional statement that checks to see if the readyState of xhr is equal to XMLHttpRequest.DONE.

        const xhr = new XMLHttpRequest();
        const url = 'https://api-to-call.com/endpoint';
        const data = JSON.stringify({id: '200'});

        xhr.responseType = 'json';

        xhr.onreadystatechange = () => {
            if(xhr.readyState === XMLHttpRequest.DONE){

            }
        }

        7.  //In the code block of the conditional statement, return the response property of xhr. The response property will contain the data that we're getting back from the POST request.

        const xhr = new XMLHttpRequest();
        const url = 'https://api-to-call.com/endpoint';
        const data = JSON.stringify({id: '200'});

        xhr.responseType = 'json';

        xhr.onreadystatechange = () => {
            if(xhr.readyState === XMLHttpRequest.DONE){
                return xhr.response;
            }
        }

        8.  //Below the function you created in the previous two steps, call the .open() method on the xhr object and pass it 'POST' and url as arguments.
        // .open() creates a new request and the arguments passed in determine what type of request is being made and where it's being made to.

        const xhr = new XMLHttpRequest();
        const url = 'https://api-to-call.com/endpoint';
        const data = JSON.stringify({id: '200'});

        xhr.responseType = 'json';

        xhr.onreadystatechange = () => {
            if(xhr.readyState === XMLHttpRequest.DONE){
                return xhr.response;
            }
        }

        xhr.open('POST', url);

        9.  //On the following line, call the .send() method on the xhr object and pass data as an argument.
        // .send() will send the request to the server.

        const xhr = new XMLHttpRequest();
        const url = 'https://api-to-call.com/endpoint';
        const data = JSON.stringify({id: '200'});

        xhr.responseType = 'json';

        xhr.onreadystatechange = () => {
            if(xhr.readyState === XMLHttpRequest.DONE){
                return xhr.response;
            }
        }

        xhr.open('POST', url);
        xhr.send(data);
    }


    XHR POST REQUEST II {
        // In this exercise, you'll be making a POST request to the Rebrandly API to shorten a URL.

        Example:

        // Information to reach API
        const apiKey = '<Your API Key>';
        const url = 'https://api.rebrandly.com/v1/links';

        // Some page elements
        const inputField = document.querySelector('#input');
        const shortenButton = document.querySelector('#shorten');
        const responseField = document.querySelector('#responseField');

        // AJAX functions
        const shortenUrl = () => {
        const urlToShorten = inputField.value;
        const data = JSON.stringify({destination: urlToShorten});

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                renderResponse(xhr.response);
                }
        }
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
            xhr.setRequestHeader('apikey', apiKey);
        xhr.send(data);
        }


        // Clear page and call AJAX functions
        const displayShortUrl = (event) => {
        event.preventDefault();
        while(responseField.firstChild){
            responseField.removeChild(responseField.firstChild);
        }
        shortenUrl();
        }

        shortenButton.addEventListener('click', displayShortUrl);


        1.  //Copy your Rebrandly API Key, and assign it to the const apiKey at the top of your code.

        2.  //Within the code block of shortenUrl(), create a const called urlToShorten, and save inputField.value to it. urlToShorten will now save the value of the input field

        // Note: for the remainder of this exercise's instructions we will be working inside the code block of shortenUrl()!

        3.  //Create a const called data, and save the following code to it:
        JSON.stringify({destination: urlToShorten});

        // We're including this information because the API expects to see an object with a key destination that has a value of a URL.

        4.  //Create a new XMLHttpRequest object using the new operator, and save it to a const called xhr.

        5.  //Set the responseType property of the xhr object to be 'json'.

        6.  //Save an empty anonymous arrow function to the onreadystatechange event handler of the xhr object. This function will not take in any parameters.
        // Inside the anonymous function's code block, include the following code inside of its code block:
        if (xhr.readyState === XMLHttpRequest.DONE) {
        renderRawResponse(xhr.response);
        }

        // The renderRawResponse function can be viewed at public/helperFunctions.js.

        7.  //Below the anonymous function you just created, call the .open() method on xhr, and pass it 'POST' and url as respective arguments.

        8.  //To access the Rebrandly API, we need a header with two key-value pairs. In the header, you must include values for 'Content-type' and an 'apikey'.

        // To set the header, we have to include the following code below our .open() method.
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.setRequestHeader('apikey', apiKey);

        9.  //On xhr, call the .send() method, and pass it data as an argument.

        10.  //Enter this URL into the input field, and click the shorten button in the web page.

        https://medium.com/@codecademy/breaking-the-coding-language-barrier-bf24652c3c60

        // Notice the object that came back!
        // Now replace renderRawResponse(xhr.response) with renderResponse(xhr.response). Run the code.
        // Paste the URL again and click "Shorten".
    }
        
}


REQUESTS II {
    
}



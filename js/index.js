$(document).ready(function () {
    //Stores the inputs from user to calculate later
    var inputs = [""];
    //String to store current input string
    var totalString;
    //Operators array for validation without .
    var operators1 = ["+", "-", "÷", "×"];
    //operators array for validation with .
    var operators2 = ["."];
    //operators array for  getTotal() validation
    var operators3 = [".","/", "*"];
    //Numbers array for validation
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //Adds value to inputs array and checks validation
    function getValue(input) {
        if (operators2.includes(inputs[inputs.length - 1]) === true && input === ".") {
            console.log("Duplicate '.'");
        }
        //Validation so it doesn't start with an operator
        else if (inputs.length === 1&& operators1.includes(input) === false) {
            inputs.push(input);
        }
        //If last character was not an operator add operator to the array
        else if (operators1.includes(inputs[inputs.length - 1]) === false) {
            inputs.push(input);
        } 
        else if (nums.includes(Number(input))) {
            inputs.push(input);
        }
        update();
    }
    //update output to display
    function update() {
        totalString = inputs.join("");
        $("#steps").html(totalString);
         console.log(inputs);
    }
    
    //calculate all
    function getTotal() {
        
        inputs.map(function(item,i){
            if(item==="%" && /\d/.test(inputs[i+1])){
                inputs[i+1]='*'+inputs[i+1]
            }
        })
      
        

        totalString = inputs.join("").replace(/×/g,"*").replace(/÷/g,"/").replace(/%/g,"/100");
        console.log(totalString);
        nums.includes(Number(totalString[0])) || !operators3.includes(totalString[0])
        ?$("#steps").html(eval(totalString))
        :$("#steps").html('Error');

    }

    $("li").on("click", function () {
        if (this.id === "deleteAll") {
            inputs = [""];
            update();
        } else if (this.id === "backOne") {
            inputs.pop();
            update();
        } else if (this.id === "total") {
            getTotal();
        } else {
            getValue($(this).html());
        }
    });

});



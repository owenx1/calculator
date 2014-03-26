/**
 * Created by OwenNetworked on 26/03/2014.
 */
var Calculate = (function() {

    //methods
    return {
        addTwoNums: function(number1, number2) {
            var num1 = parseInt(number1);
            var num2 = parseInt(number2);
            if (isNaN(num) == true || isNan(num) == true) {
                throw new Error (num1 +"or"+ num2+"is not a number");
            }
            var ans = num1 + num2;
            return Math.round(ans);
        },

        subtractTwoNums: function(number1, number2) {
            var num1 = parseInt(number1);
            var num2 = parseInt(number2);
            if (isNaN(num) == true || isNan(num) == true) {
                throw new Error (num1 +"or"+ num2+"is not a number");
            }
            var ans = num1 - num2;
            return ans;
        },

        multiplyTwoNums: function(number1, number2) {
            var num1 = parseInt(number1);
            var num2 = parseInt(number2);
            if (isNaN(num) == true || isNan(num) == true) {
                throw new Error (num1 +"or"+ num2+"is not a number");
            }
            var ans = num1 * num2;
            return ans;
        },

        divideTwoNums: function(number1, number2) {
            var num1 = parseInt(number1);
            var num2 = parseInt(number2);
            if (isNaN(num) == true || isNan(num) == true) {
                throw new Error (num1 +"or"+ num2+"is not a number");
            }
            if (num1 == 0 || num2 == 0) {
                throw new Error ("Cannot divide by zero, enter another number");
            }
            var ans = num1 * num2;
            return ans;
        }



    }
}())

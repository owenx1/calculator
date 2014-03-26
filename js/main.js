window._skel_config = {
    prefix: 'css/style',
    preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '481-1199', containers: 960 },
        mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};

$(document).ready(function() {
    $("#addButton").click(function() {
        var num1 = $("#number1").val();
        var num2 = $("#number2").val();


        if (((num1.length == 0) || (num2.length ==0))){
            alert("Please enter numbers in both boxes")
        }

            //$("#imperialinput").val(Converter.convertFromPoundsToKIlo(metricValue));
        document.getElementById("answer").innerHTML = (Calculate.addTwoNums(num1, num2));
        //$("answer").innerHTML = (Calculate.addTwoNums(num1, num2));
        //alert(Calculate.addTwoNums(num1, num2));
    });

    $("#minusButton").click(function() {
        var num1 = $("#number1").val();
        var num2 = $("#number2").val();


        if (((num1.length == 0) || (num2.length ==0))){
            alert("Please enter numbers in both boxes")
        }

        //$("#imperialinput").val(Converter.convertFromPoundsToKIlo(metricValue));
        document.getElementById("answer").innerHTML = (Calculate.subtractTwoNums(num1, num2));
        //$("answer").innerHTML = (Calculate.addTwoNums(num1, num2));
        //alert(Calculate.addTwoNums(num1, num2));
    });

    $("#multButton").click(function() {
        var num1 = $("#number1").val();
        var num2 = $("#number2").val();


        if (((num1.length == 0) || (num2.length ==0))){
            alert("Please enter numbers in both boxes")
        }

        //$("#imperialinput").val(Converter.convertFromPoundsToKIlo(metricValue));
        document.getElementById("answer").innerHTML = (Calculate.multiplyTwoNums(num1, num2));
        //$("answer").innerHTML = (Calculate.addTwoNums(num1, num2));
        //alert(Calculate.addTwoNums(num1, num2));
    });

    $("#divideButton").click(function() {
        var num1 = $("#number1").val();
        var num2 = $("#number2").val();


        if (((num1.length == 0) || (num2.length ==0))){
            alert("Please enter numbers in both boxes")
        }

        //$("#imperialinput").val(Converter.convertFromPoundsToKIlo(metricValue));
        document.getElementById("answer").innerHTML = (Calculate.divideTwoNums(num1, num2));
        //$("answer").innerHTML = (Calculate.addTwoNums(num1, num2));
        //alert(Calculate.addTwoNums(num1, num2));
    });

    $("#clear").click(function() {
        $("#number1").val('');
        $("#number2").val('');
    });

});

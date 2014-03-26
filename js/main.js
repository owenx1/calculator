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
        alert(Calculate.addTwoNums(num1, num2));
    });

    $("#clearbutton").click(function() {
        $("#imperialinput").val('');
        $("#metricinput").val('');
    });

});

var inBroker = document.getElementById('inBroker')
var inQ = document.getElementById('inQ')
var inPC = document.getElementById('inPC')
var outOverhead = 0;
var outTotal = 0;
var outBreakEven = 0;


function refresh()
{
    overhead();
}

function overhead()
{
    outOverhead = *5;
    document.getElementById('outOverhead').innerHTML = 0.01*20.0*0.95*document.getElementById('inBroker').innerHTML;
}

function total()
{
    
}

function breakEven()
{

}

function myFunction() {
    var number = "123";
    document.getElementById("myText").innerHTML = number;
}
document.getElementById("form-wordCount").addEventListener("submit", countWords);

// main function that is attached to the form submit event
function countWords(event){
    event.preventDefault(); // prevent the form from submitting
    var val = document.getElementById('words').value; // get the input value as a string
    var result = ''; // no results yet

    // enter your code here



    // output the final result
    document.getElementById('result').innerHTML = result;
}
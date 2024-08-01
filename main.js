// Select all HTML elements with the class "tab-links" and store them in a variable named "tablinks"
var tablinks = document.getElementsByClassName("tab-links");

// Select all HTML elements with the class "tab-contents" and store them in a variable named "tabcontents"
var tabcontents = document.getElementsByClassName("tab-contents");

// Define a function named "opentab" that takes a parameter named "tabname"
function opentab(tabname) {

    // Loop through each "tablink" in the "tablinks" variable
    for(tablink of tablinks) {

        // Remove the class "active-link" from the current "tablink"
        tablink.classList.remove("active-link")
    }

    // Loop through each "tabcontent" in the "tabcontents" variable
    for(tabcontent of tabcontents) {

        // Remove the class "active-tab" from the current "tabcontent"
        tabcontent.classList.remove("active-tab")
    }

    // Add the class "active-link" to the HTML element that triggered the event that called this function
    event.currentTarget.classList.add("active-link");

    // Select the HTML element with the ID specified in the "tabname" parameter and add the class "active-tab"
    document.getElementById(tabname).classList.add("active-tab")
}
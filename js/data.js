// Get the <datalist> and <input> elements.
var dataList = document.getElementById('json-datalist');
var input = document.getElementById('ajax');

// Create a new XMLHttpRequest.
var request = new XMLHttpRequest();

// Handle state changes for the request.
request.onreadystatechange = function(response) {
    if (request.readyState === 4) {
        if (request.status === 200) {
            // Parse the JSON
            var jsonOptions = JSON.parse(request.responseText);

            // Loop over the JSON array.
            jsonOptions.forEach(function(item) {
                // Create a new <option> element.
                var option = document.createElement('option');
                option.className = "dropdown-content";
                // Set the value using the item in the JSON array.
                option.value = item.REVIEW + ' | Rating: ' + item.RATING + '/10';
                // Add the <option> element to the <datalist>.
                dataList.appendChild(option);
            });

            // Update the placeholder text.
            input.placeholder = "e.g. Kendrick";
        } else {
            // An error occured :(
            input.placeholder = "Something went wrong :(";
        }
    }
};

// Update the placeholder text.
input.placeholder = "Loading options...";

// Set up and make the request.
request.open('GET', "/data/review_data.json", true);
request.send();
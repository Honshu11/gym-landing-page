// Get the form element
const form = document.querySelector('form');

// Create the submit event handler
const submitHandler = (event) => {

  // Prevent the default form submission behavior
  event.preventDefault();

  // Create an object to hold the form data
  const formData = {};

  // Get the value of each form element and add it to the formData object
  formData.name = document.querySelector('#full-name').value;
  formData.email = document.querySelector('#email').value;
  formData.services = {};
  
  var checkboxes = Array.from(form.querySelectorAll('.services input'));
  checkboxes.forEach(function(checkbox) {
    formData.services[checkbox.name] = checkbox.checked;
  })
  
  //formData.service = document.querySelector('input[name="service"]:checked').value;
  formData.message = document.querySelector('#message').value;
  console.log(formData);  

  fetch('/api/register', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'content-type': 'application/json',
    }
  })

  // Return the form data
  return formData;
};

// Register the submit event handler
form.addEventListener('submit', submitHandler);


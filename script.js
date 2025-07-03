
const form = document.querySelector('form'); 
function printFormData(formElement) {


  const formData = new FormData(formElement);

   const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

   if (checkbox.checked) {
    data.previousWorked = true;
  } else {
    data.previousWorked = false;
  }

  console.log("Form Data:", data);
}

  printFormData(form);

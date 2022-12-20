var contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var name = contactForm.elements.name.value;
  var email = contactForm.elements.email.value;
  var message = contactForm.elements.message.value;
  var messageData = {
    name,
    email,
    message
  };
  console.log('Message Data:', messageData);
  contactForm.reset();
}

contactForm.addEventListener('submit', handleSubmit);

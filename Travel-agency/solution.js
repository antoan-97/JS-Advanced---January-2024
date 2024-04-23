window.addEventListener('load', solution);

function solution() {
  let fullNameElement = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let phoneNumberElement = document.getElementById('phone');
  let adressElement = document.getElementById('address')
  let postalCodeElement = document.getElementById('code');
  let submitButton = document.getElementById('submitBTN');
  let editButton = document.getElementById('editBTN');
  let continueButtno = document.getElementById('continueBTN');


  submitButton.addEventListener('click', (e) => {
    let name = fullNameElement.value;
    let email = emailElement.value;
    let phone = phoneNumberElement.value;
    let adress = adressElement.value;
    let postCode = postalCodeElement.value;

    if (name.length <= 0 || email.length <= 0) {
      return
    }


    let ulListElements = document.getElementById('infoPreview');

    let nameLi = document.createElement('li');
    let emailLi = document.createElement('li');
    let phoneLi = document.createElement('li');
    let adressLi = document.createElement('li');
    let postCodeLi = document.createElement('li');

    nameLi.textContent = `Full Name: ${name}`
    emailLi.textContent = `Email: ${email}`
    phoneLi.textContent = `Phone Number: ${phone}`
    adressLi.textContent = `Address: ${adress}`
    postCodeLi.textContent = `Postal Code: ${postCode}`


    ulListElements.appendChild(nameLi);
    ulListElements.appendChild(emailLi);
    ulListElements.appendChild(phoneLi);
    ulListElements.appendChild(adressLi);
    ulListElements.appendChild(postCodeLi);


    fullNameElement.value = ''
    emailElement.value = ''
    phoneNumberElement.value = ''
    adressElement.value = ''
    postalCodeElement.value = ''

    e.target.disabled = true;
    editButton.disabled = false;
    continueButtno.disabled = false;


    editButton.addEventListener('click', (e) => {
      fullNameElement.value = name
      emailElement.value = email
      phoneNumberElement.value = phone
      adressElement.value = adress
      postalCodeElement.value = postCode

      editButton.disabled = true;
      continueButtno.disabled = true;
      submitButton.disabled = false;
      ulListElements.innerHTML = ''

    })



  })



  continueButtno.addEventListener('click', (e) => {
    let divBlock = document.getElementById('block');
    let h3 = document.createElement('h3')

    divBlock.innerHTML = ''
    h3.textContent = "Thank you for your reservation!"


    divBlock.appendChild(h3)
  })



}

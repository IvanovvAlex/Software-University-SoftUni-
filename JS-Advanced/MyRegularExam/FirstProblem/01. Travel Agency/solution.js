window.addEventListener('load', solution);
function solution() {
 
  let fullName = document.getElementById('fname');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let adress = document.getElementById('address');
  let code = document.getElementById('code');
  let Submitbutton = document.getElementById('submitBTN');
  Submitbutton.addEventListener('click', manageInfo);

  function manageInfo(e) {
      e.preventDefault();

      if (!fullName.value || !email.value) {
          return;
      }

      let editButton = document.getElementById('editBTN');
      let continueButton = document.getElementById('continueBTN');
      let previewPage = document.getElementById('infoPreview');
      Submitbutton.disabled = true;
      editButton.disabled = false;
      continueButton.disabled = false;

      let NameLI = document.createElement('li');
      NameLI.textContent = `Full Name: ${fullName.value}`
      previewPage.appendChild(NameLI);
      fullName.value = null;

      let EmailLi = document.createElement('li');
      EmailLi.textContent = `Email: ${email.value}`
      previewPage.appendChild(EmailLi);
      email.value = null;

      let PhoneLi = document.createElement('li');
      PhoneLi.textContent = `Phone Number: ${phone.value}`
      previewPage.appendChild(PhoneLi);
      phone.value = null;

      let AdressLi = document.createElement('li');
      AdressLi.textContent = `Address: ${adress.value}`
      previewPage.appendChild(AdressLi);
      adress.value = null;

      let postalLi = document.createElement('li');
      postalLi.textContent = `Postal Code: ${code.value}`
      previewPage.appendChild(postalLi);
      code.value = null;

      editButton.addEventListener('click', inputBack);
      continueButton.addEventListener('click', continNext);


      function inputBack(e) {
          e.preventDefault();
          while (previewPage.firstChild) {
              previewPage.removeChild(previewPage.firstChild);
          }

          fullName.value = NameLI.textContent.replace('Full Name: ', "");
          email.value = EmailLi.textContent.replace('Email: ', "");;
          letphoneNum = Number(PhoneLi.textContent.replace('Phone Number: ', ''));
          phone.value = letphoneNum;
          adress.value = AdressLi.textContent.replace('Address: ', '');
          let codeNum = Number(postalLi.textContent.replace('Postal Code: ', ''))
          code.value = codeNum;

          Submitbutton.disabled = false;
          editButton.disabled = true;
          continueButton.disabled = true;

      }

      function continNext() {

          e.preventDefault();
          let div = document.getElementById('block');
          while (div.firstChild) {
              div.removeChild(div.firstChild);
          }
          let h3 = document.createElement('h3');
          h3.textContent = 'Thank you for your reservation!';
          div.appendChild(h3);
      }
  }
}
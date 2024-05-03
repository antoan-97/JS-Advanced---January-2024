window.addEventListener('load', solve);

function solve() {

    let nameElement = document.getElementById('name');
    let emailElement = document.getElementById('email');
    let conctactElement = document.getElementById('contact-number');
    let preferredClassElement = document.getElementById('class-type');
    let preferredTimeElement = document.getElementById('class-time');
    let nextButton = document.getElementById('next-btn');
    let ulClass = document.querySelector('.class-info')
    let ulConfimClass = document.querySelector('.confirm-class');
    let editButton = document.createElement('button');
    let continueButton = document.createElement('button');
    let confimButton = document.createElement('button');
    let cancelButton = document.createElement('button');
    let doneButton = document.createElement('button')
    let divElement = document.getElementById('main')
    let bodyElement = document.getElementById('body')


    nextButton.addEventListener('click', (e) => {
        e.preventDefault()
        let name = nameElement.value;
        let email = emailElement.value;
        let contact = conctactElement.value;
        let prClass = preferredClassElement.value;
        let prTime = preferredTimeElement.value;

        if (name.length <= 0 || email.length <= 0 ||
            contact.length <= 0 || prClass.length <= 0 ||
            prTime.length <= 0) {
            return
        }

        let liClass = document.createElement('li');
        let article = document.createElement('article');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');

        liClass.classList.add('info-item');
        article.classList.add('personal-info');
        editButton.classList.add('edit-btn');
        continueButton.classList.add('continue-btn');

        p1.textContent = name;
        p2.textContent = email;
        p3.textContent = contact;
        p4.textContent = prClass;
        p5.textContent = prTime;
        editButton.textContent = 'Edit'
        continueButton.textContent = 'Continue'


        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);
        article.appendChild(p5);

        liClass.appendChild(article);
        liClass.appendChild(editButton);
        liClass.appendChild(continueButton);

        ulClass.appendChild(liClass);

        nameElement.value = ''
        emailElement.value = ''
        conctactElement.value = ''
        preferredClassElement.value = ''
        preferredTimeElement.value = ''
        nextButton.disabled = true


        editButton.addEventListener('click', (e) => {
            nameElement.value = name;
            emailElement.value = email;
            conctactElement.value = contact;
            preferredClassElement.value = prClass;
            preferredTimeElement.value = prTime;
            liClass.remove()
            nextButton.disabled = false
        })

        continueButton.addEventListener('click',(e) =>{
            editButton.remove()
            
            confimButton.classList.add('confirm-btn');
            cancelButton.classList.add('cancel-btn');

            confimButton.textContent = 'Confim'
            cancelButton.textContent = 'Cancel'

            liClass.appendChild(cancelButton);
            liClass.appendChild(confimButton);
            ulConfimClass.appendChild(liClass);

            continueButton.remove()
            continueButton.remove()
        })



        cancelButton.addEventListener('click',(e) =>{
            liClass.remove();
            nextButton.disabled = false;
        })


        confimButton.addEventListener('click',(e) =>{
            divElement.remove()
            let h1Element = document.createElement('h1');
            
            doneButton.setAttribute('id', 'done-btn');
            h1Element.setAttribute('id', 'thank-you');

            h1Element.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!"
            doneButton.textContent = 'Done'

            bodyElement.appendChild(h1Element);
            bodyElement.appendChild(doneButton);

        })

        doneButton.addEventListener('click', function() {
            location.reload();
        });








    })
}





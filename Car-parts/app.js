window.addEventListener('load', solve);

function solve() {

        let carModelElement = document.getElementById('car-model');
        let carYearElement = document.getElementById('car-year');
        let partNameElement = document.getElementById('part-name');
        let partNumberElement = document.getElementById('part-number');
        let conditionElement = document.getElementById('condition');
        let nextButton = document.getElementById('next-btn');
        let ulInfoList = document.querySelector('.info-list');
        let ulConfimList = document.querySelector('.confirm-list');
        let img = document.getElementById('complete-img');
        let pCompleteText = document.getElementById('complete-text');



        nextButton.addEventListener('click', (e) => {
                e.preventDefault()
                let carModel = carModelElement.value;
                let carYear = Number(carYearElement.value);
                let partName = partNameElement.value;
                let partNumber = partNumberElement.value;
                let condition = conditionElement.value;

                if (carModel.length <= 0
                        || carYear < 1980 ||
                        carYear > 2023 ||
                        partName.length <= 0 || partNumber.length <= 0 ||
                        condition.length <= 0 || carYear.length <= 0) {
                        return
                }

                let liElement = document.createElement('li');
                let article = document.createElement('article');
                let p1 = document.createElement('p')
                let p2 = document.createElement('p')
                let p3 = document.createElement('p')
                let p4 = document.createElement('p')
                let p5 = document.createElement('p')
                let editButton = document.createElement('button');
                let continueButton = document.createElement('button');

                liElement.classList.add('part-contetn');
                editButton.classList.add('edit-btn');
                continueButton.classList.add('continue-btn');

                editButton.textContent = 'Edit'
                continueButton.textContent = 'Continue'
                p1.textContent = `Car Model: ${carModel}`
                p2.textContent = `Car Year: ${carYear}`
                p3.textContent - `Part Name: ${partName}`
                p4.textContent = `Part Number: ${partNumber}`
                p5.textContent = `Condition: ${condition}`


                article.appendChild(p1);
                article.appendChild(p2);
                article.appendChild(p3);
                article.appendChild(p4);
                article.appendChild(p5);
                liElement.appendChild(article);
                liElement.appendChild(editButton);
                liElement.appendChild(continueButton);
                ulInfoList.appendChild(liElement);


                carModelElement.value = ''
                carYearElement.value = ''
                partNameElement.value = ''
                partNumberElement.value = ''
                conditionElement.value = ''
                pCompleteText.textContent = ''
                img.style.visibility = "hidden";
                nextButton.disabled = true;

                editButton.addEventListener('click', (e) => {
                        carModelElement.value = carModel;
                        carYearElement.value = carYear;
                        partNameElement.value = partName;
                        partNumberElement.value = partNumber;
                        conditionElement.value = condition;
                        liElement.remove();
                        nextButton.disabled = false;
                })

                continueButton.addEventListener('click', (e) => {
                        let confimButton = document.createElement('button');
                        let cancelButton = document.createElement('button');

                        confimButton.classList.add('confirm-btn');
                        cancelButton.classList.add('cancel-btn');

                        confimButton.textContent = 'Confirm'
                        cancelButton.textContent = 'Cancel'

                        liElement.appendChild(confimButton)
                        liElement.appendChild(cancelButton)
                        ulConfimList.appendChild(liElement);
                        editButton.remove();
                        continueButton.remove();


                        confimButton.addEventListener('click',(e) =>{
                                liElement.remove()
                                nextButton.disabled = false;
                                img.style.visibility = "visible";
                                pCompleteText.textContent = 'Part is Ordered!'
                        })

                        cancelButton.addEventListener('click', (e) =>{
                                liElement.remove()
                                nextButton.disabled = false;
                        })
                })

               

               


        })
};





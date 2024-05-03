window.addEventListener('load', solution);

function solution() {

  let employeeElement = document.getElementById('employee');
  let categoryElement = document.getElementById('category');
  let urgencyElement = document.getElementById('urgency');
  let assignetTeamElement = document.getElementById('team');
  let descriptionElement = document.getElementById('description');
  let addButton = document.getElementById('add-btn');
  let ulPreviewList = document.querySelector('.preview-list');
  let ulPendingList = document.querySelector('.pending-list')
  let ulResolvedList = document.querySelector('.resolved-list')
  let edinButton = document.createElement('button');
  let resolvedButton = document.createElement('button');
  let continuButton = document.createElement('button');
  let clearButton = document.createElement('button');

  addButton.addEventListener('click', (e) => {
    let employee = employeeElement.value;
    let category = categoryElement.value;
    let urgency = urgencyElement.value;
    let assignet = assignetTeamElement.value;
    let description = descriptionElement.value;

    if (employee.length <= 0 || category.length <= 0 ||
      urgency.length <= 0 || assignet.length <= 0 ||
      description.length <= 0) {
      return
    }

    let liHeader = document.createElement('li');
    let article = document.createElement('article');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5Descrie = document.createElement('p')


    liHeader.classList.add('problem-content');
    edinButton.classList.add('edit-btn');
    continuButton.classList.add('continue-btn');
    liHeader.style.display = 'flex';
    article.style.display = 'flex';



    p1.textContent = `From: ${employee}`
    p2.textContent = `Category: ${category}`
    p3.textContent = `Urgency: ${urgency}`
    p4.textContent = `Assigned to: ${assignet}`
    p5Descrie.textContent = `Description: ${description}`
    edinButton.textContent = 'Edit'
    continuButton.textContent = 'Continue'


    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);
    article.appendChild(p5Descrie);
    liHeader.appendChild(article);
    liHeader.appendChild(edinButton);
    liHeader.appendChild(continuButton);
    ulPreviewList.appendChild(liHeader);


    employeeElement.value = ''
    categoryElement.value = ''
    urgencyElement.value = ''
    assignetTeamElement.value = ''
    descriptionElement.value = ''
    addButton.disabled = true



    edinButton.addEventListener('click', (e) => {
      employeeElement.value = employee
      categoryElement.value = category
      urgencyElement.value = urgency
      assignetTeamElement.value = assignet
      descriptionElement.value = description
      addButton.disabled = false
      liHeader.remove()
    })


    continuButton.addEventListener('click',(e) =>{
      resolvedButton.classList.add('resolve-btn');
      resolvedButton.textContent = 'Resolved'

      liHeader.appendChild(resolvedButton)
      ulPendingList.appendChild(liHeader);
      edinButton.remove()
      continuButton.remove()
    })


    resolvedButton.addEventListener('click',(e) =>{

      clearButton.classList.add('clear-btn');
      clearButton.textContent = 'Clear'

      liHeader.appendChild(clearButton);
      ulResolvedList.appendChild(liHeader);
      resolvedButton.remove()
    })


    clearButton.addEventListener('click',(e) =>{
      liHeader.remove()
    })



  })


}





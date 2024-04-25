window.addEventListener('load', solve);

function solve() {
    let genreElement = document.getElementById('genre');
    let nameElement = document.getElementById('name');
    let authorElement = document.getElementById('author');
    let dataElement = document.getElementById('date');
    let addButton = document.getElementById("add-btn");
    let divAllHitsContainer = document.querySelector('.all-hits-container');



    addButton.addEventListener('click', (e) => {
        e.preventDefault()

        if (genreElement.value <= 0
            || nameElement.value <= 0
            || authorElement.value <= 0
            || dataElement.value <= 0) {
            return
        }

        let genre = genreElement.value;
        let name = nameElement.value;
        let author = authorElement.value;
        let data = dataElement.value;


        let divHitsInfo = document.createElement('div');
        let h2genre = document.createElement('h2');
        let h2name = document.createElement('h2');
        let h2author = document.createElement('h2');
        let h2data = document.createElement('h3');
        let saveButton = document.createElement('button');
        let likeButton = document.createElement('button')
        let deleteButton = document.createElement('button')
        let img = document.createElement('img')


        saveButton.classList.add('save-btn')
        likeButton.classList.add('like-btn')
        deleteButton.classList.add('delete-btn')
        divHitsInfo.classList.add('hits-info')
        img.src = "./static/img/img.png"


        saveButton.textContent = 'Save song'
        likeButton.textContent = 'Like song'
        deleteButton.textContent = 'Delete'

        h2genre.textContent = `Genre: ${genre}`
        h2name.textContent = `Name: ${name}`
        h2author.textContent = `Author: ${author}`
        h2data.textContent = `Date: ${data}`


        divHitsInfo.appendChild(img);
        divHitsInfo.appendChild(h2genre);
        divHitsInfo.appendChild(h2name);
        divHitsInfo.appendChild(h2author);
        divHitsInfo.appendChild(h2data);
        divHitsInfo.appendChild(saveButton);
        divHitsInfo.appendChild(likeButton);
        divHitsInfo.appendChild(deleteButton);

        divAllHitsContainer.appendChild(divHitsInfo);

        genreElement.value = ''
        nameElement.value = ''
        authorElement.value = ''
        dataElement.value = ''


        likeButton.addEventListener('click', (e) => {
            let totalLikes = document.querySelector('.likes p')
            let currentLikes = parseInt(totalLikes.textContent.split(": ")[1])
            totalLikes.textContent = `Total Likes: ${currentLikes + 1}`;
            e.target.disabled = true;
        })

        saveButton.addEventListener('click', (e) => {
            let divSavedContainer = document.querySelector('.saved-container')
            likeButton.remove()
            saveButton.remove()

            divSavedContainer.appendChild(divHitsInfo)
        })

        deleteButton.addEventListener('click', (e) => {
            divHitsInfo.remove()
        })


    })

}
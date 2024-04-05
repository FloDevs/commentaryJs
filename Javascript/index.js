/* Recuperation des input */

function getFirstName() {
    let inputFirstname = document.getElementById('first-name');
    let firstNameValue = inputFirstname.value;
    if (firstNameValue.trim() === '') {
        throw new Error('Le champ du prénom est vide.');
    } else { let firstName = document.createTextNode(firstNameValue);
        return firstName;}
    }

function getLastName() {
    let inputLastName = document.getElementById('last-name');
    let lastNameValue = inputLastName.value;
    if (lastNameValue.trim() === '') {
        throw new Error('Le champ du nom est vide.');
    } else {
    let lastName = document.createTextNode(lastNameValue);
    return lastName;}
}

function getMessage() {
    let inputTextMessage = document.getElementById('message');
    let textMessageValue = inputTextMessage.value;
    if (textMessageValue.trim() === '') {
        throw new Error('Le champ du message est vide.');
    } else {
    let textMessage = document.createTextNode(textMessageValue);
    return textMessage;}
}

/* creation du Container principal et secondaire */
function createContainerMain() {
    let divMain = document.createElement('div');
    divMain.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');
    
    return divMain;
}

function createContainerSecond() {
    let divContent = document.createElement('div');
    divContent.classList.add('flex-1', 'py-10', 'border-t', 'border-gray-200');
    return divContent
}

/* creation des Containers pour les noms et message */
function createContainerName() {
    let titleContainer = document.createElement('h3');
    titleContainer.classList.add('font-medium', 'text-gray-900');
    return titleContainer;
}

function createContainerMessage() {
    let divComment = document.createElement('div');
    divComment.classList.add('prose', 'prose-sm', 'mt-4', 'max-w-none', 'text-gray-500');
    return divComment;
}


function addComment() {

    try {
    let theFirstname = getFirstName();
    let theLastname = getLastName();
    let theMessage = getMessage();
    if ( !theFirstname|| !theLastname || !theMessage) {
        throw new Error('Veuillez remplir tous les champs.');
    }
    let space = document.createTextNode("  ");
    
    let containerName = createContainerName();
    containerName.appendChild(theFirstname);
    containerName.appendChild(space);
    containerName.appendChild(theLastname);
    
    let containerMessage = createContainerMessage();
    let paragraph = document.createElement('p');
    paragraph.appendChild(theMessage);
    containerMessage.appendChild(paragraph);
    
    let secondContainer = createContainerSecond();
    secondContainer.appendChild(containerName);
    secondContainer.appendChild(containerMessage);
    
    let mainContainer = createContainerMain();
    mainContainer.appendChild(secondContainer);
    
    let commentList = document.getElementById('comment-list');
    commentList.appendChild(mainContainer);
    
    }
    
    
    catch (error) {
        console.error('Une erreur s\'est produite:', error.message);
        // Afficher le message d'erreur
        document.getElementById('error-message').style.display = 'block';
        // Vous pouvez également modifier le texte du message d'erreur si nécessaire
        document.getElementById('error-message').querySelector('h3').innerText = error.message;
    } 

}


function hideErrorMessage() {
    document.getElementById('error-message').style.display = 'none';
}


function resetInputFields() {
    // Réinitialisation des valeurs des champs de saisie à une chaîne vide
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('message').value = '';
}

    
function sendCommentary (event) {
        hideErrorMessage();
        addComment();
        resetInputFields();
        event.preventDefault();
}


let myButton = document.querySelector('button');
myButton.addEventListener('click', sendCommentary);



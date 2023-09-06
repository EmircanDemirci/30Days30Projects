const userForm = document.getElementById("github-form");
const usernameForm = document.getElementById("githubname");
const userList = document.getElementById("last-users");

const clearUsers = document.getElementById("clear-last-users");

const github = new Github();
const ui = new UI();

eventListeners();


function eventListeners(){

    userForm.addEventListener("submit" , getData);
    document.addEventListener("DOMContentLoaded" , getAllData);
    clearUsers.addEventListener("click" , deleteData);
}


function getData(e){
    const username = usernameForm.value.trim();

    if(username === ""){
        ui.showError("Type a username." , "danger");
    }
    else{
        github.getGithubData(username)
        .then(response => {
            if(response.user.message === "Not Found"){
                ui.showError(response.user.message , "danger");
            }
            else{
                ui.addSearchedUserToUI(username)
                Storage.addUsersToStorage(username)
                ui.showInfo(response.user);
                ui.showRepos(response.repos);
            }
        })
        .catch(err=>console.error(err))
    }
    ui.clearInput();
    e.preventDefault()
}
function getAllData(){
    //get datas from storage
    let users = Storage.getUsersFromStorage();

    let result = ``;

    users.forEach(user=>{
        result += `<li class="list-group-item">${user}</li>`
    })

    userList.innerHTML = result;
}

function deleteData(){
    //delete last users
    if(confirm("Are you sure?")){
        Storage.deleteUsersFromStorage()
        ui.deleteAllFromStorage();
    }
}

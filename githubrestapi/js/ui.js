class UI{

    constructor(){
        this.searchBox = document.getElementById("githubname");
        this.divProfiles = document.getElementById("profile");
        this.divRepos = document.getElementById("repos");
        this.lastUsers = document.getElementById("last-users");
        this.formCard = document.querySelector(".card-body")
    }


    clearInput(){
        this.searchBox.value = "";
    }

    showInfo(user){
        if(user.company === null){
            user.company = "Not specified";
        }
        if(user.email === null){
            user.email = "Not specified."
        }
        if(user.location === null){
            user.location = "Not specified."
        }
        this.divProfiles.innerHTML = `
        <div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="" target = "_blank">
                         <img class="img-fluid mb-2" style="border-radius:500px" src="${user.avatar_url}"> </a>
                         <hr>
                         <div id="fullName" class="text-center"><strong> ${user.login}</strong></div>
                         <hr>
                         <div id="bio" class="text-center">${user.bio}</div>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-dark">
                                  Followers  <span class="badge badge-light">${user.followers}</span>
                            </button>
                            <button class="btn btn-dark">
                                 Following  <span class="badge badge-light">${user.following}</span>
                              </button>
                            <a href="${user.repos_url}" class="btn btn-dark">
                                Repos  <span class="badge badge-light">${user.public_repos}</span>
                            </a>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="company">${user.email}</span>
                                    
                                </li>
                                
                            </div>
                               
                            
                      </div>
                </div>
        
        `
    }

    showError(message,type){
        const div = document.createElement("div");

        div.className = `alert alert-${type}`
        div.textContent = message;

        this.formCard.appendChild(div);

        setInterval(function(){
            div.remove();
        } , 2000)
    }

    showRepos(repos){
        this.divRepos.innerHTML = "";
        repos.forEach(repo=>{
            this.divRepos.innerHTML += `
            <div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                        <span></span> 
                        <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-dark">
                                Stars  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                            </button>

                            <button class="btn btn-dark">
                                Forks  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                            </button>
                    
                        </div>
                </div>

                </div>
            `
        })
        
        
    }   

    addSearchedUserToUI(username){
        let users = Storage.getUsersFromStorage();

        if(users.indexOf(username) === -1){
             /**<li class="list-group-item">asdaskdjkasjkşdjşasjd</li> */
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = username;

            this.lastUsers.appendChild(li);
        }

    }

    deleteAllFromStorage(){
        while(this.lastUsers.firstElementChild !== null){
            this.lastUsers.removeChild(this.lastUsers.firstElementChild);
        }
    }


}
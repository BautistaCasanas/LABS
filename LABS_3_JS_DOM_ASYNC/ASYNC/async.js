


$("#userBtn").on("click",async function(){
    try{

        let api = await fetch(`https://reqres.in/api/users?page=1`);

        let data = await api.json();
        console.log(data);
        buildUserTable(data);

    }catch(e){
        console.log(e);
    }

});


function buildUserTable(data){    
    let userList = "";

    data.data.map(user => {
        userList += `
        <div class="card col-2">
            <div class="card-header">
                <img src="${user.avatar}" alt="Avatar">
            </div>
            <div class="card-body">
                <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                <p class="card-text">${user.email}</p>
            </div>
        </div>`;

        let listUserHtml = document.getElementById("userList");
        listUserHtml.innerHTML = userList;
    });
}
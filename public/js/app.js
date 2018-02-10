const mbtn = document.querySelector('#mbtn');
const result = document.querySelector('#result');
displayUsers();
const users = [];

function sendUsers(e) {
    // e.preventDefault();
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    // console.log(fname.value);
    // console.log(lname.value);
    if(firstName === '' && lastName === ''){
        alert('Name is required');
    }
    else{
        displayUsers();
    }
    firstName.value = '';
    lastName.value = '';
}

// console.log(users);

function displayUsers() {
    const url = '/api';
    const XHR = new XMLHttpRequest();
    XHR.open('GET', url, true);

    XHR.onload = function () {
        if (this.status == 200) {
            const data = JSON.parse(this.response);
            // console.log(data);
            let res = '';
            for (let i of data) {
                const li = `<li class="list-group-item">${i.firstName} ${i.lastName} </li>`;
                res = res + li;
            }
            result.innerHTML = res;
        }
    }

    XHR.onerror = function () {
        console.log('We got a error')
    }

    // XHR.onreadystatechange = function(){
    //     if(this.status == 200 && this.readyState == 4){
    //         console.log(this.responseURL);
    //     }
    // }

    XHR.send();
}

mbtn.addEventListener('click', sendUsers);
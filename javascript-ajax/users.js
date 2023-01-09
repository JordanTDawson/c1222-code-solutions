var userList = document.querySelector('#user-list');
function getUserList(user) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    var users = xhr.response;
    for (var index = 0; index < this.response.length; index++) {
      var user = users[index];
      var list = document.createElement('li');
      list.textContent = user.name;
      userList.appendChild(list);
    }
  });
  xhr.send();
}

getUserList(userList);

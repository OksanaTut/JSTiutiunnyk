let url = new URL(location.href);
let id=url.searchParams.get('id');
fetch('http://jsonplaceholder.typicode.com/users/'+id)
.then (value => value.json())
.then (user=>{
        let div=document.createElement('div');
        div.innerText=JSON.stringify(user);
        document.body.appendChild(div);
    })
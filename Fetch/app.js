fetch('https://dog.ceo/api/breed/hound/images')
.then(response => response.json())
.then(data => {
    console.log(data.message)

    for(let i = 0; i < (data.message).length ; i++){
    cuerpo.innerHTML += `
    
    <img src="${data.message[i]}" width="50%">
    
    `}
}).catch(error => console.log(error))
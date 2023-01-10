function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    if(Client.checkForName(formText)){
        fetch('http://localhost:8081/article', {
            method: 'POST',
            credentials: 'same-origin',
            cache: 'no-cache',
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: formText}),
        }).then(res => {}).then((res)=>{
            document.getElementById('postive').innerHTML = `Positive: ${res.score_tag}`
            document.getElementById('Neutral').innerHTML = `Neutral: ${res.confidence}`
            document.getElementById('Negative').innerHTML = `Negative: ${res.agreement}`
        })
    }
    else{
        alert('Url is invalid')
    }
}

export { handleSubmit }

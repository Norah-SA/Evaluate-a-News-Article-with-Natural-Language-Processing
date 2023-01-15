 function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log(formText)

    postData('http://localhost:8081/article', {url : formText}).then((data)=>{
        console.log(data)
        document.getElementById('results').innerHTML = "Agreement: " + data.agreement + " " + "Confidence: "  + data.confidence + " "+ "\nSubjectivity: " + data.subjectivity + " " + "\nIrony: " + data.irony + "";
    })
}
const postData = async(url = "", data = {}) =>{
    const respose = await fetch(url,{
        method: "POST",
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    try{

        const newData = await respose.json()
        console.log(newData)
        return newData
    }catch{
        
        console.log(error)
        
    }
}
export { handleSubmit }

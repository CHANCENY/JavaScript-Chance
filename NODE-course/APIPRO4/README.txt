check EXAMPLE6 for html form of messaging we are related

Rule:

post request: 


//make this object with these keys name, email, message
 const messages = {
        name:namefield.value,
        email: emailfield.value,
        message:messagefiled.value
    }

    //construct the XMLHttpRequest to use to send data to server
    const request = new XMLHttpRequest(); 
    request.open('POST','https://cryptic-hamlet-98350.herokuapp.com');
    request.send(JSON.stringify(messages));   
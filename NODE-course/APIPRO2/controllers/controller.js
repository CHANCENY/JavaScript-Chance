const {getUsersAll,getUserById,update,deleteUser }= require('../FileSystem/writeFile');

async function checkUrl(req,res){

    try {

        const listElement = req.url.split('/');
    
        if(listElement[2] == 'usersAll'){
            console.log("userall");
            getUsersAll(res);
        }
        else{
            const user =await getUserById(listElement[2])
            .then((u) => JSON.stringify(u));

            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(user);               
        }
        
    } catch (error) {
       console.log(error); 
    }
}

function putUrl(req, res){

    try {
        const listElement = req.url.split('/');
        update(req,res, listElement[2]);
        
    } catch (error) {
        console.log(error);
    }
   
}

function removeUser(req,res){
    deleteUser(req.url, res);
}


module.exports ={
    checkUrl,
    putUrl,
    removeUser
}
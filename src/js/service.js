window.save = async function(url , data)
{
    let response = true; 
    await axios.post(url, data).then(rsp=>{
        response = true;
    }).catch(function(erro){
        response = false;
    });
    return response;
}


window.get = async function(url , id = 0)
{
    let is_id = '';
    if(id != 0)
    {is_id = '/'+id;}
     await axios.get(url + is_id ).then(rsp=>{
        return rsp.data.data;
    }).catch(function(erro){
        response = null;
    });
}


window.validEmail = function (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
(function(window){

    function connection(){
        
    }

    connection.prototype.excuteCode = function(code){
        return new Promise(function(resolve,reject){
            chrome.tabs.executeScript({
                code : code
            },function(result){
                resolve(result);
            })
        })
        
    }

    connection.prototype.excuteFile = function(route){
        return new Promise(function(resolve, reject){
            chrome.tabs.executeScript({
                file : route
            },function(result){
                resolve(result);
            })
        })
    }

    connection.prototype.addListener = function(target, callback){
        target.addListener(callback);
    }
   
    window.connection = connection;

})(window);
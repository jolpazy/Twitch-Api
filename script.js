$(document).ready(function(){

  var names = ["ESL_SC2", "iKasperr", "Elajjaz", "Staiy", "freecodecamp",  "OgamingSC2", "cretetion",  "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var url = "https://wind-bow.gomix.me/twitch-api/streams/";


for (i = 0; i < names.length; i++){

    

$.ajax({
                url : url + names[i],
                dataType : "jsonp",
                success : function(data) {
           console.log(data);
           if (data["stream"] == null){

            var x = data["_links"]["self"].split("/");
                
                $("#results").append(
                    
                    
                    "<a href ='https://www.twitch.tv/" + x[x.length -1].toLowerCase() +"' target='blank'><p class = 'offline'>"
                     + x[x.length -1] + 
                     " is offline </p></a>"
                
                );//result append
                
           } else {
               var x = data["_links"]["self"].split("/");
                  
                   $("#results").append(
                      "<a href ='" + data["stream"]["channel"]["url"] +"'><p class = 'online'>" + data["stream"]["channel"]["display_name"] + " is streaming " + data["stream"]["game"]   + "</p></a>"
                    );//results append
                    
           }//else
                
                 
                
                 
                    }//success
                    });//ajax
                

}//for
    
 
 
 






});//dc ready
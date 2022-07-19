

//api call to get lon and lat from city name

//convert unix time stamps\










var dayArr = [];


function dateConvert(unix){

    var mSecs = unix * 1000;
    var dateObj = new Date(mSecs);
    var date = dateObj.toLocaleDateString();
    




   // console.log(days[0]+ days[1]);
//     var day1El = document.getElementById("day1");
//    // day1El.textContent = 
//     var day1El = document.getElementById("day2");
//     var day1El = document.getElementById("day3");
//     var day1El = document.getElementById("day4");
//     var day1El = document.getElementById("day5");
console.log(days);


dayArr.push(date);

insertdays();


}


console.log(dayArr);


function insertTemp(temp, wind, clouds, humidity, uv) {
    var tempEl = document.getElementById("temp");
    tempEl.textContent = temp;
    var windEl = document.getElementById("wind");
    windEl.textContent = wind;
    var cloudsEl = document.getElementById("clouds");
    cloudsEl.textContent = clouds;
    var humidityEl = document.getElementById("humidity");
    humidityEl.textContent = humidity;
    var uvEl = document.getElementById("uv");
    uvEl.textContent = uv;

    console.log(wind);
    console.log(clouds);
    console.log(humidity);
    console.log(uv);

     //uv index colors
     if (uv < 3){
        uvEl.style.backgroundColor = 'green';
    }else if (uv < 8 && uv > 3)  {
        uvEl.style.backgroundColor = 'orange';
    }else if (uv > 8){
        uvEl.style.backgroundColor = 'red';        
    }






  }




var city 


searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click",function(){

    city = document.getElementById("cityInput").value;
    console.log(city);

    var cityEl = document.getElementById("city");
    cityEl.textContent = city;


    getApiCity();


    var buttons = document.createElement("button");
    buttons.textContent = city;
    buttons.setAttribute("class", "btn btn-primary buttons")
    buttons.setAttribute("id", city);
    document.getElementById("generatedBtn").appendChild(buttons);




});




//var generatedButtons = document.getElementsByClassName("buttons")
document.addEventListener("click" , function(e){


    if (e.target.className == 'btn btn-primary buttons'){
        city = e.target.textContent;
        console.log(e.target.textContent);
        getApiCity();
        var cityEl = document.getElementById("city");
        cityEl.textContent = city;

    }




});











var unix = [];



function getApiCity() {
   
    //var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=34&lon=-82&units=imperial&appid=3d9697a6ba508bb7886b7b06c67401a3';
    var requestUrlcity = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=3d9697a6ba508bb7886b7b06c67401a3';
  
    fetch(requestUrlcity)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

 
 //get lon and lat for city

        var lon = data.coord.lon;
        var lat = data.coord.lat;


        console.log(lon +' and '+ lat);


        getApi(lon,lat);

       
       
    
        
      });
  }


//getApiCity();



var days = [];


function getApi(lon,lat) {
   
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=imperial&appid=3d9697a6ba508bb7886b7b06c67401a3';
    //var requestUrlcity = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=3d9697a6ba508bb7886b7b06c67401a3';
  
    fetch(requestUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        //get dates for today plus 5 day forecast dates


        for(var i = 0; i < 6; i++){
            days = data.daily[i].dt;
            unixForecast = data.daily[i].dt;
            
            //daily temperature forecast
            dailyTemp = data.daily[0].temp.day;
            //console.log(unix);
            
            dateConvert(days);

            console.log(days);

        }

//get wind
      
       (data.daily[0].wind_speed);

       var windDay1El = document.getElementById("windDay1");
       windDay1El.textContent = data.daily[1].wind_speed;
       var windDay2El = document.getElementById("windDay2");
       windDay2El.textContent = data.daily[2].wind_speed;
       var windDay3El = document.getElementById("windDay3");
       windDay3El.textContent = data.daily[3].wind_speed;
       var windDay4El = document.getElementById("windDay4");
       windDay4El.textContent = data.daily[4].wind_speed;
       var windDay5El = document.getElementById("windDay5");
       windDay5El.textContent = data.daily[5].wind_speed;




       //cloud forecast
       var humDay1El = document.getElementById("humDay1");
       humDay1El.textContent = data.daily[1].humidity;
       var humDay2El = document.getElementById("humDay2");
       humDay2El.textContent = data.daily[2].humidity;
       var humDay3El = document.getElementById("humDay3");
       humDay3El.textContent = data.daily[3].humidity;
       var humDay4El = document.getElementById("humDay4");
       humDay4El.textContent = data.daily[4].humidity;
       var humDay5El = document.getElementById("humDay5");
       humDay5El.textContent = data.daily[5].humidity;





     //temp forecast
     var tempDay1El = document.getElementById("tempDay1");
     tempDay1El.textContent = data.daily[1].temp.max;
     var tempDay2El = document.getElementById("tempDay2");
     tempDay2El.textContent = data.daily[2].temp.max;
     var tempDay3El = document.getElementById("tempDay3");
     tempDay3El.textContent = data.daily[3].temp.max;
     var tempDay4El = document.getElementById("tempDay4");
     tempDay4El.textContent = data.daily[4].temp.max;
     var tempDay5El = document.getElementById("tempDay5");
     tempDay5El.textContent = data.daily[5].temp.max;


        var unix = data.daily[0].dt;
        dateConvert(unix);
        var temp = data.current.temp;
        var wind = data.current.wind_speed;
        var clouds = data.current.weather[0].description;
        var humidity = data.current.humidity;
        var uv = data.current.uvi; 

       insertTemp(temp,wind,clouds,humidity,uv);

      


    //icons
    var iconDay1El = document.getElementById("iconDay1");
    var iconDay1code = data.daily[1].weather[0].icon;
    document.getElementById("iconDay1").src="./assets/icons/"+iconDay1code+".png";

    var iconDay2El = document.getElementById("iconDay2");
    var iconDay2code = data.daily[2].weather[0].icon;
    document.getElementById("iconDay2").src="./assets/icons/"+iconDay2code+".png";

    var iconDay3El = document.getElementById("iconDay3");
    var iconDay3code = data.daily[3].weather[0].icon;
    document.getElementById("iconDay3").src="./assets/icons/"+iconDay3code+".png";

    var iconDay4El = document.getElementById("iconDay4");
    var iconDay4code = data.daily[4].weather[0].icon;
    document.getElementById("iconDay4").src="./assets/icons/"+iconDay4code+".png";

    var iconDay5El = document.getElementById("iconDay5");
    var iconDay5code = data.daily[5].weather[0].icon;
    document.getElementById("iconDay5").src="./assets/icons/"+iconDay5code+".png";

    var iconDay5El = document.getElementById("iconCurr");
    var iconDay0code = data.daily[0].weather[0].icon;
    document.getElementById("iconCurr").src="./assets/icons/"+iconDay0code+".png";





    
   // console.log(data.daily[1].weather);




    //    console.log('UNIXXXXXX'+ unixForecast[1]);
    //    console.log('UNIXXXXXX'+ unixForecast[2]);
       
       console.log("lon and lat: " + lon+lat);
       
    
        
      });
  }
  
  //fetchButton.addEventListener('click', getApi);
  //getApi();








  function insertdays() {
    var day1El = document.getElementById("day1");
    day1El.textContent = dayArr[1];
    var day2El = document.getElementById("day2");
    day2El.textContent = dayArr[2];
    var day3El = document.getElementById("day3");
    day3El.textContent = dayArr[3];
    var day4El = document.getElementById("day4");
    day4El.textContent = dayArr[4];
    var day5El = document.getElementById("day5");
    day5El.textContent = dayArr[5];
  

 




  }





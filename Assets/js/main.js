"use strict";
document.inputName.addEventListener("submit", function(e){
    e.preventDefault();

    // const searchBtn = document.querySelector(".btn");
    
    const apiKey = "7a5eea2e554d57f05bd450c9a9c68085";
    const city = this.city.value; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    // const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    // searchBtn.addEventListener("click", ()=>{
    //     if(city.value.trim() != '') {
    //         weatherInput()
    //         city.value= ''
    //         city.blur()
    //     }
    // })

    // const currentDateTxt = document.querySelector(".date");
    
    // function getCurrentDate() {
    //     const currentDate = new Date()
    //     // const options = {
    //     //     weekday: 'short',
    //     //     month:'short',
    //     //     day: '2-digit',}
    //     console.log(currentDate);
    // }


    fetch(url).then(i=>i.json()).then(i=>{
        console.log(i)

        document.querySelector("#cityName").innerHTML=i.name+ ', '+ i.sys.country;
        // document.querySelector(".date").innerHTML=i.dt_txt;
        
        let icon= i.weather[0].icon;
        let iconurl= "https://api.openweathermap.org/img/w/" + icon +".png";
        document.querySelector(".icon").src=iconurl;
        
        document.querySelector("#temperature").innerHTML=Math.floor(i.main.temp)+ '°c';
        document.querySelector("#cloud").innerHTML=i.weather[0].description;
    });
});
const url="https://api.openweathermap.org/geo/1.0/direct?q=India&limit=5&appid=f771f769c494d4fa0271304524c7f90b";
document.body.innerHTML=`
<div > 
<h1 class= "card-title ">Weather report</h1>
</div>
 `
let apiData

function getdata(){
    
   let data= fetch(url)
   .then(result =>result.json())
   .then(data=>{console.log(data) 
   
    data.forEach(element => {
        console.log(element.name);
        displaycity(element);

    });
});
   
}
getdata();

function displaycity(element){
     console.log(element);
     document.body.innerHTML+=`
     <div class="card-body container" style="width: 200px;"> 
     <p class="card-text" > City Name: ${element.name}</p>
     <p class="card-text" > Country Name: ${element.country}</p>
     <p class="card-text"> Latitute: ${element.lat}</p>
     <p class="card-text"> State Name: ${element.state}</p>
     </div>
     `

}

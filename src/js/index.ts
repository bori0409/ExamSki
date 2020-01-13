import axios,{
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"
interface Iski {
  
    id: number; 
    skiLenght: number;
    skiType: string;
    price: number;
}

let WebUrl: string = "https://examski.azurewebsites.net/api/ski";


let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getAll");
let buttonElement2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getType");
let buttonElement3: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Add");
let buttonElement4: HTMLButtonElement = <HTMLButtonElement>document.getElementById("range");
let buttonElement5: HTMLButtonElement = <HTMLButtonElement>document.getElementById("range2");
let divElement : HTMLDivElement = <HTMLDivElement> document.getElementById("content"); 
let TypeInput : HTMLInputElement = <HTMLInputElement>document.getElementById("Type");
let mytype:string = TypeInput.value;
console.log(mytype)
buttonElement.addEventListener("click",
() => {
    console.log("button click");
    axios.get<Iski[]>(WebUrl)
    .then(function(response){

console.log(response);
 let result : string = "<ol>";
 response.data.forEach((ski : Iski) => {
    if(ski == null)
      {
        result += "<li> NULL element</li>"        
      }
    else
      {
        result += "<li> "+ski.id +"<b> Ski Lenght</b>: "+ ski.skiLenght + " <b>Type</b> :" + ski.skiType +"<b> Price:</b>" +ski.price +"</li>"        

      }
    });

result += "</ol>";

divElement.innerHTML += result;

})});

buttonElement2.addEventListener("click",
() => {
    console.log("button click");
    axios.get<Iski[]>(WebUrl+"/type/"+TypeInput.value)
    .then(function(response){

console.log(response);
 let result : string = "<ol>";
 response.data.forEach((ski : Iski) => {
    if(ski == null)
      {
        result += "<li> NULL element</li>"        
      }
    else
      {
        result += "<li> "+ski.id +"<b> Ski Lenght</b>: "+ ski.skiLenght + " <b>Type</b> :" + ski.skiType +"<b> Price:</b>" +ski.price +"</li>"        

      }
    });

result += "</ol>";

divElement.innerHTML += result;

})});
let InputID : HTMLInputElement = <HTMLInputElement>document.getElementById("id");
let LenghtInput : HTMLInputElement = <HTMLInputElement>document.getElementById("lenght");
let SkiTypeInput : HTMLInputElement = <HTMLInputElement>document.getElementById("skitype");
let PriceInput : HTMLInputElement = <HTMLInputElement>document.getElementById("price");


buttonElement3.addEventListener("click",
() => {
    console.log("button click");
    axios.post<Iski>(WebUrl,{id : InputID.value, skiLenght :LenghtInput.value , skiType : SkiTypeInput.value, price : PriceInput.value})
    .then(function(response:AxiosResponse){
        console.log("response " + response.status + " " +response.statusText )
        console.log(response.status)
        
        if (response.status == 200 )
        divElement.innerHTML += "Successfully Added "
    })
    .catch(function (error: AxiosError){ console.log(error)})});
   

   
    //var myInt4 = Number("MinPrice.value")
   ;
    buttonElement4.addEventListener("click",
    () => {let MinPrice : HTMLInputElement = <HTMLInputElement>document.getElementById("rangemin");
    var numMin = + MinPrice.value;
    console.log(numMin);
    
      let MaxPrice : HTMLInputElement = <HTMLInputElement>document.getElementById("rangemax");
      var numMax = +MaxPrice.value;
      console.log(numMax)
        console.log("button click");
        axios.get<Iski[]>(WebUrl)
        .then(function(response){
    
    console.log(response);
     let result : string = "<ol>";
     response.data.forEach((ski : Iski) => {
        if(ski.price > numMin && ski.price < numMax )
          {
            result += "<li> "+ski.id +"<b> Ski Lenght</b>: "+ ski.skiLenght + " <b>Type</b> :" + ski.skiType +"<b> Price:</b>" +ski.price +"</li>"       
          }
        else
          {
                  
    
          }
        });
    
    result += "</ol>";
    
    divElement.innerHTML += result;
    
    })});

    buttonElement5.addEventListener("click",
    () => {let MinPrice : HTMLInputElement = <HTMLInputElement>document.getElementById("rangemin");
    var min : number = 4500;
    var max: number= 5000;
    
        console.log("button click");
        axios.get<Iski[]>(WebUrl)
        .then(function(response){
    
    console.log(response);
     let result : string = "<ol>";
     response.data.forEach((ski : Iski) => {
        if(ski.price > min && ski.price < max )
          {
            result += "<li> "+ski.id +"<b> Ski Lenght</b>: "+ ski.skiLenght + " <b>Type</b> :" + ski.skiType +"<b> Price:</b>" +ski.price +"</li>"       
          }
        else
          {
                  
    
          }
        });
    
    result += "</ol>";
    
    divElement.innerHTML += result;
    
    })});
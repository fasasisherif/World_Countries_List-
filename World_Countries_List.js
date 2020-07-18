let h4 = document.querySelector("h4")
let h5 = document.querySelector("h5")
let startWord = document.querySelector(".startWord")
let startAnyWord = document.querySelector(".startAnyWord")
let sortWord = document.querySelector(".sortWord")
let input = document.querySelector("input")
let countriesInfo = document.querySelector(".countries_info")
let myData;
let countryNames = []
let sortedCountryNames = []
let unSortNames = []
let count;
let countSort = 0;
let countSort2 = 0;
let regEx

let div1;
let countryAppear;



const url = "https://restcountries.eu/rest/v2/all"

fetch(url)
.then(apiResponse => apiResponse.json())
.then(data => {
		 myData = data
		 myData.forEach(country => {
				countryNames.push(country.name)
				})
			
		h4.textContent =`Total Number of countries : ${countryNames.length}`
  	startAnyWord.style.fontSize ="10px"
		})



.then(me => {
		sortedCountryNames = countryNames.slice().reverse()
		unSortNames = sortedCountryNames.slice().reverse()
		})





.then( one => {
		countriesInfo.innerHTML =""
		countryAppear = 0;
				
		for(const name of countryNames){
	      	div1 = document.createElement("div")
	      span1 = document.createElement("span")
	   	   span1.textContent = name
	   	   div1.appendChild(span1)
	      	countriesInfo.append(div1)
	      	div1.setAttribute("class","country")
	      	div1.style.animation = `appear .5s ${countryAppear = countryAppear+0.01}s forwards`
	      	}
	     })
	    	
	      





const myfuncA = () => {
		
		startWord.style.backgroundColor = "#5933cc"
		startAnyWord.style.backgroundColor = "#9955ff"
		sortWord.style.backgroundColor = "#9955ff"
		}

const myfunc1 = () => {
		countriesInfo.innerHTML =""
		regEx = new RegExp("^" + input.value,"i")
		count = 0
		countryAppear = 0;
		
		startWord.style.backgroundColor = "#5933cc"
		startAnyWord.style.backgroundColor = "#9955ff"
		sortWord.style.backgroundColor = "#9955ff"
		startWord.style.fontSize = "10.6px"
		startAnyWord.style.fontSize = "10px"		
		
		for(const name of countryNames){
			if(input.value != ""){
				if (name.match(regEx)){
						count++;
	      	div1 = document.createElement("div")
	      span1 = document.createElement("span")
	   	   span1.textContent = name
	   	   div1.appendChild(span1)
	      	countriesInfo.append(div1)
	      	div1.setAttribute("class","country")
	      	div1.style.animation = `appear .5s ${countryAppear = countryAppear+0.01}s forwards`
	      	}
	      }
	   	}
	   	if(countriesInfo.textContent != ""){
	   h5.textContent = `Countries starting with ${input.value} are ${count}`	
	   }else{
	   		h5.textContent = ""
	   		}
	 startAnyWord.style.fontSize = "10px"
  		}
		

const myfunc0 = () =>{
  	  if(startWord.style.backgroundColor == "rgb(89, 51, 204)"){
		  myfunc1()
		 }
		}








const myfuncB = () => {
		startWord.style.backgroundColor = "#9955ff"
		startAnyWord.style.backgroundColor = "#5933cc"
		sortWord.style.backgroundColor = "#9955ff"
		}
		

const myfunc4 = () => {
		countriesInfo.innerHTML =""
		regEx = new RegExp(input.value,"i")
		count = 0
		countryAppear = 0;
		
		startWord.style.backgroundColor = "#9955ff"
		startAnyWord.style.backgroundColor = "#5933cc"
		sortWord.style.backgroundColor = "#9955ff"
		startAnyWord.style.fontSize = "10.5px"
		startWord.style.fontSize = "9.9px"
		
		
		for(const name of countryNames){
			if(input.value != ""){
				if (name.match(regEx)){
						count++
	      	div1 = document.createElement("div")
	      span1 = document.createElement("span")
	   	   span1.textContent = name
	   	   div1.appendChild(span1)
	      	countriesInfo.append(div1)
	      	div1.setAttribute("class","country")
	      	div1.style.animation = `appear .5s ${countryAppear = countryAppear+0.01}s forwards`
	      	}
	      }
	   	}
	   if(countriesInfo.textContent != ""){
	   h5.textContent = `Countries containing ${input.value} are ${count}`	
	   }else{
	   		h5.textContent = ""
	   	}
		}


const myfunc3 = () =>{
		if(startAnyWord.style.backgroundColor == "rgb(89, 51, 204)"){
		  myfunc4()
		 }
		}



const theSortFunc = () => {
		
			if (countSort%2 == 0){
	if(sortWord.style.backgroundColor == "rgb(89, 51, 204)"){		
      countryNames = sortedCountryNames
				myfunc1()
		startWord.style.backgroundColor = "#9955ff"
	 startAnyWord.style.backgroundColor = "#9955ff"
  	sortWord.style.backgroundColor = "#5933cc"
  	sortWord.textContent ="sort z - a"
				 }
				}
		
		
    if(startWord.style.backgroundColor == "rgb(89, 51, 204)"){			
  unSortNames = countryNames
	 countryNames = sortedCountryNames
	 myfunc1()
		startWord.style.backgroundColor = "#9955ff"
	 startAnyWord.style.backgroundColor = "#9955ff"
  	sortWord.style.backgroundColor = "#5933cc"
  	
				}
			
			
	if(sortWord.style.backgroundColor == "rgb(89, 51, 204)"){		
      countryNames = sortedCountryNames
				myfunc1()
		startWord.style.backgroundColor = "#9955ff"
	 startAnyWord.style.backgroundColor = "#9955ff"
  	sortWord.style.backgroundColor = "#5933cc"
  	sortWord.textContent ="sort a -	 z"
				 }

		
if (countSort%2 == 1){
	if(sortWord.style.backgroundColor == "rgb(89, 51, 204)"){		
      countryNames = unSortNames
				myfunc1()
		startWord.style.backgroundColor = "#9955ff"
	 startAnyWord.style.backgroundColor = "#9955ff"
  	sortWord.style.backgroundColor = "#5933cc"
  	sortWord.textContent ="sort z - a"
				 }
				}
			
	countSort++
	countryNames = unSortNames
		}





const theSortFunc2 = () => {
	 startAnyWord.style.fontSize = "10.5px"
		
		if (countSort2 % 2 == 0){
	if(sortWord.style.backgroundColor == "rgb(89, 51, 204)"){		
			if(startAnyWord.style.fontSize == "10.5px"){
      countryNames = sortedCountryNames
				myfunc4()
		startWord.style.backgroundColor = "#9955ff"
	 startAnyWord.style.backgroundColor = "#9955ff"
  	sortWord.style.backgroundColor = "#5933cc"
  	sortWord.textContent ="sort z - a"
				 }
				}
			}
		
		
		if(startAnyWord.style.backgroundColor == "rgb(89, 51, 204)"){
				if(startAnyWord.style.fontSize == "10.5px"){			
  unSortNames = countryNames
	 countryNames = sortedCountryNames
	 myfunc4()
		startWord.style.backgroundColor = "#9955ff"
	 startAnyWord.style.backgroundColor = "#9955ff"
  	sortWord.style.backgroundColor = "#5933cc"
  	startAnyWord.style.fontSize == "10.5px"
  	    }
				}
			
			
	if(sortWord.style.backgroundColor == "rgb(89, 51, 204)"){
			if(startAnyWord.style.fontSize == "10.5px"){
      countryNames = sortedCountryNames
				myfunc4()
		startWord.style.backgroundColor = "#9955ff"
	 startAnyWord.style.backgroundColor = "#9955ff"
  	sortWord.style.backgroundColor = "#5933cc"
  	sortWord.textContent ="sort a - z"
					}
				}

		
if (countSort2 % 2 == 1){
	if(sortWord.style.backgroundColor == "rgb(89, 51, 204)"){		
			if(startAnyWord.style.fontSize == "10.5px"){
      countryNames = unSortNames
				myfunc4()
		startWord.style.backgroundColor = "#9955ff"
	 startAnyWord.style.backgroundColor = "#9955ff"
  	sortWord.style.backgroundColor = "#5933cc"
  	sortWord.textContent ="sort z - a"
				 }
				}
			}
		
	countSort2++
	countryNames = unSortNames
		}








startAnyWord.addEventListener("click",myfuncB)
startAnyWord.addEventListener("click",myfunc3)
input.addEventListener("input",myfunc3)


startWord.addEventListener("click",myfuncA)
startWord.addEventListener("click",myfunc0)
input.addEventListener("input",myfunc0)


const mine = () => {
if((startAnyWord.style.fontSize != "10.5px") && (startWord.style.fontSize == "10.6px")){
theSortFunc()
 startWord.style.fontSize = "10.6px"
  }
}

const mine2 = () => {
if((startAnyWord.style.fontSize == "10.5px") && (startWord.style.fontSize == "9.9px")){
theSortFunc2()
 }
}

sortWord.addEventListener("click",mine2)
sortWord.addEventListener("click",mine)

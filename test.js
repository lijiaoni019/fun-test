const form1 = document.getElementById("location");
const suggest = document.getElementById("suggestionBox");
const div = document.getElementById("disapear");
let count = [];
const insertText =`<div id="disapear"><p>NEARBY GATEWAY</p>


    	<div class="linebox">
    		<a href="#" class="flatbottom">Shenzhen</a>
    		<a href="#" class="flatbottom"> Huizhou</a>
    		<a href="#"class="flatbottom"> Zhuhai</a>
    		<a href="#"class="flatbottom"> Yangjiang</a>    		
    	</div>
    	<div class="linebox">
    		<a href="#"class="flatbottom">Shantou</a>
    		<a href="#"class="flatbottom"> Shanwei</a>
    		<a href="#"class="flatbottom"> Chaozhou</a>
    		<a href="#"class="flatbottom"> Guilin</a>
    	</div></div>`


document.addEventListener ("click", (event) => {
	if (count.length==0 && event.target==form1){
	suggest.insertAdjacentHTML("afterbegin", insertText); 
	suggest.classList.add("suggestion"); 
	count.push(1); 
	console.log(count.length)};
	if (count.length==1 && event.target!==form1) {
	suggest.classList.remove("suggestion"); 
	suggest.innerHTML="";
	count.pop(1);
	console.log(count.length)}
})

// form1.addEventListener ("click", (event) => {if (event.target !== event.currentTarget){
// 	console.log ("mmp")}})






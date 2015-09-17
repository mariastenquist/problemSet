
var firstReverse = function(str){
	var string = ""
	for(var i = str.length -1; i>=0; --i){
		console.log(str[i])
	}
}
	console.log(firstReverse("hokey"))


var firstReverse = function(str){
	var stringArray = str.split("")
	var output = []
	for( var i=0; i < stringArray.length; i++){
		output.splice(0,0,stringArray[i])
		// console.log(output)
	} 
		return output.join("")
}
	console.log(firstReverse("giraffe"))


var str = "it's warm in here"
var emptyString = ""
	for (var i=str.length-1; i>=0; i--){
		console.log(str[i])
		emptyString += str[i]
	}
	console.log(emptyString)


var firstReverse = function(str){
	var stringArray = str.split("")
	stringArray.reverse()
	console.log(stringArray)
	return(stringArray.join(""))
}
console.log(firstReverse("hello world"))


// Write a function swapCase that takes a single string parameter and swaps the case of each character. For example: if a string is "Hello World" the output should be "hELLO wORLD". Let numbers and symbols stay the way they are.

var swapCase = function(str){
	var stringArray = str.split("")
	var output = []
	for( var i=0; i < stringArray.length; i++){
		
			output += stringArray[i].toUpperCase;
		}		
	} 
}
console.log(swapCase("hello world"))


var swapCase = function(string){
	string.toUpperCase()
	var arr = string.split(" ")
	for(var i = 0; i < arr.length; i++){
		var letter = arr[i].charAt(0).toLowerCase()
	}
	return letter
}
console.log(swapCase('hello world'))

// var swapCase =



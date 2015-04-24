// Given: WED | April 22, 2015
// Completed: THR | April 23, 2015


// TASK: Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string. For example, ‘CoDewArs’ would be 0, 2, 5.


// Note: To access Character within a String, simply variable and character index number



// Charmaine's Version 

// source: http://www.w3schools.com/js/js_strings.asp

// STEP 1: checks which letters in the string are Uppercase.
	// source: http://www.w3schools.com/js/js_comparisons.asp
	// source: http://stackoverflow.com/questions/6090182/program-checking-string-of-characters-for-capital-letters

// STEP 2: creates a new array called cap.

// STEP 3: isolates all Uppercase characters and puts them in an array using the push() method.
	// source: http://www.w3schools.com/jsref/jsref_push.asp

// STEP 4: creates a new array called capIndex.

// STEP 5: defines idx to find all the occurrences of an element.
	// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
	// source: http://stackoverflow.com/questions/5236431/find-the-index-value-of-a-character-stored-in-arraylist

// STEP 6: retrieves all indices of Uppercase letters and puts into an array using indexOf() method.
	// source: http://www.w3schools.com/jsref/jsref_indexof_array.asp

// STEP 7: returns an array of indices of Uppercase letters.


function CapLetIdx(string){
	
	function isUpperCase(aChar){
        return (aChar >= 'A') && (aChar <= 'Z');
    }

    var cap = []; // isolates Uppercase characters into an array.
    for (var i = 0; i < string.length; i++){
		if (isUpperCase(string[i]) == true){
			cap.push(string[i]);
		}
	}

	var capIndex = []; // retrieves indices into an array.
	var idx = string.indexOf(cap[i]);
	for (var i = 0; i < cap.length; i++){
		idx = string.indexOf(cap[i], idx + 1);
		capIndex.push(idx);
	}

	return capIndex;

};

console.log(CapLetIdx('HoOoOoOoORAHHH'));





// Stanley's Version 
// uses regexp and match() method. 
	// source: http://www.w3schools.com/jsref/jsref_match.asp
// error, doesn't account for REPEAT characters

// function indexOfCapitals(word){
// 	var matches = word.match(/[A-Z]/g), results = [];
// 	for (var i = 0; i < matches.length; i++){
// 		results.push(word.indexOf(matches[i],i));
// 	}
// 	return results;
// }

// console.log(indexOfCapitals('WhheReZZ'));

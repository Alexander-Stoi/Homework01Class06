
//----------------------------<P>--------------------------------------------------


let paragraphs = document.getElementsByTagName('p');

console.log(paragraphs);
console.log(paragraphs[0].innerText);
console.log(paragraphs[1].innerText);


let newText = `New Text from JS`

paragraphs[0].innerText = newText;
paragraphs[1].innerText = newText;

console.log(paragraphs);
console.log(paragraphs[0]);
console.log(paragraphs[1]);

console.log(paragraphs[0].innerText);
console.log(paragraphs[1].innerText);



// // // Koga bi bile povekje tagovi i sakame da smenime nekoj tekst vo site

// // function changeText(text, arrayPharagraphs) {
// //     let newArray = [];

// //     for (i = 0; i < arrayPharagraphs.length; i++) {
// //         newArray[i] = text;
// //     }

// //     return newArray;
// // }


// // let txtFromJS = `New Text from JS`;
// // console.log(changeText(txtFromJS, paragraphs));

// // let OutputArray = changeText(txtFromJS, paragraphs);
// // console.log(OutputArray[0]);
// // console.log(OutputArray[1]);



////----------------------------HEADERS--------------------------------------------------------



// let headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
// console.log(headers);

// let newHeaderText = `New text Query`;

// headers[0].innerText = newHeaderText;
// headers[1].innerText = newHeaderText;
// headers[2].innerText = newHeaderText;

// console.log(headers[0]);
// console.log(headers[1]);
// console.log(headers[2]);


// // Koga bi bile povekje tagovi i sakame da smenime nekoj tekst vo site

// function changeText(text, arrayPharagraphs) {
//     let newArray = [];

//     for (i = 0; i < arrayPharagraphs.length; i++) {
//         newArray[i] = text;
//     }

//     return newArray;
// }


// let txtFromJS = `New Text from JS`;
// console.log(changeText(txtFromJS, headers));

// let OutputArray = changeText(txtFromJS, headers);
// console.log(OutputArray[0]);
// console.log(OutputArray[1]);
// console.log(OutputArray[2]);



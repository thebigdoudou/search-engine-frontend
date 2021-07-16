// import React from 'react';
// import ReactWordcloud from 'react-wordcloud';
// import 'tippy.js/dist/tippy.css';
// import 'tippy.js/animations/scale.css';
//
// const callbacks = {
//     getWordColor: word => word.value > 50 ? "blue" : "red",
//     onWordClick: console.log,
//     onWordMouseOver: console.log,
//     getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
// }
// const options = {
//     rotations: 2,
//     rotationAngles: [-90, 0],
// };
// const size = [600, 400];
// const words = [
//     {
//         text: 'told',
//         value: 64,
//     },
//     {
//         text: 'mistake',
//         value: 11,
//     },
//     {
//         text: 'thought',
//         value: 16,
//     },
//     {
//         text: 'bad',
//         value: 17,
//     },
// ]
//
// function MyWordcloud() {
//     return (
//         <ReactWordcloud
//             callbacks={callbacks}
//             options={options}
//             size={size}
//             words={words}
//         />
//     );
// }
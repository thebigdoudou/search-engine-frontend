import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

export default function wordCloud() {
    const callbacks = {
        getWordColor: word => word.value > 50 ? "blue" : "red",
        onWordClick: console.log,
        onWordMouseOver: console.log,
        getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
    }
    const options = {
        rotations: 2,
        rotationAngles: [-90, 0],
    };
    const size = [600, 400];
    const words = [{"text":"欧洲杯","value":13},{"text":"金靴","value":5},{"text":"球员","value":5},{"text":"进球","value":3},{"text":"决赛","value":3},{"text":"本届","value":3},{"text":"凯恩","value":2},{"text":"历史","value":2},{"text":"金球奖","value":2},{"text":"赔率","value":2},{"text":"当选","value":2},{"text":"最佳","value":2},{"text":"希克","value":2},{"text":"出场","value":2},{"text":"美洲杯","value":2}]


    return (
        <ReactWordcloud
            callbacks={callbacks}
            options={options}
            size={size}
            words={words}
        />
    );
}
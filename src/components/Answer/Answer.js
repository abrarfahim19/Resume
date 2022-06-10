import React from 'react';
import './Answer.css'
const Answer = () => {
    return (
        <div className='answer'>
            <br />
            <h3> How does react work? </h3>
            <p> React is mainly mantained by Facebook Inc. Its Declarative Paradigm. SO its easier to make application with it. And it has some flexibility to its asset. You cant quite call it a Javascript framework. You have to call it a JavaScript library. We can use it to build very complex web application. </p>
            <br />
            <br />
            <h3>How useState works</h3>
            <p>useState is a hook. It enables the user to declare one or more variables in fuction component. We pass the initial state in the (first bracket) and it returns us two thing. One is the variable and the other is a fuction. Further we use the fuction to setState of the fuction. It is a convention to write the function following setVariable. The camelcase style is also followed in here.</p>
        </div>
    );
};

export default Answer;
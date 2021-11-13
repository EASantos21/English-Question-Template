/**
 * @jest-environment jsdom
 */

const sum = require("./script")

questionTest1('checks if MC question runs', () => {
    const question = 'question3';
    expect(checkQuestion(question)).anything();
})

questionTest2('checks if MC question runs', () => {
    const question = 'question5';
    expect(checkQuestion(question)).anything();
})

questionTest3('checks if the FR question runs', () => {
    const question = 'question7';
    expect(checkQuestion(question)).anything();
})

questionTest4('checks if the FR question does not run with a MC question', () => {
    const question = 'question4';
    expect(checkQuestion(question)).anything();
})

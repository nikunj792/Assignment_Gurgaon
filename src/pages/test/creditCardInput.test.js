import React from 'react';
import CreditCardInput from '../creditCardInput'
import renderer from 'react-test-renderer';

describe('Test Cases Input', ()=>{
    test('Credit Card Input Test', () => {
        renderer.create(<CreditCardInput />)
    });
})


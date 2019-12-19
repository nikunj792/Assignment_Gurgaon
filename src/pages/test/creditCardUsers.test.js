import React from 'react';
import renderer from 'react-test-renderer';
import CreditCardUsers from '../creditCardUsers';

describe('Test Cases Users', ()=>{
    test('Credit Card User Test', () => {
        const props = {
            users : [{"userName":"test1","userCCNumber":"4111111111111111","userCCLimit":"£4444","balance":"£0"}]
        }
        renderer.create(<CreditCardUsers content={props.users}/>)
    });
})


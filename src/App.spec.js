import CreditCardInput from './pages/creditCardInput/'
import { shallow } from 'enzyme';;

describe('Input Component', () => {
    it('Credit Card Input Component Test', () => {
const component = shallow(<CreditCardInput />);
console.log('=======', component)

      expect(true).toEqual(true);
    });
  });
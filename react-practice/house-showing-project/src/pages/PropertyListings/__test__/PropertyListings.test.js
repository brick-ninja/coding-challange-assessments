import { shallow } from 'enzyme';
import PropertyListings from '..';
import { sample_estate } from '../../../components/card/testSampleData';
import moment from 'moment';

describe('rendering dom test', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<PropertyListings />);
  });
  it('Renders correctly with no error message', () => {
    expect(wrapper.find('#property-listings-container')).not.toBeNull();
  });
  it('Renders Header component', () => {
    expect(wrapper.find('#property-listings-container').text()).toContain(
      'Header',
    );
  });
});
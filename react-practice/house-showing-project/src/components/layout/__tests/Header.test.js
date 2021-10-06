import { shallow } from 'enzyme';
import Header from '..';

describe('header - rendering dom test', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(
      <Header name = 'test'/>,
    );
  })
  it('renders without any issue', () => {
    expect(wrapper.find('#header-container')).not.toBeNull()
  })
  it('renders name correctly', () => {
    expect(wrapper.find('#header-container').text()).toBe('test')
  })
});
import { shallow } from 'enzyme';
import ImageCard from '..';
import { sample_estate } from '../testSampleData';
import moment from 'moment'

describe('rendering dom test', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(
      <ImageCard estate={sample_estate} index={0} favorites={[]} />,
    );
  })
  it('Renders correctly with no error message', () => {
    expect(wrapper.find("#image-card-component")).not.toBeNull();
  });
  it('Renders favorite icon in component', () => {
    expect(wrapper.find('#image-favorite-icon')).not.toBeNull();
  });
  it('Renders photo image correctly', () => {
    expect(wrapper.find("#image-card-component").html()).toContain(sample_estate.photos[0])
  })
  it('Check card component first line correctly or not', () => {
    let { property } = sample_estate
    expect(wrapper.find('#estate-structure-info').text()).toBe(`${property?.bedrooms} BR | ${property?.bathsFull + property?.bathsHalf / 2} Bath | ${property?.area} Sq Ft`)
  })
  it('Check list price is rendering correctly or not', () => {
    expect(wrapper.find('#estate-list-price').html()).toContain(`20,714,261`)
  })
  it('Check showing address correctly or not', () => {
    const { address } = sample_estate
    expect(wrapper.find('#estate-address').text()).toBe(`${address?.streetNumber} ${address?.streetName}, ${address?.city}, ${address?.state}`)
  })
  it('Check showing date correctly or not', () => {
    expect(wrapper.find('#estate-showing-date').text()).toBe(`Listed: ${moment(sample_estate?.listDate).format('MM/DD/YY')}`)
  })
});

describe('function test', () => {
  let wrapper; 
  let mMock = jest.fn();
  beforeAll(() => {
    wrapper = shallow(
      <ImageCard estate={sample_estate} saveFavorites={() => { mMock() }} index={0} favorites={[]} />,
    );
  })
  it('after clicking favorite icon, saveFavount', () => {
    wrapper.find('#image-favorite-icon').simulate('click');
    expect(mMock).toHaveBeenCalled()
  })
})

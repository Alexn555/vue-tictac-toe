import { shallowMount } from '@vue/test-utils';
import App from '@/components/app/app.vue';

describe('App.vue', () => {
  let wrapper;
  beforeEach(() => {
     wrapper = shallowMount(App);
  });

  it('renders props.msg when passed', () => {
    const msg = 'new message';
    expect(wrapper.text()).toMatch(msg);
  });

  it('has a created hook', () => {
     expect(typeof App.created).toBe('function')
  });

});

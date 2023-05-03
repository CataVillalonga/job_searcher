import { render, screen } from '@testing-library/vue';
import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('displays company name', () => {
    //second argument (called config obj) is not necesary, and it overwrites the data obj pass to the component (!)
    //keep in mind : even tho is possible it might not be the best approach ... as it creates tests that are more likely to fail
    render(MainNav, {
      data() {
        return {
          companyName: 'Banana Corp'
        };
      }
    });
    const companyName = screen.getByText('Cata Careers');
    expect(companyName).toBeInTheDocument();
  });
});

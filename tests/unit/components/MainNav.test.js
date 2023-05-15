import { render, screen } from '@testing-library/vue';
import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav);
    const companyName = screen.getByText('Cata Careers');
    expect(companyName).toBeInTheDocument();
  });

  it('Display menu items for navegation',() => {
    render(MainNav);
    const navMenuItems = screen.getAllByRole('listitem');
    const navMenuText = navMenuItems.map((navItem) => navItem.textContent)
    expect(navMenuText).toEqual(["Teams","Location","Life at Cata Corp","How we hire","Students","Jobs"])
  })
});

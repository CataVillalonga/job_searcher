import { render, screen } from '@testing-library/vue';
import MainNav from '@/components/MainNav.vue';
import userEvent  from '@testing-library/user-event';

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

describe('when the users logs in', () => {
  it('Displays user profile picture', async () => {
    render(MainNav);
    // in imgs the name is whatever is written inside the alt attribute
    let profileImg = screen.queryByRole('img', {
      name: /User profile image/i
    });
    expect(profileImg).not.toBeInTheDocument();

    const loginBtn = screen.getByRole('button', {
      name: /sign in/i
    })
    //with btns the name is what is written inside the btn
    profileImg = screen.queryByRole('img', {
      name: /User profile image/i
    });
    await userEvent.click(loginBtn)
    expect(profileImg).toBeInTheDocument();
  });
})
import { render, screen } from '@testing-library/vue';
import ActionBtn from '@/components/ActionBtn.vue';
import userEvent  from '@testing-library/user-event';

describe('Action button', () => {
	it('renders text', () => {
		render(ActionBtn,{
			props:{
				text:'click me',
				type:'primary'
			}
		});

		const button = screen.getByRole('button',{
			name: /click me/i
		})
		expect(button).toBeInTheDocument()
	});

	it('Applies one of several styles to button', () => {
		render(ActionBtn,{
			props:{
				text:'click me',
				type:'primary'
			}
		});
		const button = screen.getByRole('button',{
			name: /click me/i
		});
		expect(button).toHaveClass('primary')
	});
});
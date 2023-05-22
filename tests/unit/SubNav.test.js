import {render, screen} from '@testing-library/vue'
import SubNav from  '@/components/SubNav.vue'

describe('The subnav', () => {
	describe('appears whe the user is on jobs page',() => {
		it('Displays job count', ()=> {
			render(SubNav,{
				data() {
					onJobResultPage:true
				}
			})
			const jobCount = screen.getByText('1992');
			expect(jobCount).toBeInTheDocument()
		})
	})

	describe('appears whe the user is on jobs page',() => {
		it('Does not displays job count', ()=> {
			render(SubNav,{
				data() {
					onJobResultPage:false
				}
			})
			const jobCount= screen.queryByText('1992');
			expect(jobCount).not.toBeInTheDocument()
		})
	})
})
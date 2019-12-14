
import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";
import Header from "../../src/components/Header.vue";
import Footer from "../../src/components/Footer.vue";

describe('display a message when there are no tasks in the list', () => {

    const testData = []
    const wrapper = mount(List, {
        propsData: {
            list: testData
        }
    })

    it('display a message when there are no tasks', () => {
        expect(wrapper.html()).toContain('<h3>Add your first Todo task</h3>')
    })
});

describe('Header is rendered with correct day/month/year/weekday', () => {

    const wrapper = mount(Header)

    it('Renders the correct date', () => {

        let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT',	'NOV', 'DEC'];
        let weekdays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        let today = new Date();
        let day = String(today.getDate()).padStart(2, '0');

        expect(wrapper.html()).toContain("<h1>"+day+"</h1>")
        expect(wrapper.html()).toContain("<h4 class=\"strong\">"+months[today.getMonth()]+"</h4>")
        expect(wrapper.html()).toContain("<h4>"+today.getFullYear()+"</h4>")
        expect(wrapper.html()).toContain("<h4>"+weekdays[today.getDay()]+"</h4>")

    })
});

describe(' when "+" button is clicked in Footer component "open" property in Footer component changes to true', () => {

    const wrapper = mount(Footer)

    it('updates open status when button is clicked', async () => {

        expect(wrapper.vm.open).toEqual(false);
        //console.log(wrapper.vm.open)
        wrapper.find('span').trigger('click')
        //await wrapper.vm.$nextTick()
        expect(wrapper.vm.open).toEqual(true);
        //console.log(wrapper.vm.open)
    })
});

describe(' when an item in the list is marked as done item is updated correctly', () => {
	
	const testData = [{
            id: 1,
            title: 'Test task',
            done: false
        }]
    const wrapper = mount(List, {
        propsData: {
            list: testData
        }
    })
	
	it('updates the status when the item is marked as done', async () => {
		
		//await wrapper.vm.$nextTick()
        expect(wrapper.props().list[0].done).toBe(false);
		
        wrapper.find('span').trigger('click');
		//await wrapper.vm.$nextTick()
		
        expect(wrapper.props().list[0].done).toBe(true);
    })
	
});
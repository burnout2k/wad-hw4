
import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";
import Header from "../../src/components/Header.vue";
describe('List component', () => {

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
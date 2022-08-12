import { mount, shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import UserDetail from "@/components/UserDetail.vue";

describe("UserDetail.vue", () => {

    let store
    beforeEach(() => {
        store = createStore({
            state: {
                user: {
                    name: "",
                    age: 0,
                    country: "HongKong",
                    package: "standard",
                    premium: 0,
                    currency: ""
                }
            },
            getters: {
                getUser: state => state.user
            },
            mutations: {
                setUser(state, payload) {
                    state.user = payload
                }
            },
            actions: {},
            modules: {},
        })
    })

    it("renders User Detail Tile", () => {
        const title = "Tell us about yourself";
        const wrapper = shallowMount(UserDetail, {
            props: { title },
            global: {
                plugins: [store]
            }
        });
        expect(wrapper.text()).toMatch(title);
    });

    it("renders User Detail and form fields", async () => {
        const title = "Tell us about yourself";
        const wrapper = shallowMount(UserDetail, {
            props: { title },
            global: {
                plugins: [store]
            }
        });
        const inputName = wrapper.find('input[name=name]')
        await inputName.setValue('hamza')
        expect(inputName.element.value).toBe('hamza')
        const inputAge = wrapper.find('input[name=age]')
        await inputAge.setValue("45")
        expect(inputAge.element.value).toBe("45")
        const selectCountry = wrapper.find('select[name=country]')
        await selectCountry.setValue('HongKong')
        expect(selectCountry.element.value).toBe('HongKong')
    });
});
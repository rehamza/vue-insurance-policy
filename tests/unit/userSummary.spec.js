import { mount, shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import UserSummary from "@/components/UserSummary.vue";



describe("UserSummary.vue", () => {
    let store
    beforeEach(() => {
        store = createStore({
            state: {
                user: {
                    name: "",
                    age: 50,
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
    it("renders and Check Vuex user data in Summary", () => {
        const wrapper = mount(UserSummary, {
            global: {
              plugins: [store]
            }
          })
        expect(wrapper.html()).toContain('Age: 50')
        expect(wrapper.html()).toContain('Package: standard')
    });

    it("renders User Summary Title", () => {
        const title = "Summary";
        const wrapper = shallowMount(UserSummary, {
            props: { title },
            global: {
                plugins: [store]
              }
        });
        expect(wrapper.text()).toMatch(title);
    });
});
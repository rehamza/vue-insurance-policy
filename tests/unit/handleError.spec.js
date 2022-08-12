import { shallowMount } from "@vue/test-utils";
import HandleError from "@/components/HandleError.vue";

describe("HandleError.vue", () => {
  it("renders Handle Error msg", () => {
    const msg = "new message";
    const wrapper = shallowMount(HandleError, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
  it("renders Handle Error Tile", () => {
    const title = "Ooops";
    const wrapper = shallowMount(HandleError, {
      props: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});

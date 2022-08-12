import { shallowMount } from "@vue/test-utils";
import HomeStart from "@/components/HomeStart.vue";

describe("HomeStart.vue", () => {
  it("renders Home Start Tile", () => {
    const title = "Ooops";
    const wrapper = shallowMount(HomeStart, {
      props: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
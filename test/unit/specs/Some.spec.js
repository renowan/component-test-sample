import Vue from 'vue'

// get Component instance
function getComp (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData: propsData }).$mount()
  return vm
}

describe('test something', () => {
  it('test some function', () => {
    expect(1).to.equal(1)
  })
})

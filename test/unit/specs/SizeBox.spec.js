import Vue from 'vue'
import SizeBox from '@/SizeBox'

function getComp (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData: propsData }).$mount()
  return vm
}

describe('SizeBox.vue', () => {
  it('default * default myWidth = 0', () => {
    expect(getComp(SizeBox, {}).myWidth).to.equal(0)
  })
  it('10 * 1 myWidth = 10', () => {
    const vm = getComp(SizeBox, {width: 10, ratio: 1})
    expect(vm.myWidth).to.equal(10)
  })
  it('22 * 1.3 myWidth = 28', () => {
    const vm = getComp(SizeBox, {width: 22, ratio: 1.3})
    expect(vm.myWidth).to.equal(28)
  })
  it('myWidth 型 = number', () => {
    const vm = getComp(SizeBox, {width: 22, ratio: 1.3})
    expect(vm.myWidth).to.be.a('number')
  })
  it('myStyle 型 = object', () => {
    const vm = getComp(SizeBox, {width: 22, ratio: 1.3})
    expect(vm.myStyle).to.be.an('object')
  })
  it('dom テスト: .my-widthの中身', () => {
    const vm = getComp(SizeBox, {width: 22, ratio: 1.3})
    expect(vm.$el.querySelector('.my-width').textContent).to.equal('28')
    expect(vm.$el.querySelector('.my-width').textContent).to.equal(String(vm.myWidth))
  })
  it('methodsのテスト add', () => {
    const vm = getComp(SizeBox, {})
    expect(vm.add(3, 5)).to.equal(8)
    expect(vm.add(1, 2)).to.equal(3)
  })
})

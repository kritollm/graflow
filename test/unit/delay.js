import { delay } from '../../src/graflow'

describe('delay', () => {
  var clock

  before(() => { clock = sinon.useFakeTimers() })
  after(() => { clock.restore() })

  it('should emit the input value after some time', () => {
    const delayer = delay(2000)
    const listener = spy()

    delayer.outputs.default.on(listener)
    delayer.inputs.default.send(2)

    expect(listener).to.have.not.been.called

    clock.tick(2200)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.equal(2)
  })
})

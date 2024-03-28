
let niteLite = false
basic.showIcon(IconNames.SmallSquare)

function updateLed() {
    if (niteLite) {
        if (modules.lightLevel1.lightLevel() < 20)
            modules.led1.setAll(0x00ff00)
        else
            modules.led1.setAll(0x000000)
    }
}
modules.accelerometer1.onEvent(jacdac.AccelerometerEvent.FaceUp, function() {
    basic.showIcon(IconNames.No)
    niteLite = false
    modules.led1.setAll(0x000000)
})
modules.accelerometer1.onEvent(jacdac.AccelerometerEvent.FaceDown, function () {
    basic.showIcon(IconNames.Yes)
    niteLite = true
    updateLed()
})
modules.lightLevel1.onLightLevelChangedBy(5, function() {
    updateLed()
})
modules.potentiometer1.onPositionChangedBy(5, function() {
    modules.led1.setBrightness(modules.potentiometer1.position())
})
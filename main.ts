radio.onReceivedNumber(function (receivedNumber) {
    music.setBuiltInSpeakerEnabled(true)
    music.setVolume(109)
    if (receivedNumber == 1) {
        music.playTone(988, music.beat(BeatFraction.Eighth))
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 80)
    } else if (receivedNumber == 2) {
        music.playTone(988, music.beat(BeatFraction.Eighth))
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 80)
    } else if (receivedNumber == 3) {
        music.playTone(988, music.beat(BeatFraction.Eighth))
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 80)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    } else if (receivedNumber == 4) {
        music.playTone(988, music.beat(BeatFraction.Eighth))
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 80)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else {
        music.playTone(988, music.beat(BeatFraction.Eighth))
        maqueen.motorStop(maqueen.Motors.All)
    }
    music.setBuiltInSpeakerEnabled(false)
})
let B = 0
let G = 0
let R = 0
radio.setGroup(1)
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    R = 0
    G = 0
    B = 0
    for (let index = 0; index < 255; index++) {
        R += 1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(5)
    }
    for (let index = 0; index < 255; index++) {
        G += 1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(5)
    }
    for (let index = 0; index < 255; index++) {
        B += 1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(5)
    }
    for (let index = 0; index < 255; index++) {
        B += -1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(5)
    }
    for (let index = 0; index < 255; index++) {
        R += -1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(5)
    }
    for (let index = 0; index < 255; index++) {
        G += 0 - 1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(5)
    }
})

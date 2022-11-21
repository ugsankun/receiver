def on_received_number(receivedNumber):
    music.set_built_in_speaker_enabled(True)
    music.set_volume(109)
    if receivedNumber == 1:
        music.play_tone(988, music.beat(BeatFraction.EIGHTH))
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 80)
    elif receivedNumber == 2:
        music.play_tone(988, music.beat(BeatFraction.EIGHTH))
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, 80)
    elif receivedNumber == 3:
        music.play_tone(988, music.beat(BeatFraction.EIGHTH))
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 80)
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    elif receivedNumber == 4:
        music.play_tone(988, music.beat(BeatFraction.EIGHTH))
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 80)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    else:
        music.play_tone(988, music.beat(BeatFraction.EIGHTH))
        maqueen.motor_stop(maqueen.Motors.ALL)
    music.set_built_in_speaker_enabled(False)
radio.on_received_number(on_received_number)

B = 0
G = 0
R = 0
radio.set_group(1)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)

def on_forever():
    global R, G, B
    R = 0
    G = 0
    B = 0
    for index in range(255):
        R += 1
        strip.show_color(neopixel.rgb(R, G, B))
        basic.pause(5)
    for index2 in range(255):
        G += 1
        strip.show_color(neopixel.rgb(R, G, B))
        basic.pause(5)
    for index3 in range(255):
        B += 1
        strip.show_color(neopixel.rgb(R, G, B))
        basic.pause(5)
    for index4 in range(255):
        B += -1
        strip.show_color(neopixel.rgb(R, G, B))
        basic.pause(5)
    for index5 in range(255):
        R += -1
        strip.show_color(neopixel.rgb(R, G, B))
        basic.pause(5)
    for index6 in range(255):
        G += 0 - 1
        strip.show_color(neopixel.rgb(R, G, B))
        basic.pause(5)
basic.forever(on_forever)

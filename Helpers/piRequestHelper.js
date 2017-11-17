class PiRaspberryHelper{

    static getButtonHex(buttonName){
        let mapping = {
            protocol: "SAMSUNG",
            keyMap: {
                "KEY_0": "0xE0E08877",
                "KEY_1": "0xE0E020DF",
                "KEY_2": "0xE0E0A05F",
                "KEY_3": "0xE0E0609F",
                "KEY_4": "0xE0E010EF",
                "KEY_5": "0xE0E0906F",
                "KEY_6": "0xE0E050AF",
                "KEY_7": "0xE0E030CF",
                "KEY_8": "0xE0E0B04F",
                "KEY_9": "0xE0E0708F",
                "KEY_MINUS": "0xE0E0C43B",
                "KEY_VOLUME_UP": "0xE0E0E01F",
                "KEY_VOLUME_DOWN": "0xE0E0D02F",
                "KEY_CHANNEL_UP": "0xE0E048B7",
                "KEY_CHANNEL_DOWN": "0xE0E008F7",
                "KEY_POWER": "0xE0E040BF",
                "KEY_SOURCE": "0xE0E0807F",
                "KEY_MUTE": "0xE0E0F00F",
                "KEY_UP": "0xE0E006F9",
                "KEY_RIGHT": "0xE0E046B9",
                "KEY_DOWN": "0xE0E08679",
                "KEY_LEFT": "0xE0E0A659",
                "KEY_ENTER": "0xE0E016E9",
                "KEY_MENU": "0xE0E058A7"
            }
        };
        return mapping.keyMap[buttonName];
    }
}
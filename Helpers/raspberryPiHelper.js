class RaspberryPiHelper{
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

    static getButtonCodeFromNumber(number){
        return `KEY_${number}`;
    }

    static getPayloadWithHexes(hexValues){
        return {
            info: {
                protocol: "SAMSUNG",
                hexCode: hexValues
            }
        };
    }

    static getVolumeUpHex(){
        return RaspberryPiHelper.getButtonHex("KEY_VOLUME_UP");
    }

    static getVolumeDownHex(){
        return RaspberryPiHelper.getButtonHex("KEY_VOLUME_DOWN");
    }

    static getMuteHex(){
        return RaspberryPiHelper.getButtonHex("KEY_MUTE");
    }

    static getPowerHex(){
        return RaspberryPiHelper.getButtonHex("KEY_POWER");
    }

    static getChannelNumberFromUserInput(channelInput){
        let listings = [
            {
                channelNames: [
                    "CNN",
                    "Cable News Network"
                ],
                channelNumber: 37
            },
            {
                channelNames: [
                    "FNC",
                    "Fox News",
                    "Fox News Channel"
                ],
                channelNumber: 38
            },
            {
                channelNames: [
                    "ABC",
                    "ABC News",
                    "American Broadcasting Company News"
                ],
                channelNumber: 7
            },
            {
                channelNames: [
                    "CBS",
                    "Columbia Broadcasting System"
                ],
                channelNumber: 4
            },
            {
                channelNames: [
                    "FOX"
                ],
                channelNumber: 13
            },
            {
                channelNames: [
                    "QVC",
                    "Quality Value Convenience"
                ],
                channelNumber: 20
            },
            {
                channelNames: [
                    "ION",
                    "ION Television"
                ],
                channelNumber: 18
            },
            {
                channelNames: [
                    "FX",
                    "Fox Extended"
                ],
                channelNumber: 23
            },
            {
                channelNames: [
                    "Discovery",
                    "Discover Channel",
                    "DISC"
                ],
                channelNumber: 25
            },
            {
                channelNames: [
                    "LIFE"
                ],
                channelNumber: 24
            },
            {
                channelNames: [
                    "ESPN",
                    "Entertainment and Sports Programming Network"
                ],
                channelNumber: 26
            },
            {
                channelNames: [
                    "ESPN2",
                    "Entertainment and Sports Programming Network 2"
                ],
                channelNumber: 27
            },
            {
                channelNames: [
                    "A&E",
                    "Arts & Entertainment",
                    "Arts and Entertainment",
                    "A and E"
                ],
                channelNumber: 28
            },
            {
                channelNames: [
                    "USA",
                    "USA Network"
                ],
                channelNumber: 29
            },
            {
                channelNames: [
                    "Spike",
                    "Spike TV"
                ],
                channelNumber: 32
            },
            {
                channelNames: [
                    "Weather Channel",
                    "The Weather Channel"
                ],
                channelNumber: 31
            },
            {
                channelNames: [
                    "NBC"
                ],
                channelNumber: 33
            },
            {
                channelNames: [
                    "MTV",
                    "Music Television"
                ],
                channelNumber: 35
            },
            {
                channelNames: [
                    "Univision"
                ],
                channelNumber: 40
            },
            {
                channelNames: [
                    "Nick",
                    "Nickelodeon"
                ],
                channelNumber: 41
            },
            {
                channelNames: [
                    "Disney Channel",
                    "Disney"
                ],
                channelNumber: 42
            },
            {
                channelNames: [
                    "Cartoon Network",
                    "Cartoons",
                    "Toon"
                ],
                channelNumber: 43
            },
            {
                channelNames: [
                    "Comedy Central"
                ],
                channelNumber: 44
            },
            {
                channelNames: [
                    "TNT",
                    "TNT Drama"
                ],
                channelNumber: 45
            },
            {
                channelNames: [
                    "History",
                    "History Channel"
                ],
                channelNumber: 47
            },
            {
                channelNames: [
                    "Fox Sports"
                ],
                channelNumber: 48
            },
            {
                channelNames: [
                    "SyFy",
                    "Science fiction",
                    "Science fiction channel"
                ],
                channelNumber: 51
            },
            {
                channelNames: [
                    "AMC",
                    "AMC Network"
                ],
                channelNumber: 52
            },
            {
                channelNames: [
                    "Food",
                    "Food Channel"
                ],
                channelNumber: 59
            },
            {
                channelNames: [
                    "Travel",
                    "Travel Channel"
                ],
                channelNumber: 58
            },
            {
                channelNames: [
                    "Animal Planet"
                ],
                channelNumber: 61
            },
            {
                channelNames: [
                    "Fox Sports 1",
                    "Fox Sports one"
                ],
                channelNumber: 62
            },
            {
                channelNames: [
                    "MSNBC"
                ],
                channelNumber: 63
            },
            {
                channelNames: [
                    "CNBC"
                ],
                channelNumber: 64
            },
            {
                channelNames: [
                    "Golf",
                    "Golf Channel"
                ],
                channelNumber: 65
            },
            {
                channelNames: [
                    "TBS",
                    "Turner Broadcasting System"
                ],
                channelNumber: 67
            },
            {
                channelNames: [
                    "Fox Business"
                ],
                channelNumber: 74
            },
            {
                channelNames: [
                    "C-SPAN"
                ],
                channelNumber: 80
            },
            {
                channelNames: [
                    "NBA",
                    "Basketball",
                    'National Basketball Association'
                ],
                channelNumber: 254
            },
            {
                channelNames: [
                    "HBO",
                    "Home Box Office"
                ],
                channelNumber: 300
            },
            {
                channelNames: [
                    "Tennis",
                    "Tennis Channel"
                ],
                channelNumber: 256
            },
            {
                channelNames: [
                    "BBC",
                    "BBC America"
                ],
                channelNumber: 228
            },
            {
                channelNames: [
                    "Fuse"
                ],
                channelNumber: 224
            }
        ];
        console.log(channelInput);
        for(let channel of listings){
            for(let name of channel.channelNames){
                if(similarity(name, channelInput) > 0.75){
                    return channel.channelNumber;
                }
            }
        }

        if(!isNaN(channelInput)){
            return parseInt(channelInput);
        }

        return "";
    }
}

module.exports = RaspberryPiHelper;

function similarity(s1, s2) {
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    let longerLength = longer.length;
    if (longerLength === 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    let costs = [];
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}
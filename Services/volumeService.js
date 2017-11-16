let fs = require("fs");
let tvStateDir = "Storage/tv_state.json";

class VolumeService{

    static getVolume(callback){
        fs.readdir(tvStateDir, 'utf8', (data)=>{
            let tvState = JSON.parse(data);
            callback(tvState.volume);
        });
    }

    static changeVolumeTo(newVolume){
        fs.readdir(tvStateDir, 'utf8', (data)=>{
            let tvState = JSON.parse(data);
            tvState.volume = newVolume;
            fs.writeFile(tvStateDir, JSON.stringify(tvState));
        });
    }

    static increaseVolumeBy(volumeIncrease){
        fs.readdir(tvStateDir, 'utf8', (data)=>{
            let tvState = JSON.parse(data);
            tvState.volume += volumeIncrease;
            if(tvState.volume > 100) tvState.volume = 100;
            fs.writeFile(tvStateDir, JSON.stringify(tvState));
        });
    }

    static decreaseVolumeBy(volumeDecrease){
        fs.readdir(tvStateDir, 'utf8', (data)=>{
            let tvState = JSON.parse(data);
            tvState.volume -= volumeDecrease;
            if(tvState.volume < 0) tvState.volume = 0;
            fs.writeFile(tvStateDir, JSON.stringify(tvState));
        });
    }
}

module.exports = VolumeService;
// write your object here
let box = {
    length: 20,
    width: 30,
    height: 15,
    getVolume() {
        let volume = this.length * this.width * this.height;
        return volume;
    }
};
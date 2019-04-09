class Tv {
  constructor(
    // width,
    // height,
    // color,
    // brand,
    // weight,
    power,
    light,
    volume,
    display
  ) {
    // this.width = width;
    // this.height = height;
    // this.color = color;
    // this.brand = brand;
    // this.weight = weight;
    this.power = false;
    this.light = 10;
    this.volume = 10;
    this.display = 100;
  }
  get status(){
      return this
  }
  onPower(power) {
    return this.power
  }
  changeSound(increment, decrement) {
    return this;
  }
  changeVolume(increment, decrement) {
    return this;
  }
  changeDisplay(increment, decrement) 
  {
    return this;
  }
}




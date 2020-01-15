export class CityWeather {
  constructor(
    public coord?: Coord,
    public weather?: Weather[],
    public base?: string,
    public main?: Main,
    public visibility?: number,
    public wind?: Wind,
    public clouds?: Clouds,
    public dt?: number,
    public sys?: Sys,
    public id?: number,
    public name?: string,
    public cod?: number,
    public snow?: Object,
    public rain?: Object,
    public dt_txt?: string
  ) {
    this.coord = new Coord();
    this.wind = new Wind();
    this.clouds = new Clouds();
    this.main = new Main();
    this.sys = new Sys();
    this.weather = [];
  }
}

export class Wind {
  constructor(
    public speed?: number,
    public deg?: number
  ) { }
}

export class Clouds {
  constructor(
    public all?: number
  ) { }
}

export class Coord {
  constructor(
    public lat?: number,
    public lon?: number
  ) { }
}

export class Main {
  constructor(
    public humidity?: number,
    public pressure?: number,
    public temp?: number,
    public temp_max?: number,
    public temp_min?: number
  ) { }
}

export class Sys {
  constructor(
    public country?: string,
    public id?: number,
    public message?: number,
    public sunrise?: number,
    public sunset?: number
  ) { }
}

export class Weather {
  constructor(
    public description?: string,
    public icon?: string,
    public id?: number,
    public main?: string
  ) { }
}

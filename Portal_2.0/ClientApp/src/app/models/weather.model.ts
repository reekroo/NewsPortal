export class CityWeather {
  constructor(
    public weather?: Weather[],
    public coordinates?: Coord,
    public wind?: Wind,
    public clouds?: Clouds,
    public snow?: Object,
    public rain?: Object,
    public rootInfo?: RootCityWeatherInformation,
    public name?: string,
    public date?: Date,
    public id?: number,
  ) {
    this.coordinates = new Coord();
    this.rootInfo = new RootCityWeatherInformation(),
    this.wind = new Wind();
    this.clouds = new Clouds();
    this.weather = [];
  }
}

export class Coord {
  constructor(
    public lat?: number,
    public lon?: number
  ) { }
}

export class RootCityWeatherInformation {
  constructor(
    public humidity?: number,
    public pressure?: number,
    public temperature?: number,
    public temperatureMax?: number,
    public temperatureMin?: number,
    public temperatureFeelsLike?: number,
    public sunrise?: number,
    public sunset?: number
  ) { }
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

export class Weather {
  constructor(
    public description?: string,
    public icon?: string,
    public id?: number,
    public main?: string
  ) { }
}

export enum TemperatureEnum {
  FAHRENHEIT = 'F',
  CELSIUS = 'C',
  KELVIN = 'K',
}

export enum DistanceEnum {
  CENTIMETER = 'Centimeter',
  METER = 'Meter',
  INCH = 'Inch',
  FEET = 'Feet',
  YARD = 'Yard',
}

export enum MetricType {
  TEMPERATURE = 'Temperature',
  DISTANCE = 'Distance',
}

export type validDistanceUnits = 'Meter' | 'Inch' | 'Feet' | 'Yard';
export type typeValidTemperatureUnits = 'F' | 'K';

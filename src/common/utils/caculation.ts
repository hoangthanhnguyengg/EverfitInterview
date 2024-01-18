export const convertTemperatureFromCelsius = (
  celsius: number,
  toUnit: 'F' | 'K',
): number => {
  if (toUnit === 'F') {
    // convert Celsius to Fahrenheit
    return (celsius * 9) / 5 + 32;
  } else if (toUnit === 'K') {
    // convert Celsius to Kelvin
    return celsius + 273.15;
  } else {
    // if this unit is invalid => return original value
    return celsius;
  }
};

export const convertTemperatureToCelsius = (
  temperature: number,
  fromUnit: 'F' | 'K',
): number => {
  if (fromUnit === 'F') {
    // convert Fahrenheit to Celsius
    return ((temperature - 32) * 5) / 9;
  } else if (fromUnit === 'K') {
    // convert Kelvin to Celsius
    return temperature - 273.15;
  } else {
    // if this unit is invalid => return original value
    return temperature;
  }
};

export const convertDistanceFromCentimeters = (
  centimeters: number,
  toUnit: 'Meter' | 'Inch' | 'Feet' | 'Yard',
): number => {
  const conversionFactors = {
    Meter: 0.01,
    Inch: 0.393701,
    Feet: 0.0328084,
    Yard: 0.0109361,
  };

  if (conversionFactors.hasOwnProperty(toUnit)) {
    return centimeters * conversionFactors[toUnit];
  } else {
    // if this unit is invalid => return original value
    return centimeters;
  }
};

export const convertDistanceToCentimeters = (
  distance: number,
  fromUnit: 'Meter' | 'Inch' | 'Feet' | 'Yard',
): number => {
  const conversionFactors = {
    Meter: 100,
    Inch: 2.54,
    Feet: 30.48,
    Yard: 91.44,
  };

  if (conversionFactors.hasOwnProperty(fromUnit)) {
    return distance * conversionFactors[fromUnit];
  } else {
    // if this unit is invalid => return original value
    return distance;
  }
};

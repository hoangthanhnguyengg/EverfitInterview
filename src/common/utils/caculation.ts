export const convertTemperature = (
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

export const convertDistance = (
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

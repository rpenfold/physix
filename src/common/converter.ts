
const createUnitFactory = (conversionFactors) => (newUnit) => (val) => {
    const value = new Number(val);
    const unitIndex = conversionFactors.findIndex((factorObj) => factorObj.unit === newUnit)
  
    Object.defineProperties(value, {
      ...conversionFactors.reduce((properties, { unit, factor }, index) => {
        const isHigherUnit = index < unitIndex
        let conversionPath = conversionFactors.slice(
          Math.min(index, unitIndex)+1,
          Math.max(index, unitIndex)+1
        )
        const tempFactor = conversionPath.reduce((prev, curr) => prev * curr.factor, 1);     
        const factorValue = isHigherUnit ? tempFactor : (1 / tempFactor);
        const converter = () => createUnitFactory(conversionFactors)(unit)(val * factorValue)
        const methodName = `to${unit.charAt(0).toUpperCase()}${unit.slice(1)}`;
        properties[methodName] = { value: converter };
        return properties;
      }, {}),
    });
  
    return value;
  };
  
  export default function createConverter(units) {
    const createUnit = createUnitFactory(units);
    return units.reduce((prev, { unit }) => ({
      ...prev,
      [unit]: createUnit(unit)
    }), {});
  }

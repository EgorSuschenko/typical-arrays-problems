
exports.min = function min (array = 0) {
  if (array === 0 || array.length === 0)
    return 0;
  return array.reduce((min, current) => {
    return current < min ? current: min;
  });
}

exports.max = function max (array = 0) {
  if (array === 0 || array.length === 0)
    return 0;
  return array.reduce((max, current) => {
    return current > max ? current: max;
  });
}

exports.avg = function avg (array = 0) {
  if (array === 0 || array.length === 0)
    return 0;
  return array.reduce((sum, current) => sum + current, 0)/array.length
}

const nextElementInList = (list, value) => {
  const currentValueIndex = list.indexOf(value);
  const nextValueIndex = (currentValueIndex + 1) % list.length;
  const nextAction = list[nextValueIndex];
}

export default nextElementInlist
export const ensure = <T>(arg: T | undefined | null): T => {
  if(arg === undefined || arg === null) {
    throw new TypeError('Отсутствует явное значение');
  }

  return arg;
}
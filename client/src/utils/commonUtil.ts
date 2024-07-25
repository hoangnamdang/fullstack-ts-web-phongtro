export const convert100PercentTo15 = (num: number) => {
    const onePercent = (1 / 100) * 15;
    return num * onePercent;
  };

export  const convert100PercentTo90 = (num: number) => {
    const onePercent = (1 / 100) * 90;
    return Math.round(num * onePercent);
  };

export  const convertTargetTo100Percent = (num: number, target: number) => {
    const onePercent = (1 / target) * 100;
    return Math.round(num * onePercent);
  };

export  const roundHalf = (num: number) => {
    return Math.round(num * 2) / 2;
  };

export  const numToMillion = (num: number) => {
    return num * 1000000;
  };
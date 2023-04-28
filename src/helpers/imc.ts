export type level = {
  title: string;
  color: string;
  icon: string;
  imc: number[];
  yourImc?: number;
};

export const levels: level[] = [
  {
    title: "Magreza",
    color: "#434c5e",
    icon: "down",
    imc: [0, 18.59],
  },
  {
    title: "Normal",
    color: "#a3be8c",
    icon: "up",
    imc: [18.6, 24.99],
  },
  {
    title: "Sobrepeso",
    color: "#d08770",
    icon: "down",
    imc: [25, 30.99],
  },
  {
    title: "Obesidade",
    color: "#bf616a",
    icon: "down",
    imc: [30, 99],
  },
];

export const calculateImc = (height: number, weight: number) => {
  const imc = weight / (height * height);

  for (const i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      let levelCopy: level = { ...levels[i] };

      levelCopy.yourImc = parseFloat(imc.toFixed(2));
      return levelCopy;
    }
  }

  return null;
};

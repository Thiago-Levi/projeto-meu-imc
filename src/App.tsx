import { useState } from "react";
import styles from "./App.module.css";
import leftArrowImage from "./assets/leftarrow.png";
import { GridItem } from "./coponents/GridItem/";
import { levels, calculateImc, level } from "./helpers/imc";

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert("Digite todos os campos!");
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <span className={styles.logo}>
            MEU - <span className={styles.mLogo}> IMC</span>
          </span>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
          <input
            type="number"
            placeholder="Digite sua altura. Ex: 1.5(em metros)"
            value={heightField > 0 ? heightField : ""}
            required
            onChange={(event) => setHeightField(parseFloat(event.target.value))}
          />
          <input
            type="number"
            placeholder="Digite seu peso. Ex: 70.5(em quilos)"
            value={weightField > 0 ? weightField : ""}
            required
            onChange={(event) => setWeightField(parseFloat(event.target.value))}
          />
          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img
                  src={leftArrowImage}
                  alt="Apontando para retornar "
                  width={25}
                />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

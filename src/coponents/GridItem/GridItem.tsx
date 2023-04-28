import type { level } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from "../../assets/icons8-thumbs-up-50.png";
import downImage from "../../assets/icons8-thumbs-down-50.png";

type Props = {
  item: level;
};

export const GridItem = ({ item }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        <img
          src={item.icon === "up" ? upImage : downImage}
          alt={item.icon === "up" ? "Polegar para cima" : "Plegar para baixo"}
          width={30}
        />
      </div>

      <div className={styles.gridTitle}>{item.title}</div>

      <div className={styles.gridInfo}>
        <>
          IMC está entre <em>{item.imc[0]}</em> e<em>{item.imc[1]}</em>
        </>
      </div>

      {item.yourImc && (
        <div className={styles.yourImc}> Seu IMC é: {item.yourImc}</div>
      )}
    </div>
  );
};

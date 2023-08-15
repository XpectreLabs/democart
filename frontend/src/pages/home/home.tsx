import styles from "./home.module.scss";
import Box from "@mui/material/Box";
import { Tabla } from "../../components/organims/table";
import { Responsive } from "../../components/organims/responsiveTable";

const rows = [
  {
    make: "hola",
    model: "model",
    package: "pack",
    color: "color",
    year: "year",
    category: "category",
    mileage: "mi",
    price: "cents",
    id: 1,
  },
];

export const Home = () => {
  return (
    <div>
      <Box className={styles.table}>
        <Tabla rows={rows} />
      </Box>
      <Box className={styles.mobile}>
        <Responsive rows={rows} />
      </Box>
    </div>
  );
};

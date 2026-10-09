import { useEffect, useState } from "react";
import CryptoCard from "./components/CryptoCard";
import "./App.css";
import { Menu } from "antd";
import MenuItems from "./components/MenuItems";
import { data } from "./mock/data.json";
import Container from "./components/Container";
import {getAll} from "./http/getAll";
import {getCurrency} from "./http/getCurrency";
function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [currency, setCurrency] = useState([]);

  const handleClick = (e: any) => {
    getCurrency(e).then((data: any) => setCurrency(data));
  };


  useEffect(() => {
    getAll().then((data: any) => setCryptoData(data));
  }, []);

  return (
    <>

      <Container>
        <MenuItems onClick={handleClick} items={cryptoData[0]}/>
        <CryptoCard  currency={currency}/>
      </Container>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import CryptoCard from "./components/CryptoCard";
import "./App.css";
import { Button, Menu } from "antd";
import MenuItems from "./components/MenuItems";
import { data } from "./mock/data.json";
import Container from "./components/Container";
import { getAll } from "./http/getAll";
import { getCurrency } from "./http/getCurrency";
function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [visible, setVisible] = useState('opacity-0')
  const [theme, setTheme] = useState(true);

  const handleClick = (e: any) => {
    setVisible('opacity-0')
    getCurrency(e).then((data: any) => setCurrency(data));
    setTimeout(() => {
      setVisible('opacity-100')
    }, 500)
  };

  const handleTheme = () => {
    setTheme(!theme)
  }


  useEffect(() => {
    getAll().then((data: any) => setCryptoData(data));
  }, []);

  return (
    <>
      <Container >
        <MenuItems onClick={handleClick} items={cryptoData[0]} />
        <CryptoCard className={` transition duration-100 ease-in-out ${visible}`} currency={currency} />
      </Container>
    </>
  );
}

export default App;

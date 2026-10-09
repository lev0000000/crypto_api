import { Space } from "antd";
import Card from "antd/es/card/Card";
import React from "react";

export default function CryptoCard({ currency }: { currency: string }) {
  return (
    <>
      {!currency[0].id ? (
        <Card className="shadow-xl border-none" style={{ width: 700 }}>
          <div className="flex justify-between items-center gap-5 text-2xl ">
            <div className="flex items-center gap-5">
              <img
                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency[0].id ? currency[0].id : 1}.png`}
              ></img>
              <span>Bitcoin</span>
            </div>
            <a href="#">More</a>
          </div>
          <div className="p-20 text-xl">
            <p>Текущая цена: </p>
            <p>Изменение цены за 24 часа: </p>
            <p>Текущая капитализация: </p>
          </div>
        </Card>
      ) : (
        <Space vertical size={16}>
          <Card className="shadow-xl border-none" style={{ width: 700 }}>
            <div className="flex justify-between items-center gap-5 text-2xl ">
              <div className="flex items-center gap-5">
                <img
                  src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency[0].id ? currency[0].id : 1}.png`}
                ></img>
                <span>Bitcoin</span>
              </div>
              <a href="#">More</a>
            </div>
            <div className="p-20 text-xl">
              <p>Текущая цена: </p>
              <p>Изменение цены за 24 часа: </p>
              <p>Текущая капитализация: </p>
            </div>
          </Card>
        </Space>
      )}
    </>
  );
}

import { Space } from "antd";
import Card from "antd/es/card/Card";
import React, { useEffect, useRef, useState } from "react";

export default function CryptoCard({ className, currency }: { className: string, currency: string }) {



  try {
    return (
      <>
        <Card  className={`shadow-2xl border-none ${className}`} style={{ width: 700 }}>
          <div className="flex justify-between items-center gap-5 text-2xl ">
            <div className="flex items-center gap-5">
              <img
                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency[0].id ? currency[0].id : 1}.png`}
              ></img>
              <span>{currency[0].name}</span>
            </div>
            <a href={`https://coinmarketcap.com/currencies/${currency[0].name}/`}>More</a>
          </div>
          <div className="p-20 text-xl">
            <p>Текущая цена: {currency[0].quote[0].price} $</p>
            <p className={currency[0].quote[0].percent_change_24h > 0.00 ? 'text-green-500' : 'text-danger'}>Изменение цены за 24 часа:{currency[0].quote[0].percent_change_24h} $ {currency[0].quote[0].percent_change_24h > 0.00 ? <i className="bi bi-arrow-up-circle-fill"></i> : <i className="bi bi-arrow-down-circle-fill"></i>} </p>
            <p>Текущая капитализация: {currency[0].total_supply} $ </p>
          </div>
        </Card>

      </>

    );
  } catch {
    return (
      <>
        <div className=""></div>
      </>
    )
  }

}

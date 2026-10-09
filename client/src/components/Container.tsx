import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div
      className="container flex items-center justify-center pt-30"
      style={{ margin: "0 auto", maxWidth: "1200px", minWidth: "1200px", width: "100%"}}
    >
      {children}
    </div>
  );
}

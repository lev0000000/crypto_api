import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div
      className="container flex items-center justify-center pt-30"
      style={{ }}
    >
      {children}
    </div>
  );
}

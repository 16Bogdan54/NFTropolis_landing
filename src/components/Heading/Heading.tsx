import React, { type HTMLProps } from "react";

interface IHeadingProps extends HTMLProps<HTMLHeadingElement> {
  text: string;
}

const Heading = ({ text }: IHeadingProps) => {
  return <h2 className="text-4xl lg:text-6xl font-bold mb-4">{text}</h2>;
};

export default Heading;

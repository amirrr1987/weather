import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

const Container = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
  return <div className="container mx-auto px-3">{props.children}</div>;
};
export default Container;

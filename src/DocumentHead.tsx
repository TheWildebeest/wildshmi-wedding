import { ReactNode } from "react";

export const DocumentHead = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="David and Lakshmi's wedding website" />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </>
  );
};

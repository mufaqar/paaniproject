import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Us | Paani",
  description: "",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}

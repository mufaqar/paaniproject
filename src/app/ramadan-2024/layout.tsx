import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Ramadan 2024 | Paani",
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

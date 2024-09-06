import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "SDG-6 | Paani",
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

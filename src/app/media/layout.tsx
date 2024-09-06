import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Media | Paani",
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

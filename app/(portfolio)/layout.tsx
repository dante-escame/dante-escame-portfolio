import { PortfolioTopNav } from "../../src/components/portfolio-top-nav";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PortfolioTopNav />
      {children}
    </>
  );
}

// import SearchBox from "@/components/job/Search";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-8 space-y-4">
      {/* <SearchBox /> */}
      <div>{children}</div>
    </div>
  );
}

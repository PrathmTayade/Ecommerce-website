export default function RootLayout({ children }) {
  // offset navbar height
  return (
    <section className="flex min-h-screen items-center justify-center pt-20">
      {children}
    </section>
  );
}

type Props = Readonly<{ children: React.ReactNode }>;

export default function Layout({ children }: Props) {
  return (
    <div className="flex justify-center items-center bg-neutral-200 p-10 w-full h-full min-h-screen">{children}</div>
  );
}

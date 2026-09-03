"use client";

export function ScrollTopLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <a href="#" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

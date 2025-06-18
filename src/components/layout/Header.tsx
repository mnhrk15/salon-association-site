"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, Gem } from "lucide-react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "トップ" },
  { href: "/about", label: "協会概要" },
  { href: "/services", label: "サービス内容" },
  { href: "/pricing", label: "料金プラン" },
  { href: "/news", label: "お知らせ" },
  { href: "/faq", label: "よくある質問" },
];

const MotionLink = motion(Link);

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <MotionLink
      href={href}
      className="relative block text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      {children}
      {isActive && (
        <motion.span
          layoutId="active-nav-link-indicator"
          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
        />
      )}
    </MotionLink>
  );
};

const DesktopNav = () => (
  <nav className="hidden items-center gap-6 md:flex">
    {NAV_LINKS.map(({ href, label }) => (
      <NavLink key={href} href={href}>
        {label}
      </NavLink>
    ))}
    <Button asChild>
      <Link href="/contact">お問い合わせ</Link>
    </Button>
  </nav>
);

const MobileNav = () => {
  const pathname = usePathname();
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">メニューを開く</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <motion.nav
            className="flex flex-col gap-y-6 pt-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <MotionLink
              href="/"
              className="mb-4 flex items-center space-x-2"
              variants={itemVariants}
            >
              <Gem className="h-6 w-6 text-primary" />
              <span className="font-bold">AIビューティーサロン推進協会</span>
            </MotionLink>
            {NAV_LINKS.map(({ href, label }) => (
              <MotionLink
                key={href}
                href={href}
                className={cn(
                  "text-lg font-semibold transition-colors hover:text-primary",
                  pathname === href ? "text-primary" : "text-muted-foreground"
                )}
                variants={itemVariants}
              >
                {label}
              </MotionLink>
            ))}
            <motion.div variants={itemVariants}>
              <Button asChild className="w-full">
                <Link href="/contact">お問い合わせ</Link>
              </Button>
            </motion.div>
          </motion.nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Gem className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            AIビューティーサロン推進協会
          </span>
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
} 
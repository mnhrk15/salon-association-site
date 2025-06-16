import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "トップ" },
  { href: "/about", label: "協会について" },
  { href: "/services", label: "サービス内容" },
  { href: "/pricing", label: "料金プラン" },
  { href: "/news", label: "お知らせ" },
  { href: "/faq", label: "よくある質問" },
  { href: "/contact", label: "お問い合わせ" },
];

const SECONDARY_LINKS = [
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-screen-2xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="font-bold text-lg">
              AIビューティーサロン推進協会
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              AIの力で、美容業界の未来を共創する。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div>
              <p className="font-medium text-foreground">サイトマップ</p>
              <nav className="mt-4 flex flex-col space-y-2">
                {NAV_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="font-medium text-foreground">その他</p>
              <nav className="mt-4 flex flex-col space-y-2">
                {SECONDARY_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} 一般社団法人AIビューティーサロン推進協会. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 
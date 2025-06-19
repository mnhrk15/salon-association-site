import Link from "next/link";
import { FOOTER_NAV_LINKS, SECONDARY_LINKS, SITE_NAME } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-screen-2xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="font-bold text-lg">
              {SITE_NAME}
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              AIの力で、美容業界の未来を共創する。
            </p>
            <address className="mt-4 text-sm text-muted-foreground not-italic">
              〒170-0013<br />
              東京都豊島区東池袋1-32-2 小泉ビル4F
            </address>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div>
              <p className="font-medium text-foreground">サイトマップ</p>
              <nav className="mt-4 flex flex-col space-y-2">
                {FOOTER_NAV_LINKS.map(({ href, label }) => (
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
            &copy; {currentYear} {SITE_NAME}. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 
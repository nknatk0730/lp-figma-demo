import { Button } from "@/components/ui/button";
import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="flex items-center container h-16 px-3">
      <h1>
        <Link href="/">
          <Image
            src="/favicon.ico"
            alt="logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </Link>
      </h1>
      <span className="flex-1"></span>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Button asChild variant='ghost'>
              <Link href='/#features' className="text-muted-foreground">Features</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant='ghost'>
              <Link className="text-muted-foreground" href='/#companies'>Companies</Link>
            </Button>
          </li>
        </ul>
      </nav>
      <Button>Download Template</Button>
    </header>
  );
}
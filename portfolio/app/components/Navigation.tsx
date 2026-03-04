import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-full p-4 bg-background text-foreground">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">
            About Me
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:underline">
            Software Development
          </Link>
        </li>
        <li>
          <Link href="/designs" className="hover:underline">
            Designs
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
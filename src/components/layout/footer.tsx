import Link from "next/link";
import { Github } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-card-border py-8">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-medium text-foreground hover:text-accent transition-colors">
              Memoria
            </Link>
            <span className="hidden sm:inline">·</span>
            <span>
              Built by{" "}
              <a
                href="https://github.com/byronwade"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                Byron Wade
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/docs"
              className="hover:text-foreground transition-colors"
            >
              Docs
            </Link>
            <a
              href="https://github.com/byronwade/memoria"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

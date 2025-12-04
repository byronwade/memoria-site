import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Windsurf Setup",
  description:
    "Install Memoria for Codeium's Windsurf editor. Quick MCP configuration setup guide.",
  path: "/docs/installation/windsurf",
  keywords: ["Windsurf", "Codeium", "installation", "MCP"],
});

export default function WindsurfPage() {
  return (
    <div className="docs-content">
      <h1>Windsurf</h1>

      <p className="lead">
        Install Memoria for Codeium&apos;s Windsurf editor.
      </p>

      <h2>Step 1: Find Config File</h2>

      <p>Windsurf stores MCP configuration at:</p>

      <pre className="code-inline">
        <code>~/.codeium/windsurf/mcp_config.json</code>
      </pre>

      <h2>Step 2: Add Configuration</h2>

      <p>Open (or create) <code>mcp_config.json</code> and add:</p>

      <pre className="code-block">
        <code>{`{
  "mcpServers": {
    "memoria": {
      "command": "npx",
      "args": ["-y", "@byronwade/memoria"]
    }
  }
}`}</code>
      </pre>

      <p>
        If you have existing MCP servers, add memoria to the <code>mcpServers</code> object:
      </p>

      <pre className="code-block">
        <code>{`{
  "mcpServers": {
    "existing-server": { ... },
    "memoria": {
      "command": "npx",
      "args": ["-y", "@byronwade/memoria"]
    }
  }
}`}</code>
      </pre>

      <h2>Step 3: Restart Windsurf</h2>

      <p>
        Restart Windsurf to load the new MCP configuration.
      </p>

      <h2>Verify Installation</h2>

      <p>Ask Windsurf&apos;s AI:</p>
      <pre className="code-inline">
        <code>&quot;What MCP tools do you have available?&quot;</code>
      </pre>

      <p>
        You should see <code>analyze_file</code> and <code>ask_history</code> from Memoria.
      </p>

      <h2>Usage</h2>

      <p>Ask the AI to analyze files before making changes:</p>
      <pre className="code-inline">
        <code>&quot;Analyze src/api/route.ts before I refactor it&quot;</code>
      </pre>

      <div className="callout callout-warning">
        <h4>Troubleshooting</h4>
        <p>
          If Memoria doesn&apos;t appear, make sure Node.js 18+ is installed and available
          in your PATH. Verify by running <code>node --version</code>.
        </p>
      </div>
    </div>
  );
}

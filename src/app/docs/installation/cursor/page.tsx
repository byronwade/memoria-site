import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Cursor Setup",
  description:
    "Configure Memoria for the Cursor AI code editor. Project-level and global configuration options.",
  path: "/docs/installation/cursor",
  keywords: ["Cursor", "installation", "code editor", "MCP"],
});

export default function CursorPage() {
  return (
    <div className="docs-content">
      <h1>Cursor</h1>

      <p className="lead">
        Install Memoria for the Cursor AI code editor.
      </p>

      <h2>Quick Install (One-liner)</h2>

      <p>Run this in your project directory:</p>

      <pre className="code-block">
        <code>mkdir -p .cursor && echo &apos;{`{"mcpServers":{"memoria":{"command":"npx","args":["-y","@byronwade/memoria"]}}}`}&apos; &gt; .cursor/mcp.json</code>
      </pre>

      <h2>Manual Setup</h2>

      <h3>Step 1: Create Config File</h3>

      <p>
        Cursor supports both project-level and global MCP configuration:
      </p>

      <ul>
        <li><strong>Project-level:</strong> <code>.cursor/mcp.json</code> (in project root)</li>
        <li><strong>Global:</strong> <code>~/.cursor/mcp.json</code></li>
      </ul>

      <h3>Step 2: Add Configuration</h3>

      <p>Add this to your <code>mcp.json</code> file:</p>

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

      <h3>Step 3: Restart Cursor</h3>

      <p>
        Restart Cursor to load the new MCP configuration.
      </p>

      <h2>Verify Installation</h2>

      <p>Ask Cursor&apos;s AI:</p>
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

      <div className="callout callout-info">
        <h4>Project vs Global Config</h4>
        <p>
          Use project-level config (<code>.cursor/mcp.json</code>) if you want Memoria
          only for specific projects. Use global config for all projects.
        </p>
      </div>
    </div>
  );
}

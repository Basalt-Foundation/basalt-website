import React from "react";
import Reveal from "@/components/Reveal";

const code = `[BasaltContract]
public partial class ComplianceToken : BST20Token
{
    private readonly PolicyEnforcer _policies;
    private readonly StorageValue<byte[]> _admin = new("admin");

    [BasaltConstructor]
    public void Initialize(string name, string symbol)
    {
        _admin.Set(Context.Caller);
        _policies = new PolicyEnforcer("pol", Context);
        base.Initialize(name, symbol, 18);
    }

    [BasaltEntrypoint]
    public void AddPolicy(byte[] policyAddress)
    {
        Context.Require(Context.Caller == _admin.Get(), "Not admin");
        _policies.AddPolicy(policyAddress);
    }

    protected override void TransferInternal(byte[] from, byte[] to, UInt256 amount)
    {
        _policies.EnforceTransfer(from, to, amount);
        base.TransferInternal(from, to, amount);
    }
}`;

type Token = { text: string; color?: string };

const ATTRIBUTES = new Set([
  "BasaltContract", "BasaltConstructor", "BasaltEntrypoint",
  "BasaltView", "BasaltEvent", "Indexed",
]);
const KEYWORDS = new Set([
  "public", "private", "readonly", "class", "partial", "var", "new", "null",
  "get", "set", "return", "override", "protected", "base",
]);
const TYPES = new Set([
  "void", "ulong", "string", "bool", "byte", "int",
]);
const CUSTOM_TYPES = new Set([
  "StorageMap", "StorageValue", "Context", "PolicyEnforcer",
  "BST20Token", "ComplianceToken", "UInt256",
]);
const METHODS = new Set([
  "Set", "Get", "Require", "Emit", "AddPolicy", "EnforceTransfer",
  "Initialize", "TransferInternal",
]);

function tokenize(source: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  while (i < source.length) {
    // String literals
    if (source[i] === '"') {
      let j = i + 1;
      while (j < source.length && source[j] !== '"') j++;
      j++; // include closing quote
      tokens.push({ text: source.slice(i, j), color: "#ce9178" });
      i = j;
      continue;
    }

    // Attributes [...]
    if (source[i] === '[') {
      let j = i + 1;
      while (j < source.length && source[j] !== ']') j++;
      j++; // include ]
      const inner = source.slice(i + 1, j - 1);
      if (ATTRIBUTES.has(inner)) {
        tokens.push({ text: source.slice(i, j), color: "#dcdcaa" });
        i = j;
        continue;
      }
    }

    // Words (identifiers, keywords, types)
    if (/[a-zA-Z_]/.test(source[i])) {
      let j = i;
      while (j < source.length && /[a-zA-Z0-9_]/.test(source[j])) j++;
      const word = source.slice(i, j);
      const nextChar = j < source.length ? source[j] : "";

      if (KEYWORDS.has(word)) {
        tokens.push({ text: word, color: "#569cd6" });
      } else if (TYPES.has(word)) {
        tokens.push({ text: word, color: "#569cd6" });
      } else if (CUSTOM_TYPES.has(word)) {
        tokens.push({ text: word, color: "#4ec9b0" });
      } else if (METHODS.has(word) && nextChar === "(") {
        tokens.push({ text: word, color: "#dcdcaa" });
      } else {
        tokens.push({ text: word });
      }
      i = j;
      continue;
    }

    // Numbers
    if (/[0-9]/.test(source[i])) {
      let j = i;
      while (j < source.length && /[0-9_]/.test(source[j])) j++;
      tokens.push({ text: source.slice(i, j), color: "#b5cea8" });
      i = j;
      continue;
    }

    // Everything else (whitespace, operators, punctuation)
    tokens.push({ text: source[i] });
    i++;
  }

  return tokens;
}

function HighlightedCode({ source }: { source: string }) {
  const tokens = tokenize(source);
  return (
    <>
      {tokens.map((token, i) =>
        token.color ? (
          <span key={i} style={{ color: token.color }}>
            {token.text}
          </span>
        ) : (
          <React.Fragment key={i}>{token.text}</React.Fragment>
        )
      )}
    </>
  );
}

export default function CodePreview() {
  return (
    <section id="code" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Write Contracts in C#
            </h2>
            <p className="mb-6 text-gray-400">
              No new language to learn. Extend built-in token standards with
              pluggable policy hooks. The SDK ships as a standalone NuGet
              package with zero dependencies on the node.
            </p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#6b9fd4]">&#10003;</span>
                <span>
                  Pluggable{" "}
                  <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-gray-300">
                    PolicyEnforcer
                  </code>
                  {" "}with holding limits, lockups, jurisdiction, and sanctions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#6b9fd4]">&#10003;</span>
                <span>12 compile-time Roslyn analyzers (BST001&ndash;BST012)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#6b9fd4]">&#10003;</span>
                <span>
                  Inherit from{" "}
                  <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-gray-300">
                    BST20Token
                  </code>
                  ,{" "}
                  <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-gray-300">
                    BST721Token
                  </code>
                  ,{" "}
                  <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-gray-300">
                    BST3525Token
                  </code>
                  {" "}and more
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#6b9fd4]">&#10003;</span>
                <span>
                  Cross-contract calls with reentrancy protection (max depth 8)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#6b9fd4]">&#10003;</span>
                <span>
                  In-process testing with xUnit and full Visual Studio / Rider
                  debugging
                </span>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/5 bg-[#111111] card-glow">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-gray-500">
                ComplianceToken.cs
              </span>
            </div>
            <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed text-gray-300">
              <code>
                <HighlightedCode source={code} />
              </code>
            </pre>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

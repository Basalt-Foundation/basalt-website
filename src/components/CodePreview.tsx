const code = `[BasaltContract("BST20Token")]
public class TokenContract
{
    private readonly StorageMap<byte[], ulong> _balances = new("balances");
    private readonly StorageValue<ulong> _totalSupply = new("totalSupply");
    private readonly StorageValue<string> _name = new("name");

    [BasaltConstructor]
    public void Initialize(string name, string symbol, ulong initialSupply)
    {
        _name.Set(name);
        _totalSupply.Set(initialSupply);
        _balances.Set(Context.Caller, initialSupply);
        Context.EmitEvent(new Transfer(null, Context.Caller, initialSupply));
    }

    [BasaltEntrypoint]
    public void Transfer(byte[] to, ulong amount)
    {
        var sender = Context.Caller;
        var balance = _balances.Get(sender);
        Require(balance >= amount, "Insufficient balance");

        _balances.Set(sender, balance - amount);
        _balances.Set(to, _balances.Get(to) + amount);
        Context.EmitEvent(new Transfer(sender, to, amount));
    }

    [BasaltView]
    public ulong BalanceOf(byte[] account) => _balances.Get(account);
}`;

export default function CodePreview() {
  return (
    <section id="code" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Write Contracts in C#
            </h2>
            <p className="mb-6 text-gray-400">
              No new language to learn. Write smart contracts in idiomatic C#
              with the types, tooling, and IDE support you already know.
              Roslyn analyzers catch reentrancy, unbounded loops, and unsafe
              patterns at compile time.
            </p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#6b9fd4]">&#10003;</span>
                <span>Strong typing with <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-gray-300">StorageMap</code>, <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-gray-300">StorageValue</code>, <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-gray-300">StorageList</code></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#6b9fd4]">&#10003;</span>
                <span>8 compile-time safety analyzers (BST001&ndash;BST008)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#6b9fd4]">&#10003;</span>
                <span>In-process testing with <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-gray-300">BasaltTestHost</code></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#6b9fd4]">&#10003;</span>
                <span>Full Visual Studio and Rider debugging support</span>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/5 bg-[#111111]">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-gray-500">TokenContract.cs</span>
            </div>
            <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed">
              <code className="text-gray-300">{code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

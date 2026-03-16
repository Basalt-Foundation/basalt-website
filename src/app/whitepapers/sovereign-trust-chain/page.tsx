import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import WhitepaperToc from "@/components/WhitepaperToc";

export const metadata: Metadata = {
  title: "Sovereign Trust Chain — Basalt",
  description:
    "Decentralized regulatory accreditation for blockchain identity services. A hierarchical trust model mapping real-world regulators (AMF, BaFin, FCA) onto on-chain trust tiers.",
  openGraph: {
    title: "Sovereign Trust Chain — Basalt",
    description:
      "Decentralized regulatory accreditation for blockchain identity services.",
    type: "article",
  },
};

export default function SovereignTrustChain() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            Basalt
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/whitepapers"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Whitepapers
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="border-b border-white/5 px-6 pt-28 pb-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#4a6fa5]">
            Technical Whitepaper
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Sovereign Trust Chain
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-gray-400">
            Decentralized Regulatory Accreditation for Blockchain Identity Services
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Basalt Foundation</span>
            <span className="text-white/20">|</span>
            <span>March 2026</span>
          </div>
        </div>
      </header>

      {/* ── Content ── */}
      <div className="mx-auto flex max-w-6xl gap-12 px-6 py-16">
        <WhitepaperToc sections={[
          { id: "abstract", label: "Abstract" },
          { id: "introduction", label: "1. Introduction" },
          { id: "architecture", label: "2. Architecture" },
          { id: "regulatory-mapping", label: "3. Regulatory Mapping" },
          { id: "security", label: "4. Security Analysis" },
          { id: "workflow", label: "5. Workflow Example" },
          { id: "implementation", label: "6. Implementation" },
          { id: "limitations", label: "7. Future Work" },
          { id: "conclusion", label: "8. Conclusion" },
          { id: "references", label: "References" },
        ]} />

        <article className="wp min-w-0 max-w-3xl">
          {/* ── Abstract ── */}
          <section id="abstract" className="mb-20">
            <h2>Abstract</h2>
            <p>
              This paper introduces the Sovereign Trust Chain, a hierarchical trust model for the
              Basalt Layer 1 blockchain that replaces centralized administrator-gated identity
              provider registration with a decentralized accreditation mechanism rooted in
              real-world regulatory authorities. By mapping existing financial regulatory
              structures (MiCA-authorized CASPs, eIDAS Qualified Trust Service Providers, FinCEN
              MSBs) onto an on-chain trust hierarchy, the system enables automated accreditation
              of KYC service providers without requiring a single trusted administrator. Sovereign
              authorities are onboarded through on-chain governance votes, and subsequently vouch
              for accredited providers via verifiable credentials. The result is a
              permissionless-at-the-edges, regulated-at-the-core identity infrastructure that
              aligns on-chain trust with off-chain regulatory reality.
            </p>
          </section>

          {/* ── 1. Introduction ── */}
          <section id="introduction" className="mb-20">
            <h2>1. Introduction</h2>

            <h3>1.1 The Trust Problem in Decentralized Identity</h3>
            <p>
              Decentralized identity systems face a fundamental bootstrapping problem: how does a
              smart contract determine whether an entity claiming to be a legitimate KYC provider
              is actually authorized to perform identity verification?
            </p>
            <p>Existing approaches fall into two categories, both unsatisfactory:</p>
            <p>
              <strong>Permissionless registration</strong> allows anyone to register as an identity
              provider, relying solely on economic incentives (collateral staking, slashing) to
              deter fraud. This model fails because the damage from fraudulent KYC credentials
              (sanctioned individuals gaining access to financial services) can far exceed the
              economic penalty. A malicious actor with sufficient capital can register, issue
              fraudulent credentials, and absorb the slashing cost as a business expense.
            </p>
            <p>
              <strong>Administrator-gated registration</strong> requires a trusted party to approve
              identity providers. This introduces a single point of failure, a censorship vector,
              and a centralization risk that undermines the decentralization guarantees of the
              underlying blockchain. The administrator becomes a bottleneck for onboarding and a
              target for social engineering or regulatory pressure.
            </p>

            <h3>1.2 Key Insight</h3>
            <p>
              The verification of identity service providers is not an unsolved problem. Every
              jurisdiction with financial regulation already maintains a public registry of
              authorized entities:
            </p>
            <ul>
              <li>
                The French AMF publishes a list of registered PASNs (Prestataires de Services sur
                Actifs Numeriques)
              </li>
              <li>
                The German BaFin maintains a registry of authorized crypto-asset service providers
              </li>
              <li>The UK FCA publishes its Financial Services Register</li>
              <li>
                The EU publishes the Trusted List of Qualified Trust Service Providers under eIDAS
              </li>
            </ul>
            <p>
              The challenge is not determining who is authorized - that information is publicly
              available. The challenge is{" "}
              <strong>
                bridging this off-chain regulatory reality into on-chain verifiable trust
              </strong>{" "}
              without reintroducing centralization.
            </p>

            <h3>1.3 Contribution</h3>
            <p>The Sovereign Trust Chain solves this by:</p>
            <ol>
              <li>
                Using on-chain governance to onboard sovereign regulatory authorities as Tier 3
                issuers (a democratic, one-time decision per jurisdiction)
              </li>
              <li>
                Enabling sovereign authorities to vouch for accredited providers via BST-VC
                verifiable credentials (automated, no admin needed)
              </li>
              <li>
                Propagating revocation automatically when a regulator withdraws accreditation
              </li>
              <li>
                Creating cascade accountability where sponsors bear reputational cost for their
                sponsorees&apos; misconduct
              </li>
            </ol>
          </section>

          {/* ── 2. Architecture ── */}
          <section id="architecture" className="mb-20">
            <h2>2. Architecture</h2>

            <h3>2.1 Trust Tiers</h3>
            <p>
              The Sovereign Trust Chain defines four trust tiers within the Basalt IssuerRegistry:
            </p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Role</th>
                    <th>Onboarding Method</th>
                    <th>Collateral</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>Self-attestation</td>
                    <td>Permissionless</td>
                    <td>None</td>
                    <td>Individual user</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Community provider</td>
                    <td>Vouched by Tier 2</td>
                    <td>Low</td>
                    <td>Small KYC operator</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Accredited provider</td>
                    <td>Vouched by Tier 3 via BST-VC</td>
                    <td>High (staked)</td>
                    <td>VerifyFrance SAS, IDnow GmbH</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Sovereign authority</td>
                    <td>Governance vote</td>
                    <td>None</td>
                    <td>AMF, BaFin, FCA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Each tier can only be granted by an entity one tier above. The exception is Tier 3,
              which requires a governance vote - this is the root of trust for the entire chain.
            </p>

            <h3>2.2 Vouching Mechanism</h3>
            <p>
              The vouching process uses Basalt&apos;s existing BST-VC (Verifiable Credential)
              infrastructure:
            </p>
            <pre>
{`Sovereign Authority (Tier 3)
        |
        | Issues BST-VC credential:
        |   schema: "regulatory-accreditation"
        |   claims: { registrationId, type, jurisdiction, validUntil }
        |   signature: Ed25519
        |
        v
Accredited Provider (Tier 2 candidate)
        |
        | Calls IssuerRegistry.RegisterWithAccreditation(
        |   name, credentialHash, sponsorAddress
        | )
        |
        v
IssuerRegistry (smart contract)
        |
        | Verifies:
        |   1. Sponsor is Tier 3 and active
        |   2. Credential exists in BSTVCRegistry
        |   3. Credential is not revoked
        |   4. Sponsor jurisdiction matches
        |
        v
Auto-promotion to Tier 2 (no human intervention)`}
            </pre>
            <p>
              The credential itself is stored off-chain (as per the BST-VC standard). Only the
              BLAKE3 hash is anchored on-chain, providing an immutable reference without exposing
              credential contents.
            </p>

            <h3>2.3 Revocation Propagation</h3>
            <p>
              When a regulatory authority withdraws an entity&apos;s accreditation:
            </p>
            <ol>
              <li>
                The authority updates its <strong>Sparse Merkle Tree</strong> revocation root in
                the IssuerRegistry. This is an existing capability of the Basalt ZK compliance
                layer.
              </li>
              <li>
                The IssuerRegistry&apos;s <code>IsActiveIssuer()</code> function checks the
                sponsor&apos;s revocation tree for the sponsoree&apos;s accreditation credential.
              </li>
              <li>
                If the credential is found in the revocation tree, the sponsoree is treated as
                inactive.
              </li>
              <li>
                A keeper mechanism can proactively sweep and deactivate revoked issuers to prevent
                stale state.
              </li>
            </ol>
            <p>
              This ensures that off-chain regulatory actions (license revocations, suspensions)
              are reflected on-chain with minimal latency.
            </p>

            <h3>2.4 Cascade Accountability</h3>
            <p>The trust chain introduces bidirectional accountability:</p>
            <p>
              <strong>Downward (sponsor to sponsoree):</strong> A sponsor can deactivate any
              issuer it has vouched for, reflecting real-world regulatory actions (license
              revocation, suspension).
            </p>
            <p>
              <strong>Upward (sponsoree misconduct affects sponsor):</strong> When a sponsored
              issuer is slashed for misconduct (fraudulent credentials, sanctions violations), the
              sponsor&apos;s dispute counter is incremented. This serves two purposes:
            </p>
            <ol>
              <li>
                <strong>Reputation signal:</strong> Users and dApps can query a sponsor&apos;s
                dispute count to assess the quality of its accreditation process.
              </li>
              <li>
                <strong>Governance trigger:</strong> If a sponsor accumulates excessive disputes,
                the community can propose a governance vote to revoke the sponsor&apos;s Tier 3
                status, which cascades deactivation to all its sponsorees.
              </li>
            </ol>
            <p>
              This creates a strong incentive for sovereign authorities to perform thorough due
              diligence before vouching for providers, mirroring the real-world liability that
              regulators bear for their licensees.
            </p>
          </section>

          {/* ── 3. Regulatory Mapping ── */}
          <section id="regulatory-mapping" className="mb-20">
            <h2>3. Regulatory Mapping</h2>

            <h3>3.1 European Union - MiCA Framework</h3>
            <p>
              The Markets in Crypto-Assets Regulation (MiCA), fully effective since December 2024,
              establishes a harmonized licensing framework for Crypto-Asset Service Providers
              (CASPs) across the EU. Each member state&apos;s National Competent Authority (NCA)
              is responsible for authorizing and supervising CASPs.
            </p>
            <p>This maps directly to the Sovereign Trust Chain:</p>
            <ul>
              <li>
                Each NCA becomes a Tier 3 sovereign authority (one governance vote per NCA)
              </li>
              <li>CASPs authorized under MiCA become Tier 2 accredited providers</li>
              <li>
                The CASP authorization, already a public record, is encoded as a BST-VC credential
              </li>
            </ul>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Member State</th>
                    <th>NCA</th>
                    <th>ISO 3166-1</th>
                    <th>CASP Registry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>France</td><td>AMF</td><td>250</td><td>Registre PSAN</td></tr>
                  <tr><td>Germany</td><td>BaFin</td><td>276</td><td>Kryptowertetransferverordnung</td></tr>
                  <tr><td>Italy</td><td>Consob / OAM</td><td>380</td><td>Registro OAM</td></tr>
                  <tr><td>Spain</td><td>CNMV</td><td>724</td><td>Registro CASP</td></tr>
                  <tr><td>Netherlands</td><td>DNB / AFM</td><td>528</td><td>Crypto Registry</td></tr>
                  <tr><td>Luxembourg</td><td>CSSF</td><td>442</td><td>Registre CASP</td></tr>
                  <tr><td>Ireland</td><td>CBI</td><td>372</td><td>VASP Register</td></tr>
                  <tr><td>Austria</td><td>FMA</td><td>040</td><td>CASP Register</td></tr>
                  <tr><td>Portugal</td><td>CMVM / BdP</td><td>620</td><td>VASP Register</td></tr>
                  <tr><td>Belgium</td><td>FSMA</td><td>056</td><td>VASP Register</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              MiCA&apos;s passporting mechanism (a CASP authorized in one member state can operate
              across the EU) is naturally supported: a Tier 2 provider vouched by the AMF (France)
              can serve users in Germany without needing a separate BaFin sponsorship, as the MiCA
              authorization itself is EU-wide.
            </p>

            <h3>3.2 eIDAS 2.0 - Qualified Trust Services</h3>
            <p>
              The eIDAS 2.0 regulation (2024/1183) establishes the European Digital Identity
              Framework, including Qualified Electronic Attestations of Attributes (QEAAs).
              Qualified Trust Service Providers (QTSPs) are authorized to issue QEAAs and are
              listed on the EU Trusted List maintained by each member state&apos;s supervisory
              body.
            </p>
            <p>The Sovereign Trust Chain can leverage eIDAS in two ways:</p>
            <ol>
              <li>
                <strong>QTSPs as Tier 2 providers:</strong> A QTSP authorized under eIDAS can be
                vouched by its national supervisory body (ANSSI for France, Bundesnetzagentur for
                Germany) to issue identity credentials on Basalt.
              </li>
              <li>
                <strong>QEAA as accreditation credentials:</strong> The accreditation credential
                issued by a Tier 3 authority can conform to the QEAA format, providing legal
                recognition under EU law.
              </li>
            </ol>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>eIDAS Supervisory Body</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>France</td><td>ANSSI</td><td>Supervises French QTSPs</td></tr>
                  <tr><td>Germany</td><td>Bundesnetzagentur</td><td>Supervises German QTSPs</td></tr>
                  <tr><td>Italy</td><td>AgID</td><td>Supervises Italian QTSPs</td></tr>
                  <tr><td>Spain</td><td>MINECO</td><td>Supervises Spanish QTSPs</td></tr>
                </tbody>
              </table>
            </div>

            <h3>3.3 Non-EU Jurisdictions</h3>
            <p>The model extends naturally to jurisdictions outside the EU:</p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Jurisdiction</th>
                    <th>Authority</th>
                    <th>Registration Type</th>
                    <th>Mapping</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Switzerland</td><td>FINMA</td><td>SRO membership / IFDS license</td><td>Tier 3: FINMA</td></tr>
                  <tr><td>United Kingdom</td><td>FCA</td><td>MLR 2017 registration</td><td>Tier 3: FCA</td></tr>
                  <tr><td>United States</td><td>FinCEN + States</td><td>MSB + MTL</td><td>Tier 3: FinCEN (federal)</td></tr>
                  <tr><td>Singapore</td><td>MAS</td><td>Payment Services Act license</td><td>Tier 3: MAS</td></tr>
                  <tr><td>UAE (Dubai)</td><td>VARA</td><td>VASP license</td><td>Tier 3: VARA</td></tr>
                  <tr><td>Hong Kong</td><td>SFC / HKMA</td><td>VATP license</td><td>Tier 3: SFC</td></tr>
                  <tr><td>Japan</td><td>FSA (JFSA)</td><td>CAESP registration</td><td>Tier 3: JFSA</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              For jurisdictions with multiple regulatory bodies (e.g., the US with federal and
              state regulators), the governance process determines which body is registered as
              Tier 3. Multiple Tier 3 authorities can coexist for the same country code.
            </p>
          </section>

          {/* ── 4. Security Analysis ── */}
          <section id="security" className="mb-20">
            <h2>4. Security Analysis</h2>

            <h3>4.1 Threat Model</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Threat</th>
                    <th>Mitigation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fake sovereign authority registered</td>
                    <td>
                      Governance vote with high quorum + timelock. Tier 3 decisions are highly
                      visible and subject to community scrutiny.
                    </td>
                  </tr>
                  <tr>
                    <td>Sovereign authority compromised (key theft)</td>
                    <td>
                      Tier 3 authority can be deactivated by governance vote. All sponsorees are
                      cascaded. Multi-sig recommended for Tier 3 keys.
                    </td>
                  </tr>
                  <tr>
                    <td>Accredited provider issues fraudulent credentials</td>
                    <td>
                      Collateral slashing + sponsor dispute count increment. Repeated offenses
                      trigger governance review of sponsor.
                    </td>
                  </tr>
                  <tr>
                    <td>Collusion between sponsor and sponsoree</td>
                    <td>
                      Sponsor bears reputational and financial risk (dispute count, potential
                      Tier 3 revocation). Economic incentives are misaligned for collusion.
                    </td>
                  </tr>
                  <tr>
                    <td>Governance capture (malicious stakers approve fake Tier 3)</td>
                    <td>
                      High quorum for Tier 3 proposals, timelock for execution, and the public
                      nature of sovereign authority claims makes fraudulent approvals obvious.
                    </td>
                  </tr>
                  <tr>
                    <td>Stale revocation (provider revoked off-chain but still active on-chain)</td>
                    <td>
                      Keeper mechanism sweeps revocation trees. Additionally,{" "}
                      <code>IsActiveIssuer()</code> checks revocation status on every call.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>4.2 Trust Assumptions</h3>
            <p>The Sovereign Trust Chain relies on the following assumptions:</p>
            <ol>
              <li>
                <strong>Governance integrity:</strong> The on-chain governance system
                (stake-weighted quadratic voting) accurately represents the community&apos;s
                interests. This is the same assumption underlying all on-chain governance.
              </li>
              <li>
                <strong>Key custody:</strong> Tier 3 authorities maintain secure custody of their
                signing keys. This is mitigated by recommending multi-sig wallets and by the
                ability to revoke compromised authorities via governance.
              </li>
              <li>
                <strong>Public registry accuracy:</strong> Off-chain regulatory registries (AMF
                PSAN list, FCA register, etc.) are accurate and publicly verifiable. This is a
                reasonable assumption given that these registries are maintained by government
                agencies with legal accountability.
              </li>
              <li>
                <strong>Credential non-transferability:</strong> BST-VC credentials are bound to
                specific addresses and cannot be transferred to unauthorized entities. This is
                enforced by the credential schema (subject field is the issuer&apos;s address).
              </li>
            </ol>

            <h3>4.3 Comparison with Alternatives</h3>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Approach</th>
                    <th>Decentralization</th>
                    <th>Automation</th>
                    <th>Regulatory Alignment</th>
                    <th>Sybil Resistance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Single admin</td>
                    <td>None</td>
                    <td>Full (admin decides)</td>
                    <td>Depends on admin</td>
                    <td>High (admin gates)</td>
                  </tr>
                  <tr>
                    <td>Permissionless + staking</td>
                    <td>Full</td>
                    <td>Full</td>
                    <td>None</td>
                    <td>Low (capital only)</td>
                  </tr>
                  <tr>
                    <td>DAO vote per provider</td>
                    <td>High</td>
                    <td>None (vote per provider)</td>
                    <td>Indirect</td>
                    <td>High</td>
                  </tr>
                  <tr className="bg-[#4a6fa5]/5">
                    <td className="font-semibold text-white">Sovereign Trust Chain</td>
                    <td className="text-white">High</td>
                    <td className="text-white">High (after Tier 3 onboarding)</td>
                    <td className="text-white">Direct</td>
                    <td className="text-white">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── 5. Workflow Example ── */}
          <section id="workflow" className="mb-20">
            <h2>5. Workflow Example</h2>

            <h3>5.1 Onboarding the AMF (One-Time)</h3>
            <ol>
              <li>
                A community member creates a governance proposal:
                <ul className="mt-2">
                  <li>Title: &quot;Register AMF as Sovereign Authority for France&quot;</li>
                  <li>
                    Evidence: Link to the official AMF PSAN registry, the AMF&apos;s public key or
                    institutional address
                  </li>
                  <li>
                    Proposed action:{" "}
                    <code>IssuerRegistry.RegisterSovereignAuthority(&quot;AMF&quot;, 250, 0xAMF...)</code>
                  </li>
                </ul>
              </li>
              <li>
                The proposal enters a 7-day voting period with stake-weighted quadratic voting.
              </li>
              <li>If approved, the proposal enters a 2-day timelock.</li>
              <li>
                After timelock, the governance contract executes the registration. The AMF is now
                Tier 3 for jurisdiction 250 (France).
              </li>
            </ol>

            <h3>5.2 VerifyFrance Accreditation (Automated)</h3>
            <ol>
              <li>VerifyFrance SAS holds PSAN registration #P2024-0042 from the AMF.</li>
              <li>
                The AMF (or its delegated operator) issues a BST-VC credential:
                <pre className="mt-2">
{`{
  "schema": "urn:basalt:schema:regulatory-accreditation",
  "subject": "0xVerifyFrance...",
  "claims": {
    "registrationId": "P2024-0042",
    "type": "PSAN",
    "jurisdiction": 250,
    "validUntil": 1814400000
  },
  "issuer": "0xAMF...",
  "issuedAt": 1773936000
}`}
                </pre>
              </li>
              <li>The credential hash is anchored on-chain via BSTVCRegistry.</li>
              <li>
                VerifyFrance calls:
                <pre className="mt-2">
{`IssuerRegistry.RegisterWithAccreditation(
  "VerifyFrance SAS", credentialHash, amfAddress
)`}
                </pre>
              </li>
              <li>
                The contract verifies the sponsor, credential, and jurisdiction. VerifyFrance is
                auto-promoted to Tier 2.
              </li>
              <li>VerifyFrance stakes 50,000 BSLT collateral via <code>StakeCollateral()</code>.</li>
              <li>
                VerifyFrance registers on the KYC Marketplace with pricing and jurisdiction
                coverage.
              </li>
            </ol>

            <h3>5.3 User KYC Purchase (Existing Flow)</h3>
            <ol>
              <li>
                Alice selects VerifyFrance on the KYC Marketplace (cheapest provider for France,
                142 successful verifications, 0 disputes).
              </li>
              <li>Alice pays 75 BSLT for Enhanced KYC. Payment is escrowed.</li>
              <li>
                VerifyFrance verifies Alice&apos;s identity off-chain and issues a BST-VC
                credential.
              </li>
              <li>
                Alice generates ZK proofs from her credential to access any dApp on Basalt without
                re-verifying.
              </li>
            </ol>

            <h3>5.4 Accreditation Revocation (Automated)</h3>
            <ol>
              <li>
                The AMF revokes VerifyFrance&apos;s PSAN registration due to compliance failures.
              </li>
              <li>
                The AMF updates its Sparse Merkle Tree revocation root in IssuerRegistry, adding
                VerifyFrance&apos;s accreditation credential to the revocation set.
              </li>
              <li>
                On the next <code>IsActiveIssuer(VerifyFrance)</code> call, the registry checks
                the AMF&apos;s revocation tree and finds the credential is revoked.
              </li>
              <li>
                VerifyFrance is treated as inactive. No new KYC requests can be submitted to
                VerifyFrance. Existing credentials remain valid until their natural expiry.
              </li>
            </ol>
          </section>

          {/* ── 6. Implementation ── */}
          <section id="implementation" className="mb-20">
            <h2>6. Implementation on Basalt</h2>

            <h3>6.1 Existing Infrastructure</h3>
            <p>
              The Sovereign Trust Chain builds entirely on existing Basalt infrastructure:
            </p>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Role in Trust Chain</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>IssuerRegistry (0x...1007)</td>
                    <td>Stores trust tiers, sponsors, accreditation credentials</td>
                    <td>Exists, needs extension</td>
                  </tr>
                  <tr>
                    <td>BSTVCRegistry (type 0x0007)</td>
                    <td>Anchors accreditation credentials on-chain</td>
                    <td>Exists</td>
                  </tr>
                  <tr>
                    <td>SchemaRegistry (0x...1006)</td>
                    <td>Defines the accreditation credential schema</td>
                    <td>Exists</td>
                  </tr>
                  <tr>
                    <td>Governance (0x...1003)</td>
                    <td>Onboards Tier 3 sovereign authorities</td>
                    <td>Exists</td>
                  </tr>
                  <tr>
                    <td>Sparse Merkle Tree</td>
                    <td>Revocation propagation</td>
                    <td>Exists in IssuerRegistry</td>
                  </tr>
                  <tr>
                    <td>Ed25519 Signatures</td>
                    <td>Credential signing</td>
                    <td>Native to Basalt</td>
                  </tr>
                  <tr>
                    <td>ZkComplianceVerifier</td>
                    <td>ZK proof verification for KYC reuse</td>
                    <td>Exists</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>6.2 New Contract Surface</h3>
            <p>The IssuerRegistry requires the following additions:</p>
            <p><strong>New storage:</strong></p>
            <ul>
              <li>Sponsor mapping (issuer &#8594; sponsor address)</li>
              <li>Jurisdiction mapping (Tier 3 issuer &#8594; ISO 3166-1 country code)</li>
              <li>Accreditation credential mapping (issuer &#8594; credential hash)</li>
              <li>Sponsor dispute counter (sponsor &#8594; dispute count from sponsorees)</li>
            </ul>
            <p><strong>New entrypoints:</strong></p>
            <ul>
              <li>
                <code>RegisterSovereignAuthority(name, jurisdictionCode, authority)</code> -
                governance only
              </li>
              <li>
                <code>RegisterWithAccreditation(name, credentialHash, sponsor)</code> -
                permissionless, auto-verified
              </li>
              <li>
                <code>DeactivateSponsoree(issuer)</code> - callable by sponsor
              </li>
              <li>
                <code>SetGovernanceAddress(addr)</code> - admin, one-time setup
              </li>
            </ul>
            <p><strong>New views:</strong></p>
            <ul>
              <li>
                <code>GetSponsor(issuer)</code>, <code>GetJurisdiction(issuer)</code>,{" "}
                <code>GetSponsorDisputeCount(sponsor)</code>
              </li>
            </ul>
            <p><strong>Modified behavior:</strong></p>
            <ul>
              <li><code>RegisterIssuer()</code> restricted to Tier 0 only</li>
              <li><code>SlashIssuer()</code> increments sponsor dispute count</li>
            </ul>

            <h3>6.3 Gas Costs</h3>
            <p>
              The accreditation verification (<code>RegisterWithAccreditation</code>) involves two
              cross-contract calls (BSTVCRegistry credential check and revocation check) in
              addition to storage writes. Estimated gas: ~120,000 units. This is a one-time cost
              per provider registration.
            </p>
            <p>
              The <code>IsActiveIssuer()</code> check adds one cross-contract call for revocation
              verification when the issuer has a sponsor. Estimated additional gas per call:
              ~30,000 units.
            </p>
          </section>

          {/* ── 7. Limitations ── */}
          <section id="limitations" className="mb-20">
            <h2>7. Limitations and Future Work</h2>

            <h3>7.1 Bootstrap Problem</h3>
            <p>
              The system requires at least one Tier 3 sovereign authority to begin functioning.
              Until a real-world regulator participates, the governance contract can directly
              approve Tier 2 providers as a transitional measure. This preserves decentralization
              (governance vote vs. single admin) while the sovereign onboarding pipeline matures.
            </p>

            <h3>7.2 Regulator Participation</h3>
            <p>
              Convincing government agencies to issue on-chain credentials is a business
              development challenge, not a technical one. The system is designed to minimize the
              regulator&apos;s burden: they need only sign a credential attesting to information
              they already publish (their public registry). They do not need to understand
              blockchain technology, run a node, or interact with the chain directly. A delegated
              operator can manage the on-chain operations on behalf of the regulator.
            </p>

            <h3>7.3 Oracle Integration</h3>
            <p>
              Future integration with an oracle contract could automate the verification of
              off-chain regulatory registries. An oracle could periodically attest to the contents
              of public registries (AMF PSAN list, FCA register), enabling fully automated
              accreditation without requiring regulator participation. This is complementary to
              the trust chain model and can be layered on top.
            </p>

            <h3>7.4 Cross-Chain Trust</h3>
            <p>
              The Sovereign Trust Chain is specific to the Basalt network. Future work could
              explore bridging trust chain attestations to other blockchains via the EVM Bridge,
              enabling cross-chain KYC credential portability.
            </p>
          </section>

          {/* ── 8. Conclusion ── */}
          <section id="conclusion" className="mb-20">
            <h2>8. Conclusion</h2>
            <p>
              The Sovereign Trust Chain transforms the IssuerRegistry from an
              administrator-gated system into a decentralized, regulatory-aligned trust hierarchy.
              By mapping the existing structure of financial regulation onto on-chain trust tiers,
              it solves the bootstrapping problem of decentralized identity without sacrificing
              decentralization or regulatory compliance.
            </p>
            <p>
              The key innovation is recognizing that{" "}
              <strong>the trust infrastructure already exists</strong> in the form of regulatory
              registries maintained by sovereign authorities worldwide. The Sovereign Trust Chain
              does not create new trust - it bridges existing trust into the on-chain world through
              verifiable credentials and governance-gated sovereign onboarding.
            </p>
            <p>
              For the Basalt ecosystem, this enables the KYC Marketplace (the flagship compliance
              use case) to operate with genuine trust guarantees: every KYC provider on the
              platform is traceable to a real-world regulatory authorization, verified on-chain,
              and subject to automated revocation. Users can trust that &quot;KYC-verified&quot;
              means something, and regulators can trust that the system enforces their
              authorizations.
            </p>
          </section>

          {/* ── References ── */}
          <section id="references" className="mb-20">
            <h2>References</h2>
            <ol>
              <li>Regulation (EU) 2023/1114 - Markets in Crypto-Assets (MiCA)</li>
              <li>
                Regulation (EU) 2024/1183 - European Digital Identity Framework (eIDAS 2.0)
              </li>
              <li>EU Trusted List Browser</li>
              <li>AMF PSAN Registry</li>
              <li>W3C Verifiable Credentials Data Model v2.0</li>
              <li>
                Groth, J. (2016). On the Size of Pairing-based Non-interactive Arguments.
                EUROCRYPT 2016.
              </li>
            </ol>
          </section>
        </article>
      </div>

      <Footer />
    </>
  );
}

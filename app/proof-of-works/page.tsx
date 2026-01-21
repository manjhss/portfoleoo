import { ProofList } from "@/components/portfolio/proof-list";

export default function ProofOfWorksPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="m-6">
        <ProofList isHomepage={false} />
      </div>
    </div>
  );
}

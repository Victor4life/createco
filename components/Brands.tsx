export default function Brands() {
  const brands = ["NIKE", "MTN", "GTCO", "Jumia", "Google", "Paystack"];

  return (
    <section className="border-b border-[#211914]/10 bg-[#f5efe8]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <p className="mb-8 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#211914]/50">
          Trusted by brands we believe in
        </p>

        <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-center font-semibold tracking-tight text-[#211914]/60 transition-colors hover:text-[#a94d27]"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
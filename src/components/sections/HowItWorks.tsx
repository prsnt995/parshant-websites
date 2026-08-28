export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Tell Us Your Idea",
      desc: "Share your vision and business requirements with us."
    },
    {
      num: "02",
      title: "Plan & Design",
      desc: "We create a clear roadmap and user experience layout."
    },
    {
      num: "03",
      title: "Build Your Product",
      desc: "Engineers build your solution with clean, tested code."
    },
    {
      num: "04",
      title: "Launch & Support",
      desc: "We deploy your project and provide ongoing technical support."
    }
  ];

  return (
    <section className="section-padding bg-slate-50/60 border-b border-border">
      <div className="container max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 px-3 py-1 bg-slate-100 rounded-md border border-slate-200 inline-block mb-3">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            How It Works
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-background rounded-lg border border-border">
              <div className="w-12 h-12 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-base font-bold text-foreground mb-4">
                {step.num}
              </div>
              <h3 className="text-base font-bold mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

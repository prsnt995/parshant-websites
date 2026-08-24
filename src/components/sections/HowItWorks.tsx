export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Tell Us Your Idea",
      desc: "Share your vision and requirements with us."
    },
    {
      num: "02",
      title: "Plan & Design",
      desc: "We create a roadmap and design the user experience."
    },
    {
      num: "03",
      title: "Build Your Product",
      desc: "Our developers bring your idea to life with code."
    },
    {
      num: "04",
      title: "Launch & Support",
      desc: "We deploy your product and provide ongoing support."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container max-w-5xl">
        <h2 className="text-4xl font-extrabold tracking-tight mb-16 text-center">How It Works</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-border -z-10" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center text-3xl font-black text-primary mb-6 shadow-sm">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

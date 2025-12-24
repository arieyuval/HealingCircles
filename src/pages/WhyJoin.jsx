import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartCrack, Users, Search, Feather, Mail } from 'lucide-react';

const whoBenefits = [
  {
    icon: <HeartCrack className="w-6 h-6 text-rose-500" />,
    text: 'Individuals feeling grief, anxiety, or loss related to the crisis.',
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-500" />,
    text: 'People interested in bridging divides without debate or judgment.',
  },
  {
    icon: <Search className="w-6 h-6 text-blue-500" />,
    text: 'Those curious about their own identity and its relationship to the conflict.',
  },
];

export default function WhyJoinPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("email.healingtogether@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-stone-50 to-amber-100/50">
      <div className="px-4 py-16 md:py-24 relative overflow-hidden">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 relative z-10">
          <h1 className="text-4xl md:text-5xl font-light text-stone-800 leading-tight mb-4">
            Why This Space Exists
          </h1>
          <p className="text-lg text-stone-600 font-light leading-relaxed">
            For safe processing, shared understanding, and compassionate dialogue.
          </p>
        </div>

        {/* Who It's For */}
        <section className="max-w-4xl mx-auto mb-16 relative z-10">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-light text-stone-800">
                Who Are These Circles For?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 md:p-12">
              <p className="text-center text-base md:text-lg text-stone-700 leading-relaxed mb-10">
                Anyone 18 years of age or older that is affected directly or indirectly by the ongoing crisis in the Middle East or is drawn to the topic for personal reasons. Many participants carry emotional weight, identity-based pain, or anxiety related to the conflict—and find there are few places to process those experiences safely.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {whoBenefits.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center mb-4 shadow">
                      {item.icon}
                    </div>
                    <p className="text-stone-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Rationale Section */}
        <section className="max-w-4xl mx-auto mb-16 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-stone-800 mb-4">Our Rationale</h2>
            <p className="text-lg text-stone-600 font-light">
              Healing emotional fractures to build bridges.
            </p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-stone-100 prose prose-stone max-w-none leading-relaxed">
            <p>
              With the prevalence of intergenerational and ongoing trauma and grief within the Jewish and Palestinian communities, there is a need for spaces to safely process emotions without judgment. While sharing conflicting narratives can open up opportunities for cross-cultural understanding, these deep-seated traumas often hinder well-intentioned bridge-building efforts.
            </p>
            <p>
              In any group or community, we encounter topics that cause distance, tension, fracture, and cognitive dissonance. A primary cause of breakdown is when an issue touches a core or 'sacred' value central to our identity. The discourse around events in Israel-Palestine is one such example. In worship spaces, public forums, businesses, and even families, differing viewpoints have led to breakdowns in communication and created toxic environments where people previously got along well.
            </p>
          </div>
        </section>

        {/* Prompt */}
        <section className="max-w-2xl mx-auto text-center mb-16 relative z-10">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
            <Feather className="w-5 h-5 text-emerald-400" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-emerald-400 to-transparent"></div>
          </div>
          <p className="text-2xl font-light text-stone-600 italic">
            Does this feel like the space you've been looking for?
          </p>
        </section>

        {/* Unified Call to Action */}
        <section className="px-4 py-16 relative z-10">
          <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-10 text-center shadow-2xl border border-emerald-100/50">
            <Mail className="mx-auto text-emerald-600 w-10 h-10 mb-4" />
            <h2 className="text-2xl md:text-3xl font-medium text-stone-800 mb-4">
              Reach Out to Learn More
            </h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Email us with any questions or to find out if Healing Circles are right for you.
            </p>
            <Button
              onClick={handleCopyEmail}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-xl transition-all duration-300"
            >
              {copied ? "Email Copied ✅" : "Copy Our Email"}
            </Button>
          </div>
        </section>
      </div>

      <footer className="text-center text-sm text-muted-foreground mt-16 pb-8 space-y-2">
        <div>© 2025 Healing Together. Creating spaces for compassionate healing and connection.</div>
        <div>
          Questions? Email us at{" "}
          <a
            href="mailto:email.healingtogether@gmail.com"
            className="text-emerald-700 underline font-medium"
          >
            email.healingtogether@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}

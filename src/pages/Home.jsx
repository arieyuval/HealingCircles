import React, { useState } from "react";
import { CalendarHeart, HeartCrack, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("healingtogethercircles@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-yellow-50 px-6 sm:px-14 text-base scale-[1.10]">
      {/* Top Banner: First Meeting Announcement */}
      <div className="max-w-4xl mx-auto mt-28 mb-12 px-6">
        <div className="bg-green-100/70 border border-green-300 rounded-xl shadow-md px-6 py-5 text-center">
          <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-2">
            📅 First Healing Circle — Thursday, July 4 @ 11:15am PT (on Zoom)
          </h2>
          <p className="text-sm md:text-base text-green-900 mb-4">
            This is not a debate, but a space to share, to witness, and to be heard.
            Every voice matters — and silence is welcome too. Together we’ll listen with compassion,
            speak with honesty, and hold each other with care.
          </p>
          <Button
            onClick={() => window.open("https://bit.ly/Healing-July4", "_blank")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium shadow"
          >
            Register Now
          </Button>
        </div>
      </div>


      {/* Section 1: Logo and Taglines */}
      <div className="flex flex-col items-center justify-center pt-5 pb-14 text-center">
        <img
          src="/logo.PNG"
          alt="Healing Together Logo"
          className="w-32 h-32 rounded-full shadow-xl mb-6"
        />
        <h1 className="text-4xl font-bold text-green-700">Healing Together</h1>
        <h2 className="text-2xl mt-2">Trauma-Informed Support Groups</h2>
        <p className="text-lg mt-1 text-gray-700">
          for Those Impacted by the Crisis in Israel–Palestine
        </p>
        <p className="mt-4 max-w-2xl text-gray-600">
          Heart-centered circles to build emotional resilience, foster connection,
          and promote shared understanding.
        </p>
        <div className="mt-2 text-pink-500 text-2xl">♡</div>
      </div>

      {/* Section 2: Key Features + Description */}
      <div className="flex flex-col items-center justify-center gap-6 px-4 py-12">
        <Card className="max-w-4xl w-full">
          <CardContent className="p-8 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Users className="mx-auto text-green-500 w-8 h-8" />
              <h3 className="mt-2 font-semibold">Facilitated Groups</h3>
              <p className="text-sm text-muted-foreground">
                Guided circles led by therapists and mediators in a structured, supportive environment
              </p>
            </div>
            <div className="text-center">
              <ShieldCheck className="mx-auto text-pink-500 w-8 h-8" />
              <h3 className="mt-2 font-semibold">Emotionally Safe</h3>
              <p className="text-sm text-muted-foreground">
                Non-judgmental space designed with trauma-informed principles at its core
              </p>
            </div>
            <div className="text-center">
              <HeartCrack className="mx-auto text-yellow-500 w-8 h-8" />
              <h3 className="mt-2 font-semibold">Open to All</h3>
              <p className="text-sm text-muted-foreground">
                Welcome anyone affected by the crisis, directly or indirectly
              </p>
            </div>
          </CardContent>
        </Card>

        <p className="max-w-3xl text-center text-muted-foreground">
          Healing Together runs facilitated support groups where participants are
          invited to process <span className="text-green-600 font-medium">grief</span>,{" "}
          <span className="text-green-600 font-medium">anxiety</span>, and{" "}
          <span className="text-green-600 font-medium">identity</span>{" "}
          in a compassionate, non-judgmental space. This will not be a debate but a chance to share, to witness and be heard, a space where everyone's voice matters and silence is welcome too. Together we will listen with compassion, speak with honesty, and hold each other with care. We are trained therapists, mediators, and healers offering heart-centered approaches for navigating sensitive discussions.
        </p>
      </div>

      {/* Section 3: CTA + Note + Footer */}
      <div className="px-4 pt-16 pb-40 flex flex-col items-center">
        <Card className="max-w-xl w-full">
          <CardContent className="p-8 text-center">
            <CalendarHeart className="mx-auto text-green-600 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold">Ready to Begin Your Healing Journey?</h3>
            <p className="text-muted-foreground mt-2">
              Click below to copy our email address and reach out to us directly.
            </p>
            <Button
              onClick={handleCopyEmail}
              className="mt-4 px-6 py-2 text-base font-semibold rounded-full bg-green-600 hover:bg-green-700 text-white shadow-md"
            >
              {copied ? "Email Copied ✅" : "Email Us"}
            </Button>
          </CardContent>
        </Card>

        <div className="mt-32 w-full max-w-4xl">
          <Card>
            <CardContent className="p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">A Note to Our Readers</h4>
              <p className="text-sm text-muted-foreground">
                We are aware of the reality that certain words and the absence of words may impact a person’s
                sense of safety and willingness to participate in our healing circles. We aspire for our healing
                circles to help generate a sense of expanded and shared reality and connection that activates our
                capacity to live in collective wisdom and cultivate a reality grounded in compassion. We value and
                seek to hold and facilitate the expansion of, a plurality of voices and narratives.
              </p>
            </CardContent>
          </Card>
        </div>

        <footer className="text-center text-sm text-muted-foreground mt-16 pb-8 space-y-2">
          <div>© 2025 Healing Together. Creating spaces for compassionate healing and connection.</div>
          <div>
            Questions? Email us at{" "}
            <a
              href="mailto:healingtogethercircles@gmail.com"
              className="text-emerald-700 underline font-medium"
            >
              healingtogethercircles@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

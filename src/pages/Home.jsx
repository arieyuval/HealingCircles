import React, { useState } from "react";
import { CalendarHeart, HeartCrack, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  // Emails
  const DEFAULT_EMAIL = "healingtogethercircles@gmail.com"; // existing general email
  const EVENT_EMAIL = "healingtogethercircle@gmail.com"; // announcement-specific email

  // UI state
  const [copied, setCopied] = useState(false);
  const [eventCopied, setEventCopied] = useState(false);

  // Clipboard helper with fallback for older browsers and SSR safety
  const copyToClipboard = async (text) => {
    try {
      if (typeof navigator !== "undefined" && navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return;
      }
    } catch (e) {
      // fall through to fallback
    }
    // Fallback
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  const handleCopyEmail = () => {
    copyToClipboard(DEFAULT_EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleCopyEventEmail = () => {
    copyToClipboard(EVENT_EMAIL).then(() => {
      setEventCopied(true);
      setTimeout(() => setEventCopied(false), 2000);
    });
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-yellow-50 px-6 sm:px-14 text-base pt-4">
      {/* Top announcement banner (non-dismissible, non-overlapping) */}
      <div className="mx-auto mt-6 mb-4 max-w-4xl border border-emerald-700 bg-emerald-600 text-white p-4 rounded-xl shadow-lg">
        <div className="text-sm sm:text-base text-center">
          <strong>Upcoming Circle:</strong> Join us virtually in our upcoming Healing Circles: <span className="font-semibold">September 14th at 8PM EST / 5PM PST and September 28th at 12PM EST / 9AM PST</span>. To learn more and get the Zoom link please reach out to {" "}
          <a href={`mailto:${EVENT_EMAIL}`} className="underline">{EVENT_EMAIL}</a>.
        </div>
        <div className="mt-3 flex justify-center">
          <Button
            onClick={handleCopyEventEmail}
            className="rounded-full px-5 py-2 bg-white/15 hover:bg-white/25 text-white font-medium backdrop-blur-sm border border-white/30 shadow"
            aria-live="polite"
          >
            {eventCopied ? "Email Copied ✅" : "✉️ Copy email"}
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
          in a compassionate, non-judgmental space. This will not be a debate but a chance to share, to witness and be heard, a space where everyone's voice matters and silence is welcome too. Together we will listen with compassion, speak with honesty, and hold each other with care. We are trained therapists, mediators, and healers offering heart-centered approaches for navigating sensitive discussions.
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
              aria-live="polite"
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
              href={`mailto:${DEFAULT_EMAIL}`}
              className="text-emerald-700 underline font-medium"
            >
              {DEFAULT_EMAIL}
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}



import React, { useState } from "react";
import { MessageSquareHeart, Heart, MessageSquare, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WhatWeOffer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("email.healingtogether@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-yellow-50 text-gray-800">
      <div className="transform scale-[0.90] origin-top mx-auto max-w-screen-2xl">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10 pt-24 px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-stone-800 leading-tight mb-4">
            Our Healing Circles
          </h1>
          <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
            A guided space for connection, reflection, and resilience.
          </p>
        </div>

        {/* Overview */}
        <div className="flex justify-center px-4 mt-16">
          <Card className="bg-white/80 shadow-xl rounded-2xl w-full max-w-6xl">
            <CardContent className="pt-24 pb-24 px-20 text-xl leading-relaxed text-center">
              <p className="max-w-4xl mx-auto">
                Healing Together Circles offer a series of guided sessions for individuals affected by the ongoing
                crisis in Israel–Palestine. These meetings help participants feel heard, engage with diverse perspectives,
                and reflect on their own identity and community. Through emotionally enriching dialogue, we foster
                resilience, mutual support, and a sense of belonging.
              </p>
              <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-10">
                <div className="flex flex-col items-center">
                  <div className="bg-green-100 p-4 rounded-xl">
                    <Users className="text-green-500 w-10 h-10" />
                  </div>
                  <span className="font-semibold mt-3">Feel Heard</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <MessageSquare className="text-blue-500 w-10 h-10" />
                  </div>
                  <span className="font-semibold mt-3">Engage Perspectives</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-pink-100 p-4 rounded-xl">
                    <Heart className="text-pink-500 w-10 h-10" />
                  </div>
                  <span className="font-semibold mt-3">Foster Resilience</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-yellow-100 p-4 rounded-xl">
                    <Shield className="text-yellow-500 w-10 h-10" />
                  </div>
                  <span className="font-semibold mt-3">Cultivate Belonging</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trauma-Informed Section */}
        <div className="text-center px-4 mt-28">
          <h2 className="text-4xl font-semibold">Our Trauma-Informed Approach</h2>
          <p className="text-lg text-gray-600 mt-3">
            Building emotionally-centered communities.
          </p>
        </div>

        <div className="flex justify-center px-4 mt-16">
          <Card className="bg-white/90 shadow-xl rounded-2xl w-full max-w-6xl">
            <CardContent className="pt-28 pb-20 px-20 text-xl leading-relaxed">
              <p>
                Using a trauma-informed approach, with the aim of building emotionally centered communities, is a productive
                way of transforming these fractured spaces into places where people with differing views can come to
                appreciate the shared experiences of grief and loss before attempting to deal with competing narratives and
                political stances.
              </p>
              <p className="mt-6">
                Centering on shared emotions—such as <span className="bg-yellow-100 px-1 rounded">grief, anger, frustration, anxiety, and hope</span>—can be an
                essential first step in opening up new spaces for listening, empathy, and dialogue. Once these “emotionally
                centered communities” have been created, it is much more likely that we can work together through our often
                conflicting narratives.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="text-center px-4 mt-32">
          <h2 className="text-3xl font-semibold">How It Works</h2>
        </div>

        <div className="flex flex-col items-center gap-10 px-4 mt-16 w-full max-w-6xl mx-auto">
          <Card className="bg-green-50 shadow rounded-xl w-full">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">Weekly Online Pilot Group</h3>
              <p className="mt-2 text-gray-700">
                The program will begin as a series of four weekly online meetings, allowing for accessibility and connection across
                different locations. This provides a safe and consistent virtual space to build community and trust.
              </p>
            </CardContent>
          </Card>

          <div className="text-green-500 text-3xl">↓</div>

          <Card className="bg-pink-50 shadow rounded-xl w-full">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">Future In-Person Groups</h3>
              <p className="mt-2 text-gray-700">
                Over time, our vision is to expand our offerings. Trained facilitators will begin to lead in-person groups
                across the U.S. and Canada, fostering deeper local community connections.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Replaced CTA Section */}
        <div className="flex justify-center px-4 mt-40 w-full max-w-6xl mx-auto">
          <Card className="bg-green-50 shadow-lg rounded-xl w-full text-center">
            <CardContent className="p-8">
              <MessageSquareHeart className="mx-auto text-green-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold">Want to Join a Circle?</h3>
              <p className="mt-2 text-muted-foreground">
                Reach out by email and we’ll get back to you with group details.
              </p>
              <Button
                onClick={handleCopyEmail}
                className="mt-4 px-6 py-2 text-base font-semibold rounded-full bg-green-600 hover:bg-green-700 text-white shadow-md"
              >
                {copied ? "Email Copied ✅" : "Copy Our Email"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
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
    </div>
  );
}

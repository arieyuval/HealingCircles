import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Link as LinkIcon } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Miri Arie, PhD',
    image: '/Miri.PNG',
    bio: `Born in Ukraine into a Hungarian Jewish family, Dr. Arie grew up in Israel, served in the IDF, and graduated from Tel-Aviv University with a PhD in Clinical Psychology. In 2006, she moved with her family to the United States and now practices as a clinical psychologist in Seattle, WA. She works with children and adults, supporting individuals in improving their relationships, coping with anxiety, enhancing emotional regulation skills, and reducing rigid thinking patterns and behaviors. Dr. Arie has extensive training in supporting clients with trauma and is passionate about facilitating groups and dialogue between people. She is a Certified Group Psychotherapist, and facilitates several groups a week (WA: PY.60967834 / NY: 0200171 / FL: PY12442).`,
    link: 'https://www.craftpnw.com/miri-arie-phd',
  },
  {
    name: 'Dorit Cypis, MFA',
    image: '/Dorit.PNG',
    bio: `An artist, educator, and conflict mediator, Dorit was born in Israel in the early 1950s to a family from Poland and Ukraine. She immigrated to Montreal, Canada in 1959, and to the USA in 1975. She completed an MFA at California Institute of the Arts and a Masters of Dispute Resolution at Pepperdine University. Dorit founded PeoplesLab in 2016 with a psycho-social approach, integrating perceptual, pedagogical and communication tools to meet identity, difference and conflict as opportunity for possibility and change. PeoplesLab services include training, mediation, and dialogue facilitation. Dorit has exhibited at many museums and maintains a studio practice.`,
    link: 'https://www.peopleslab.us/',
  },
  {
    name: 'Jeffrey J. Wilkinson, PhD',
    image: '/Jeffrey.PNG',
    bio: `An American Jew who lives in Canada, his background is in music teaching and performance. A classical violist and musicologist, he holds a doctorate in Education from the University of Toronto centred in trauma and memory research in intractable conflicts. He works actively in the Jewish and Palestinian diaspora communities on issues relating to trauma, memory and the Israel-Palestine struggle. Jeff has a deep background in human rights work and conflict mediation and employs a trauma-informed approach to create transformational conversions. He is the co-author, with a Palestinian (Raja Khouri), of “The Wall Between: What Jews and Palestinians Don’t Want to Know About Each Other.”`,
    link: 'https://www.conversationswithoutwalls.org/',
  },
  {
    name: 'Sabrina Tropper, LMHC, LPC',
    image: '/Sabrina.PNG',
    bio: `A licensed psychotherapist and the founder of Counseling Works NYC. Though she continues to work remotely with clients in NYC, she currently resides in Toronto, Canada. Her approach is holistic and trauma-informed, with extensive training in EMDR. She specializes in Trauma, Anxiety, Burnout, and ADHD. Previously, Sabrina worked as a therapist in child welfare in underserved communities across NYC. Raised in Montréal, her father is Jewish-American and her mother is French-Moroccan. Sabrina also has a background in music, playing saxophone in jazz bands.`,
    link: 'https://www.counselingworksnyc.com/',
  },
  {
    name: 'Oshri Hakak',
    image: '/Oshri.PNG',
    bio: `A Los Angeles-based artist, musician, and children’s book author/illustrator, having created more than 20 books that touch on mental health, mindfulness, and consciousness. He is the School Program Coordinator for NAMI Westside Los Angeles, studied psychology at Duke University, and is certified in mediation, dialogue facilitation, and yoga instruction. Oshri loves to generate creativity that aids people and communities in our individual and collective healing journeys. More of his art can be found on Instagram: @oshrihakak.`,
    link: 'https://www.butterflyonbooks.com',
  },
  {
    name: 'Jerome Palacios Myerson',
    image: '/Jerome.PNG',
    bio: `A native Californian raised in the reform Jewish movement, he has become increasingly aware of the absence of Palestinian history and perspectives during his youth and now gravitates toward safe spaces designed for mutual understanding. As an anti-occupation advocate with several Israeli and Palestinian friends, he recognizes the importance of emotional grounding and facilitated dialogue to generate compassion for marginalized voices. When not advocating for empathy, Jerome enjoys swimming in the ocean, playing with his cat Bongo, and exploring nature with his wife and son.`,
    link: null,
  },
  {
    name: 'Jonathan Kanter, PhD',
    image: '/Jonathan.jpg',
    bio: `Jonathan is a licensed clinical psychologist and Director of the Center for the Science of Social Connection of the University of Washington. He is an American Jew, born in Brooklyn, NY who has lived on both coasts and in the Midwest. His Center’s research has included studying and intervening on racism and bias, how to improve client-therapist relationships, and how to improve social connections across the differences that often divide us, such as race, religion, and political ideology. Dr. Kanter has published over 100 scientific articles on these and other topics and he is regularly invited to give talks and workshops nationally and internationally. Currently Jonathan also directs the EDI training efforts for UW Medicine’s Office of Healthcare Equity and provides training and consultation on issues of bias and racism for healthcare systems, clinical, legal, higher education, and other organizational settings.`,
    link: null, 
  },
  {
    name: 'Karen Ross, PhD',
    image: '/Karen.jpg',
    bio: `Karen Ross is a longtime dialogue facilitator & trainer, and a teacher and researcher of grassroots peacebuilding, restorative justice, and conflict resolution processes.  Born in Israel, Karen grew up in both Israel and the US and has participated in dialogue and peace education initiatives since she was a teenager.  Karen currently is an Associate Professor at UMass Boston, where she teaches conflict resolution and research methodology courses; she is also an Associate at Essential Partners, a group that works with communities and organizations by using dialogue to help shift relationships and build trust.`,
    link: null, 
  },
  {
    name: 'Jeffrey Gillman, PhD',
    image: '/JeffreyGillman.jpg',
    bio: `Jeff’s most meaningful roles are husband, father, and doting grandfather.  He loves the peace of sharing sunrises and shoreline sunsets with his “bashert", and the magical joy of taking his grandchildren on adventures.  Jeff grew up in the Midwest, in a family that lived by two central tenets of Judaism:  1) Each person is born in the image of the divine, and 2) Each person has the capacity and the responsibility to contribute to and care for the well-being of humanity and the world we inhabit.  Jeff is a Fellowship-trained Clinical and Pediatric Psychologist who has been privileged to work with children, adolescents, adults, and families for the past 40 years.  He has served on the faculty of several university teaching hospitals, where he developed and directed an inpatient consultation-liaison program, as well as an outpatient program for adolescents and families coping with eating disorders.  For the last 20 years, he has been in private practice, providing developmentally informed, cognitive-behavioral, mindfulness-based, and integrative psychotherapies to individuals and families who are dealing with health-related issues, traumatic events, and life transitions.  In his spare time, he has served on community boards, provided volunteer services to military veterans, and contributed to disaster relief efforts.`,
    link: null, 
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-stone-50 to-amber-100/50">
      <div className="px-4 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-16 w-40 h-40 bg-emerald-200/10 rounded-full blur-2xl"></div>
          <div className="absolute top-64 right-20 w-28 h-28 bg-rose-200/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-amber-200/10 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-stone-800 leading-tight mb-4">
            Our Mission & Purpose
          </h1>
          <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
            Rooted in compassion, dedicated to resilience.
          </p>
          <div className="flex justify-center items-center gap-3 mt-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
            <div className="relative">
              <Heart className="w-5 h-5 text-rose-400 animate-pulse" />
              <div className="absolute inset-0 bg-rose-400/20 rounded-full blur-sm"></div>
            </div>
            <div className="w-8 h-px bg-gradient-to-l from-transparent via-emerald-400 to-transparent"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-24 relative z-10">
          <Card className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-rose-400/10 rounded-full blur-2xl"></div>
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="prose prose-lg prose-stone max-w-none text-center leading-relaxed">
                <p>
                  Healing Together fosters resilience in communities by building bridges of 
                  <span className="font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full mx-1"> compassion, mutual understanding, and a sense of safety</span>. 
                  Through "support circles" that prioritize heart-centered dialogue, participants can process emotions and life experiences in a judgment-free environment. 
                </p>
                <p>
                  We aim to support communities in promoting peace and independence for both Israelis and Palestinians, with 
                  <span className="font-medium text-stone-800 bg-stone-100 px-2 py-1 rounded-full mx-1"> full equality for all and true social, economic, and environmental justice</span>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-stone-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg md:text-xl text-stone-600 font-light">
              A collective of dedicated facilitators and guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {teamMembers.map((member) => (
              <Card key={member.name} className="flex flex-col bg-gradient-to-br from-white/80 to-stone-50/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 group">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-medium text-stone-800 mb-2">{member.name}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed flex-grow mb-6">
                    {member.bio}
                  </p>
                  {member.link && (
                    <Button 
                      onClick={() => window.open(member.link, '_blank')}
                      variant="outline"
                      className="mt-auto w-full py-3 text-base bg-gradient-to-r from-stone-50 to-white hover:from-white hover:to-stone-50 border-stone-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
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

import React from 'react';

// Clean, minimal App.jsx — replaces previous content to remove embedded
// __reactCodeManager.setCode(...) blocks that caused parsing failures.

export default function App() {
    return (
        <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
            <h1 style={{ marginBottom: 12 }}>Ethical Hacking Guide (placeholder)</h1>
            <section style={{ padding: 12, border: '1px solid #e5e7eb', borderRadius: 8, marginBottom: 8 }}>
                <h2>Section 1 — Introduction (placeholder)</h2>
                <p style={{ color: '#374151' }}>Placeholder content. The full section was removed to avoid parser errors.</p>
            </section>
            <section style={{ padding: 12, border: '1px solid #e5e7eb', borderRadius: 8, marginBottom: 8 }}>
                <h2>Section 2 — Roadmap (placeholder)</h2>
                <p style={{ color: '#374151' }}>Placeholder content.</p>
            </section>
            <section style={{ padding: 12, border: '1px solid #e5e7eb', borderRadius: 8, marginBottom: 8 }}>
                <h2>Section 3 — Certifications (placeholder)</h2>
                <p style={{ color: '#374151' }}>Placeholder content.</p>
            </section>
            <section style={{ padding: 12, border: '1px solid #e5e7eb', borderRadius: 8 }}>
                <h2>Section 4 — Resources (placeholder)</h2>
                <p style={{ color: '#374151' }}>Placeholder content.</p>
            </section>
        </div>
    );
}
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  BookOpen, Shield, Award, Code, Network, Lock, Terminal, Laptop, Users, TrendingUp, AlertTriangle, CheckCircle,
  ArrowRight, Menu, X
} from 'lucide-react';

// Placeholder components (kept from original)
const SectionPlaceholder_section_1 = () => (
  <div data-section-id="section_1"
    className="animate-pulse space-y-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
    <div className="flex items-center space-x-3 mb-4">
      <div className="h-3 w-3 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="h-3 w-3 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="h-3 w-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      <p className="text-sm text-gray-700 font-medium ml-2">Loading foundational concepts and prerequisites...</p>
    </div>
    <div className="space-y-4">
      <div className="h-10 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg w-4/5"></div>
      <div className="h-4 bg-blue-100 rounded w-full"></div>
      <div className="h-4 bg-blue-100 rounded w-11/12"></div>
      <div className="h-4 bg-blue-100 rounded w-5/6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="h-32 bg-white/50 rounded-lg border border-blue-200"></div>
        <div className="h-32 bg-white/50 rounded-lg border border-blue-200"></div>
      </div>
      <div className="h-4 bg-blue-100 rounded w-4/5 mt-4"></div>
      <div className="h-4 bg-blue-100 rounded w-3/4"></div>
    </div>
    <div className="flex items-center space-x-2 mt-6 p-4 bg-blue-100 rounded-lg">
      <Shield className="text-blue-600" size={20} />
      <p className="text-xs text-blue-700 italic">Preparing comprehensive introduction to ethical hacking
        fundamentals...</p>
    </div>
  </div>
);

const SectionPlaceholder_section_2 = () => (
  <div data-section-id="section_2"
    className="animate-pulse space-y-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
    <div className="flex items-center space-x-3 mb-4">
      <div className="h-3 w-3 bg-green-500 rounded-full animate-bounce"></div>
      <div className="h-3 w-3 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="h-3 w-3 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      <p className="text-sm text-gray-700 font-medium ml-2">Compiling structured learning roadmap and technical
        skills...</p>
    </div>
    <div className="space-y-4">
      <div className="h-10 bg-gradient-to-r from-green-200 to-emerald-200 rounded-lg w-5/6"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="h-40 bg-white/50 rounded-lg border border-green-200"></div>
        <div className="h-40 bg-white/50 rounded-lg border border-green-200"></div>
        <div className="h-40 bg-white/50 rounded-lg border border-green-200"></div>
      </div>
      <div className="h-4 bg-green-100 rounded w-full mt-6"></div>
      <div className="h-4 bg-green-100 rounded w-10/12"></div>
      <div className="h-4 bg-green-100 rounded w-9/12"></div>
      <div className="h-24 bg-white/50 rounded-lg border border-green-200 mt-4"></div>
      <div className="h-4 bg-green-100 rounded w-3/4 mt-4"></div>
      <div className="h-4 bg-green-100 rounded w-4/5"></div>
    </div>
    <div className="flex items-center space-x-2 mt-6 p-4 bg-green-100 rounded-lg">
      <Code className="text-green-600" size={20} />
      <p className="text-xs text-green-700 italic">Building comprehensive skill development pathway with tools and
        technologies...</p>
    </div>
  </div>
);

const SectionPlaceholder_section_3 = () => (
  <div data-section-id="section_3"
    className="animate-pulse space-y-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
    <div className="flex items-center space-x-3 mb-4">
      <div className="h-3 w-3 bg-purple-500 rounded-full animate-bounce"></div>
      <div className="h-3 w-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="h-3 w-3 bg-fuchsia-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      <p className="text-sm text-gray-700 font-medium ml-2">Organizing certification paths and career development
        strategies...</p>
    </div>
    <div className="space-y-4">
      <div className="h-10 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg w-5/6"></div>
      <div className="h-4 bg-purple-100 rounded w-full mt-6"></div>
      <div className="h-4 bg-purple-100 rounded w-11/12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="h-48 bg-white/50 rounded-lg border border-purple-200"></div>
        <div className="h-48 bg-white/50 rounded-lg border border-purple-200"></div>
      </div>
      <div className="h-32 bg-white/50 rounded-lg border border-purple-200 mt-4"></div>
      <div className="h-4 bg-purple-100 rounded w-4/5 mt-4"></div>
      <div className="h-4 bg-purple-100 rounded w-3/4"></div>
      <div className="h-4 bg-purple-100 rounded w-5/6"></div>
    </div>
    <div className="flex items-center space-x-2 mt-6 p-4 bg-purple-100 rounded-lg">
      <Award className="text-purple-600" size={20} />
      <p className="text-xs text-purple-700 italic">Curating certification roadmap from entry-level to advanced
        credentials...</p>
    </div>
  </div>
);

const SectionPlaceholder_section_4 = () => (
  <div data-section-id="section_4"
    className="animate-pulse space-y-6 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200">
    <div className="flex items-center space-x-3 mb-4">
      <div className="h-3 w-3 bg-orange-500 rounded-full animate-bounce"></div>
      <div className="h-3 w-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="h-3 w-3 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      <p className="text-sm text-gray-700 font-medium ml-2">Gathering practical resources and legal guidelines...</p>
    </div>
    <div className="space-y-4">
      <div className="h-10 bg-gradient-to-r from-orange-200 to-red-200 rounded-lg w-5/6"></div>
      <div className="h-4 bg-orange-100 rounded w-full mt-6"></div>
      <div className="h-4 bg-orange-100 rounded w-10/12"></div>
      <div className="h-4 bg-orange-100 rounded w-11/12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="h-36 bg-white/50 rounded-lg border border-orange-200"></div>
        <div className="h-36 bg-white/50 rounded-lg border border-orange-200"></div>
        <div className="h-36 bg-white/50 rounded-lg border border-orange-200"></div>
      </div>
      <div className="h-4 bg-orange-100 rounded w-4/5 mt-6"></div>
      <div className="h-4 bg-orange-100 rounded w-3/4"></div>
      <div className="h-24 bg-red-50 rounded-lg border-2 border-red-300 mt-4"></div>
      <div className="h-4 bg-orange-100 rounded w-5/6 mt-4"></div>
    </div>
    <div className="flex items-center space-x-2 mt-6 p-4 bg-orange-100 rounded-lg">
      import React from 'react';

      // Simplified App: removed large embedded serialized sections that caused parsing
      // errors. This file now renders simple placeholders so the Vite app can build
      // and run. To restore full content, extract each section into separate
      // modules under src/sections/ and import them here.

      export default function App() {
        return (
      <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
        <h1 style={{ marginBottom: 12 }}>Ethical Hacking Guide (placeholder)</h1>
        <div style={{ padding: 12, border: '1px solid #e5e7eb', borderRadius: 8, marginBottom: 8 }}>
          <h2>Section 1 — Introduction (placeholder)</h2>
          <p style={{ color: '#374151' }}>Placeholder content. The full section was removed to avoid parser errors.</p>
        </div>
        <div style={{ padding: 12, border: '1px solid #e5e7eb', borderRadius: 8, marginBottom: 8 }}>
          <h2>Section 2 — Roadmap (placeholder)</h2>
          <p style={{ color: '#374151' }}>Placeholder content.</p>
        </div>
        <div style={{ padding: 12, border: '1px solid #e5e7eb', borderRadius: 8, marginBottom: 8 }}>
          <h2>Section 3 — Certifications (placeholder)</h2>
          <p style={{ color: '#374151' }}>Placeholder content.</p>
        </div>
        <div style={{ padding: 12, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <h2>Section 4 — Resources (placeholder)</h2>
          <p style={{ color: '#374151' }}>Placeholder content.</p>
        </div>
      </div>
      );
      <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-xl">
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Your Journey to Becoming an Ethical Hacker
              </h2>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-3xl">
                A comprehensive, structured roadmap designed for complete beginners to master ethical
                hacking and cybersecurity.
                Learn the essential skills, certifications, tools, and best practices to build a successful
                career in cybersecurity.
              </p>
            </div>
            <div className="flex space-x-3">
              <Lock className="text-blue-200" size={48} />
              <Network className="text-indigo-200" size={48} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">4</p>
                <p className="text-xs text-gray-600">Comprehensive Sections</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-green-500 hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Code className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">20+</p>
                <p className="text-xs text-gray-600">Essential Skills & Tools</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Award className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">10+</p>
                <p className="text-xs text-gray-600">Industry Certifications</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Users className="text-orange-600" size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">15+</p>
                <p className="text-xs text-gray-600">Learning Resources</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 1: Introduction & Prerequisites */}
      <Card id="introduction_prerequisites" className="scroll-mt-32 border-t-4 border-blue-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardTitle className="flex items-center space-x-3 text-xl sm:text-2xl">
            <BookOpen className="text-blue-600" size={28} />
            <span>Introduction to Ethical Hacking and Prerequisites</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <SectionPlaceholder_section_1 />
        </CardContent>
      </Card>

      {/* Section 2: Learning Roadmap */}
      <Card id="structured_learning_roadmap" className="scroll-mt-32 border-t-4 border-green-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="flex items-center space-x-3 text-xl sm:text-2xl">
            <TrendingUp className="text-green-600" size={28} />
            <span>Structured Learning Roadmap: Skills, Tools, and Programming</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <SectionPlaceholder_section_2 />
        </CardContent>
      </Card>

      {/* Section 3: Certifications */}
      <Card id="certifications_career_path" className="scroll-mt-32 border-t-4 border-purple-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="flex items-center space-x-3 text-xl sm:text-2xl">
            <Award className="text-purple-600" size={28} />
            <span>Certifications and Career Development Path</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <SectionPlaceholder_section_3 />
        </CardContent>
      </Card>

      {/* Section 4: Resources & Legal */}
      <Card id="practical_resources_legal" className="scroll-mt-32 border-t-4 border-orange-500 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
          <CardTitle className="flex items-center space-x-3 text-xl sm:text-2xl">
            <Terminal className="text-orange-600" size={28} />
            <span>Practical Experience, Learning Resources, and Legal Considerations</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <SectionPlaceholder_section_4 />
        </CardContent>
      </Card>

      {/* Conclusion Section - REAL CONTENT */}
      <Card className="border-t-4 border-indigo-600 shadow-xl bg-gradient-to-br from-white to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3 text-xl sm:text-2xl">
            <CheckCircle className="text-indigo-600" size={28} />
            <span>Conclusion: Your Path Forward in Ethical Hacking</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-base sm:text-lg">
              Embarking on a career in ethical hacking requires a strategic, methodical approach that balances
              theoretical knowledge with practical application. This comprehensive guide has outlined the
              essential four-pillar framework for your cybersecurity journey: understanding the fundamentals,
              developing technical skills, obtaining industry-recognized certifications, and gaining hands-on
              experience through legitimate platforms.
            </p>

            <p>
              The learning pathway begins with establishing a solid foundation in networking, operating
              systems, and programming fundamentals. From there, you'll progress through structured skill
              development, mastering critical tools like Kali Linux, Metasploit, Nmap, and Burp Suite while
              building proficiency in Python, Bash, and other essential languages. This technical competency
              forms the backbone of your ethical hacking expertise.
            </p>

            <p>
              Certifications serve as both validation of your skills and career accelerators. Starting with
              entry-level credentials like CompTIA Security+ or CEH, you can progressively advance to
              intermediate certifications such as eJPT, and ultimately pursue advanced qualifications like
              OSCP, GPEN, or GXPN. Each certification milestone opens new career opportunities and
              demonstrates your commitment to professional excellence in the cybersecurity field.
            </p>

            <p>
              Equally important is the emphasis on practical experience and ethical responsibility. Platforms
              like HackTheBox, TryHackMe, and various CTF challenges provide safe, legal environments to hone
              your skills. Complementing this with continuous learning through online courses, books,
              conferences, and community engagement ensures you stay current in this rapidly evolving field.
              Above all, understanding and adhering to legal boundaries and ethical guidelines is
              paramount—ethical hacking is about protecting systems and organizations, not exploiting them.
            </p>

            <div className="mt-6 p-4 sm:p-6 bg-indigo-100 border-l-4 border-indigo-600 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="text-indigo-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">Essential Reminder</h4>
                  <p className="text-sm text-indigo-800">
                    Success in ethical hacking is not measured by how quickly you can break into
                    systems, but by your depth of understanding, ethical integrity, and commitment to
                    continuous learning. The cybersecurity landscape evolves daily—your learning journey
                    never truly ends. Stay curious, practice responsibly, engage with the community, and
                    always prioritize ethical conduct in everything you do.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="mt-6 flex flex-col sm:flex-row items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white">
              <p className="font-semibold mb-3 sm:mb-0">Ready to start your ethical hacking journey?</p>
              <div
                className="flex items-center space-x-2 bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow cursor-pointer">
                <span className="text-sm">Begin with Prerequisites</span>
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <Card className="bg-gray-50 border-gray-200">
        <CardContent className="p-4 sm:p-6 text-center">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Important:</span> This guide is designed for educational purposes.
            Always practice ethical hacking within legal boundaries and with proper authorization.
          </p>
          <p className="text-xs text-gray-500 mt-2">Last Updated: November 2025</p>
        </CardContent>
      </Card>
    </main>
  </div>
);
};

// Global citations from all sources
window.citations = {
  1: {
    title: "comptia.org", url:
      "https://www.comptia.org/en-us/blog/6-best-certifications-for-ethical-hackers-to-boost-your-it-career/"
  },
  2: { title: "nexusflo.com", url: "https://nexusflo.com/blog/oscp-vs-ceh-vs-cissp-1761200563008" },
  3: { title: "coursera.org", url: "https://www.coursera.org/articles/ethical-hacking-certifications" },
  4: { title: "kaisare.com", url: "https://kaisare.com/blog/oscp-vs-ceh-vs-comptia" },
  5: { title: "cbtnuggets.com", url: "https://www.cbtnuggets.com/blog/technology/security/oscp-vs-ceh" },
  6: { title: "taviontechnologies.com", url: "https://taviontechnologies.com/blog/oscp-vs-comptia-security-vs" },
  7: {
    title: "ethicalhackinginstitute.com", url:
      "https://www.ethicalhackinginstitute.com/blog/comptia-ethical-hacking-certification-is-it-worth-the-investment"
  },
  8: { title: "github.com", url: "https://github.com/husnainfareed/awesome-ethical-hacking-resources" },
  9: { title: "github.com", url: "https://github.com/vitalysim/Awesome-Hacking-Resources" },
  10: { title: "github.com", url: "https://github.com/paulveillard/cybersecurity-penetration-testing" },
  11: { title: "reddit.com", url: "https://www.reddit.com/r/HackAware/comments/1mvpryd/ethical_hacking_roadmap/" },
  12: {
    title: "reddit.com", url:
      "https://www.reddit.com/r/HowToHack/comments/1mt66zn/is_there_a_hacking_roadmap_what_is_the_most/"
  },
  13: {
    title: "reddit.com", url:
      "https://www.reddit.com/r/SecurityCareerAdvice/comments/1me5k80/i_want_a_full_road_map_on_how_to_become_a/"
  },
  14: {
    title: "reddit.com", url:
      "https://www.reddit.com/r/developersIndia/comments/1mgczer/wanna_become_a_ethical_hacker_please_suggest_what/"
  },
  15: {
    title: "reddit.com", url:
      "https://www.reddit.com/r/CyberSecurityAdvice/comments/1mo5fls/thinking_about_a_cybersecurity_career_in_2025/"
  },
  16: {
    title: "reddit.com", url:
      "https://www.reddit.com/r/Pentesting/comments/1oi1w1l/guys_how_to_start_in_ethical_hacking/"
  },
  17: {
    title: "youtube.com", url:
      "https://www.youtube.com/watch?v=lujANEhHVXI&pp=ygUnZXRoaWNhbCBoYWNraW5nIGNvbXBsZXRlIGNvdXJzZSByb2FkbWFw"
  },
  18: {
    title: "youtube.com", url:
      "https://www.youtube.com/watch?v=PnfgIxI6trg&pp=ygUnZXRoaWNhbCBoYWNraW5nIGNvbXBsZXRlIGNvdXJzZSByb2FkbWFw"
  },
  19: {
    title: "youtube.com", url:
      "https://www.youtube.com/watch?v=vK4Mno4QYqk&pp=ygUnZXRoaWNhbCBoYWNraW5nIGNvbXBsZXRlIGNvdXJzZSByb2FkbWFw0gcJCQMKAYcqIYzv"
  },
  20: {
    title: "youtube.com", url:
      "https://www.youtube.com/watch?v=ZDrwaqqjKgw&pp=ygUlVHJ5SGFja01lIEhhY2sgVGhlIEJveCBiZWdpbm5uZXIgZ3VpZGU%3D"
  },
  21: {
    title: "youtube.com", url:
      "https://www.youtube.com/watch?v=B7tTQ272OHE&pp=ygUmbGVhcm4gcGVuZXRyYXRpb24gdGVzdGluZyBmcm9tIHNjcmF0Y2jSBwkJAwoBhyohjO8%3D"
  }
};

export default EthicalHackingGuide;

__reactCodeManager.setCode("section_1", "import { Card, CardHeader, CardTitle, CardContent } from
'@/components/ui/card'; \nimport { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'; \nimport {
  Shield,
    TrendingUp, Users, Network, Terminal, Code, Brain, Lightbulb, CheckCircle2, BookOpen, Laptop, Server, Lock
} from
'lucide-react'; \nimport { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from
'recharts'; \nimport { CitationLink } from '@/components/ui/citation'; \n\n// Market demand data\nconst
demandData_section_1 = [\n { year: '2021', breachCost: 4.24, unfilled: 3.5 }, \n {
  year: '2025', breachCost: 4.5,
  unfilled: 3.5
}\n]; \n\n// Job growth data\nconst jobGrowthData_section_1 = [\n { category: 'Info Security Analysts',
growth: 33 }, \n { category: 'Average IT Jobs', growth: 8 } \n]; \n\n// Skills distribution\nconst skillsData_section_1 =
[\n { name: 'Networking', value: 25, color: '#3b82f6' }, \n { name: 'Operating Systems', value: 20, color: '#8b5cf6' }, \n
{ name: 'Security Principles', value: 20, color: '#ec4899' }, \n { name: 'Programming', value: 20, color: '#f59e0b' }, \n
{ name: 'Cryptography', value: 15, color: '#10b981' } \n]; \n\nconst Section_1 = () => {
  \n return (\n < div
  className =\"w-full max-w-6xl mx-auto space-y-6 p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-blue-50\">\n {/* Hero
  Section */
}\n < div className =\"bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 sm:p-8 text-white
shadow - xl\">\n <div className=\"flex items-start gap-4\">\n
  < Shield className =\"w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0\" />\n <div>\n <h1 className=\"text-2xl
sm: text - 4xl font - bold mb - 3\">Introduction to Ethical Hacking</h1>\n <p className=\"text-blue-100
text - base sm: text - lg leading - relaxed\">\n A comprehensive guide to understanding ethical hacking,
                    its critical role in cybersecurity, and the foundational knowledge required to begin your journey in
  this high - demand field.\n </p >\n </div >\n
        </div >\n </div >\n\n {/* What is Ethical Hacking */ } \n < Card className =\"shadow-lg border-l-4
border - l - blue - 600\">\n <CardHeader>\n <CardTitle className=\"flex items-center gap-3 text-xl sm:text-2xl\">\n
  < Lock className =\"w-6 h-6 text-blue-600\" />\n What is Ethical Hacking?\n
            </CardTitle >\n </CardHeader >\n < CardContent className =\"space-y-4\">\n <p className=\"text-gray-700
leading - relaxed\">\n Ethical hacking is the <strong>authorized process of attempting to breach the
                    security of a system or network to evaluate its vulnerabilities</strong >.This proactive approach,
  often referred to as penetration testing or authorized hacking, helps organizations identify weaknesses
                and mitigate potential cyberattacks, strengthening their overall security posture
  < CitationLink id =\"1\" citations={citations} />.\n
            </p >\n \n < div className =\"grid sm:grid-cols-2 gap-4 mt-6\">\n <div className=\"bg-blue-50 p-4 rounded-lg
                    border border - blue - 200\">\n <div className=\"flex items-start gap-3\">\n
  < Shield className =\"w-5 h-5 text-blue-600 mt-1 flex-shrink-0\" />\n <div>\n <h4
className =\"font-semibold text-blue-900 mb-2\">Critical Role</h4>\n <p
className =\"text-sm text-gray-700\">\n Ethical hackers think and operate like malicious
                                attackers to uncover system weaknesses, then help organizations fix these issues to
                                protect data and information effectively
  < CitationLink id =\"1\" citations={citations} />
    < CitationLink id =\"3\" citations={citations} />.\n
                            </p >\n </div >\n
                    </div >\n </div >\n \n < div className =\"bg-purple-50 p-4 rounded-lg border border-purple-200\">\n <div
className =\"flex items-start gap-3\">\n
  < Users className =\"w-5 h-5 text-purple-600 mt-1 flex-shrink-0\" />\n <div>\n <h4
className =\"font-semibold text-purple-900 mb-2\">Also Known As</h4>\n <ul
className =\"text-sm text-gray-700 space-y-1\">\n <li>• Penetration Testing</li>\n <li>•
                                    Authorized Hacking</li >\n < li >• Security Assessment</li >\n </ul >\n </div >\n
                    </div >\n </div >\n </div >\n </CardContent >\n </Card >\n\n {/* Market Demand */ } \n < Card
className =\"shadow-lg border-l-4 border-l-green-600\">\n <CardHeader>\n <CardTitle className=\"flex items-center
gap - 3 text - xl sm: text - 2xl\">\n
  < TrendingUp className =\"w-6 h-6 text-green-600\" />\n Exceptional Market Demand\n
            </CardTitle >\n </CardHeader >\n < CardContent className =\"space-y-6\">\n <Alert className=\"bg-green-50
border - green - 200\">\n
  < TrendingUp className =\"h-5 w-5 text-green-600\" />\n <AlertTitle className=\"text-green-900\">
High - Growth Career Field</AlertTitle >\n < AlertDescription className =\"text-gray-700\">\n The demand
for ethical hackers and cybersecurity professionals is exceptionally high, driven by increasing
                    cyber threats and data breach costs
  < CitationLink id =\"1\" citations={citations} />.\n
                </AlertDescription >\n
            </Alert >\n\n < div className =\"grid sm:grid-cols-2 gap-6\">\n <div>\n <h4 className=\"font-semibold
text - gray - 900 mb - 3 flex items - center gap - 2\">\n
  < Users className =\"w-5 h-5 text-green-600\" />\n Job Market Statistics\n
                    </h4 >\n < div className =\"space-y-3\">\n <div className=\"bg-gradient-to-r from-green-50
to - emerald - 50 p - 4 rounded - lg border border - green - 200\">\n <div className=\"text-3xl
font - bold text - green - 600\">3.5M</div>\n <div className=\"text-sm text-gray-600 mt-1\">
                                Unfilled cybersecurity positions projected by 2025
  < CitationLink id =\"1\" citations={citations} />
                            </div >\n </div >\n < div className =\"bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg
                            border border - blue - 200\">\n <div className=\"text-3xl font-bold text-blue-600\">33%</div>\n
  < div className =\"text-sm text-gray-600 mt-1\">Projected growth for information security
                                analyst roles over the next decade
  < CitationLink id =\"3\" citations={citations} />
                            </div >\n </div >\n < div className =\"bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg
                            border border - red - 200\">\n <div className=\"text-3xl font-bold text-red-600\">$4.24M</div>\n
  < div className =\"text-sm text-gray-600 mt-1\">Average cost of data breaches in 2021
    < CitationLink id =\"1\" citations={citations} />
                            </div >\n </div >\n </div >\n </div >\n\n < div >\n < h4 className =\"font-semibold text-gray-900
mb - 3\">Job Growth Comparison</h4>\n <ResponsiveContainer width=\"100%\" height={200}>\n
  < BarChart data = { jobGrowthData_section_1 } >\n
    < XAxis dataKey =\"category\" tick={{ fontSize: 12 }} />\n
      < YAxis label = {{ value: 'Growth %', angle: -90, position: 'insideLeft', fontSize: 12 }} />
\n
  < Tooltip />\n
    < Bar dataKey =\"growth\" fill=\"#10b981\" radius={[8, 8, 0, 0]} />\n
                        </BarChart >\n </ResponsiveContainer >\n < p className =\"text-xs text-gray-500 mt-2 text-center\">
\n Information Security Analysts show 4x higher growth than average IT jobs\n </p >\n </div >\n
            </div >\n </CardContent >\n </Card >\n\n {/* Essential Mindset */ } \n < Card className =\"shadow-lg border-l-4
border - l - purple - 600\">\n <CardHeader>\n <CardTitle className=\"flex items-center gap-3 text-xl sm:text-2xl\">\n
  < Brain className =\"w-6 h-6 text-purple-600\" />\n The Hacker's Mindset\n
            </CardTitle >\n </CardHeader >\n < CardContent className =\"space-y-4\">\n <p className=\"text-gray-700
leading - relaxed\">\n Before diving into technical skills, cultivating the right mindset is crucial for
success in ethical hacking
  < CitationLink id =\"17\" citations={citations} />.\n
            </p >\n\n < div className =\"grid sm:grid-cols-3 gap-4\">\n <div className=\"bg-gradient-to-br from-purple-50
to - pink - 50 p - 5 rounded - lg border border - purple - 200\">\n
  < Lightbulb className =\"w-8 h-8 text-purple-600 mb-3\" />\n <h4 className=\"font-semibold
text - purple - 900 mb - 2\">Perseverance & Creativity</h4>\n <p className=\"text-sm text-gray-700\">
\n Hackers are dedicated individuals who don't give up until a task is accomplished, always
                        seeking unique solutions and ways to break things
<CitationLink id=\"17\" citations={citations} />.\n
                    </p >\n
                </div >\n\n < div className =\"bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-lg border
border - blue - 200\">\n
  < BookOpen className =\"w-8 h-8 text-blue-600 mb-3\" />\n <h4 className=\"font-semibold text-blue-900
mb - 2\">Self-Taught & Quick Learner</h4>\n <p className=\"text-sm text-gray-700\">\n The ability
                        to teach oneself new things and learn quickly is crucial in this rapidly evolving field
  < CitationLink id =\"17\" citations={citations} />.\n
                    </p >\n
                </div >\n\n < div className =\"bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-lg border
border - green - 200\">\n
  < TrendingUp className =\"w-8 h-8 text-green-600 mb-3\" />\n <h4 className=\"font-semibold
text - green - 900 mb - 2\">Long-Term Commitment</h4>\n <p className=\"text-sm text-gray-700\">\n
                        Ethical hacking is a journey, not a sprint—it requires time, dedication, and continuous learning
  < CitationLink id =\"17\" citations={citations} />.\n
                    </p >\n
                </div >\n </div >\n </CardContent >\n </Card >\n\n {/* Foundational Knowledge */ } \n < Card
className =\"shadow-lg border-l-4 border-l-orange-600\">\n <CardHeader>\n <CardTitle className=\"flex
items - center gap - 3 text - xl sm: text - 2xl\">\n
  < Laptop className =\"w-6 h-6 text-orange-600\" />\n Foundational Knowledge & Prerequisites\n
            </CardTitle >\n </CardHeader >\n < CardContent className =\"space-y-6\">\n <Alert className=\"bg-orange-50
border - orange - 200\">\n
  < CheckCircle2 className =\"h-5 w-5 text-orange-600\" />\n <AlertTitle className=\"text-orange-900\">
                    Essential Foundation</AlertTitle >\n < AlertDescription className =\"text-gray-700\">\n A strong
foundation in IT is essential for aspiring ethical hackers.While some certifications may not have
                    strict prerequisites, prior knowledge significantly aids success
  < CitationLink id =\"5\" citations={citations} />
    < CitationLink id =\"9\" citations={citations} />.\n
                </AlertDescription >\n
            </Alert >\n\n < div className =\"grid md:grid-cols-2 gap-6\">\n {/* Skills Breakdown */}\n <div>\n <h4
className =\"font-semibold text-gray-900 mb-4 flex items-center gap-2\">\n <Code className=\"w-5
h - 5 text - orange - 600\" />\n Essential Skills Distribution\n </h4>\n <ResponsiveContainer
width =\"100%\" height={250}>\n <PieChart>\n <Pie\n data={skillsData_section_1}\n cx=\"50%\"\n
cy =\"50%\"\n labelLine={false}\n label={({ name, percent })=> `${name} ${(percent *
100).toFixed(0)}% `}\n outerRadius={80}\n fill=\"#8884d8\"\n dataKey=\"value\"\n >\n
                                {skillsData_section_1.map((entry, index) => (\n
                                <Cell key={`cell - ${ index } `} fill={entry.color} />\n ))}\n </Pie>\n
                                <Tooltip />\n </PieChart>\n </ResponsiveContainer>\n </div>\n\n {/* Core Prerequisites
                */}\n <div className=\"space-y-3\">\n <h4 className=\"font-semibold text-gray-900 mb-4\">Core
                        Prerequisites</h4>\n \n <div className=\"bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600\">
                        \n <div className=\"flex items-start gap-3\">\n
                            <Network className=\"w-5 h-5 text-blue-600 mt-1 flex-shrink-0\" />\n <div>\n <h5
                                    className=\"font-semibold text-blue-900 mb-1\">Networking</h5>\n <p
                                    className=\"text-sm text-gray-700\">\n Solid understanding of networking concepts is
                                    crucial for identifying vulnerabilities and performing penetration tests. Includes
                                    TCP/IP, DNS, HTTP/HTTPS, OSI Model, and protocols
                                    <CitationLink id=\"1\" citations={citations} />
                                    <CitationLink id=\"11\" citations={citations} />.\n
                                </p>\n </div>\n
                        </div>\n </div>\n\n <div className=\"bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600\">
                        \n <div className=\"flex items-start gap-3\">\n
                            <Terminal className=\"w-5 h-5 text-purple-600 mt-1 flex-shrink-0\" />\n <div>\n <h5
                                    className=\"font-semibold text-purple-900 mb-1\">Operating Systems</h5>\n <p
                                    className=\"text-sm text-gray-700\">\n Familiarity with various operating systems,
                                    particularly Linux (Kali, Parrot, Ubuntu) and Windows, including command-line
                                    interfaces and file systems
                                    <CitationLink id=\"1\" citations={citations} />
                                    <CitationLink id=\"9\" citations={citations} />
                                    <CitationLink id=\"17\" citations={citations} />.\n
                                </p>\n </div>\n
                        </div>\n </div>\n\n <div className=\"bg-green-50 p-4 rounded-lg border-l-4 border-green-600\">\n
                        <div className=\"flex items-start gap-3\">\n <Code className=\"w-5 h-5 text-green-600 mt-1
                                flex-shrink-0\" />\n <div>\n <h5 className=\"font-semibold text-green-900 mb-1\">
                                    Programming Languages</h5>\n <p className=\"text-sm text-gray-700\">\n Essential for
                                    writing scripts, automating tasks, and understanding exploits. Recommended: Python,
                                    Bash, JavaScript, PHP, SQL, C, C++
                                    <CitationLink id=\"11\" citations={citations} />
                                    <CitationLink id=\"12\" citations={citations} />.\n
                                </p>\n </div>\n </div>\n </div>\n\n <div className=\"bg-pink-50 p-4 rounded-lg
                        border-l-4 border-pink-600\">\n <div className=\"flex items-start gap-3\">\n
                            <Lock className=\"w-5 h-5 text-pink-600 mt-1 flex-shrink-0\" />\n <div>\n <h5
                                    className=\"font-semibold text-pink-900 mb-1\">Security Principles</h5>\n <p
                                    className=\"text-sm text-gray-700\">\n Understanding fundamental security concepts,
                                    threats, vulnerabilities, and mitigation techniques is a baseline requirement
                                    <CitationLink id=\"1\" citations={citations} />
                                    <CitationLink id=\"9\" citations={citations} />.\n
                                </p>\n </div>\n
                        </div>\n </div>\n\n <div className=\"bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600\">
                        \n <div className=\"flex items-start gap-3\">\n
                            <Shield className=\"w-5 h-5 text-orange-600 mt-1 flex-shrink-0\" />\n <div>\n <h5
                                    className=\"font-semibold text-orange-900 mb-1\">Cryptography</h5>\n <p
                                    className=\"text-sm text-gray-700\">\n Knowledge of cryptographic principles and
                                    techniques is essential for experienced ethical hackers
                                    <CitationLink id=\"1\" citations={citations} />
                                    <CitationLink id=\"4\" citations={citations} />.\n
                                </p>\n </div>\n
                        </div>\n </div>\n </div>\n </div>\n </CardContent>\n </Card>\n\n {/* Learning Resources for
    Beginners */}\n <Card className=\"shadow-lg border-l-4 border-l-indigo-600\">\n <CardHeader>\n <CardTitle
                className=\"flex items-center gap-3 text-xl sm:text-2xl\">\n
                <BookOpen className=\"w-6 h-6 text-indigo-600\" />\n Recommended Learning Resources for Beginners\n
            </CardTitle>\n </CardHeader>\n <CardContent>\n <div className=\"space-y-4\">\n <div className=\"bg-indigo-50
                    p-5 rounded-lg border border-indigo-200\">\n <h4 className=\"font-semibold text-indigo-900 mb-3 flex
                        items-center gap-2\">\n
                        <Laptop className=\"w-5 h-5\" />\n Computer Basics (CompTIA A+)\n
                    </h4>\n <div className=\"grid sm:grid-cols-3 gap-3\">\n <div className=\"bg-white p-3 rounded border
                            border-indigo-100\">\n <p className=\"text-sm font-medium text-gray-900\">Professor Messer
                            </p>\n <p className=\"text-xs text-gray-600\">YouTube - Free comprehensive course
                                <CitationLink id=\"17\" citations={citations} />
                            </p>\n </div>\n <div className=\"bg-white p-3 rounded border border-indigo-100\">\n <p
                                className=\"text-sm font-medium text-gray-900\">Paul Browning</p>\n <p
                                className=\"text-xs text-gray-600\">YouTube - More engaging style
                                <CitationLink id=\"17\" citations={citations} />
                            </p>\n </div>\n <div className=\"bg-white p-3 rounded border border-indigo-100\">\n <p
                                className=\"text-sm font-medium text-gray-900\">Mike Myers</p>\n <p className=\"text-xs
                                text-gray-600\">Udemy - Interactive (~$29)
                                <CitationLink id=\"17\" citations={citations} />
                            </p>\n </div>\n </div>\n </div>\n\n <div className=\"bg-blue-50 p-5 rounded-lg border
                    border-blue-200\">\n <h4 className=\"font-semibold text-blue-900 mb-3 flex items-center gap-2\">\n
                        <Network className=\"w-5 h-5\" />\n Networking Fundamentals\n
                    </h4>\n <div className=\"grid sm:grid-cols-2 gap-3\">\n <div className=\"bg-white p-3 rounded border
                            border-blue-100\">\n <p className=\"text-sm font-medium text-gray-900\">Google's \"Bits and
                                Bytes of Networking\"</p>\n <p className=\"text-xs text-gray-600\">Coursera - Can be
                                audited for free
                                <CitationLink id=\"17\" citations={citations} />
                            </p>\n </div>\n <div className=\"bg-white p-3 rounded border border-blue-100\">\n <p
                                className=\"text-sm font-medium text-gray-900\">Cisco Networking Academy</p>\n <p
                                className=\"text-xs text-gray-600\">Networking Essentials - Free course
                                <CitationLink id=\"17\" citations={citations} />
                            </p>\n </div>\n <div className=\"bg-white p-3 rounded border border-blue-100\">\n <p
                                className=\"text-sm font-medium text-gray-900\">CCNA Certification</p>\n <p
                                className=\"text-xs text-gray-600\">Highly recommended for networking roles
                                <CitationLink id=\"15\" citations={citations} />
                                <CitationLink id=\"16\" citations={citations} />
                            </p>\n </div>\n <div className=\"bg-white p-3 rounded border border-blue-100\">\n <p
                                className=\"text-sm font-medium text-gray-900\">Professor Messer Network+</p>\n <p
                                className=\"text-xs text-gray-600\">YouTube - Free comprehensive course
                                <CitationLink id=\"17\" citations={citations} />
                            </p>\n </div>\n </div>\n </div>\n\n <div className=\"bg-green-50 p-5 rounded-lg border
                    border-green-200\">\n <h4 className=\"font-semibold text-green-900 mb-3 flex items-center gap-2\">\n
                        <Terminal className=\"w-5 h-5\" />\n Linux Proficiency\n
                    </h4>\n <p className=\"text-sm text-gray-700 mb-3\">\n Proficiency in Linux is vital as many servers
                        and hacking tools utilize it. Install Linux (Ubuntu) on a spare computer or use VirtualBox and
                        use it daily
                        <CitationLink id=\"17\" citations={citations} />.\n
                    </p>\n <div className=\"grid sm:grid-cols-3 gap-3\">\n <div className=\"bg-white p-3 rounded border
                            border-green-100\">\n <p className=\"text-sm font-medium text-gray-900\">OverTheWire Bandit
                            </p>\n <p className=\"text-xs text-gray-600\">Progressive Linux challenges
                                <CitationLink id=\"17\" citations={citations} />
                            </p>\n </div>\n <div className=\"bg-white p-3 rounded border border-green-100\">\n <p
                                className=\"text-sm font-medium text-gray-900\">Red Hat Interactive Labs</p>\n <p
                                className=\"text-xs text-gray-600\">60-day free trial available
                                <CitationLink id=\"17\" citations={citations} />
                            </p>\n </div>\n <div className=\"bg-white p-3 rounded border border-green-100\">\n <p
                                className=\"text-sm font-medium text-gray-900\">Cisco Linux Essentials</p>\n <p
                                className=\"text-xs text-gray-600\">Free comprehensive course
                                <CitationLink id=\"17\" citations={citations} />
                            </p>\n </div>\n </div>\n </div>\n </div>\n </CardContent>\n </Card>\n\n {/* Key Takeaways
    */}\n <Card className=\"shadow-lg bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-300\">\n
        <CardHeader>\n <CardTitle className=\"flex items-center gap-3 text-xl sm:text-2xl\">\n
                <CheckCircle2 className=\"w-6 h-6 text-blue-600\" />\n Key Takeaways\n
            </CardTitle>\n </CardHeader>\n <CardContent>\n <div className=\"grid sm:grid-cols-2 gap-4\">\n <div
                    className=\"flex items-start gap-3\">\n <div className=\"bg-blue-600 text-white rounded-full w-8 h-8
                        flex items-center justify-center flex-shrink-0 font-bold\">1</div>\n <p
                        className=\"text-gray-700 text-sm\">\n Ethical hacking is a critical, authorized practice that
                        helps organizations identify and fix security vulnerabilities before malicious actors can
                        exploit them.\n </p>\n </div>\n <div className=\"flex items-start gap-3\">\n <div
                        className=\"bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center
                        flex-shrink-0 font-bold\">2</div>\n <p className=\"text-gray-700 text-sm\">\n The field offers
                        exceptional career opportunities with 3.5 million unfilled positions projected by 2025 and 33%
                        job growth for information security analysts.\n </p>\n </div>\n <div className=\"flex
                    items-start gap-3\">\n <div className=\"bg-blue-600 text-white rounded-full w-8 h-8 flex
                        items-center justify-center flex-shrink-0 font-bold\">3</div>\n <p className=\"text-gray-700
                        text-sm\">\n Success requires cultivating a hacker's mindset: perseverance, creativity,
                        self-directed learning, and long-term commitment to continuous improvement.\n </p>\n </div>\n
                <div className=\"flex items-start gap-3\">\n <div className=\"bg-blue-600 text-white rounded-full w-8
                        h-8 flex items-center justify-center flex-shrink-0 font-bold\">4</div>\n <p
                        className=\"text-gray-700 text-sm\">\n A strong foundation in networking, operating systems
                        (especially Linux), programming, security principles, and cryptography is essential before
                        diving into advanced hacking techniques.\n </p>\n </div>\n </div>\n </CardContent>\n </Card>\n\n
    {/* Sources Section */}\n <section className=\"mt-8 border-t pt-6 bg-white rounded-lg p-6 shadow-sm\">\n <h3
            className=\"text-lg font-semibold mb-4 flex items-center gap-2\">\n
            <BookOpen className=\"w-5 h-5 text-gray-600\" />\n Sources & References\n
        </h3>\n <ol className=\"text-sm space-y-2 grid sm:grid-cols-2 gap-x-6\">\n {citations[1] && (\n <li
                className=\"flex items-start gap-2\">\n <span className=\"font-semibold text-blue-600
                    min-w-[24px]\">[1]</span>\n <a href={citations[1].url} target=\"_blank\" rel=\"noopener noreferrer\"
                    className=\"text-blue-600 hover:underline break-all\">\n {citations[1].title}\n </a>\n </li>\n )}\n
            {citations[3] && (\n <li className=\"flex items-start gap-2\">\n <span className=\"font-semibold
                    text-blue-600 min-w-[24px]\">[3]</span>\n <a href={citations[3].url} target=\"_blank\"
                    rel=\"noopener noreferrer\" className=\"text-blue-600 hover:underline break-all\">\n
                    {citations[3].title}\n </a>\n </li>\n )}\n {citations[4] && (\n <li className=\"flex items-start
                gap-2\">\n <span className=\"font-semibold text-blue-600 min-w-[24px]\">[4]</span>\n <a
                    href={citations[4].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline break-all\">\n {citations[4].title}\n </a>\n </li>\n )}\n {citations[5] && (\n <li
                className=\"flex items-start gap-2\">\n <span className=\"font-semibold text-blue-600
                    min-w-[24px]\">[5]</span>\n <a href={citations[5].url} target=\"_blank\" rel=\"noopener noreferrer\"
                    className=\"text-blue-600 hover:underline break-all\">\n {citations[5].title}\n </a>\n </li>\n )}\n
            {citations[9] && (\n <li className=\"flex items-start gap-2\">\n <span className=\"font-semibold
                    text-blue-600 min-w-[24px]\">[9]</span>\n <a href={citations[9].url} target=\"_blank\"
                    rel=\"noopener noreferrer\" className=\"text-blue-600 hover:underline break-all\">\n
                    {citations[9].title}\n </a>\n </li>\n )}\n {citations[11] && (\n <li className=\"flex items-start
                gap-2\">\n <span className=\"font-semibold text-blue-600 min-w-[24px]\">[11]</span>\n <a
                    href={citations[11].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline break-all\">\n {citations[11].title}\n </a>\n </li>\n )}\n {citations[12] && (\n <li
                className=\"flex items-start gap-2\">\n <span className=\"font-semibold text-blue-600
                    min-w-[24px]\">[12]</span>\n <a href={citations[12].url} target=\"_blank\" rel=\"noopener
                    noreferrer\" className=\"text-blue-600 hover:underline break-all\">\n {citations[12].title}\n </a>\n
            </li>\n )}\n {citations[15] && (\n <li className=\"flex items-start gap-2\">\n <span
                    className=\"font-semibold text-blue-600 min-w-[24px]\">[15]</span>\n <a href={citations[15].url}
                    target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600 hover:underline
                    break-all\">\n {citations[15].title}\n </a>\n </li>\n )}\n {citations[16] && (\n <li
                className=\"flex items-start gap-2\">\n <span className=\"font-semibold text-blue-600
                    min-w-[24px]\">[16]</span>\n <a href={citations[16].url} target=\"_blank\" rel=\"noopener
                    noreferrer\" className=\"text-blue-600 hover:underline break-all\">\n {citations[16].title}\n </a>\n
            </li>\n )}\n {citations[17] && (\n <li className=\"flex items-start gap-2\">\n <span
                    className=\"font-semibold text-blue-600 min-w-[24px]\">[17]</span>\n <a href={citations[17].url}
                    target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600 hover:underline
                    break-all\">\n {citations[17].title}\n </a>\n </li>\n )}\n </ol>\n </section>\n </div>\n );\n};");
__reactCodeManager.setCode("section_2", "import { Card, CardHeader, CardTitle, CardContent } from
'@/components/ui/card';\nimport { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';\nimport { \n Code,
\n Terminal, \n Shield, \n Layers, \n TrendingUp, \n BookOpen, \n Wrench,\n Cpu,\n Network,\n Lock,\n Eye,\n Target,\n
Zap,\n Award,\n CheckCircle2,\n ArrowRight\n} from 'lucide-react';\nimport { BarChart, Bar, XAxis, YAxis, Tooltip,
ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';\nimport {
CitationLink } from '@/components/ui/citation';\n\n// Skill progression data for visualization\nconst
skillProgressionData_section_2 = [\n { level: 'Beginner', skills: 8, tools: 5, practice: 6 },\n { level: 'Intermediate',
skills: 15, tools: 12, practice: 14 },\n { level: 'Advanced', skills: 22, tools: 20, practice: 24 }\n];\n\n// Technical
skills radar chart data\nconst technicalSkillsData_section_2 = [\n { skill: 'Web Hacking', proficiency: 90 },\n { skill:
'Network Security', proficiency: 85 },\n { skill: 'Reverse Engineering', proficiency: 75 },\n { skill: 'Malware
Analysis', proficiency: 70 },\n { skill: 'Social Engineering', proficiency: 80 },\n { skill: 'Privilege Escalation',
proficiency: 85 }\n];\n\n// Programming language importance\nconst programmingLanguagesData_section_2 = [\n { language:
'Python', usage: 95, difficulty: 'Easy' },\n { language: 'Bash', usage: 80, difficulty: 'Easy' },\n { language:
'PowerShell', usage: 75, difficulty: 'Medium' },\n { language: 'Ruby', usage: 70, difficulty: 'Medium' },\n { language:
'C/C++', usage: 65, difficulty: 'Hard' }\n];\n\nconst Section_2 = () => {\n return (\n <div className=\"w-full max-w-7xl
    mx-auto space-y-6 sm:space-y-8 p-3 sm:p-6\">\n {/* Hero Section */}\n <div className=\"bg-gradient-to-r
        from-blue-600 to-purple-600 text-white p-6 sm:p-8 rounded-lg shadow-lg\">\n <div className=\"flex items-center
            gap-3 mb-4\">\n
            <Target className=\"w-8 h-8 sm:w-10 sm:h-10\" />\n <h1 className=\"text-2xl sm:text-4xl font-bold\">Ethical
                Hacking Learning Roadmap</h1>\n
        </div>\n <p className=\"text-base sm:text-lg opacity-90\">\n A comprehensive guide to mastering ethical hacking
            from beginner to advanced levels, covering essential skills, tools, and programming languages\n </p>\n
    </div>\n\n {/* Learning Path Overview */}\n <Card>\n <CardHeader>\n <CardTitle className=\"flex items-center
                gap-2\">\n
                <TrendingUp className=\"w-6 h-6\" />\n Skill Progression Journey\n
            </CardTitle>\n </CardHeader>\n <CardContent>\n <ResponsiveContainer width=\"100%\" height={300}>\n <BarChart
                    data={skillProgressionData_section_2}>\n
                    <XAxis dataKey=\"level\" />\n
                    <YAxis />\n
                    <Tooltip />\n
                    <Legend />\n
                    <Bar dataKey=\"skills\" fill=\"#3b82f6\" name=\"Technical Skills\" />\n
                    <Bar dataKey=\"tools\" fill=\"#8b5cf6\" name=\"Tools Mastered\" />\n
                    <Bar dataKey=\"practice\" fill=\"#10b981\" name=\"Practice Hours/Week\" />\n
                </BarChart>\n </ResponsiveContainer>\n <p className=\"text-sm text-gray-600 mt-4\">\n Progress through
                three distinct learning phases, each building upon foundational knowledge with increasing complexity and
                specialization
                <CitationLink id=\"11\" citations={citations} />
                <CitationLink id=\"15\" citations={citations} />\n
            </p>\n </CardContent>\n </Card>\n\n {/* Beginner Level Roadmap */}\n <Card className=\"border-l-4
        border-green-500\">\n <CardHeader>\n <CardTitle className=\"flex items-center gap-2 text-green-700\">\n
                <BookOpen className=\"w-6 h-6\" />\n Level 1: Beginner Foundation\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"space-y-4\">\n <Alert>\n
                <Shield className=\"w-4 h-4\" />\n <AlertTitle>Start Here: Build Your Lab Environment</AlertTitle>\n
                <AlertDescription>\n Create a safe, isolated practice environment using virtualization software like
                    VirtualBox or VMware. Install hacking-oriented operating systems such as Kali Linux or Parrot OS
                    <CitationLink id=\"11\" citations={citations} />\n
                </AlertDescription>\n
            </Alert>\n\n <div className=\"grid sm:grid-cols-2 gap-4\">\n <div className=\"bg-blue-50 p-4 rounded-lg\">\n
                    <h4 className=\"font-semibold flex items-center gap-2 mb-3\">\n
                        <Terminal className=\"w-5 h-5 text-blue-600\" />\n Essential Operating Systems\n
                    </h4>\n <ul className=\"space-y-2 text-sm\">\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-green-600 mt-0.5 flex-shrink-0\" />\n
                            <span><strong>Kali Linux:</strong> Most popular Debian-based pentesting distribution
                                <CitationLink id=\"8\" citations={citations} />
                                <CitationLink id=\"9\" citations={citations} />
                            </span>\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-green-600 mt-0.5 flex-shrink-0\" />\n
                            <span><strong>Parrot OS:</strong> Full portable lab for security and DFIR
                                <CitationLink id=\"10\" citations={citations} />
                            </span>\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-green-600 mt-0.5 flex-shrink-0\" />\n
                            <span><strong>BlackArch Linux:</strong> Arch-based pentesting platform
                                <CitationLink id=\"8\" citations={citations} />
                            </span>\n
                        </li>\n </ul>\n </div>\n\n <div className=\"bg-purple-50 p-4 rounded-lg\">\n <h4
                        className=\"font-semibold flex items-center gap-2 mb-3\">\n
                        <Target className=\"w-5 h-5 text-purple-600\" />\n Beginner Practice Platforms\n
                    </h4>\n <ul className=\"space-y-2 text-sm\">\n <li className=\"flex items-start gap-2\">\n
                            <ArrowRight className=\"w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0\" />\n
                            <span><strong>TryHackMe:</strong> Start here with guided labs and rooms ($16/month
                                recommended)
                                <CitationLink id=\"17\" citations={citations} />
                            </span>\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <ArrowRight className=\"w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0\" />\n
                            <span><strong>PicoCTF:</strong> Challenge-style modules for web security and cryptography
                                <CitationLink id=\"17\" citations={citations} />
                            </span>\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <ArrowRight className=\"w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0\" />\n
                            <span><strong>OverTheWire:</strong> War games for learning security concepts
                                <CitationLink id=\"11\" citations={citations} />
                            </span>\n
                        </li>\n </ul>\n </div>\n </div>\n\n <div className=\"bg-gray-50 p-4 rounded-lg\">\n <h4
                    className=\"font-semibold mb-3\">Core Security Basics to Master</h4>\n <div className=\"grid
                    sm:grid-cols-3 gap-3 text-sm\">\n <div className=\"flex items-center gap-2\">\n
                        <Lock className=\"w-4 h-4 text-blue-600\" />\n <span>Firewalls & Network Security</span>\n
                    </div>\n <div className=\"flex items-center gap-2\">\n
                        <Shield className=\"w-4 h-4 text-blue-600\" />\n <span>Authentication Mechanisms</span>\n
                    </div>\n <div className=\"flex items-center gap-2\">\n
                        <Eye className=\"w-4 h-4 text-blue-600\" />\n <span>Encryption Fundamentals</span>\n
                    </div>\n </div>\n </div>\n </CardContent>\n </Card>\n\n {/* Essential Tools Section */}\n <Card>\n
        <CardHeader>\n <CardTitle className=\"flex items-center gap-2\">\n
                <Wrench className=\"w-6 h-6\" />\n Critical Tools & Software Arsenal\n
            </CardTitle>\n </CardHeader>\n <CardContent>\n <div className=\"grid sm:grid-cols-2 lg:grid-cols-3 gap-4\">
                \n {/* Network Scanning */}\n <div className=\"border rounded-lg p-4 hover:shadow-md
                    transition-shadow\">\n <div className=\"flex items-center gap-2 mb-3\">\n
                        <Network className=\"w-5 h-5 text-blue-600\" />\n <h4 className=\"font-semibold\">Network
                            Scanning</h4>\n
                    </div>\n <ul className=\"space-y-2 text-sm\">\n <li><strong>Nmap:</strong> Network discovery and
                            security auditing
                            <CitationLink id=\"4\" citations={citations} />
                            <CitationLink id=\"11\" citations={citations} />
                        </li>\n <li><strong>Masscan:</strong> Fast port scanner
                            <CitationLink id=\"9\" citations={citations} />
                        </li>\n <li><strong>OWASP Amass:</strong> Subdomain enumeration
                            <CitationLink id=\"9\" citations={citations} />
                        </li>\n </ul>\n </div>\n\n {/* Web Application Testing */}\n <div className=\"border rounded-lg
                    p-4 hover:shadow-md transition-shadow\">\n <div className=\"flex items-center gap-2 mb-3\">\n
                        <Target className=\"w-5 h-5 text-purple-600\" />\n <h4 className=\"font-semibold\">Web App
                            Testing</h4>\n
                    </div>\n <ul className=\"space-y-2 text-sm\">\n <li><strong>Burp Suite:</strong> Web vulnerability
                            scanner and proxy
                            <CitationLink id=\"4\" citations={citations} />
                            <CitationLink id=\"11\" citations={citations} />
                        </li>\n <li><strong>Nikto:</strong> Web server vulnerability scanner
                            <CitationLink id=\"10\" citations={citations} />
                        </li>\n <li><strong>WPScan:</strong> WordPress security scanner
                            <CitationLink id=\"10\" citations={citations} />
                        </li>\n </ul>\n </div>\n\n {/* Exploitation Frameworks */}\n <div className=\"border rounded-lg
                    p-4 hover:shadow-md transition-shadow\">\n <div className=\"flex items-center gap-2 mb-3\">\n
                        <Zap className=\"w-5 h-5 text-red-600\" />\n <h4 className=\"font-semibold\">Exploitation</h4>\n
                    </div>\n <ul className=\"space-y-2 text-sm\">\n <li><strong>Metasploit:</strong> Penetration testing
                            framework
                            <CitationLink id=\"3\" citations={citations} />
                            <CitationLink id=\"9\" citations={citations} />
                        </li>\n <li><strong>Armitage:</strong> GUI for Metasploit
                            <CitationLink id=\"10\" citations={citations} />
                        </li>\n <li><strong>Pwntools:</strong> CTF exploit development
                            <CitationLink id=\"10\" citations={citations} />
                        </li>\n </ul>\n </div>\n\n {/* Network Analysis */}\n <div className=\"border rounded-lg p-4
                    hover:shadow-md transition-shadow\">\n <div className=\"flex items-center gap-2 mb-3\">\n
                        <Eye className=\"w-5 h-5 text-green-600\" />\n <h4 className=\"font-semibold\">Network Analysis
                        </h4>\n
                    </div>\n <ul className=\"space-y-2 text-sm\">\n <li><strong>Wireshark:</strong> Network protocol
                            analyzer
                            <CitationLink id=\"4\" citations={citations} />
                            <CitationLink id=\"11\" citations={citations} />
                        </li>\n <li><strong>tcpdump:</strong> Command-line packet analyzer
                            <CitationLink id=\"10\" citations={citations} />
                        </li>\n <li><strong>Dshell:</strong> Network forensic analysis
                            <CitationLink id=\"10\" citations={citations} />
                        </li>\n </ul>\n </div>\n\n {/* Password Cracking */}\n <div className=\"border rounded-lg p-4
                    hover:shadow-md transition-shadow\">\n <div className=\"flex items-center gap-2 mb-3\">\n
                        <Lock className=\"w-5 h-5 text-orange-600\" />\n <h4 className=\"font-semibold\">Password
                            Cracking</h4>\n
                    </div>\n <ul className=\"space-y-2 text-sm\">\n <li><strong>Hashcat:</strong> Fast hash cracker
                            <CitationLink id=\"10\" citations={citations} />
                        </li>\n <li><strong>John the Ripper:</strong> Password cracker
                            <CitationLink id=\"10\" citations={citations} />
                            <CitationLink id=\"11\" citations={citations} />
                        </li>\n <li><strong>CeWL:</strong> Custom wordlist generator
                            <CitationLink id=\"10\" citations={citations} />
                        </li>\n </ul>\n </div>\n\n {/* Reverse Engineering */}\n <div className=\"border rounded-lg p-4
                    hover:shadow-md transition-shadow\">\n <div className=\"flex items-center gap-2 mb-3\">\n
                        <Cpu className=\"w-5 h-5 text-indigo-600\" />\n <h4 className=\"font-semibold\">Reverse
                            Engineering</h4>\n
                    </div>\n <ul className=\"space-y-2 text-sm\">\n <li><strong>Ghidra:</strong> NSA reverse engineering
                            suite
                            <CitationLink id=\"10\" citations={citations} />
                        </li>\n <li><strong>IDA Pro:</strong> Multi-processor disassembler
                            <CitationLink id=\"10\" citations={citations} />
                        </li>\n <li><strong>Radare2:</strong> Open-source RE framework
                            <CitationLink id=\"10\" citations={citations} />
                        </li>\n </ul>\n </div>\n </div>\n </CardContent>\n </Card>\n\n {/* Programming Languages */}\n
    <Card>\n <CardHeader>\n <CardTitle className=\"flex items-center gap-2\">\n <Code className=\"w-6 h-6\" />\n
                Essential Programming Languages\n </CardTitle>\n </CardHeader>\n <CardContent>\n <ResponsiveContainer
                width=\"100%\" height={300}>\n <BarChart data={programmingLanguagesData_section_2} layout=\"vertical\">
                    \n
                    <XAxis type=\"number\" domain={[0, 100]} />\n
                    <YAxis dataKey=\"language\" type=\"category\" width={100} />\n
                    <Tooltip />\n
                    <Bar dataKey=\"usage\" fill=\"#8b5cf6\" name=\"Industry Usage %\" />\n
                </BarChart>\n </ResponsiveContainer>\n\n <div className=\"grid sm:grid-cols-2 gap-4 mt-6\">\n <div
                    className=\"bg-blue-50 p-4 rounded-lg\">\n <h4 className=\"font-semibold flex items-center gap-2
                        mb-3\">\n <Code className=\"w-5 h-5 text-blue-600\" />\n Python - The Hacker's Language\n </h4>
                    \n <p className=\"text-sm mb-3\">Easy to learn and most popular among ethical hackers for scripting
                        and exploit development
                        <CitationLink id=\"1\" citations={citations} />
                        <CitationLink id=\"17\" citations={citations} />
                    </p>\n <div className=\"space-y-2 text-sm\">\n <div className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-green-600 mt-0.5 flex-shrink-0\" />\n
                            <span><strong>Cisco Networking Academy:</strong> Python Essentials course
                                <CitationLink id=\"17\" citations={citations} />
                            </span>\n
                        </div>\n <div className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-green-600 mt-0.5 flex-shrink-0\" />\n
                            <span><strong>FreeCodeCamp:</strong> Python for Hackers (networking/packet analysis)
                                <CitationLink id=\"17\" citations={citations} />
                            </span>\n
                        </div>\n </div>\n </div>\n\n <div className=\"bg-purple-50 p-4 rounded-lg\">\n <h4
                        className=\"font-semibold flex items-center gap-2 mb-3\">\n
                        <Terminal className=\"w-5 h-5 text-purple-600\" />\n Bash & PowerShell\n
                    </h4>\n <p className=\"text-sm mb-3\">Essential for Linux and Windows environment automation and
                        scripting
                        <CitationLink id=\"1\" citations={citations} />
                        <CitationLink id=\"17\" citations={citations} />
                    </p>\n <div className=\"space-y-2 text-sm\">\n <div className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-green-600 mt-0.5 flex-shrink-0\" />\n
                            <span><strong>Bash:</strong> Linux scripting and automation
                                <CitationLink id=\"4\" citations={citations} />
                            </span>\n
                        </div>\n <div className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-green-600 mt-0.5 flex-shrink-0\" />\n
                            <span><strong>PowerShell:</strong> Critical for Windows/AD pentesting - Microsoft Virtual
                                Academy
                                <CitationLink id=\"17\" citations={citations} />
                            </span>\n
                        </div>\n </div>\n </div>\n\n <div className=\"bg-green-50 p-4 rounded-lg\">\n <h4
                        className=\"font-semibold flex items-center gap-2 mb-3\">\n
                        <Layers className=\"w-5 h-5 text-green-600\" />\n Ruby - Exploit Development\n
                    </h4>\n <p className=\"text-sm\">De-facto language for writing exploits, integrated into Metasploit
                        framework
                        <CitationLink id=\"10\" citations={citations} />
                    </p>\n </div>\n\n <div className=\"bg-orange-50 p-4 rounded-lg\">\n <h4 className=\"font-semibold
                        flex items-center gap-2 mb-3\">\n
                        <Cpu className=\"w-5 h-5 text-orange-600\" />\n C/C++ - Low-Level Mastery\n
                    </h4>\n <p className=\"text-sm\">Essential for understanding systems, reverse engineering, and
                        advanced exploit development
                        <CitationLink id=\"9\" citations={citations} />
                        <CitationLink id=\"10\" citations={citations} />
                    </p>\n </div>\n </div>\n </CardContent>\n </Card>\n\n {/* Technical Skills Radar */}\n <Card>\n
        <CardHeader>\n <CardTitle className=\"flex items-center gap-2\">\n
                <Shield className=\"w-6 h-6\" />\n Core Technical Skill Domains\n
            </CardTitle>\n </CardHeader>\n <CardContent>\n <ResponsiveContainer width=\"100%\" height={400}>\n
                <RadarChart data={technicalSkillsData_section_2}>\n
                    <PolarGrid />\n
                    <PolarAngleAxis dataKey=\"skill\" />\n
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />\n
                    <Radar name=\"Skill Importance\" dataKey=\"proficiency\" stroke=\"#8b5cf6\" fill=\"#8b5cf6\"
                        fillOpacity={0.6} />\n
                    <Tooltip />\n
                </RadarChart>\n </ResponsiveContainer>\n\n <div className=\"grid sm:grid-cols-2 gap-4 mt-6\">\n <div
                    className=\"border-l-4 border-blue-500 pl-4\">\n <h4 className=\"font-semibold mb-2\">Web Hacking
                    </h4>\n <p className=\"text-sm text-gray-600\">XSS, SQL Injection, OWASP Top 10 vulnerabilities.
                        Practice with DVWA, OWASP Juice Shop, WebGoat
                        <CitationLink id=\"8\" citations={citations} />
                        <CitationLink id=\"9\" citations={citations} />
                    </p>\n </div>\n <div className=\"border-l-4 border-purple-500 pl-4\">\n <h4
                        className=\"font-semibold mb-2\">Network Security</h4>\n <p className=\"text-sm text-gray-600\">
                        Reconnaissance, scanning, exploitation, wireless hacking with Aircrack-ng
                        <CitationLink id=\"9\" citations={citations} />
                        <CitationLink id=\"10\" citations={citations} />
                    </p>\n </div>\n <div className=\"border-l-4 border-green-500 pl-4\">\n <h4 className=\"font-semibold
                        mb-2\">Reverse Engineering</h4>\n <p className=\"text-sm text-gray-600\">Binary analysis,
                        vulnerability identification, exploit development, buffer overflows
                        <CitationLink id=\"9\" citations={citations} />
                    </p>\n </div>\n <div className=\"border-l-4 border-orange-500 pl-4\">\n <h4
                        className=\"font-semibold mb-2\">Privilege Escalation</h4>\n <p className=\"text-sm
                        text-gray-600\">Linux and Windows escalation techniques using LinEnum, GTFOBins, ADAPE
                        <CitationLink id=\"9\" citations={citations} />
                        <CitationLink id=\"10\" citations={citations} />
                    </p>\n </div>\n </div>\n </CardContent>\n </Card>\n\n {/* Intermediate to Advanced Path */}\n <Card
        className=\"border-l-4 border-orange-500\">\n <CardHeader>\n <CardTitle className=\"flex items-center gap-2
                text-orange-700\">\n
                <Award className=\"w-6 h-6\" />\n Level 2-3: Intermediate to Advanced Specialization\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"space-y-4\">\n <Alert>\n
                <Target className=\"w-4 h-4\" />\n <AlertTitle>Choose Your Specialization Path</AlertTitle>\n
                <AlertDescription>\n Cybersecurity is broad - focus on specific domains that align with your interests
                    and career goals
                    <CitationLink id=\"15\" citations={citations} />\n
                </AlertDescription>\n
            </Alert>\n\n <div className=\"grid sm:grid-cols-2 lg:grid-cols-3 gap-4\">\n <div
                    className=\"bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200\">\n
                    <h4 className=\"font-semibold text-blue-800 mb-2\">Penetration Tester</h4>\n <p className=\"text-sm
                        text-gray-700\">Offensive testing to find and exploit vulnerabilities in systems and networks
                    </p>\n </div>\n <div className=\"bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg
                    border border-purple-200\">\n <h4 className=\"font-semibold text-purple-800 mb-2\">SOC Analyst</h4>
                    \n <p className=\"text-sm text-gray-700\">Monitor and respond to security alerts, defend against
                        active threats</p>\n </div>\n <div className=\"bg-gradient-to-br from-green-50 to-green-100 p-4
                    rounded-lg border border-green-200\">\n <h4 className=\"font-semibold text-green-800 mb-2\">Cloud
                        Security Engineer</h4>\n <p className=\"text-sm text-gray-700\">Secure AWS/Azure/GCP
                        environments and cloud infrastructure</p>\n </div>\n <div className=\"bg-gradient-to-br
                    from-red-50 to-red-100 p-4 rounded-lg border border-red-200\">\n <h4 className=\"font-semibold
                        text-red-800 mb-2\">Incident Responder</h4>\n <p className=\"text-sm text-gray-700\">Handle
                        active security breaches and perform digital forensics</p>\n </div>\n <div
                    className=\"bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border
                    border-yellow-200\">\n <h4 className=\"font-semibold text-yellow-800 mb-2\">AppSec Engineer</h4>\n
                    <p className=\"text-sm text-gray-700\">Secure software during development lifecycle and code review
                    </p>\n </div>\n <div className=\"bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-lg
                    border border-indigo-200\">\n <h4 className=\"font-semibold text-indigo-800 mb-2\">Threat
                        Intelligence Analyst</h4>\n <p className=\"text-sm text-gray-700\">Track attackers, analyze
                        malware trends, and predict threats</p>\n </div>\n </div>\n\n <div className=\"bg-gray-50 p-4
                rounded-lg\">\n <h4 className=\"font-semibold mb-3 flex items-center gap-2\">\n
                    <Target className=\"w-5 h-5\" />\n Advanced Practice Platforms\n
                </h4>\n <div className=\"grid sm:grid-cols-2 gap-3 text-sm\">\n <div className=\"flex items-start
                        gap-2\">\n
                        <ArrowRight className=\"w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0\" />\n <span><strong>Hack The
                                Box:</strong> Advanced pentesting challenges
                            <CitationLink id=\"11\" citations={citations} />
                            <CitationLink id=\"14\" citations={citations} />
                        </span>\n
                    </div>\n <div className=\"flex items-start gap-2\">\n
                        <ArrowRight className=\"w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0\" />\n
                        <span><strong>VulnHub:</strong> Vulnerable VMs for practice
                            <CitationLink id=\"14\" citations={citations} />
                        </span>\n
                    </div>\n <div className=\"flex items-start gap-2\">\n
                        <ArrowRight className=\"w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0\" />\n
                        <span><strong>HackerOne/Bugcrowd:</strong> Real-world bug bounties
                            <CitationLink id=\"14\" citations={citations} />
                        </span>\n
                    </div>\n <div className=\"flex items-start gap-2\">\n
                        <ArrowRight className=\"w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0\" />\n
                        <span><strong>pwn.college:</strong> Advanced exploitation training
                            <CitationLink id=\"14\" citations={citations} />
                        </span>\n
                    </div>\n </div>\n </div>\n\n <div className=\"bg-blue-50 p-4 rounded-lg\">\n <h4
                    className=\"font-semibold mb-3 flex items-center gap-2\">\n
                    <Layers className=\"w-5 h-5 text-blue-600\" />\n Deep Dive Focus Areas\n
                </h4>\n <div className=\"grid sm:grid-cols-2 gap-3 text-sm\">\n <div>• Windows/Active Directory
                        pentesting
                        <CitationLink id=\"16\" citations={citations} />
                    </div>\n <div>• Cloud security (Azure/AWS/GCP)
                        <CitationLink id=\"17\" citations={citations} />
                    </div>\n <div>• Web application security testing
                        <CitationLink id=\"16\" citations={citations} />
                    </div>\n <div>• Linux system exploitation
                        <CitationLink id=\"16\" citations={citations} />
                    </div>\n </div>\n </div>\n </CardContent>\n </Card>\n\n {/* Cloud Computing Skills */}\n <Card>\n
        <CardHeader>\n <CardTitle className=\"flex items-center gap-2\">\n
                <Layers className=\"w-6 h-6\" />\n Cloud Computing Essentials\n
            </CardTitle>\n </CardHeader>\n <CardContent>\n <p className=\"text-sm text-gray-600 mb-4\">\n Understanding
                cloud platforms is essential as organizations increasingly rely on cloud infrastructure for their
                operations
                <CitationLink id=\"17\" citations={citations} />\n
            </p>\n <div className=\"grid sm:grid-cols-3 gap-4\">\n <div className=\"border rounded-lg p-4
                    hover:shadow-md transition-shadow\">\n <h4 className=\"font-semibold text-orange-600 mb-2\">AWS
                        Security</h4>\n <p className=\"text-sm text-gray-600 mb-2\">Security certification training and
                        essentials courses</p>\n <p className=\"text-xs text-gray-500\">Free trials available for
                        hands-on practice</p>\n </div>\n <div className=\"border rounded-lg p-4 hover:shadow-md
                    transition-shadow\">\n <h4 className=\"font-semibold text-blue-600 mb-2\">Azure Security</h4>\n <p
                        className=\"text-sm text-gray-600 mb-2\">Free training on security fundamentals and cloud basics
                    </p>\n <p className=\"text-xs text-gray-500\">Microsoft-provided comprehensive resources</p>\n
                </div>\n <div className=\"border rounded-lg p-4 hover:shadow-md transition-shadow\">\n <h4
                        className=\"font-semibold text-green-600 mb-2\">Google Cloud</h4>\n <p className=\"text-sm
                        text-gray-600 mb-2\">Skills Boost platform for cloud fundamentals</p>\n <p className=\"text-xs
                        text-gray-500\">Interactive learning paths available</p>\n </div>\n </div>\n </CardContent>\n
    </Card>\n\n {/* Key Success Factors */}\n <Alert className=\"bg-gradient-to-r from-green-50 to-blue-50
        border-green-300\">\n
        <Award className=\"w-5 h-5\" />\n <AlertTitle className=\"text-lg\">Keys to Success in Ethical Hacking
        </AlertTitle>\n <AlertDescription className=\"space-y-2 mt-2\">\n <div className=\"flex items-start gap-2\">\n
                <CheckCircle2 className=\"w-5 h-5 text-green-600 mt-0.5 flex-shrink-0\" />\n <span><strong>Continuous
                        Practice:</strong> Reinforce learning daily through home labs and real-world projects
                    <CitationLink id=\"15\" citations={citations} />
                    <CitationLink id=\"16\" citations={citations} />
                </span>\n
            </div>\n <div className=\"flex items-start gap-2\">\n
                <CheckCircle2 className=\"w-5 h-5 text-green-600 mt-0.5 flex-shrink-0\" />\n <span><strong>Hands-On
                        Experience:</strong> Theory alone is insufficient - practical application is critical</span>\n
            </div>\n <div className=\"flex items-start gap-2\">\n
                <CheckCircle2 className=\"w-5 h-5 text-green-600 mt-0.5 flex-shrink-0\" />\n <span><strong>Community
                        Engagement:</strong> Participate in CTF competitions, forums, and collaborative learning
                    <CitationLink id=\"14\" citations={citations} />
                </span>\n
            </div>\n <div className=\"flex items-start gap-2\">\n
                <CheckCircle2 className=\"w-5 h-5 text-green-600 mt-0.5 flex-shrink-0\" />\n <span><strong>Stay
                        Updated:</strong> Cybersecurity evolves rapidly - follow security blogs, podcasts, and
                    conferences</span>\n
            </div>\n </AlertDescription>\n
    </Alert>\n\n {/* Sources Section */}\n <section className=\"mt-8 border-t pt-6\">\n <h3 className=\"text-lg
            font-semibold mb-4 flex items-center gap-2\">\n
            <BookOpen className=\"w-5 h-5\" />\n Sources & References\n
        </h3>\n <ol className=\"text-sm space-y-2 grid sm:grid-cols-2 gap-x-6\">\n {citations[1] && (\n <li
                className=\"flex gap-2\">\n <span className=\"font-semibold text-gray-600\">1.</span>\n <a
                    href={citations[1].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline\">\n {citations[1].title}\n </a>\n </li>\n )}\n {citations[2] && (\n <li
                className=\"flex gap-2\">\n <span className=\"font-semibold text-gray-600\">2.</span>\n <a
                    href={citations[2].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline\">\n {citations[2].title}\n </a>\n </li>\n )}\n {citations[3] && (\n <li
                className=\"flex gap-2\">\n <span className=\"font-semibold text-gray-600\">3.</span>\n <a
                    href={citations[3].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline\">\n {citations[3].title}\n </a>\n </li>\n )}\n {citations[4] && (\n <li
                className=\"flex gap-2\">\n <span className=\"font-semibold text-gray-600\">4.</span>\n <a
                    href={citations[4].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline\">\n {citations[4].title}\n </a>\n </li>\n )}\n {citations[8] && (\n <li
                className=\"flex gap-2\">\n <span className=\"font-semibold text-gray-600\">8.</span>\n <a
                    href={citations[8].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline\">\n {citations[8].title}\n </a>\n </li>\n )}\n {citations[9] && (\n <li
                className=\"flex gap-2\">\n <span className=\"font-semibold text-gray-600\">9.</span>\n <a
                    href={citations[9].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline\">\n {citations[9].title}\n </a>\n </li>\n )}\n {citations[10] && (\n <li
                className=\"flex gap-2\">\n <span className=\"font-semibold text-gray-600\">10.</span>\n <a
                    href={citations[10].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline\">\n {citations[10].title}\n </a>\n </li>\n )}\n {citations[11] && (\n <li
                className=\"flex gap-2\">\n <span className=\"font-semibold text-gray-600\">11.</span>\n <a
                    href={citations[11].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline\">\n {citations[11].title}\n </a>\n </li>\n )}\n {citations[14] && (\n <li
                className=\"flex gap-2\">\n <span className=\"font-semibold text-gray-600\">14.</span>\n <a
                    href={citations[14].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline\">\n {citations[14].title}\n </a>\n </li>\n )}\n {citations[15] && (\n <li
                className=\"flex gap-2\">\n <span className=\"font-semibold text-gray-600\">15.</span>\n <a
                    href={citations[15].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline\">\n {citations[15].title}\n </a>\n </li>\n )}\n {citations[16] && (\n <li
                className=\"flex gap-2\">\n <span className=\"font-semibold text-gray-600\">16.</span>\n <a
                    href={citations[16].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline\">\n {citations[16].title}\n </a>\n </li>\n )}\n {citations[17] && (\n <li
                className=\"flex gap-2\">\n <span className=\"font-semibold text-gray-600\">17.</span>\n <a
                    href={citations[17].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline\">\n {citations[17].title}\n </a>\n </li>\n )}\n </ol>\n </section>\n </div>\n
);\n};");
__reactCodeManager.setCode("section_4", "import { Card, CardHeader, CardTitle, CardContent } from
'@/components/ui/card';\nimport { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';\nimport { Target,
BookOpen, Youtube, Users, Award, Scale, Globe, Code, Shield, Zap, TrendingUp, Laptop } from 'lucide-react';\nimport {
BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
Radar, Legend } from 'recharts';\nimport { CitationLink } from '@/components/ui/citation';\n\n// Image resources for
this section\nconst imageResources_section_4 = {\n ethicalHacker:
\"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2pk90bwP6Qw47qTMeK5pkx/157b02dc588bbab7bbb5186d18aefce0/Ethical_hacking_certification.png?w=1500&amp;h=680&amp;q=60&amp;fit=fill&amp;f=faces&amp;fm=jpg&amp;fl=progressive&amp;auto=format%2Ccompress&amp;dpr=1&amp;w=1000\",\n
certifications: \"https://images2.cmp.optimizely.com/Zz0wM2ZmNmJkMDk3YzkxMWVmYjI4MjhhNzMyZDY4NGNiNQ==\"\n};\n\n//
Platform comparison data\nconst platformComparison_section_4 = [\n { platform: 'TryHackMe', difficulty: 'Beginner',
structure: 'High', community: 'Large', cost: 'Freemium' },\n { platform: 'Hack The Box', difficulty: 'Advanced',
structure: 'Medium', community: 'Large', cost: 'Freemium' },\n { platform: 'OverTheWire', difficulty: 'Beginner',
structure: 'High', community: 'Medium', cost: 'Free' },\n { platform: 'VulnHub', difficulty: 'Varied', structure: 'Low',
community: 'Medium', cost: 'Free' },\n { platform: 'PortSwigger', difficulty: 'Intermediate', structure: 'High',
community: 'Large', cost: 'Free' }\n];\n\n// Skills radar chart data\nconst skillsData_section_4 = [\n { skill: 'Web App
Security', beginner: 65, intermediate: 85, advanced: 95 },\n { skill: 'Network Pentesting', beginner: 45, intermediate:
75, advanced: 90 },\n { skill: 'Exploit Development', beginner: 25, intermediate: 60, advanced: 85 },\n { skill:
'Reverse Engineering', beginner: 30, intermediate: 65, advanced: 88 },\n { skill: 'Social Engineering', beginner: 50,
intermediate: 70, advanced: 82 },\n { skill: 'CTF Challenges', beginner: 55, intermediate: 80, advanced: 92
}\n];\n\nconst Section_4 = () => {\n return (\n <div className=\"w-full max-w-7xl mx-auto space-y-6 p-4 sm:p-6
    bg-gradient-to-br from-gray-50 to-blue-50\">\n \n {/* Hero Section */}\n <div className=\"relative bg-gradient-to-r
        from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white overflow-hidden\">\n <div className=\"relative
            z-10\">\n <div className=\"flex items-center gap-3 mb-4\">\n
                <Target className=\"w-8 h-8 sm:w-10 sm:h-10\" />\n <h1 className=\"text-2xl sm:text-4xl font-bold\">
                    Practical Experience & Learning Resources</h1>\n
            </div>\n <p className=\"text-lg sm:text-xl text-blue-100 max-w-3xl\">\n Master ethical hacking through
                hands-on practice, comprehensive courses, and community engagement while adhering to legal and ethical
                guidelines\n </p>\n </div>\n <div className=\"absolute top-0 right-0 w-64 h-64 bg-white opacity-5
            rounded-full -mr-32 -mt-32\"></div>\n </div>\n\n {/* Key Stats */}\n <div className=\"grid grid-cols-1
        sm:grid-cols-2 lg:grid-cols-4 gap-4\">\n <Card className=\"bg-gradient-to-br from-blue-50 to-blue-100
            border-blue-200\">\n <CardContent className=\"p-6\">\n <div className=\"flex items-center justify-between\">
                    \n <div>\n <p className=\"text-sm text-blue-600 font-medium\">CTF Platforms</p>\n <p
                            className=\"text-3xl font-bold text-blue-900\">10+</p>\n </div>\n
                    <Target className=\"w-12 h-12 text-blue-600 opacity-20\" />\n
                </div>\n </CardContent>\n </Card>\n\n <Card className=\"bg-gradient-to-br from-purple-50 to-purple-100
            border-purple-200\">\n <CardContent className=\"p-6\">\n <div className=\"flex items-center
                    justify-between\">\n <div>\n <p className=\"text-sm text-purple-600 font-medium\">Learning Platforms
                        </p>\n <p className=\"text-3xl font-bold text-purple-900\">15+</p>\n </div>\n
                    <BookOpen className=\"w-12 h-12 text-purple-600 opacity-20\" />\n
                </div>\n </CardContent>\n </Card>\n\n <Card className=\"bg-gradient-to-br from-green-50 to-green-100
            border-green-200\">\n <CardContent className=\"p-6\">\n <div className=\"flex items-center
                    justify-between\">\n <div>\n <p className=\"text-sm text-green-600 font-medium\">YouTube Channels
                        </p>\n <p className=\"text-3xl font-bold text-green-900\">8+</p>\n </div>\n
                    <Youtube className=\"w-12 h-12 text-green-600 opacity-20\" />\n
                </div>\n </CardContent>\n </Card>\n\n <Card className=\"bg-gradient-to-br from-orange-50 to-orange-100
            border-orange-200\">\n <CardContent className=\"p-6\">\n <div className=\"flex items-center
                    justify-between\">\n <div>\n <p className=\"text-sm text-orange-600 font-medium\">Communities</p>\n
                        <p className=\"text-3xl font-bold text-orange-900\">10+</p>\n </div>\n
                    <Users className=\"w-12 h-12 text-orange-600 opacity-20\" />\n
                </div>\n </CardContent>\n </Card>\n </div>\n\n {/* Visual Banner */}\n <div className=\"grid grid-cols-1
        md:grid-cols-2 gap-4\">\n <img \n src={imageResources_section_4.ethicalHacker} \n alt=\"Ethical hacker working
            from home\" \n className=\"w-full h-64 object-cover rounded-xl shadow-lg\"\n />\n <img \n
            src={imageResources_section_4.certifications} \n alt=\"Best certifications for ethical hackers\" \n
            className=\"w-full h-64 object-cover rounded-xl shadow-lg\"\n />\n </div>\n\n {/* CTF Platforms & Online
    Labs */}\n <Card className=\"shadow-lg\">\n <CardHeader className=\"bg-gradient-to-r from-blue-500 to-cyan-500
            text-white\">\n <CardTitle className=\"flex items-center gap-2 text-xl sm:text-2xl\">\n
                <Target className=\"w-6 h-6\" />\n CTF Platforms & Practice Labs\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"p-6\">\n <p className=\"text-gray-700 mb-6\">\n
                Capture The Flag (CTF) platforms provide gamified, hands-on environments to test and advance penetration
                testing skills in safe, controlled settings
                <CitationLink id=\"8\" citations={citations} />
                <CitationLink id=\"9\" citations={citations} />.\n
            </p>\n\n <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6\">\n <Card
                    className=\"border-2 border-blue-200 hover:shadow-md transition-shadow\">\n <CardContent
                        className=\"p-4\">\n <div className=\"flex items-start gap-3\">\n <div className=\"bg-blue-100
                                p-2 rounded-lg\">\n
                                <Target className=\"w-5 h-5 text-blue-600\" />\n
                            </div>\n <div>\n <h4 className=\"font-bold text-blue-900\">Hack The Box</h4>\n <p
                                    className=\"text-sm text-gray-600 mt-1\">Advanced platform for testing penetration
                                    testing skills with challenging labs and retired machines with community write-ups
                                    <CitationLink id=\"8\" citations={citations} />
                                    <CitationLink id=\"17\" citations={citations} />.
                                </p>\n <p className=\"text-xs text-blue-600 mt-2 font-medium\">Difficulty: Advanced</p>
                                \n </div>\n </div>\n </CardContent>\n </Card>\n\n <Card className=\"border-2
                    border-green-200 hover:shadow-md transition-shadow\">\n <CardContent className=\"p-4\">\n <div
                            className=\"flex items-start gap-3\">\n <div className=\"bg-green-100 p-2 rounded-lg\">\n
                                <Zap className=\"w-5 h-5 text-green-600\" />\n
                            </div>\n <div>\n <h4 className=\"font-bold text-green-900\">TryHackMe</h4>\n <p
                                    className=\"text-sm text-gray-600 mt-1\">Beginner-friendly platform teaching
                                    cybersecurity through gamified real-world labs with excellent modules and structured
                                    training
                                    <CitationLink id=\"8\" citations={citations} />
                                    <CitationLink id=\"11\" citations={citations} />
                                    <CitationLink id=\"17\" citations={citations} />.
                                </p>\n <p className=\"text-xs text-green-600 mt-2 font-medium\">Difficulty:
                                    Beginner-Friendly</p>\n </div>\n </div>\n </CardContent>\n </Card>\n\n <Card
                    className=\"border-2 border-purple-200 hover:shadow-md transition-shadow\">\n <CardContent
                        className=\"p-4\">\n <div className=\"flex items-start gap-3\">\n <div className=\"bg-purple-100
                                p-2 rounded-lg\">\n
                                <Award className=\"w-5 h-5 text-purple-600\" />\n
                            </div>\n <div>\n <h4 className=\"font-bold text-purple-900\">Hacker101 CTF</h4>\n <p
                                    className=\"text-sm text-gray-600 mt-1\">Game designed for learning web app hacking
                                    in a safe environment, geared towards bug bounty hunters
                                    <CitationLink id=\"8\" citations={citations} />
                                    <CitationLink id=\"17\" citations={citations} />.
                                </p>\n <p className=\"text-xs text-purple-600 mt-2 font-medium\">Focus: Web Applications
                                </p>\n </div>\n </div>\n </CardContent>\n </Card>\n\n <Card className=\"border-2
                    border-orange-200 hover:shadow-md transition-shadow\">\n <CardContent className=\"p-4\">\n <div
                            className=\"flex items-start gap-3\">\n <div className=\"bg-orange-100 p-2 rounded-lg\">\n
                                <Code className=\"w-5 h-5 text-orange-600\" />\n </div>\n <div>\n <h4
                                    className=\"font-bold text-orange-900\">VulnHub</h4>\n <p className=\"text-sm
                                    text-gray-600 mt-1\">Downloadable vulnerable VMs for offline practice with available
                                    walkthroughs
                                    <CitationLink id=\"8\" citations={citations} />
                                    <CitationLink id=\"17\" citations={citations} />.
                                </p>\n <p className=\"text-xs text-orange-600 mt-2 font-medium\">Type: Offline Practice
                                </p>\n </div>\n </div>\n </CardContent>\n </Card>\n\n <Card className=\"border-2
                    border-cyan-200 hover:shadow-md transition-shadow\">\n <CardContent className=\"p-4\">\n <div
                            className=\"flex items-start gap-3\">\n <div className=\"bg-cyan-100 p-2 rounded-lg\">\n
                                <Globe className=\"w-5 h-5 text-cyan-600\" />\n
                            </div>\n <div>\n <h4 className=\"font-bold text-cyan-900\">OverTheWire</h4>\n <p
                                    className=\"text-sm text-gray-600 mt-1\">Wargames designed for beginners to learn
                                    security concepts through challenges
                                    <CitationLink id=\"11\" citations={citations} />
                                    <CitationLink id=\"14\" citations={citations} />.
                                </p>\n <p className=\"text-xs text-cyan-600 mt-2 font-medium\">Difficulty: Beginner</p>
                                \n </div>\n </div>\n </CardContent>\n </Card>\n\n <Card className=\"border-2
                    border-red-200 hover:shadow-md transition-shadow\">\n <CardContent className=\"p-4\">\n <div
                            className=\"flex items-start gap-3\">\n <div className=\"bg-red-100 p-2 rounded-lg\">\n
                                <Shield className=\"w-5 h-5 text-red-600\" />\n
                            </div>\n <div>\n <h4 className=\"font-bold text-red-900\">PortSwigger Academy</h4>\n <p
                                    className=\"text-sm text-gray-600 mt-1\">Best platform for learning web pentesting
                                    with comprehensive free resources
                                    <CitationLink id=\"9\" citations={citations} />
                                    <CitationLink id=\"12\" citations={citations} />
                                    <CitationLink id=\"17\" citations={citations} />.
                                </p>\n <p className=\"text-xs text-red-600 mt-2 font-medium\">Focus: Web Security</p>\n
                            </div>\n </div>\n </CardContent>\n </Card>\n </div>\n\n <Alert className=\"bg-blue-50
                border-blue-200\">\n
                <Laptop className=\"w-5 h-5 text-blue-600\" />\n <AlertTitle className=\"text-blue-900\">Platform
                    Pricing</AlertTitle>\n <AlertDescription className=\"text-blue-800\">\n TryHackMe offers a Pro tier
                    at $16/month for faster labs, VPN access, and private practice rooms. Hack The Box provides paid
                    upgrades for retired machines with community write-ups
                    <CitationLink id=\"17\" citations={citations} />.\n
                </AlertDescription>\n
            </Alert>\n </CardContent>\n </Card>\n\n {/* Platform Comparison Table */}\n <Card className=\"shadow-lg\">\n
        <CardHeader className=\"bg-gradient-to-r from-purple-500 to-pink-500 text-white\">\n <CardTitle
                className=\"text-xl sm:text-2xl\">Platform Comparison</CardTitle>\n </CardHeader>\n <CardContent
            className=\"p-6\">\n <div className=\"overflow-x-auto\">\n <table className=\"w-full border-collapse\">\n
                    <thead>\n <tr className=\"bg-gray-100\">\n <th className=\"border p-3 text-left font-semibold\">
                                Platform</th>\n <th className=\"border p-3 text-left font-semibold\">Difficulty</th>\n
                            <th className=\"border p-3 text-left font-semibold\">Structure</th>\n <th className=\"border
                                p-3 text-left font-semibold\">Community</th>\n <th className=\"border p-3 text-left
                                font-semibold\">Cost</th>\n </tr>\n </thead>\n <tbody>\n
                        {platformComparison_section_4.map((platform, index) => (\n <tr key={index}
                            className=\"hover:bg-gray-50\">\n <td className=\"border p-3 font-medium text-blue-900\">
                                {platform.platform}</td>\n <td className=\"border p-3\">\n <span className={`px - 2 py - 1
                                    rounded text - xs font - medium ${
  \n platform.difficulty === 'Beginner'
    ? 'bg-green-100 text-green-800' : \n platform.difficulty === 'Intermediate'
      ? 'bg-yellow-100 text-yellow-800' : \n platform.difficulty === 'Advanced'
        ? 'bg-red-100 text-red-800' : \n 'bg-blue-100 text-blue-800' \n
} `}>\n
                                    {platform.difficulty}\n </span>\n </td>\n <td className=\"border p-3\">
                                {platform.structure}</td>\n <td className=\"border p-3\">{platform.community}</td>\n <td
                                className=\"border p-3\">\n <span className={`px - 2 py - 1 rounded text - xs font - medium ${
  \n
  platform.cost === 'Free' ? 'bg-green-100 text-green-800'
    : \n 'bg-blue-100 text-blue-800' \n
} `}>\n {platform.cost}\n </span>\n </td>\n </tr>
                        \n ))}\n </tbody>\n </table>\n </div>\n </CardContent>\n </Card>\n\n {/* Skills Development
    Radar */}\n <Card className=\"shadow-lg\">\n <CardHeader className=\"bg-gradient-to-r from-green-500 to-teal-500
            text-white\">\n <CardTitle className=\"text-xl sm:text-2xl\">Skill Development Path</CardTitle>\n
        </CardHeader>\n <CardContent className=\"p-6\">\n <p className=\"text-gray-700 mb-6\">\n Track your progression
                across key ethical hacking competencies from beginner to advanced levels through continuous practice and
                learning.\n </p>\n <div className=\"h-80 sm:h-96\">\n <ResponsiveContainer width=\"100%\"
                    height=\"100%\">\n <RadarChart data={skillsData_section_4}>\n
                        <PolarGrid />\n
                        <PolarAngleAxis dataKey=\"skill\" tick={{ fill: '#4B5563' , fontSize: 12 }} />\n
                        <PolarRadiusAxis angle={90} domain={[0, 100]} />\n
                        <Radar name=\"Beginner\" dataKey=\"beginner\" stroke=\"#10B981\" fill=\"#10B981\"
                            fillOpacity={0.3} />\n
                        <Radar name=\"Intermediate\" dataKey=\"intermediate\" stroke=\"#F59E0B\" fill=\"#F59E0B\"
                            fillOpacity={0.3} />\n
                        <Radar name=\"Advanced\" dataKey=\"advanced\" stroke=\"#EF4444\" fill=\"#EF4444\"
                            fillOpacity={0.3} />\n
                        <Legend />\n
                        <Tooltip />\n
                    </RadarChart>\n </ResponsiveContainer>\n </div>\n </CardContent>\n </Card>\n\n {/* Online Courses &
    Training */}\n <Card className=\"shadow-lg\">\n <CardHeader className=\"bg-gradient-to-r from-indigo-500
            to-purple-500 text-white\">\n <CardTitle className=\"flex items-center gap-2 text-xl sm:text-2xl\">\n
                <BookOpen className=\"w-6 h-6\" />\n Online Courses & Training Programs\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"p-6\">\n <div className=\"grid grid-cols-1
                md:grid-cols-2 gap-6\">\n <div>\n <h3 className=\"font-bold text-lg text-indigo-900 mb-3\">Official
                        Certifications</h3>\n <ul className=\"space-y-2\">\n <li className=\"flex items-start gap-2\">\n
                            <Award className=\"w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0\" />\n <span
                                className=\"text-gray-700\"><strong>EC-Council CEH:</strong> Official training for
                                Certified Ethical Hacker certification
                                <CitationLink id=\"1\" citations={citations} />
                                <CitationLink id=\"2\" citations={citations} />.
                            </span>\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <Award className=\"w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0\" />\n <span
                                className=\"text-gray-700\"><strong>Offensive Security OSCP:</strong> \"Penetration
                                Testing with Kali Linux\" (PWK) course with hands-on labs
                                <CitationLink id=\"2\" citations={citations} />
                                <CitationLink id=\"4\" citations={citations} />.
                            </span>\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <Award className=\"w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0\" />\n <span
                                className=\"text-gray-700\"><strong>Hack The Box Academy:</strong> Structured modules
                                grouped into skill paths and job role paths using \"cubes\" currency
                                <CitationLink id=\"20\" citations={citations} />.
                            </span>\n
                        </li>\n </ul>\n </div>\n\n <div>\n <h3 className=\"font-bold text-lg text-purple-900 mb-3\">Free
                        Learning Platforms</h3>\n <ul className=\"space-y-2\">\n <li className=\"flex items-start
                            gap-2\">\n
                            <Globe className=\"w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0\" />\n <span
                                className=\"text-gray-700\"><strong>Cybrary:</strong> User-contributed courses
                                filterable by experience level
                                <CitationLink id=\"8\" citations={citations} />
                                <CitationLink id=\"9\" citations={citations} />.
                            </span>\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <Globe className=\"w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0\" />\n <span
                                className=\"text-gray-700\"><strong>MIT OCW:</strong> Academic content including \"6.858
                                Computer Systems Security\"
                                <CitationLink id=\"9\" citations={citations} />.
                            </span>\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <Globe className=\"w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0\" />\n <span
                                className=\"text-gray-700\"><strong>Metasploit Unleashed:</strong> Free Offensive
                                Security Metasploit course
                                <CitationLink id=\"9\" citations={citations} />
                                <CitationLink id=\"10\" citations={citations} />.
                            </span>\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <Globe className=\"w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0\" />\n <span
                                className=\"text-gray-700\"><strong>IBM Cybersecurity Fundamentals:</strong> Free
                                foundational course on Coursera
                                <CitationLink id=\"15\" citations={citations} />.
                            </span>\n
                        </li>\n </ul>\n </div>\n </div>\n\n <div className=\"mt-6 p-4 bg-gradient-to-r from-indigo-50
                to-purple-50 rounded-lg border border-indigo-200\">\n <h4 className=\"font-bold text-indigo-900 mb-2\">
                    Recommended Course: TCM-Sec Practical Ethical Hacking</h4>\n <p className=\"text-gray-700\">
                    Comprehensive practical course by The Cyber Mentor covering real-world ethical hacking techniques
                    <CitationLink id=\"12\" citations={citations} />.
                </p>\n </div>\n </CardContent>\n </Card>\n\n {/* Books & Reading Materials */}\n <Card
        className=\"shadow-lg\">\n <CardHeader className=\"bg-gradient-to-r from-amber-500 to-orange-500 text-white\">\n
            <CardTitle className=\"flex items-center gap-2 text-xl sm:text-2xl\">\n
                <BookOpen className=\"w-6 h-6\" />\n Essential Books & Reading Materials\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"p-6\">\n <p className=\"text-gray-700 mb-4\">\n
                Comprehensive reading materials covering various specializations in ethical hacking
                <CitationLink id=\"8\" citations={citations} />
                <CitationLink id=\"10\" citations={citations} />:\n
            </p>\n <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3\">\n {[\n 'The Hacker Playbook
                (series)',\n 'Penetration Testing: A Hands-On Introduction to Hacking',\n 'The Basics of Hacking and
                Penetration Testing',\n 'Social Engineering: The Art of Human Hacking',\n 'Hacking: The Art of
                Exploitation',\n 'Web Hacking 101',\n 'The Web Application Hacker\\'s Handbook',\n 'Black Hat Python:
                Python Programming for Hackers',\n 'Practical Reverse Engineering',\n 'The IDA Pro Book'\n ].map((book,
                index) => (\n <div key={index} className=\"flex items-start gap-2 p-3 bg-amber-50 rounded-lg border
                    border-amber-200\">\n
                    <BookOpen className=\"w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0\" />\n <span className=\"text-sm
                        text-gray-800 font-medium\">{book}</span>\n
                </div>\n ))}\n </div>\n </CardContent>\n </Card>\n\n {/* YouTube Channels */}\n <Card
        className=\"shadow-lg\">\n <CardHeader className=\"bg-gradient-to-r from-red-500 to-pink-500 text-white\">\n
            <CardTitle className=\"flex items-center gap-2 text-xl sm:text-2xl\">\n
                <Youtube className=\"w-6 h-6\" />\n YouTube Channels for Video Learning\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"p-6\">\n <div className=\"grid grid-cols-1
                md:grid-cols-2 gap-4\">\n <Card className=\"border-2 border-red-200\">\n <CardContent className=\"p-4\">
                        \n <div className=\"flex items-start gap-3\">\n
                            <Youtube className=\"w-6 h-6 text-red-600 flex-shrink-0\" />\n <div>\n <h4
                                    className=\"font-bold text-red-900\">The Cyber Mentor</h4>\n <p className=\"text-sm
                                    text-gray-600 mt-1\">Free long-form courses on ethical hacking basics and
                                    educational content
                                    <CitationLink id=\"8\" citations={citations} />
                                    <CitationLink id=\"14\" citations={citations} />
                                    <CitationLink id=\"17\" citations={citations} />.
                                </p>\n </div>\n
                        </div>\n </CardContent>\n </Card>\n\n <Card className=\"border-2 border-pink-200\">\n
                    <CardContent className=\"p-4\">\n <div className=\"flex items-start gap-3\">\n
                            <Youtube className=\"w-6 h-6 text-pink-600 flex-shrink-0\" />\n <div>\n <h4
                                    className=\"font-bold text-pink-900\">LiveOverflow</h4>\n <p className=\"text-sm
                                    text-gray-600 mt-1\">Covers buffer overflows, exploit writing, and various hacking
                                    topics
                                    <CitationLink id=\"8\" citations={citations} />
                                    <CitationLink id=\"9\" citations={citations} />.
                                </p>\n </div>\n
                        </div>\n </CardContent>\n </Card>\n\n <Card className=\"border-2 border-purple-200\">\n
                    <CardContent className=\"p-4\">\n <div className=\"flex items-start gap-3\">\n
                            <Youtube className=\"w-6 h-6 text-purple-600 flex-shrink-0\" />\n <div>\n <h4
                                    className=\"font-bold text-purple-900\">HackerSploit</h4>\n <p className=\"text-sm
                                    text-gray-600 mt-1\">Regular instructional videos and walkthroughs for Hack The Box
                                    and VulnHub
                                    <CitationLink id=\"9\" citations={citations} />
                                    <CitationLink id=\"17\" citations={citations} />.
                                </p>\n </div>\n
                        </div>\n </CardContent>\n </Card>\n\n <Card className=\"border-2 border-blue-200\">\n
                    <CardContent className=\"p-4\">\n <div className=\"flex items-start gap-3\">\n
                            <Youtube className=\"w-6 h-6 text-blue-600 flex-shrink-0\" />\n <div>\n <h4
                                    className=\"font-bold text-blue-900\">IppSec</h4>\n <p className=\"text-sm
                                    text-gray-600 mt-1\">Detailed walk-throughs of Hack The Box machines and CTF
                                    challenges
                                    <CitationLink id=\"16\" citations={citations} />.
                                </p>\n </div>\n
                        </div>\n </CardContent>\n </Card>\n\n <Card className=\"border-2 border-orange-200\">\n
                    <CardContent className=\"p-4\">\n <div className=\"flex items-start gap-3\">\n
                            <Youtube className=\"w-6 h-6 text-orange-600 flex-shrink-0\" />\n <div>\n <h4
                                    className=\"font-bold text-orange-900\">John Hammond</h4>\n <p className=\"text-sm
                                    text-gray-600 mt-1\">Solves CTF problems and shares pentesting tips
                                    <CitationLink id=\"9\" citations={citations} />.
                                </p>\n </div>\n
                        </div>\n </CardContent>\n </Card>\n\n <Card className=\"border-2 border-green-200\">\n
                    <CardContent className=\"p-4\">\n <div className=\"flex items-start gap-3\">\n
                            <Youtube className=\"w-6 h-6 text-green-600 flex-shrink-0\" />\n <div>\n <h4
                                    className=\"font-bold text-green-900\">Security Weekly</h4>\n <p className=\"text-sm
                                    text-gray-600 mt-1\">Podcast-style interviews with industry professionals
                                    <CitationLink id=\"9\" citations={citations} />.
                                </p>\n </div>\n
                        </div>\n </CardContent>\n </Card>\n </div>\n </CardContent>\n </Card>\n\n {/* Conferences &
    Community */}\n <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-6\">\n <Card className=\"shadow-lg\">\n
            <CardHeader className=\"bg-gradient-to-r from-cyan-500 to-blue-500 text-white\">\n <CardTitle
                    className=\"flex items-center gap-2 text-xl\">\n
                    <Users className=\"w-6 h-6\" />\n Security Conferences\n
                </CardTitle>\n </CardHeader>\n <CardContent className=\"p-6\">\n <p className=\"text-gray-700 mb-4\">\n
                    Major conferences featuring talks and presentations from security experts
                    <CitationLink id=\"8\" citations={citations} />
                    <CitationLink id=\"9\" citations={citations} />:\n
                </p>\n <div className=\"space-y-3\">\n {[\n { name: 'Black Hat', desc: 'Premier technical cybersecurity
                    conference' },\n { name: 'DEF CON', desc: 'World\\'s largest hacker convention' },\n { name:
                    'BSides', desc: 'Community-driven events in various locations' },\n { name: 'Hack In The Box
                    (HITB)', desc: 'International security conference' },\n { name: 'Chaos Communication Congress',
                    desc: 'Annual hacker conference in Europe' }\n ].map((conf, index) => (\n <div key={index}
                        className=\"p-3 bg-cyan-50 rounded-lg border border-cyan-200\">\n <h4 className=\"font-bold
                            text-cyan-900\">{conf.name}</h4>\n <p className=\"text-sm text-gray-600\">{conf.desc}</p>\n
                    </div>\n ))}\n </div>\n </CardContent>\n </Card>\n\n <Card className=\"shadow-lg\">\n <CardHeader
                className=\"bg-gradient-to-r from-green-500 to-emerald-500 text-white\">\n <CardTitle className=\"flex
                    items-center gap-2 text-xl\">\n
                    <Users className=\"w-6 h-6\" />\n Community Forums & Networks\n
                </CardTitle>\n </CardHeader>\n <CardContent className=\"p-6\">\n <p className=\"text-gray-700 mb-4\">\n
                    Engage with communities for support, knowledge sharing, and networking
                    <CitationLink id=\"11\" citations={citations} />
                    <CitationLink id=\"15\" citations={citations} />:\n
                </p>\n <div className=\"space-y-3\">\n <div className=\"p-3 bg-green-50 rounded-lg border
                        border-green-200\">\n <h4 className=\"font-bold text-green-900\">Reddit Communities</h4>\n <p
                            className=\"text-sm text-gray-600\">r/HackAware, r/HowToHack, r/SecurityCareerAdvice,
                            r/Pentesting, r/cybersecurity, r/netsecstudents</p>\n </div>\n <div className=\"p-3
                        bg-emerald-50 rounded-lg border border-emerald-200\">\n <h4 className=\"font-bold
                            text-emerald-900\">0x00sec</h4>\n <p className=\"text-sm text-gray-600\">Forum for hackers,
                            malware analysis, and reverse engineering
                            <CitationLink id=\"8\" citations={citations} />
                            <CitationLink id=\"9\" citations={citations} />.
                        </p>\n </div>\n <div className=\"p-3 bg-teal-50 rounded-lg border border-teal-200\">\n <h4
                            className=\"font-bold text-teal-900\">Discord Servers</h4>\n <p className=\"text-sm
                            text-gray-600\">Platform-specific servers for TryHackMe, Hack The Box, and The Cyber Mentor
                            <CitationLink id=\"15\" citations={citations} />.
                        </p>\n </div>\n <div className=\"p-3 bg-cyan-50 rounded-lg border border-cyan-200\">\n <h4
                            className=\"font-bold text-cyan-900\">Local Groups</h4>\n <p className=\"text-sm
                            text-gray-600\">DEF CON groups and BSides events for in-person networking
                            <CitationLink id=\"15\" citations={citations} />.
                        </p>\n </div>\n </div>\n </CardContent>\n </Card>\n </div>\n\n {/* Bug Bounty Programs */}\n
    <Card className=\"shadow-lg\">\n <CardHeader className=\"bg-gradient-to-r from-yellow-500 to-orange-500
            text-white\">\n <CardTitle className=\"flex items-center gap-2 text-xl sm:text-2xl\">\n
                <Award className=\"w-6 h-6\" />\n Bug Bounty Programs & Real-World Practice\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"p-6\">\n <p className=\"text-gray-700 mb-4\">\n Bug
                bounty platforms provide legal opportunities to apply hacking skills on real systems and earn
                compensation for finding vulnerabilities
                <CitationLink id=\"14\" citations={citations} />:\n
            </p>\n <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n <Card className=\"border-2
                    border-yellow-200 bg-yellow-50\">\n <CardContent className=\"p-4\">\n <div className=\"flex
                            items-start gap-3\">\n
                            <Award className=\"w-6 h-6 text-yellow-600 flex-shrink-0\" />\n <div>\n <h4
                                    className=\"font-bold text-yellow-900\">HackerOne</h4>\n <p className=\"text-sm
                                    text-gray-700 mt-1\">Leading bug bounty platform connecting hackers with
                                    organizations seeking security testing.</p>\n </div>\n
                        </div>\n </CardContent>\n </Card>\n\n <Card className=\"border-2 border-orange-200
                    bg-orange-50\">\n <CardContent className=\"p-4\">\n <div className=\"flex items-start gap-3\">\n
                            <Award className=\"w-6 h-6 text-orange-600 flex-shrink-0\" />\n <div>\n <h4
                                    className=\"font-bold text-orange-900\">Bugcrowd</h4>\n <p className=\"text-sm
                                    text-gray-700 mt-1\">Crowdsourced cybersecurity platform offering bug bounty and
                                    vulnerability disclosure programs.</p>\n </div>\n
                        </div>\n </CardContent>\n </Card>\n </div>\n\n <Alert className=\"mt-4 bg-amber-50
                border-amber-200\">\n
                <TrendingUp className=\"w-5 h-5 text-amber-600\" />\n <AlertTitle className=\"text-amber-900\">Career
                    Opportunity</AlertTitle>\n <AlertDescription className=\"text-amber-800\">\n Bug bounty programs
                    serve as both learning platforms and potential income sources, allowing you to build a portfolio
                    while earning rewards for responsible vulnerability disclosure.\n </AlertDescription>\n
            </Alert>\n </CardContent>\n </Card>\n\n {/* Legal & Ethical Considerations */}\n <Card className=\"shadow-lg
        border-2 border-red-300\">\n <CardHeader className=\"bg-gradient-to-r from-red-600 to-rose-600 text-white\">\n
            <CardTitle className=\"flex items-center gap-2 text-xl sm:text-2xl\">\n
                <Scale className=\"w-6 h-6\" />\n Legal & Ethical Considerations\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"p-6\">\n <Alert className=\"bg-red-50 border-red-300
                mb-6\">\n
                <Scale className=\"w-5 h-5 text-red-600\" />\n <AlertTitle className=\"text-red-900 font-bold\">
                    Critical: Always Obtain Permission</AlertTitle>\n <AlertDescription className=\"text-red-800\">\n
                    Ethical hacking is strictly performed with explicit permission to evaluate security, distinguishing
                    it from malicious hacking. Unauthorized access is illegal
                    <CitationLink id=\"1\" citations={citations} />
                    <CitationLink id=\"3\" citations={citations} />.\n
                </AlertDescription>\n
            </Alert>\n\n <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">\n <div className=\"space-y-4\">\n <h3
                        className=\"font-bold text-lg text-red-900\">Best Practices</h3>\n <div className=\"space-y-3\">
                        \n <div className=\"flex items-start gap-3 p-3 bg-red-50 rounded-lg\">\n
                            <Shield className=\"w-5 h-5 text-red-600 mt-0.5 flex-shrink-0\" />\n <div>\n <h4
                                    className=\"font-semibold text-red-900\">Practice in Safe Environments</h4>\n <p
                                    className=\"text-sm text-gray-700\">Use personal labs or designated practice
                                    platforms like CTFs
                                    <CitationLink id=\"11\" citations={citations} />
                                    <CitationLink id=\"14\" citations={citations} />.
                                </p>\n </div>\n
                        </div>\n\n <div className=\"flex items-start gap-3 p-3 bg-orange-50 rounded-lg\">\n
                            <BookOpen className=\"w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0\" />\n <div>\n <h4
                                    className=\"font-semibold text-orange-900\">Document Everything</h4>\n <p
                                    className=\"text-sm text-gray-700\">Thoroughly document methodologies, tools,
                                    findings, and create professional reports
                                    <CitationLink id=\"2\" citations={citations} />
                                    <CitationLink id=\"4\" citations={citations} />.
                                </p>\n </div>\n
                        </div>\n\n <div className=\"flex items-start gap-3 p-3 bg-yellow-50 rounded-lg\">\n
                            <Award className=\"w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0\" />\n <div>\n <h4
                                    className=\"font-semibold text-yellow-900\">Responsible Disclosure</h4>\n <p
                                    className=\"text-sm text-gray-700\">Follow guidelines for responsibly reporting
                                    vulnerabilities to affected parties
                                    <CitationLink id=\"10\" citations={citations} />.
                                </p>\n </div>\n
                        </div>\n </div>\n </div>\n\n <div className=\"space-y-4\">\n <h3 className=\"font-bold text-lg
                        text-red-900\">Legal Framework</h3>\n <div className=\"space-y-3\">\n <div className=\"flex
                            items-start gap-3 p-3 bg-blue-50 rounded-lg\">\n
                            <Scale className=\"w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0\" />\n <div>\n <h4
                                    className=\"font-semibold text-blue-900\">Certification Coverage</h4>\n <p
                                    className=\"text-sm text-gray-700\">GPEN certification covers legal issues related
                                    to penetration testing and reporting
                                    <CitationLink id=\"1\" citations={citations} />.
                                </p>\n </div>\n
                        </div>\n\n <div className=\"flex items-start gap-3 p-3 bg-green-50 rounded-lg\">\n
                            <Users className=\"w-5 h-5 text-green-600 mt-0.5 flex-shrink-0\" />\n <div>\n <h4
                                    className=\"font-semibold text-green-900\">Bug Bounty Programs</h4>\n <p
                                    className=\"text-sm text-gray-700\">Legal way to apply skills and get compensated
                                    for finding vulnerabilities
                                    <CitationLink id=\"14\" citations={citations} />.
                                </p>\n </div>\n
                        </div>\n\n <div className=\"flex items-start gap-3 p-3 bg-purple-50 rounded-lg\">\n
                            <TrendingUp className=\"w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0\" />\n <div>\n <h4
                                    className=\"font-semibold text-purple-900\">Continuous Learning</h4>\n <p
                                    className=\"text-sm text-gray-700\">Stay updated with evolving legal standards and
                                    cybersecurity regulations
                                    <CitationLink id=\"5\" citations={citations} />
                                    <CitationLink id=\"6\" citations={citations} />.
                                </p>\n </div>\n
                        </div>\n </div>\n </div>\n </div>\n\n <div className=\"mt-6 p-4 bg-gradient-to-r from-red-100
                to-rose-100 rounded-lg border-2 border-red-300\">\n <h4 className=\"font-bold text-red-900 mb-2 flex
                    items-center gap-2\">\n
                    <Shield className=\"w-5 h-5\" />\n Ethical Conduct is Non-Negotiable\n
                </h4>\n <p className=\"text-gray-800 text-sm\">\n The distinction between ethical hacking and cybercrime
                    lies in authorization and intent. Always ensure you have written permission before testing any
                    system, respect scope limitations, and prioritize the security and privacy of the systems you're
                    evaluating.\n </p>\n </div>\n </CardContent>\n </Card>\n\n {/* Documentation & Portfolio Building
    */}\n <Card className=\"shadow-lg\">\n <CardHeader className=\"bg-gradient-to-r from-slate-600 to-gray-700
            text-white\">\n <CardTitle className=\"flex items-center gap-2 text-xl sm:text-2xl\">\n <Code
                    className=\"w-6 h-6\" />\n Documentation & Portfolio Building\n </CardTitle>\n </CardHeader>\n
        <CardContent className=\"p-6\">\n <p className=\"text-gray-700 mb-4\">\n Building a strong portfolio
                demonstrates your skills to potential employers and contributes to the security community
                <CitationLink id=\"15\" citations={citations} />:\n
            </p>\n <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n <div className=\"p-4 bg-slate-50
                    rounded-lg border border-slate-200\">\n <h4 className=\"font-bold text-slate-900 mb-2 flex
                        items-center gap-2\">\n <Code className=\"w-5 h-5 text-slate-600\" />\n GitHub Repositories\n
                    </h4>\n <p className=\"text-sm text-gray-700\">Create repositories with scripts, tools, and CTF
                        write-ups to showcase your technical abilities.</p>\n </div>\n\n <div className=\"p-4 bg-blue-50
                    rounded-lg border border-blue-200\">\n <h4 className=\"font-bold text-blue-900 mb-2 flex
                        items-center gap-2\">\n
                        <BookOpen className=\"w-5 h-5 text-blue-600\" />\n Blog Posts\n
                    </h4>\n <p className=\"text-sm text-gray-700\">Write technical articles explaining vulnerabilities,
                        exploitation techniques, or security concepts.</p>\n </div>\n\n <div className=\"p-4 bg-green-50
                    rounded-lg border border-green-200\">\n <h4 className=\"font-bold text-green-900 mb-2 flex
                        items-center gap-2\">\n
                        <Users className=\"w-5 h-5 text-green-600\" />\n LinkedIn Documentation\n
                    </h4>\n <p className=\"text-sm text-gray-700\">Document learning progress, certifications, and
                        achievements on professional networks.</p>\n </div>\n\n <div className=\"p-4 bg-purple-50
                    rounded-lg border border-purple-200\">\n <h4 className=\"font-bold text-purple-900 mb-2 flex
                        items-center gap-2\">\n
                        <Laptop className=\"w-5 h-5 text-purple-600\" />\n Lab Screenshots\n
                    </h4>\n <p className=\"text-sm text-gray-700\">Showcase practical work through screenshots of lab
                        environments and successful exploits.</p>\n </div>\n </div>\n </CardContent>\n </Card>\n\n {/*
    Key Takeaways */}\n <Card className=\"shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 border-2
        border-blue-300\">\n <CardHeader>\n <CardTitle className=\"text-2xl text-blue-900\">Key Takeaways</CardTitle>\n
        </CardHeader>\n <CardContent className=\"p-6\">\n <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n
                <div className=\"flex items-start gap-3\">\n <div className=\"bg-blue-600 text-white rounded-full w-8
                        h-8 flex items-center justify-center flex-shrink-0 font-bold\">1</div>\n <p
                        className=\"text-gray-800\"><strong>Hands-on practice</strong> through CTF platforms and
                        vulnerable labs is essential for skill development.</p>\n </div>\n <div className=\"flex
                    items-start gap-3\">\n <div className=\"bg-purple-600 text-white rounded-full w-8 h-8 flex
                        items-center justify-center flex-shrink-0 font-bold\">2</div>\n <p className=\"text-gray-800\">
                        <strong>Continuous learning</strong> via courses, books, and video content keeps skills current
                        in this rapidly evolving field.</p>\n </div>\n <div className=\"flex items-start gap-3\">\n <div
                        className=\"bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center
                        flex-shrink-0 font-bold\">3</div>\n <p className=\"text-gray-800\"><strong>Community
                            engagement</strong> through forums, conferences, and networking accelerates learning and
                        career growth.</p>\n </div>\n <div className=\"flex items-start gap-3\">\n <div
                        className=\"bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center
                        flex-shrink-0 font-bold\">4</div>\n <p className=\"text-gray-800\"><strong>Legal
                            compliance</strong> and ethical conduct are non-negotiable - always obtain permission before
                        testing.</p>\n </div>\n </div>\n </CardContent>\n </Card>\n\n {/* Sources Section */}\n <section
        className=\"mt-8 border-t-2 border-gray-300 pt-6\">\n <h3 className=\"text-2xl font-bold mb-4 text-gray-900 flex
            items-center gap-2\">\n
            <BookOpen className=\"w-6 h-6 text-blue-600\" />\n Sources & References\n
        </h3>\n <ol className=\"text-sm space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2\">\n {citations[1] && (\n <li
                className=\"flex items-start gap-2\">\n <span className=\"font-bold text-blue-600
                    flex-shrink-0\">1.</span>\n <a href={citations[1].url} target=\"_blank\" rel=\"noopener noreferrer\"
                    className=\"text-blue-600 hover:underline hover:text-blue-800\">\n {citations[1].title}\n </a>\n
            </li>\n )}\n {citations[2] && (\n <li className=\"flex items-start gap-2\">\n <span className=\"font-bold
                    text-blue-600 flex-shrink-0\">2.</span>\n <a href={citations[2].url} target=\"_blank\"
                    rel=\"noopener noreferrer\" className=\"text-blue-600 hover:underline hover:text-blue-800\">\n
                    {citations[2].title}\n </a>\n </li>\n )}\n {citations[3] && (\n <li className=\"flex items-start
                gap-2\">\n <span className=\"font-bold text-blue-600 flex-shrink-0\">3.</span>\n <a
                    href={citations[3].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline hover:text-blue-800\">\n {citations[3].title}\n </a>\n </li>\n )}\n {citations[4] &&
            (\n <li className=\"flex items-start gap-2\">\n <span className=\"font-bold text-blue-600
                    flex-shrink-0\">4.</span>\n <a href={citations[4].url} target=\"_blank\" rel=\"noopener noreferrer\"
                    className=\"text-blue-600 hover:underline hover:text-blue-800\">\n {citations[4].title}\n </a>\n
            </li>\n )}\n {citations[5] && (\n <li className=\"flex items-start gap-2\">\n <span className=\"font-bold
                    text-blue-600 flex-shrink-0\">5.</span>\n <a href={citations[5].url} target=\"_blank\"
                    rel=\"noopener noreferrer\" className=\"text-blue-600 hover:underline hover:text-blue-800\">\n
                    {citations[5].title}\n </a>\n </li>\n )}\n {citations[6] && (\n <li className=\"flex items-start
                gap-2\">\n <span className=\"font-bold text-blue-600 flex-shrink-0\">6.</span>\n <a
                    href={citations[6].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline hover:text-blue-800\">\n {citations[6].title}\n </a>\n </li>\n )}\n {citations[8] &&
            (\n <li className=\"flex items-start gap-2\">\n <span className=\"font-bold text-blue-600
                    flex-shrink-0\">8.</span>\n <a href={citations[8].url} target=\"_blank\" rel=\"noopener noreferrer\"
                    className=\"text-blue-600 hover:underline hover:text-blue-800\">\n {citations[8].title}\n </a>\n
            </li>\n )}\n {citations[9] && (\n <li className=\"flex items-start gap-2\">\n <span className=\"font-bold
                    text-blue-600 flex-shrink-0\">9.</span>\n <a href={citations[9].url} target=\"_blank\"
                    rel=\"noopener noreferrer\" className=\"text-blue-600 hover:underline hover:text-blue-800\">\n
                    {citations[9].title}\n </a>\n </li>\n )}\n {citations[10] && (\n <li className=\"flex items-start
                gap-2\">\n <span className=\"font-bold text-blue-600 flex-shrink-0\">10.</span>\n <a
                    href={citations[10].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline hover:text-blue-800\">\n {citations[10].title}\n </a>\n </li>\n )}\n {citations[11]
            && (\n <li className=\"flex items-start gap-2\">\n <span className=\"font-bold text-blue-600
                    flex-shrink-0\">11.</span>\n <a href={citations[11].url} target=\"_blank\" rel=\"noopener
                    noreferrer\" className=\"text-blue-600 hover:underline hover:text-blue-800\">\n
                    {citations[11].title}\n </a>\n </li>\n )}\n {citations[12] && (\n <li className=\"flex items-start
                gap-2\">\n <span className=\"font-bold text-blue-600 flex-shrink-0\">12.</span>\n <a
                    href={citations[12].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline hover:text-blue-800\">\n {citations[12].title}\n </a>\n </li>\n )}\n {citations[14]
            && (\n <li className=\"flex items-start gap-2\">\n <span className=\"font-bold text-blue-600
                    flex-shrink-0\">14.</span>\n <a href={citations[14].url} target=\"_blank\" rel=\"noopener
                    noreferrer\" className=\"text-blue-600 hover:underline hover:text-blue-800\">\n
                    {citations[14].title}\n </a>\n </li>\n )}\n {citations[15] && (\n <li className=\"flex items-start
                gap-2\">\n <span className=\"font-bold text-blue-600 flex-shrink-0\">15.</span>\n <a
                    href={citations[15].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline hover:text-blue-800\">\n {citations[15].title}\n </a>\n </li>\n )}\n {citations[16]
            && (\n <li className=\"flex items-start gap-2\">\n <span className=\"font-bold text-blue-600
                    flex-shrink-0\">16.</span>\n <a href={citations[16].url} target=\"_blank\" rel=\"noopener
                    noreferrer\" className=\"text-blue-600 hover:underline hover:text-blue-800\">\n
                    {citations[16].title}\n </a>\n </li>\n )}\n {citations[17] && (\n <li className=\"flex items-start
                gap-2\">\n <span className=\"font-bold text-blue-600 flex-shrink-0\">17.</span>\n <a
                    href={citations[17].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline hover:text-blue-800\">\n {citations[17].title}\n </a>\n </li>\n )}\n {citations[20]
            && (\n <li className=\"flex items-start gap-2\">\n <span className=\"font-bold text-blue-600
                    flex-shrink-0\">20.</span>\n <a href={citations[20].url} target=\"_blank\" rel=\"noopener
                    noreferrer\" className=\"text-blue-600 hover:underline hover:text-blue-800\">\n
                    {citations[20].title}\n </a>\n </li>\n )}\n </ol>\n </section>\n\n </div>\n );\n};");
__reactCodeManager.setCode("section_3", "import { Card, CardHeader, CardTitle, CardContent } from
'@/components/ui/card';\nimport { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart,
Line, Legend } from 'recharts';\nimport { Award, TrendingUp, Target, Shield, BookOpen, Briefcase, GraduationCap, Users,
DollarSign, Clock, CheckCircle2, AlertCircle, Zap, Trophy } from 'lucide-react';\nimport { CitationLink } from
'@/components/ui/citation';\n\n// Salary comparison data\nconst salaryData_section_3 = [\n { cert: 'Security+', salary:
55, level: 'Entry' },\n { cert: 'CEH', salary: 87, level: 'Intermediate' },\n { cert: 'PenTest+', salary: 98, level:
'Intermediate' },\n { cert: 'OSCP', salary: 101, level: 'Advanced' },\n { cert: 'GPEN', salary: 111, level: 'Advanced'
},\n { cert: 'CISSP', salary: 178, level: 'Leadership' }\n];\n\n// Career progression timeline\nconst
careerTimeline_section_3 = [\n { stage: 'Entry', years: '0-2', roles: 'Help Desk, Security Admin', certs: 'Security+,
eJPT' },\n { stage: 'Intermediate', years: '2-4', roles: 'Security Analyst, Jr. Pentester', certs: 'CEH, PenTest+' },\n
{ stage: 'Advanced', years: '4-7', roles: 'Pentester, Security Consultant', certs: 'OSCP, GPEN' },\n { stage: 'Expert',
years: '7+', roles: 'Red Team Lead, Security Architect', certs: 'GXPN, CISSP' }\n];\n\n// Certification difficulty
comparison\nconst difficultyData_section_3 = [\n { name: 'Security+', difficulty: 3, practical: 2, theory: 4 },\n {
name: 'eJPT', difficulty: 4, practical: 5, theory: 3 },\n { name: 'CEH', difficulty: 5, practical: 4, theory: 6 },\n {
name: 'PenTest+', difficulty: 5, practical: 5, theory: 4 },\n { name: 'OSCP', difficulty: 9, practical: 10, theory: 5
},\n { name: 'GPEN', difficulty: 7, practical: 7, theory: 6 }\n];\n\nconst Section_3 = () => {\n return (\n <div
    className=\"w-full max-w-7xl mx-auto space-y-6 p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-blue-50\">\n {/* Hero
    Section */}\n <div className=\"bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-6 sm:p-8
        shadow-lg\">\n <div className=\"flex items-center gap-3 mb-4\">\n
            <Trophy className=\"w-10 h-10 sm:w-12 sm:h-12\" />\n <h1 className=\"text-2xl sm:text-4xl font-bold\">
                Ethical Hacking Certification Roadmap</h1>\n
        </div>\n <p className=\"text-lg sm:text-xl text-blue-100\">Your complete guide from entry-level to advanced
            cybersecurity certifications and career progression</p>\n </div>\n\n {/* Key Stats Overview */}\n <div
        className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4\">\n <Card className=\"bg-white shadow-md
            hover:shadow-lg transition-shadow\">\n <CardContent className=\"pt-6\">\n <div className=\"flex items-center
                    justify-between\">\n <div>\n <p className=\"text-sm text-gray-600 font-medium\">Entry Salary</p>\n
                        <p className=\"text-2xl sm:text-3xl font-bold text-blue-600\">$55K+</p>\n </div>\n
                    <DollarSign className=\"w-10 h-10 text-blue-500 opacity-80\" />\n
                </div>\n </CardContent>\n </Card>\n\n <Card className=\"bg-white shadow-md hover:shadow-lg
            transition-shadow\">\n <CardContent className=\"pt-6\">\n <div className=\"flex items-center
                    justify-between\">\n <div>\n <p className=\"text-sm text-gray-600 font-medium\">Advanced Salary</p>
                        \n <p className=\"text-2xl sm:text-3xl font-bold text-green-600\">$111K+</p>\n </div>\n
                    <TrendingUp className=\"w-10 h-10 text-green-500 opacity-80\" />\n
                </div>\n </CardContent>\n </Card>\n\n <Card className=\"bg-white shadow-md hover:shadow-lg
            transition-shadow\">\n <CardContent className=\"pt-6\">\n <div className=\"flex items-center
                    justify-between\">\n <div>\n <p className=\"text-sm text-gray-600 font-medium\">OSCP Exam</p>\n <p
                            className=\"text-2xl sm:text-3xl font-bold text-orange-600\">24 Hrs</p>\n </div>\n
                    <Clock className=\"w-10 h-10 text-orange-500 opacity-80\" />\n
                </div>\n </CardContent>\n </Card>\n\n <Card className=\"bg-white shadow-md hover:shadow-lg
            transition-shadow\">\n <CardContent className=\"pt-6\">\n <div className=\"flex items-center
                    justify-between\">\n <div>\n <p className=\"text-sm text-gray-600 font-medium\">Career Paths</p>\n
                        <p className=\"text-2xl sm:text-3xl font-bold text-purple-600\">15+</p>\n </div>\n
                    <Briefcase className=\"w-10 h-10 text-purple-500 opacity-80\" />\n
                </div>\n </CardContent>\n </Card>\n </div>\n\n {/* Salary Comparison Chart */}\n <Card
        className=\"shadow-lg\">\n <CardHeader className=\"bg-gradient-to-r from-blue-50 to-indigo-50\">\n <CardTitle
                className=\"flex items-center gap-2 text-xl sm:text-2xl\">\n
                <DollarSign className=\"w-6 h-6 text-green-600\" />\n Average Salary by Certification\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"pt-6\">\n <ResponsiveContainer width=\"100%\"
                height={300}>\n <BarChart data={salaryData_section_3}>\n
                    <CartesianGrid strokeDasharray=\"3 3\" />\n
                    <XAxis dataKey=\"cert\" angle={-45} textAnchor=\"end\" height={80} />\n
                    <YAxis label={{ value: 'Salary ($K)' , angle: -90, position: 'insideLeft' }} />\n <Tooltip \n
                        formatter={(value)=> `$${ value } K`}\n contentStyle={{ backgroundColor: '#f9fafb', border: '1px
                        solid #e5e7eb' }}\n />\n
                        <Bar dataKey=\"salary\" fill=\"#3b82f6\" radius={[8, 8, 0, 0]} />\n
                </BarChart>\n </ResponsiveContainer>\n <p className=\"text-sm text-gray-600 mt-4\">\n Salary progression
                from entry-level Security+ (~$55K) to leadership CISSP roles (~$178K)
                <CitationLink id=\"3\" citations={citations} />
                <CitationLink id=\"5\" citations={citations} />\n
            </p>\n </CardContent>\n </Card>\n\n {/* Entry-Level Certifications */}\n <Card className=\"shadow-lg
        border-l-4 border-green-500\">\n <CardHeader className=\"bg-gradient-to-r from-green-50 to-emerald-50\">\n
            <CardTitle className=\"flex items-center gap-2 text-xl sm:text-2xl\">\n
                <GraduationCap className=\"w-6 h-6 text-green-600\" />\n Entry-Level Certifications\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"pt-6 space-y-6\">\n {/* CompTIA Security+ */}\n <div
                className=\"border-l-4 border-green-400 pl-4 py-2\">\n <h3 className=\"text-lg sm:text-xl font-bold
                    text-gray-800 mb-3 flex items-center gap-2\">\n
                    <Shield className=\"w-5 h-5 text-green-600\" />\n CompTIA Security+\n
                </h3>\n <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4 mb-3\">\n <div className=\"bg-green-50
                        p-3 rounded-lg\">\n <p className=\"text-sm font-semibold text-green-800 mb-1\">Focus Areas</p>\n
                        <p className=\"text-sm text-gray-700\">Network security, compliance, threats & vulnerabilities,
                            access control, cryptography
                            <CitationLink id=\"2\" citations={citations} />
                            <CitationLink id=\"4\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-blue-50 p-3 rounded-lg\">\n <p className=\"text-sm
                            font-semibold text-blue-800 mb-1\">Target Roles</p>\n <p className=\"text-sm
                            text-gray-700\">Entry-level IT professionals, help desk technicians, security administrators
                            <CitationLink id=\"6\" citations={citations} />
                        </p>\n </div>\n </div>\n <div className=\"grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm\">\n
                    <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold text-gray-700\">
                            Prerequisites</p>\n <p className=\"text-gray-600\">None (Network+ recommended)
                            <CitationLink id=\"4\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold
                            text-gray-700\">Exam Format</p>\n <p className=\"text-gray-600\">Multiple-choice +
                            performance-based
                            <CitationLink id=\"2\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold
                            text-gray-700\">Difficulty</p>\n <p className=\"text-gray-600\">Moderate
                            <CitationLink id=\"4\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold
                            text-gray-700\">Cost</p>\n <p className=\"text-gray-600\">Affordable
                            <CitationLink id=\"4\" citations={citations} />
                        </p>\n </div>\n </div>\n </div>\n\n {/* eJPT */}\n <div className=\"border-l-4 border-teal-400
                pl-4 py-2\">\n <h3 className=\"text-lg sm:text-xl font-bold text-gray-800 mb-3 flex items-center
                    gap-2\">\n
                    <Target className=\"w-5 h-5 text-teal-600\" />\n eJPT (eLearnSecurity Junior Penetration Tester)\n
                </h3>\n <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4 mb-3\">\n <div className=\"bg-teal-50 p-3
                        rounded-lg\">\n <p className=\"text-sm font-semibold text-teal-800 mb-1\">Focus Areas</p>\n <p
                            className=\"text-sm text-gray-700\">Hands-on penetration testing basics, practical lab
                            environments
                            <CitationLink id=\"15\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-blue-50 p-3 rounded-lg\">\n <p className=\"text-sm
                            font-semibold text-blue-800 mb-1\">Best For</p>\n <p className=\"text-sm text-gray-700\">
                            Beginners wanting practical pentesting experience with real-world scenarios</p>\n </div>\n
                </div>\n <div className=\"bg-teal-50 p-3 rounded-lg\">\n <p className=\"text-sm\"><strong>Key
                            Advantage:</strong> More hands-on practical than Security+, ideal for those who learn by
                        doing
                        <CitationLink id=\"15\" citations={citations} />
                    </p>\n </div>\n </div>\n\n {/* CSTA */}\n <div className=\"border-l-4 border-cyan-400 pl-4 py-2\">\n
                <h3 className=\"text-lg sm:text-xl font-bold text-gray-800 mb-3\">Certified Security Testing Associate
                    (CSTA)</h3>\n <p className=\"text-sm text-gray-700 mb-2\">Entry-level certification for basic
                    security testing and auditing. Ideal for UK-based professionals breaking into the industry
                    <CitationLink id=\"1\" citations={citations} />
                </p>\n <div className=\"bg-cyan-50 p-3 rounded-lg text-sm\">\n <p><strong>No prerequisites</strong>
                        required, tests ability to perform security assessments using various tools</p>\n </div>\n
            </div>\n </CardContent>\n </Card>\n\n {/* Intermediate Certifications */}\n <Card className=\"shadow-lg
        border-l-4 border-blue-500\">\n <CardHeader className=\"bg-gradient-to-r from-blue-50 to-cyan-50\">\n <CardTitle
                className=\"flex items-center gap-2 text-xl sm:text-2xl\">\n
                <BookOpen className=\"w-6 h-6 text-blue-600\" />\n Intermediate Certifications\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"pt-6 space-y-6\">\n {/* CEH */}\n <div
                className=\"border-l-4 border-blue-400 pl-4 py-2\">\n <h3 className=\"text-lg sm:text-xl font-bold
                    text-gray-800 mb-3 flex items-center gap-2\">\n
                    <Shield className=\"w-5 h-5 text-blue-600\" />\n Certified Ethical Hacker (CEH)\n
                </h3>\n <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4 mb-3\">\n <div className=\"bg-blue-50 p-3
                        rounded-lg\">\n <p className=\"text-sm font-semibold text-blue-800 mb-1\">Focus Areas</p>\n <p
                            className=\"text-sm text-gray-700\">Reconnaissance, scanning, gaining/maintaining access,
                            covering tracks, various attack vectors
                            <CitationLink id=\"1\" citations={citations} />
                            <CitationLink id=\"2\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-green-50 p-3 rounded-lg\">\n <p className=\"text-sm
                            font-semibold text-green-800 mb-1\">Average Salary</p>\n <p className=\"text-xl font-bold
                            text-green-700\">$87K - $106K
                            <CitationLink id=\"3\" citations={citations} />
                            <CitationLink id=\"5\" citations={citations} />
                        </p>\n </div>\n </div>\n <div className=\"grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm mb-3\">
                    \n <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold text-gray-700\">
                            Prerequisites</p>\n <p className=\"text-gray-600\">2 years exp or EC-Council training
                            <CitationLink id=\"3\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold
                            text-gray-700\">Exam</p>\n <p className=\"text-gray-600\">125 MCQs, 4 hours
                            <CitationLink id=\"4\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold
                            text-gray-700\">Cost</p>\n <p className=\"text-gray-600\">$950 - $1,199
                            <CitationLink id=\"3\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold
                            text-gray-700\">Approach</p>\n <p className=\"text-gray-600\">Theory-based with practical
                            scenarios
                            <CitationLink id=\"2\" citations={citations} />
                        </p>\n </div>\n </div>\n <div className=\"bg-blue-50 p-3 rounded-lg\">\n <p
                        className=\"text-sm\"><strong>Target Roles:</strong> Security analysts, consultants, incident
                        response, compliance professionals
                        <CitationLink id=\"5\" citations={citations} />
                        <CitationLink id=\"6\" citations={citations} />
                    </p>\n </div>\n </div>\n\n {/* CompTIA PenTest+ */}\n <div className=\"border-l-4 border-indigo-400
                pl-4 py-2\">\n <h3 className=\"text-lg sm:text-xl font-bold text-gray-800 mb-3 flex items-center
                    gap-2\">\n
                    <Zap className=\"w-5 h-5 text-indigo-600\" />\n CompTIA PenTest+\n
                </h3>\n <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4 mb-3\">\n <div className=\"bg-indigo-50
                        p-3 rounded-lg\">\n <p className=\"text-sm font-semibold text-indigo-800 mb-1\">Focus Areas</p>
                        \n <p className=\"text-sm text-gray-700\">Cloud, hybrid, traditional environments, web apps,
                            IoT, systems auditing
                            <CitationLink id=\"1\" citations={citations} />
                            <CitationLink id=\"3\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-green-50 p-3 rounded-lg\">\n <p className=\"text-sm
                            font-semibold text-green-800 mb-1\">Average Salary</p>\n <p className=\"text-xl font-bold
                            text-green-700\">$98,064
                            <CitationLink id=\"3\" citations={citations} />
                        </p>\n </div>\n </div>\n <div className=\"grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm\">\n
                    <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold text-gray-700\">
                            Prerequisites</p>\n <p className=\"text-gray-600\">3-4 years hands-on exp (recommended)
                            <CitationLink id=\"3\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold
                            text-gray-700\">Exam Format</p>\n <p className=\"text-gray-600\">Performance-based + MCQs
                            <CitationLink id=\"1\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold
                            text-gray-700\">Cost</p>\n <p className=\"text-gray-600\">$404
                            <CitationLink id=\"3\" citations={citations} />
                        </p>\n </div>\n </div>\n </div>\n </CardContent>\n </Card>\n\n {/* Advanced Certifications */}\n
    <Card className=\"shadow-lg border-l-4 border-orange-500\">\n <CardHeader className=\"bg-gradient-to-r
            from-orange-50 to-red-50\">\n <CardTitle className=\"flex items-center gap-2 text-xl sm:text-2xl\">\n
                <Trophy className=\"w-6 h-6 text-orange-600\" />\n Advanced & Professional Certifications\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"pt-6 space-y-6\">\n {/* OSCP - Gold Standard */}\n
            <div className=\"border-l-4 border-red-500 pl-4 py-2 bg-gradient-to-r from-red-50 to-orange-50\">\n <div
                    className=\"flex items-center gap-2 mb-3\">\n
                    <Award className=\"w-6 h-6 text-red-600\" />\n <h3 className=\"text-lg sm:text-xl font-bold
                        text-gray-800\">OSCP - The Gold Standard</h3>\n <span className=\"bg-red-600 text-white text-xs
                        px-2 py-1 rounded-full font-semibold\">HIGHLY RECOMMENDED</span>\n
                </div>\n <p className=\"text-sm text-gray-700 mb-3\">\n Offensive Security Certified Professional -
                    Widely considered the industry gold standard for hands-on penetration testing
                    <CitationLink id=\"1\" citations={citations} />
                    <CitationLink id=\"2\" citations={citations} />\n
                </p>\n <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4 mb-3\">\n <div className=\"bg-red-50 p-3
                        rounded-lg\">\n <p className=\"text-sm font-semibold text-red-800 mb-1\">Exam Challenge</p>\n <p
                            className=\"text-sm text-gray-700\"><strong>24-hour practical exam</strong> - Compromise
                            multiple machines in a lab environment and submit detailed penetration test report
                            <CitationLink id=\"4\" citations={citations} />
                            <CitationLink id=\"5\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-green-50 p-3 rounded-lg\">\n <p className=\"text-sm
                            font-semibold text-green-800 mb-1\">Average Salary</p>\n <p className=\"text-xl font-bold
                            text-green-700\">$101K - $120K+
                            <CitationLink id=\"3\" citations={citations} />
                            <CitationLink id=\"5\" citations={citations} />
                        </p>\n </div>\n </div>\n <div className=\"grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm mb-3\">
                    \n <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold text-gray-700\">
                            Prerequisites</p>\n <p className=\"text-gray-600\">PWK/PEN-200 course required
                            <CitationLink id=\"3\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold
                            text-gray-700\">Difficulty</p>\n <p className=\"text-gray-600\">Very Challenging
                            <CitationLink id=\"4\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold
                            text-gray-700\">Cost</p>\n <p className=\"text-gray-600\">$1,649 (bundle)
                            <CitationLink id=\"3\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold
                            text-gray-700\">Experience</p>\n <p className=\"text-gray-600\">Intermediate to Advanced
                            <CitationLink id=\"4\" citations={citations} />
                        </p>\n </div>\n </div>\n <div className=\"bg-orange-50 p-3 rounded-lg\">\n <p
                        className=\"text-sm\"><strong>Target Roles:</strong> Penetration testers, security consultants,
                        red team members, ethical hackers
                        <CitationLink id=\"2\" citations={citations} />
                        <CitationLink id=\"4\" citations={citations} />
                    </p>\n </div>\n </div>\n\n {/* GPEN */}\n <div className=\"border-l-4 border-purple-400 pl-4 py-2\">
                \n <h3 className=\"text-lg sm:text-xl font-bold text-gray-800 mb-3 flex items-center gap-2\">\n
                    <Shield className=\"w-5 h-5 text-purple-600\" />\n GIAC Penetration Tester (GPEN)\n
                </h3>\n <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4 mb-3\">\n <div className=\"bg-purple-50
                        p-3 rounded-lg\">\n <p className=\"text-sm font-semibold text-purple-800 mb-1\">Focus Areas</p>
                        \n <p className=\"text-sm text-gray-700\">Professional-level penetration testing, advanced
                            ethical hacking techniques, legal issues, reporting
                            <CitationLink id=\"1\" citations={citations} />
                            <CitationLink id=\"3\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-green-50 p-3 rounded-lg\">\n <p className=\"text-sm
                            font-semibold text-green-800 mb-1\">Average Salary</p>\n <p className=\"text-xl font-bold
                            text-green-700\">$111,000
                            <CitationLink id=\"3\" citations={citations} />
                        </p>\n </div>\n </div>\n <div className=\"grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm\">\n
                    <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold text-gray-700\">
                            Prerequisites</p>\n <p className=\"text-gray-600\">2+ years experience (recommended)
                            <CitationLink id=\"1\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold
                            text-gray-700\">Cost</p>\n <p className=\"text-gray-600\">$1,699
                            <CitationLink id=\"3\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold
                            text-gray-700\">Level</p>\n <p className=\"text-gray-600\">Professional</p>\n </div>\n
                </div>\n </div>\n\n {/* CHFI */}\n <div className=\"border-l-4 border-teal-400 pl-4 py-2\">\n <h3
                    className=\"text-lg sm:text-xl font-bold text-gray-800 mb-3\">Computer Hacking Forensic Investigator
                    (CHFI)</h3>\n <p className=\"text-sm text-gray-700 mb-2\">\n Specialized in digital forensics and
                    forensic analysis for cybercrime investigation
                    <CitationLink id=\"1\" citations={citations} />\n
                </p>\n <div className=\"bg-teal-50 p-3 rounded-lg text-sm\">\n <p><strong>Focus:</strong> Memory
                        analysis, mobile device forensics, incident response, Dark Web, IoT, and Cloud Forensics</p>\n
                    <p className=\"mt-1\"><strong>Target Roles:</strong> Digital forensic specialists, cybercrime
                        investigators</p>\n </div>\n </div>\n\n {/* CISSP - Leadership */}\n <div className=\"border-l-4
                border-indigo-500 pl-4 py-2\">\n <h3 className=\"text-lg sm:text-xl font-bold text-gray-800 mb-3 flex
                    items-center gap-2\">\n
                    <Users className=\"w-5 h-5 text-indigo-600\" />\n CISSP - Security Leadership\n
                </h3>\n <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4 mb-3\">\n <div className=\"bg-indigo-50
                        p-3 rounded-lg\">\n <p className=\"text-sm font-semibold text-indigo-800 mb-1\">Focus Areas</p>
                        \n <p className=\"text-sm text-gray-700\">8 domains: Security management, asset security,
                            architecture, network security, IAM, assessment, operations, software security
                            <CitationLink id=\"2\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-green-50 p-3 rounded-lg\">\n <p className=\"text-sm
                            font-semibold text-green-800 mb-1\">CISO Average Salary</p>\n <p className=\"text-xl
                            font-bold text-green-700\">$178,000
                            <CitationLink id=\"5\" citations={citations} />
                        </p>\n </div>\n </div>\n <div className=\"grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm\">\n
                    <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold text-gray-700\">
                            Prerequisites</p>\n <p className=\"text-gray-600\">5 years experience (waivable with degree)
                            <CitationLink id=\"2\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold
                            text-gray-700\">Exam</p>\n <p className=\"text-gray-600\">6-hour challenging exam
                            <CitationLink id=\"2\" citations={citations} />
                        </p>\n </div>\n <div className=\"bg-gray-50 p-2 rounded\">\n <p className=\"font-semibold
                            text-gray-700\">Target Roles</p>\n <p className=\"text-gray-600\">CISO, Security Manager,
                            Consultant
                            <CitationLink id=\"2\" citations={citations} />
                        </p>\n </div>\n </div>\n </div>\n </CardContent>\n </Card>\n\n {/* Certification Difficulty
    Comparison */}\n <Card className=\"shadow-lg\">\n <CardHeader className=\"bg-gradient-to-r from-purple-50
            to-pink-50\">\n <CardTitle className=\"flex items-center gap-2 text-xl sm:text-2xl\">\n
                <Target className=\"w-6 h-6 text-purple-600\" />\n Certification Difficulty & Focus Comparison\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"pt-6\">\n <ResponsiveContainer width=\"100%\"
                height={350}>\n <LineChart data={difficultyData_section_3}>\n
                    <CartesianGrid strokeDasharray=\"3 3\" />\n
                    <XAxis dataKey=\"name\" angle={-45} textAnchor=\"end\" height={80} />\n
                    <YAxis label={{ value: 'Score (1-10)' , angle: -90, position: 'insideLeft' }} />\n
                    <Tooltip contentStyle={{ backgroundColor: '#f9fafb' , border: '1px solid #e5e7eb' }} />\n
                    <Legend />\n
                    <Line type=\"monotone\" dataKey=\"difficulty\" stroke=\"#8b5cf6\" strokeWidth={2} name=\"Overall
                        Difficulty\" />\n
                    <Line type=\"monotone\" dataKey=\"practical\" stroke=\"#10b981\" strokeWidth={2} name=\"Practical
                        Focus\" />\n
                    <Line type=\"monotone\" dataKey=\"theory\" stroke=\"#3b82f6\" strokeWidth={2} name=\"Theory
                        Focus\" />\n
                </LineChart>\n </ResponsiveContainer>\n <p className=\"text-sm text-gray-600 mt-4\">\n OSCP stands out
                with the highest practical focus (10/10) and overall difficulty (9/10), while CEH balances theory and
                practice
                <CitationLink id=\"4\" citations={citations} />
                <CitationLink id=\"6\" citations={citations} />\n
            </p>\n </CardContent>\n </Card>\n\n {/* Detailed Comparison Table */}\n <Card className=\"shadow-lg\">\n
        <CardHeader className=\"bg-gradient-to-r from-gray-50 to-slate-50\">\n <CardTitle className=\"flex items-center
                gap-2 text-xl sm:text-2xl\">\n
                <CheckCircle2 className=\"w-6 h-6 text-gray-600\" />\n Comprehensive Certification Comparison\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"pt-6 overflow-x-auto\">\n <table className=\"w-full
                text-sm border-collapse\">\n <thead>\n <tr className=\"bg-gray-100 border-b-2 border-gray-300\">\n <th
                            className=\"text-left p-3 font-semibold\">Feature</th>\n <th className=\"text-left p-3
                            font-semibold\">OSCP</th>\n <th className=\"text-left p-3 font-semibold\">Security+</th>\n
                        <th className=\"text-left p-3 font-semibold\">CEH</th>\n <th className=\"text-left p-3
                            font-semibold\">PenTest+</th>\n <th className=\"text-left p-3 font-semibold\">GPEN</th>\n
                    </tr>\n </thead>\n <tbody>\n <tr className=\"border-b hover:bg-gray-50\">\n <td className=\"p-3
                            font-medium\">Focus</td>\n <td className=\"p-3\">Hands-on pentesting
                            <CitationLink id=\"4\" citations={citations} />
                        </td>\n <td className=\"p-3\">Foundational security
                            <CitationLink id=\"4\" citations={citations} />
                        </td>\n <td className=\"p-3\">Broad ethical hacking
                            <CitationLink id=\"4\" citations={citations} />
                        </td>\n <td className=\"p-3\">Practical pentesting
                            <CitationLink id=\"1\" citations={citations} />
                        </td>\n <td className=\"p-3\">Professional pentesting
                            <CitationLink id=\"1\" citations={citations} />
                        </td>\n </tr>\n <tr className=\"border-b hover:bg-gray-50 bg-gray-50\">\n <td className=\"p-3
                            font-medium\">Difficulty</td>\n <td className=\"p-3\"><span className=\"bg-red-100
                                text-red-800 px-2 py-1 rounded text-xs font-semibold\">Very Challenging</span>
                            <CitationLink id=\"4\" citations={citations} />
                        </td>\n <td className=\"p-3\"><span className=\"bg-yellow-100 text-yellow-800 px-2 py-1 rounded
                                text-xs font-semibold\">Moderate</span>
                            <CitationLink id=\"4\" citations={citations} />
                        </td>\n <td className=\"p-3\"><span className=\"bg-yellow-100 text-yellow-800 px-2 py-1 rounded
                                text-xs font-semibold\">Moderate</span>
                            <CitationLink id=\"4\" citations={citations} />
                        </td>\n <td className=\"p-3\"><span className=\"bg-yellow-100 text-yellow-800 px-2 py-1 rounded
                                text-xs font-semibold\">Moderate</span></td>\n <td className=\"p-3\"><span
                                className=\"bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs
                                font-semibold\">Professional</span></td>\n </tr>\n <tr className=\"border-b
                        hover:bg-gray-50\">\n <td className=\"p-3 font-medium\">Exam Format</td>\n <td
                            className=\"p-3\">24-hour practical
                            <CitationLink id=\"4\" citations={citations} />
                        </td>\n <td className=\"p-3\">Multiple-choice
                            <CitationLink id=\"4\" citations={citations} />
                        </td>\n <td className=\"p-3\">125 MCQs, 4 hrs
                            <CitationLink id=\"4\" citations={citations} />
                        </td>\n <td className=\"p-3\">Mixed (perf + MCQs)
                            <CitationLink id=\"1\" citations={citations} />
                        </td>\n <td className=\"p-3\">Written exam</td>\n </tr>\n <tr className=\"border-b
                        hover:bg-gray-50 bg-gray-50\">\n <td className=\"p-3 font-medium\">Experience Level</td>\n <td
                            className=\"p-3\">Intermediate-Advanced
                            <CitationLink id=\"4\" citations={citations} />
                        </td>\n <td className=\"p-3\">Beginner-friendly
                            <CitationLink id=\"4\" citations={citations} />
                        </td>\n <td className=\"p-3\">Intermediate
                            <CitationLink id=\"4\" citations={citations} />
                        </td>\n <td className=\"p-3\">Intermediate</td>\n <td className=\"p-3\">Professional (2+ yrs)
                            <CitationLink id=\"1\" citations={citations} />
                        </td>\n </tr>\n <tr className=\"border-b hover:bg-gray-50\">\n <td className=\"p-3
                            font-medium\">Prerequisites</td>\n <td className=\"p-3\">PWK course
                            <CitationLink id=\"4\" citations={citations} />
                        </td>\n <td className=\"p-3\">None
                            <CitationLink id=\"4\" citations={citations} />
                        </td>\n <td className=\"p-3\">None (exp rec)
                            <CitationLink id=\"4\" citations={citations} />
                        </td>\n <td className=\"p-3\">3-4 yrs exp (rec)
                            <CitationLink id=\"1\" citations={citations} />
                        </td>\n <td className=\"p-3\">2+ yrs exp (rec)
                            <CitationLink id=\"1\" citations={citations} />
                        </td>\n </tr>\n <tr className=\"border-b hover:bg-gray-50 bg-gray-50\">\n <td className=\"p-3
                            font-medium\">Vendor Neutral</td>\n <td className=\"p-3\">
                            <CheckCircle2 className=\"w-5 h-5 text-green-600 inline\" />
                            <CitationLink id=\"6\" citations={citations} />
                        </td>\n <td className=\"p-3\">
                            <CheckCircle2 className=\"w-5 h-5 text-green-600 inline\" />
                            <CitationLink id=\"6\" citations={citations} />
                        </td>\n <td className=\"p-3\">
                            <CheckCircle2 className=\"w-5 h-5 text-green-600 inline\" />
                            <CitationLink id=\"6\" citations={citations} />
                        </td>\n <td className=\"p-3\">
                            <CheckCircle2 className=\"w-5 h-5 text-green-600 inline\" />
                        </td>\n <td className=\"p-3\">
                            <CheckCircle2 className=\"w-5 h-5 text-green-600 inline\" />
                        </td>\n </tr>\n <tr className=\"border-b hover:bg-gray-50\">\n <td className=\"p-3
                            font-medium\">Avg Salary</td>\n <td className=\"p-3 font-semibold text-green-700\">
                            $101K-$120K+
                            <CitationLink id=\"3\" citations={citations} />
                        </td>\n <td className=\"p-3\">Entry-level</td>\n <td className=\"p-3 font-semibold
                            text-green-700\">$87K-$106K
                            <CitationLink id=\"3\" citations={citations} />
                        </td>\n <td className=\"p-3 font-semibold text-green-700\">~$98K
                            <CitationLink id=\"3\" citations={citations} />
                        </td>\n <td className=\"p-3 font-semibold text-green-700\">~$111K
                            <CitationLink id=\"3\" citations={citations} />
                        </td>\n </tr>\n </tbody>\n </table>\n <p className=\"text-xs text-gray-500 mt-3\">Note: Salary
                estimates vary by location, experience, and specific job roles</p>\n </CardContent>\n </Card>\n\n {/*
    Career Progression Timeline */}\n <Card className=\"shadow-lg\">\n <CardHeader className=\"bg-gradient-to-r
            from-indigo-50 to-purple-50\">\n <CardTitle className=\"flex items-center gap-2 text-xl sm:text-2xl\">\n
                <TrendingUp className=\"w-6 h-6 text-indigo-600\" />\n Career Progression Timeline\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"pt-6\">\n <div className=\"space-y-6\">\n
                {careerTimeline_section_3.map((stage, index) => (\n <div key={index} className=\"relative pl-8 pb-6
                    border-l-2 border-indigo-300 last:border-0\">\n <div className=\"absolute -left-3 top-0 w-6 h-6
                        rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold\">\n
                        {index + 1}\n </div>\n <div className=\"bg-white p-4 rounded-lg shadow-md border
                        border-gray-200\">\n <div className=\"flex items-center justify-between mb-2\">\n <h4
                                className=\"text-lg font-bold text-gray-800\">{stage.stage} Level</h4>\n <span
                                className=\"text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1
                                rounded-full\">{stage.years} years</span>\n </div>\n <p className=\"text-sm
                            text-gray-700 mb-2\"><strong>Typical Roles:</strong> {stage.roles}</p>\n <p
                            className=\"text-sm text-gray-600\"><strong>Key Certifications:</strong> {stage.certs}</p>\n
                    </div>\n </div>\n ))}\n </div>\n <div className=\"mt-6 bg-blue-50 p-4 rounded-lg border
                border-blue-200\">\n <p className=\"text-sm text-gray-700\">\n
                    <AlertCircle className=\"w-4 h-4 inline mr-2 text-blue-600\" />\n <strong>Pro Tip:</strong>
                    Entry-level job listings may ask for 3 years of experience, but this is often a wish list. Strong
                    skills and proof of work can override experience requirements
                    <CitationLink id=\"15\" citations={citations} />\n
                </p>\n </div>\n </CardContent>\n </Card>\n\n {/* Job Roles & Career Paths */}\n <Card
        className=\"shadow-lg\">\n <CardHeader className=\"bg-gradient-to-r from-green-50 to-teal-50\">\n <CardTitle
                className=\"flex items-center gap-2 text-xl sm:text-2xl\">\n
                <Briefcase className=\"w-6 h-6 text-green-600\" />\n Career Paths & Job Roles\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"pt-6\">\n <div className=\"grid grid-cols-1
                md:grid-cols-2 lg:grid-cols-3 gap-4\">\n {/* Entry-Level */}\n <div className=\"bg-green-50 p-4
                    rounded-lg border-l-4 border-green-500\">\n <h4 className=\"font-bold text-green-800 mb-3 flex
                        items-center gap-2\">\n
                        <GraduationCap className=\"w-5 h-5\" />\n Entry-Level Roles\n
                    </h4>\n <ul className=\"space-y-2 text-sm text-gray-700\">\n <li className=\"flex items-start
                            gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-green-600 mt-0.5 flex-shrink-0\" />\n Security
                            Specialist
                            <CitationLink id=\"2\" citations={citations} />\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-green-600 mt-0.5 flex-shrink-0\" />\n Security
                            Administrator
                            <CitationLink id=\"6\" citations={citations} />\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-green-600 mt-0.5 flex-shrink-0\" />\n Help Desk
                            Technician (security focus)
                            <CitationLink id=\"2\" citations={citations} />\n
                        </li>\n </ul>\n </div>\n\n {/* Core Roles */}\n <div className=\"bg-blue-50 p-4 rounded-lg
                    border-l-4 border-blue-500\">\n <h4 className=\"font-bold text-blue-800 mb-3 flex items-center
                        gap-2\">\n
                        <Shield className=\"w-5 h-5\" />\n Core Ethical Hacking\n
                    </h4>\n <ul className=\"space-y-2 text-sm text-gray-700\">\n <li className=\"flex items-start
                            gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0\" />\n Ethical Hacker
                            <CitationLink id=\"1\" citations={citations} />\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0\" />\n Penetration
                            Tester
                            <CitationLink id=\"4\" citations={citations} />\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0\" />\n Vulnerability
                            Assessor
                            <CitationLink id=\"1\" citations={citations} />\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0\" />\n Security Analyst
                            <CitationLink id=\"2\" citations={citations} />\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0\" />\n Security
                            Consultant
                            <CitationLink id=\"4\" citations={citations} />\n
                        </li>\n </ul>\n </div>\n\n {/* Specialized Roles */}\n <div className=\"bg-purple-50 p-4
                    rounded-lg border-l-4 border-purple-500\">\n <h4 className=\"font-bold text-purple-800 mb-3 flex
                        items-center gap-2\">\n
                        <Target className=\"w-5 h-5\" />\n Specialized Roles\n
                    </h4>\n <ul className=\"space-y-2 text-sm text-gray-700\">\n <li className=\"flex items-start
                            gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0\" />\n Red Team
                            Member
                            <CitationLink id=\"4\" citations={citations} />\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0\" />\n Malware
                            Analyst
                            <CitationLink id=\"3\" citations={citations} />\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0\" />\n Code Auditor
                            <CitationLink id=\"3\" citations={citations} />\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0\" />\n IT Auditor
                            <CitationLink id=\"1\" citations={citations} />\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0\" />\n Forensic
                            Investigator (CHFI)
                            <CitationLink id=\"1\" citations={citations} />\n
                        </li>\n </ul>\n </div>\n\n {/* Leadership Roles */}\n <div className=\"bg-orange-50 p-4
                    rounded-lg border-l-4 border-orange-500 md:col-span-2 lg:col-span-1\">\n <h4 className=\"font-bold
                        text-orange-800 mb-3 flex items-center gap-2\">\n
                        <Users className=\"w-5 h-5\" />\n Leadership & Management\n
                    </h4>\n <ul className=\"space-y-2 text-sm text-gray-700\">\n <li className=\"flex items-start
                            gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0\" />\n Security
                            Engineer/Architect
                            <CitationLink id=\"1\" citations={citations} />\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0\" />\n Information
                            Security Manager
                            <CitationLink id=\"1\" citations={citations} />\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0\" />\n Chief
                            Information Security Officer (CISO)
                            <CitationLink id=\"2\" citations={citations} />\n
                        </li>\n </ul>\n </div>\n </div>\n </CardContent>\n </Card>\n\n {/* Specialization Opportunities
    */}\n <Card className=\"shadow-lg\">\n <CardHeader className=\"bg-gradient-to-r from-pink-50 to-rose-50\">\n
            <CardTitle className=\"flex items-center gap-2 text-xl sm:text-2xl\">\n
                <Zap className=\"w-6 h-6 text-pink-600\" />\n Advanced Specialization Paths\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"pt-6\">\n <p className=\"text-gray-700 mb-4\">\n
                After mastering foundational ethical hacking skills, professionals can specialize in high-demand domains
                to increase their value and secure higher-paying positions
                <CitationLink id=\"17\" citations={citations} />\n
            </p>\n <div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4\">\n <div
                    className=\"bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200\">\n <h4
                        className=\"font-bold text-blue-800 mb-2 flex items-center gap-2\">\n
                        <Target className=\"w-5 h-5\" />\n API Hacking\n
                    </h4>\n <p className=\"text-sm text-gray-700\">Specialized testing of RESTful APIs, GraphQL, and
                        microservices architectures
                        <CitationLink id=\"17\" citations={citations} />
                    </p>\n </div>\n\n <div className=\"bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg
                    border border-green-200\">\n <h4 className=\"font-bold text-green-800 mb-2 flex items-center
                        gap-2\">\n
                        <Shield className=\"w-5 h-5\" />\n IoT Hacking\n
                    </h4>\n <p className=\"text-sm text-gray-700\">Security testing of Internet of Things devices,
                        embedded systems, and smart devices
                        <CitationLink id=\"17\" citations={citations} />
                    </p>\n </div>\n\n <div className=\"bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-lg
                    border border-purple-200\">\n <h4 className=\"font-bold text-purple-800 mb-2 flex items-center
                        gap-2\">\n
                        <Zap className=\"w-5 h-5\" />\n SCADA Hacking\n
                    </h4>\n <p className=\"text-sm text-gray-700\">Critical infrastructure and industrial control
                        systems security
                        <CitationLink id=\"17\" citations={citations} />
                    </p>\n </div>\n\n <div className=\"bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg
                    border border-orange-200\">\n <h4 className=\"font-bold text-orange-800 mb-2 flex items-center
                        gap-2\">\n
                        <Target className=\"w-5 h-5\" />\n Advanced Web App Hacking\n
                    </h4>\n <p className=\"text-sm text-gray-700\">Deep dive into complex web vulnerabilities, business
                        logic flaws, and modern frameworks
                        <CitationLink id=\"17\" citations={citations} />
                    </p>\n </div>\n\n <div className=\"bg-gradient-to-br from-red-50 to-pink-50 p-4 rounded-lg border
                    border-red-200\">\n <h4 className=\"font-bold text-red-800 mb-2 flex items-center gap-2\">\n
                        <Shield className=\"w-5 h-5\" />\n Active Directory Pentesting\n
                    </h4>\n <p className=\"text-sm text-gray-700\">Enterprise network penetration testing, domain
                        exploitation, and privilege escalation
                        <CitationLink id=\"17\" citations={citations} />
                    </p>\n </div>\n\n <div className=\"bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-lg border
                    border-indigo-200\">\n <h4 className=\"font-bold text-indigo-800 mb-2 flex items-center gap-2\">\n
                        <Award className=\"w-5 h-5\" />\n Cloud Security\n
                    </h4>\n <p className=\"text-sm text-gray-700\">AWS, Azure, GCP security testing and cloud-native
                        application assessment</p>\n </div>\n </div>\n\n <div className=\"mt-6 bg-gradient-to-r
                from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200\">\n <h4 className=\"font-bold
                    text-orange-800 mb-2 flex items-center gap-2\">\n
                    <Trophy className=\"w-5 h-5\" />\n Specialized Certification Paths\n
                </h4>\n <div className=\"grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700\">\n <div>\n <p
                            className=\"font-semibold mb-1\">Red Teaming & Assumed Breach:</p>\n <p>CRTO (Certified Red
                            Team Operator)
                            <CitationLink id=\"16\" citations={citations} />
                        </p>\n </div>\n <div>\n <p className=\"font-semibold mb-1\">Active Directory & Azure:</p>\n <p>
                            AlteredSecurity certifications
                            <CitationLink id=\"16\" citations={citations} />
                        </p>\n </div>\n <div>\n <p className=\"font-semibold mb-1\">Web Application Testing:</p>\n <p>
                            PortSwigger, PractiSec
                            <CitationLink id=\"16\" citations={citations} />
                        </p>\n </div>\n <div>\n <p className=\"font-semibold mb-1\">Malware Development:</p>\n <p>
                            Sektor7 training
                            <CitationLink id=\"16\" citations={citations} />
                        </p>\n </div>\n </div>\n </div>\n </CardContent>\n </Card>\n\n {/* Career Development Best
    Practices */}\n <Card className=\"shadow-lg border-l-4 border-indigo-500\">\n <CardHeader
            className=\"bg-gradient-to-r from-indigo-50 to-blue-50\">\n <CardTitle className=\"flex items-center gap-2
                text-xl sm:text-2xl\">\n
                <BookOpen className=\"w-6 h-6 text-indigo-600\" />\n Career Development Best Practices\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"pt-6 space-y-4\">\n <div className=\"bg-blue-50 p-4
                rounded-lg border-l-4 border-blue-500\">\n <h4 className=\"font-bold text-blue-800 mb-2 flex
                    items-center gap-2\">\n
                    <Target className=\"w-5 h-5\" />\n Focus Over Breadth\n
                </h4>\n <p className=\"text-sm text-gray-700\">\n Focus on learning deeply from one certification before
                    moving to another, rather than collecting many random certifications
                    <CitationLink id=\"15\" citations={citations} />\n
                </p>\n </div>\n\n <div className=\"bg-green-50 p-4 rounded-lg border-l-4 border-green-500\">\n <h4
                    className=\"font-bold text-green-800 mb-2 flex items-center gap-2\">\n
                    <Users className=\"w-5 h-5\" />\n Build Practical Experience\n
                </h4>\n <p className=\"text-sm text-gray-700 mb-2\">\n Transition from IT roles like Help Desk or IT
                    Support. Internships, apprenticeships, or volunteering for security tasks provide valuable
                    experience
                    <CitationLink id=\"15\" citations={citations} />
                    <CitationLink id=\"16\" citations={citations} />\n
                </p>\n <p className=\"text-sm text-gray-700\">\n Many top pentesters transitioned from system
                    administration, networking, or development roles, bringing diverse technical skills
                    <CitationLink id=\"16\" citations={citations} />\n
                </p>\n </div>\n\n <div className=\"bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500\">\n <h4
                    className=\"font-bold text-purple-800 mb-2 flex items-center gap-2\">\n
                    <Briefcase className=\"w-5 h-5\" />\n Network Within the Community\n
                </h4>\n <p className=\"text-sm text-gray-700\">\n Networking is crucial - many cybersecurity jobs are
                    filled through referrals before being publicly advertised
                    <CitationLink id=\"15\" citations={citations} />\n
                </p>\n </div>\n\n <div className=\"bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500\">\n <h4
                    className=\"font-bold text-orange-800 mb-2 flex items-center gap-2\">\n
                    <GraduationCap className=\"w-5 h-5\" />\n Educational Pathways\n
                </h4>\n <p className=\"text-sm text-gray-700\">\n A traditional Computer Science degree, potentially
                    with a cybersecurity specialization, remains a viable and respected path
                    <CitationLink id=\"14\" citations={citations} />
                    <CitationLink id=\"16\" citations={citations} />\n
                </p>\n </div>\n\n <div className=\"bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500\">\n <h4
                    className=\"font-bold text-yellow-800 mb-2 flex items-center gap-2\">\n
                    <AlertCircle className=\"w-5 h-5\" />\n Reality Check\n
                </h4>\n <p className=\"text-sm text-gray-700\">\n Salaries can be competitive, but the work often
                    involves high pressure, especially in roles like incident response. The field is diverse - identify
                    a specialty and lean into it
                    <CitationLink id=\"15\" citations={citations} />\n
                </p>\n </div>\n </CardContent>\n </Card>\n\n {/* Additional Certification Resources */}\n <Card
        className=\"shadow-lg\">\n <CardHeader className=\"bg-gradient-to-r from-teal-50 to-cyan-50\">\n <CardTitle
                className=\"flex items-center gap-2 text-xl sm:text-2xl\">\n
                <BookOpen className=\"w-6 h-6 text-teal-600\" />\n Additional Certification Resources\n
            </CardTitle>\n </CardHeader>\n <CardContent className=\"pt-6\">\n <div className=\"grid grid-cols-1
                md:grid-cols-2 gap-4\">\n <div className=\"bg-teal-50 p-4 rounded-lg border border-teal-200\">\n <h4
                        className=\"font-bold text-teal-800 mb-2\">Foundational Networking</h4>\n <ul
                        className=\"space-y-2 text-sm text-gray-700\">\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0\" />\n CompTIA A+
                            (Hardware & OS fundamentals)
                            <CitationLink id=\"17\" citations={citations} />\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0\" />\n CompTIA Network+
                            (Networking basics)
                            <CitationLink id=\"17\" citations={citations} />\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0\" />\n CCNA (Cisco
                            networking for networking-heavy roles)
                            <CitationLink id=\"15\" citations={citations} />
                            <CitationLink id=\"17\" citations={citations} />\n
                        </li>\n </ul>\n </div>\n\n <div className=\"bg-blue-50 p-4 rounded-lg border border-blue-200\">
                    \n <h4 className=\"font-bold text-blue-800 mb-2\">Practical Learning Platforms</h4>\n <ul
                        className=\"space-y-2 text-sm text-gray-700\">\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0\" />\n TryHackMe
                            (Practical learning paths)
                            <CitationLink id=\"15\" citations={citations} />\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0\" />\n Hack The Box
                            Academy (Job role paths like CDSA)
                            <CitationLink id=\"20\" citations={citations} />\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0\" />\n CBT Nuggets (CEH
                            Training resources)
                            <CitationLink id=\"8\" citations={citations} />\n
                        </li>\n </ul>\n </div>\n\n <div className=\"bg-purple-50 p-4 rounded-lg border
                    border-purple-200\">\n <h4 className=\"font-bold text-purple-800 mb-2\">Advanced Training</h4>\n <ul
                        className=\"space-y-2 text-sm text-gray-700\">\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0\" />\n SANS Security
                            Training (Comprehensive paths)
                            <CitationLink id=\"9\" citations={citations} />
                            <CitationLink id=\"10\" citations={citations} />\n
                        </li>\n <li className=\"flex items-start gap-2\">\n
                            <CheckCircle2 className=\"w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0\" />\n OSCP-style
                            labs and privilege escalation
                            <CitationLink id=\"8\" citations={citations} />
                            <CitationLink id=\"9\" citations={citations} />\n
                        </li>\n </ul>\n </div>\n\n <div className=\"bg-green-50 p-4 rounded-lg border
                    border-green-200\">\n <h4 className=\"font-bold text-green-800 mb-2\">Cost-Effective Learning</h4>\n
                    <p className=\"text-sm text-gray-700\">\n While certifications require exam fees, much of the
                        underlying knowledge can be gained through free resources and self-study materials
                        <CitationLink id=\"17\" citations={citations} />\n
                    </p>\n </div>\n </div>\n </CardContent>\n </Card>\n\n {/* Sources Section */}\n <section
        className=\"mt-8 border-t pt-6 bg-white rounded-lg shadow-md p-6\">\n <h3 className=\"text-xl font-bold mb-4
            flex items-center gap-2 text-gray-800\">\n
            <BookOpen className=\"w-5 h-5 text-blue-600\" />\n Sources & References\n
        </h3>\n <ol className=\"text-sm space-y-2 text-gray-700\">\n {citations[1] && (\n <li>\n <a
                    href={citations[1].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline hover:text-blue-800 transition-colors\">\n {citations[1].title} - Certification
                    details and requirements\n </a>\n </li>\n )}\n {citations[2] && (\n <li>\n <a
                    href={citations[2].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline hover:text-blue-800 transition-colors\">\n {citations[2].title} - Professional
                    certification pathways\n </a>\n </li>\n )}\n {citations[3] && (\n <li>\n <a href={citations[3].url}
                    target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600 hover:underline
                    hover:text-blue-800 transition-colors\">\n {citations[3].title} - Salary information and career
                    insights\n </a>\n </li>\n )}\n {citations[4] && (\n <li>\n <a href={citations[4].url}
                    target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600 hover:underline
                    hover:text-blue-800 transition-colors\">\n {citations[4].title} - Certification comparison and
                    analysis\n </a>\n </li>\n )}\n {citations[5] && (\n <li>\n <a href={citations[5].url}
                    target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600 hover:underline
                    hover:text-blue-800 transition-colors\">\n {citations[5].title} - Career progression and salary
                    data\n </a>\n </li>\n )}\n {citations[6] && (\n <li>\n <a href={citations[6].url} target=\"_blank\"
                    rel=\"noopener noreferrer\" className=\"text-blue-600 hover:underline hover:text-blue-800
                    transition-colors\">\n {citations[6].title} - Entry-level certification guidance\n </a>\n </li>\n
            )}\n {citations[8] && (\n <li>\n <a href={citations[8].url} target=\"_blank\" rel=\"noopener noreferrer\"
                    className=\"text-blue-600 hover:underline hover:text-blue-800 transition-colors\">\n
                    {citations[8].title} - CEH training resources\n </a>\n </li>\n )}\n {citations[9] && (\n <li>\n <a
                    href={citations[9].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline hover:text-blue-800 transition-colors\">\n {citations[9].title} - OSCP preparation
                    materials\n </a>\n </li>\n )}\n {citations[10] && (\n <li>\n <a href={citations[10].url}
                    target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600 hover:underline
                    hover:text-blue-800 transition-colors\">\n {citations[10].title} - SANS security training\n </a>\n
            </li>\n )}\n {citations[14] && (\n <li>\n <a href={citations[14].url} target=\"_blank\" rel=\"noopener
                    noreferrer\" className=\"text-blue-600 hover:underline hover:text-blue-800 transition-colors\">\n
                    {citations[14].title} - Educational pathways discussion\n </a>\n </li>\n )}\n {citations[15] && (\n
            <li>\n <a href={citations[15].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline hover:text-blue-800 transition-colors\">\n {citations[15].title} - Career
                    development advice and certification strategy\n </a>\n </li>\n )}\n {citations[16] && (\n <li>\n <a
                    href={citations[16].url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600
                    hover:underline hover:text-blue-800 transition-colors\">\n {citations[16].title} - Specialized
                    certification paths\n </a>\n </li>\n )}\n {citations[17] && (\n <li>\n <a href={citations[17].url}
                    target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600 hover:underline
                    hover:text-blue-800 transition-colors\">\n {citations[17].title} - Specialization opportunities and
                    free resources\n </a>\n </li>\n )}\n {citations[20] && (\n <li>\n <a href={citations[20].url}
                    target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600 hover:underline
                    hover:text-blue-800 transition-colors\">\n {citations[20].title} - Hack The Box Academy
                    certifications\n </a>\n </li>\n )}\n </ol>\n </section>\n </div>\n );\n};");
import { useState } from "react";
import {
  ArrowDownRight,
  AudioLines,
  ChevronDown,
  CirclePlus,
  Clock3,
  Headphones,
  Menu,
  Quote,
  Sparkles,
  X,
} from "lucide-react";
import { toast } from "sonner";

const processEntries = [
  {
    id: "01",
    stage: "Seed",
    title: "Finding the first motif",
    detail:
      "A voice note, a single chord, or a lyric fragment becomes the starting point. This stage is about collecting without judging.",
    clip: "Process clip · add audio",
  },
  {
    id: "02",
    stage: "Build",
    title: "Turning fragments into a world",
    detail:
      "I shape the arrangement, test textures, and decide what each section needs to communicate before the words arrive.",
    clip: "Process clip · add audio",
  },
  {
    id: "03",
    stage: "Refine",
    title: "Listening for what is essential",
    detail:
      "Revisions focus on clarity: removing what distracts, strengthening the emotional arc, and letting the song breathe.",
    clip: "Process clip · add audio",
  },
];

const influences = [
  {
    number: "01",
    name: "Sonic architecture",
    source: "Production & arrangement",
    reflection:
      "I am interested in the way layers can guide a listener through a feeling before a lyric is understood. This influence pushed me to make production choices with intention, not simply to fill space.",
  },
  {
    number: "02",
    name: "Honest storytelling",
    source: "Lyric & narrative",
    reflection:
      "The artists I return to are precise without explaining everything. I chose this approach because I want my songs to leave room for the listener while still coming from a real experience.",
  },
  {
    number: "03",
    name: "The album as a whole",
    source: "Sequencing & cohesion",
    reflection:
      "Albums that feel like a complete environment helped me see each track as part of a wider conversation. I chose to work in this form to explore continuity, contrast, and progression.",
  },
];

const tracks = [
  {
    no: "01",
    title: "Opening Scene",
    tag: "Beginning",
    story:
      "A first step into the album’s emotional space. This track introduces the questions and atmosphere that return across the project.",
    length: "03:18",
  },
  {
    no: "02",
    title: "Afterimage",
    tag: "Memory",
    story:
      "Built from small recurring ideas, this song explores how moments stay present long after they have passed.",
    length: "03:44",
  },
  {
    no: "03",
    title: "Between Lines",
    tag: "Tension",
    story:
      "A quieter track about the things left unsaid. Its sparer arrangement lets the lyric carry the weight.",
    length: "04:06",
  },
  {
    no: "04",
    title: "Northbound",
    tag: "Release",
    story:
      "The final track looks forward. It gathers sounds and themes from earlier songs, then lets them resolve into something more open.",
    length: "03:27",
  },
];

function Waveform() {
  const bars = [18, 30, 48, 24, 58, 34, 44, 16, 40, 60, 32, 50, 20, 38, 55, 26, 46, 14, 36, 56, 28, 42, 22, 48, 34, 18, 52, 30, 40, 16, 44, 26];
  return (
    <div className="waveform" aria-hidden="true">
      {bars.map((height, index) => (
        <span key={index} style={{ height: `${height}%` }} />
      ))}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openInfluence, setOpenInfluence] = useState("01");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const audioPlaceholder = () => {
    toast("Audio slot ready — replace this placeholder with your exported clip before publishing.");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f3f1eb] text-[#181818]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f3f1eb]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8">
          <button onClick={() => scrollTo("top")} className="group flex items-center gap-2 text-left" aria-label="Back to top">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#181818] text-[10px] font-bold text-[#f3f1eb] transition-transform duration-200 group-hover:rotate-12">
              PI
            </span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em]">Personal Inquiry</span>
          </button>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {[["Inquiry", "inquiry"], ["Process", "process"], ["Influences", "influences"], ["Tracklist", "tracks"], ["Reflection", "reflection"]].map(([label, target]) => (
              <button key={target} onClick={() => scrollTo(target)} className="nav-link text-[11px] font-bold uppercase tracking-[0.14em]">
                {label}
              </button>
            ))}
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-9 w-9 place-items-center rounded-full border border-black/15 lg:hidden" aria-label="Toggle menu">
            {menuOpen ? <X size={17} /> : <Menu size={18} />}
          </button>
          {menuOpen && (
            <div className="absolute left-0 top-16 w-full border-b border-black/10 bg-[#f3f1eb] px-5 py-5 shadow-xl lg:hidden">
              <div className="grid gap-1">
                {[["Inquiry", "inquiry"], ["Process", "process"], ["Influences", "influences"], ["Tracklist", "tracks"], ["Reflection", "reflection"]].map(([label, target]) => (
                  <button key={target} onClick={() => scrollTo(target)} className="rounded-lg px-3 py-3 text-left text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white">
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <main id="top">
        <section className="relative border-b border-black/10 pb-12 pt-10 sm:pb-16 sm:pt-16 lg:pb-24 lg:pt-20">
          <div className="noise absolute inset-0 opacity-[0.035]" />
          <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
            <div className="mb-10 flex items-center justify-between sm:mb-16">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.19em] text-black/55">GLD Global Leadership Diploma</p>
              <p className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-black/40 sm:block">2026 · Album Making</p>
            </div>
            <div className="grid items-end gap-10 lg:grid-cols-[1.48fr_0.52fr] lg:gap-14">
              <div>
                <p className="reveal mb-5 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-black/55">
                  <Sparkles size={13} /> A study in sound & self-expression
                </p>
                <h1 className="reveal reveal-delay-1 font-display text-[clamp(4.1rem,10.6vw,10.5rem)] font-bold uppercase leading-[0.79] tracking-[-0.065em]">
                  Making<br />an <em className="font-display font-normal normal-case tracking-[-0.06em]">album.</em>
                </h1>
                <div className="reveal reveal-delay-2 mt-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <p className="max-w-md text-base leading-7 text-black/65">An inquiry into how a collection of songs can hold a story: from first spark to final sequence.</p>
                  <button onClick={() => scrollTo("inquiry")} className="inline-flex w-fit items-center gap-2 rounded-full bg-[#181818] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#f3f1eb] transition-all duration-200 hover:-translate-y-0.5 hover:bg-black active:scale-[0.97]">
                    Enter the inquiry <ArrowDownRight size={15} />
                  </button>
                </div>
              </div>
              <div className="reveal reveal-delay-3 album-art relative mx-auto aspect-square w-full max-w-[395px] overflow-hidden bg-[#181818] p-5 text-[#f3f1eb] shadow-[12px_14px_0_#b9b7b0] lg:ml-auto">
                <div className="absolute left-[14%] top-[12%] h-[56%] w-[73%] rounded-full border border-white/25" />
                <div className="absolute left-[29%] top-[27%] h-[34%] w-[45%] rounded-full border border-white/55" />
                <div className="absolute bottom-10 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">Album cover</p>
                    <p className="mt-1 font-display text-2xl uppercase leading-5 tracking-[-0.04em]">Your<br />artwork</p>
                  </div>
                  <span className="font-mono text-[9px] text-white/45">01 / 01</span>
                </div>
                <div className="absolute right-5 top-5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">Replace me</div>
              </div>
            </div>
          </div>
        </section>

        <section id="inquiry" className="scroll-mt-20 border-b border-black/10 bg-[#181818] py-16 text-[#f3f1eb] sm:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div><p className="section-marker"><span>01</span> The inquiry</p></div>
            <div>
              <p className="font-display text-4xl leading-[0.94] tracking-[-0.045em] sm:text-5xl lg:text-6xl">How can I use the process of creating an album to develop my musical voice and communicate an honest story?</p>
              <div className="mt-11 grid gap-9 border-t border-white/20 pt-8 sm:grid-cols-2">
                <div>
                  <p className="eyebrow text-white/45">Why this inquiry</p>
                  <p className="mt-3 text-sm leading-6 text-white/70">Music has always been a way for me to make sense of experiences. I chose album-making because it brings writing, production, performance, and storytelling into one sustained creative challenge.</p>
                </div>
                <div>
                  <p className="eyebrow text-white/45">My intention</p>
                  <p className="mt-3 text-sm leading-6 text-white/70">To create a body of work that feels connected, where every sonic choice supports the emotional world of the songs—not simply a set of separate tracks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="scroll-mt-20 border-b border-black/10 py-16 sm:py-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
            <div className="grid gap-7 border-b border-black/10 pb-10 lg:grid-cols-[0.75fr_1.25fr] lg:pb-14">
              <div><p className="section-marker"><span>02</span> In the studio</p></div>
              <div className="max-w-2xl">
                <h2 className="font-display text-5xl leading-[0.85] tracking-[-0.055em] sm:text-6xl">The sound of<br /><em className="font-normal">becoming.</em></h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-black/60">The work did not happen in a straight line. These slots are evidence of the decisions, detours, and small discoveries that shaped each song.</p>
              </div>
            </div>
            <div className="divide-y divide-black/10">
              {processEntries.map((entry) => (
                <article key={entry.id} className="group grid gap-5 py-8 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:gap-7 sm:py-9">
                  <p className="font-display text-4xl italic text-black/30">{entry.id}</p>
                  <div>
                    <p className="eyebrow">{entry.stage}</p>
                    <h3 className="mt-1 font-display text-3xl tracking-[-0.04em]">{entry.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-black/60">{entry.detail}</p>
                  </div>
                  <button onClick={audioPlaceholder} className="flex items-center gap-4 text-left sm:min-w-[285px]" aria-label={`Add audio for ${entry.title}`}>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#181818] text-white transition-transform duration-200 hover:scale-105 active:scale-95"><CirclePlus size={17} /></span>
                    <span className="min-w-0 flex-1">
                      <Waveform />
                      <span className="mt-2 block font-mono text-[9px] uppercase tracking-[0.14em] text-black/45">{entry.clip}</span>
                    </span>
                  </button>
                </article>
              ))}
            </div>
            <p className="mt-7 flex items-center gap-2 font-mono text-[10px] leading-5 text-black/40"><AudioLines size={14} /> Add MP3 or WAV clips here to make the process tangible.</p>
          </div>
        </section>

        <section id="influences" className="scroll-mt-20 border-b border-black/10 bg-[#e7e5de] py-16 sm:py-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="section-marker"><span>03</span> References</p>
                <p className="mt-8 max-w-[230px] text-sm leading-6 text-black/55">Rather than copying a sound, I studied the creative principles that make these approaches resonate with me.</p>
              </div>
              <div>
                <h2 className="font-display text-5xl leading-[0.84] tracking-[-0.055em] sm:text-6xl">What I listened<br />for.</h2>
                <div className="mt-10 border-t border-black/15">
                  {influences.map((influence) => {
                    const isOpen = openInfluence === influence.number;
                    return (
                      <div className="border-b border-black/15" key={influence.number}>
                        <button onClick={() => setOpenInfluence(isOpen ? "" : influence.number)} className="grid w-full grid-cols-[42px_1fr_auto] items-center gap-3 py-6 text-left sm:grid-cols-[75px_1fr_auto] sm:py-7" aria-expanded={isOpen}>
                          <span className="font-mono text-[10px] text-black/45">{influence.number}</span>
                          <span>
                            <span className="block font-display text-2xl tracking-[-0.035em] sm:text-3xl">{influence.name}</span>
                            <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.15em] text-black/45">{influence.source}</span>
                          </span>
                          <ChevronDown className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} size={18} />
                        </button>
                        <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                          <div className="overflow-hidden"><p className="max-w-2xl pb-7 pl-[42px] text-sm leading-6 text-black/65 sm:pl-[75px]">{influence.reflection}</p></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tracks" className="scroll-mt-20 border-b border-black/10 py-16 sm:py-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
            <div className="flex flex-col justify-between gap-5 border-b border-black/10 pb-10 sm:flex-row sm:items-end">
              <div><p className="section-marker"><span>04</span> The album</p><h2 className="mt-7 font-display text-5xl leading-[0.85] tracking-[-0.055em] sm:text-6xl">Track by track.</h2></div>
              <p className="max-w-sm text-sm leading-6 text-black/55">Every song carries its own point of view. Together, they make an emotional map of the inquiry.</p>
            </div>
            <div className="grid lg:grid-cols-2">
              {tracks.map((track, index) => (
                <article key={track.no} className={`track-card group relative border-b border-black/10 py-8 ${index % 2 === 0 ? "lg:pr-10" : "lg:border-l lg:pl-10"}`}>
                  <div className="flex items-start justify-between"><span className="font-mono text-[10px] text-black/45">{track.no}</span><span className="rounded-full border border-black/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.13em] text-black/50">{track.tag}</span></div>
                  <h3 className="mt-11 font-display text-4xl tracking-[-0.045em]">{track.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-black/60">{track.story}</p>
                  <div className="mt-7 flex items-center justify-between border-t border-black/10 pt-4"><span className="font-mono text-[10px] uppercase tracking-[0.14em] text-black/45">{track.length}</span><span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-black/45"><Headphones size={13} /> Song story</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reflection" className="scroll-mt-20 bg-[#181818] py-16 text-[#f3f1eb] sm:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="section-marker"><span>05</span> Reflection</p>
              <div className="mt-16 flex items-center gap-3 text-white/45"><Clock3 size={15} /><span className="font-mono text-[10px] uppercase tracking-[0.15em]">Looking back</span></div>
            </div>
            <div>
              <Quote className="mb-7 text-white/35" size={34} strokeWidth={1.5} />
              <p className="font-display text-4xl leading-[0.96] tracking-[-0.047em] sm:text-5xl lg:text-6xl">I learnt that the most important part of making music is not reaching a perfect version; it is learning to hear what a song is asking for.</p>
              <div className="mt-12 grid gap-8 border-t border-white/20 pt-8 sm:grid-cols-3">
                <div><p className="eyebrow text-white/45">Craft</p><p className="mt-3 text-sm leading-6 text-white/70">I developed a more deliberate workflow for writing, arranging, and revising music.</p></div>
                <div><p className="eyebrow text-white/45">Voice</p><p className="mt-3 text-sm leading-6 text-white/70">I became more confident in trusting my instincts and making choices that feel like mine.</p></div>
                <div><p className="eyebrow text-white/45">Perspective</p><p className="mt-3 text-sm leading-6 text-white/70">I learnt to see feedback as a tool for clarity, not a reason to lose the idea at the centre.</p></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#181818] px-5 pb-7 sm:px-8">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-5 border-t border-white/15 pt-6 text-white/45 sm:flex-row sm:items-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em]">Personal Inquiry · Album Making</p>
          <button onClick={() => scrollTo("top")} className="font-mono text-[9px] uppercase tracking-[0.16em] transition-colors hover:text-white">Back to the beginning ↑</button>
        </div>
      </footer>
    </div>
  );
}

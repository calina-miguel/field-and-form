"use client";

import { useState } from "react";

const questions = [
  { label: "A MOMENT TO NOTICE", title: "Where would a little more ease help?", options: ["More balanced mornings", "A steadier afternoon", "A calmer evening"] },
  { label: "A CHOICE TO EXPLORE", title: "What kind of guide feels useful?", options: ["A simple meal rhythm", "A pantry refresh", "Small daily rituals"] },
  { label: "A NOTE TO KEEP", title: "How much structure suits you?", options: ["A few flexible ideas", "A clear weekly outline", "A short list to revisit"] },
];
const results = [
  ["The Morning Field Note", "Start with a small breakfast rhythm: pair a familiar staple with one source of protein, prep one flexible option, and keep the routine easy to adjust."],
  ["The Pantry Field Note", "Build a short pantry list around ingredients you already enjoy. Choose one versatile base, one bright addition, and one easy backup for busy days."],
  ["The Everyday Field Note", "Anchor a routine to a moment that already happens. A glass of water, a short walk, or a prepared snack can make a gentle and realistic starting point."],
];

export function Pathway() {
  const [step, setStep] = useState(0); const [answers, setAnswers] = useState<number[]>([]); const [result, setResult] = useState(false);
  const choose = (i: number) => setAnswers((old) => { const next = old.slice(0, step); next[step] = i; return next; });
  return <div className="pathway pathway--field" id="field-pathway" aria-live="polite">
    <div className="pathway__folio"><span>FIELD NOTE / VOL. 01</span><b>{result ? "A NOTE FOR YOU" : `PAGE 0${step + 1} OF 03`}</b></div>
    {result ? <div className="pathway__result"><span className="pathway__result-mark">✳</span><p className="pathway__eyebrow">A SMALL PLACE TO BEGIN</p><h3>{results[answers[0] ?? 0][0]}</h3><p>{results[answers[0] ?? 0][1]}</p><div className="pathway__notice">Your guide is ready here. Email delivery is paused until sender-domain setup is complete.</div><button className="pathway__reset" onClick={() => { setStep(0); setAnswers([]); setResult(false); }}>Make another note ↗</button></div> : <>
      <div className="pathway__progress"><i style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div><p className="pathway__eyebrow">{questions[step].label}</p><h3>{questions[step].title}</h3>
      <div className="pathway__choices">{questions[step].options.map((option, i) => <button key={option} onClick={() => choose(i)} className={answers[step] === i ? "is-picked" : ""} aria-pressed={answers[step] === i}><span>{String.fromCharCode(65 + i)}</span>{option}<b>+</b></button>)}</div>
      <div className="pathway__controls"><button onClick={() => step ? setStep(step - 1) : undefined} disabled={!step}>Previous</button><button onClick={() => step < 2 ? setStep(step + 1) : setResult(true)} disabled={answers[step] === undefined}>{step === 2 ? "Reveal my field note" : "Next prompt"} <span>↗</span></button></div>
    </>}
  </div>;
}

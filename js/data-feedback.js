/* 2024 examiner feedback — distilled into a structured tab */
window.FEEDBACK_2024 = {
  hero: {
    kr: {
      eyebrow: "2024 시험 채점자 피드백",
      lede: "채점자가 직접 명시한 HD vs D의 분기점. \"contentious issue 식별 + 집중\"이 단일 핵심.",
      quote: "학생들은 contentious issue에 집중하라는 메시지를 받았음에도 명백한 issue에 시간을 낭비했다 — 이는 지속적인 문제였다.",
    },
    en: {
      eyebrow: "Examiner feedback (2024)",
      lede: "Where the examiner drew the line between HD and D. The single rule: identify contentious issues and put your time there.",
      quote: "Despite the emphasis given in class to the importance of focusing on contentious issues, many students wasted time on issues that were straightforward. This was a persistent problem.",
    }
  },

  // 4-step answer structure
  fourStep: {
    kr: { h: "답안 4단계", items: [
      "Contentious issue 식별",
      "조항 + 사실 맥락에서 어떻게 적용되어야 하는지 ARGUE",
      "케이스와의 analogy / distinguishing",
      "결론 + 각 ground의 strength 평가 (likely / arguable / unlikely)",
    ]},
    en: { h: "Answer in four moves", items: [
      "Identify the contentious issue",
      "Argue how the statute applies on these facts",
      "Draw analogies / distinctions from cases",
      "State a conclusion + rate the strength (likely / arguable / unlikely)",
    ]}
  },

  // What examiner explicitly said NOT to do
  donts: {
    kr: { h: "절대 하지 말 것", items: [
      ["Standing/jurisdiction이 명백한데 길게 분석", "1–2 문장으로 처리"],
      ["ADJR 모든 요소를 명백한 사안에 다 다룸", "충족이 자명하면 생략"],
      ["State JR에서 ADJR / s 39B 적용 주장", "State는 SC supervisory(보통법)만"],
      ["State JR에서 certiorari를 ancillary처럼 처리", "State는 JE OR error of law on face of record"],
      ["Tickner의 \"active intellectual process\"를 기본 표준으로", "M1/2021의 \"read·identify·understand·evaluate\"가 우선"],
      ["약한 argument를 강한 것처럼 confidence있게 제시", "조건부 + strength 명시"],
      ["Argument question을 케이스 요약으로 채우기", "Thesis 먼저, 케이스는 evidence"],
    ]},
    en: { h: "Do not", items: [
      ["Drag out standing/jurisdiction when obvious", "One or two sentences"],
      ["Walk every ADJR element when satisfaction is plain", "Skip the obvious limbs"],
      ["Apply ADJR / s 39B to a State decision", "State is SC supervisory (common law) only"],
      ["Treat certiorari as ancillary in State JR", "State: JE or error of law on the face of the record"],
      ["Use Tickner's \"active intellectual process\" as the test", "M1/2021 — read, identify, understand, evaluate"],
      ["Present weak grounds with the same confidence as strong", "Frame as conditional + label strength"],
      ["Fill an argument question with case summaries", "Thesis first, cases as evidence"],
    ]}
  },

  // Materiality varies by ground — feedback's most actionable correction
  materiality: {
    kr: { h: "Materiality는 사유별로 다르다", rows: [
      ["PF — inherently unfair procedure", "Nathanson 매우 낮은 bar — \"possibility of different outcome\"으로 충분"],
      ["Considerations", "Hossain 표준 — \"could have been different\""],
      ["Reasonableness", "Ground 자체에 내장 — 별도 분석 보통 불필요"],
      ["No breach 자체", "침해 없으면 materiality 무관 — \"no further question arises\""],
    ]},
    en: { h: "Materiality varies by ground", rows: [
      ["PF — procedure inherently unfair", "Nathanson — very low bar; possibility of different outcome suffices"],
      ["Relevant considerations", "Hossain — \"could have been different\""],
      ["Reasonableness", "Built into the ground; separate materiality usually unnecessary"],
      ["No breach at all", "Materiality is irrelevant — \"no further question arises\""],
    ]}
  },

  // Privative clause wording (Kirk)
  privative: {
    kr: { h: "Privative clause — wording 우선", rows: [
      ["\"decisions made under the Act\"", "JE 결정 = 결정 아님 → clause 무력 (S157 narrow read)"],
      ["\"made or purported to be made under the Act\"", "Kirk 직접 위반 → clause 자체가 invalid"],
    ], note: "Step: narrow-read 시도 → 'purported' 같은 expansion 확인 → 있으면 clause invalid → 본안 답이 그대로 유지"},
    en: { h: "Privative clauses — start with the wording", rows: [
      ["\"decisions made under the Act\"", "JE decision is no decision → clause neutered (S157 narrow read)"],
      ["\"made or purported to be made under the Act\"", "Direct contravention of Kirk → clause itself invalid"],
    ], note: "Sequence: try narrow read → check for 'purported' style expansion → if present, clause invalid → underlying answer unchanged"}
  },

  // Case-ratio updates
  caseUpdates: {
    kr: { h: "케이스 ratio 업데이트", rows: [
      ["Plaintiff M1/2021", "Tickner 대체. \"read · identify · understand · evaluate\" 4단계가 표준"],
      ["Tickner v Chapman", "\"Active intellectual process\"는 HCA가 후퇴 — 보조 표현으로만"],
      ["Nathanson", "PF에서 inherently unfair procedure이면 materiality bar 매우 낮음"],
      ["Stretton", "Substantive vs procedural reasonableness — substantive는 austere"],
      ["DUA16", "Li의 austerity 후퇴를 부분적으로 다시 austere로"],
      ["Argos", "RTL의 \"statutory context\" 해석을 거부 — standing 재해석의 키"],
      ["Kirk", "'purported to be made' clause = direct contravention → clause invalid"],
      ["VEAL", "정보 의존 부인이 relevance / significance 부정 못 함"],
    ]},
    en: { h: "Case takeaway updates", rows: [
      ["Plaintiff M1/2021", "Replaces Tickner. Standard is \"read · identify · understand · evaluate\""],
      ["Tickner v Chapman", "HCA cooled on \"active intellectual process\" — keep it secondary"],
      ["Nathanson", "Where the procedure is inherently unfair, materiality bar is very low"],
      ["Stretton", "Distinguishes substantive vs procedural reasonableness — substantive is austere"],
      ["DUA16", "Reverts to a more austere standard, partially undoing Li"],
      ["Argos", "Rejects the RTL \"statutory context\" reading — pivot for re-reading standing"],
      ["Kirk", "A 'purported to be made' clause directly contravenes Kirk → clause invalid"],
      ["VEAL", "Disavowal of reliance does not negate relevance / significance"],
    ]}
  },

  // 3 PF lines worked example
  threeLines: {
    kr: { h: "PF 3-line 식별 예시 (2024 Q(i))", lines: [
      { t: "Line 1 — 결정자 변경 (D1 → D2)", b: "WZARH/MZAPC 적용 시도. Lily는 written submission만 했으므로 practical injustice 약함. → 약한 argument; \"no further materiality\"" },
      { t: "Line 2 — Legitimate expectation 미충족", b: "WZARH: LE 위반 자체는 breach 아님. 부모 의견 이미 반영됨. → 약함; \"more information necessary\"로 조건부 처리" },
      { t: "Line 3 — Adverse info 미공개 (성희롱 의혹)", b: "VEAL 직접 적용. Relevant + credible + significant. → 가장 강한 argument; Nathanson으로 materiality 낮은 bar" },
    ]},
    en: { h: "Three PF lines, worked (2024 Q(i))", lines: [
      { t: "Line 1 — change of decision-maker (D1 → D2)", b: "Try WZARH/MZAPC. Lily filed only a written submission → practical injustice weak. Weak argument; no further materiality." },
      { t: "Line 2 — unmet legitimate expectation (parents)", b: "WZARH: breach of LE alone isn't breach. Parents' views were heard. Weak; frame as conditional — \"more information necessary\"." },
      { t: "Line 3 — undisclosed adverse info (allegations)", b: "VEAL squarely. Relevant + credible + significant. Strongest line; cite Nathanson for the low materiality bar." },
    ]}
  },

  // The single mantra
  mantra: {
    kr: ["Contentious issue를 식별한다 (시간의 70%)", "단순 적용이 아닌 persuasive argument를 만든다", "케이스와의 analogy / distinction을 명시한다"],
    en: ["Identify the contentious issue (70% of the time)", "Build a persuasive argument, not a recitation", "Name the analogy or distinction to a case"],
  }
};

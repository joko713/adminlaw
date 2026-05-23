// Final-exam preparation data — patterns, IF/THEN trees, criteria, mock plan, pairings, missing cases
// Layered on top of CASES_DATA / WEEKS_DATA without rewriting them.

window.EXAM_DATA = {
  // ── 1. Exam structure pattern (2020 → 2023) ───────────────────────────────
  format: {
    kr: { eyebrow: '시험 구조', title: '문제 출제 패턴',
      lede: '4년치 시험을 분석하면 Part A는 항상 가짜 statute가 주어지는 problem question, Part B는 doctrinal argument essay다. Statute에는 5가지 트리거가 매번 등장한다.',
      cols: [
        { y:'2020', a:'Problem\n(60)', b:'—', n:'4 sub-Q' },
        { y:'2021', a:'60% Problem · 150 min', b:'40% — 2 essays', n:'1 + 2' },
        { y:'2022', a:'50% Problem A · 180 min', b:'50% Problem B', n:'2 problems · 6 sub' },
        { y:'2023', a:'60% — 3 sub-Q · 150 min', b:'40% — 2 essays', n:'3 + 2' },
        { y:'2026', a:'(확정) 60% Problem · 3 sub-Q · 3-hour exam + reading time · W1–W12 전부 examinable', b:'(확정) 40% — 3 argumentative questions: 1 × 20 marks + 2 × 10 marks', n:'3 + 3' },
      ],
      triggers: [
        { t:'"may" / "if satisfied" / "in the public interest"', why:'재량권 trigger — Wednesbury / Li / SZMDS 분석' },
        { t:'Mandatory considerations 3개', why:'Peko-Wallsend trigger — lip service 여부 (Khan, Tickner)' },
        { t:'Notice / consultation 의무', why:'Project Blue Sky 절차 위반 분석' },
        { t:'Privative 또는 no-invalidity clause', why:'Plaintiff S157 / Graham / Futuris / Kirk 진입' },
        { t:'AAT review 조항 (간헐)', why:'Merits review 분석' },
      ],
    },
    en: { eyebrow: 'exam structure', title: 'Problem-question patterns',
      lede: 'Across four years Part A is always a problem on a fictional statute and Part B is a doctrinal argument essay. The statute carries five recurring triggers.',
      cols: [
        { y:'2020', a:'Problem\n(60)', b:'—', n:'4 sub-Q' },
        { y:'2021', a:'60% Problem · 150 min', b:'40% — 2 essays', n:'1 + 2' },
        { y:'2022', a:'50% Problem A · 180 min', b:'50% Problem B', n:'2 problems · 6 sub' },
        { y:'2023', a:'60% — 3 sub-Q · 150 min', b:'40% — 2 essays', n:'3 + 2' },
        { y:'2026', a:'(confirmed) 60% Problem · 3 sub-Q · 3-hour exam + reading time · W1–W12 all examinable', b:'(confirmed) 40% — 3 argumentative questions: 1 × 20 marks + 2 × 10 marks', n:'3 + 3' },
      ],
      triggers: [
        { t:'"may" / "if satisfied" / "in the public interest"', why:'discretion trigger — Wednesbury / Li / SZMDS' },
        { t:'Three mandatory considerations', why:'Peko-Wallsend trigger — was it lip-service (Khan, Tickner)' },
        { t:'Notice / consultation duties', why:'Project Blue Sky breach analysis' },
        { t:'Privative or no-invalidity clause', why:'Plaintiff S157 / Graham / Futuris / Kirk' },
        { t:'AAT review provision (occasional)', why:'merits-review angle' },
      ],
    },
  },

  // ── 2. Five compulsory topic clusters ─────────────────────────────────────
  topics: [
    { id:'jurisdiction', n:'01',
      kr:{ h:'Jurisdiction & Standing', s:'필수 진입 분석',
        body:'세 시험 모두 jurisdiction을 요구. State body면 Kirk inherent jurisdiction (state Supreme Court), Cth면 s 39B JA + ADJR Act. Standing은 ACF special interest test, public interest body는 Right to Life vs Northcoast Environmental Council 비교가 핵심.',
        marks:[
          'NSW state body → State Supreme Court (Kirk)',
          'Cth officer → s 39B(1) JA + ADJR + s 75(v)',
          '개인 property/economic → ACF special interest 단계',
          'Public interest body → Right to Life ↔ Northcoast 비교',
        ] },
      en:{ h:'Jurisdiction & Standing', s:'mandatory entry-point analysis',
        body:'Every exam requires jurisdiction. State body → State Supreme Court (Kirk inherent); Cth → s 39B JA + ADJR Act. Standing — ACF special interest, with Right to Life vs Northcoast for public-interest bodies.',
        marks:[
          'NSW state body → State Supreme Court (Kirk)',
          'Cth officer → s 39B(1) JA + ADJR + s 75(v)',
          'Individual property/economic → ACF stage 1',
          'Public-interest body → Right to Life ↔ Northcoast',
        ] },
    },
    { id:'pf', n:'02',
      kr:{ h:'Procedural Fairness', s:'fair hearing 또는 bias',
        body:'2020 Cato는 fair hearing (depression 증거 무시), 2021은 consultation breach, 2022·2023은 모두 정치적 임명자의 apprehended bias로 동일 패턴이 두 해 연속 출제.',
        marks:[
          '2020 Cato — fair hearing breach',
          '2021 Authority — consultation 의무 위반',
          '2022 Carr — apprehended bias (Ebner, Jia)',
          '2023 Kronsky — apprehended bias (Ebner, Jia, McGovern)',
        ] },
      en:{ h:'Procedural fairness', s:'fair hearing or bias',
        body:'2020 Cato (fair hearing — depression evidence ignored); 2021 (consultation breach); 2022 & 2023 both apprehended bias on the same political-appointee pattern in successive years.',
        marks:[
          '2020 Cato — fair-hearing breach',
          '2021 Authority — consultation duty',
          '2022 Carr — apprehended bias (Ebner, Jia)',
          '2023 Kronsky — apprehended bias (Ebner, Jia, McGovern)',
        ] },
    },
    { id:'considerations', n:'03',
      kr:{ h:'Mandatory & Irrelevant Considerations', s:'lip service 여부',
        body:'"considered all matters in s 1" 같은 형식적 진술이 실제 검토인지 판단. 핵심은 Peko-Wallsend, Tickner v Chapman, Khan, SZJSS, 그리고 Hossain materiality.',
        marks:[
          '2020 Cato — depression "no weight whatsoever" → Peko-Wallsend',
          '2021 — "considered all matters" → Khan/Tickner lip-service',
          '2023 Kronsky — by-election (irrelevant) + 보고서 일부만 (Tickner)',
          'Hossain materiality — 별도 limb 필수',
        ] },
      en:{ h:'Mandatory & irrelevant considerations', s:'is it real or lip-service',
        body:'Whether a formal recital ("considered all matters in s 1") amounts to real consideration. Core: Peko-Wallsend, Tickner v Chapman, Khan, SZJSS, plus Hossain materiality.',
        marks:[
          '2020 Cato — "no weight whatsoever" → Peko-Wallsend',
          '2021 — recital → Khan/Tickner lip-service',
          '2023 Kronsky — by-election (irrelevant) + partial report (Tickner)',
          'Hossain materiality — distinct limb required',
        ] },
    },
    { id:'privative', n:'04',
      kr:{ h:'No-invalidity & Privative Clauses', s:'헌법적 entrenched minimum',
        body:'2020 s 477(3) no-invalidity, 2021 s 16 강력 privative, 2022 s 8(3) "final and conclusive", 2023은 거꾸로 Solicitor-General 입장에서 어떻게 강화할지 묻는 reverse question.',
        marks:[
          'Plaintiff S157/2002 — entrenched minimum',
          'Kirk — state Supreme Court 보호',
          'Graham — JE 발견을 막는 조항 무효',
          'Futuris — JE 없으면 통상 오류는 보호',
          'Hossain — JE 인정에 materiality 요구',
        ] },
      en:{ h:'No-invalidity & privative clauses', s:'the entrenched minimum',
        body:'2020 s 477(3) no-invalidity; 2021 s 16 strong privative; 2022 s 8(3) "final and conclusive"; 2023 reversed it — how would the Solicitor-General strengthen the clause?',
        marks:[
          'Plaintiff S157/2002 — entrenched minimum',
          'Kirk — state Supreme Court protected',
          'Graham — clause that prevents JE detection is invalid',
          'Futuris — non-JE error survives',
          'Hossain — materiality required for JE finding',
        ] },
    },
    { id:'delegation', n:'05',
      kr:{ h:'Delegation, Dictation, Fettering', s:'판단의 독립성',
        body:'2021 "Minister 입장 채택" → Bromley, Drake (No 2) fettering, 2022 "Minister의 꿈 실현" → dictation, 2023 광범위한 delegate에 정치 동기.',
        marks:[
          'Bromley v Tweed Shire — fettering by policy',
          'Drake (No 2) — tribunal policy 적용 가능',
          'R v Anderson; Ex parte Ipec-Air — dictation',
        ] },
      en:{ h:'Delegation, dictation, fettering', s:'independence of mind',
        body:'2021 "we adopted the Minister\'s position" → Bromley, Drake (No 2); 2022 "realise the Minister\'s dreams" → dictation; 2023 broad delegate with political motive.',
        marks:[
          'Bromley v Tweed Shire — fettering by policy',
          'Drake (No 2) — tribunal can apply policy',
          'R v Anderson; Ex parte Ipec-Air — dictation',
        ] },
    },
  ],

  // ── 3. IF/THEN decision trees (bilingual) ─────────────────────────────────
  trees: [
    { id:'privative-tree',
      kr:{ h:'Privative Clause 분석', s:'조항 문구로 분기' },
      en:{ h:'Privative clause analysis', s:'branch on clause wording' },
      branches: [
        { if_kr:'"decisions not invalid" / no-invalidity', if_en:'"decisions not invalid" / no-invalidity',
          then_kr:'Plaintiff S157 → JE는 보호 (entrenched minimum). 2단계 — Project Blue Sky 절차 분석으로 invalidity 여부 결정.', then_en:'Plaintiff S157 → JE protected (entrenched minimum). Then Project Blue Sky to decide whether breach causes invalidity.', cases:['s157','blue-sky'] },
        { if_kr:'"final and conclusive...not be challenged"', if_en:'"final and conclusive...not be challenged"',
          then_kr:'Cth: S157 — JE에 미적용. Futuris — non-JE 오류는 차단. State: Kirk — 주 Supreme Court 감독 관할 침해 무효.', then_en:'Cth: S157 — does not reach JE. Futuris — non-JE error blocked. State: Kirk — clause invalid if it strips state SC supervisory jurisdiction.', cases:['s157','futuris','kirk'] },
        { if_kr:'"no court shall review"', if_en:'"no court shall review"',
          then_kr:'Cth: s 75(v) 헌법 영장은 ousted 불가. State: Kirk → invalid. Graham — 자료 접근 차단도 무효.', then_en:'Cth: s 75(v) constitutional writs cannot be ousted. State: Kirk → invalid. Graham — even blocking the material is invalid.', cases:['s157','kirk','graham'] },
        { if_kr:'"no breach causes invalidity"', if_en:'"no breach causes invalidity"',
          then_kr:'Project Blue Sky + Hossain materiality 결합 — 위반이 결과에 realistic possibility로 영향이 있어야 JE.', then_en:'Project Blue Sky + Hossain materiality — breach must have realistic possibility of changing outcome to be JE.', cases:['blue-sky','hossain'] },
      ],
    },
    { id:'pf-tree',
      kr:{ h:'Procedural Fairness 분석', s:'배제 / threshold / 내용' },
      en:{ h:'Procedural fairness', s:'exclusion / threshold / content' },
      branches: [
        { if_kr:'법령이 명시적 문언으로 PF 배제', if_en:'Statute excludes PF in clear words',
          then_kr:'Miah — 명시적 배제만 효과. 그래도 legal unreasonableness (Li, CHK16)가 보완 가능한지 검토.', then_en:'Miah — only express exclusion works. Then check whether legal unreasonableness (Li, CHK16) compensates.', cases:['miah','li'] },
        { if_kr:'결정이 권리·이익에 substantially different 영향', if_en:'Decision affects rights/interests substantially differently',
          then_kr:'Kioa threshold 충족 → 내용은 Veal, SZMTA 활용해 fact-specific하게 결정.', then_en:'Kioa threshold met → content fact-specific via Veal, SZMTA.', cases:['kioa','veal'] },
        { if_kr:'긴급성 / 국가안보', if_en:'Urgency / national security',
          then_kr:'CCSU — content가 축소되지만 완전 배제는 아님. Plaintiff S10 — principle of legality 잔존.', then_en:'CCSU — reduced content, not zero. Plaintiff S10 — principle of legality persists.', cases:['s10'] },
        { if_kr:'미공개 자료 사용', if_en:'Undisclosed material relied on',
          then_kr:'Veal/Kioa — 의견 제출 기회 필요. SZMTA — materiality 검토.', then_en:'Veal/Kioa — opportunity to comment required. SZMTA — materiality required.', cases:['veal','szmta'] },
      ],
    },
    { id:'jf-tree',
      kr:{ h:'Jurisdictional Fact', s:'subjective vs objective' },
      en:{ h:'Jurisdictional fact', s:'subjective vs objective' },
      branches: [
        { if_kr:'"if satisfied" 형식', if_en:'"if satisfied" wording',
          then_kr:'Subjective satisfaction fact — SZMDS 비논리성 / Wednesbury / Li 라인. Hossain materiality 결합.', then_en:'Subjective satisfaction fact — SZMDS illogicality / Wednesbury / Li. Combine with Hossain materiality.', cases:['szmds','li','hossain'] },
        { if_kr:'"where X exists" — 객관적 사실', if_en:'"where X exists" — objective fact',
          then_kr:'Enfield / Timbarra — 법원이 모든 증거를 보고 직접 결정. AAT review와 유사한 fact-finding.', then_en:'Enfield / Timbarra — court determines on all evidence. Similar to AAT fact-finding.', cases:[] },
        { if_kr:'중요 인정에 증거 없음', if_en:'No evidence for critical finding',
          then_kr:'s 5(1)(h) ADJR / Connell v Ferruzzi — 핵심 사실에 증거 없음 시 JE.', then_en:'s 5(1)(h) ADJR / Connell v Ferruzzi — no evidence for critical fact = JE.', cases:[] },
      ],
    },
    { id:'standing-tree',
      kr:{ h:'Standing 스펙트럼', s:'사적 권리 → 공익단체' },
      en:{ h:'Standing spectrum', s:'private rights → public interest body' },
      branches: [
        { if_kr:'사적 권리·이익 직접 침해', if_en:'Private rights/interests directly affected',
          then_kr:'ACF 1단계 자동 충족 — 추가 분석 불요.', then_en:'ACF stage 1 automatic — no further inquiry.', cases:['acf'] },
        { if_kr:'개인의 special interest', if_en:'Individual with special interest',
          then_kr:'ACF + Onus + Bateman\'s Bay — 일반 공중보다 큰 이해관계 입증.', then_en:'ACF + Onus + Bateman\'s Bay — interest greater than the general public.', cases:['acf'] },
        { if_kr:'공익단체', if_en:'Public-interest body',
          then_kr:'Right to Life (좁음) ↔ Northcoast Environmental Council (열림). 활동·정관·정부 인정 비교.', then_en:'Right to Life (narrow) ↔ Northcoast Environmental Council (open). Compare activities, constitution, government recognition.', cases:[] },
      ],
    },
  ],

  // ── 4. Five marking criteria + HD differentiators ────────────────────────
  criteria: [
    { id:'c1', w:'~30%', kr:{ h:'법리·정책 이해', body:'단순 인용이 아닌 작동 원리와 정책적 배경. Wednesbury → Li → SZMDS → Hossain의 흐름. ADJR/CL JR/헌법 JR가 왜 공존하는지.', hd:'"Kioa는 PF가 적용된다" → "Kioa는 권리·이익에 substantially different 영향을 줄 때 PF가 추정 적용되며, 이는 정부 권한이 공정하게 행사되어야 한다는 rule of law 측면을 반영한다"' }, en:{ h:'Understanding of law and policy', body:'Not just citation — how doctrine works, why it exists. The Wednesbury → Li → SZMDS → Hossain trajectory. Why ADJR / CL JR / constitutional JR coexist.', hd:'"Kioa says PF applies" → "Kioa established PF presumptively applies where the decision affects rights/interests substantially differently from the public, reflecting the rule-of-law principle that government power must be exercised fairly"' } },
    { id:'c2', w:'~25%', kr:{ h:'비판적·분석적 응답', body:'Counter-argument 생성. Multi-ground 우선순위. 약한 ground는 "arguable but unlikely"라 명시. Statute의 ambiguity 양쪽 해석.', hd:'"On one view... However, the better view is... because..." — HCA majority/minority 활용 (SZMDS).' }, en:{ h:'Critical and analytical response', body:'Generate counter-arguments. Prioritise multi-ground analysis. Mark weak grounds "arguable but unlikely". Read statutory ambiguity both ways.', hd:'"On one view... However, the better view is... because..." — leverage HCA majority/minority (SZMDS).' } },
    { id:'c3', w:'~15%', kr:{ h:'구조와 조직', body:'Heading/subheading 체계. HIRAC 일관성. 결론을 먼저 두는 topic sentence. Mark allocation에 비례한 분량.', hd:'한 단락 = 한 issue = 한 mini-conclusion. Cross-referencing ("standing에서 본 바와 같이...").' }, en:{ h:'Structure and organisation', body:'Heading hierarchy. Consistent HIRAC. Conclusion-first topic sentences. Length proportional to marks.', hd:'One paragraph = one issue = one mini-conclusion. Cross-reference ("as discussed above re standing...").' } },
    { id:'c4', w:'~15%', kr:{ h:'Primary + Secondary 인용', body:'정확한 case citation, statutory pinpoint, HCA 판사 명시. Secondary: Aronson and Groves, Cane & McDonald, Gageler, Boughey.', hd:'"Aronson은 Project Blue Sky test가 불확실성을 만든다고 비판한다" — 단순 인용이 아닌 engagement.' }, en:{ h:'Primary & secondary sources', body:'Italicised citations, statutory pinpoints, HCA judges named. Secondary: Aronson and Groves, Cane & McDonald, Gageler, Boughey.', hd:'"Aronson has argued the Project Blue Sky test creates uncertainty because..." — engagement, not citation.' } },
    { id:'c5', w:'~15%', kr:{ h:'표현·문법', body:'법률 용어 정확성 ("jurisdictional error"). 호주식 spelling. 능동태. AGLC4 인용. 시제 일관성 (ratio 현재형, facts 과거형).', hd:'시간 압박 하에서도 5분 proofread. "It is submitted that" 회피 (advice 형식). 적절한 hedging ("likely", "arguably").' }, en:{ h:'Written expression', body:'Precise terms ("jurisdictional error"). Australian spelling. Active voice. AGLC4. Tenses consistent (ratio present, facts past).', hd:'Reserve 5 min for proofreading. Avoid "It is submitted that" (advice form). Appropriate hedging ("likely", "arguably").' } },
  ],

  // ── 5. Mock exam plan ─────────────────────────────────────────────────────
  // ── Day-by-day countdown — anchored 16 May, exam 4 June ───────────────────
  // Format-driven: Part A 60 (problem, 3 sub-Q) + Part B 40 (1×20 + 2×10),
  // 3 hr + reading time, W1–W12 all examinable, mid-sem cases can recur.
  planLede: {
    kr: '16일 집중(5/16–5/31) + 3일 테이퍼(6/1–6/3) → 6/4 시험. 확정 포맷에 맞춰 Part A(문제·3 sub-Q)와 Part B(1×20+2×10)를 따로 단련하고, 중간고사 글쓰기 피드백을 매일 적용한다.',
    en: '16 focused days (16–31 May) + a 3-day taper (1–3 Jun) → exam 4 Jun. Built around the confirmed format: drill Part A (problem, 3 sub-Q) and Part B (1×20 + 2×10) separately, applying the mid-sem writing feedback every day.',
  },
  examDayBudget: {
    kr: { h:'시험 당일 시간 배분 (3시간 + reading time)', rows:[
      ['Reading time', '모든 문항 스코핑. Part A 3 sub-Q의 배점 확인, Part B 3문항 중 쓸 순서·thesis 한 줄 메모.'],
      ['Part A · 60 — ~95분', '3 sub-Q를 배점 비례로 분할. 각 sub-Q: 분석 흐름(관할→적격→Hossain→사유→materiality→구제→헌법→ART) 순서로.'],
      ['Part B · 20점 — ~35분', '첫 문장 = thesis. 용어 정의 → named case close reading → 한 단락 한 요지.'],
      ['Part B · 10점 ×2 — 각 ~18분', '서론 1–2문장. 곧바로 본론. 가장 contentious한 지점에 분량 집중.'],
      ['Proofread — 5분 확보', '용어 정확성, citation, 시제 일관성. 빈 sub-Q 없는지 최종 확인.'],
    ]},
    en: { h:'Exam-day time budget (3 hr + reading time)', rows:[
      ['Reading time', 'Scope every question. Note Part A sub-Q mark splits; pick Part B order and jot a one-line thesis for each.'],
      ['Part A · 60 — ~95 min', 'Split sub-Q by their marks. Each: walk the flow (jurisdiction → standing → Hossain → grounds → materiality → remedies → constitutional → ART).'],
      ['Part B · 20 marks — ~35 min', 'First sentence = thesis. Define terms → close-read named cases → one point per paragraph.'],
      ['Part B · 10 marks ×2 — ~18 min each', '1–2 sentence intro, then straight in. Spend the words on the most contentious point.'],
      ['Proofread — reserve 5 min', 'Term precision, citations, tense consistency. Confirm no sub-Q left blank.'],
    ]},
  },
  plan: [
    { w:'D1 · 5/16', kr:{ focus:'진단', task:'분석 흐름 뷰로 과거 Part A problem 1개 무시간 풀이 → 약한 doctrine 표시. Part B는 LPDT식 "qualitative judgements" 에세이 1개 무시간 작성 → 답안 피드백 기준(주장 먼저·용어 정의·close reading)으로 자가 채점. 약점 리스트 작성.' }, en:{ focus:'Diagnostic', task:'Untimed: one past Part-A problem via the analytical-flow view → flag weak doctrine. One LPDT-style "qualitative judgements" essay → self-mark against the feedback rubric (argument-first, define terms, close reading). Build a weak-list.' } },
    { w:'D2 · 5/17', kr:{ focus:'포맷 내재화', task:'확정 포맷(Part A 60·3 sub-Q / Part B 40·1×20+2×10 / 3시간+reading time)에 맞춰 본인 시간표 확정 — reading time 활용법, sub-Q별 분 배분, proofread 5분. 약점 리스트 우선순위화.' }, en:{ focus:'Absorb the format', task:'Lock your personal timetable to the confirmed format (Part A 60 / 3 sub-Q; Part B 40 = 1×20+2×10; 3 hr + reading time) — reading-time use, per-sub-Q minutes, 5-min proofread. Prioritise the weak-list.' } },
    { w:'D3 · 5/18', kr:{ focus:'W1–W3 sweep', task:'위임입법·정치적 책임(W1) · 관할/진입(W2) · 원고적격(W3). 토픽마다 끝에 10점짜리 argument 단락 1개 — 핵심 용어 정의 드릴.' }, en:{ focus:'W1–W3 sweep', task:'Delegated leg & political accountability (W1) · jurisdiction/gateway (W2) · standing (W3). Close each topic with one 10-mark argument paragraph — define-the-term drill.' } },
    { w:'D4 · 5/19', kr:{ focus:'W4–W5', task:'Hossain 3단계 프레임 + 절차적 공정(청문규칙). Kioa·Saeed·S10·VEAL·M61 정독. 끝에 10점 단락 2개.' }, en:{ focus:'W4–W5', task:'Hossain 3-stage frame + PF (hearing rule). Close-read Kioa, Saeed, S10, VEAL, M61. End with two 10-mark paragraphs.' } },
    { w:'D5 · 5/20', kr:{ focus:'W6–W7', task:'편향(Ebner 2단계) + 고려사항/부적절목적/비합리성(Wednesbury→Li→SZMDS). 끝에 20점 essay 1개 timed(35분).' }, en:{ focus:'W6–W7', task:'Bias (Ebner two-step) + considerations / improper purpose / unreasonableness (Wednesbury→Li→SZMDS). End with one timed 20-mark essay (35 min).' } },
    { w:'D6 · 5/21', kr:{ focus:'W8–W9 + LPDT', task:'관할권적 사실 + materiality(Hossain→MZAPC→Nathanson→LPDT) + 통합 시퀀스. LPDT 정독 — materiality는 보편 아님, 입증 부담 낮음, merits 조정 도구 아님.' }, en:{ focus:'W8–W9 + LPDT', task:'Jurisdictional fact + materiality (Hossain→MZAPC→Nathanson→LPDT) + the integration sequence. Close-read LPDT — materiality is not universal, light onus, not a merits dial.' } },
    { w:'D7 · 5/22', kr:{ focus:'W10–W12', task:'헌법적 한계(S157·Kirk·Futuris·Graham·Bodruddaza) · ART(Shi·Frugtniet·Drake No 2) · 법원 밖 경로. "in practice / substance-and-degree" 테스트 드릴.' }, en:{ focus:'W10–W12', task:'Constitutional limits (S157·Kirk·Futuris·Graham·Bodruddaza) · ART (Shi·Frugtniet·Drake No 2) · beyond courts. Drill the "in practice / substance-and-degree" test.' } },
    { w:'D8 · 5/23', kr:{ focus:'Part A 실전 ①', task:'과거 problem 1개 timed(~95분, 3 sub-Q). 채점기준으로 자가채점 → 가장 약한 sub-답안 재작성.' }, en:{ focus:'Part A live ①', task:'One past problem timed (~95 min, 3 sub-Q). Self-mark against criteria → rewrite the weakest sub-answer.' } },
    { w:'D9 · 5/24', kr:{ focus:'Part A 실전 ②', task:'다른 연도 problem timed. 분석 흐름 8단계 체크리스트로 누락 점검(특히 헌법적 안전망·ART 빠뜨리지 말 것).' }, en:{ focus:'Part A live ②', task:'Different-year problem timed. Run the 8-step flow checklist for omissions (don\'t skip constitutional safety nets / ART).' } },
    { w:'D10 · 5/25', kr:{ focus:'Part B 세트 ①', task:'1×20 + 2×10 timed(35+18+18분). 답안 피드백 규칙 적용 — thesis 문장 먼저·용어 정의·named case close reading·한 단락 한 요지. 끝나고 20분 비평 패스.' }, en:{ focus:'Part B set ①', task:'1×20 + 2×10 timed (35+18+18 min). Apply the feedback rules — thesis first, define terms, close-read named cases, one point per paragraph. 20-min critique pass.' } },
    { w:'D11 · 5/26', kr:{ focus:'Part B 세트 ②', task:'다른 argument Q 세트. 케이스 페어링(Quin↔Drake No 2, Graham↔Kirk, Li·SZMDS·Hossain 등)으로 비교논증 연습.' }, en:{ focus:'Part B set ②', task:'Different argument-Q set. Use the case pairings (Quin↔Drake No 2, Graham↔Kirk, Li·SZMDS·Hossain) for comparative argument.' } },
    { w:'D12 · 5/27', kr:{ focus:'약점 패치', task:'D1·D8–D11에서 드러난 3대 약점만 집중 보강 + 해당 ground 10점 단락 재작성. 새 토픽 ✕.' }, en:{ focus:'Patch weaknesses', task:'Target only the 3 biggest gaps from D1 & D8–D11 + rewrite those grounds as 10-mark paragraphs. No new topics.' } },
    { w:'D13 · 5/28', kr:{ focus:'풀 모의 ①', task:'3시간 + reading time, Part A+B 통째로 실제 조건. 끝나고 전체 자가채점(채점기준).' }, en:{ focus:'Full mock ①', task:'3 hr + reading time, Part A + B together, real conditions. Full self-mark against criteria afterwards.' } },
    { w:'D14 · 5/29', kr:{ focus:'모의 ① 디브리프', task:'최악 3개 갭만 재작성. 시간 배분 실패 지점 교정(어디서 분초가 샜는지).' }, en:{ focus:'Mock ① debrief', task:'Rewrite only the 3 worst gaps. Fix where the timing leaked.' } },
    { w:'D15 · 5/30', kr:{ focus:'풀 모의 ②', task:'풀 모의 ②(또는 약점-집중 단축 모의). 1페이지 메모리시트 완성 — HIRAC 템플릿·핵심 30 케이스·정책 1줄·정의 목록.' }, en:{ focus:'Full mock ②', task:'Full mock ② (or a shortened weak-area mock). Finish the one-page memory sheet — HIRAC template, 30 core cases, one-line policy, definitions list.' } },
    { w:'D16 · 5/31', kr:{ focus:'능동 인출 + 테이퍼', task:'새 자료 ✕. 분석 흐름 8단계 백지 암송, 케이스 페어링 구술, 시간표·reading-time 계획 리허설.' }, en:{ focus:'Active recall + taper', task:'No new material. Recite the 8-step flow from blank, say the case pairings aloud, rehearse the timetable & reading-time plan.' } },
    { w:'6/1–6/4 · 테이퍼→시험', kr:{ focus:'테이퍼 → 시험', task:'6/1–6/3: 매일 30분 흐름·정의 인출 + 10점 1개 timed. 수면·시험장 동선 점검. 6/4 시험 — reading time에 sub-Q 스코핑·thesis 메모부터.' }, en:{ focus:'Taper → exam', task:'1–3 Jun: 30 min/day of flow & definition recall + one timed 10-marker. Sleep & logistics. 4 Jun exam — start in reading time with sub-Q scoping and one-line theses.' } },
  ],

  // ── 6. Argument-question pool & case pairings ─────────────────────────────
  pairings: [
    { id:'p1', kr:{ a:'Quin (Brennan J)', b:'Drake (No 2) (Brennan J)', shared:'정책의 구조적 한계, JR vs MR 구분', diff:'Quin (negative — JR 한계) vs Drake (positive — tribunal 정책 적용)' }, en:{ a:'Quin (Brennan J)', b:'Drake (No 2) (Brennan J)', shared:'structural limits of policy, JR/MR divide', diff:'Quin (negative — JR limits) vs Drake (positive — tribunal applying policy)' } },
    { id:'p2', kr:{ a:'Graham', b:'Kirk', shared:'entrenched minimum', diff:'Cth s 75(v) vs State s 73 inherent' }, en:{ a:'Graham', b:'Kirk', shared:'entrenched minimum', diff:'Cth s 75(v) vs State s 73 inherent' } },
    { id:'p3', kr:{ a:'Li · SZMDS · Hossain', b:'reasonableness 진화', shared:'법적 비합리성·비논리성·materiality 도입', diff:'Li (final-decision) → SZMDS (illogicality 높은 문턱) → Hossain (materiality 별도 limb)' }, en:{ a:'Li · SZMDS · Hossain', b:'reasonableness arc', shared:'legal unreasonableness, illogicality, materiality', diff:'Li (final decision) → SZMDS (high threshold illogicality) → Hossain (materiality as distinct limb)' } },
    { id:'p4', kr:{ a:'ACF · Onus · Right to Life · Northcoast', b:'standing 스펙트럼', shared:'special interest 기준의 진화', diff:'개인 (ACF) → 토착민 유적 (Onus) → 좁은 공익 (Right to Life) → 열린 공익 (Northcoast)' }, en:{ a:'ACF · Onus · Right to Life · Northcoast', b:'standing spectrum', shared:'evolution of special-interest test', diff:'individual (ACF) → indigenous site (Onus) → narrow PI (Right to Life) → open PI (Northcoast)' } },
    { id:'p5', kr:{ a:'Probuild', b:'ABT17', shared:'state vs federal entrenched minimum', diff:'Probuild (state privative 협소 해석) vs ABT17 (state JR의 헌법적 entrenchment 강화)' }, en:{ a:'Probuild', b:'ABT17', shared:'state vs federal entrenched minimum', diff:'Probuild (narrow construction of state privative) vs ABT17 (entrenchment of state JR)' } },
    { id:'p6', kr:{ a:'Plaintiff S10', b:'Principle of legality', shared:'기본권 보호의 기제', diff:'S10 — PF가 약화된 영역에서도 legality는 잔존, 그러나 점차 약화된다는 비판' }, en:{ a:'Plaintiff S10', b:'principle of legality', shared:'fundamental-rights protection mechanism', diff:'S10 — legality persists in PF-reduced areas, but critique that it is waning' } },
  ],

  // ── 7. HIRAC + materiality template ───────────────────────────────────────
  hirac: {
    kr: {
      h:'HIRAC + Materiality 템플릿',
      s:'한 ground 한 paragraph — Hossain 이후 standard',
      body:[
        { l:'Heading', t:'Ground (예: Apprehended bias)' },
        { l:'Issue', t:'문제 사실에서 무엇이 의심되는가' },
        { l:'Rule', t:'케이스 + ratio + 정책적 근거 1줄 (HD 차별화)' },
        { l:'Application', t:'Statute 단어 + 사실관계 직접 인용 ("28 May 파일 노트")' },
        { l:'Materiality', t:'Hossain — 위반이 결과에 realistic possibility로 영향?' },
        { l:'Counter', t:'정부 측 반론 1단락' },
        { l:'Strength', t:'"likely / arguable / unlikely" 명시' },
        { l:'Conclusion', t:'Mini-conclusion + remedy 연결' },
      ],
    },
    en: {
      h:'HIRAC + materiality template',
      s:'one ground per paragraph — post-Hossain standard',
      body:[
        { l:'Heading', t:'Ground (e.g. apprehended bias)' },
        { l:'Issue', t:'what does the fact pattern raise' },
        { l:'Rule', t:'case + ratio + one line of policy (HD differentiator)' },
        { l:'Application', t:'statutory words + direct fact quotes ("file note dated 28 May")' },
        { l:'Materiality', t:'Hossain — realistic possibility of different outcome?' },
        { l:'Counter', t:'one paragraph of government rebuttal' },
        { l:'Strength', t:'state "likely / arguable / unlikely"' },
        { l:'Conclusion', t:'mini-conclusion linking to remedy' },
      ],
    },
  },
};

// ── 8. Missing cases (push into CASES_DATA) ────────────────────────────────
(function addCases(){
  const C = window.CASES_DATA; if (!C) return;
  const add = (id, def) => { if (!C[id]) C[id] = def; };

  add('hossain', {
    name:'Hossain v Minister', cite:'(2018) 264 CLR 123', topic:'Materiality',
    category:'JE limb', icon:'⊕', color:'c-blue',
    en:{ facts:'Visa refused for partner-visa applicant. Tribunal made an error of law about a statutory criterion.',
      issue:'Is every error JE, or must the breach have realistic possibility of affecting the outcome?',
      rule:'JE requires materiality — the breach must have a realistic possibility of resulting in a different decision.',
      when:'Apply to every ground after identifying the breach. Hossain is now a separate limb post-2018.',
      conclusion:'Materiality is essential to JE; non-material breaches are non-JE error (Futuris-style).',
      keywords:['materiality','JE limb','realistic possibility','Hossain'] },
    kr:{ facts:'배우자 비자 신청자에 대한 거부. tribunal이 법적 기준에 관한 법률 오류를 범했다.',
      issue:'모든 오류가 JE인가, 아니면 결과에 realistic possibility로 영향이 있어야 하는가?',
      rule:'JE에는 materiality가 필요하다 — 위반이 결과를 바꿀 realistic possibility를 가져야 한다.',
      when:'모든 ground 분석 후 적용. 2018년 이후 별도 limb.',
      conclusion:'Materiality는 JE의 필수 요소. 비-material 위반은 non-JE 오류 (Futuris 라인).',
      keywords:['materiality','JE limb','realistic possibility','Hossain'] }
  });

  add('mzapc', {
    name:'MZAPC v Minister', cite:'(2021) 273 CLR 506', topic:'Materiality',
    category:'JE limb', icon:'⊞', color:'c-blue',
    en:{ facts:'Tribunal failed to consider material that the applicant\'s migration agent had been suspended.',
      issue:'Where does the burden of proof lie for materiality?',
      rule:'Applicant bears the onus of proving materiality on the balance of probabilities. Reaffirms Hossain.',
      when:'After Hossain, on every materiality argument — applicant must show the realistic possibility.',
      conclusion:'Tightens Hossain by placing the burden squarely on the applicant.',
      keywords:['materiality','onus','MZAPC','Hossain'] },
    kr:{ facts:'tribunal이 신청자의 이민 에이전트 자격 정지를 고려하지 않았다.',
      issue:'Materiality 입증책임은 누구에게 있는가?',
      rule:'신청자가 balance of probabilities로 materiality를 입증할 책임을 진다. Hossain 재확인.',
      when:'Hossain 이후 모든 materiality 주장에 — 신청자가 realistic possibility 입증.',
      conclusion:'입증책임을 명확히 신청자에게 부과해 Hossain을 강화.',
      keywords:['materiality','onus','MZAPC','Hossain'] }
  });

  add('m1-2021', {
    name:'Plaintiff M1/2021', cite:'(2022) 275 CLR 582', topic:'Reasons / consideration',
    category:'Substantive', icon:'⌬', color:'c-violet',
    en:{ facts:'Visa cancellation under s 501. Applicant claimed mandatory representations were not engaged with.',
      issue:'What does it mean to "consider" representations?',
      rule:'To consider = read, identify, understand and evaluate the representations. Mere recital insufficient.',
      when:'Where statute requires consideration of mandatory matters. Pair with Tickner / Khan.',
      conclusion:'Substantive engagement required, but courts will not dive into merits — light touch on the four verbs.',
      keywords:['consider','read identify understand evaluate','M1/2021','reasons'] },
    kr:{ facts:'s 501에 따른 비자 취소. 신청자는 의무 진술이 적극 검토되지 않았다고 주장.',
      issue:'"고려한다"는 무엇을 의미하는가?',
      rule:'고려 = 읽기·식별·이해·평가. 단순 형식 진술은 부족.',
      when:'법령이 의무 사항 고려를 요구할 때. Tickner / Khan과 결합.',
      conclusion:'실질 검토 요구하나 법원은 merits에 들어가지 않음 — 4동사에 light touch.',
      keywords:['consider','read identify understand evaluate','M1/2021','reasons'] }
  });

  add('probuild', {
    name:'Probuild v Shade Systems', cite:'(2018) 264 CLR 1', topic:'W10',
    category:'Privative', icon:'◇', color:'c-ochre',
    en:{ facts:'NSW Building and Construction Industry Security of Payment Act privative provision; non-JE error of law on the face of the record.',
      issue:'Does the state privative clause oust certiorari for non-JE error?',
      rule:'A state privative clause may, on proper construction, exclude certiorari for non-JE error of law on the face of the record. Kirk\'s minimum (JE) is preserved.',
      when:'State privative analysis where the alleged error is non-JE.',
      conclusion:'Narrows Kirk: only JE-stripping clauses are invalid. Non-JE may be ousted by clear words.',
      keywords:['state privative','Probuild','Kirk minimum','non-JE'] },
    kr:{ facts:'NSW 건설업 결제 보안법의 privative 조항. 기록상 표면적 비-JE 법률 오류.',
      issue:'주 privative 조항이 비-JE에 대한 certiorari를 배제할 수 있는가?',
      rule:'정당한 해석으로 주 privative는 기록상 표면 비-JE 법률 오류에 대한 certiorari를 배제할 수 있다. Kirk의 최소(JE)는 보호.',
      when:'주 privative 분석 — 주장된 오류가 비-JE일 때.',
      conclusion:'Kirk 좁힘 — JE-차단 조항만 무효. 비-JE는 명확 문언으로 배제 가능.',
      keywords:['state privative','Probuild','Kirk minimum','non-JE'] }
  });

  add('abt17', {
    name:'ABT17 v Minister', cite:'(2020) 269 CLR 439', topic:'W10',
    category:'Privative', icon:'◆', color:'c-ochre',
    en:{ facts:'IAA decision-making procedure under Migration Act Pt 7AA.',
      issue:'When does failure to consider new information amount to JE?',
      rule:'Where statutory scheme requires the decision-maker to genuinely consider, failure to do so is JE — entrenched minimum applies.',
      when:'Use alongside Probuild on the state vs Cth privative argument.',
      conclusion:'Reinforces post-Kirk entrenchment line — state and Cth converge on a JE floor.',
      keywords:['ABT17','entrenched minimum','IAA','Pt 7AA'] },
    kr:{ facts:'Migration Act 제7AA부에 따른 IAA 결정 절차.',
      issue:'새 정보 미고려가 언제 JE인가?',
      rule:'법령 체계가 진정한 검토를 요구하는 경우 미고려는 JE — entrenched minimum 적용.',
      when:'Probuild와 함께 주 vs 연방 privative 분석.',
      conclusion:'Kirk 이후 entrenchment 라인 강화 — 주·연방이 JE 최저선에서 수렴.',
      keywords:['ABT17','entrenched minimum','IAA','Pt 7AA'] }
  });

  add('graham', {
    name:'Graham v Minister', cite:'(2017) 263 CLR 1', topic:'Privative limit',
    category:'Privative', icon:'◑', color:'c-ochre',
    en:{ facts:'Migration Act provision shielded the source of adverse information from disclosure to the court.',
      issue:'Can statute prevent the court from accessing material needed to detect JE?',
      rule:'A clause that effectively prevents the court from determining whether JE has occurred is invalid — undermines s 75(v).',
      when:'Use whenever the privative or non-disclosure provision blocks judicial fact-finding on JE.',
      conclusion:'Strong constitutional limit on Cth privative architecture.',
      keywords:['Graham','s 75(v)','privative invalid','non-disclosure'] },
    kr:{ facts:'Migration Act 조항이 불리 정보의 출처를 법원 공개에서 차단.',
      issue:'법령이 JE 판단에 필요한 자료에 대한 법원 접근을 막을 수 있는가?',
      rule:'JE 발생 여부 판단을 사실상 막는 조항은 무효 — s 75(v) 침해.',
      when:'Privative 또는 비공개 조항이 사법적 사실확정을 차단할 때.',
      conclusion:'연방 privative 구조에 대한 강한 헌법적 한계.',
      keywords:['Graham','s 75(v)','privative invalid','non-disclosure'] }
  });

  add('futuris', {
    name:'Futuris Corporation', cite:'(2008) 237 CLR 146', topic:'Privative survival',
    category:'Privative', icon:'◐', color:'c-ochre',
    en:{ facts:'Tax assessment privative — alleged errors short of JE.',
      issue:'Does the privative shelter non-JE errors?',
      rule:'Errors that are not JE remain within the privative — only JE breaks through (S157 minimum).',
      when:'Where the alleged ground is doubtful or non-jurisdictional.',
      conclusion:'Non-JE → no remedy under Cth privative architecture. Materiality (Hossain) draws the line.',
      keywords:['Futuris','non-JE','tax privative'] },
    kr:{ facts:'세금 부과의 privative — JE에 미달하는 주장.',
      issue:'Privative가 비-JE 오류를 보호하는가?',
      rule:'JE 아닌 오류는 privative 내 — JE만 돌파 (S157 최소).',
      when:'주장된 ground가 의심스럽거나 비-JE일 때.',
      conclusion:'비-JE → 연방 privative 하 구제 없음. Hossain materiality가 선을 그음.',
      keywords:['Futuris','non-JE','tax privative'] }
  });

  add('s10', {
    name:'Plaintiff S10/2011', cite:'(2012) 246 CLR 636', topic:'Principle of legality',
    category:'PF', icon:'⊙', color:'c-violet',
    en:{ facts:'Migration "non-statutory" guideline; PF arguably excluded.',
      issue:'Does the principle of legality persist where PF is statutorily reduced?',
      rule:'Fundamental rights / common law presumptions survive unless statute clearly intrudes.',
      when:'When statute formally excludes PF — argue legality residue.',
      conclusion:'Legality persists, but is increasingly criticised as a thin protection.',
      keywords:['principle of legality','S10','non-statutory'] },
    kr:{ facts:'이민 "비법정" 가이드라인. PF가 사실상 배제 주장.',
      issue:'PF가 법령상 축소된 영역에서 legality는 잔존하는가?',
      rule:'명시적 침해가 없는 한 기본권·common law 추정이 잔존.',
      when:'법령이 PF를 형식적으로 배제할 때 — legality 잔존 주장.',
      conclusion:'잔존하나 점차 얇은 보호로 비판.',
      keywords:['principle of legality','S10','non-statutory'] }
  });

  add('miah', {
    name:'Re Minister; Ex parte Miah', cite:'(2001) 206 CLR 57', topic:'W5',
    category:'PF', icon:'⊘', color:'c-violet',
    en:{ facts:'Migration code procedure said to exclude PF.',
      issue:'Does codification exclude common-law PF?',
      rule:'Express clear words required to exclude PF — codification alone insufficient.',
      when:'When statute purports to "code" the procedure.',
      conclusion:'Strong presumption against PF exclusion.',
      keywords:['Miah','PF exclusion','express words'] },
    kr:{ facts:'이민 절차 코드가 PF를 배제한다는 주장.',
      issue:'코드화가 common-law PF를 배제하는가?',
      rule:'PF 배제는 명시적 명확 문언 필요 — 코드화만으로 부족.',
      when:'법령이 절차를 "코드화"한다고 주장할 때.',
      conclusion:'PF 배제에 대한 강한 추정 반대.',
      keywords:['Miah','PF exclusion','express words'] }
  });

  add('veal', {
    name:'Re Minister; Ex parte Applicant Veal', cite:'(2005) 225 CLR 88', topic:'Undisclosed material',
    category:'PF', icon:'⊛', color:'c-violet',
    en:{ facts:'Adverse third-party allegation not put to applicant.',
      issue:'How much disclosure does PF require?',
      rule:'Substance of credible, relevant adverse material must be put for comment.',
      when:'Where adverse undisclosed material is on file.',
      conclusion:'Disclosure obligation extends to substance even where source confidential.',
      keywords:['Veal','undisclosed','PF content'] },
    kr:{ facts:'제3자의 불리 진술이 신청자에게 제시되지 않음.',
      issue:'PF가 요구하는 공개 정도는?',
      rule:'신빙성·관련성 있는 불리 자료의 요지를 의견 제출하도록 제시해야 한다.',
      when:'파일상 불리 미공개 자료가 있을 때.',
      conclusion:'출처 비밀이라도 요지 공개 의무.',
      keywords:['Veal','undisclosed','PF content'] }
  });

  add('szmta', {
    name:'Minister v SZMTA', cite:'(2019) 264 CLR 421', topic:'W4',
    category:'PF', icon:'⊚', color:'c-violet',
    en:{ facts:'Notification under s 438 of Migration Act not given to tribunal.',
      issue:'Does failure to notify constitute JE?',
      rule:'Failure to notify breaches PF; but materiality (Hossain) is required for JE.',
      when:'PF + materiality together — esp. where breach is procedural.',
      conclusion:'Materiality reins in procedural breaches; not every breach is JE.',
      keywords:['SZMTA','notification','materiality','PF'] },
    kr:{ facts:'Migration Act s 438 통지 의무 미준수.',
      issue:'통지 미준수가 JE인가?',
      rule:'PF 위반이나 JE 인정에는 materiality(Hossain) 필요.',
      when:'PF + materiality 결합 — 특히 절차적 위반.',
      conclusion:'Materiality가 절차 위반을 통제 — 모든 위반이 JE는 아님.',
      keywords:['SZMTA','notification','materiality','PF'] }
  });

  add('chk16', {
    name:'CHK16 v Minister', cite:'[2017] FCAFC',  topic:'Reasonableness',
    category:'Substantive', icon:'⌗', color:'c-coral',
    en:{ facts:'IAA refusal proceeding without inviting submissions where they would have been useful.',
      issue:'Can legal unreasonableness compensate for limited PF in a code?',
      rule:'Where statute reduces PF, legal unreasonableness (Li) may still capture irrational procedural failures.',
      when:'Use to bridge between PF exclusion and substantive review.',
      conclusion:'Reasonableness as a backstop — but threshold remains high.',
      keywords:['CHK16','reasonableness','Li','code'] },
    kr:{ facts:'IAA가 의견 제출 초청 없이 거부 — 의견이 유용했을 사안.',
      issue:'코드가 PF를 축소한 경우 legal unreasonableness가 보완 가능한가?',
      rule:'PF가 축소되어도 비합리적 절차 실패는 Li로 포착 가능.',
      when:'PF 배제와 실체 심사 사이를 잇는 용도.',
      conclusion:'Reasonableness가 backstop — 다만 문턱은 여전히 높음.',
      keywords:['CHK16','reasonableness','Li','code'] }
  });

  add('stretton', {
    name:'Minister v Stretton', cite:'(2016) 237 FCR 1', topic:'Reasonableness',
    category:'Substantive', icon:'⌖', color:'c-coral',
    en:{ facts:'Visa cancellation under s 501; ministerial discretion challenged.',
      issue:'What is the ambit of legal unreasonableness in discretionary decisions?',
      rule:'Reasonableness is an objective standard — court must give due weight to repository\'s expertise but supervises outcome.',
      when:'Wherever ministerial discretion is challenged on reasonableness.',
      conclusion:'Calibrated standard; respects expertise without abandoning supervision.',
      keywords:['Stretton','reasonableness','s 501'] },
    kr:{ facts:'s 501 비자 취소 — 장관의 재량.',
      issue:'재량 결정의 legal unreasonableness 범위?',
      rule:'객관적 기준 — 권한 보유자의 전문성에 적정 비중. 결과 감독.',
      when:'장관 재량을 reasonableness로 다툴 때.',
      conclusion:'전문성 존중 + 감독 균형.',
      keywords:['Stretton','reasonableness','s 501'] }
  });

  add('dua16', {
    name:'DUA16 v Minister', cite:'(2020) 271 CLR 550', topic:'Materiality + reasonableness',
    category:'Substantive', icon:'⌘', color:'c-coral',
    en:{ facts:'IAA error; question of whether breach was material to outcome.',
      issue:'Materiality interaction with reasonableness ground.',
      rule:'Even substantive grounds attract Hossain materiality limb.',
      when:'When pleading reasonableness or illogicality alongside other grounds.',
      conclusion:'Materiality is universal post-Hossain.',
      keywords:['DUA16','materiality','reasonableness'] },
    kr:{ facts:'IAA 오류 — 결과에 대한 materiality 여부.',
      issue:'Reasonableness ground와 materiality 상호작용.',
      rule:'실체 ground에도 Hossain materiality limb 적용.',
      when:'Reasonableness/illogicality와 다른 ground 병합 시.',
      conclusion:'Hossain 이후 materiality는 보편 적용.',
      keywords:['DUA16','materiality','reasonableness'] }
  });

  add('mceldowney', {
    name:'McEldowney v Forde', cite:'[1971] AC 632', topic:'Delegated legislation',
    category:'Power', icon:'⊟', color:'c-gray',
    en:{ facts:'Northern Ireland regulation prohibiting "republican clubs".',
      issue:'Was the regulation within power and reasonable?',
      rule:'Delegated legislation may be invalid for unreasonableness/uncertainty even if within literal power.',
      when:'W5 delegated-legislation analysis — overlay with Williams v Melbourne.',
      conclusion:'Reasonableness as a check on subordinate legislation.',
      keywords:['McEldowney','delegated legislation','reasonableness'] },
    kr:{ facts:'북아일랜드 규정 — "공화파 클럽" 금지.',
      issue:'규정이 권한 내·합리적인가?',
      rule:'문언상 권한 내라도 비합리·불명확으로 무효 가능.',
      when:'W5 위임입법 분석 — Williams v Melbourne과 결합.',
      conclusion:'위임입법에 대한 reasonableness 통제.',
      keywords:['McEldowney','delegated legislation','reasonableness'] }
  });
})();

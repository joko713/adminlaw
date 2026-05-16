/* Per-case metadata overlay: importance (1=core, 2=key, 3=supporting)
   and the specific legal test created/refined in that case (en + kr). */
window.CASE_META = {
  // ─── Core\n(1) ─────────────────────────────────────────
  marbury:      { importance:1, test:{ en:'Province of courts to say what the law is — review tied to legality, not merits.', kr:'법이 무엇인지 말하는 것은 법원의 영역 — 심사는 적법성에 묶인다.' } },
  s157:         { importance:1, test:{ en:'A decision affected by jurisdictional error is no decision at all; privative clauses cannot oust s 75(v).', kr:'JE의 영향을 받은 결정은 결정이 아니다; privative clause는 s 75(v)를 봉쇄할 수 없다.' } },
  'kirk-jurisdiction': { importance:1, test:{ en:'States cannot oust supervisory jurisdiction of Supreme Courts to correct jurisdictional error.', kr:'주(州)는 대법원의 JE 시정 감독관할을 봉쇄할 수 없다.' } },
  'kirk-criterion':    { importance:1, test:{ en:'Categories of JE not closed; includes jurisdictional fact errors and exceeding power.', kr:'JE 범주는 닫혀 있지 않다 — JF 오류와 권한 초과 포함.' } },
  bond:         { importance:1, test:{ en:'"Decision" under ADJR = a substantive determination final or operative in character; preliminary steps usually "conduct" not "decision".', kr:'ADJR의 "결정" = 종국적·실효적 성격의 실체 판단; 예비 단계는 보통 "행위"이지 "결정" 아님.' } },
  tang:         { importance:1, test:{ en:'"Under an enactment" two-limb test:\n(i) decision authorised by statute;\n(ii) statute itself gives decision its legal force.', kr:'"under enactment" 두 단계:\n(i) 결정이 법령에 의해 수권;\n(ii) 법령 자체가 결정에 법적 효력을 부여.' } },
  hossain:      { importance:1, test:{ en:'Three-stage frame:\n(1) power conferred?\n(2) PBS satisfied?\n(3) sub-grounds breached? + materiality threshold.', kr:'3단계:\n(1) 권한 부여?\n(2) PBS 충족?\n(3) sub-grounds 위반? + materiality 문턱.' } },
  mzapc:        { importance:1, test:{ en:'Materiality (factual): error is jurisdictional only if there was a realistic possibility of a different outcome — applicant bears the onus.', kr:'Materiality(사실): 결과를 바꿀 현실적 가능성이 있을 때만 JE — 입증책임은 신청인.' } },
  lpdt:         { importance:1, test:{ en:'Materiality (legal/structural): some breaches are inherently material — e.g., where statute makes the step essential.', kr:'Materiality(법적·구조적): 본질적으로 material한 위반 — 법령이 그 단계를 필수로 한 경우.' } },
  nathanson:    { importance:1, test:{ en:'PF + materiality: low threshold — court "readily inclined" to infer further submissions could have made a difference.', kr:'PF + materiality: 낮은 문턱 — 법원은 추가 의견이 영향을 줄 수 있었음을 쉽게 추론.' } },
  kioa:         { importance:1, test:{ en:'PF default presumption: applies to decisions affecting rights/interests/legitimate expectations unless clearly excluded.', kr:'PF 기본 추정: 권리·이익·정당한 기대에 영향을 미치는 결정에 명시 배제 없는 한 적용.' } },
  saeed:        { importance:1, test:{ en:'PF excluded only by clear and unambiguous statutory language; principle of legality.', kr:'PF는 명시적·모호하지 않은 문언으로만 배제 — legality 원칙.' } },
  ebner:        { importance:1, test:{ en:'Apprehended bias: would a fair-minded informed observer reasonably apprehend prejudgment? Two-step:\n(i) what might lead to it\n(ii) logical connection.', kr:'Apprehended bias: 공정한 합리적 관찰자가 prejudgment를 합리적으로 의심할 만한가? 2단계:\n(i) 야기 요인\n(ii) 논리적 연결.' } },
  li:           { importance:1, test:{ en:'Unreasonableness reformulated: outside the bounds of reasonable decision-making; need not satisfy Wednesbury\'s extreme test.', kr:'Unreasonableness 재정식화: 합리적 의사결정의 범위 밖 — Wednesbury의 극단 기준 불필요.' } },
  acf:          { importance:1, test:{ en:'Standing: "special interest in the subject matter" — more than mere intellectual or emotional concern.', kr:'Standing: "주제에 대한 special interest" — 단순 지적·감정적 관심 이상.' } },
  pbs:          { importance:1, test:{ en:'Statutory interpretation: breach does not automatically invalidate; ask what Parliament intended as consequence — Project Blue Sky test.', kr:'법령 해석: 위반이 자동 무효는 아님; 의회가 의도한 결과를 묻는다 — Project Blue Sky 테스트.' } },
  quin:         { importance:1, test:{ en:'Brennan J: legality/merits divide — courts review legality, not the wisdom of decisions.', kr:'Brennan J: legality/merits 구분 — 법원은 적법성을 심사하지 결정의 현명함을 심사하지 않음.' } },

  // ─── Key\n(2) ──────────────────────────────────────────
  ainsworth:    { importance:2, test:{ en:'Certiorari requires a decision with discernible legal effect on rights/interests; declaration may still issue.', kr:'Certiorari는 권리·이익에 식별 가능한 법적 효과 필요; declaration은 별도 발부 가능.' } },
  m68:          { importance:2, test:{ en:'"Officer of the Commonwealth" reach extends through arrangements with foreign states/private contractors.', kr:'"영연방 공무원"의 범위는 외국·민간 계약자 협정에도 미친다.' } },
  neat:         { importance:2, test:{ en:'Formal/structural approach: a private body with statutory veto is not necessarily transformed into a public body for ADJR.', kr:'형식·구조적 접근: 법정 거부권을 가진 민간기관이 자동으로 공공체가 되지는 않는다.' } },
  argos:        { importance:2, test:{ en:'Standing: economic detriment from competition can ground special interest.', kr:'Standing: 경쟁으로 인한 경제적 불이익은 special interest를 구성할 수 있다.' } },
  m61:          { importance:2, test:{ en:'Even non-statutory advisory processes can attract PF if they bear on a person\'s legal status.', kr:'법령 근거 없는 자문 절차도 법적 지위에 영향을 주면 PF가 적용될 수 있다.' } },
  veal:         { importance:2, test:{ en:'Substance of credible/relevant adverse material must be disclosed even if source is protected.', kr:'신빙·관련 불리한 자료의 실질은 제보원 보호하더라도 공개해야 한다.' } },
  s10:          { importance:2, test:{ en:'PF flows from statutory implication, not free-standing common-law duty.', kr:'PF는 법령상 묵시에서 나오며 보통법상 독립 의무가 아니다.' } },
  jia:          { importance:2, test:{ en:'Ministerial bias is gauged with regard to political role — open mind to representations is the test.', kr:'장관 bias는 정치적 역할에 비추어 판단 — 의견에 열린 마음이 기준.' } },
  isbester:     { importance:2, test:{ en:'A person who actively prosecuted/investigated cannot also decide consequential admin action — apprehended bias.', kr:'사전 조사·소추한 자는 후속 행정 결정에 참여할 수 없음 — apprehended bias.' } },
  cny17:        { importance:2, test:{ en:'Apprehended bias evaluated on what reasonable observer infers from prejudicial material before the DM.', kr:'Apprehended bias는 합리적 관찰자가 결정자 앞 편견적 자료에서 추론하는 바로 평가.' } },
  hotholdings:  { importance:2, test:{ en:'Adviser bias is imputable only if adviser played a role of significance — independent DM may break the chain.', kr:'자문자 bias는 의미 있는 역할을 한 경우에만 귀속 — 독립 결정자는 사슬을 끊을 수 있음.' } },
  graham:       { importance:2, test:{ en:'Provisions with practical effect of preventing s 75(v) review are invalid — substance over form.', kr:'s 75(v) 심사를 실질적으로 막는 조항은 무효 — 형식보다 실질.' } },
  futuris:      { importance:2, test:{ en:'No-invalidity clauses permissible if s 75(v) review remains; distinguish privative clauses ousting review.', kr:'No-invalidity 조항은 s 75(v) 심사가 남아 있으면 허용; privative clause(심사 봉쇄)와 구별.' } },
  m70:          { importance:2, test:{ en:'Where statute conditions power on objective state of affairs, courts determine that fact themselves (jurisdictional fact).', kr:'법령이 권한을 객관적 사실 상태에 의존시킬 때 법원이 그 사실을 직접 판단(JF).' } },
  szmds:        { importance:2, test:{ en:'Illogicality/irrationality: a finding without logical or probative basis can ground JE.', kr:'비논리·비합리: 논리·증거 기반 없는 인정은 JE 사유가 될 수 있다.' } },
  enfield:      { importance:2, test:{ en:'Jurisdictional fact: court determines disputed fact for itself; agency findings not deferred to.', kr:'JF: 법원이 다투어진 사실을 직접 판단; 행정 인정에 deference 없음.' } },
  stretton:     { importance:2, test:{ en:'Unreasonableness includes giving disproportionate weight to a relevant matter, not just outcome irrationality.', kr:'Unreasonableness는 결과의 비합리뿐 아니라 관련 사항에 과도한 비중을 두는 것도 포함.' } },
  dua16:        { importance:2, test:{ en:'Reasoning process unreasonableness: the path to the decision must be intelligible and within bounds.', kr:'추론과정 unreasonableness: 결정에 이르는 경로가 이해 가능하고 범위 내여야 한다.' } },
  bhardwaj:     { importance:2, test:{ en:'A JE-affected decision is no decision; the DM may re-exercise the power.', kr:'JE 결정은 결정이 아님; 결정자가 권한을 다시 행사할 수 있다.' } },
  shi:          { importance:2, test:{ en:'Tribunal stands in the shoes of the original DM — decides on material at the time of the tribunal\'s decision.', kr:'Tribunal은 원 결정자의 신발을 신음 — tribunal 결정 시점의 자료로 판단.' } },
  frugtniet:    { importance:2, test:{ en:'Tribunal bound by same statutory constraints on material as the original decision-maker.', kr:'Tribunal은 원 결정자에 적용된 법적 자료 제약에 동일하게 구속.' } },
  drake:        { importance:2, test:{ en:'Tribunal generally applies lawful Ministerial policy for consistency, but must not abdicate independent function.', kr:'Tribunal은 일관성 위해 적법 장관 정책을 일반적으로 적용하나 독립 기능을 포기해선 안 됨.' } },

  // ─── Supporting\n(3) ───────────────────────────────────
  vanstone:     { importance:3, test:{ en:'Improper purpose: a power must be exercised for the purpose for which it was conferred.', kr:'부적절한 목적: 권한은 부여 목적을 위해서만 행사되어야 한다.' } },
  evans:        { importance:3, test:{ en:'Inflexible application of policy / fettering discretion is itself a ground.', kr:'정책의 경직 적용 / 재량 구속 자체가 사유가 된다.' } },
  toohey:       { importance:3, test:{ en:'Improper purpose can be inferred from objective context, not just stated reasons.', kr:'부적절한 목적은 표명된 이유뿐 아니라 객관적 맥락에서 추론 가능.' } },
  coco:         { importance:3, test:{ en:'Principle of legality: clear words required to abrogate fundamental rights.', kr:'Legality 원칙: 기본권을 폐지하려면 명시적 문언 필요.' } },
  kruse:        { importance:3, test:{ en:'Delegated legislation invalid if manifestly unreasonable / partial / unjust.', kr:'위임입법은 명백히 unreasonable·차별·부정의하면 무효.' } },
  annetts:      { importance:3, test:{ en:'Legitimate expectation can summon PF even absent antecedent right.', kr:'정당한 기대는 선재 권리 없이도 PF를 부른다.' } },
  lam:          { importance:3, test:{ en:'Legitimate expectation alone, without practical injustice, does not invalidate.', kr:'실무적 부정의 없는 단순 기대만으로는 무효 사유가 아님.' } },
  wzarh:        { importance:3, test:{ en:'PF requires affording opportunity to know and respond to adverse case before final decision.', kr:'PF는 종국 결정 전 불리한 사안을 알고 의견을 낼 기회를 요구.' } },
  peko:         { importance:3, test:{ en:'Relevant considerations: matter is mandatory only if statute requires it (express or implied).', kr:'관련 고려사항: 법령이 명시·묵시 요구한 경우에만 의무적.' } },
  schlieske:    { importance:3, test:{ en:'Improper purpose at the level of execution can taint an otherwise valid power.', kr:'집행 단계의 부적절한 목적이 적법한 권한을 오염시킬 수 있다.' } },
  tickner:      { importance:3, test:{ en:'Failure to genuinely consider mandatory representations is a relevant-considerations breach.', kr:'필수 의견을 진정 고려하지 않으면 관련 고려사항 위반.' } },
  'm1-2021':    { importance:3, test:{ en:'Mandatory considerations under recent Migration Act direction frameworks.', kr:'최근 Migration Act 지침 framework 하 의무 고려사항.' } },
  green:        { importance:3, test:{ en:'Irrelevant considerations: extraneous matters cannot drive the decision.', kr:'무관 고려사항: 외부 사정이 결정을 좌우해선 안 됨.' } },
  m64:          { importance:3, test:{ en:'Considerations require not just listing but actual evaluative engagement.', kr:'고려사항은 나열이 아니라 실질적 평가적 관여를 요구.' } },
  onus:         { importance:3, test:{ en:'Standing: cultural/spiritual interest sufficiently special and concrete.', kr:'Standing: 문화·정신적 이익이 충분히 특수·구체적일 수 있다.' } },
  rtl:          { importance:3, test:{ en:'Pure ideological concern, however strongly held, does not establish special interest.', kr:'순수 이념적 관심은 강해도 special interest를 구성하지 않는다.' } },
  batemans:     { importance:3, test:{ en:'Economic detriment from a public body operating ultra vires can ground standing.', kr:'권한 외 운영 공기관과의 경쟁 경제적 불이익은 standing 근거.' } },
  northcoast:   { importance:3, test:{ en:'Long-standing involvement and government recognition can constitute special interest.', kr:'장기 활동과 정부 인정은 special interest를 구성할 수 있다.' } },
  datafin:      { importance:3, test:{ en:'(UK) Functional approach to JR — public function over formal source. Not adopted in NEAT.', kr:'(영국) JR 기능적 접근 — 공적 기능이 형식적 출처에 우선. NEAT 다수의견 미채택.' } },
  fuller:       { importance:3, test:{ en:'Recent application reaffirming Tang two-limb test in state context.', kr:'주(州) 맥락에서 Tang 두 단계 테스트를 재확인하는 최근 적용.' } },
  m174:         { importance:3, test:{ en:'Brian Lawlor doctrine: JE-affected decision has no legal force but practical effects persist until set aside.', kr:'Brian Lawlor 법리: JE 결정은 법적 효력 없으나 무효선언 전까지 사실적 효과 존속.' } },
  wednesbury:   { importance:3, test:{ en:'Original (very high) unreasonableness threshold: "so unreasonable no reasonable authority could come to it."', kr:'원조(극히 높은) unreasonableness 문턱: "어떤 합리적 행정청도 도달할 수 없을 정도".' } }
};

/* Render helper used by app.jsx */
window.IMP_LABEL = {
  kr: { 1:'★★★ 핵심', 2:'★★ 중요', 3:'★ 보조' },
  en: { 1:'★★★ Core', 2:'★★ Key', 3:'★ Supporting' }
};

/* ─────────────────────────────────────────────────────────────
   CASE_PRIORITY — Seminar Plan reading-list categorisation.
   priority: 'required' | 'recommended' | 'mentioned' | 'external'
   seminar:  the seminar number where the case primarily appears
   "required"    = Required Reading (must master)
   "recommended" = Recommended Reading
   "mentioned"   = Mentioned in text / reading questions (background)
   "external"    = Not in seminar plan (supplementary notes)
   ───────────────────────────────────────────────────────────── */
window.CASE_PRIORITY = {
  /* S1 — delegated legislation */
  vanstone:     { priority:'required', seminar:1 },
  evans:        { priority:'required', seminar:1 },

  /* S2 — JR framework */
  quin:         { priority:'required', seminar:2 },
  ainsworth:    { priority:'required', seminar:2 },
  pbs:          { priority:'required', seminar:2 },
  bond:         { priority:'recommended', seminar:2 },
  m68:          { priority:'recommended', seminar:2 },

  /* S3 — decision / under enactment */
  neat:         { priority:'required', seminar:3 },
  tang:         { priority:'required', seminar:3 },
  m61:          { priority:'required', seminar:3 },
  datafin:      { priority:'required', seminar:3 },
  fuller:       { priority:'recommended', seminar:3 },

  /* S4 — Hossain framework + materiality */
  'kirk-jurisdiction': { priority:'required', seminar:4 },
  'kirk-criterion':    { priority:'required', seminar:4 },
  hossain:      { priority:'required', seminar:4 },
  mzapc:        { priority:'required', seminar:4 },
  lpdt:         { priority:'required', seminar:4 },
  bhardwaj:     { priority:'required', seminar:4 },
  m174:         { priority:'required', seminar:4 },

  /* S5 — procedural fairness */
  saeed:        { priority:'required', seminar:5 },
  s10:          { priority:'required', seminar:5 },
  veal:         { priority:'required', seminar:5 },
  wzarh:        { priority:'required', seminar:5 },
  nathanson:    { priority:'required', seminar:5 },
  kioa:         { priority:'recommended', seminar:5 },
  annetts:      { priority:'mentioned', seminar:5 },
  lam:          { priority:'mentioned', seminar:5 },

  /* S6 — bias */
  jia:          { priority:'required', seminar:6 },
  isbester:     { priority:'required', seminar:6 },
  cny17:        { priority:'required', seminar:6 },
  ebner:        { priority:'mentioned', seminar:6 },
  hotholdings:  { priority:'mentioned', seminar:6 },

  /* S7 — relevant considerations / improper purpose */
  peko:         { priority:'required', seminar:7 },
  tickner:      { priority:'required', seminar:7 },
  'm1-2021':    { priority:'required', seminar:7 },
  schlieske:    { priority:'required', seminar:7 },
  green:        { priority:'required', seminar:7 },
  m64:          { priority:'required', seminar:7 },

  /* S8 — unreasonableness / jurisdictional facts */
  szmds:        { priority:'required', seminar:8 },
  li:           { priority:'required', seminar:8 },
  stretton:     { priority:'required', seminar:8 },
  dua16:        { priority:'required', seminar:8 },
  enfield:      { priority:'mentioned', seminar:8 },
  m70:          { priority:'mentioned', seminar:8 },
  wednesbury:   { priority:'mentioned', seminar:8 },

  /* S9 — standing / privative */
  onus:         { priority:'required', seminar:9 },
  rtl:          { priority:'required', seminar:9 },
  argos:        { priority:'required', seminar:9 },
  s157:         { priority:'required', seminar:9 },
  acf:          { priority:'mentioned', seminar:9 },
  batemans:     { priority:'mentioned', seminar:9 },
  northcoast:   { priority:'external', seminar:9 },

  /* S10 — constitutional limits on JR */
  graham:       { priority:'required', seminar:10 },
  futuris:      { priority:'required', seminar:10 },
  bodruddaza:   { priority:'mentioned', seminar:10 },

  /* S11 — tribunals / ART */
  shi:          { priority:'required', seminar:11 },
  frugtniet:    { priority:'required', seminar:11 },
  drake:        { priority:'required', seminar:11 },

  /* Cross / W1 delegated-leg background (supplementary) */
  coco:         { priority:'external', seminar:1 },
  toohey:       { priority:'external', seminar:1 },
  kruse:        { priority:'external', seminar:1 },

  /* ─── 2026 추가: 자료에서 인용된 핵심 보조 판례들 ─── */
  mceldowney:   { priority:'mentioned',    seminar:1 },
  hickman:      { priority:'mentioned',    seminar:10 },
  carltona:     { priority:'mentioned',    seminar:6 },
  sean:         { priority:'mentioned',    seminar:6 },
  wushan:       { priority:'mentioned',    seminar:6 },
  sankey:       { priority:'mentioned',    seminar:10 },
  murphyores:   { priority:'mentioned',    seminar:7 },
  marbury:      { priority:'external',     seminar:2 },
  chk16:        { priority:'recommended',  seminar:8 },
  szai:         { priority:'mentioned',    seminar:8 },
  singh:        { priority:'mentioned',    seminar:8 },
  szvfw:        { priority:'mentioned',    seminar:8 },
  gypsy_jokers: { priority:'mentioned',    seminar:10 },
  maccormick:   { priority:'mentioned',    seminar:10 },
  animals_angels:{priority:'external',     seminar:9 },
  oshea:        { priority:'mentioned',    seminar:5 },

  /* ─── 2026 B안 추가: 시험 인용 빈도 높은 보조 판례들 ─── */
  stead:        { priority:'mentioned',    seminar:5 },   // W5 PF materiality "no easy task"
  yusuf:        { priority:'mentioned',    seminar:7 },   // W7 jurisdictional character (Peko complement)
  boilermakers: { priority:'mentioned',    seminar:2 },   // W2 separation of powers (legality/merits constitutional basis)
  fjbloemen:    { priority:'mentioned',    seminar:10 },  // W10 overruled in part by Futuris
  glennan:      { priority:'mentioned',    seminar:10 },  // W10 discretionary withholding (Pt IVC)
  rembcbain:    { priority:'mentioned',    seminar:10 },  // W10 discretionary withholding (broader)
  forge:        { priority:'mentioned',    seminar:9 },   // W9 defining characteristics (Kirk foundation)
  australian_communist:{ priority:'external', seminar:9 },// rule of law constitutional foundation
};

/* Display labels for the priority filter / badges */
window.PRIORITY_LABEL = {
  kr: {
    required:    { full:'필수', short:'필수', desc:'Seminar Plan 필수 — 반드시 마스터' },
    recommended: { full:'권장', short:'권장', desc:'Seminar Plan 권장 — 강하게 권장' },
    mentioned:   { full:'배경', short:'배경', desc:'본문·문제에서 언급 — 배경 지식 필수' },
    external:    { full:'보충', short:'보충', desc:'Seminar Plan 외 — 선별적 활용' },
    none:        { full:'미분류', short:'—', desc:'분류되지 않음' }
  },
  en: {
    required:    { full:'Required', short:'Req', desc:'Required Reading — must master' },
    recommended: { full:'Recommended', short:'Rec', desc:'Recommended Reading — strongly recommended' },
    mentioned:   { full:'Mentioned', short:'Bg', desc:'Mentioned in text / reading questions — background' },
    external:    { full:'External', short:'Ext', desc:'Outside Seminar Plan — selective use' },
    none:        { full:'Unclassified', short:'—', desc:'Not categorised' }
  }
};

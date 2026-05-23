/* Extended lecture notes per week — bilingual prose blocks
   Surfaced on the Overview tab as a "강의 노트 / Lecture note" section. */
window.LECTURES = {
  w1: {
    kr: {
      lead: "행정법은 \"누가 무엇을 결정할 수 있는가\"라는 권한 분배의 학문이다. W1은 사법심사가 정책에 개입하는 것이 아니라 결정자가 자신의 권한 안에서 머물렀는지를 검토하는 장치임을 분명히 한다.",
      paras: [
        "Marbury v Madison(1803)이 \"무엇이 법인가를 말하는 것은 사법부의 영역\"이라고 선언한 이후, 보통법 세계의 사법심사는 결정의 옳고 그름이 아니라 적법성(legality)에 묶여 있다. 호주에서는 Marbury의 명제가 헌법 제75조(v)에 직접 박혀 있어, High Court가 영연방 공무원에 대해 mandamus·prohibition·injunction을 발할 수 있는 권한을 의회조차 박탈할 수 없다.",
        "이 구도가 \"merits–legality 이분법\"으로 굳어진다. 정책이 현명했는지, 사실 인정이 합리적이었는지는 행정의 영역이지만, 권한의 한계를 넘었거나 법이 요구한 절차를 어겼다면 법원은 이를 무효로 선언할 수 있다. 강의 후반에 나올 모든 사유(부여된 목적, 관련 고려사항, 절차적 공정, 합리성)는 이 한 쪽 분리선 위에서 작동한다."
      ],
      aside: "사법심사는 결정을 다시 내리지 않는다. 결정을 \"존재한 적 없는 것\"으로 만들 뿐이다."
    },
    en: {
      lead: "Administrative law is the discipline of allocating decision-making power. W1 frames judicial review as a device to police whether a decision-maker stayed within their authority — not whether their decision was wise.",
      paras: [
        "Since Marbury v Madison (1803) declared it the province of the courts to say what the law is, common-law judicial review has been tied to legality, not correctness. In Australia that Marbury principle is cemented into s 75(v) of the Constitution: the High Court's jurisdiction to issue mandamus, prohibition and injunction against Commonwealth officers cannot be stripped, even by Parliament.",
        "This sets up the merits–legality divide that runs through the whole course. Whether a policy was sound or a fact-finding reasonable belongs to the executive; but if a power has been exceeded or a statutory procedure ignored, the court may declare the act invalid. Every later ground (proper purpose, relevant considerations, procedural fairness, reasonableness) operates on this single side of the line."
      ],
      aside: "Judicial review does not re-make the decision. It treats it as if it had never been made."
    }
  },
  w2: {
    kr: {
      lead: "관할은 \"누구에게 묻고 무엇을 받을 수 있는가\"의 문제다. ADJR 단순화 vs 헌법 75(v)의 견고함, 그리고 ss39B와 주(州) 보통법까지 — 이 세 채널의 교차점이 W2의 지도다.",
      paras: [
        "ADJR Act 1977은 \"administrative character의 결정\"을 단일 절차로 통합해 9가지 사유로 다투게 했지만, 의사결정 정의의 협소함(Bond), 명단(Schedule 1) 제외, 그리고 가장 결정적으로 GBRMPA, ASIC 같은 수많은 권한이 명시적으로 빠져 있다는 한계를 안고 있다.",
        "Plaintiff S157(2003)은 헌법 75(v)에 \"jurisdictional error로 인한 결정은 결정이 아니다\"라는 의미를 주입함으로써 의회가 사법심사를 봉쇄하는 privative clause를 사실상 무력화했다. ss39B Judiciary Act는 75(v)의 관할을 Federal Court로도 끌어와 일상 사건에서의 진입로를 제공한다.",
        "주(州) 차원에서는 Kirk(2010)가 같은 논리를 주 대법원으로 확장했다 — \"jurisdictional error를 봉쇄하는 것은 헌법상 불가능하다.\""
      ],
      aside: "관할은 게이트가 아니라 게이트의 갯수다. 한쪽이 닫히면 다른 쪽이 열린다."
    },
    en: {
      lead: "Jurisdiction is the question of who you ask and what they can give you. ADJR's simplicity, s 75(v)'s constitutional bedrock, s 39B, and state common-law review — the W2 map is the intersection of these channels.",
      paras: [
        "The ADJR Act 1977 collapsed disparate prerogative writs into a single procedure with nine grounds, but it bites only on \"decisions of an administrative character\" (narrowed by Bond), is bounded by Schedule 1 exclusions, and crucially leaves whole regimes (GBRMPA, ASIC and many others) unreviewable under it.",
        "Plaintiff S157 (2003) read s 75(v) of the Constitution as meaning \"a decision affected by jurisdictional error is no decision at all\", neutering privative clauses that try to oust review. s 39B of the Judiciary Act ports s 75(v)'s jurisdiction into the Federal Court, giving you a workable forum for everyday cases.",
        "At state level Kirk (2010) extended the same logic to the Supreme Courts — it is constitutionally impossible to immunise jurisdictional error from review."
      ],
      aside: "Jurisdiction isn't one gate. It's a count of gates: when one is shut, another opens."
    }
  },
  w3: {
    kr: {
      lead: "이 주차의 질문은 \"누구의, 어떤 행위가 사법심사 대상이 되는가\" — 즉 심사의 범위(scope/amenability)다. 핵심 논쟁은 민영화·외주: 사적 형식을 띤 주체라도 공적 규제 체계의 일부이면 심사가 미치는가.",
      paras: [
        "ADJR ss 5–7은 결정·행위(conduct)·부작위(failure to act)를 명시적으로 나눈다. \"결정\"의 의미는 Bond에서 최종·실질·실체적인 것으로 좁게 정의됐지만 \"행위\"는 더 넓어(s 6), 결정 이전의 준비 단계도 다툼 대상이 될 수 있다.",
        "Tang의 2단계 \"수권법에 따른\" 테스트: (1) 결정이 법률에 의해 수권/요구되고, (2) 그 법적 효력으로 권리에 영향을 줄 것. 대학 내부 학술 규정은 법적 효력이 없어 ADJR 밖이었다. M61은 외주·역외 단계라도 장관의 법적 권한과 연결되면 s 39B/75(v)로 여전히 심사된다는 점을 보였다.",
        "NEAT은 법정 수출 체계 안에서 거부권을 행사한 사기업 AWB를 ADJR 대상이 아니라고 봤다 — 공적 체계 안이라도 사적 법형식이 심사를 차단할 수 있다. 영국 Datafin의 \"공적 기능\" 기준은 호주에서 채택되지 않았고(권한의 원천·형식이 여전히 판단을 지배), Fuller v Lawrence(2024)가 Tang 접근을 재확인했다. 비-사법심사성(non-justiciability, 주제 자체가 사법 판단에 부적합)은 언급되지만 시험 범위가 아니다."
      ],
      aside: "범위 심사는 \"이 주체의, 이 행위가 사법심사 대상인가\"를 묻는다 — 호주에서는 권한의 원천·형식이 여전히 지배한다."
    },
    en: {
      lead: "This week's question is which — and whose — actions are amenable to judicial review: the scope of review. The live controversy is privatisation and outsourcing: can review reach a body in private form that is nonetheless part of a public regulatory scheme?",
      paras: [
        "ADJR ss 5–7 split decision, conduct and failure-to-act. \"Decision\" was narrowed in Bond to the final, operative, determinative and substantive; \"conduct\" is broader (s 6), so even preparatory steps can be reached.",
        "Tang's two-limb \"under enactment\" test: (1) the decision is authorised/required by statute; (2) it affects legal rights through that statutory force. Internal university rules lacked statutory force, so they fell outside ADJR. M61 showed that an outsourced or offshore step still connected to the Minister's statutory power remains reviewable via s 39B / s 75(v).",
        "NEAT held that AWB, a private company exercising a veto inside a statutory export scheme, was not amenable to ADJR — private legal form can defeat review even within a public scheme. The UK \"public function\" test in Datafin has not been adopted in Australia (source/form of the power still dominates), and Fuller v Lawrence (2024) reaffirms the Tang approach. Non-justiciability (subject matter inapt for judicial resolution) is mentioned but is not examinable."
      ],
      aside: "Scope asks whether this body's action is amenable to review — in Australia the source and form of the power still dominate."
    }
  },
  w4: {
    kr: {
      lead: "Hossain(2018)의 3단계 분석 —\n(1) 권한이 부여되었는가,\n(2) 그 권한의 PBS(precondition · breadth · scope)가 충족되었는가,\n(3) 충족되었다 해도 sub-grounds(목적·고려사항·절차·합리성)에 위배되지 않았는가 — 가 이번 주의 뼈대다.",
      paras: [
        "이 \"empowering provision → PBS → sub-grounds\" 구조는 모든 사유 분석을 같은 도식 위에 올려놓는다. 예컨대 부적절한 목적은 PBS의 \"scope\"를 벗어났는가의 문제이고, 절차적 공정 위반은 PBS가 묵시적으로 요구한 절차요건을 어긴 것이며, 비합리성은 \"reasonable decision-maker가 도달할 수 있었던 결과의 범위\"를 벗어난 문제로 환원된다.",
        "여기에 W7에서 도입되는 materiality 요건이 더해진다. Hossain·SZMTA·Nathanson는 \"오류가 있어도 결과를 바꿀 현실적 가능성이 없다면 jurisdictional error가 아니다\"는 규칙을 정착시켰고, 이는 사법심사를 \"결과 지향적\" 도구로 다듬는다.",
        "Project Blue Sky(1998)는 두 번째 갈래를 만든다 — 절차요건 위반이 \"의회가 무효를 의도했는가\"의 해석 문제로 처리되어, 자동 무효(invalid)와 단순 위법(unlawful)을 분리한다."
      ],
      aside: "법원이 묻는 것은 \"왜 잘못되었나\"가 아니라 \"이 잘못이 권한 한계 안에 있는가\"이다."
    },
    en: {
      lead: "Hossain's three-stage frame —\n(1) was a power conferred,\n(2) were its preconditions / breadth / scope satisfied,\n(3) and even if so, did the sub-grounds (purpose, considerations, procedure, reasonableness) bite — is the spine of W4.",
      paras: [
        "This \"empowering provision → PBS → sub-grounds\" structure lets every ground sit on the same lattice. Improper purpose becomes a question of the power's scope; procedural unfairness, an implied PBS condition; unreasonableness, the bounded range a reasonable decision-maker could reach.",
        "Onto this stack you bolt materiality (W7). Hossain, SZMTA and Nathanson establish that an error which had no realistic possibility of changing the outcome is not jurisdictional, sharpening review into an outcome-sensitive instrument.",
        "Project Blue Sky (1998) adds a second branch: a breach of procedure becomes a question of statutory intent, dividing automatic invalidity from mere unlawfulness."
      ],
      aside: "The court asks not why something went wrong but whether the wrong was within power."
    }
  },
  w5: {
    kr: {
      lead: "위임입법(delegated legislation)은 의회가 \"틀\"만 정하고 세부는 행정에 맡기는 양식이다. 그 틀이 너무 헐거우면 의회가 입법권을 행정에 양도한 것이 되고, 너무 빡빡하면 입법은 무용해진다 — 그 균형이 이번 주의 핵심.",
      paras: [
        "McEldowney v Forde(1971)는 \"수권조항(empowering provision) → 위임입법(delegated legislation)\"의 검토 도식을 정착시켰다. 즉 위임입법은 모법이 부여한 권한의 명시적·묵시적 범위 안에서만 유효하며, 그 범위는 모법의 목적·맥락·기존 권리에 비추어 해석된다.",
        "W1–W4의 sub-grounds — 부적절한 목적, 고려사항 누락, 절차적 공정 결여, 비합리성 — 는 그대로 위임입법에도 적용된다. \"의회가 위임한 권한\"이라는 출발점만 바뀔 뿐이다. 추가로 등장하는 것이 (a) sub-delegation 금지(필요시 명시적 권한이 있어야), (b) 모법과의 inconsistency 금지(Federal Capital Commission), (c) 불확실성(uncertainty) 금지다.",
        "ADJR Act는 \"administrative character의 결정\"에 적용되므로 입법성격을 가진 위임입법은 ADJR 밖의 채널 — s 75(v), s 39B, declaration 등 — 으로 다투어야 한다."
      ],
      aside: "위임입법은 \"행정\"이지만 \"법\"이다. 법원이 풀 때 두 얼굴을 동시에 본다."
    },
    en: {
      lead: "Delegated legislation lets Parliament set a frame and the executive fill in the detail. Too loose a frame and the legislature has surrendered its power; too tight and the device is useless — W5 is the calibration.",
      paras: [
        "McEldowney v Forde (1971) crystallised the test as \"empowering provision → delegated legislation\": valid only within the express and implied scope of what the parent Act conferred, read against its purposes, context, and pre-existing rights.",
        "All W1–W4 sub-grounds — improper purpose, irrelevant considerations, procedural unfairness, unreasonableness — apply mutatis mutandis. What is added is (a) the rule against sub-delegation absent express power, (b) consistency with the parent Act (Federal Capital Commission), and (c) the bar on uncertainty.",
        "Because ADJR is anchored to \"decisions of an administrative character\", challenges to instruments that are legislative in character must use s 75(v), s 39B, or declaratory routes."
      ],
      aside: "Delegated legislation is administrative, but it is law. Courts read it with both faces visible."
    }
  },
  w6: {
    kr: {
      lead: "Procedural fairness는 \"공정한 절차의 hearing rule + 편향 배제 bias rule\"의 두 축이다. Kioa(1985) 이후 호주에서는 사실상 모든 결정이 이 의무를 묵시적으로 진다는 출발점이 자리잡았다.",
      paras: [
        "Hearing rule은\n(i) 결정에 \"adverse한\" 정보를 알리고,\n(ii) 의견 제출 기회를 주며,\n(iii) 그 의견을 \"진정으로 고려\"하는 의무다. 어떤 정도의 절차가 요구되는지는 \"이해관계의 성격\"과 \"결정의 맥락\"에 따라 변동한다 — Annetts(1990)는 본래 권리가 아니어도 \"정당한 기대(legitimate expectation)\"가 있으면 절차의무가 발생한다고 했다.",
        "Bias rule은 \"객관적 관찰자가 보기에 합리적 의심을 가질 만한가\"라는 외관 테스트(Webb v R, Ebner)를 쓴다. 결정자가 실제로 편향되지 않아도 그 외관만으로 결정을 무효로 만들 수 있다.",
        "두 규칙 모두 \"의회가 묵시적으로 요구한\" 절차요건이라는 점에서 PBS 분석에 환원된다 — 즉 W4 도식의 \"breadth\" 단계에서 작동한다."
      ],
      aside: "공정성은 \"누가 옳은가\"가 아니라 \"어떻게 듣는가\"의 규범이다."
    },
    en: {
      lead: "Procedural fairness sits on two pillars: the hearing rule and the rule against bias. After Kioa (1985), almost every administrative decision in Australia carries the obligation by implication.",
      paras: [
        "The hearing rule requires\n(i) disclosure of adverse material,\n(ii) an opportunity to respond, and\n(iii) genuine consideration of the response. How much process is owed varies with the nature of the interest and the statutory context. Annetts (1990) confirmed that even where no antecedent right exists, a legitimate expectation can summon the duty.",
        "The bias rule turns on appearance: would a fair-minded informed observer reasonably apprehend prejudgment (Webb v R, Ebner)? Actual bias is not required.",
        "Both rules feed back into the PBS frame — they are implied conditions on the breadth of the empowering provision, satisfying or failing W4 stage 2."
      ],
      aside: "Fairness is not who is right; it is how we listen."
    }
  },
  w7: {
    kr: {
      lead: "Hossain·SZMTA·Nathanson는 \"오류 + 결과를 바꿀 현실적 가능성\"을 jurisdictional error의 새 정의로 굳혔다. 동시에 Wei v Min for Immigration는 \"입증책임은 신청인에게\"라는 부담의 분배를 명확히 했다.",
      paras: [
        "전통적 \"any error voids the decision\" 접근은 행정부담을 과도하게 늘렸다. Hossain(2018)은 \"realistic possibility of a different outcome\"이라는 문턱을 도입했고, SZMTA(2019)는 그 문턱을 통계적·증거적으로 평가하는 방식을 다듬었다. Nathanson(2022)은 절차적 공정 위반에서도 같은 문턱을 적용하면서, \"공정성의 본질적 침해\"는 별도로 다뤄야 한다는 단서를 달았다.",
        "Materiality는 사법심사를 \"기술적\"에서 \"실질적\"으로 옮겨 놓는다. 그러나 동시에, 무엇이 \"realistic\"인지에 대한 판단이 사실상 merits에 가까워질 위험도 있다 — 강의는 이 긴장을 명시적으로 다룬다.",
        "Wei는 입증책임 분배를 정리했다: 오류 자체는 신청인이, 그 오류가 결과를 바꿀 가능성이 없었다는 점은 행정청이 입증해야 한다."
      ],
      aside: "오류는 무효를 자동적으로 부르지 않는다. 결과를 바꿀 수 있어야 한다."
    },
    en: {
      lead: "Hossain, SZMTA and Nathanson reframed jurisdictional error around \"error + a realistic possibility of a different outcome\". Wei sorted out who must prove what.",
      paras: [
        "The old \"any error voids\" approach loaded administrators unfairly. Hossain (2018) introduced the realistic-possibility threshold; SZMTA (2019) refined how it is evaluated on the evidence; Nathanson (2022) extended it to procedural unfairness while preserving a carve-out for breaches that cut to fairness's core.",
        "Materiality reorients review from the technical toward the substantive — at some risk of straying back into merits. The course is explicit about that tension.",
        "Wei (2015) settled the burden: the applicant proves the error; the decision-maker proves it could not have changed the result."
      ],
      aside: "Error does not automatically invalidate. It must have been able to change the outcome."
    }
  },
  w8: {
    kr: {
      lead: "구제수단(remedies)은 \"무엇을 원하는가\"의 답이다. Certiorari는 결정을 무효화하고, mandamus는 결정자를 다시 결정하게 만들고, prohibition은 권한 외 행위를 막고, declaration은 법적 상태를 확정한다.",
      paras: [
        "사법심사는 결정을 다시 내리지 않는다. 그러므로 거의 모든 사건은 결국 mandamus + certiorari의 조합으로 귀결된다 — 잘못된 결정을 무효로 하고, 다시 정당한 절차로 결정하라는 명령.",
        "Declaration은 가장 \"부드러운\" 구제수단으로 보이지만 강력하다. \"이 법은 이렇게 해석된다\"는 선언만으로도 행정청은 따라야 할 의무를 지며, 후속 결정의 합법성이 그 위에서 평가된다(Plaintiff M61).",
        "Discretionary considerations — laches(지연), futility(무용), alternative remedies, conduct of applicant — 가 모든 구제수단에 깔려 있다. 즉 권리가 있어도 법원이 그 사건에서 그 구제수단을 거부할 수 있다."
      ],
      aside: "구제수단은 권리의 그림자가 아니라 권리의 형태다."
    },
    en: {
      lead: "Remedies answer \"what do you want?\". Certiorari quashes; mandamus compels reconsideration; prohibition prevents ultra vires action; declaration fixes the legal state of play.",
      paras: [
        "Judicial review never re-makes the decision, so most cases land on the same pair: mandamus + certiorari — quash the decision and order it remade according to law.",
        "Declaration looks gentle but is potent: a statement that \"the Act means X\" binds the administrator and supplies the platform on which subsequent decisions are tested (Plaintiff M61).",
        "Discretionary factors — laches, futility, alternative remedies, applicant conduct — sit beneath every remedy. A right does not entitle you to a remedy the court can withhold."
      ],
      aside: "Remedies are not the shadow of rights; they are the shape of rights."
    }
  },
  w9: {
    kr: {
      lead: "통합 분석 주차. 사실관계를 받으면\n(1) 관할 →\n(2) 심사 범위 →\n(3) PBS →\n(4) 사유 →\n(5) materiality →\n(6) 구제 순으로 푼다. 이 흐름은 답안 골격이자 사고 도식이다.",
      paras: [
        "이번 주는 새 법리를 배우지 않는다. 이미 배운 도구들을 한 사실관계 위에서 어떻게 \"시퀀스\"로 적용하는지를 익힌다. 좋은 답안은 사유의 나열이 아니라, 한 단계가 다음 단계를 어떻게 좁히는지의 서사다.",
        "예컨대 ADJR로 시작했는데 권한 밖이면 s 39B / s 75(v)로 옮겨가야 하고, 결정 이전 단계라면 \"conduct\"·\"failure to act\"로 재조준해야 한다. 사유로 옮겨가면 PBS 어느 단계가 실패했는지 명시해야 하고, 결과적으로 어떤 구제가 효과적인지를 마지막에 묶어야 한다.",
        "시나리오 분석기가 이 시퀀스를 그대로 따라가도록 설계되어 있다 — 직접 풀어보면서 자기 사고의 빈 칸을 발견하라."
      ],
      aside: "법은 사실 위에서만 살아 있다. 도식은 그 생명을 잃지 않게 하는 골격이다."
    },
    en: {
      lead: "An integration week. Given facts, you walk:\n(1) jurisdiction →\n(2) scope →\n(3) PBS →\n(4) grounds →\n(5) materiality →\n(6) remedies. This flow is both an answer skeleton and a mode of thought.",
      paras: [
        "No new doctrine is added this week. What you practise is sequence: how each stage narrows the next. A good answer is not a list of grounds — it is a narrative of constraint propagating through the structure.",
        "If ADJR fails for jurisdiction, pivot to s 39B / s 75(v); if the act is preparatory, reframe as \"conduct\" or \"failure to act\". When you reach grounds, name which PBS stage they hit; at the end, tie remedies back to what would actually be effective.",
        "The scenario analyser is built to walk you through this exact chain — use it to expose the gaps in your own reasoning."
      ],
      aside: "Law lives only on facts. The frame is the skeleton that keeps the life intact."
    }
  },
  w10: {
    kr: {
      lead: "헌법적 한계 주차. Hickman → S157 → Kirk → Futuris → Graham 로 이어지는 \"사법심사를 입법으로 우회하려는 시도\"의 계보 — 그리고 그 한계.\n이 주차의 핵심 강조:\n(1) 진짜 전장은 정면 privative clause 가 아니라 \"실질적으로 JR을 어렵게 만드는 우회 기법들\"이다.\n(2) S157·Kirk 이후 입법자들은 거의 frontal clause 를 만들지 않는다 — secrecy(Graham), no-invalidity(Futuris), time bars(Bodruddaza)가 진짜 싸움터.",
      paras: [
        "Hickman 의 원조 해법(Dixon J): privative clause 와 statute 의 limits 사이 inconsistency 를 풀기 위해, clause 를 \"administrator 의 권한을 확장하는 것\"으로 reread 했다. 결과 — admin 의 결정은 다음 3가지가 충족되면 valid: bona fide attempt · reasonably connected to subject matter · reasonable reference to the power. 당시 courts 가 strike down 하지 않은 이유는 institutional: 옴부즈만·merits review·정치적 책임 같은 다른 mechanism 이 살아 있었고, 산업분쟁의 신속해결 같은 economic cost 도 인정되었으며, pre-Kirk 라 state 차원 entrenched minimum 이 없었기 때문.",
        "Plaintiff S157(2003)의 \"ingenious\" reframing — 핵심은 두 가지.\n첫째, Hickman 접근은 standard presumption 이 아니다. Privative clause 를 읽기 전에 먼저 두 가지 background principle 을 적용해야 한다: (a) Constitution 과 consistent 하게 (b) court jurisdiction 을 preserve 하게.\n둘째, 그 결과 clause 안의 \"decision\"은 JE-free decision 만 가리킨다. JE 가 있으면 Bhardwaj 따라 \"no decision at all\" → clause 의 범위 밖이라 75(v) review 가능. 솔직히 말하면 \"it's nuts, it's crazy\" — clause 를 사실상 eviscerate 시키지만, HCA 는 이후 이 reading 으로 돌아오지 않았다.",
        "S157 의 postscript — 본 사건 결과에 불필요한 obiter 이지만 의도된 헌법적 경고: (1) Groom's case 처럼 \"rule of conduct\"가 없는 guideline 입법은 head of power 와 disconnected 라 invalid. (2) Admin 이 자기 jurisdiction 한계를 conclusively 결정하면 judicial power 침해 — separation 위반. (3) 가장 강력 — 법령 의미와 행정권의 한계를 conclusively 정하는 권한은 exclusively judicial power. 메시지는 한 마디: \"don't push us too far — 우리 헌법적 탄약 있다.\"",
        "Kirk(2010) — \"funky, creative constitutional analysis.\" 정치적 communication 의 implied right 와 같은 결의 implied entrenched minimum: 주(州) 차원에서도 Supreme Court 의 감독관할은 헌법적으로 박탈 불가. Logic 은 S157 과 동일 — privative clause 는 JE review 를 막을 수 없다.",
        "포스트-S157·Kirk 의 전략 변화(시험 핵심): legislatures 는 더 이상 정면 privative clause 를 만들지 않는다. 대신 \"실질적으로 JR 을 어렵게 만드는 alternative techniques\" — secrecy clauses(Graham), no-invalidity clauses(Futuris), inflexible time bars(Bodruddaza). \"In practice make JR very difficult\" — 이 한 줄이 W10 의 키워드.",
        "Futuris(2008) 의 nuance — 강한 비판: HCA 의 reading 은 매우 literal 이다. s 175 는 broadly framed (\"any breach\")이고 court 는 Project Blue Sky 분석을 적용하면서도 \"rule of law\"는 단 한 번도 언급하지 않는다. 실무적으로 tax 결정에 JR 은 거의 unavailable. 그런데도 HCA 가 unperturbed 했던 이유 = Pt IVC TAA 라는 alternative review path 존재 (Federal Court appeal on question of law) — \"functional equivalent of JR.\" 주의: Futuris 에서 너무 extrapolate 하지 마라. PBS 자체가 implied no-invalidity clause 를 만든다는 점을 기억하면, targeted no-invalidity 는 명백히 valid; 문제는 Futuris 식 broad/blanket clause 뿐.",
        "No-invalidity clauses 의 일반 원칙(강의에서 Olivia·Cassidy 가 끌어낸 framing): (1) clause 가 broader 일수록 + alternative appeal 부재일수록 → 더 restrictive 한 해석 + S157-style 헌법 위협. (2) 법원은 \"clause 가 실무에서 무엇을 하는지(practical operation)\"를 본다 — Futuris 가 OK 였던 건 Pt IVC 가 있어서 \"complete no JR at all\"이 아니었기 때문. Functional equivalent 가 없으면 → S157·Kirk territory. 추가: Futuris 에서 HCA 는 또한 \"Federal Court 가 재량으로 거부했어야 한다\"고 말함 — alternative avenue 의 존재 자체가 discretionary refusal 의 사유가 된다.",
        "ADJR Act 실무 지침 — 실무 지침 — ADJR 이 적용되면 parallel s 39B 분석 생략. ADJR 만으로 풀어라. 핵심 조항: s 16(order of review = certiorari/mandamus/injunction 등가), s 5(decision not authorised by the Act = 기본 JE 개념), s 5(1)(j)(\"decision was otherwise contrary to law\" = JE species 의 catch-all), s 5(1)(f)(error of law on the face of the record — 유일하게 명시된 non-JE ground).",
        "Reasonableness · Irrationality — 시험 차원의 구별:\n• Wednesbury (ADJR 상 ground) — narrow 한 \"bizarre\" 기준, 실제 판결에서 적용된 예는 거의 없다.\n• Li 의 legal unreasonableness — discretion 결정에 적용; ADJR 에선 s 5(1)(j) catch-all 로 들어간다.\n• SZMDS 의 irrationality — jurisdictional fact / state of mind(satisfaction) 결정에 적용; SZMDS 는 unreasonableness 가 available 하지 않다는 전제에서 출발 (discretion 이 아니라 satisfaction 이라).\nGageler J in Li 는 이 distinction 이 중요하지 않을 수 있다고 시사했지만 minority. Safe approach — jurisdictional fact 결정에 unreasonableness 를 가져갈 때는 그 도전이 어렵다는 점을 인정.",
        "Agency vs Delegation(짧게): delegation 은 명시적 statutory authority 필요 → delegate 가 own name 으로 권한 행사. Agency 는 statutory authority 불필요 → agent 가 repository(원래 결정자)의 name 으로 서명. Justification 은 administrative efficiency. 단 agency 가 부적절한 영역 — 권한이 매우 significant 한 경우(예: 형사범죄 활동 승인), rare decisions, criminal element 와 연관된 경우.",
        "Materiality 의 ADJR 적용: ADJR 에서도 materiality 가 요구된다(long established). Hossain 의 self-sufficient criterion 과 Harold-type \"one of many considerations\" 문제는 구별. LPDT(2024) 의 핵심 — reasoning processes 자체의 오류는 immaterial 하다고 주장하기가 매우 어렵다. Cameron's question 에 대한 답: \"어차피 의존하지 않았을 것\"이라는 admin 의 자기증언만으로는 부족하다 — 다른 factors 와의 weighing 맥락에서 여전히 material 할 수 있다.",
        "AAT → ART 전환(2024년 10월): Scrutiny of Bills Committee 용 explanatory memorandum 상 \"basic powers 가 바뀌지 않도록 한다\"는 intention 이 매우 명확. 따라서 AAT case law (Shi · Frugtniet · Drake No 2) 는 ART 에 그대로 continues to apply. Section numbers 만 바뀐 정도 — 다음 강의에 정리 예정. 학생들에게 새 입법을 직접 읽으라고 요구하지는 않는다."
      ],
      aside: "헌법적 탄약은 있다. 다만 의회가 너무 밀어붙이지 않는 한 쏘지 않을 뿐이다. — 그래서 진짜 싸움은 정면 privative clause 가 아니라, \"in practice make JR very difficult\" 한 우회 기법들에서 일어난다."
    },
    en: {
      lead: "Constitutional-limits week. The lineage of legislative attempts to insulate decisions from JR — Hickman → S157 → Kirk → Futuris → Graham — and the limits the High Court has imposed on each.\nFraming:\n(1) The real battleground is not frontal privative clauses but the alternative techniques that \"in practice make JR very difficult.\"\n(2) After S157 and Kirk, legislatures rarely enact full-frontal clauses — secrecy (Graham), no-invalidity (Futuris) and inflexible time bars (Bodruddaza) are where the fight actually happens.",
      paras: [
        "Hickman's original solution (Dixon J): resolve the inconsistency between a statute's limits and a privative clause by rereading the clause as expanding the administrator's authority. A decision is then valid where there is (i) a bona fide attempt, (ii) reasonable connection to the subject matter, and (iii) reasonable reference to the power. Courts didn't strike privative clauses down at the time because other accountability mechanisms existed (ombuds, merits review, politics), industrial-relations contexts valued speedy resolution, and pre-Kirk there was no entrenched state-level supervisory minimum.",
        "Plaintiff S157 (2003) reframes the whole approach in two moves. First, Hickman is not a standard presumption — before reading a privative clause you apply two background principles of construction: consistency with the Constitution and preservation of court jurisdiction. Second, the \"decision\" the clause talks about is read down to mean a JE-free decision; on Bhardwaj a JE-affected act is \"no decision at all\" and so falls outside the clause's scope, leaving s 75(v) review intact. Blunt assessment: \"it's nuts, it's crazy\" — the reading eviscerates the clause — but the High Court has not gone back on it.",
        "S157's postscript — obiter, unnecessary to the result, but a deliberate constitutional warning. (1) Per Groom's case, a law without a \"rule of conduct\" (just guidelines) is invalid as disconnected from the head of power. (2) If an administrator conclusively determines the limits of their own jurisdiction, that intrudes on judicial power. (3) Strongest: the power conclusively to determine the meaning of legislation (including the limits of administrative jurisdiction) is exclusively judicial. The message: \"don't push us too far — we have constitutional ammunition.\"",
        "Kirk (2010) — \"funky, creative constitutional analysis\" of the same family as the implied right to political communication: an implied entrenched minimum at state level. Supreme Court supervisory jurisdiction over JE cannot be ousted. Same logic as S157, applied to the states.",
        "The strategic shift after S157 and Kirk (exam key point): legislatures stop drafting full-frontal privative clauses. The action moves to alternative techniques that \"in practice make JR very difficult\" — secrecy clauses (Graham), no-invalidity clauses (Futuris), inflexible time bars (Bodruddaza). \"In practice\" is the W10 keyword.",
        "Futuris (2008) — A strong critique: the HCA's reading is highly literal. s 175 is broadly framed (\"any breach\"), the Court analyses it through a Project Blue Sky lens, and the words \"rule of law\" never appear. In practice JR of tax decisions is virtually unavailable. Why wasn't the Court perturbed? Because Pt IVC TAA provides an alternative review path (Federal Court appeal on a question of law) — a functional equivalent of JR. Caution: don't over-extrapolate from Futuris. Project Blue Sky itself manufactured an implied no-invalidity clause, so targeted no-invalidity is plainly valid — the problem is Futuris-style broad/blanket clauses.",
        "General principles for no-invalidity clauses (drawn out in seminar by Olivia and Cassidy): (1) The broader the clause and the more absent any alternative appeals process, the more restrictive the construction — and the closer it sails to S157 trouble. (2) Courts look at what the clause does in practice — Futuris was fine because Pt IVC meant there was not \"no JR at all.\" Where no functional equivalent exists, you're back in S157/Kirk territory. Note also that Futuris held the Federal Court should have refused relief on discretionary grounds in any event — the existence of an alternative avenue is itself a reason a court may decline JR remedies in its discretion.",
        "ADJR Act practical guidance — In practice: where the ADJR Act applies, drop the parallel s 39B analysis and just run ADJR. Core provisions: s 16 (orders of review — functional equivalents of certiorari, mandamus, injunction); s 5 (decision not authorised by the Act = basic JE concept); s 5(1)(j) (\"decision was otherwise contrary to law\" — the catch-all that captures most JE species); s 5(1)(f) (error of law on the face of the record — the one explicit non-JE ground).",
        "Reasonableness · irrationality — exam-level distinctions.\n• Wednesbury (an ADJR ground) — narrow \"bizarre\" threshold; It is rarely seen actually carrying a case.\n• Li legal unreasonableness — for discretionary decisions; under the ADJR Act it sneaks in via s 5(1)(j).\n• SZMDS irrationality — for jurisdictional-fact / state-of-satisfaction decisions; SZMDS expressly proceeds on the footing that unreasonableness is not available because the power is conditioned on satisfaction, not discretion.\nGageler J in Li suggested the distinction may not be important, but that's a minority view. Safe approach — when running unreasonableness against a jurisdictional-fact decision, acknowledge it's a harder argument.",
        "Agency vs delegation (brief): delegation needs express statutory authority and the delegate exercises the power in their own name. Agency needs no statutory authority — the agent signs in the repository's name. The justification is administrative efficiency. Agency is unsuitable where the power is particularly significant (e.g. authorising criminalised activity), where decisions are rare, or where criminal elements are in play.",
        "Materiality under ADJR: materiality is required (long established). Distinguish Hossain (self-sufficient criterion) from Harold-type problems (one consideration among many). LPDT (2024) holds that errors in reasoning processes themselves are very hard to dismiss as immaterial. Answering Cameron's question: a decision-maker's self-report that \"I wouldn't have relied on it anyway\" is not enough — the factor can still be material in the weighing against others.",
        "AAT → ART transition (October 2024): The explanatory memorandum for the Scrutiny of Bills Committee makes clear that the basic powers do not change. AAT case law (Shi, Frugtniet, Drake No 2) continues to apply to ART; only section numbers shift. Students are not asked to read the new legislation themselves — updated section numbers will be provided."
      ],
      aside: "The constitutional ammunition exists. It just doesn't fire unless Parliament pushes too far — which is why the real fight is not against frontal privative clauses but against the workaround techniques that \"in practice make JR very difficult.\""
    }
  },
  w11: {
    kr: {
      lead: "이 주차는 두 축으로 본다. (1) 심판소를 통한 실체심사(merits review) — AAT/ART가 원결정자의 \"자리에 서서(stand in the shoes)\" 자기 앞 자료로 \"옳거나 더 바람직한\" 결정을 다시 내리는 작업. (2) 법원·심판소 \"너머\"의 책임성 — 옴부즈만, 의회, 그리고 FOI(정보자유). 사법심사가 법원·법적 권리에 묶여 있다면, 이 주차의 장치들은 권한이 약하거나(옴부즈만 권고), 정치적이거나(의회), 정보 흐름에 관한 것(FOI)이다.",
      paras: [
        "실체심사의 본질은 AAT Act s 43에 압축돼 있다. s 43(1)은 심판소에 원결정자의 \"모든 권한과 재량\"을 부여하면서, 인용·변경·취소(대체결정 또는 환송) 권한도 함께 주고, s 43(6)은 변경·대체된 결정을 원결정자의 결정으로 의제한다. 핵심은 \"do over again\" — 사법심사처럼 권한의 한계를 단속하는 것이 아니라 결정 자체를 다시 한다. Frugtniet[2019]은 \"같은 제약\" 부분을 못박았다: ASIC이 효력소멸 유죄판결을 고려할 수 없으니 AAT도 고려할 수 없다.",
        "기준은 Drake [No 1]이 만든 \"correct or preferable\" — 허용 가능한 결정이 하나뿐이면 \"옳은\", 여럿이면 \"더 바람직한\"을 고른다. AAT Act는 이 표준을 명문화하지 않았고 판례로 발전한 것이다. Shi[2008]는 사실 기준 시점을 정리: 통상 심판소가 결정하는 그 시점의 사실로 본다(s 303은 현재시제·\"becomes satisfied\" 표현 → 후속 자료 고려 가능). 결정의 성격이 시점을 고정시키는 예외(예: pension 취소의 그 시점)는 \"행정적 연속체(administrative continuum)\" 위에서 따로 본다.",
        "사법심사와 실체심사의 4대 규범 비교: 절차오류는 사법심사에서 독립적 의미가 있지만, 실체심사에서는 \"정확한 결정에 이르기 위해 필요한 만큼만\" 치유한다. 추론 규범은 정책 취급에서 갈리는데, Drake [No 2]가 표준 실무를 만들었다 — 심판소는 적법한 장관 정책을 통상 적용하되, 그 정책이 위법하거나 개별 사안에서 부당한 결과를 낳을 \"설득력 있는 사유\"가 있으면 따르지 않는다. Brennan J: \"비일관성은 단지 미관상 문제가 아니다; …그러나 일관성이 정의보다 우선하지 않는다.\" 사실에 대해서는 \"가장 큰 실질적 차이\" — 사법심사는 증거의 무게에 거의 개입하지 않지만(Bond) 실체심사는 어떤 사실문제든 다시 평가한다.",
        "AAT의 \"규범적(normative) 기능\" — Kerr Committee의 비전은 좋은 행정 결정의 모범을 보이는 것이었다. 세 가지 통로: 심판소의 존재 자체가 부처 관리자에게 결정 품질 관리를 압박; s 28의 이유제시 의무; 법령 의미의 권위 있는 해석. 한계: 영연방 심판소는 선례를 만들 수 없어 일반 규범 생성 능력이 약하고, 결정 강제 권한도 없다(헌법상 사법권 행사 불가). 그러나 강제력이 없다고 \"열등\"한 것은 아니다 — 폭과 깊이로 보면 정부 책임 확보의 더 중요한 장치일 수 있다.",
        "법원·심판소 \"너머\"의 책임성: 우선 \"청렴(integrity) 부문\" 또는 정부의 \"제4부문\"이라는 개념 — 옴부즈만·부패방지위·인권위·정보위·감사원장 등 독립 비사법기관의 급증을 입법·행정·사법 3분립을 넘는 묶음으로 본다. 옴부즈만이 그 \"전형\". 영연방 옴부즈만(Ombudsman Act 1976 (Cth))은 \"행정에 관한 행위\"를 조사하고(ADJR보다 넓은 관할, 외주서비스도 s 3BA로 포섭) 보고·권고만 한다. 법적 권리를 결정할 수 없다는 점이 강점이자 약점 — 강제력 없이 사과·설명·금전 보상·체계 변경 같은 법원이 못 만드는 구제를 협상한다.",
        "옴부즈만 기초는 \"maladministration\" — 위법성, 비-우선 결정뿐 아니라 지연·무례·비효율·무능까지. 영연방 옴부즈만의 잔여권은 s 15(1)(a)(v) \"otherwise wrong\" 와 s 15(1)(a)(iii) \"비합리·부정·억압·부당하게 차별적\". 전직 CO는 결정이 \"옹호 불가(unsupportable)\"한 경우에만 시정 권고한다고 시사했다. 현대의 목표는 정의가 흐릿한 \"영향(influence)\" — \"지속적이고 체계적인 행정 개선에 영향을 미치는 것\".",
        "Robodebt 사례가 옴부즈만의 작동과 한계를 동시에 보여준다. Centrelink가 2016년 시작한 OCI는 ATO 소득자료를 격주 평균화하고 입증책임을 시민에게 떠넘겼다. CO 보고서(2017/2019/2021)가 공정성·투명성 결함을 거듭 지적했지만, Carney의 비판처럼 옴부즈만·의회 권고는 \"근본 법적 오류\"를 시정하지 못했다 — Amato(연방법원 합의 선언)와 Prygodicz [No 2] [2021] FCA 634(Murphy J: \"수치스러운 장이자 행정의 거대한 실패\")가 위법성을 확인하기까지. 일반화하면(NSW 옴부즈만의 \"Robodebt 2.0\"): 재량 결정의 자동화는 법적 위험이 매우 크다.",
        "의회는 \"전형적인 지속적 책임성 장치\" — 책임성의 본질은 \"답하는 것(answerable)\"이다. 도구: 토론·동의안·질문·위원회 심사·민원 처리. 핵심 한계는 형식적 권한 부재 — 의회는 정부에 대한 공식적 권한이 없다. 이는 결함이 아니라 \"본질적 특성\". 장관은 자신이 \"책임지는\" 사안에만 답하면 되므로, 민영화·외주화·준자율기관은 장관 책임의 범위를 좁힌다. 감사원장(Auditor-General)이 의회와 강하게 연결된 책임성 직책의 대표 — Auditor-General Act 1997 (Cth) s 50은 예산을 법정 보호하는데, CO가 비교적 그 보호를 누리지 못하는 점과 대비된다.",
        "FOI(정보자유): 시민이 공공기관 보유 문서에 접근할 법적 권리, 면제만 예외. \"공개 추정(presumption in favour of disclosure)\"이 핵심. 호주는 정보가 아니라 \"문서(document)\"에 대한 권리 — 기관은 새 문서를 만들 의무가 없다. 청구권(s 11, 사유 무관 — s 11(2)), 사전 공표(IPS, Part II), 그리고 \"국가 자원\"으로서의 정보(s 3(3))라는 세 기능. 2010 개혁이 장관 확정증명서 폐지·OAIC 설치·공익 테스트(s 11B)를 도입했고, 개인 사생활(s 47F)이 가장 많이 주장되는 면제다.",
        "FOI 면제는 두 형태 — 강한 면제(s 33 국가안보·s 34 내각·s 37 법집행·s 38 법령상 비밀)와 조건부 면제(s 47C deliberative processes·s 47F 개인 사생활 등 — s 11B 공익 테스트). s 11B는 정부의 당혹·신뢰 상실 같은 무관 요소를 명시적으로 배제한다. 인접 영역: Privacy(같은 OAIC가 다룸 — 제3자 사생활 보호 측면이 s 47F), 비밀(\"양면\" — FOI는 비밀법에 종속), Archives Act 1983, PID Act 2013(내부고발자 보호), 그리고 PII(Conway v Rimmer·Sankey v Whitlam — 장관 확정증명서 시대를 끝내고 법원이 공익 형량). FOI는 그 자체로 책임성 장치가 아니지만 \"책임성의 생명선\" — 정확하고 적절한 정보가 모든 책임성 메커니즘의 전제다."
      ],
      aside: "심판소는 결정을 다시 내리고, 옴부즈만은 보고·권고로 영향을 만들고, 의회는 답을 요구하고, FOI는 그 모든 것을 가능케 할 정보의 흐름을 연다 — 어느 하나도 단독으로 충분하지 않다."
    },
    en: {
      lead: "Two axes this week. (1) Tribunal merits review — the AAT/ART \"stands in the shoes\" of the primary decision-maker and re-makes the \"correct or preferable\" decision on the material before it. (2) Accountability \"beyond\" courts and tribunals — ombuds, parliament, and freedom of information. Where judicial review is tied to courts and legal rights, the mechanisms here trade in influence (ombuds), political answerability (parliament), and information flow (FOI).",
      paras: [
        "Merits review is compressed into s 43 of the AAT Act. s 43(1) confers \"all the powers and discretions\" of the original decision-maker, plus the remedies of affirm / vary / set aside (substitute or remit); s 43(6) deems the varied or substituted decision to be the original decision-maker's. The point is \"do over again\" — not policing power limits, but re-making the decision. Frugtniet [2019] nailed down the \"same constraints\" half: a spent conviction ASIC could not consider is one the AAT could not consider either.",
        "The standard is the Drake [No 1] formula — \"correct\" (only one acceptable decision) or \"preferable\" (more than one acceptable, and the tribunal picks the best). The AAT Act does not spell it out; it has been developed by the tribunal itself. Shi [2008] settled the time-of-facts question: ordinarily the tribunal decides on facts as at the date of its own decision (s 303 is present-tense / \"becomes satisfied\" → post-decision material can come in). Exceptions arise where the nature of the decision fixes the time (e.g. a pension cancellation as at the date of cancellation) — sitting on top of the \"administrative continuum\".",
        "Four normative axes compared with judicial review. Procedural error has independent significance in JR; in merits review it is \"cured only if necessary\" to reach the correct decision. The reasoning axis splits on policy: Drake [No 2] sets the standard — the tribunal will ordinarily apply lawful ministerial policy unless cogent reasons against (unlawful, or producing an unjust outcome). Brennan J: \"Inconsistency is not merely inelegant…\" but \"consistency is not preferable to justice.\" Factual review is where the difference is \"greatest and most practically significant\" — JR rarely touches weight-of-evidence (Bond), but merits review re-decides any relevant fact.",
        "The AAT's \"normative\" function — the Kerr Committee's vision was for the tribunal to model good administrative decision-making. Three channels: the tribunal's mere existence pressures agency managers on decision quality; the s 28 reasons obligation; and authoritative elaboration of statutory meaning. Limits: Commonwealth tribunals cannot make precedent, so general-norm generation is weak, and they cannot enforce decisions (no judicial power). But unenforceability does not make merits review \"inferior\" — by breadth and depth it can be a more significant accountability mechanism than JR.",
        "Beyond courts and tribunals. The \"integrity branch\" / fourth-branch framing groups independent non-judicial bodies (ombuds, anti-corruption commissions, AHRC, OAIC, Auditor-General) outside the classic three-branch separation. The ombud is paradigmatic. The Commonwealth Ombudsman (Ombudsman Act 1976 (Cth)) investigates \"action that relates to a matter of administration\" (broader than ADJR; contracted-out services reachable under s 3BA) and only reports and recommends — no power to determine legal rights. That non-coercion is both weakness and strength: ombuds can negotiate remedies courts cannot (apology, explanation, monetary compensation, systemic change).",
        "The ombud basis is \"maladministration\" — wider than illegality or a non-preferable decision; covers delay, rudeness, inefficiency, incompetence. The CO's residual powers reach action that was \"otherwise wrong\" (s 15(1)(a)(v)) or where the law itself is \"unreasonable, unjust, oppressive or improperly discriminatory\" (s 15(1)(a)(iii)). A former CO suggested action would only be recommended where the decision was \"unsupportable.\" Modern goals gravitate to the loose objective of \"influence\" — \"influencing enduring systemic improvement in public administration.\"",
        "Robodebt shows both the ombud's reach and its limits. Centrelink's 2016 OCI averaged ATO income fortnightly and reversed the onus onto customers. CO reports (2017/2019/2021) flagged fairness and transparency failures, but as Carney argued, the ombud and parliamentary recommendations did not correct the underlying legal error — that was only confirmed in Amato (consent declarations) and Prygodicz [No 2] [2021] FCA 634 (Murphy J: \"a shameful chapter…and a massive failure of public administration\"). The general lesson (the NSW Ombudsman's \"Robodebt 2.0\"): automating discretionary decisions carries high legal risk.",
        "Parliament is the archetypal continuing accountability mechanism — to be accountable is to be answerable, to \"give an account.\" Tools: debates, motions, questions, committee inquiries, grievance-handling by MPs. The key limit is the absence of formal sanctions — parliament has no formal authority over governments. That is not a defect but an \"inherent characteristic.\" Ministers need only answer for what they are \"responsible\" for, so privatisation, contracting-out and quasi-autonomous agencies shrink the field of ministerial answerability. The Auditor-General is the contrasting strong case — Auditor-General Act 1997 (Cth) s 50 statutorily protects funding, unlike the Commonwealth Ombudsman.",
        "FOI gives a legally enforceable right of access to documents held by public agencies, subject to defined exemptions, on a presumption in favour of disclosure. Australia's regime is conceptually about documents, not information — so nothing new is created by a request. Three functions: access by request (s 11; reasons for asking are irrelevant — s 11(2)); proactive publication (the IPS, Part II); information as a national resource (s 3(3)). The 2010 reforms abolished ministerial conclusive certificates, created the OAIC and the public-interest test (s 11B); personal privacy (s 47F) is the most-claimed exemption.",
        "Two exemption types — \"hard\" (s 33 national security; s 34 Cabinet; s 37 law enforcement; s 38 statutory secrecy) and \"conditional\" (deliberative processes s 47C; personal privacy s 47F …) subject to the s 11B public interest test, which explicitly rules out irrelevant factors like embarrassment to government. Cognate regimes: privacy (third-party angle of s 47F, run inside the OAIC), secrecy (FOI operates subject to secrecy laws), the Archives Act 1983, the Public Interest Disclosure Act 2013 (whistleblower protection), and Public Interest Immunity (Conway v Rimmer; Sankey v Whitlam — ending the conclusive-certificate era, courts now balance the competing public interests). FOI is not itself an accountability mechanism, but adequate and accurate information is \"the lifeblood of accountability\" — the precondition of every other mechanism in this chapter."
      ],
      aside: "Tribunals re-make the decision; ombuds report and recommend their way to influence; parliament demands an answer; FOI opens the information flow that makes the others possible — none of them is enough on its own."
    }
  }
};

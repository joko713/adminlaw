// Key term & institution dictionary — used by Glossary mode.
// Each entry: { abbr, full_en, full_kr, desc_en, desc_kr, cases:[ids] }
// Categories: institutions (courts/tribunals/agencies), statutes (Acts + key sections),
// abbreviations (doctrinal short forms), concepts (key admin-law doctrines).

window.GLOSSARY_DATA = {
  institutions: [
    {
      abbr: 'HCA',
      full_en: 'High Court of Australia',
      full_kr: '호주 연방대법원',
      desc_en: 'Australia\'s apex court. Original jurisdiction under s 75(v) of the Constitution to issue constitutional writs (prohibition, mandamus, injunction) against officers of the Commonwealth — the entrenched supervisory jurisdiction at federal level.',
      desc_kr: '호주의 최고법원. 헌법 s 75(v)에 따라 영연방 공무원에 대한 헌법적 writ(prohibition, mandamus, injunction)를 발부하는 원시 관할을 가진다 — 연방 차원의 보호된 감독관할.',
      cases: ['s157','m70','m68','m61','graham','futuris']
    },
    {
      abbr: 'FCA',
      full_en: 'Federal Court of Australia',
      full_kr: '호주 연방법원',
      desc_en: 'Hears ADJR Act review of Commonwealth decisions, s 39B(1) Judiciary Act review of Cth officers, and appeals from many tribunals. Sits in single-judge and Full Court (FCAFC) configurations.',
      desc_kr: '영연방 결정에 대한 ADJR 심사, 영연방 공무원에 대한 Judiciary Act s 39B(1) 심사, 그리고 많은 심판소(tribunal) 항소를 다룬다. 단독 재판관과 전원재판부(FCAFC) 구성으로 운영.',
      cases: ['stretton','northcoast']
    },
    {
      abbr: 'FCAFC',
      full_en: 'Federal Court of Australia — Full Court',
      full_kr: '연방법원 전원재판부',
      desc_en: 'Appellate division of the FCA, sitting with three or five judges. Source of significant intermediate-appellate admin-law authority (Stretton on unreasonableness; LPDT below).',
      desc_kr: '연방법원의 항소부, 3인 또는 5인 재판관으로 구성. 행정법의 중요한 중간 항소심 권위의 원천(비합리성에 관한 Stretton, 하급심 LPDT 등).',
      cases: ['stretton']
    },
    {
      abbr: 'AAT',
      full_en: 'Administrative Appeals Tribunal',
      full_kr: '행정심판소 (구)',
      desc_en: 'Cth merits-review tribunal that operated 1976–2024. Replaced by the ART on 14 October 2024. Conducted "stand-in-the-shoes" merits review (Shi on timing; Frugtniet on legal constraints; Drake No 2 on policy application).',
      desc_kr: '1976–2024년 운영된 영연방 본안 재심사 심판소. 2024년 10월 14일 ART로 대체됐다. "원결정자의 신발을 신고" 하는 본안 재심사를 수행(시점은 Shi, 법적 제약은 Frugtniet, 정책 적용은 Drake No 2).',
      cases: ['shi','frugtniet','drake']
    },
    {
      abbr: 'ART',
      full_en: 'Administrative Review Tribunal',
      full_kr: '행정심사심판소 (신, 2024년 10월~)',
      desc_en: 'New Cth merits-review tribunal that replaced the AAT from 14 October 2024. Established by the Administrative Review Tribunal Act 2024 (Cth) in response to concerns about AAT appointment integrity and case management. Substantive merits-review framework (Shi/Frugtniet/Drake No 2) continues to apply.',
      desc_kr: '2024년 10월 14일 AAT를 대체한 새 영연방 본안 재심사 심판소. AAT의 임명 독립성·사건 관리 우려에 대한 응답으로 Administrative Review Tribunal Act 2024 (Cth)에 따라 설립. 본안 재심사의 실체적 framework(Shi/Frugtniet/Drake No 2)는 그대로 이어진다.',
      cases: ['shi','frugtniet','drake']
    },
    {
      abbr: 'MRT',
      full_en: 'Migration Review Tribunal',
      full_kr: '이민심사심판소 (구)',
      desc_en: 'Former specialist Cth tribunal that reviewed migration decisions; merged into the AAT in 2015, now within the ART migration jurisdiction. Featured in Bhardwaj as the tribunal whose self-correction was upheld.',
      desc_kr: '이민 결정을 재심사한 영연방 전문 심판소(구). 2015년 AAT에 통합됐고, 현재는 ART의 이민 관할에 들어 있다. Bhardwaj에서 자기 시정이 인정된 심판소.',
      cases: ['bhardwaj']
    },
    {
      abbr: 'RRT',
      full_en: 'Refugee Review Tribunal',
      full_kr: '난민심사심판소 (구)',
      desc_en: 'Former specialist Cth tribunal for refugee determinations; merged into the AAT in 2015. The tribunal whose decisions were challenged in Plaintiff S157, SZMDS, and many other refugee cases.',
      desc_kr: '난민 인정 영연방 전문 심판소(구). 2015년 AAT에 통합됐다. Plaintiff S157, SZMDS 등 많은 난민 사건에서 결정이 다투어진 심판소.',
      cases: ['s157','szmds']
    },
    {
      abbr: 'IAA',
      full_en: 'Immigration Assessment Authority',
      full_kr: '이민평가국',
      desc_en: 'Limited fast-track merits-review body created by the Migration Act for "fast track applicants" (boat arrivals). CNY17 raised apprehended-bias issues from prejudicial material being forwarded to IAA members.',
      desc_kr: 'Migration Act가 "fast-track 신청자"(보트 도착자)를 위해 만든 제한적·신속 본안 재심사 기관. CNY17에서 편견적 자료가 IAA 위원에게 전달된 것이 추정 편향 쟁점이 됐다.',
      cases: ['cny17']
    },
    {
      abbr: 'IMR',
      full_en: 'Independent Merits Review',
      full_kr: '독립 본안 재심사',
      desc_en: 'Non-statutory reviewing process used in offshore refugee status assessments by private contractors. Held reviewable on PF grounds in Plaintiff M61 — outsourcing did not insulate the process from JR. WZARH dealt with PF breach when an IMR reviewer was changed mid-process.',
      desc_kr: '민간 계약자가 역외 난민 지위 평가에 사용한 비-법정 재심사 절차. Plaintiff M61에서 PF 사유로 심사 대상이라고 인정 — 외주화가 절차를 JR에서 차단하지 못한다. WZARH는 IMR 심사관이 절차 도중 교체된 PF 위반 사안.',
      cases: ['m61','wzarh']
    },
    {
      abbr: 'MARA',
      full_en: 'Migration Agents Registration Authority',
      full_kr: '이민대리인 등록청',
      desc_en: 'Statutory body regulating migration agents under the Migration Act. Made the registration cancellation decision reviewed in Shi v MARA — the leading authority on the temporal frame for merits review.',
      desc_kr: 'Migration Act 아래에서 이민 대리인을 규율하는 법정 기관. Shi v MARA에서 본안 재심사의 시간 틀에 관한 선도 판례를 낳은 등록 취소 결정을 한 기관.',
      cases: ['shi']
    },
    {
      abbr: 'ABA',
      full_en: 'Australian Broadcasting Authority',
      full_kr: '호주방송국',
      desc_en: 'Former federal regulator of broadcasting. Made the content standard challenged in Project Blue Sky for breach of s 160 BSA (Australia–NZ trade obligations).',
      desc_kr: '구 영연방 방송 규제기관. Project Blue Sky에서 BSA s 160(호주-뉴질랜드 무역 의무) 위반으로 다투어진 콘텐츠 표준을 만든 곳.',
      cases: ['pbs']
    },
    {
      abbr: 'ABT',
      full_en: 'Australian Broadcasting Tribunal',
      full_kr: '호주방송심판소',
      desc_en: 'Earlier broadcasting regulator (pre-ABA). Made the interim findings on Alan Bond\'s broadcasting licence challenged in ABT v Bond — the leading authority on what counts as a "decision" under ADJR.',
      desc_kr: '구 방송 규제기관(ABA 이전). ABT v Bond에서 Alan Bond의 방송 면허에 대한 잠정 인정 — ADJR의 "결정"이 무엇인가에 관한 선도 판례 — 을 한 기관.',
      cases: ['bond']
    },
    {
      abbr: 'ASIC',
      full_en: 'Australian Securities and Investments Commission',
      full_kr: '호주 증권투자위원회',
      desc_en: 'Cth corporate, markets and financial-services regulator. Made the banning order reviewed in Frugtniet v ASIC — confirming the AAT is bound by the same legal constraints as the original decision-maker (no spent convictions).',
      desc_kr: '영연방 기업·시장·금융서비스 규제기관. Frugtniet v ASIC에서 다투어진 금지명령을 한 기관 — AAT가 원 결정자와 같은 법적 제약(만료 유죄 사용 불가)에 묶인다는 점을 확인.',
      cases: ['frugtniet']
    },
    {
      abbr: 'CJC',
      full_en: 'Criminal Justice Commission (QLD)',
      full_kr: '형사사법위원회(QLD)',
      desc_en: 'Former Queensland anti-corruption / oversight body. Produced the report recommending Ainsworth\'s exclusion from the poker-machine industry — leading authority on the certiorari/declaration boundary.',
      desc_kr: '구 퀸즐랜드 반부패·감독 기관. Ainsworth의 포커기 산업 배제를 권고하는 보고서를 낸 곳 — certiorari/declaration 경계에 관한 선도 판례.',
      cases: ['ainsworth']
    },
    {
      abbr: 'DAC',
      full_en: 'Development Assessment Commission (SA)',
      full_kr: '개발평가위원회(SA)',
      desc_en: 'SA planning body that approved the waste-recycling facility in Corporation of Enfield — the leading authority on objective jurisdictional facts.',
      desc_kr: 'Corporation of Enfield에서 폐기물 재활용 시설을 승인한 SA 계획 기관 — 객관적 관할권적 사실에 관한 선도 판례.',
      cases: ['enfield']
    },
    {
      abbr: 'ATSIC',
      full_en: 'Aboriginal and Torres Strait Islander Commission',
      full_kr: '원주민·토레스해협 도서민 위원회',
      desc_en: 'Former Cth indigenous-affairs statutory body (abolished 2005). The empowering Act in Vanstone v Clark — leading authority on proportionality review of delegated legislation.',
      desc_kr: '구 영연방 원주민 사무 법정 기관(2005년 폐지). Vanstone v Clark의 수권법 — 위임입법 비례성 심사의 선도 판례.',
      cases: ['vanstone']
    },
    {
      abbr: 'TGA',
      full_en: 'Therapeutic Goods Administration',
      full_kr: '치료재 관리국',
      desc_en: 'Cth medicines/medical-devices regulator. The body whose decisions on RU-486 (mifepristone) were unsuccessfully challenged in Right to Life Association v DHHS.',
      desc_kr: '영연방 의약품·의료기기 규제기관. Right to Life Association v DHHS에서 RU-486(mifepristone)에 관한 결정이 다투어진(실패) 기관.',
      cases: ['rtl']
    },
    {
      abbr: 'MIC',
      full_en: 'Minister for Immigration and Citizenship',
      full_kr: '이민·시민권 장관',
      desc_en: 'Portfolio shorthand for the Cth Minister responsible for immigration and citizenship. The Minister exercises personal, often non-compellable powers under the Migration Act (e.g. ss 48B, 417 in Plaintiff S10; s 501 character cancellations in Stretton/Jia/LPDT). Portfolio name has shifted over time (also "Home Affairs", "Immigration and Multicultural Affairs").',
      desc_kr: '이민·시민권을 담당하는 영연방 장관의 portfolio 약어. Migration Act 아래에서 개인적·강제불가 권한을 행사한다(예: Plaintiff S10의 ss 48B·417, Stretton/Jia/LPDT의 s 501 인격 취소). Portfolio 이름은 시기에 따라 바뀌었다(Home Affairs, Immigration and Multicultural Affairs 등).',
      cases: ['s10','jia','stretton','lpdt','nathanson','m1_2021']
    },
    {
      abbr: 'AG',
      full_en: 'Attorney-General',
      full_kr: '법무장관',
      desc_en: 'Cth/State chief law officer. Made the magistrate non-reappointment decision in AG (NSW) v Quin — the canonical statement of the legality/merits divide.',
      desc_kr: '영연방·주(州)의 최고 법무관. AG (NSW) v Quin에서 치안판사 미재임명 결정을 한 인물 — 합법성·본안 구분의 정전(canonical) 진술을 낳은 사건.',
      cases: ['quin']
    },
    {
      abbr: 'LSC',
      full_en: 'Local (Aboriginal) Land Council',
      full_kr: '지방 (원주민) 토지위원회',
      desc_en: 'NSW Aboriginal land councils with statutory functions. Bateman\'s Bay LSC\'s ultra vires expansion into funeral services was challenged in the leading commercial-competitor standing case.',
      desc_kr: '법정 기능을 가진 NSW 원주민 토지위원회. Bateman\'s Bay LSC의 권한 외 장례 서비스 확장이 상업적 경쟁자 standing의 선도 판례에서 다투어졌다.',
      cases: ['batemans']
    },
    {
      abbr: 'CO',
      full_en: 'Commonwealth Ombudsman',
      full_kr: '영연방 옴부즈만',
      desc_en: 'Independent statutory office (Ombudsman Act 1976 (Cth)) investigating complaints of maladministration in Cth administration. Reports and recommends — has no power to determine legal rights. Jurisdiction reaches "action that relates to a matter of administration" (broader than ADJR), including contracted-out services (s 3BA). The "Robodebt" inquiries (2017/2019/2021) and the OPCAT NPM Coordinator role are recent examples.',
      desc_kr: '영연방 행정의 maladministration 진정을 조사하는 독립 법정기관(Ombudsman Act 1976 (Cth)). 보고·권고만 하고 법적 권리를 결정할 권한은 없다. 관할은 "행정에 관한 행위(action relating to a matter of administration)"로 ADJR보다 넓고, 외주 서비스(s 3BA)도 포함. Robodebt 조사(2017/2019/2021)와 OPCAT NPM 조정자 역할이 최근 예.',
      cases: []
    },
    {
      abbr: 'OAIC',
      full_en: 'Office of the Australian Information Commissioner',
      full_kr: '호주 정보위원회 사무국',
      desc_en: 'Established by the AIC Act 2010 (Cth). Three offices in one: Information Commissioner (IC), FOI Commissioner (FOIC), Privacy Commissioner (PC). Handles first-tier merits review of FOI decisions (appeal to AAT/ART), monitors compliance, promotes good practice, and (uniquely the IC) advises on strategic public-sector information management.',
      desc_kr: 'AIC Act 2010 (Cth)으로 설립. Information Commissioner(IC)·FOI Commissioner(FOIC)·Privacy Commissioner(PC) 세 직책을 묶은 기관. FOI 결정의 1차 실체심사(이후 AAT/ART 항소), 준수 감독, 우수 관행 촉진, 그리고 IC만이 수행하는 공공부문 정보의 전략적 관리 자문.',
      cases: []
    },
    {
      abbr: 'AG (Auditor)',
      full_en: 'Auditor-General (Commonwealth)',
      full_kr: '영연방 감사원장',
      desc_en: 'Independent officer of parliament under the Auditor-General Act 1997 (Cth). Performs financial and performance audits of Cth entities; reports go directly to parliament. Unlike the Commonwealth Ombudsman, the Auditor-General enjoys statutory funding protection (s 50) and a Joint Committee oversight role — often contrasted with the CO\'s weaker institutional standing.',
      desc_kr: 'Auditor-General Act 1997 (Cth)에 따른 독립 의회 공무원. 영연방 기관의 재무·성과 감사를 수행하고 보고서를 직접 의회에 제출. 영연방 옴부즈만과 달리 법정 예산 보호(s 50)와 합동위원회 감독을 받음 — CO의 약한 제도적 지위와 자주 대비된다.',
      cases: []
    },
    {
      abbr: 'ARC',
      full_en: 'Administrative Review Council',
      full_kr: '행정심사위원회',
      desc_en: 'Established under the AAT Act with a "watching brief" over the federal administrative-justice system. Issued ~50 reports including the influential Internal Review of Agency Decision Making (Report No 44, 2000). Effectively defunded; statutory membership included the CO, the AHRC President, the ALRC President, and the Information Commissioner.',
      desc_kr: 'AAT Act에 따라 설립되어 연방 행정정의 체계 전반을 감시하는 "watching brief"를 수행. 약 50개의 영향력 있는 보고서를 발표(예: Internal Review of Agency Decision Making, Report No 44, 2000). 사실상 예산 삭감으로 기능 정지. 법정 구성원으로는 CO·AHRC 위원장·ALRC 위원장·Information Commissioner가 포함.',
      cases: []
    },
  ],

  statutes: [
    {
      abbr: 'ADJR Act',
      full_en: 'Administrative Decisions (Judicial Review) Act 1977 (Cth)',
      full_kr: '행정결정(사법심사)법 1977 (Cth)',
      desc_en: 'Cth statutory JR scheme codifying common-law grounds. Requires a "decision under an enactment" — gateway controlled by Bond (s 5/s 6 line) and Tang (two-limb test). When ADJR is blocked, applicants pivot to s 75(v) / s 39B(1) under S157.',
      desc_kr: '보통법 사유를 법정화한 영연방 법정 JR 체계. "수권법에 따른 결정"을 요구 — 관문은 Bond(s 5/s 6 경계)와 Tang(2단계 테스트)이 통제. ADJR이 막히면 신청인은 S157 framing의 s 75(v) / s 39B(1)로 갈아탄다.',
      cases: ['bond','tang','argos','fuller']
    },
    {
      abbr: 's 75(v)',
      full_en: 'Constitution s 75(v) — High Court original jurisdiction',
      full_kr: '헌법 s 75(v) — High Court 원시 관할',
      desc_en: 'Entrenched HCA jurisdiction to issue prohibition, mandamus, or injunction against officers of the Commonwealth. Cannot be ousted by Parliament — Plaintiff S157 reads privative clauses down to preserve it; Graham extends the protection against information-control clauses.',
      desc_kr: 'High Court가 영연방 공무원에 대해 prohibition, mandamus, injunction을 발부하는 헌법적으로 보호된 관할. 의회가 봉쇄할 수 없다 — Plaintiff S157은 배제조항을 좁게 읽어 이를 보존하고, Graham은 정보 통제 조항에까지 보호를 확장한다.',
      cases: ['s157','graham','m68','futuris']
    },
    {
      abbr: 's 39B(1)',
      full_en: 'Judiciary Act 1903 (Cth) s 39B(1)',
      full_kr: 'Judiciary Act 1903 (Cth) s 39B(1)',
      desc_en: 'Grants the Federal Court the same JR jurisdiction the HCA has under s 75(v) — Cth-officer review on common-law grounds with constitutional writs. Combined with s 75(v) it is the standard pivot when ADJR is unavailable (Bond/Tang).',
      desc_kr: 'High Court의 s 75(v) 관할과 같은 JR 관할을 연방법원에 부여 — 영연방 공무원에 대한 보통법 사유 심사 + 헌법적 writ. s 75(v)와 결합해 ADJR이 막힌 자리(Bond/Tang)의 표준 갈아타기 경로.',
      cases: ['s157','bond','tang']
    },
    {
      abbr: 'Migration Act',
      full_en: 'Migration Act 1958 (Cth)',
      full_kr: 'Migration Act 1958 (Cth)',
      desc_en: 'Cth migration framework. Featured in most modern admin-law cases: s 474 (privative clause — S157), s 501 (character cancellation — Stretton/Jia/Nathanson/LPDT), s 503A(2) (secrecy — Graham), ss 48B/417 (non-compellable personal powers — S10), s 198A (third-country declaration — M70), s 46A ("lift the bar" — M61).',
      desc_kr: '영연방 이민 체계. 현대 행정법 사건의 대부분에 등장한다: s 474(배제조항 — S157), s 501(인격 취소 — Stretton/Jia/Nathanson/LPDT), s 503A(2)(비밀 — Graham), ss 48B/417(강제불가 개인 권한 — S10), s 198A(제3국 선언 — M70), s 46A("bar 풀기" — M61).',
      cases: ['s157','stretton','jia','nathanson','lpdt','graham','s10','m70','m61']
    },
    {
      abbr: 's 474 Migration Act',
      full_en: 'Migration Act 1958 (Cth) s 474 — privative clause',
      full_kr: 'Migration Act 1958 (Cth) s 474 — 배제조항',
      desc_en: 'Purported to make Tribunal "decisions" final and unreviewable. Read down in Plaintiff S157 to mean lawful decisions only; JE-affected decisions fall outside the clause and remain reviewable under s 75(v).',
      desc_kr: 'Tribunal의 "결정"을 종국적·심사불가로 만들려 한 조항. Plaintiff S157에서 적법한 결정만을 의미하도록 좁게 읽혔다 — JE 영향 결정은 그 조항 밖에 있어 s 75(v)로 여전히 심사 가능.',
      cases: ['s157']
    },
    {
      abbr: 's 501 Migration Act',
      full_en: 'Migration Act 1958 (Cth) s 501 — character cancellation',
      full_kr: 'Migration Act 1958 (Cth) s 501 — 인격 사유 취소',
      desc_en: 'Visa cancellation on character grounds, including the mandatory s 501(3A). The workhorse provision in modern admin-law cases on PF, reasoning, materiality, and bias (Stretton, Jia, Nathanson, LPDT, M1/2021).',
      desc_kr: 's 501(3A)의 의무적 취소를 포함한, 인격 사유 비자 취소. 현대 행정법 사건의 주력 조항 — PF, 추론, materiality, 편향(Stretton, Jia, Nathanson, LPDT, M1/2021).',
      cases: ['stretton','jia','nathanson','lpdt']
    },
    {
      abbr: 's 5 / s 6 ADJR',
      full_en: 'ADJR Act ss 5 and 6 — decision vs conduct',
      full_kr: 'ADJR Act ss 5와 6 — 결정 vs 행위',
      desc_en: 's 5 reviews final, operative, determinative "decisions" (Bond test). s 6 reviews "conduct" preparatory to making a decision — broader, captures intermediate steps that fall short of s 5.',
      desc_kr: 's 5는 최종·실효·결정적 "결정"을 심사(Bond 테스트). s 6는 결정을 만들기 위한 준비 "행위"를 심사 — 더 넓고, s 5에 못 미치는 중간 단계를 포착.',
      cases: ['bond']
    },
    {
      abbr: 'ITAA s 175',
      full_en: 'Income Tax Assessment Act 1936 (Cth) s 175',
      full_kr: 'Income Tax Assessment Act 1936 (Cth) s 175',
      desc_en: 'A "no-invalidity" clause preserving the statutory effect of tax assessments despite certain errors. Held constitutional in Futuris because s 75(v) JR for jurisdictional error remained available — distinguishes no-invalidity clauses from true privative clauses.',
      desc_kr: '특정 오류에도 과세 결정의 법적 효력을 유지시키는 "no-invalidity" 조항. Futuris에서 관할권적 오류에 대한 s 75(v) JR이 남아 있어 합헌으로 인정 — no-invalidity 조항과 진정한 배제조항을 구별.',
      cases: ['futuris']
    },
    {
      abbr: 'EPBC Act',
      full_en: 'Environment Protection and Biodiversity Conservation Act 1999 (Cth)',
      full_kr: '환경보호·생물다양성 보전법 1999 (Cth)',
      desc_en: 'Cth environmental statute. Section 487 confers open standing for environmental matters — an example of statute overriding the ACF special-interest baseline. Check this provision before reaching for ACF / Onus / NCEC.',
      desc_kr: '영연방 환경법. s 487이 환경 사안에 open standing을 부여 — 법령이 ACF의 special-interest 기본선을 덮어쓰는 예. ACF / Onus / NCEC를 꺼내기 전에 이 조항부터 확인.',
      cases: ['acf','northcoast']
    },
    {
      abbr: 'Crimes Act spent convictions',
      full_en: 'Crimes Act 1914 (Cth) Pt VIIC — spent-convictions regime',
      full_kr: 'Crimes Act 1914 (Cth) Pt VIIC — 만료 유죄 체계',
      desc_en: 'Statutory regime excluding old/minor convictions from being taken into account. Applied in Frugtniet v ASIC: a merits-review tribunal is bound by the same exclusion as the original decision-maker — cannot rely on spent convictions ASIC could not consider.',
      desc_kr: '오래된·경미한 유죄를 고려 대상에서 제외하는 법정 체계. Frugtniet v ASIC에서 적용 — 본안 재심사 심판소는 원 결정자와 같은 배제에 묶이며, ASIC가 고려할 수 없었던 만료 유죄에 의존할 수 없다.',
      cases: ['frugtniet']
    },
    {
      abbr: 'BSA s 160',
      full_en: 'Broadcasting Services Act 1992 (Cth) s 160',
      full_kr: 'Broadcasting Services Act 1992 (Cth) s 160',
      desc_en: 'Required the ABA to perform its functions consistently with Australia\'s international obligations. The breached provision in Project Blue Sky — held not to invalidate the resulting content standard because Parliament did not intend that consequence.',
      desc_kr: 'ABA가 호주의 국제의무에 부합되게 직무를 수행하도록 요구. Project Blue Sky에서 위반된 조항 — 의회가 그 결과를 의도하지 않았으므로 결과적 콘텐츠 표준을 무효로 만들지 않는다고 인정.',
      cases: ['pbs']
    },
    {
      abbr: 'Pt IVC TAA',
      full_en: 'Taxation Administration Act 1953 (Cth) Pt IVC — taxation objections and review',
      full_kr: 'Taxation Administration Act 1953 (Cth) Pt IVC — 조세 이의 및 심사 절차',
      desc_en: 'Statutory scheme for tax objections, AAT (now ART) merits review, and Federal Court appeals from the Commissioner. The alternative contestability path that satisfies the constitutional rule that a tax cannot be made incontestable (MacCormick; Richard Walter) — which is why s 175 ITAA (the no-invalidity clause) is constitutionally permissible despite shielding ordinary process errors from constitutional-writ review (Futuris). Burden of proof on the taxpayer (ss 14ZZK, 14ZZO); Commissioner must implement AAT/FCA outcomes (ss 14ZZL, 14ZZQ).',
      desc_kr: '조세 이의·AAT(현재 ART) 본안 재심사·연방법원 항소를 위한 법정 체계. 조세는 incontestable할 수 없다는 헌법 원칙(MacCormick; Richard Walter)을 충족시키는 대체 다툴 수 있는 경로 — 그래서 s 175 ITAA(no-invalidity 조항)가 통상의 절차 오류를 헌법적 writ 심사에서 차단해도 헌법적으로 허용된다(Futuris). 입증책임은 납세자(ss 14ZZK, 14ZZO); Commissioner는 AAT/FCA 결과를 이행해야 한다(ss 14ZZL, 14ZZQ).',
      cases: ['futuris']
    },
    {
      abbr: 's 503A Migration Act',
      full_en: 'Migration Act 1958 (Cth) s 503A — gazetted agency confidentiality',
      full_kr: 'Migration Act 1958 (Cth) s 503A — 관보 지정 기관 기밀',
      desc_en: 'Protected information communicated to a "gazetted agency" on confidentiality conditions from disclosure to persons or courts. In Graham, s 503A(2)(c) was held constitutionally invalid in its application to HCA s 75(v) and FCA s 476A review of s 501-series decisions because it deprived the court "in limine" of access to the very material relevant to whether legal limits on power were observed.',
      desc_kr: '"관보 지정 기관(gazetted agency)"에 비밀 조건으로 전달된 정보의 사람·법원 공개 금지. Graham에서 s 503A(2)(c)는 s 501계 결정의 HCA s 75(v) 및 FCA s 476A 심사 적용 범위에서 — 권한의 법적 한계 준수 여부에 관련된 바로 그 자료를 법원이 처음부터(in limine) 박탈당하게 했으므로 — 헌법적으로 무효 판정.',
      cases: ['graham']
    },
    {
      abbr: 'AAT Act',
      full_en: 'Administrative Appeals Tribunal Act 1975 (Cth)',
      full_kr: '행정심판소법 1975 (Cth)',
      desc_en: 'Foundation of federal merits review (succeeded operationally by the ART from October 2024). s 25 confers jurisdiction; s 43(1) confers "all the powers and discretions" of the original decision-maker plus the remedial powers to affirm / vary / set aside (then substitute or remit); s 43(6) deems a varied/substituted decision to be the original decision-maker\'s; s 28 imposes reasons obligations; s 44 provides appeal to the Federal Court on questions of law only.',
      desc_kr: '연방 실체심사의 토대(2024년 10월부터 ART가 운영 승계). s 25 관할 부여, s 43(1)이 원결정자의 "모든 권한과 재량"과 인용/변경/취소(대체결정 또는 환송) 권한을 부여, s 43(6)이 변경·대체 결정을 원결정자의 결정으로 의제, s 28은 이유제시 의무, s 44는 법률문제에 한정한 연방법원 항소를 규정.',
      cases: ['shi','frugtniet','drake']
    },
    {
      abbr: 'Ombudsman Act',
      full_en: 'Ombudsman Act 1976 (Cth)',
      full_kr: '옴부즈만법 1976 (Cth)',
      desc_en: 'Establishes the Commonwealth Ombudsman. Jurisdiction over "action that relates to a matter of administration" (broader than ADJR). Wide discretion to decline/cease investigations (s 6); contracted-out services reachable (s 3BA); investigations private (s 8); confidentiality rules (s 35, s 35A); recommendations are wide (s 15) but non-binding. Ministerial action is excepted, but officials\' advice to ministers is investigable (s 5(3A)).',
      desc_kr: '영연방 옴부즈만을 설립. 관할은 "행정에 관한 행위"(ADJR보다 넓음). 조사 거절·중단 재량이 넓음(s 6), 외주 서비스도 포함(s 3BA), 조사는 비공개(s 8), 비밀유지(s 35, s 35A), 권고는 광범위(s 15)하지만 구속력 없음. 장관의 행위는 원칙적 제외이나 장관 자문 공무원의 행위는 조사 가능(s 5(3A)).',
      cases: []
    },
    {
      abbr: 'FOI Act',
      full_en: 'Freedom of Information Act 1982 (Cth)',
      full_kr: '정보자유법 1982 (Cth)',
      desc_en: 'Creates an enforceable right of access to documents held by Cth agencies, subject to defined exemptions. Objects (s 3) reinforce a pro-disclosure presumption. "Every person" has access (s 11) and reasons for asking are irrelevant (s 11(2)). Conditional exemptions (Part IV Division 3) apply the public-interest test (s 11B). Cabinet documents (s 34), national security (s 33), law enforcement (s 37), statutory secrecy (s 38) are "hard" exemptions. Personal privacy (s 47F) is the most-claimed exemption.',
      desc_kr: '영연방 기관 보유 문서에 대한 법적 접근권을 만들어 명시된 면제만 예외로 둠. s 3 목적조항이 공개 추정을 강화. s 11에 따라 "모든 사람"이 접근권을 가지고 신청 사유는 무관(s 11(2)). 조건부 면제(Part IV Division 3)는 공익 테스트(s 11B) 적용. 내각문서(s 34)·국가안보(s 33)·법집행(s 37)·법령상 비밀(s 38)은 "강한" 면제. 개인 사생활(s 47F)이 가장 많이 주장되는 면제.',
      cases: []
    },
    {
      abbr: 'AIC Act',
      full_en: 'Australian Information Commissioner Act 2010 (Cth)',
      full_kr: '호주 정보위원회법 2010 (Cth)',
      desc_en: 'Establishes the OAIC and the Information Commissioner role (s 7). Reorients the FOI regime around the OAIC as a single agency for FOI, privacy and strategic information management. The 2010 reforms also abolished ministerial conclusive certificates so all exemption claims are reviewable.',
      desc_kr: 'OAIC와 Information Commissioner 직책(s 7)을 설립. FOI·사생활·전략적 정보관리를 OAIC라는 단일 기관 중심으로 재편. 2010 개혁은 장관 확정증명서도 폐지해 모든 면제 주장이 심사 가능하도록 함.',
      cases: []
    },
    {
      abbr: 'PID Act',
      full_en: 'Public Interest Disclosure Act 2013 (Cth)',
      full_kr: '공익신고법 2013 (Cth)',
      desc_en: 'Protects public-sector whistleblowers from criminal/civil/disciplinary consequences when they make an open disclosure of significant wrongdoing motivated by public interest. The Commonwealth Ombudsman plays a significant administering role. Shares the FOI Act\'s goals of transparency, openness, and accountability — but operates subject to secrecy laws (cf. FOI s 38).',
      desc_kr: '공공부문 내부고발자가 공익 동기로 중대한 부정행위에 대해 공개 진술할 때 형사·민사·징계상 보호를 제공. 영연방 옴부즈만이 운영에서 중요한 역할을 수행. 투명성·개방성·책임성이라는 FOI 목적과 공유되지만, 비밀유지법에 종속되어 작동(FOI s 38과 같은 맥락).',
      cases: []
    },
  ],

  abbreviations: [
    {
      abbr: 'JR',
      full_en: 'Judicial review',
      full_kr: '사법심사',
      desc_en: 'Court review of administrative decisions for legality (not merits — Quin). Federal channels: ADJR Act, s 39B(1) Judiciary Act, s 75(v) Constitution. State channel: Supreme Court supervisory jurisdiction entrenched by Kirk.',
      desc_kr: '행정결정의 적법성에 대한 법원 심사(본안이 아니라 — Quin). 연방 채널: ADJR Act, s 39B(1) Judiciary Act, s 75(v) 헌법. 주 채널: Kirk에서 보호된 대법원 감독관할.',
      cases: ['quin','s157','kirk-jurisdiction']
    },
    {
      abbr: 'JE',
      full_en: 'Jurisdictional error',
      full_kr: '관할권적 오류',
      desc_en: 'A decision affected by JE has no legal force (Bhardwaj nullity). Analysed in three stages (Hossain): identify the condition → PBS asks whether breach was intended to invalidate → materiality (MZAPC/LPDT). "Always-JE" categories bypass materiality.',
      desc_kr: 'JE의 영향을 받은 결정은 법적 효력이 없다(Bhardwaj 무효). 3단계로 분석(Hossain): 조건 식별 → PBS는 위반이 무효를 의도했는지 → materiality(MZAPC/LPDT). "Always-JE" 범주는 materiality 우회.',
      cases: ['hossain','mzapc','lpdt','bhardwaj','pbs']
    },
    {
      abbr: 'PF',
      full_en: 'Procedural fairness',
      full_kr: '절차적 공정',
      desc_en: 'Default common-law duty implied into administrative power (Kioa), excluded only by clear statutory words (Saeed). Two limbs: hearing rule (notice + opportunity to respond — VEAL, WZARH) and bias rule (Ebner, Jia, Isbester). Touchstone is practical injustice (Lam).',
      desc_kr: '행정 권한에 묵시되는 보통법상 기본 의무(Kioa). 분명한 법령 문언으로만 배제(Saeed). 두 갈래 — 청문 규칙(고지 + 답변 기회 — VEAL, WZARH)과 편향 규칙(Ebner, Jia, Isbester). 핵심 기준은 실질적 부정의(Lam).',
      cases: ['kioa','saeed','veal','wzarh','ebner','jia','isbester','lam','nathanson']
    },
    {
      abbr: 'JF',
      full_en: 'Jurisdictional fact',
      full_kr: '관할권적 사실',
      desc_en: 'A fact made by statute a precondition to power. Objective JFs: court determines for itself on the evidence (Enfield, M70 at scale). Subjective ("state of mind") JFs: SZMDS — illogicality/irrationality threshold, not de novo determination. JF errors are always-JE.',
      desc_kr: '법령이 권한의 전제로 정한 사실. 객관적 JF: 법원이 증거로 직접 판단(Enfield, 큰 규모는 M70). 주관적("state of mind") JF: SZMDS — 비논리성·비합리성 기준이지 de novo 판단 아님. JF 오류는 always-JE.',
      cases: ['enfield','m70','szmds']
    },
    {
      abbr: 'PBS',
      full_en: 'Project Blue Sky (validity test) / Precondition, Breadth, Scope',
      full_kr: 'Project Blue Sky(유효성 테스트) / Precondition·Breadth·Scope',
      desc_en: 'Two senses. (1) The Project Blue Sky validity test — whether breach invalidates depends on Parliament\'s intent re consequence (Hossain Stage 2). (2) The three axes of power analysis at Hossain Stage 2: Precondition (does the power arise?), Breadth (reach), Scope (purpose).',
      desc_kr: '두 의미. (1) Project Blue Sky 유효성 테스트 — 위반이 무효화하는지는 의회의 결과 의도에 달림(Hossain 2단계). (2) Hossain 2단계 권한 분석의 3축: Precondition(권한이 발생하는가), Breadth(미치는 범위), Scope(목적 범위).',
      cases: ['pbs','hossain','enfield']
    },
    {
      abbr: 'IRAC',
      full_en: 'Issue · Rule · Application · Conclusion',
      full_kr: '쟁점·법리·적용·결론',
      desc_en: 'Standard exam-answer scaffold. Issue: legal question; Rule: applicable doctrine + cases; Application: map rule onto facts; Conclusion: how the question resolves. The Scenario analyser in this app produces an IRAC skeleton for each fact pattern.',
      desc_kr: '시험 답안의 표준 골격. 쟁점: 법적 질문; 법리: 적용 법리 + 케이스; 적용: 법리를 사실에 매핑; 결론: 질문이 어떻게 해결되는가. 이 앱의 시나리오 분석기가 각 사실관계에 대해 IRAC 골격을 생성.',
      cases: []
    },
    {
      abbr: 'MRC / IRC',
      full_en: 'Mandatory Relevant Consideration / Irrelevant Consideration',
      full_kr: '강행 고려사항 / 무관 고려사항',
      desc_en: 'Two halves of the considerations sub-ground (Peko-Wallsend). MRC: factor the statute expressly or impliedly requires to be considered — failure to consider is JE. IRC: factor not within the statute\'s contemplation — considering it can also be JE.',
      desc_kr: '관련 고려사항 사유의 두 반쪽(Peko-Wallsend). MRC: 법령이 명시 또는 묵시적으로 고려를 요구하는 요소 — 누락하면 JE. IRC: 법령이 고려를 의도하지 않은 요소 — 고려하는 것도 JE.',
      cases: ['peko','tickner']
    },
    {
      abbr: 'PoL',
      full_en: 'Principle of Legality',
      full_kr: '합법성 원칙',
      desc_en: 'Statutory-interpretation presumption that statutes do not abrogate fundamental rights/freedoms/immunities absent unmistakable and unambiguous language (Coco). Extended to PF (Saeed) and delegated legislation (Evans).',
      desc_kr: '법령이 분명하고 모호하지 않은 문언 없이 기본권·자유·면제를 폐지하는 것으로 추정되지 않는다는 법령 해석 추정(Coco). PF(Saeed)와 위임입법(Evans)에 확장.',
      cases: ['coco','saeed','evans']
    },
    {
      abbr: 'IMA',
      full_en: 'Illegal Maritime Arrival',
      full_kr: '불법 해상 도착자',
      desc_en: 'Migration Act category for asylum seekers arriving by boat without a valid visa. Subject to fast-track IAA review and lower-priority processing (M64 priorities policy).',
      desc_kr: 'Migration Act가 유효한 비자 없이 보트로 도착한 망명 신청자를 분류하는 범주. Fast-track IAA 재심사와 낮은 우선순위 처리(M64 우선순위 정책)의 대상.',
      cases: ['m64','cny17']
    },
    {
      abbr: 'PAM 3',
      full_en: 'Procedures Advice Manual 3 (Department of Home Affairs)',
      full_kr: 'Procedures Advice Manual 3 (Home Affairs 부처)',
      desc_en: 'Internal Departmental policy manual guiding migration decisions. The PAM 3 priorities policy with an exception clause was upheld in M64 as preserving evaluative discretion — contrasted with the inflexible policy struck down in Green v Daniels.',
      desc_kr: '이민 결정을 안내하는 부처 내부 정책 매뉴얼. M64에서 예외 조항을 둔 PAM 3 우선순위 정책이 평가적 재량을 보존한다고 인정 — Green v Daniels에서 무효화된 경직된 정책과 대조.',
      cases: ['m64','green']
    },
    {
      abbr: 'Cth / Cwth',
      full_en: 'Commonwealth (i.e. federal)',
      full_kr: '영연방 (즉 연방)',
      desc_en: 'Standard abbreviation for the Commonwealth of Australia in citations and rule statements. Cth statutes use this in their short titles (e.g. Migration Act 1958 (Cth)).',
      desc_kr: '인용과 법리 진술에서 호주연방(Commonwealth of Australia)의 표준 약어. Cth 법령은 약칭에서 이를 사용한다(예: Migration Act 1958 (Cth)).',
      cases: []
    },
    {
      abbr: 'GoR',
      full_en: 'Ground of Review',
      full_kr: '심사 사유',
      desc_en: 'A specific category of legal error in an admin-law challenge — e.g. failure to consider relevant considerations, improper purpose, unreasonableness, bias, denial of PF. Post-Hossain (2018), every GoR (except the always-JE categories) carries a materiality limb.',
      desc_kr: '행정법 다툼에서의 특정 법적 오류 범주 — 관련 고려사항 누락, 부정한 목적, 비합리성, 편향, PF 거부 등. Hossain(2018) 이후 모든 GoR(always-JE 범주 제외)에는 materiality 단계가 붙는다.',
      cases: ['hossain','peko','schlieske','li','ebner','kioa']
    },
    {
      abbr: 's 43 AAT Act',
      full_en: 's 43 AAT Act — "correct or preferable" + "stand in the shoes"',
      full_kr: 's 43 AAT Act — "옳거나 더 바람직한" + "원결정자의 자리에 선다"',
      desc_en: 'The core merits-review provision: the AAT/ART exercises all the powers and discretions of the original decision-maker (subject to the same constraints — Frugtniet) and may affirm, vary, set aside + substitute, or set aside + remit. The standard is the "correct or preferable" decision on the material before the Tribunal (Drake [No 1]). s 43(6) deems substituted/varied decisions to be those of the original decision-maker.',
      desc_kr: '실체심사의 핵심 조항: AAT/ART는 원결정자의 모든 권한·재량을 같은 제약 아래(Frugtniet) 행사하고, 인용·변경·취소+대체·취소+환송을 할 수 있다. 기준은 심판소 앞 자료를 기준으로 "옳거나 더 바람직한(correct or preferable)" 결정인가(Drake [No 1]). s 43(6)은 변경·대체 결정을 원결정자의 결정으로 의제.',
      cases: ['shi','frugtniet','drake']
    },
    {
      abbr: 'IPS',
      full_en: 'Information Publication Scheme (FOI Act Part II)',
      full_kr: '정보공표제도 (FOI Act Part II)',
      desc_en: 'Mandatory proactive-publication scheme: agencies publish an agency plan plus specified categories of information. s 10 bars an agency from relying — to a citizen\'s detriment — on unpublished "operational information" (s 8A). Shifts FOI from purely request-based access toward routine open publication.',
      desc_kr: '의무적 사전 공표 제도: 기관은 기관계획과 지정된 정보 범주를 공표해야 한다. s 10은 공표되지 않은 "operational information"(s 8A)을 시민에게 불리하게 원용하는 것을 금지. FOI를 청구 기반 접근에서 일상적 공개 쪽으로 이동시키는 장치.',
      cases: []
    },
    {
      abbr: 'PII',
      full_en: 'Public Interest Immunity',
      full_kr: '공익면책특권',
      desc_en: 'Evidence-law principle (originally "Crown privilege") under which a litigant may resist disclosing material whose disclosure would harm the public interest. Conway v Rimmer [1968] AC 910 ended ministerial conclusive certificates; Sankey v Whitlam (1978) 142 CLR 1 confirmed Australian courts weigh competing public interests. Applies before merits-review tribunals too. Distinct from FOI exemptions, though grounds overlap (national security, law enforcement).',
      desc_kr: '증거법상 원칙(원래는 "Crown privilege")으로, 공개가 공익을 해칠 자료의 공개에 저항할 수 있게 한다. Conway v Rimmer [1968] AC 910이 장관 확정증명서를 종결시켰고, Sankey v Whitlam (1978) 142 CLR 1이 호주 법원이 공익을 형량한다는 점을 확립. 실체심사 심판소에도 적용. FOI 면제와는 별개이나(국가안보·법집행 등) 사유가 겹친다.',
      cases: ['sankey']
    },
    {
      abbr: 'PSI',
      full_en: 'Public Sector Information',
      full_kr: '공공부문 정보',
      desc_en: 'Information held or controlled by public agencies. The FOI Act increasingly treats PSI as a "national resource" (s 3(3)) to be managed for public purposes — a managerial framing that sits alongside (and sometimes in tension with) the older accountability rationale for access.',
      desc_kr: '공공기관이 보유·통제하는 정보. FOI Act는 PSI를 점차 공공 목적으로 관리해야 하는 "국가 자원"(s 3(3))으로 다루는데, 이 관리주의적 prizing은 더 오래된 접근권의 책임성 근거와 함께 — 때로는 긴장 관계로 — 공존한다.',
      cases: []
    },
  ],

  concepts: [
    {
      abbr: 'Privative clause',
      full_en: 'Privative clause',
      full_kr: '배제조항',
      desc_en: 'Statutory provision attempting to oust judicial review. At Cth level, read down by Plaintiff S157 to apply only to lawful decisions — cannot oust s 75(v) JE review. At State level, Kirk entrenches Supreme Court supervisory jurisdiction against ouster. "Or purported to be made" wording is a direct Kirk contravention (examiner feedback).',
      desc_kr: '사법심사를 봉쇄하려는 법령상 조항. 영연방 차원에서는 Plaintiff S157이 적법한 결정에만 적용되도록 좁게 읽었다 — s 75(v) JE 심사를 봉쇄할 수 없다. 주(州) 차원에서는 Kirk가 대법원 감독관할을 봉쇄에 맞서 헌법적으로 보호한다. "Or purported to be made" 문구는 Kirk 정면 위반(채점자 피드백).',
      cases: ['s157','kirk-jurisdiction','graham','futuris']
    },
    {
      abbr: 'No-invalidity clause',
      full_en: 'No-invalidity clause',
      full_kr: 'No-invalidity 조항',
      desc_en: 'Statutory provision preserving the legal effect of a decision despite certain errors. Constitutionally permissible (Futuris) as long as s 75(v) JE review remains available — distinguishes it from a true privative clause.',
      desc_kr: '특정 오류에도 결정의 법적 효력을 유지시키는 법령상 조항. s 75(v) JE 심사가 남아 있는 한 헌법적으로 허용(Futuris) — 진정한 배제조항과 구별된다.',
      cases: ['futuris']
    },
    {
      abbr: 'Materiality',
      full_en: 'Materiality (Hossain Stage 3)',
      full_kr: 'Materiality / 중요성 (Hossain 3단계)',
      desc_en: 'Whether the error could have changed the outcome — measured by realistic possibility of a different decision (MZAPC/LPDT). Onus on the applicant (MZAPC); low bar in PF context (Nathanson); no reconstruction (LPDT). Bypassed by "always-JE" categories.',
      desc_kr: '오류가 결과를 바꿀 수 있었는가 — 다른 결정의 현실적 가능성으로 측정(MZAPC/LPDT). 입증책임은 신청인(MZAPC). PF 맥락에서는 문턱이 낮다(Nathanson). 재구성 금지(LPDT). "Always-JE" 범주는 우회.',
      cases: ['hossain','mzapc','lpdt','nathanson','wzarh']
    },
    {
      abbr: 'Always-JE',
      full_en: '"Always-JE" categories (bypass materiality)',
      full_kr: '"Always-JE" 범주 (materiality 우회)',
      desc_en: 'Categories where the very nature of the breach makes materiality inappropriate: (1) bias (Ebner); (2) Kirk-egregious PF; (3) final-decision unreasonableness; (4) jurisdictional facts (Enfield); (5) delegated-legislation invalidity. JE follows directly, no materiality limb.',
      desc_kr: '위반의 성격 자체가 materiality를 부적절하게 만드는 범주들: (1) 편향(Ebner), (2) Kirk 수준의 중대한 PF, (3) 최종 결정의 비합리성, (4) 관할권적 사실(Enfield), (5) 위임입법 무효. JE가 직접 따르며 materiality 단계 없음.',
      cases: ['ebner','enfield','kirk-jurisdiction']
    },
    {
      abbr: 'Special interest',
      full_en: 'Special interest (standing test)',
      full_kr: 'Special interest (원고적격 테스트)',
      desc_en: 'The ACF common-law standing baseline for public-law declaration/injunction. Requires an interest beyond intellectual or emotional concern. Extensions: Onus (cultural custodianship), NCEC (recognised advocacy organisations), Bateman\'s Bay (commercial competition), Argos (foreseeable economic detriment). RTL: pure ideology not enough. Statute can override (EPBC s 487).',
      desc_kr: '공공법 declaration/injunction의 ACF 보통법 원고적격 기본선. 지적·감정적 관심 이상의 이해를 요구. 확장: Onus(문화적 수호), NCEC(인정받은 옹호 단체), Bateman\'s Bay(상업적 경쟁), Argos(예측 가능한 경제적 불이익). RTL: 순수 이념만으로는 부족. 법령이 덮어쓸 수 있음(EPBC s 487).',
      cases: ['acf','onus','northcoast','batemans','argos','rtl']
    },
    {
      abbr: 'Hossain 3-stage',
      full_en: 'Hossain three-stage framework',
      full_kr: 'Hossain 3단계 분석틀',
      desc_en: 'The dominant Australian framework for JE analysis. (1) Identify the condition the statute attaches to the power. (2) Apply Project Blue Sky — was breach intended to invalidate? (3) Apply materiality — realistic possibility of a different outcome? Subject to always-JE exceptions.',
      desc_kr: '호주 JE 분석의 지배적 framework. (1) 법령이 권한에 붙인 조건을 식별. (2) Project Blue Sky 적용 — 위반이 무효를 의도했는가. (3) Materiality 적용 — 다른 결과의 현실적 가능성. Always-JE 예외에 따른다.',
      cases: ['hossain','pbs','mzapc','lpdt']
    },
    {
      abbr: 'Apprehended bias',
      full_en: 'Apprehended bias (Ebner double-step test)',
      full_kr: '추정 편향 (Ebner 2단계 기준)',
      desc_en: 'A fair-minded informed observer might reasonably apprehend that the decision-maker might not bring an impartial mind. Two steps: (i) identify the matter said to give rise to apprehension; (ii) explain the logical connection. Calibrated to office: stricter for judges, softer for Ministers (Jia). Always-JE.',
      desc_kr: '공정한 마음의 사정에 밝은 관찰자가 결정자가 공정한 마음을 가지지 않을 수 있다고 합리적으로 의심할 만한가. 2단계: (i) 의심을 일으킨 사정 식별, (ii) 논리적 연결 설명. 직위에 따라 보정 — 판사는 엄격, 장관은 완화(Jia). Always-JE.',
      cases: ['ebner','jia','isbester','cny17','hotholdings']
    },
    {
      abbr: 'Decision under enactment',
      full_en: 'Decision "under an enactment" (Tang two-limb)',
      full_kr: '"수권법에 따른" 결정 (Tang 2단계)',
      desc_en: 'ADJR gateway test. Both limbs required: (1) decision is one for which provision is made by or under the Act; (2) decision itself affects legal rights/obligations by reason of the statute. Internal rules without statutory force fail limb 2 (Tang, Fuller). When this fails, pivot to s 75(v) / s 39B(1).',
      desc_kr: 'ADJR 관문 테스트. 두 단계 모두 필요: (1) 결정이 그 법령에 의해 또는 법령 아래에서 마련된 것, (2) 결정 자체가 법령의 효력으로 권리·의무에 영향. 법령상 효력 없는 내부 규정은 2단계에서 막힘(Tang, Fuller). 막히면 s 75(v) / s 39B(1)로 갈아탄다.',
      cases: ['tang','bond','fuller','argos']
    },
    {
      abbr: 'Legitimate expectation',
      full_en: 'Legitimate expectation (largely displaced)',
      full_kr: '정당한 기대 (현재 사실상 묻힘)',
      desc_en: 'Older doctrinal label for the basis of PF where a person had been led to expect certain treatment. Trimmed by Quin and effectively displaced as the analytic axis by Lam, which reframed PF around "practical injustice". Avoid this framing in modern answers.',
      desc_kr: '어떤 처우를 기대하게 된 사람에게 PF 적용 근거를 부여한 옛 법리 라벨. Quin이 좁히고 Lam이 PF 분석 축을 "실질적 부정의"로 재구성하며 사실상 묻혔다. 현대 답안에서는 이 framing을 피한다.',
      cases: ['quin','lam']
    },
    {
      abbr: 'Functus officio',
      full_en: 'Functus officio',
      full_kr: 'Functus officio (권한 소진)',
      desc_en: 'Latin: "having performed the office". The doctrine that a decision-maker who has lawfully exercised a power has exhausted it and cannot revisit the decision. Bhardwaj qualifies this: where the original decision was JE-affected (a nullity), the power was never exhausted and re-exercise is permissible.',
      desc_kr: '라틴어: "직무를 수행했음". 적법하게 권한을 행사한 결정자가 그 권한을 소진해 결정을 다시 다룰 수 없다는 법리. Bhardwaj가 이를 한정한다 — 원 결정이 JE의 영향을 받았다면(무효) 권한은 애초에 소진되지 않았고 재행사가 가능하다.',
      cases: ['bhardwaj']
    },
    {
      abbr: 'Ultra vires',
      full_en: 'Ultra vires',
      full_kr: 'Ultra vires (권한 초과)',
      desc_en: 'Latin: "beyond the powers". A decision or instrument made outside the scope conferred by the empowering Act. The traditional vocabulary for what Hossain now analyses as breach of condition + invalidating intent. Still used directly for delegated legislation exceeding the empowering Act\'s scope (Vanstone, Evans).',
      desc_kr: '라틴어: "권한 너머". 수권법이 부여한 범위 밖에서 만들어진 결정이나 도구. Hossain이 이제 조건 위반 + 무효 의도로 분석하는 것의 전통적 어휘. 수권법 범위를 초과한 위임입법에는 직접 쓰인다(Vanstone, Evans).',
      cases: ['vanstone','evans']
    },
    {
      abbr: 'Certiorari · Mandamus · Prohibition',
      full_en: 'Constitutional writs (certiorari, mandamus, prohibition)',
      full_kr: '헌법적 writ (certiorari, mandamus, prohibition)',
      desc_en: 'The prerogative-writ remedies for JE. Certiorari: quash the apparent decision (it is in law a nullity, but the air needs clearing — M174). Mandamus: compel re-exercise of an unexpired power (Bhardwaj). Prohibition: stop the decision-maker from continuing/acting on an invalid decision. Standard JE combo: certiorari + mandamus.',
      desc_kr: 'JE에 대한 prerogative writ 구제. Certiorari: 외관상 결정을 무효화(법적으로는 무효지만 공기 정화가 필요 — M174). Mandamus: 소진되지 않은 권한의 재행사 명령(Bhardwaj). Prohibition: 결정자가 무효 결정을 계속·행사하는 것을 금지. 표준 JE 짝패: certiorari + mandamus.',
      cases: ['m174','bhardwaj','ainsworth']
    },
    {
      abbr: 'Declaration',
      full_en: 'Declaration (declaratory relief)',
      full_kr: 'Declaration (선언적 구제)',
      desc_en: 'Flexible equitable remedy declaring the legal state of play. Available where certiorari is not — for example, where the impugned act lacks legal effect on rights (Ainsworth: CJC report) but PF was breached. Also useful for clarifying ongoing legal questions (Plaintiff M61).',
      desc_kr: '법적 상태를 선언하는 유연한 형평법 구제. Certiorari가 불가능한 자리에 가능 — 예컨대 다투어진 행위에 권리에 대한 법적 효과가 없지만(Ainsworth: CJC 보고서) PF가 위반된 경우. 지속되는 법적 질문을 정리할 때도 유용(Plaintiff M61).',
      cases: ['ainsworth','m61']
    },
    {
      abbr: 'Reasons',
      full_en: 'Statement of reasons (ADJR s 13)',
      full_kr: '이유서 (ADJR s 13)',
      desc_en: 'ADJR s 13 entitles a person aggrieved to a written statement of reasons setting out the findings of fact, the evidence, and the reasoning. Useful for identifying gaps that ground unreasonableness (Li/Stretton) or failure-to-consider (Peko/Tickner) arguments.',
      desc_kr: 'ADJR s 13이 person aggrieved에게 사실인정·증거·추론을 기재한 서면 이유서를 받을 권리를 부여. 비합리성(Li/Stretton)이나 고려 누락(Peko/Tickner) 주장의 근거가 될 공백을 식별할 때 유용.',
      cases: ['li','stretton','peko','tickner']
    },
    {
      abbr: 'Substance and degree',
      full_en: 'Substance-and-degree test (Graham)',
      full_kr: '실질-정도 테스트 (Graham)',
      desc_en: 'The operative constitutional test for whether a statutory provision impermissibly impairs the entrenched s 75(v) jurisdiction. Looks at substance, not form, and at practical impact, not just legal text: a provision is invalid if its legal OR practical operation denies the court the ability — through judicial process — to enforce the legal limits of an officer\'s power. Reaches beyond privative clauses to secrecy provisions (Graham), inflexible time bars (Bodruddaza), and any other device with that practical effect.',
      desc_kr: 's 75(v)의 보호된 관할을 법령 조항이 부적법하게 침해했는지를 가리는 운영적 헌법 기준. 형식이 아니라 실질을, 법령 문언만이 아니라 실질적 영향을 본다 — 그 조항의 법적 또는 실질적 작동이 법원이 사법 절차를 통해 공무원 권한의 법적 한계를 강제할 능력을 부정한다면 무효. 배제조항 너머로 비밀조항(Graham), 경직된 기간 제한(Bodruddaza), 그 외 같은 실질적 효과를 가진 어떤 장치에도 미친다.',
      cases: ['graham','bodruddaza','s157']
    },
    {
      abbr: 'Conscious maladministration',
      full_en: 'Conscious maladministration (Futuris carve-out)',
      full_kr: '의도적 행정부정 (Futuris 예외)',
      desc_en: 'Deliberate (not merely negligent) failure to administer the law according to its terms. A "no-invalidity" clause like s 175 ITAA does NOT shield conscious maladministration — it remains jurisdictional error attracting constitutional writs under s 75(v). The same is true of fraud, bribery, dishonesty, and improper purpose (Plaintiff S157). Supported by the tort of misfeasance in public office and the integrity ethos enjoined by s 13 Public Service Act on APS members.',
      desc_kr: '단순한 과실이 아니라 의도적으로 법을 그 문언대로 집행하지 않은 것. s 175 ITAA 같은 "no-invalidity" 조항이 의도적 행정부정을 보호하지 않는다 — 그것은 여전히 관할권적 오류로서 s 75(v) 헌법적 writ를 발동시킨다. 사기·뇌물·부정직·부적절한 목적도 마찬가지(Plaintiff S157). 공무원의 misfeasance in public office 불법행위와 s 13 Public Service Act가 APS 구성원에게 부과하는 청렴 윤리가 이를 뒷받침한다.',
      cases: ['futuris','s157']
    },
    {
      abbr: 'In limine',
      full_en: 'In limine (Latin: "at the outset")',
      full_kr: 'In limine (처음부터, 본안 심리 전에)',
      desc_en: 'Latin term meaning "at the threshold" or "at the outset" — used in Graham to describe how s 503A(2)(c) deprives the court of access to the evidence underpinning a s 501 decision before any balancing or merits inquiry can occur. The "in limine" deprivation is what distinguishes invalid secrecy provisions (Graham: court can never see the material) from valid statutory secrecy regimes (Gypsy Jokers, K-Generation, Condon, Totani: court itself can see the material) and from public interest immunity (Sankey: court weighs the competing interests).',
      desc_kr: '"문턱에서" 또는 "처음부터"를 뜻하는 라틴어. Graham에서 s 503A(2)(c)가 s 501 결정의 기초 증거에 대한 접근을 법원에서 — 비교형량이나 본안 심리가 있기도 전에 — 박탈하는 방식을 설명할 때 사용. "In limine" 박탈이 — 무효 비밀조항(Graham: 법원이 결코 자료를 못 봄)을 — 합헌 비밀 체계(Gypsy Jokers, K-Generation, Condon, Totani: 법원 자체는 자료를 봄)와, 공익면책(Sankey: 법원이 경합 이익을 비교형량)으로부터 구별짓는 핵심이다.',
      cases: ['graham']
    },
    {
      abbr: 'Misfeasance in public office',
      full_en: 'Tort of misfeasance in public office',
      full_kr: '공무상 부정행위 (불법행위)',
      desc_en: 'Common-law tort committed by a public officer who knowingly acts in excess of their statutory power, with foreseeable harm. Invoked in Futuris as a reason to read s 175 ITAA narrowly — the statute should not be construed to authorise the very deliberate failures that the misfeasance tort exists to remedy. Together with s 13 Public Service Act\'s integrity obligations, it grounds the conscious-maladministration carve-out from no-invalidity clauses.',
      desc_kr: '공무원이 자신의 법령상 권한을 초과한다는 사실을 알면서 행동해 예측 가능한 손해를 일으킨 보통법상 불법행위. Futuris에서 s 175 ITAA를 좁게 읽어야 할 근거로 인용 — 그 법령이 misfeasance 불법행위가 구제하려는 바로 그 의도적 위반을 수권하는 것으로 해석돼서는 안 된다. s 13 Public Service Act의 청렴 의무와 함께, no-invalidity 조항으로부터 의도적 행정부정 예외(carve-out)를 정초한다.',
      cases: ['futuris']
    },
    {
      abbr: 'Tax incontestability rule',
      full_en: 'Tax cannot be made incontestable (MacCormick / Richard Walter)',
      full_kr: '조세는 다툴 수 없게 만들 수 없다 (MacCormick / Richard Walter)',
      desc_en: 'Constitutional principle that a tax must remain legally contestable — otherwise the limits of the federal taxation power would be placed beyond examination. Satisfied for the ITAA by Pt IVC of the Taxation Administration Act, which provides objections, AAT (now ART) review, and FCA appeals as the alternative contestability path. This is why a no-invalidity clause like s 175 can validly shield ordinary process errors from constitutional writ review — the constitutional floor is met through Pt IVC.',
      desc_kr: '조세는 법적으로 다툴 수 있어야 한다는 헌법 원칙 — 그렇지 않으면 연방 과세권의 한계가 검토 불가능한 자리로 옮겨 가게 된다. ITAA에서는 Taxation Administration Act Pt IVC가 — 이의제기·AAT(현 ART) 본안 재심사·FCA 항소를 대체 다툴 수 있는 경로로 제공함으로써 — 이 원칙을 충족시킨다. 그래서 s 175 같은 no-invalidity 조항이 통상의 절차 오류를 헌법적 writ 심사에서 차단해도 유효 — 헌법적 바닥선이 Pt IVC를 통해 충족되기 때문.',
      cases: ['futuris']
    },
    {
      abbr: 'Hickman impossibility',
      full_en: 'Hickman impossibility principle (R v Hickman; Ex parte Fox and Clinton)',
      full_kr: 'Hickman impossibility 원칙 (R v Hickman; Ex parte Fox and Clinton)',
      desc_en: 'Foundational constitutional proposition stated three ways: (i) it is impossible for Parliament to impose jurisdictional limits on a body and at the same time deprive the HCA of authority to enforce them by prohibition; (ii) impossible to impose a public duty and deprive the HCA of mandamus; (iii) impossible to constrain the exercise of power and deprive the HCA of injunction. The conceptual root of s 75(v) entrenchment (Plaintiff S157) and the Graham substance-and-degree test.',
      desc_kr: '세 형태로 진술되는 헌법적 기초 명제: (i) 어떤 기관에 관할권의 한계를 부과하면서 동시에 HCA로부터 prohibition으로 그 한계를 강제할 권한을 박탈하는 것은 의회에게 불가능; (ii) 공적 의무를 부과하면서 HCA로부터 mandamus를 박탈하는 것은 불가능; (iii) 권한 행사를 제약하면서 HCA로부터 injunction을 박탈하는 것은 불가능. s 75(v) 보호(Plaintiff S157)와 Graham 실질-정도 테스트의 개념적 뿌리.',
      cases: ['s157','graham','futuris']
    },
    {
      abbr: 'Merits review',
      full_en: 'Merits review (correct or preferable decision)',
      full_kr: '실체심사 (옳거나 더 바람직한 결정)',
      desc_en: 'Review in which the tribunal reconsiders the decision and reaches its own decision on the material before it — not merely policing legality. The standard is "correct" (only one acceptable decision) or "preferable" (more than one acceptable decision, and the tribunal selects the best). Established via Drake [No 1] / Brian Lawlor Automotive; confirmed by the High Court in Shi.',
      desc_kr: '심판소가 결정 자체를 다시 검토해 자기 앞 자료에 따라 자기 결정을 내리는 심사 — 적법성만 보지 않는다. 기준은 "옳은(correct)"(허용되는 결정이 하나뿐) 또는 "더 바람직한(preferable)"(허용 가능한 여러 결정 중 가장 나은 것 선택). Drake [No 1] / Brian Lawlor Automotive가 정립하고 Shi에서 HCA가 확인.',
      cases: ['shi','frugtniet','drake']
    },
    {
      abbr: 'Stand in the shoes',
      full_en: '"Stand in the shoes" principle (s 43 AAT Act)',
      full_kr: '"원결정자의 자리에 선다" 원칙 (s 43 AAT Act)',
      desc_en: 'The tribunal exercises the same powers as the primary decision-maker, subject to the same constraints. Frugtniet: a spent conviction that ASIC could not consider is one the AAT also could not consider. The metaphor has limits — the tribunal is solely a reviewer, exercises original powers only "for the purpose of reviewing the decision", and is not confined to the material before the original decision-maker.',
      desc_kr: '심판소는 원결정자와 같은 권한을 같은 제약 아래에서 행사한다. Frugtniet: ASIC이 고려할 수 없는 효력소멸 유죄판결은 AAT도 고려할 수 없다. 비유에는 한계가 있다 — 심판소는 단지 심사자이고, 원권한은 오직 "결정을 심사할 목적"으로만 행사하며, 원결정자가 가진 자료에 제한되지 않는다.',
      cases: ['frugtniet','shi']
    },
    {
      abbr: 'Drake [No 2] practice',
      full_en: 'Drake [No 2] practice — tribunal and government policy',
      full_kr: 'Drake [No 2] 실무 — 심판소와 정부 정책',
      desc_en: 'When reviewing a discretionary power reposed in a Minister who has adopted a general policy, the tribunal will ordinarily apply that policy unless the policy is unlawful or its application would produce an unjust decision in the particular case. Brennan J: "Inconsistency is not merely inelegant"; but "consistency is not preferable to justice." Cogent reasons must be shown against the policy — especially where parliament has scrutinised it.',
      desc_kr: '장관에게 부여된 재량권을 심사할 때, 장관이 채택한 일반 정책이 적법하고 그 적용이 부당한 결과를 낳지 않는 한 심판소는 그 정책을 통상 적용한다. Brennan J: "비일관성은 단지 미관상 문제가 아니다"; 그러나 "일관성이 정의보다 우선하지 않는다." 정책에 반하는 설득력 있는 사유가 제시되어야 하며 — 특히 의회가 검토한 정책에 대해서는 더욱.',
      cases: ['drake']
    },
    {
      abbr: 'Maladministration',
      full_en: 'Maladministration (ombud basis)',
      full_kr: 'Maladministration (옴부즈만 기준)',
      desc_en: 'Wider than illegality or a non-preferable decision — also covers delay, rudeness, inefficiency, incompetence. The Commonwealth Ombudsman\'s residual power lets it recommend a remedy where action was "otherwise, in all the circumstances, wrong" (s 15(1)(a)(v)) or the law is "unreasonable, unjust, oppressive or improperly discriminatory" (s 15(1)(a)(iii)). A former CO suggested action would only be recommended if the decision was "unsupportable".',
      desc_kr: '위법성이나 더 바람직하지 못한 결정보다 넓은 개념 — 지연·무례·비효율·무능까지 포함. 영연방 옴부즈만은 행위가 "그 밖에 모든 정황상 잘못된" 경우(s 15(1)(a)(v)) 또는 법 자체가 "비합리·부정·억압·부당하게 차별적인" 경우(s 15(1)(a)(iii)) 시정을 권고할 수 있다. 전직 CO는 결정이 "옹호 불가능(unsupportable)"한 경우에만 권고한다고 시사.',
      cases: []
    },
    {
      abbr: 'Robodebt',
      full_en: 'Robodebt scheme (Online Compliance Intervention)',
      full_kr: 'Robodebt 스킴 (온라인 컴플라이언스 개입)',
      desc_en: 'Centrelink\'s 2016 automated debt-raising system that averaged ATO income data fortnightly and reversed the onus onto customers to disprove debts. CO reports (2017/2019/2021) flagged fairness/transparency failures; Amato (Federal Court, consent declarations) and Prygodicz [No 2] [2021] FCA 634 (Murphy J: "a shameful chapter…and a massive failure of public administration") confirmed the scheme was unlawful. Lessons: automating discretionary decisions carries high legal risk; ombud and parliamentary recommendations alone did not correct the underlying legal error (Carney critique).',
      desc_kr: 'Centrelink의 2016년 자동 부채 발생 시스템 — ATO 소득 데이터를 격주 단위로 평균화하고 입증책임을 부채를 부정하는 쪽으로 뒤집었다. CO 보고서(2017/2019/2021)가 공정성·투명성 문제를 지적했고, Amato(연방법원 합의 선언)와 Prygodicz [No 2] [2021] FCA 634(Murphy J: "수치스러운 장이자 행정의 거대한 실패")가 위법성을 확인. 교훈: 재량 결정 자동화는 법적 위험이 크고, 옴부즈만·의회 권고만으로는 근본 법적 오류를 시정하지 못한다(Carney 비판).',
      cases: []
    },
    {
      abbr: 'Integrity branch',
      full_en: 'Integrity branch / fourth branch of government',
      full_kr: '청렴(integrity) 부문 / 정부 제4부문',
      desc_en: 'Conceptual framing of the proliferating independent non-judicial bodies — ombuds, anti-corruption commissions (e.g. NSW ICAC), AHRC, OAIC, Auditor-General — as a fourth branch outside the classic legislative-executive-judicial trichotomy, charged with ensuring executive integrity. "Integrity" is contested and elastic (corruption, illegality, incompetence, inefficiency).',
      desc_kr: '옴부즈만·부패방지위(예: NSW ICAC)·AHRC·OAIC·감사원장 등 독립 비사법기관의 급증을 입법·행정·사법 3분립을 넘는 "제4부문"으로 개념화한 것. 행정의 청렴을 보장하는 역할. "Integrity"는 다툼의 여지가 큰 탄력적 개념(부패·위법성·무능·비효율 모두 포함).',
      cases: []
    },
    {
      abbr: 'Internal review',
      full_en: 'Internal review (vs reconsideration)',
      full_kr: '내부 검토 (재고려와의 구별)',
      desc_en: 'Merits review of a decision conducted within the same agency by a different (usually more senior) decision-maker. Distinct from "reconsideration" (done personally by the original decision-maker). Often statutorily required before external review; criticised as risking "appeal fatigue" (ARC Report No 44, 2000) and a "soft option" for primary decision-makers. Standard formula: "fair, just, economical, informal and quick" (s 2A(b) AAT Act).',
      desc_kr: '같은 기관 내에서 다른(보통 더 선임) 결정자가 결정을 실체심사하는 것. 원결정자가 직접 다시 보는 "reconsideration"과 구별. 외부 심사의 전제로 자주 법정화되며, "appeal fatigue"(ARC Report No 44, 2000)와 1차 결정자의 "soft option" 위험으로 비판됨. 표준 공식: "fair, just, economical, informal and quick"(s 2A(b) AAT Act).',
      cases: []
    },
    {
      abbr: 'Own-motion investigation',
      full_en: 'Own-motion investigation (ombud)',
      full_kr: '직권 조사 (옴부즈만)',
      desc_en: 'An investigation the ombud commences on its own initiative — not in response to a complaint — into a perceived systemic problem. The prime medium for the ombud\'s "normative" impact on administrative practice (reports, recommendations, guidelines).',
      desc_kr: '진정에 응하는 것이 아니라 옴부즈만이 직권으로 체계적 문제를 인지해 개시하는 조사. 옴부즈만이 행정 실무에 미치는 "규범적" 영향(보고서·권고·지침)의 주요 통로.',
      cases: []
    },
    {
      abbr: 'Ministerial responsibility',
      full_en: 'Ministerial responsibility / responsible government',
      full_kr: '장관 책임 / 책임정부',
      desc_en: 'Constitutional convention that ministers are collectively and individually answerable to parliament — for both their own acts and those of the bureaucracy acting in their name. "Responsible" means answerable, not blameworthy — about openness, explanation and eliminating bad practices. Limit: ministers need only answer for matters they are "responsible" for — privatisation, contracting-out and quasi-autonomous agencies shrink that scope.',
      desc_kr: '장관이 의회에 집단적·개별적으로 답할 의무를 지는 헌법적 관행 — 본인의 행위뿐 아니라 자신의 이름으로 행위하는 관료의 행위까지. "Responsible"은 책임을 지는 것이 아니라 답하는 것 — 공개·설명·악습 제거에 관한 것이다. 한계: 장관은 자신이 "책임지는" 사안에 대해서만 답하면 됨 — 민영화·외주화·준자율기관이 그 범위를 줄인다.',
      cases: []
    },
    {
      abbr: 'Soft law',
      full_en: 'Soft law (administrative policy)',
      full_kr: '연성법 (행정 정책)',
      desc_en: 'Non-binding norms — policies, guidelines, directions, Procedures Advice Manuals — that nevertheless strongly influence administrative decision-making in practice. Lawful policy guides discretion; an inflexible application of policy that substitutes for the statutory criteria is unlawful (Green v Daniels). The Drake [No 2] practice governs how the tribunal treats government soft law on review.',
      desc_kr: '비구속적 규범 — 정책·지침·지시·PAM 등 — 으로 실무상 행정 결정에 강하게 영향을 미친다. 적법한 정책은 재량을 안내하지만, 법령 기준을 대체하는 경직된 정책 적용은 위법(Green v Daniels). 심판소가 정부 연성법을 어떻게 다루는지는 Drake [No 2] 실무가 규율한다.',
      cases: ['green','m64','drake']
    },
    {
      abbr: 'Spent conviction',
      full_en: 'Spent conviction (Crimes Act 1914 (Cth) Pt VIIC)',
      full_kr: '효력소멸 유죄판결 (Crimes Act 1914 (Cth) Pt VIIC)',
      desc_en: 'A minor criminal conviction that, after a waiting period or pardon, need not be disclosed and that Commonwealth authorities are prohibited from taking into account (Div 3). s 85ZZH(c) disapplies Div 3 to courts/tribunals — but only as a non-application; it does NOT alter their jurisdiction. Frugtniet: because ASIC could not consider the spent conviction, the AAT also could not.',
      desc_kr: '경미한 유죄판결이 일정 대기기간이나 사면 후 공개할 필요가 없어지고 영연방 기관이 고려할 수 없게 되는 것(Div 3). s 85ZZH(c)는 법원·심판소에 Div 3 적용을 제외할 뿐 — 관할을 바꾸지는 않는다. Frugtniet: ASIC이 효력소멸 유죄판결을 고려할 수 없으므로 AAT도 고려할 수 없다.',
      cases: ['frugtniet']
    },
    {
      abbr: 'Public interest test (FOI)',
      full_en: 'Public interest test for conditional FOI exemptions (s 11B)',
      full_kr: 'FOI 조건부 면제의 공익 테스트 (s 11B)',
      desc_en: 'For Part IV Division 3 ("conditional") exemptions, access is granted unless disclosure would be contrary to the public interest. Pro-disclosure factors include promoting the Act\'s objects, informing public debate, oversight of public expenditure, and access to one\'s own personal information. The Act expressly lists IRRELEVANT factors — including embarrassment to, or loss of confidence in, the government.',
      desc_kr: 'Part IV Division 3("조건부") 면제에서, 공개가 공익에 반하지 않는 한 접근이 허용된다. 공개를 지지하는 요소: Act 목적 증진, 공적 논의 정보 제공, 공공지출 감독, 본인 개인정보 접근 등. Act가 명시적으로 무관한 요소도 열거 — 정부에 대한 당혹·신뢰 상실 등이 포함된다.',
      cases: []
    },
    {
      abbr: 'Cabinet exemption (FOI)',
      full_en: 'Cabinet documents exemption (FOI Act s 34)',
      full_kr: '내각 문서 면제 (FOI Act s 34)',
      desc_en: 'Protects Cabinet confidentiality and the convention of collective ministerial responsibility. Sits alongside the conditional "deliberative processes" exemption (s 47C), which preserves bureaucratic "thinking space" for candid advice. In Patrick v PM&C [2021] AATA 2719 the AAT held the National Cabinet was NOT a "committee of Cabinet" — a narrow, pro-disclosure reading. The government\'s legislative response (COAG Legislation Amendment Bill 2021) lapsed.',
      desc_kr: '내각의 비밀과 집단 장관책임의 관행을 보호. 관료의 솔직한 자문을 위한 "thinking space"를 보존하는 조건부 면제인 "deliberative processes"(s 47C)와 짝지어 다루어짐. Patrick v PM&C [2021] AATA 2719에서 AAT는 National Cabinet이 "Cabinet의 위원회"가 아니라고 판단 — 좁은 공개 우호적 해석. 이에 대한 정부 입법 대응(COAG Legislation Amendment Bill 2021)은 의회 해산으로 폐기.',
      cases: []
    },
  ],
};

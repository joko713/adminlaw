// Weeks W1–W9 — overview, key points, decision tree, detail accordion, cases, quiz
// All bilingual {en, kr}. Cases referenced by id from CASES_DATA.
window.WEEKS_DATA = [
  {
    id:'w1', num:1,
    en:{ title:'Validity of delegated legislation',
         summary:'Three-stage test: empowerment, breach of consequence (PBS), and the McEldowney sub-grounds (purpose, breadth, reasonableness, fundamental rights).',
         meta:[
           {label:'Doctrine',value:'McEldowney 3-stage'},
           {label:'Forum',value:'Federal & State'},
           {label:'Materiality',value:'Not required'},
           {label:'Effect',value:'Reg invalid'}],
         points:[
           {h:'Stage 1 — empowering Act',t:'Identify the head of power. Delegated legislation must be authorised by a clear statutory grant. Construe purposively.',c:['toohey']},
           {h:'Stage 2 — PBS breach',t:'Has any condition on the power been breached, and was the breach intended to invalidate (PBS)?',c:['pbs']},
           {h:'Stage 3 — McEldowney sub-grounds',t:'Purpose · proportionality of breadth · Wednesbury unreasonableness · principle of legality.',c:['vanstone','evans','kruse','coco']}
         ]},
    kr:{ title:'위임입법의 유효성',
         summary:'3단계 테스트: 수권, 위반의 결과(PBS), McEldowney 하위 사유(목적·포섭 범위·합리성·기본권).',
         meta:[
           {label:'법리',value:'McEldowney 3단계'},
           {label:'관할',value:'연방 및 주'},
           {label:'중요성',value:'요구되지 않음'},
           {label:'효과',value:'규정 무효'}],
         points:[
           {h:'1단계 — 수권법',t:'권한의 근거를 식별한다. 위임입법은 분명한 법적 수권을 받아야 한다. 목적론적으로 해석한다.',c:['toohey']},
           {h:'2단계 — PBS 위반',t:'권한의 조건이 위반되었는가, 그리고 그 위반이 무효를 의도했는가(PBS).',c:['pbs']},
           {h:'3단계 — McEldowney 하위 사유',t:'목적 · 포섭 범위의 비례성 · Wednesbury 비합리성 · 합법성 원칙.',c:['vanstone','evans','kruse','coco']}
         ]},
    tree:{ en:[
      {id:'r',label:'Is the regulation authorised by an Act?',children:[
        {id:'r-n',label:'No',leaf:true,result:'invalid',note:'Ultra vires the empowering statute.'},
        {id:'r-y',label:'Yes',children:[
          {id:'b',label:'Was a condition on the power breached?',children:[
            {id:'b-n',label:'No',leaf:true,result:'valid',note:'Within power.'},
            {id:'b-y',label:'Yes',children:[
              {id:'pbs',label:'Did Parliament intend the breach to invalidate? (PBS)',children:[
                {id:'pbs-n',label:'No',leaf:true,result:'valid',note:'Directory only.'},
                {id:'pbs-y',label:'Yes',children:[
                  {id:'mc',label:'McEldowney sub-ground engaged?',children:[
                    {id:'mc-purpose',label:'Improper purpose',leaf:true,result:'invalid',note:'Not within statutory purpose.'},
                    {id:'mc-breadth',label:'Disproportionate breadth',leaf:true,result:'invalid',note:'Vanstone — power not "in gross".'},
                    {id:'mc-unreason',label:'Wednesbury unreasonable',leaf:true,result:'invalid',note:'Kruse — benevolent construction limit.'},
                    {id:'mc-rights',label:'Burdens fundamental right',leaf:true,result:'invalid',note:'Evans/Coco — legality principle.'}
                  ]}
                ]}
              ]}
            ]}
          ]}
        ]}
      ]}
    ], kr:[
      {id:'r',label:'규정이 법률에 의해 수권되었는가?',children:[
        {id:'r-n',label:'아니오',leaf:true,result:'invalid',note:'수권법을 초과(ultra vires)한다.'},
        {id:'r-y',label:'예',children:[
          {id:'b',label:'권한의 조건이 위반되었는가?',children:[
            {id:'b-n',label:'아니오',leaf:true,result:'valid',note:'권한 내.'},
            {id:'b-y',label:'예',children:[
              {id:'pbs',label:'의회가 위반에 무효를 의도했는가? (PBS)',children:[
                {id:'pbs-n',label:'아니오',leaf:true,result:'valid',note:'훈시 규정에 그친다.'},
                {id:'pbs-y',label:'예',children:[
                  {id:'mc',label:'McEldowney 하위 사유가 작동하는가?',children:[
                    {id:'mc-purpose',label:'부정한 목적',leaf:true,result:'invalid',note:'법적 목적 범위 밖.'},
                    {id:'mc-breadth',label:'비례성 결여 / 과도한 범위',leaf:true,result:'invalid',note:'Vanstone — 권한은 "in gross"로 부여되지 않는다.'},
                    {id:'mc-unreason',label:'Wednesbury 비합리성',leaf:true,result:'invalid',note:'Kruse — 호의적 해석의 한계.'},
                    {id:'mc-rights',label:'기본권 침해',leaf:true,result:'invalid',note:'Evans/Coco — 합법성 원칙.'}
                  ]}
                ]}
              ]}
            ]}
          ]}
        ]}
      ]}
    ]},
    detail:{
      en:[
        {h:'Identifying the head of power',t:'Read the regulation\'s preamble or marginal note for its empowering provision. Construe scope purposively (Toohey). The grant of power is rarely "in gross"; courts read in implicit limits drawn from the Act\'s purpose.'},
        {h:'PBS breach analysis',t:'Project Blue Sky: whether breach invalidates depends on Parliament\'s intent re consequence. Mandatory/directory dichotomy is a label for the conclusion, not a test. For delegated legislation, materiality is NOT required — once breach + invalidating intent shown, regulation falls.'},
        {h:'McEldowney sub-grounds',t:'(i) Purpose mismatch (Toohey-style construction);\n(ii) Disproportionate breadth (Vanstone);\n(iii) Wednesbury unreasonableness (Kruse);\n(iv) Fundamental rights / legality (Evans, Coco).'}
      ],
      kr:[
        {h:'권한의 근거 식별',t:'규정의 서문이나 부기에서 수권 조항을 확인한다. 범위는 목적론적으로 해석한다(Toohey). 권한은 거의 "in gross"로 부여되지 않으며, 법원은 법률 목적에서 도출되는 묵시적 한계를 읽어낸다.'},
        {h:'PBS 위반 분석',t:'Project Blue Sky: 위반이 무효화하는지는 위반의 결과에 대한 의회 의도에 달렸다. mandatory/directory 구분은 결론을 진술하는 표지일 뿐 테스트가 아니다. 위임입법에서는 중요성이 요구되지 않는다 — 위반과 무효화 의도가 입증되면 규정은 무효이다.'},
        {h:'McEldowney 하위 사유',t:'(i) 목적 불일치(Toohey 식 해석);\n(ii) 비례성 결여 / 과도한 범위(Vanstone);\n(iii) Wednesbury 비합리성(Kruse);\n(iv) 기본권·합법성(Evans, Coco).'}
      ]
    },
    cases:['vanstone','evans','mceldowney','toohey','coco','kruse'],
    quiz:[
      { en:{q:'A regulation defines "misbehaviour" as any imprisonable offence and triggers automatic suspension. Which McEldowney sub-ground best fits?',
            opts:['Improper purpose','Disproportionate breadth','Wednesbury unreasonableness','Burden on fundamental right'],
            ans:1,
            why:'Vanstone holds power was not given "in gross" — the regulation\'s breadth must be reasonably proportionate to the empowering Act\'s purpose.'},
        kr:{q:'규정이 "비위(misbehaviour)"를 징역 가능한 모든 범죄로 정의하고 자동 정직 사유로 삼는다. 가장 적합한 McEldowney 하위 사유는?',
            opts:['부정한 목적','비례성 결여 / 과도한 범위','Wednesbury 비합리성','기본권 침해'],
            ans:1,
            why:'Vanstone: 권한은 "in gross"로 부여되지 않으며, 규정의 포섭 범위는 수권법 목적에 합리적으로 비례해야 한다.'} },
      { en:{q:'A delegated law restricts political speech in declared zones. The most direct sub-ground is:',
            opts:['Improper purpose','Wednesbury','Burden on fundamental right (legality)','Disproportionate breadth'],
            ans:2,
            why:'Evans v NSW + Coco — clear and unmistakable words required; otherwise legality principle invalidates the burden.'},
        kr:{q:'위임입법이 선언 구역 내 정치적 표현을 제한한다. 가장 직접적인 하위 사유는?',
            opts:['부정한 목적','Wednesbury','기본권 침해(합법성 원칙)','비례성 결여'],
            ans:2,
            why:'Evans v NSW + Coco — 분명·모호하지 않은 문언이 없으면 합법성 원칙이 침해를 무효화한다.'} }
    ]
  },
  {
    id:'w2', num:2,
    en:{ title:'Sources of judicial review',
         summary:'Navigating the multiple provisions for JR. State Supreme Court supervisory jurisdiction; Commonwealth s 75(v) constitutional writs, s 39B Judiciary Act, and the ADJR Act. JR polices legality, not merits (Quin). Bond fixes the ADJR meaning of "decision" (final, operative, substantive) and "conduct" under s 6. Kirk entrenches state-level supervisory review for jurisdictional error.',
         meta:[
           {label:'State',value:'Supreme Court supervisory'},
           {label:'Cth',value:'s 75(v) · s 39B · ADJR'},
           {label:'Boundary',value:'Legality not merits (Quin)'},
           {label:'ADJR',value:'"decision"/"conduct" (Bond)'}],
         points:[
           {h:'Legality, not merits (Quin)',t:'The court enforces the limits of the power; it does not remake the decision or judge its wisdom (Brennan J). This is the organising idea behind every provision of review.',c:['quin']},
           {h:'The multiple Cth provisions',t:'Three federal sources:\n(1) s 75(v) Constitution — mandamus / prohibition / injunction against an officer of the Commonwealth (cannot be ousted);\n(2) s 39B Judiciary Act — ports s 75(v) into the Federal Court;\n(3) the ADJR Act — statutory grounds with de-centred remedies, but limited to a "decision of an administrative character made under an enactment".',c:['m68']},
           {h:'Bond — "decision" vs "conduct"',t:'Mason CJ: a reviewable "decision" under the ADJR Act is final, operative and determinative and substantive; preliminary findings are usually not "decisions" but may be "conduct" reviewable under s 6.',c:['bond']},
           {h:'State courts + entrenchment (Kirk)',t:'State Supreme Courts have a supervisory jurisdiction for jurisdictional error that a privative clause cannot remove (Kirk) — the state analogue of the s 75(v) entrenched minimum. The constitutional remedies have become central since the 1990s.',c:[]},
           {h:'Remedial breadth (Ainsworth; PBS)',t:'Review can reach even an act with no direct legal effect — a declaration is available where the writs are not (Ainsworth). The jurisdictional / non-jurisdictional error distinction (and Project Blue Sky on whether breach invalidates) runs across all the provisions.',c:['ainsworth','pbs']}
         ]},
    kr:{ title:'사법심사의 법원(法源)',
         summary:'사법심사의 다중 법원 항해. 주 대법원 감독관할; 연방의 s 75(v) 헌법적 영장, s 39B Judiciary Act, ADJR Act. JR은 본안이 아니라 합법성을 심사한다(Quin). Bond가 ADJR상 "결정"(최종·실질·실체)과 s 6의 "행위" 의미를 확정. Kirk가 주 차원의 관할권적 오류 감독심사를 헌법적으로 보호.',
         meta:[
           {label:'주',value:'대법원 감독관할'},
           {label:'연방',value:'s 75(v) · s 39B · ADJR'},
           {label:'경계',value:'본안 아닌 합법성(Quin)'},
           {label:'ADJR',value:'"결정"/"행위"(Bond)'}],
         points:[
           {h:'본안 아닌 합법성 (Quin)',t:'법원은 권한의 한계를 집행할 뿐, 결정을 다시 내리거나 그 지혜를 판단하지 않는다(Brennan J). 이것이 모든 심사 법원(法源)을 관통하는 조직 원리다.',c:['quin']},
           {h:'연방의 다중 법원',t:'연방 세 가지 원천:\n(1) 헌법 s 75(v) — 연방 공무원에 대한 mandamus / prohibition / injunction(배제 불가);\n(2) s 39B Judiciary Act — s 75(v)을 연방법원으로 끌어옴;\n(3) ADJR Act — 사유 기반·구제 탈중심화이나 "수권법에 따른 행정적 성격의 결정"에 한정.',c:['m68']},
           {h:'Bond — "결정" vs "행위"',t:'Mason CJ: ADJR상 심사 대상 "결정"은 최종·실질·결정적이며 실체적이다; 예비적 인정은 보통 "결정"이 아니지만 s 6의 "행위"로 심사될 수 있다.',c:['bond']},
           {h:'주 법원 + 헌법적 보호 (Kirk)',t:'주 대법원은 배제조항이 제거할 수 없는 관할권적 오류 감독관할을 가진다(Kirk) — s 75(v) 최소선의 주(州) 등가물. 헌법적 영장은 1990년대 이후 중심이 되었다.',c:[]},
           {h:'구제의 넓이 (Ainsworth; PBS)',t:'심사는 직접적 법적 효력이 없는 행위에도 미칠 수 있다 — 영장이 안 되는 자리에서 declaration이 가능(Ainsworth). 관할권적/비관할권적 오류 구분(과 위반이 무효화하는지에 관한 Project Blue Sky)은 모든 법원을 관통한다.',c:['ainsworth','pbs']}
         ]},
    tree:{ en:[
      {id:'j',label:'Whose decision?',children:[
        {id:'j-state',label:'State / Territory decision',leaf:true,result:'proceed',note:'State Supreme Court supervisory jurisdiction — entrenched for JE (Kirk).'},
        {id:'j-cth',label:'Commonwealth decision',children:[
          {id:'j-adjr',label:'"decision of an administrative character made under an enactment"? (Bond)',children:[
            {id:'j-adjr-y',label:'Yes',leaf:true,result:'proceed',note:'ADJR Act available (ground-based, de-centred remedies).'},
            {id:'j-adjr-n',label:'No / preliminary',children:[
              {id:'j-conduct',label:'"Conduct" under s 6?',children:[
                {id:'j-c-y',label:'Yes',leaf:true,result:'proceed',note:'ADJR s 6 review of conduct.'},
                {id:'j-c-n',label:'No',leaf:true,result:'switch',note:'Use s 39B Judiciary Act / s 75(v) constitutional writs.'}
              ]}
            ]}
          ]}
        ]}
      ]}
    ], kr:[
      {id:'j',label:'누구의 결정인가?',children:[
        {id:'j-state',label:'주/준주 결정',leaf:true,result:'proceed',note:'주 대법원 감독관할 — 관할권적 오류에 대해 헌법적으로 보호(Kirk).'},
        {id:'j-cth',label:'연방 결정',children:[
          {id:'j-adjr',label:'"수권법에 따른 행정적 성격의 결정"인가? (Bond)',children:[
            {id:'j-adjr-y',label:'예',leaf:true,result:'proceed',note:'ADJR Act 가능(사유 기반·구제 탈중심화).'},
            {id:'j-adjr-n',label:'아니오 / 예비적',children:[
              {id:'j-conduct',label:'s 6의 "행위"인가?',children:[
                {id:'j-c-y',label:'예',leaf:true,result:'proceed',note:'ADJR s 6 행위 심사.'},
                {id:'j-c-n',label:'아니오',leaf:true,result:'switch',note:'s 39B Judiciary Act / s 75(v) 헌법적 영장 사용.'}
              ]}
            ]}
          ]}
        ]}
      ]}
    ]},
    detail:{
      en:[
        {h:'The provisions map',t:'State: Supreme Court supervisory jurisdiction (common-law writs / equitable relief), entrenched for jurisdictional error by Kirk. Commonwealth: s 75(v) Constitution (against officers of the Cth, un-oustable), s 39B Judiciary Act (s 75(v) in the Federal Court), and the ADJR Act. s 75(iii) is a separate jurisdiction (the Commonwealth as a party), not the supervisory writ jurisdiction.'},
        {h:'Bond categorisation',t:'ABT v Bond: only a "decision" — final, operative, determinative and substantive — is reviewable under ADJR s 5; preparatory steps go to s 6 "conduct". This narrowing is one reason applicants often pivot to s 39B / s 75(v).'},
        {h:'Legality boundary (Quin)',t:'Brennan J: the court\'s duty is to enforce the law, not to substitute its own decision for the administrator\'s. Review tests the legal limits and process, not the wisdom of the outcome — the through-line for the whole course.'}
      ],
      kr:[
        {h:'법원(法源) 지도',t:'주: 대법원 감독관할(보통법 영장/형평법 구제), Kirk가 관할권적 오류에 대해 헌법적으로 보호. 연방: 헌법 s 75(v)(연방 공무원 대상, 배제 불가), s 39B Judiciary Act(연방법원의 s 75(v)), ADJR Act. s 75(iii)은 별개 관할(연방이 당사자)이며 감독 영장 관할이 아니다.'},
        {h:'Bond 범주화',t:'ABT v Bond: ADJR s 5에서 심사되는 것은 "결정"(최종·실질·결정적·실체적)뿐이고, 준비 단계는 s 6 "행위"로 간다. 이 협소화 때문에 원고는 종종 s 39B / s 75(v)로 옮겨간다.'},
        {h:'합법성 경계 (Quin)',t:'Brennan J: 법원의 의무는 법을 집행하는 것이지 결정자의 결정을 자신의 것으로 대체하는 것이 아니다. 심사는 법적 한계와 절차를 보지 결과의 지혜를 보지 않는다 — 과목 전체의 관통선.'}
      ]
    },
    cases:['quin','bond','pbs','ainsworth','m68'],
    quiz:[
      { en:{q:'A federal officer\'s decision under a Cth Act is challenged. Which forums are available?',
            opts:['ADJR only','s 75(v) only','ADJR + s 39B(1) + s 75(v)','State Supreme Court only'],
            ans:2,
            why:'Federal admin decisions can be reviewed across all three federal pathways subject to gateway tests.'},
        kr:{q:'연방 법률에 따른 연방 공무원의 결정이 다투어진다. 어느 관할이 가능한가?',
            opts:['ADJR만','s 75(v)만','ADJR + s 39B(1) + s 75(v)','주 대법원만'],
            ans:2,
            why:'연방 행정 결정은 관문 테스트를 충족하면 세 연방 경로 모두에서 심사 가능하다.'} }
    ]
  },
  {
    id:'w3', num:3,
    en:{ title:'Scope of judicial review',
         summary:'Amenability of government action to JR: Tang two-limb "under enactment"; M61 outsourced step still reviewable; NEAT privatised body not amenable; Datafin UK functional test — not adopted in Australia.',
         meta:[
           {label:'Tang',value:'2-limb "under enactment"'},
           {label:'M61',value:'Outsourced step reviewable'},
           {label:'NEAT',value:'Privatised body — no review'},
           {label:'Datafin',value:'UK functional test (rejected)'}],
         points:[
           {h:'Tang under enactment',t:'Two limbs, both required:\n(1) the decision is authorised/required by statute,\n(2) it affects legal rights through that statutory force. Internal university rules lacked statutory force → not "under enactment".',c:['tang']},
           {h:'M61 — outsourcing reaches review',t:'Where the Commonwealth outsources a step (e.g. offshore RSAs by contractors), the step is still an exercise of statutory power and stays within s 39B(1) / s 75(v).',c:['m61']},
           {h:'NEAT — privatisation limit',t:'AWB, a private company exercising a veto within a statutory export scheme, was held not amenable to ADJR — private legal form can defeat review even within a public scheme.',c:['neat']},
           {h:'Datafin (UK, not adopted)',t:'The UK "public function" functional test for amenability has not been adopted in Australia — the source/form of the power still dominates the inquiry. Fuller v Lawrence (2024) reaffirms the Tang approach.',c:['datafin','fuller']}
         ]},
    kr:{ title:'사법심사의 범위',
         summary:'정부 행위가 JR 대상이 되는가: Tang 2단계 "수권법에 따른"; M61 외주 단계도 심사 가능; NEAT 민영화 주체는 대상 아님; Datafin 영국 기능적 기준 — 호주 미채택.',
         meta:[
           {label:'Tang',value:'2단계 "수권법에 따른"'},
           {label:'M61',value:'외주 단계 심사 가능'},
           {label:'NEAT',value:'민영화 주체 — 심사 불가'},
           {label:'Datafin',value:'영국 기능적 기준(미채택)'}],
         points:[
           {h:'Tang 수권법에 따른',t:'두 단계 모두 필요:\n(1) 결정이 법률에 의해 수권/요구되고,\n(2) 그 법적 효력으로 권리에 영향을 준다. 내부 대학 규정은 법적 효력이 없어 "수권법에 따른"이 아니다.',c:['tang']},
           {h:'M61 — 외주도 심사 미침',t:'연방이 단계를 외주화해도(예: 계약자의 역외 RSA), 그 단계는 여전히 법적 권한의 행사이며 s 39B(1) / s 75(v) 안에 남는다.',c:['m61']},
           {h:'NEAT — 민영화의 한계',t:'법정 수출체계 안에서 거부권을 행사한 사기업 AWB는 ADJR 대상이 아니라고 봤다 — 공적 체계 안이라도 사적 법형식이 심사를 차단할 수 있다.',c:['neat']},
           {h:'Datafin (영국, 미채택)',t:'영국의 "공적 기능" 기준은 호주에서 채택되지 않았다 — 권한의 원천·형식이 여전히 판단을 지배한다. Fuller v Lawrence(2024)가 Tang 접근을 재확인.',c:['datafin','fuller']}
         ]},
    tree:{ en:[
      {id:'a',label:'ADJR challenge?',children:[
        {id:'a-y',label:'Yes',children:[
          {id:'bond',label:'Bond: final / operative / determinative?',children:[
            {id:'bond-n',label:'No',leaf:true,result:'reroute',note:'Try conduct under s 6 or s 39B(1).'},
            {id:'bond-y',label:'Yes',children:[
              {id:'tang',label:'Tang: under enactment + affects rights via statutory force?',children:[
                {id:'tang-n',label:'No',leaf:true,result:'reroute',note:'Switch to common law writs or M61 path.'},
                {id:'tang-y',label:'Yes',leaf:true,result:'proceed',note:'ADJR jurisdiction made out.'}
              ]}
            ]}
          ]}
        ]},
        {id:'a-n',label:'No (s 39B(1) / s 75(v))',leaf:true,result:'proceed',note:'Scope under the common-law model (not Bond/Tang); M61 outsourcing path may apply.'}
      ]}
    ], kr:[
      {id:'a',label:'ADJR 다툼인가?',children:[
        {id:'a-y',label:'예',children:[
          {id:'bond',label:'Bond: 최종·실질·결정적?',children:[
            {id:'bond-n',label:'아니오',leaf:true,result:'reroute',note:'s 6의 행위 또는 s 39B(1) 시도.'},
            {id:'bond-y',label:'예',children:[
              {id:'tang',label:'Tang: 수권법에 따른 + 법적 효력으로 권리에 영향?',children:[
                {id:'tang-n',label:'아니오',leaf:true,result:'reroute',note:'common law 영장 또는 M61 경로로 전환.'},
                {id:'tang-y',label:'예',leaf:true,result:'proceed',note:'ADJR 관할 성립.'}
              ]}
            ]}
          ]}
        ]},
        {id:'a-n',label:'아니오 (s 39B(1) / s 75(v))',leaf:true,result:'proceed',note:'common-law 모델의 범위(Bond/Tang 아님); M61 외주 경로 적용 가능.'}
      ]}
    ]},
    detail:{
      en:[
        {h:'Bond categorisation',t:'ABT v Bond drew the line: only "decisions" are reviewable under s 5. Preparatory conduct goes to s 6. Most preliminary findings fall outside s 5 but may be challenged via conduct.'},
        {h:'Tang two-limb test',t:'Both limbs must be made out:\n(1) authorised by enactment (Tang failed because internal academic rules lacked statutory force);\n(2) affects legal rights through that statutory force.'},
        {h:'M61 in practice',t:'Where Cth outsources a step (e.g. RSAs by contractors), the step remains an exercise of statutory power and stays within s 39B(1) / s 75(v).'}
      ],
      kr:[
        {h:'Bond 범주화',t:'ABT v Bond가 선을 그었다: s 5의 "결정"만 심사 대상이다. 준비 행위는 s 6에 해당한다. 대부분의 예비적 인정은 s 5 밖이지만 행위로 다투어질 수 있다.'},
        {h:'Tang 2단계 테스트',t:'두 단계 모두 입증되어야 한다:\n(1) 법률에 의해 수권될 것(Tang은 내부 학술 규정에 법적 효력이 없어 실패);\n(2) 그 법적 효력으로 권리에 영향을 줄 것.'},
        {h:'M61 실무',t:'연방이 단계를 외주화한 경우(예: 계약자 RSA), 그 단계는 여전히 법적 권한의 행사이며 s 39B(1) / s 75(v) 안에 남는다.'}
      ]
    },
    cases:['neat','tang','m61','datafin','fuller'],
    quiz:[
      { en:{q:'University excludes a PhD candidate under internal academic regulations. ADJR jurisdiction?',
            opts:['Yes — clearly under enactment','No — Tang second limb fails (no statutory force)','Yes — Bond decision satisfied','No — Bond fails'],
            ans:1,
            why:'Tang: internal academic rules without statutory force cannot satisfy "under enactment" test.'},
        kr:{q:'대학이 내부 학술 규정에 따라 박사과정생을 제명한다. ADJR 관할이 성립하는가?',
            opts:['예 — 명확히 수권법에 따른','아니오 — Tang 2단계 실패(법적 효력 없음)','예 — Bond 결정 충족','아니오 — Bond 실패'],
            ans:1,
            why:'Tang: 법적 효력 없는 내부 학술 규정으로는 "수권법에 따른" 테스트를 충족할 수 없다.'} }
    ]
  },
  {
    id:'w4', num:4,
    en:{ title:'Remedies & consequences of legal error',
         summary:'The JR remedies — certiorari, prohibition, mandamus, declaration, injunction — and what each can and cannot do. The jurisdictional / non-jurisdictional error distinction governs the constitutional writs (JE only), now complicated by the presumption of materiality (Hossain · MZAPC onus · LPDT no reconstruction). Consequences of invalidity: a JE-affected decision is in law no decision and may be re-made (Bhardwaj).',
         meta:[
           {label:'Writs',value:'Cert / prohib / mandamus'},
           {label:'Constitutional writs',value:'JE only'},
           {label:'Materiality',value:'Hossain presumption'},
           {label:'Consequence',value:'Bhardwaj nullity'}],
         points:[
           {h:'The remedies and their limits',t:'Certiorari quashes; prohibition restrains; mandamus compels a lawful exercise — not a particular outcome (M174). Declaration / injunction are flexible (available even where a writ is not, e.g. Project Blue Sky). Certiorari is not available for every error of law — only jurisdictional error, or non-jurisdictional error on the face of the record.',c:['m174','pbs']},
           {h:'Jurisdictional vs non-jurisdictional error (Kirk)',t:'The constitutional writs (s 75(v)) issue only for jurisdictional error. Kirk affirms the centrality and breadth of jurisdictional error and treats the JE / non-JE line as a constitutional matter, not one Parliament can re-draw at will.',c:['kirk-jurisdiction','kirk-criterion']},
           {h:'Presumption of materiality (Hossain · MZAPC · LPDT)',t:'A breach is jurisdictional only if material — a realistic possibility the outcome could have been different. MZAPC: the onus is on the applicant. LPDT: the court must not reconstruct the decision; the inferential approach (WZARH) applies and the onus is light where the possibility is self-evident.',c:['hossain','mzapc','lpdt']},
           {h:'Consequences of legal error (Bhardwaj)',t:'A decision affected by jurisdictional error is, in law, no decision at all. So the decision-maker may re-exercise the power and make it again, and the invalid decision cannot, as a valid decision, ground rights or an appeal.',c:['bhardwaj']}
         ]},
    kr:{ title:'구제 및 법적 오류의 결과',
         summary:'사법심사 구제수단 — certiorari·prohibition·mandamus·declaration·injunction — 과 각자의 한계. 관할권적/비관할권적 오류 구분이 헌법적 영장을 지배(관할권적 오류만)하며, 이제 중요성 추정으로 복잡해짐(Hossain·MZAPC 입증책임·LPDT 재구성 금지). 무효의 결과: 관할권적 오류 결정은 법적으로 결정이 아니며 재결정 가능(Bhardwaj).',
         meta:[
           {label:'영장',value:'cert / prohib / mandamus'},
           {label:'헌법적 영장',value:'관할권적 오류만'},
           {label:'중요성',value:'Hossain 추정'},
           {label:'결과',value:'Bhardwaj 무효'}],
         points:[
           {h:'구제수단과 그 한계',t:'certiorari는 취소, prohibition은 금지, mandamus는 적법한 행사를 강제 — 특정 결과를 강제하지 않는다(M174). declaration/injunction은 유연해서 영장이 안 되는 자리에도 가능(예: Project Blue Sky). certiorari는 모든 법률 오류에 되는 게 아니라 관할권적 오류, 또는 기록 표면상 비관할권적 오류에만 된다.',c:['m174','pbs']},
           {h:'관할권적 vs 비관할권적 오류 (Kirk)',t:'헌법적 영장(s 75(v))은 관할권적 오류에만 발해진다. Kirk는 관할권적 오류의 중심성과 폭을 확인하고, 관할권적/비관할권적 경계를 의회가 임의로 다시 그을 수 없는 헌법 문제로 다룬다.',c:['kirk-jurisdiction','kirk-criterion']},
           {h:'중요성 추정 (Hossain · MZAPC · LPDT)',t:'위반은 중요할 때만 관할권적이다 — 결과가 달라질 현실적 가능성. MZAPC: 입증책임은 원고에게. LPDT: 법원은 결정을 재구성해선 안 되고, 추론적 접근(WZARH)이 적용되며 가능성이 자명한 경우 입증책임은 가볍다.',c:['hossain','mzapc','lpdt']},
           {h:'법적 오류의 결과 (Bhardwaj)',t:'관할권적 오류 결정은 법적으로 처음부터 결정이 아니다. 따라서 결정자는 권한을 다시 행사해 재결정할 수 있고, 그 무효 결정은 유효한 결정으로서 권리나 항소의 근거가 될 수 없다.',c:['bhardwaj']}
         ]},
    tree:{ en:[
      {id:'r',label:'What remedy / question?',children:[
        {id:'r-cert',label:'Certiorari (quash)',children:[
          {id:'cert-je',label:'Jurisdictional error?',children:[
            {id:'cert-je-y',label:'Yes',leaf:true,result:'proceed',note:'Certiorari available; constitutional writs also (s 75(v)).'},
            {id:'cert-je-n',label:'No — error on the face of the record?',children:[
              {id:'cert-f-y',label:'Yes',leaf:true,result:'proceed',note:'Certiorari for non-JE error on the face (not the constitutional writs).'},
              {id:'cert-f-n',label:'No',leaf:true,result:'no-je',note:'No certiorari.'}
            ]}
          ]}
        ]},
        {id:'r-mand',label:'Mandamus (compel)',leaf:true,result:'proceed',note:'Compels a lawful exercise of a duty/discretion — not a chosen outcome (M174).'},
        {id:'r-decl',label:'Declaration / injunction',leaf:true,result:'proceed',note:'Flexible; available even with no legal effect (Ainsworth) or where a writ is not (PBS).'},
        {id:'r-cons',label:'Consequence of an invalid decision',leaf:true,result:'proceed',note:'JE → no decision at all (Bhardwaj): may be re-made; no valid decision to appeal.'}
      ]}
    ], kr:[
      {id:'r',label:'어떤 구제 / 질문인가?',children:[
        {id:'r-cert',label:'Certiorari (취소)',children:[
          {id:'cert-je',label:'관할권적 오류인가?',children:[
            {id:'cert-je-y',label:'예',leaf:true,result:'proceed',note:'Certiorari 가능; 헌법적 영장도(s 75(v)).'},
            {id:'cert-je-n',label:'아니오 — 기록 표면상 오류?',children:[
              {id:'cert-f-y',label:'예',leaf:true,result:'proceed',note:'표면상 비관할권적 오류엔 certiorari(헌법적 영장은 아님).'},
              {id:'cert-f-n',label:'아니오',leaf:true,result:'no-je',note:'Certiorari 불가.'}
            ]}
          ]}
        ]},
        {id:'r-mand',label:'Mandamus (강제)',leaf:true,result:'proceed',note:'의무·재량의 적법한 행사를 강제 — 특정 결과는 아님(M174).'},
        {id:'r-decl',label:'Declaration / injunction',leaf:true,result:'proceed',note:'유연; 법적 효력 없어도(Ainsworth), 영장 안 되는 자리에도(PBS).'},
        {id:'r-cons',label:'무효 결정의 결과',leaf:true,result:'proceed',note:'관할권적 오류 → 처음부터 결정 아님(Bhardwaj): 재결정 가능; 항소할 유효 결정 없음.'}
      ]}
    ]},
    detail:{
      en:[
        {h:'Remedies overview',t:'Prerogative/constitutional writs (certiorari, prohibition, mandamus) plus equitable declaration and injunction. Declarations are flexible but have disadvantages — non-coercive and they do not quash. The ADJR Act deliberately de-centred remedies, making a "ground of review" the key issue instead.'},
        {h:'Limits of the writs',t:'Certiorari: only for jurisdictional error, or non-jurisdictional error of law on the face of the record. Mandamus: compels the performance of a duty / a lawful exercise of discretion, but cannot dictate the particular decision (M174).'},
        {h:'Materiality presumption',t:'Hossain made materiality an implied condition: a breach is jurisdictional only if there was a realistic possibility the outcome could have differed. MZAPC places the onus on the applicant; LPDT [2024] HCA 12 forbids the court reconstructing the decision and reaffirms the WZARH inferential approach.'},
        {h:'Consequences — Bhardwaj',t:'A JE-affected decision is a nullity — "no decision at all". The repository may therefore re-exercise the power; and because there is no valid decision, it cannot found an appeal or otherwise have the legal effects of a valid decision.'}
      ],
      kr:[
        {h:'구제수단 개관',t:'특권적/헌법적 영장(certiorari·prohibition·mandamus)과 형평법상 declaration·injunction. declaration은 유연하나 단점이 있다 — 강제력이 없고 취소하지 못한다. ADJR Act는 의도적으로 구제를 탈중심화하고 "심사 사유"를 핵심으로 삼았다.'},
        {h:'영장의 한계',t:'certiorari: 관할권적 오류, 또는 기록 표면상 비관할권적 법률 오류에만. mandamus: 의무 이행·재량의 적법한 행사를 강제하나 특정 결정을 지시할 수는 없다(M174).'},
        {h:'중요성 추정',t:'Hossain이 중요성을 묵시적 조건으로 만들었다: 결과가 달라질 현실적 가능성이 있었어야 위반이 관할권적이다. MZAPC는 입증책임을 원고에게 두고, LPDT [2024] HCA 12는 법원의 결정 재구성을 금지하며 WZARH의 추론적 접근을 재확인한다.'},
        {h:'결과 — Bhardwaj',t:'관할권적 오류 결정은 무효 — "처음부터 결정이 아니다". 따라서 권한 보유자는 권한을 다시 행사할 수 있고, 유효한 결정이 없으므로 항소의 근거가 되거나 유효 결정의 법적 효력을 가질 수 없다.'}
      ]
    },
    cases:['kirk-jurisdiction','kirk-criterion','hossain','mzapc','lpdt','bhardwaj','m174'],
    quiz:[
      { en:{q:'A tribunal failed to consider one mandatory factor. To establish JE, the applicant must show:',
            opts:['Outcome would have been different on balance','Realistic possibility outcome could have been different','That the factor was decisive','Nothing — automatic JE'],
            ans:1,
            why:'Hossain stage 3: realistic possibility of different outcome. Court must not reconstruct.'},
        kr:{q:'tribunal이 의무 고려사항 하나를 누락했다. JE 입증을 위해 원고가 보여야 할 것은?',
            opts:['결과가 개연성의 우월로 달라졌을 것','결과가 달라질 현실적 가능성','그 요소가 결정적이었을 것','없음 — 자동 JE'],
            ans:1,
            why:'Hossain 3단계: 결과가 달라질 현실적 가능성. 법원은 재구성해서는 안 된다.'} }
    ]
  },
  {
    id:'w5', num:5,
    en:{ title:'Procedural fairness — hearing rule',
         summary:'Annetts default presumption; Lam practical injustice touchstone; Saeed clear words to exclude; Li/DUA16 procedural unreasonableness; SZBEL specificity.',
         meta:[
           {label:'Default',value:'Annetts presumption'},
           {label:'Touchstone',value:'Practical injustice (Lam)'},
           {label:'Materiality',value:'WZARH-easy'},
           {label:'Standard',value:'Notice + opportunity'}],
         points:[
           {h:'Default applies',t:'PF presumed for decisions affecting rights/interests; only clear statutory words exclude (Annetts; Saeed).',c:['annetts']},
           {h:'Practical injustice',t:'Lam: focus on whether the applicant was practically denied a fair hearing — not legitimate expectation.',c:['lam']},
           {h:'Specificity',t:'Adverse credibility, country information, late evidence — SZBEL-style obligations to put with sufficient particularity.',c:[]},
           {h:'Materiality',t:'WZARH: further submissions/evidence inferred readily; LPDT confirms no reconstruction.',c:['wzarh','lpdt']}
         ]},
    kr:{ title:'절차적 공정성 — 청문 규칙',
         summary:'Annetts 기본 추정; Lam 실질적 부정의의 판단의 핵심 기준; Saeed 분명한 문언으로만 배제; Li/DUA16 절차적 비합리성; SZBEL 구체성.',
         meta:[
           {label:'기본값',value:'Annetts 추정'},
           {label:'판단 기준',value:'실질적 부정의(Lam)'},
           {label:'중요성',value:'WZARH 손쉬움'},
           {label:'기준',value:'고지 + 기회'}],
         points:[
           {h:'기본 적용',t:'권리·이익에 영향을 주는 결정에 PF가 추정 적용된다 — 분명한 법적 문언만이 이를 배제한다(Annetts; Saeed).',c:['annetts']},
           {h:'실질적 부정의',t:'Lam: 정당한 기대가 아닌, 신청자가 실질적으로 공정한 청문 기회를 박탈당했는지에 초점.',c:['lam']},
           {h:'구체성',t:'불리한 신빙성, 출신국 정보, 지연 증거 — SZBEL 식 충분히 구체적으로 제시할 의무.',c:[]},
           {h:'중요성',t:'WZARH: 추가 주장·증거가 손쉽게 추론된다. LPDT가 재구성 금지를 재확인.',c:['wzarh','lpdt']}
         ]},
    tree:{ en:[
      {id:'a',label:'Decision affects rights / interests / legitimate expectations?',children:[
        {id:'a-n',label:'No',leaf:true,result:'no-pf',note:'Default does not engage.'},
        {id:'a-y',label:'Yes',children:[
          {id:'b',label:'Clear statutory words excluding PF?',children:[
            {id:'b-y',label:'Yes',leaf:true,result:'no-pf',note:'Saeed — express ouster.'},
            {id:'b-n',label:'No',children:[
              {id:'c',label:'Practical injustice (Lam)?',children:[
                {id:'c-n',label:'No',leaf:true,result:'no-breach',note:'No PF breach.'},
                {id:'c-y',label:'Yes',children:[
                  {id:'d',label:'Material? (WZARH-easy)',children:[
                    {id:'d-y',label:'Yes',leaf:true,result:'je',note:'PF breach → JE.'},
                    {id:'d-n',label:'No',leaf:true,result:'no-je',note:'Not material.'}
                  ]}
                ]}
              ]}
            ]}
          ]}
        ]}
      ]}
    ], kr:[
      {id:'a',label:'결정이 권리·이익·정당한 기대에 영향?',children:[
        {id:'a-n',label:'아니오',leaf:true,result:'no-pf',note:'기본값 미작동.'},
        {id:'a-y',label:'예',children:[
          {id:'b',label:'PF를 배제하는 분명한 법적 문언?',children:[
            {id:'b-y',label:'예',leaf:true,result:'no-pf',note:'Saeed — 명시적 배제.'},
            {id:'b-n',label:'아니오',children:[
              {id:'c',label:'실질적 부정의(Lam)?',children:[
                {id:'c-n',label:'아니오',leaf:true,result:'no-breach',note:'PF 위반 없음.'},
                {id:'c-y',label:'예',children:[
                  {id:'d',label:'중요한가? (WZARH 손쉬움)',children:[
                    {id:'d-y',label:'예',leaf:true,result:'je',note:'PF 위반 → JE.'},
                    {id:'d-n',label:'아니오',leaf:true,result:'no-je',note:'중요하지 않음.'}
                  ]}
                ]}
              ]}
            ]}
          ]}
        ]}
      ]}
    ]},
    detail:{
      en:[
        {h:'When PF applies',t:'Annetts: a default presumption — the decision-maker is to act fairly unless statute clearly excludes it. Coronial inquiries, licensing, visa decisions all engage PF.'},
        {h:'Content of the hearing rule',t:'Notice of issues and adverse material; meaningful opportunity to respond; specificity (SZBEL); response time. Form varies with circumstances.'},
        {h:'Practical injustice',t:'Lam (Gleeson CJ): the question is whether the applicant suffered a real practical disadvantage; legitimate expectation no longer the touchstone.'}
      ],
      kr:[
        {h:'PF가 적용되는 경우',t:'Annetts: 기본 추정 — 법률이 명확히 배제하지 않는 한 결정자는 공정하게 행위해야 한다. 검시, 면허, 비자 결정 모두 PF가 작동한다.'},
        {h:'청문 규칙의 내용',t:'쟁점과 불리한 자료의 고지; 의미 있는 응답 기회; 구체성(SZBEL); 응답 기간. 형태는 상황에 따라 달라진다.'},
        {h:'실질적 부정의',t:'Lam(Gleeson CJ): 신청자가 실제로 실질적 불이익을 겪었는지가 핵심이다 — 정당한 기대는 더 이상 판단의 핵심 기준이 아니다.'}
      ]
    },
    cases:['kioa','saeed','s10','veal','wzarh','nathanson','annetts','lam'],
    quiz:[
      { en:{q:'A tribunal does not put adverse country information to the applicant. The most direct consequence is:',
            opts:['No issue — country info is public','Possible PF breach — opportunity to respond denied','Bias','Improper purpose'],
            ans:1,
            why:'SZBEL-style specificity demands that adverse material be put for response. Otherwise practical injustice arises.'},
        kr:{q:'tribunal이 불리한 출신국 정보를 신청자에게 제시하지 않는다. 가장 직접적인 결과는?',
            opts:['문제 없음 — 출신국 정보는 공개됨','PF 위반 가능성 — 응답 기회 박탈','편향','부정한 목적'],
            ans:1,
            why:'SZBEL 식 구체성은 불리한 자료를 응답을 위해 제시할 것을 요구한다. 그렇지 않으면 실질적 부정의가 발생한다.'} }
    ]
  },
  {
    id:'w6', num:6,
    en:{ title:'Bias rule & reasons requirements',
         summary:'Procedural fairness, second branch: the rule against bias (with the hearing rule, the bulk of PF cases). Ebner two-step apprehended-bias test; Jia ministerial pre-judgment; Isbester overlapping roles; CNY17 adviser influence; Hot Holdings interest/association. Plus the duty to give reasons — no general common-law duty, but statutory reasons obligations and the consequences of inadequate reasons.',
         meta:[
           {label:'Test',value:'Ebner double-might'},
           {label:'Step 1',value:'Identify the matter'},
           {label:'Step 2',value:'Logical connection'},
           {label:'Reasons',value:'No general CL duty'}],
         points:[
           {h:'Apprehended bias — Ebner two-step',t:'Fair-minded lay observer test:\n(1) identify what might lead the decision-maker to decide other than on the merits;\n(2) articulate the logical connection between that matter and the feared deviation. The connection must not be remote. Bias is always-JE — no materiality inquiry.',c:['ebner']},
           {h:'Pre-judgment (Jia)',t:'A minister\'s public statements can show a mind so committed that a fair-minded observer apprehends he could not be moved — but allowance is made for the political and policy role of a minister.',c:['jia']},
           {h:'Overlapping roles (Isbester · Hot Holdings)',t:'Isbester: a person who participated in the prosecution also sat on the decision panel — incompatible roles. Hot Holdings: interest / close association of a person influential in the process can found apprehended bias.',c:['isbester','hotholdings']},
           {h:'Adviser influence (CNY17)',t:'Apprehended bias can arise from prejudicial material an adviser puts before the decision-maker; the question is the reasonable apprehension, not whether influence is proven.',c:['cny17']},
           {h:'Reasons requirements',t:'There is no general common-law duty to give reasons, but statutes often impose one (e.g. s 430 Migration Act). Inadequate statutory reasons can themselves found review and may expose another error (e.g. a mandatory consideration not addressed).',c:[]}
         ]},
    kr:{ title:'편향 규칙 · 이유제시 의무',
         summary:'절차공정의 두 번째 갈래 — 편향 금지 규칙(청문 규칙과 함께 PF 사건의 대부분). Ebner 2단계 추정편향 테스트; Jia 장관 사전판단; Isbester 역할 중첩; CNY17 보좌관 영향; Hot Holdings 이해·연관. 그리고 이유제시 의무 — 보통법상 일반 의무는 없지만 법령상 의무와 부실 이유의 효과가 핵심.',
         meta:[
           {label:'테스트',value:'Ebner 이중 might'},
           {label:'1단계',value:'사정 식별'},
           {label:'2단계',value:'논리적 연결'},
           {label:'이유',value:'보통법 일반의무 없음'}],
         points:[
           {h:'추정 편향 — Ebner 2단계',t:'공정한 마음의 일반 관찰자 기준:\n(1) 결정자를 본안 외 사유로 이끌 수 있는 사정을 식별하고,\n(2) 그 사정과 우려되는 일탈 사이의 논리적 연결을 진술한다. 연결이 너무 멀어선 안 된다. 편향은 항상 JE — 중요성 심사 없음.',c:['ebner']},
           {h:'사전판단 (Jia)',t:'장관의 공개 발언이 마음을 너무 굳혀 공정한 관찰자가 설득 불가능을 의심할 정도일 수 있다 — 다만 장관의 정치·정책적 역할은 감안한다.',c:['jia']},
           {h:'역할 중첩 (Isbester · Hot Holdings)',t:'Isbester: 소추에 관여한 사람이 결정 패널에도 앉음 — 양립 불가 역할. Hot Holdings: 과정에 영향력 있는 사람의 이해·밀접 연관이 추정편향을 일으킬 수 있다.',c:['isbester','hotholdings']},
           {h:'보좌관 영향 (CNY17)',t:'보좌관이 결정자에게 올린 불리한 자료에서 추정편향이 생길 수 있다. 핵심은 합리적 의심이지 실제 영향의 입증이 아니다.',c:['cny17']},
           {h:'이유제시 의무',t:'보통법상 이유제시의 일반 의무는 없지만, 법령이 의무를 부과하는 경우가 많다(예: Migration Act s 430). 부실한 법령상 이유 자체가 심사 사유가 되고, 다른 오류(예: 의무 고려사항 미검토)를 드러낼 수 있다.',c:[]}
         ]},
    tree:{ en:[
      {id:'b',label:'Bias claim?',children:[
        {id:'b-y',label:'Yes',children:[
          {id:'art',label:'Ebner two-step:\n(1) what might lead the decision-maker to decide other than on the merits;\n(2) logical connection to the feared deviation',children:[
            {id:'art-y',label:'Connection made out (not remote)',leaf:true,result:'always-je',note:'Apprehended/actual bias — always-JE, no materiality.'},
            {id:'art-n',label:'Connection too remote',leaf:true,result:'no-je',note:'No reasonable apprehension established.'}
          ]}
        ]},
        {id:'b-n',label:'No — reasons issue',children:[
          {id:'r',label:'Statutory duty to give reasons?',children:[
            {id:'r-n',label:'No statutory duty',leaf:true,result:'no-je',note:'No general common-law duty to give reasons.'},
            {id:'r-y',label:'Yes — reasons inadequate?',children:[
              {id:'r-y-y',label:'Inadequate / no findings on material questions',leaf:true,result:'check-mat',note:'Breach of statutory procedure; may also expose another error. Apply materiality.'},
              {id:'r-y-n',label:'Adequate',leaf:true,result:'no-je',note:'Statutory reasons obligation satisfied.'}
            ]}
          ]}
        ]}
      ]}
    ], kr:[
      {id:'b',label:'편향 주장?',children:[
        {id:'b-y',label:'예',children:[
          {id:'art',label:'Ebner 2단계:\n(1) 결정자를 본안 외 사유로 이끌 수 있는 사정;\n(2) 우려되는 일탈과의 논리적 연결',children:[
            {id:'art-y',label:'연결 성립(멀지 않음)',leaf:true,result:'always-je',note:'추정/실제 편향 — 항상 JE, 중요성 없음.'},
            {id:'art-n',label:'연결이 너무 멂',leaf:true,result:'no-je',note:'합리적 의심 미성립.'}
          ]}
        ]},
        {id:'b-n',label:'아니오 — 이유 문제',children:[
          {id:'r',label:'법령상 이유제시 의무 있는가?',children:[
            {id:'r-n',label:'법령상 의무 없음',leaf:true,result:'no-je',note:'보통법상 일반 이유제시 의무 없음.'},
            {id:'r-y',label:'있음 — 이유가 부실한가?',children:[
              {id:'r-y-y',label:'부실 / 핵심 쟁점에 인정 없음',leaf:true,result:'check-mat',note:'법령 절차 위반; 다른 오류를 드러낼 수 있음. 중요성 적용.'},
              {id:'r-y-n',label:'충분함',leaf:true,result:'no-je',note:'법령상 이유 의무 충족.'}
            ]}
          ]}
        ]}
      ]}
    ]},
    detail:{
      en:[
        {h:'Ebner two-step',t:'(1) Identify what it is that might lead the decision-maker to decide otherwise than on the merits;\n(2) articulate the logical connection between that matter and the feared deviation. A remote or speculative connection is not enough. Actual bias is rarely run because it is hard to prove; apprehended bias does the work.'},
        {h:'Ministers and pre-judgment (Jia)',t:'Ministers are expected to have and voice policy views. The bias rule is calibrated to the office: the question is whether the fair-minded observer would apprehend the minister could not be persuaded by the case put, not merely that he held a view.'},
        {h:'Reasons',t:'No general common-law duty to give reasons (cf. statutory duties). Where a statute requires reasons (e.g. setting out findings on material questions of fact), inadequate reasons breach the procedure and frequently reveal a further error such as a mandatory consideration not addressed.'}
      ],
      kr:[
        {h:'Ebner 2단계',t:'(1) 결정자를 본안 외 사유로 이끌 수 있는 것이 무엇인지 식별하고,\n(2) 그 사정과 우려되는 일탈 사이의 논리적 연결을 진술한다. 멀거나 막연한 연결로는 부족하다. 실제 편향은 입증이 어려워 거의 안 쓰고, 추정 편향이 실무를 담당한다.'},
        {h:'장관과 사전판단 (Jia)',t:'장관은 정책적 견해를 갖고 표명하기 마련이다. 편향 규칙은 직책에 맞춰 조정된다 — 단지 견해를 가졌다가 아니라, 제출된 사안으로 설득될 수 없다고 공정한 관찰자가 의심할지가 기준이다.'},
        {h:'이유제시',t:'보통법상 일반 이유제시 의무는 없다(법령상 의무와 구별). 법령이 이유(예: 핵심 사실쟁점에 대한 인정 기재)를 요구하면, 부실한 이유는 절차 위반이며 의무 고려사항 미검토 같은 추가 오류를 드러내는 경우가 잦다.'}
      ]
    },
    cases:['ebner','jia','isbester','cny17','hotholdings'],
    quiz:[
      { en:{q:'A judge holds shares in a litigant company. The Ebner test asks:',
            opts:['Whether the judge is actually biased','Whether a fair-minded lay observer might reasonably apprehend the judge might not be impartial','Whether the share value is material','Whether the parties consent'],
            ans:1,
            why:'Apprehended bias is the "double might" test in Ebner — fair-minded lay observer + reasonable apprehension.'},
        kr:{q:'재판부가 소송 당사자 회사 주식을 보유한다. Ebner 테스트의 질문은?',
            opts:['재판부가 실제로 편향되었는가','공정한 마음을 가진 일반 관찰자가 재판부가 공정하지 않을 수 있다고 합리적으로 의심할 수 있는가','주식 가치가 중요한가','당사자가 동의했는가'],
            ans:1,
            why:'추정 편향은 Ebner의 "이중 might" 테스트 — 공정한 마음을 가진 일반 관찰자 + 합리적 의심.'} }
    ]
  },
  {
    id:'w7', num:7,
    en:{ title:'Reasoning process norms — considerations · purpose · policy',
         summary:'Legal controls on how discretionary power is reasoned. Consideration norms (Peko-Wallsend — mandatory/irrelevant by statutory construction; M1/2021 & Tickner — genuine, personal engagement). Purpose norm (Schlieske — dominant unauthorised purpose). No-fettering & policy (Green v Daniels — inflexible application unlawful; M64 — lawful priority policy with an exception clause). Acting under dictation; delegate vs agent.',
         meta:[
           {label:'Considerations',value:'By statutory construction'},
           {label:'Purpose',value:'Dominant operative'},
           {label:'Policy',value:'Guide, not substitute'},
           {label:'Delegation',value:'Express vs agent'}],
         points:[
           {h:'Considerations (Peko-Wallsend)',t:'Mandatory and irrelevant considerations are identified by construing the statute (Mason J\'s principles). Failing to take a mandatory consideration into account, or taking an irrelevant one into account, is an error — but the weight given to a relevant consideration is generally for the decision-maker (subject to unreasonableness).',c:['peko']},
           {h:'Proper, personal consideration (M1/2021 · Tickner)',t:'The decision-maker must genuinely engage. Tickner: the mental act of consideration cannot be delegated. M1/2021: the standard is to read, identify, understand and evaluate the material — not a tick-box.',c:['m1-2021','tickner']},
           {h:'Improper purpose (Schlieske)',t:'A power exercised for a purpose outside the statute is invalid where that unauthorised purpose is the dominant operative purpose (Schlieske — deportation used as disguised extradition). Mixed-purpose cases turn on which purpose actually drove the decision; ministers have a wide policy scope.',c:['schlieske']},
           {h:'No-fettering & policy (Green · M64)',t:'A policy applied inflexibly as a substitute for the statutory criteria is unlawful (Green v Daniels). A tiered priority policy is lawful where an exception clause preserves a genuine evaluative discretion (M64).',c:['green','m64']},
           {h:'Dictation & delegation vs agency',t:'Acting under another official\'s dictation is an unauthorised surrender of discretion. A delegate needs express statutory authority; but a repository may act through an agent for administrative necessity (the Carltona-type principle) — an express power to delegate does not necessarily preclude acting through an agent.',c:[]}
         ]},
    kr:{ title:'추론과정 규범 — 고려사항 · 목적 · 정책',
         summary:'재량 권한을 어떻게 추론했는지에 대한 법적 통제. 고려사항 규범(Peko-Wallsend — 의무·무관 고려는 법령 해석으로 식별; M1/2021·Tickner — 진정한 직접 관여). 목적 규범(Schlieske — 지배적 무권한 목적). 재량 불구속·정책(Green v Daniels — 경직 적용 위법; M64 — 예외 조항 있는 적법한 우선순위 정책). 지시에 따른 행위; 위임 vs 대리.',
         meta:[
           {label:'고려사항',value:'법령 해석으로'},
           {label:'목적',value:'지배적 작용'},
           {label:'정책',value:'지침이지 대체 아님'},
           {label:'위임',value:'명시 vs 대리'}],
         points:[
           {h:'고려사항 (Peko-Wallsend)',t:'의무·무관 고려사항은 법령 해석으로 식별된다(Mason J 원칙). 의무 고려사항을 빠뜨리거나 무관한 것을 고려하면 오류다 — 다만 관련 고려사항에 부여하는 가중치는 원칙적으로 결정자의 몫이다(비합리성 한도 내).',c:['peko']},
           {h:'진정한 직접 고려 (M1/2021 · Tickner)',t:'결정자는 진정으로 관여해야 한다. Tickner: 고려라는 정신적 행위는 위임할 수 없다. M1/2021: 자료를 읽고 식별하고 이해하고 평가하는 것이 기준 — 체크박스가 아니다.',c:['m1-2021','tickner']},
           {h:'부정한 목적 (Schlieske)',t:'법령 밖 목적으로 권한을 행사하면, 그 무권한 목적이 지배적 작용 목적일 때 무효다(Schlieske — 추방을 위장 인도로 사용). 복합 목적 사건은 어느 목적이 실제로 결정을 주도했는지에 달려 있다. 장관은 정책 재량의 폭이 넓다.',c:['schlieske']},
           {h:'재량 불구속·정책 (Green · M64)',t:'법적 기준을 대체하여 정책을 경직적으로 적용하면 위법(Green v Daniels). 예외 조항이 진정한 평가적 재량을 보존하면 계층적 우선순위 정책은 적법(M64).',c:['green','m64']},
           {h:'지시·위임 vs 대리',t:'다른 공무원의 지시에 따라 결정하면 재량의 무권한 포기다. 위임(delegate)은 명시적 법령 수권이 필요하지만, 권한 보유자는 행정상 필요로 대리인(agent)을 통해 행위할 수 있다(Carltona형 원칙) — 명시적 위임 권한이 있다고 대리가 당연히 배제되는 것은 아니다.',c:[]}
         ]},
    tree:{ en:[
      {id:'g',label:'Which reasoning-process norm?',children:[
        {id:'g-con',label:'Considerations',children:[
          {id:'con-m',label:'Mandatory consideration ignored / irrelevant one weighed (Peko)',leaf:true,result:'check-mat',note:'Error; weight otherwise for the DM. Apply materiality (Hossain).'},
          {id:'con-p',label:'No genuine, personal consideration (Tickner / M1-2021)',leaf:true,result:'check-mat',note:'Failure to read/understand/evaluate. Apply materiality.'}
        ]},
        {id:'g-pur',label:'Purpose — is the dominant operative purpose unauthorised? (Schlieske)',children:[
          {id:'pur-y',label:'Yes',leaf:true,result:'je',note:'Improper purpose — substantive ground.'},
          {id:'pur-n',label:'No (within wide ministerial scope)',leaf:true,result:'no-je',note:'Permissible purpose.'}
        ]},
        {id:'g-pol',label:'Policy applied — substitute for the statutory criteria?',children:[
          {id:'pol-y',label:'Yes (inflexible)',leaf:true,result:'invalid',note:'Green v Daniels — unlawful fettering.'},
          {id:'pol-n',label:'No — exception preserves discretion?',children:[
            {id:'pol-e-y',label:'Yes',leaf:true,result:'valid',note:'M64 — lawful priority policy.'},
            {id:'pol-e-n',label:'No',leaf:true,result:'check',note:'Risk of fettering / dictation — examine.'}
          ]}
        ]}
      ]}
    ], kr:[
      {id:'g',label:'어느 추론과정 규범?',children:[
        {id:'g-con',label:'고려사항',children:[
          {id:'con-m',label:'의무 고려사항 누락 / 무관 고려(Peko)',leaf:true,result:'check-mat',note:'오류; 가중치는 원칙적으로 결정자. 중요성 적용(Hossain).'},
          {id:'con-p',label:'진정한 직접 고려 없음(Tickner / M1-2021)',leaf:true,result:'check-mat',note:'읽기·이해·평가 실패. 중요성 적용.'}
        ]},
        {id:'g-pur',label:'목적 — 지배적 작용 목적이 무권한인가?(Schlieske)',children:[
          {id:'pur-y',label:'예',leaf:true,result:'je',note:'부정한 목적 — 실체적 사유.'},
          {id:'pur-n',label:'아니오(넓은 장관 재량 내)',leaf:true,result:'no-je',note:'허용된 목적.'}
        ]},
        {id:'g-pol',label:'정책 적용 — 법적 기준을 대체하는가?',children:[
          {id:'pol-y',label:'예(경직)',leaf:true,result:'invalid',note:'Green v Daniels — 위법한 재량 구속.'},
          {id:'pol-n',label:'아니오 — 예외가 재량 보존?',children:[
            {id:'pol-e-y',label:'예',leaf:true,result:'valid',note:'M64 — 적법한 우선순위 정책.'},
            {id:'pol-e-n',label:'아니오',leaf:true,result:'check',note:'재량 구속·지시 위험 — 검토.'}
          ]}
        ]}
      ]}
    ]},
    detail:{
      en:[
        {h:'Peko-Wallsend — considerations',t:'Mason J: what is mandatory or irrelevant is a question of statutory construction. The Minister erred by not having regard to new representations before the decision. The court does not re-weigh — weight is for the decision-maker, unless the result is legally unreasonable.'},
        {h:'Schlieske — dominant purpose',t:'Where a power is used to achieve a purpose it was not conferred for, validity turns on whether the unauthorised purpose was the dominant operative purpose. A genuine permissible purpose is not vitiated merely because an incidental impermissible motive existed.'},
        {h:'Green v Daniels vs M64',t:'Green: applying a policy as if it were a binding rule, displacing the statutory test, is an unlawful fetter. M64: a priority policy with an explicit exception clause preserved a real evaluative discretion, so it was lawful — the exception is what distinguishes the two.'},
        {h:'Delegate vs agent',t:'A delegate exercises the power in their own name and needs express statutory authority. An agent acts in the repository\'s name; administrative necessity allows a repository to act through officers (Carltona-type principle), and an express power to delegate does not necessarily exclude agency.'}
      ],
      kr:[
        {h:'Peko-Wallsend — 고려사항',t:'Mason J: 무엇이 의무·무관 고려인지는 법령 해석의 문제다. 장관은 결정 전 새 의견서를 고려하지 않아 오류를 범했다. 법원은 재형량하지 않는다 — 가중치는 결정자의 몫이며, 결과가 법적으로 비합리적인 경우만 예외다.'},
        {h:'Schlieske — 지배적 목적',t:'권한을 부여 목적이 아닌 목적 달성에 쓴 경우, 그 무권한 목적이 지배적 작용 목적이었는지에 유효성이 달린다. 부수적 부적절 동기가 있었다는 것만으로 진정한 허용 목적이 무효가 되지는 않는다.'},
        {h:'Green v Daniels vs M64',t:'Green: 정책을 구속적 규칙처럼 적용해 법적 테스트를 밀어내면 위법한 재량 구속이다. M64: 명시적 예외 조항이 있는 우선순위 정책은 진정한 평가적 재량을 보존해 적법했다 — 둘을 가르는 것은 예외 조항이다.'},
        {h:'위임 vs 대리',t:'위임받은 자(delegate)는 자기 이름으로 권한을 행사하며 명시적 법령 수권이 필요하다. 대리인(agent)은 권한 보유자의 이름으로 행위한다 — 행정상 필요로 보유자가 공무원을 통해 행위할 수 있고(Carltona형 원칙), 명시적 위임 권한이 대리를 당연히 배제하지 않는다.'}
      ]
    },
    cases:['peko','tickner','m1-2021','schlieske','green','m64'],
    quiz:[
      { en:{q:'A policy ranks IMA-proposed visas lowest, but PAM 3 allows departure in exceptional cases. Lawful?',
            opts:['No — automatic ranking unlawful','Yes — exception clause preserves evaluative discretion','No — Green v Daniels applies','Maybe — depends on outcome'],
            ans:1,
            why:'M64 distinguished Green: exception clause preserved discretion, so the priority policy was lawful.'},
        kr:{q:'정책이 IMA 제안 비자를 최하위로 두지만 PAM 3는 예외적 경우의 일탈을 허용한다. 적법한가?',
            opts:['아니오 — 자동 순위는 위법','예 — 예외 조항이 평가적 재량을 보존','아니오 — Green v Daniels 적용','아마도 — 결과에 달림'],
            ans:1,
            why:'M64는 Green과 구별했다: 예외 조항이 재량을 보존했으므로 우선순위 정책은 적법했다.'} }
    ]
  },
  {
    id:'w8', num:8,
    en:{ title:'Reasonableness · illogicality · jurisdictional facts',
         summary:'Li legal unreasonableness (modern Wednesbury); SZMDS illogicality high threshold; Enfield jurisdictional fact no deference; DUA16 procedural unreasonableness.',
         meta:[
           {label:'Reasonableness',value:'Li reformulation'},
           {label:'Illogicality',value:'SZMDS high threshold'},
           {label:'JF',value:'Enfield no deference'},
           {label:'Procedural',value:'DUA16 closer review'}],
         points:[
           {h:'Legal unreasonableness',t:'Li: disproportionate, no evident and intelligible justification, lack of logical connection.',c:['li']},
           {h:'Illogicality',t:'SZMDS: high threshold; mere disagreement insufficient. Final-decision unreasonableness is always-JE.',c:['szmds']},
           {h:'Jurisdictional facts',t:'Enfield: court determines for itself on the evidence — no deference.',c:['enfield']},
           {h:'Procedural unreasonableness',t:'DUA16: failure to invite comment etc.; reviewed more closely than substantive decisions (Stretton).',c:['dua16','stretton']}
         ]},
    kr:{ title:'합리성 · 비논리성 · 관할권적 사실',
         summary:'Li 법적 비합리성(현대 Wednesbury); SZMDS 비논리성 높은 문턱; Enfield 관할권적 사실 존중 없음; DUA16 절차적 비합리성.',
         meta:[
           {label:'합리성',value:'Li 재구성'},
           {label:'비논리성',value:'SZMDS 높은 문턱'},
           {label:'JF',value:'Enfield 존중 없음'},
           {label:'절차',value:'DUA16 엄격한 심사'}],
         points:[
           {h:'법적 비합리성',t:'Li: 비례성 결여, 명확·이해 가능한 정당화 부재, 논리적 연결 결여.',c:['li']},
           {h:'비논리성',t:'SZMDS: 높은 문턱; 단순한 이견 부족. 최종 결정 비합리성은 항상 JE.',c:['szmds']},
           {h:'관할권적 사실',t:'Enfield: 법원이 제출된 증거를 토대로 직접 판단 — 결정자의 재량 존중 없음.',c:['enfield']},
           {h:'절차적 비합리성',t:'DUA16: 의견 제출 초청 누락 등; 실체적 결정(Stretton)보다 더 엄격하게 심사.',c:['dua16','stretton']}
         ]},
    tree:{ en:[
      {id:'k',label:'Kind of unreasonableness?',children:[
        {id:'k-li',label:'Li-type final decision',leaf:true,result:'always-je',note:'Final-decision unreasonableness — always-JE.'},
        {id:'k-proc',label:'Procedural (DUA16)',leaf:true,result:'check-mat',note:'Closer review than substantive; materiality still required.'},
        {id:'k-fact',label:'Illogical fact-finding (SZMDS)',leaf:true,result:'high-bar',note:'High threshold; rarely succeeds.'},
        {id:'k-jf',label:'Jurisdictional fact (Enfield)',leaf:true,result:'always-je',note:'Court decides itself on evidence; no deference.'}
      ]}
    ], kr:[
      {id:'k',label:'어떤 종류의 비합리성?',children:[
        {id:'k-li',label:'Li형 최종 결정',leaf:true,result:'always-je',note:'최종 결정 비합리성 — 항상 JE.'},
        {id:'k-proc',label:'절차적(DUA16)',leaf:true,result:'check-mat',note:'실체적 결정보다 엄격한 심사; 중요성 여전히 필요.'},
        {id:'k-fact',label:'비논리적 사실인정(SZMDS)',leaf:true,result:'high-bar',note:'높은 문턱; 거의 인정되지 않음.'},
        {id:'k-jf',label:'관할권적 사실(Enfield)',leaf:true,result:'always-je',note:'법원이 증거로 직접 판단; 존중 없음.'}
      ]}
    ]},
    detail:{
      en:[
        {h:'Modern Li framework',t:'Three indicia for legal unreasonableness:\n(1) disproportion;\n(2) no evident and intelligible justification;\n(3) absence of logical connection. Broader than Wednesbury\'s narrow doctrine.'},
        {h:'Illogicality vs unreasonableness',t:'SZMDS — illogicality goes to fact-finding (rare success); unreasonableness goes to the final discretion (more accessible). Both are JE-level when made out.'},
        {h:'Jurisdictional facts',t:'Enfield: where statute makes a fact a precondition to power, court decides on the evidence. The decision-maker\'s view receives no special weight.'}
      ],
      kr:[
        {h:'현대 Li 분석틀',t:'법적 비합리성의 세 지표:\n(1) 비례성 결여;\n(2) 명확·이해 가능한 정당화 부재;\n(3) 논리적 연결 부재. Wednesbury 좁은 법리보다 폭넓다.'},
        {h:'비논리성 vs 비합리성',t:'SZMDS — 비논리성은 사실인정에 관한 것(드물게 인용)이고, 비합리성은 최종 재량에 관한 것(더 접근 가능). 둘 다 인정되면 JE 수준이다.'},
        {h:'관할권적 사실',t:'Enfield: 법률이 사실을 권한의 전제 조건으로 한 경우, 법원이 증거로 판단한다. 결정자의 견해에 특별한 비중이 주어지지 않는다.'}
      ]
    },
    cases:['szmds','li','stretton','dua16','enfield','m70'],
    quiz:[
      { en:{q:'A tribunal refused an adjournment despite an obviously pending evidence review. Best ground:',
            opts:['Apprehended bias','Improper purpose','Legal unreasonableness (Li)','Illogicality'],
            ans:2,
            why:'Li: refusing adjournment was disproportionate with no evident justification — legal unreasonableness.'},
        kr:{q:'tribunal이 명백히 진행 중인 증거 검토에도 연기를 거부했다. 가장 적합한 사유는?',
            opts:['추정 편향','부정한 목적','법적 비합리성(Li)','비논리성'],
            ans:2,
            why:'Li: 연기 거부는 명확한 정당화 없이 비례성을 결여한 — 법적 비합리성.'} }
    ]
  },
  {
    id:'w9', num:9,
    en:{ title:'Standing · privative clauses · catch-all',
         summary:'ACF special interest standard; Onus cultural interest sufficient; S157 + Kirk constitutional preservation against ouster.',
         meta:[
           {label:'Standing',value:'Special interest (ACF)'},
           {label:'Cultural',value:'Sufficient (Onus)'},
           {label:'Privative',value:'Cannot oust JE'},
           {label:'Constitutional',value:'S157 + Kirk'}],
         points:[
           {h:'Standing baseline',t:'ACF: special interest beyond intellectual or emotional concern. Threshold for declaration / injunction.',c:['acf']},
           {h:'Cultural interest',t:'Onus: indigenous custodial / cultural interest sufficient.',c:['onus']},
           {h:'Privative clauses (Cth)',t:'S157: privative clauses cannot oust s 75(v) jurisdiction for JE; "decision" read as lawful.',c:['s157']},
           {h:'State entrenchment',t:'Kirk v IRC: State Supreme Court supervisory jurisdiction over JE constitutionally entrenched (Ch III).',c:['kirk-jurisdiction']}
         ]},
    kr:{ title:'원고적격 · 배제조항 · 일반 쟁점',
         summary:'ACF 특별한 이해 기준; Onus 문화적 이해 충분; S157 + Kirk 헌법적 배제 방지.',
         meta:[
           {label:'원고적격',value:'특별한 이해(ACF)'},
           {label:'문화적',value:'충분(Onus)'},
           {label:'배제조항',value:'JE 배제 불가'},
           {label:'헌법',value:'S157 + Kirk'}],
         points:[
           {h:'원고적격 기준',t:'ACF: 지적·정서적 관심을 넘어선 특별한 이해. declaration / injunction의 관문.',c:['acf']},
           {h:'문화적 이해',t:'Onus: 원주민 수호적·문화적 이해는 충분하다.',c:['onus']},
           {h:'배제조항(연방)',t:'S157: 배제조항은 JE에 대한 s 75(v) 관할을 배제할 수 없다. "결정"은 적법한 결정으로 읽는다.',c:['s157']},
           {h:'주 차원 헌법적 보호',t:'Kirk v IRC: 주 대법원의 JE 감독 관할은 헌법적으로 보호된다(Ch III).',c:['kirk-jurisdiction']}
         ]},
    tree:{ en:[
      {id:'s',label:'Standing test (ACF)?',children:[
        {id:'s-y',label:'Special interest established',children:[
          {id:'priv',label:'Privative clause invoked?',children:[
            {id:'priv-y',label:'Yes',children:[
              {id:'level',label:'Federal or State?',children:[
                {id:'level-cth',label:'Federal',leaf:true,result:'preserved',note:'S157 — read down for JE.'},
                {id:'level-state',label:'State',leaf:true,result:'preserved',note:'Kirk — entrenched supervisory jurisdiction.'}
              ]}
            ]},
            {id:'priv-n',label:'No',leaf:true,result:'proceed',note:'Standard JR analysis.'}
          ]}
        ]},
        {id:'s-n',label:'No special interest',leaf:true,result:'no-standing',note:'Cannot proceed.'}
      ]}
    ], kr:[
      {id:'s',label:'원고적격 테스트(ACF)?',children:[
        {id:'s-y',label:'특별한 이해 입증',children:[
          {id:'priv',label:'배제조항이 원용되는가?',children:[
            {id:'priv-y',label:'예',children:[
              {id:'level',label:'연방인가 주인가?',children:[
                {id:'level-cth',label:'연방',leaf:true,result:'preserved',note:'S157 — JE에 대해 좁게 해석.'},
                {id:'level-state',label:'주',leaf:true,result:'preserved',note:'Kirk — 헌법적으로 보호되는 감독 관할.'}
              ]}
            ]},
            {id:'priv-n',label:'아니오',leaf:true,result:'proceed',note:'표준 JR 분석.'}
          ]}
        ]},
        {id:'s-n',label:'특별한 이해 없음',leaf:true,result:'no-standing',note:'진행 불가.'}
      ]}
    ]},
    detail:{
      en:[
        {h:'Standing thresholds',t:'ACF (Gibbs J) requires interest "above the level of an ordinary member of the public". Onus extended this to indigenous cultural custodianship.'},
        {h:'S157 mechanics',t:'Migration Act s 474 read down: "decision" means a decision not affected by JE. The privative clause did not exclude High Court constitutional review.'},
        {h:'Kirk entrenchment',t:'State Supreme Court supervisory jurisdiction over JE of inferior courts/tribunals is a defining characteristic protected by Ch III. State legislatures cannot remove it.'}
      ],
      kr:[
        {h:'원고적격 문턱',t:'ACF(Gibbs J)는 "일반 시민 수준을 넘어선" 이해를 요구한다. Onus는 이를 원주민 문화적 수호로 확장했다.'},
        {h:'S157 작동 원리',t:'Migration Act s 474는 좁게 해석된다: "결정"은 JE에 영향받지 않은 결정을 의미한다. 배제조항이 High Court의 헌법적 심사를 배제하지 않는다.'},
        {h:'Kirk 헌법적 보호',t:'하급 법원·tribunal의 JE에 대한 주 대법원의 감독 관할은 Ch III에 의해 보호되는 정의적 특성이다. 주 의회가 이를 제거할 수 없다.'}
      ]
    },
    cases:['acf','onus','rtl','argos','batemans','northcoast','s157'],
    quiz:[
      { en:{q:'A State Act says a tribunal\'s decision "is final and conclusive". Can the State Supreme Court still review for JE?',
            opts:['No — clear ouster','Yes — Kirk entrenches supervisory jurisdiction','Only if Cth law applies','Only with consent'],
            ans:1,
            why:'Kirk v IRC — supervisory jurisdiction over JE of inferior courts/tribunals is constitutionally entrenched (Ch III).'},
        kr:{q:'주 법률이 tribunal 결정을 "종국적이고 확정적"이라고 규정한다. 주 대법원이 여전히 JE 심사를 할 수 있는가?',
            opts:['아니오 — 분명한 배제','예 — Kirk가 감독 관할을 헌법적으로 보호','연방법이 적용될 때만','동의가 있을 때만'],
            ans:1,
            why:'Kirk v IRC — 하급 법원·tribunal의 JE에 대한 감독 관할은 헌법적으로 보호된다(Ch III).'} }
    ]
  },
  {
    id:'w10', num:10,
    en:{ title:'Constitutional limits on legislative restriction of judicial review',
         summary:'The s 75(v) entrenched minimum cannot be defeated — by privative clauses, no-invalidity clauses, secrecy provisions, or any other legislative device — where the legal OR practical operation of the law denies a court the ability to enforce the legal limits of an officer\'s power. Graham and Futuris together draw the operative rules: substance over form, practical impact, the conscious-maladministration carve-out, and the requirement of an alternative contestability path.',
         meta:[
           {label:'Constitutional anchor', value:'s 75(v) entrenched (S157)'},
           {label:'Operative test', value:'Substance and degree (Graham)'},
           {label:'Invalid pattern', value:'"In limine" deprivation of access'},
           {label:'Always-JE floor', value:'Conscious maladministration · fraud · dishonesty'}
         ],
         points:[
           {h:'Constitutional entrenchment',
            t:'s 75(v) of the Constitution gives the HCA original jurisdiction for prohibition, mandamus and injunction against Cth officers. Hickman impossibility — Parliament cannot set jurisdictional limits and at the same time deprive the HCA of authority to enforce them. Plaintiff S157 confirms entrenchment: privative clauses are read down to mean lawful decisions only; the constitutional floor cannot be ousted.',
            c:['s157','kirk-jurisdiction']},
           {h:'Substance-and-degree test (Graham [48])',
            t:'Whether a statutory provision impermissibly impairs s 75(v) is "a question of substance, and therefore of degree". The court examines the legal AND practical operation of the impugned provision — and asks whether the court, through judicial process, can still discern and declare whether legal limits on power have been observed. [46] critical extension — the principle reaches ANY provision (not only privative clauses).',
            c:['graham','bodruddaza']},
           {h:'Secrecy provisions (Graham)',
            t:'s 503A(2)(c) Migration Act struck down to the extent it applied to HCA s 75(v) and FCA s 476A review of s 501-series decisions — court was deprived "in limine" of access to the very material relevant to whether legal limits had been observed. Distinguish PII (court balances) and valid statutory secrecy regimes (Gypsy Jokers, K-Generation, Condon, Totani — court itself can see the material).',
            c:['graham']},
           {h:'No-invalidity clauses (Futuris)',
            t:'s 175 ITAA preserves the legal effect of an "assessment" despite non-compliance, but does NOT oust s 75(v) / s 39B(1). Constitutionally permissible because (a) Pt IVC TAA supplies the alternative contestability path satisfying the constitutional rule that a tax cannot be made incontestable (MacCormick / Richard Walter); and (b) s 175 does NOT reach tentative/provisional purported assessments or conscious maladministration. s 177(1) is "not a privative clause in the ordinary use of that term".',
            c:['futuris']},
           {h:'Always-JE floor — conscious maladministration',
            t:'No no-invalidity clause shields deliberate failures. Conscious maladministration, fraud, bribery, dishonesty and improper purpose remain reviewable as jurisdictional error attracting constitutional writs (Plaintiff S157). Supported by the tort of misfeasance in public office and the integrity ethos imposed by s 13 Public Service Act on APS members.',
            c:['futuris','s157']},
           {h:'Bodruddaza pattern',
            t:'The Graham principle is not limited to secrecy provisions. A blanket inflexible time limit on s 75(v) applications (Migration Act s 486A in Bodruddaza) was held invalid because it failed to accommodate vitiating circumstances — the practical effect deprived the HCA of its s 75(v) jurisdiction.',
            c:['bodruddaza']}
         ]},
    kr:{ title:'사법심사 제한의 헌법적 한계 — 배제조항 · no-invalidity · 비밀조항',
         summary:'s 75(v)의 보호된 최소는 — 배제조항·no-invalidity 조항·비밀조항, 그 밖의 어떤 입법 도구로도 — 법의 법적 또는 실질적 작동이 법원의 권한 한계 강제 능력을 부정한다면 봉쇄될 수 없다. Graham과 Futuris가 함께 운영 규칙을 그린다 — 형식보다 실질, 실질적 영향, 의도적 행정부정 carve-out, 대체 다툴 수 있는 경로.',
         meta:[
           {label:'헌법적 닻', value:'s 75(v) 보호 (S157)'},
           {label:'운영적 기준', value:'실질-정도 (Graham)'},
           {label:'무효 패턴', value:'"In limine" 접근 박탈'},
           {label:'Always-JE 바닥', value:'의도적 행정부정 · 사기 · 부정직'}
         ],
         points:[
           {h:'헌법적 보호 (entrenchment)',
            t:'헌법 s 75(v)는 영연방 공무원에 대한 prohibition·mandamus·injunction의 HCA 원시 관할을 부여. Hickman impossibility — 의회는 관할권의 한계를 부과하면서 동시에 HCA로부터 그 한계를 강제할 권한을 박탈할 수 없다. Plaintiff S157이 보호를 확인 — 배제조항은 "적법한 결정"만을 가리키도록 좁게 읽힌다. 헌법적 바닥선은 봉쇄될 수 없다.',
            c:['s157','kirk-jurisdiction']},
           {h:'실질-정도 테스트 (Graham [48])',
            t:'법령 조항이 s 75(v)를 부적법하게 침해했는지는 "실질의 문제, 따라서 정도의 문제"이다. 법원은 다투어진 조항의 법적 작동과 실질적 작동을 함께 살피고 — 사법 절차를 통해 법원이 여전히 권한의 법적 한계 준수 여부를 식별·선언할 수 있는지를 묻는다. [46] 결정적 확장 — 이 원칙은 배제조항에 국한되지 않고 어떤 조항이든 미친다.',
            c:['graham','bodruddaza']},
           {h:'비밀조항 (Graham)',
            t:'Migration Act s 503A(2)(c)는 s 501계 결정의 HCA s 75(v) 및 FCA s 476A 심사 적용 범위에서 무효 — 법원이 권한의 법적 한계 준수 여부에 관련된 바로 그 자료에 처음부터(in limine) 접근을 박탈당했다. 공익면책(PII, Sankey — 법원이 비교형량)과 합헌 법정 비밀 체계(Gypsy Jokers, K-Generation, Condon, Totani — 법원 자체는 자료를 봄)와 구별.',
            c:['graham']},
           {h:'No-invalidity 조항 (Futuris)',
            t:'s 175 ITAA는 의무 미준수에도 "과세"의 법적 효력을 유지시키지만, s 75(v) / s 39B(1)을 봉쇄하지는 않는다. 헌법적으로 허용되는 이유는 — (a) Pt IVC TAA가 — 조세는 incontestable할 수 없다는 헌법 원칙(MacCormick / Richard Walter)을 충족시키는 — 대체 다툴 수 있는 경로를 제공하기 때문이고, (b) s 175가 잠정·임시 외관상 과세나 의도적 행정부정에는 미치지 않기 때문이다. s 177(1)은 "통상적 의미의 배제조항이 아니"다.',
            c:['futuris']},
           {h:'Always-JE 바닥선 — 의도적 행정부정',
            t:'어떤 no-invalidity 조항도 의도적 위반을 보호하지 않는다. 의도적 행정부정, 사기, 뇌물, 부정직, 부적절한 목적은 여전히 관할권적 오류로 헌법적 writ를 발동시킨다(Plaintiff S157). 공무원의 misfeasance in public office 불법행위와 s 13 Public Service Act가 APS 구성원에게 부과하는 청렴 윤리가 이를 뒷받침한다.',
            c:['futuris','s157']},
           {h:'Bodruddaza 패턴',
            t:'Graham 원칙은 비밀조항에만 국한되지 않는다. s 75(v) 신청에 부과된 경직된 일률적 기간 제한(Bodruddaza의 Migration Act s 486A)도 — 무효 사유(vitiating circumstances)를 수용하지 못해 — 무효로 판정. 실질적 효과가 HCA의 s 75(v) 관할을 박탈했기 때문.',
            c:['bodruddaza']}
         ]},
    tree:{ en:[
      {id:'kind', label:'What kind of legislative restriction is in play?', children:[
        {id:'priv', label:'Privative clause (S157)', children:[
          {id:'priv-read', label:'Read down to mean "lawful decisions" only', leaf:true, result:'preserved', note:'JE review remains; Plaintiff S157 framing.'}
        ]},
        {id:'noinv', label:'No-invalidity clause (Futuris pattern)', children:[
          {id:'noinv-alt', label:'Is there an alternative contestability path (e.g. Pt IVC)?', children:[
            {id:'noinv-y', label:'Yes — alternative review available', children:[
              {id:'noinv-mal', label:'Is the error conscious maladministration / fraud / dishonesty?', children:[
                {id:'noinv-mal-y', label:'Yes', leaf:true, result:'always-je', note:'Always-JE — constitutional writ available regardless of clause.'},
                {id:'noinv-mal-n', label:'No (ordinary process error)', leaf:true, result:'no-je', note:'Shielded by no-invalidity clause; pursue Pt IVC.'}
              ]}
            ]},
            {id:'noinv-n', label:'No alternative — tax made incontestable', leaf:true, result:'invalid', note:'Constitutional rule breached (MacCormick).'}
          ]}
        ]},
        {id:'sec', label:'Secrecy / no-disclosure-to-court provision (Graham)', children:[
          {id:'sec-access', label:'Can the reviewing court itself see the material?', children:[
            {id:'sec-y', label:'Yes (Gypsy Jokers / K-Generation / Condon / Totani)', leaf:true, result:'preserved', note:'Court can do supervisory work; provision valid.'},
            {id:'sec-n', label:'No — court deprived "in limine"', leaf:true, result:'invalid', note:'Graham — invalid to that extent; sever via s 15A AIA.'}
          ]}
        ]},
        {id:'time', label:'Inflexible time bar (Bodruddaza pattern)', children:[
          {id:'time-flex', label:'Does it accommodate vitiating circumstances?', children:[
            {id:'time-y', label:'Yes — genuine flexibility', leaf:true, result:'preserved', note:'Valid procedural regulation.'},
            {id:'time-n', label:'No — blanket inflexible', leaf:true, result:'invalid', note:'Bodruddaza — practical effect denies s 75(v).'}
          ]}
        ]}
      ]}
    ], kr:[
      {id:'kind', label:'어떤 종류의 입법적 제한인가?', children:[
        {id:'priv', label:'배제조항 (S157)', children:[
          {id:'priv-read', label:'"적법한 결정"만을 가리키도록 좁게 읽음', leaf:true, result:'preserved', note:'JE 심사는 남음; Plaintiff S157 framing.'}
        ]},
        {id:'noinv', label:'No-invalidity 조항 (Futuris 패턴)', children:[
          {id:'noinv-alt', label:'대체 다툴 수 있는 경로(예: Pt IVC)가 있는가?', children:[
            {id:'noinv-y', label:'있다 — 대체 심사 가능', children:[
              {id:'noinv-mal', label:'그 오류가 의도적 행정부정·사기·부정직인가?', children:[
                {id:'noinv-mal-y', label:'그렇다', leaf:true, result:'always-je', note:'Always-JE — 조항과 무관하게 헌법적 writ 가능.'},
                {id:'noinv-mal-n', label:'아니다 (통상의 절차 오류)', leaf:true, result:'no-je', note:'No-invalidity 조항으로 차단됨; Pt IVC로 다툰다.'}
              ]}
            ]},
            {id:'noinv-n', label:'없다 — 조세를 incontestable로 만듦', leaf:true, result:'invalid', note:'헌법 원칙 위반(MacCormick).'}
          ]}
        ]},
        {id:'sec', label:'비밀·법원 비공개 조항 (Graham)', children:[
          {id:'sec-access', label:'심사 법원 자체는 그 자료를 볼 수 있는가?', children:[
            {id:'sec-y', label:'볼 수 있다 (Gypsy Jokers / K-Generation / Condon / Totani)', leaf:true, result:'preserved', note:'법원이 감독 작업을 할 수 있음; 조항 유효.'},
            {id:'sec-n', label:'볼 수 없다 — 법원이 처음부터(in limine) 박탈', leaf:true, result:'invalid', note:'Graham — 그 범위 내에서 무효; s 15A AIA로 분리.'}
          ]}
        ]},
        {id:'time', label:'경직된 기간 제한 (Bodruddaza 패턴)', children:[
          {id:'time-flex', label:'무효 사유(vitiating circumstances)를 수용하는가?', children:[
            {id:'time-y', label:'그렇다 — 진정한 유연성', leaf:true, result:'preserved', note:'유효한 절차 규제.'},
            {id:'time-n', label:'아니다 — 일률적·경직', leaf:true, result:'invalid', note:'Bodruddaza — 실질적 효과가 s 75(v)를 박탈.'}
          ]}
        ]}
      ]}
    ]},
    detail:{
      en:[
        {h:'Constitutional framework',
         t:'s 75(v) confers HCA original jurisdiction for prohibition, mandamus and injunction against Cth officers. The conceptual root is the Hickman impossibility principle (1945) — restated three ways: it is impossible for Parliament (i) to set jurisdictional limits and deprive the HCA of prohibition, (ii) to impose a public duty and deprive the HCA of mandamus, or (iii) to constrain power and deprive the HCA of injunction. Plaintiff S157 (2003) made entrenchment doctrinally explicit and read privative clauses down to mean lawful decisions only. Kirk (2010) entrenches the State Supreme Court equivalent under Ch III.'},
        {h:'The Graham substance-and-degree test',
         t:'Graham generalises the entrenchment principle: ANY statutory provision (not just privative clauses) is constitutionally invalid where its legal or practical operation denies the court the ability — through judicial process — to enforce the legal limits of an officer\'s power. The test is "substance, and therefore of degree" [48], [63], [65]. Concretely: examine BOTH legal operation (what does the text formally do?) AND practical impact (what is the court in fact prevented from doing?). Where the practical effect crosses the constitutional line, sever using s 15A AIA where possible — read the provision down so it does not apply to the entrenched s 75(v) (and s 476A-equivalent) jurisdiction.'},
        {h:'Why s 503A(2)(c) failed in Graham',
         t:'Information protected under s 503A(2)(c) was, by definition, relevant to whether the legal limits on s 501-series power had been observed. Yet the court was deprived "in limine" of access — no balancing, no weighing, no inspection. This was the structural reason for invalidity. Distinguish: (1) PII (Sankey v Whitlam) — the court balances competing public interests and inquires into the nature of the material; (2) valid statutory secrecy regimes (Gypsy Jokers, K-Generation, Condon v Pompano, Totani) — the reviewing court itself can use the information; (3) s 503A(2)(c) — court deprived in limine. Plaintiffs\' Kable-style argument failed; the inconsistency was located in s 75(v), not in the institutional integrity of the court.'},
        {h:'Why s 175 ITAA survived in Futuris',
         t:'Project Blue Sky purposive analysis of s 175 (read with ss 175A and 177(1)) shows Parliament intended ordinary process errors not to affect the validity of an "assessment". This is constitutionally permissible because: (a) Pt IVC of the Taxation Administration Act provides the alternative contestability path (objections, AAT/ART merits review, FCA appeals) satisfying the rule that a tax cannot be made incontestable (MacCormick; Richard Walter); and (b) s 175 does NOT reach tentative/provisional purported assessments or conscious maladministration. s 177(1) (production = conclusive evidence) is "not a privative clause in the ordinary use of that term" and does not limit s 75(v) / s 39B(1) review.'},
        {h:'The conscious-maladministration carve-out',
         t:'Even where a no-invalidity clause shields ordinary process errors, a deliberate failure to administer the law according to its terms — conscious maladministration — remains jurisdictional error and attracts constitutional writs. The same applies to fraud, bribery, dishonesty and improper purpose (S157). The supporting reasoning in Futuris draws on the tort of misfeasance in public office (a public officer who knowingly acts in excess of power) and the integrity obligations imposed by s 13 Public Service Act on APS members. F J Bloemen (Mason & Wilson JJ) is not to be followed insofar as it suggests s 175 reaches deliberate failures.'},
        {h:'Equitable remedies — a different basis',
         t:'Jurisdictional error principles govern the constitutional writs. Injunction and declaration operate on a different equitable basis (Enfield, Project Blue Sky) — they do not require jurisdictional error. BUT where a no-invalidity clause means there is no affectation of validity, the equitable foundation is also absent. s 21 FCA Act limits FCA declarations to "matters in which it has original jurisdiction". Pending or available Pt IVC proceedings will often warrant discretionary refusal of parallel s 75(v) / s 39B relief (Glennan; Re McBain).'},
        {h:'How to run a W10 question',
         t:'(1) Identify the impugned provision and characterise it (privative / no-invalidity / secrecy / time bar / other). (2) For each type, apply the corresponding analysis above. (3) Frame the inquiry as substance-and-degree (Graham [48]) — legal operation AND practical impact. (4) Confirm the always-JE floor — conscious maladministration / fraud / dishonesty / improper purpose remain reviewable. (5) If invalidity is made out, prefer severance / reading down (s 15A AIA) over total invalidation.'}
      ],
      kr:[
        {h:'헌법적 framework',
         t:'s 75(v)는 영연방 공무원에 대한 prohibition·mandamus·injunction의 HCA 원시 관할을 부여한다. 개념적 뿌리는 Hickman impossibility 원칙(1945) — 세 가지로 진술된다: 의회는 (i) 관할권의 한계를 부과하면서 HCA로부터 prohibition을 박탈할 수 없고, (ii) 공적 의무를 부과하면서 HCA로부터 mandamus를 박탈할 수 없으며, (iii) 권한 행사를 제약하면서 HCA로부터 injunction을 박탈할 수 없다. Plaintiff S157(2003)이 보호를 교리적으로 명시했고, 배제조항을 적법한 결정만을 가리키도록 좁게 읽었다. Kirk(2010)는 Ch III에 따라 주(州) 대법원의 등가물을 헌법적으로 보호한다.'},
        {h:'Graham의 실질-정도 테스트',
         t:'Graham은 보호 원칙을 일반화한다 — 어떤 법령 조항이든(배제조항이 아니어도) 그 법적 또는 실질적 작동이 법원이 사법 절차를 통해 공무원 권한의 법적 한계를 강제할 능력을 부정한다면 헌법적으로 무효이다. 기준은 "실질, 따라서 정도(substance, and therefore of degree)"[48], [63], [65]. 구체적으로: 법적 작동(문언이 형식상 무엇을 하는가)과 실질적 영향(법원이 실제로 무엇을 못 하게 되는가)을 함께 살핀다. 실질적 효과가 헌법적 선을 넘는다면 가능한 한 s 15A AIA로 분리한다 — 그 조항이 보호된 s 75(v)(및 s 476A 등가) 관할에는 적용되지 않도록 좁게 읽는다.'},
        {h:'Graham에서 s 503A(2)(c)가 무효된 이유',
         t:'s 503A(2)(c)로 보호된 정보는 정의상 s 501계 권한의 법적 한계 준수 여부에 관련된 정보였다. 그런데 법원은 처음부터(in limine) 접근을 박탈당했다 — 비교형량도, 평가도, 검토도 없었다. 이게 무효의 구조적 이유다. 구별: (1) PII(Sankey v Whitlam) — 법원이 경합 공익을 비교형량하고 자료의 성격을 조사함; (2) 합헌 법정 비밀 체계(Gypsy Jokers, K-Generation, Condon v Pompano, Totani) — 심사 법원 자체가 정보를 사용할 수 있음; (3) s 503A(2)(c) — 법원이 in limine 박탈. 원고들의 Kable형 주장은 실패 — 부적합성은 법원의 제도적 청렴성이 아니라 s 75(v)에 있었다.'},
        {h:'Futuris에서 s 175 ITAA가 살아남은 이유',
         t:'Project Blue Sky의 목적론적 분석을 s 175(s 175A 및 s 177(1)과 함께 읽어)에 적용하면, 의회가 통상의 절차 오류로 "assessment"의 유효성이 영향받지 않도록 의도했음이 드러난다. 이게 헌법적으로 허용되는 이유: (a) Taxation Administration Act Pt IVC가 — 조세는 incontestable할 수 없다는 원칙(MacCormick; Richard Walter)을 충족시키는 — 대체 다툴 수 있는 경로(이의·AAT/ART 본안 재심사·FCA 항소)를 제공하기 때문이고, (b) s 175가 잠정·임시 외관상 과세나 의도적 행정부정에는 미치지 않기 때문이다. s 177(1)(통지 제시 = 확정적 증거)은 "통상적 의미의 배제조항이 아니"며 s 75(v) / s 39B(1) 심사를 제한하지 않는다.'},
        {h:'의도적 행정부정 carve-out',
         t:'no-invalidity 조항이 통상의 절차 오류를 차단해도, 법을 그 문언대로 집행하지 않은 의도적 위반 — 의도적 행정부정(conscious maladministration) — 은 여전히 관할권적 오류로 헌법적 writ를 발동시킨다. 사기·뇌물·부정직·부적절한 목적도 마찬가지(S157). Futuris의 뒷받침 논거는 misfeasance in public office 불법행위(공무원이 권한 초과를 알면서 행동한 경우)와 s 13 Public Service Act가 APS 구성원에게 부과하는 청렴 의무를 끌어온다. F J Bloemen(Mason & Wilson JJ)은 s 175가 의도적 위반에까지 미친다는 주장에 부합하는 한 따르지 않는다.'},
        {h:'형평법적 구제 — 다른 토대',
         t:'관할권적 오류 법리는 헌법적 writ를 통제한다. Injunction과 declaration은 다른 형평법적 토대에서 작동한다(Enfield, Project Blue Sky) — 관할권적 오류를 요구하지 않는다. 그러나 no-invalidity 조항으로 유효성에 영향이 없다면 형평법적 토대도 사라진다. s 21 FCA Act는 FCA declaration을 "원시 관할 사안"에 한정한다. Pt IVC 절차가 진행 중이거나 가능하다면 법원이 재량으로 병행 s 75(v) / s 39B 구제를 거부할 것으로 예상된다(Glennan; Re McBain).'},
        {h:'W10 문제 푸는 법',
         t:'(1) 다투어진 조항을 식별하고 성격을 정한다(배제조항 / no-invalidity / 비밀 / 기간 제한 / 그 외). (2) 각 유형별로 위의 대응 분석을 적용한다. (3) 분석 틀을 실질-정도(Graham [48])로 짠다 — 법적 작동과 실질적 영향 함께. (4) Always-JE 바닥선을 확인 — 의도적 행정부정·사기·부정직·부적절한 목적은 여전히 심사 가능. (5) 무효가 인정되면 전면 무효화보다 분리·축소해석(s 15A AIA)을 선호.'}
      ]
    },
    cases:['graham','futuris','bodruddaza','hickman','sankey','gypsy_jokers'],
    quiz:[
      { en:{q:'A statutory provision prevents the Minister from being required to disclose certain confidential information to a court reviewing a visa cancellation. The provision does not say "no review" — it simply controls the evidence the court can see. Is the provision constitutionally valid?',
            opts:['Yes — only privative clauses can offend s 75(v)','Yes — secrecy is always permissible','It depends — apply Graham\'s substance-and-degree test focusing on practical impact','No — any restriction on information automatically fails'],
            ans:2,
            why:'Graham: a provision is invalid where its legal OR practical operation denies the court the ability to enforce the legal limits of an officer\'s power. The test is substance and degree — extends beyond privative clauses to secrecy provisions.'},
        kr:{q:'법령 조항이 비자 취소 결정을 심사하는 법원에 장관이 특정 기밀 정보를 공개하도록 요구할 수 없게 한다. 그 조항은 "심사 불가"라고 말하지 않고 — 법원이 볼 수 있는 증거만 통제한다. 이 조항은 헌법적으로 유효한가?',
            opts:['그렇다 — 배제조항만이 s 75(v)에 위배될 수 있다','그렇다 — 비밀조항은 항상 허용된다','경우에 따라 다르다 — Graham의 실질-정도 테스트를 실질적 영향 중심으로 적용','아니다 — 정보에 대한 어떤 제한도 자동으로 무효'],
            ans:2,
            why:'Graham: 법의 법적 또는 실질적 작동이 법원이 공무원 권한의 법적 한계를 강제할 능력을 부정한다면 그 조항은 무효이다. 기준은 실질-정도 — 배제조항 너머 비밀조항까지 미친다.'} },
      { en:{q:'A tax statute contains a "no-invalidity" clause stating that an assessment\'s validity is not affected by failure to comply with the Act. The Commissioner deliberately applied the Act to facts he knew to be untrue. Can the taxpayer challenge under s 75(v) / s 39B(1)?',
            opts:['No — the no-invalidity clause shields the assessment','Yes — deliberate failure is conscious maladministration, which remains jurisdictional error','Only after exhausting Pt IVC','Only if there is also fraud'],
            ans:1,
            why:'Futuris: s 175 does NOT reach conscious maladministration of the assessment process — deliberate failures "manifest jurisdictional error and attract the jurisdiction to issue the constitutional writs". The always-JE floor (S157) covers fraud, bribery, dishonesty and improper purpose.'},
        kr:{q:'조세법에 "어떤 의무 미준수로도 과세의 유효성이 영향받지 않는다"는 no-invalidity 조항이 있다. Commissioner가 거짓임을 안 사실에 의도적으로 Act를 적용했다. 납세자가 s 75(v) / s 39B(1)로 다툴 수 있는가?',
            opts:['아니다 — no-invalidity 조항이 과세를 보호한다','그렇다 — 의도적 위반은 의도적 행정부정으로 여전히 관할권적 오류','Pt IVC를 모두 소진한 뒤에만','사기도 함께 있을 때만'],
            ans:1,
            why:'Futuris: s 175는 과세 절차의 의도적 행정부정에는 미치지 않는다 — 의도적 위반은 "관할권적 오류를 드러내고 헌법적 writ 관할을 발동시킨다". Always-JE 바닥선(S157)은 사기·뇌물·부정직·부적절한 목적을 포함.'} }
    ]
  },
  {
    id:'w11', num:11,
    en:{ title:'Tribunals & merits review (ART)',
         summary:'Merits-review pathway alongside JR — the new Administrative Review Tribunal (ART, Oct 2024) replaces the AAT, with continuing reliance on the Drake No 2 policy framework. Frugtniet (2019) confirms tribunals stand in the shoes of the original decision-maker; Shi (2008) on the time of relevant facts.',
         meta:[
           {label:'Body', value:'ART (from Oct 2024)'},
           {label:'Stands in shoes', value:'Frugtniet'},
           {label:'Time of facts', value:'Shi'},
           {label:'Policy use', value:'Drake No 2'}
         ],
         points:[
           {h:'Merits vs JR', t:'Tribunals re-make the decision (correct/preferable); courts only review legality. Pick the right pathway first.', c:['quin']},
           {h:'Standing in shoes', t:'Frugtniet — the tribunal exercises the same statutory power as the primary decision-maker, with the same constraints.', c:['frugtniet']},
           {h:'Time of relevant facts', t:'Shi v MARA — the tribunal generally decides on the facts as they stand at the time of the tribunal\'s decision, not the primary decision.', c:['shi']},
           {h:'Treatment of policy', t:'Drake No 2 — tribunal is to apply lawful government policy unless cogent reasons not to; not bound rigidly.', c:['drake']}
         ]},
    kr:{ title:'심판소(ART) · 본안 재심사',
         summary:'사법심사와 나란히 가는 본안 재심사 경로야. 2024년 10월부터 AAT를 대체하는 ART(Administrative Review Tribunal)가 도입됐고, 정책 적용은 여전히 Drake No 2 framework를 따른다. Frugtniet(2019)은 심판소가 원결정자와 동일한 권한을 그대로 행사한다는 점을, Shi(2008)는 사실관계 기준 시점을 정리한 판례.',
         meta:[
           {label:'기관', value:'ART (2024년 10월~)'},
           {label:'권한 승계', value:'Frugtniet'},
           {label:'사실 기준 시점', value:'Shi'},
           {label:'정책 적용', value:'Drake No 2'}
         ],
         points:[
           {h:'본안 재심사 vs 사법심사', t:'심판소는 결정을 다시 내리는 곳이고(correct/preferable 결정), 법원은 적법성만 본다는 점을 먼저 구분해야 해. 어느 경로가 맞는지 진입 단계에서 정리.', c:['quin']},
           {h:'원결정자의 자리에 선다', t:'Frugtniet — 심판소는 원결정자와 같은 법적 권한을 같은 제약 아래에서 행사한다.', c:['frugtniet']},
           {h:'사실관계 기준 시점', t:'Shi v MARA — 심판소는 원칙적으로 심판소 결정 시점의 사실관계로 판단한다(원결정 시점이 아님).', c:['shi']},
           {h:'정책의 취급', t:'Drake No 2 — 심판소는 적법한 정부 정책을 적용해야 하지만, 이를 따르지 않을 설득력 있는 사유가 있으면 따르지 않을 수 있다(경직된 구속이 아님).', c:['drake']}
         ]},
    tree:{ en:[
      {id:'pathway', label:'JR or merits review?', children:[
        {id:'pathway-jr', label:'Legality only — pursue JR', leaf:true, result:'proceed', note:'Switch to W2 jurisdiction analysis.'},
        {id:'pathway-merits', label:'Want decision re-made — go to ART', children:[
          {id:'time', label:'When are the facts assessed?', leaf:true, result:'proceed', note:'Shi — usually at the time of tribunal decision.'},
          {id:'policy', label:'Is government policy in play?', leaf:true, result:'proceed', note:'Drake No 2 — apply lawful policy unless cogent reasons not to.'}
        ]}
      ]}
    ], kr:[
      {id:'pathway', label:'사법심사인가, 본안 재심사인가?', children:[
        {id:'pathway-jr', label:'적법성만 다툼 — 사법심사로', leaf:true, result:'proceed', note:'W2 관할 분석으로 이동.'},
        {id:'pathway-merits', label:'결정을 다시 내리고 싶음 — ART로', children:[
          {id:'time', label:'사실관계는 어느 시점 기준?', leaf:true, result:'proceed', note:'Shi — 원칙적으로 심판소 결정 시점.'},
          {id:'policy', label:'정부 정책이 관련되는가?', leaf:true, result:'proceed', note:'Drake No 2 — 적법 정책은 따르되 설득력 있는 사유가 있으면 예외.'}
        ]}
      ]}
    ]},
    detail:{
      en:[
        {h:'Why a separate pathway?', t:'JR can only ask whether the decision was lawfully made; it cannot replace the decision. Where the applicant wants a substantively different outcome on the same evidence, merits review through the ART is the appropriate channel.'},
        {h:'ART transition (Oct 2024)', t:'The Administrative Review Tribunal Act 2024 (Cth) replaced the AAT with the ART, addressing concerns about appointment integrity and case-management. The substantive merits-review framework — Drake No 2 on policy, Frugtniet on standing-in-shoes, Shi on time — continues to apply.'},
        {h:'Practice tip', t:'In an exam, identify whether the issue is legality or merits before reaching for cases. If the applicant\'s real complaint is "the decision was wrong on the facts", merits review is usually the right pathway, not JR.'}
      ],
      kr:[
        {h:'왜 별도의 경로인가', t:'사법심사는 결정이 적법하게 내려졌는지만 다툴 수 있고, 결정을 대신 내려 주지는 않다. 같은 증거로 다른 결론을 받고 싶다면 ART의 본안 재심사가 맞는 통로야.'},
        {h:'ART 전환 (2024년 10월)', t:'Administrative Review Tribunal Act 2024 (Cth)에 따라 AAT가 ART로 대체됐다. 임명의 독립성·사건 관리 문제를 의식한 개편이지만, 본안 재심사의 실체적 framework — 정책에 관한 Drake No 2, 권한 승계에 관한 Frugtniet, 시점에 관한 Shi — 는 그대로 유지돼.'},
        {h:'시험에서의 팁', t:'쟁점이 적법성인지 본안인지부터 가르고 케이스로 들어가. 신청인의 진짜 불만이 "결정 자체가 사실판단에서 틀렸다"라면 보통 사법심사가 아니라 본안 재심사야.'}
      ]
    },
    cases:['shi','frugtniet','drake'],
    quiz:[
      { en:{q:'An applicant wants the ART to decide their case based on new evidence that emerged after the original decision. Whose facts apply?',
            opts:['Original decision-maker\'s facts','Facts at the time of the tribunal\'s decision','Facts at the time of judicial review','Whichever the applicant prefers'],
            ans:1,
            why:'Shi v MARA — the tribunal generally decides on facts as they stand at the time of the tribunal decision.'},
        kr:{q:'신청인이 원결정 이후에 나온 새 증거를 바탕으로 ART에서 다시 판단받고 싶어한다. 어느 시점의 사실관계로 판단하나?',
            opts:['원결정자의 사실관계','심판소 결정 시점의 사실관계','사법심사 시점의 사실관계','신청인이 선택'],
            ans:1,
            why:'Shi v MARA — 심판소는 원칙적으로 심판소 결정 시점의 사실관계로 판단한다.'} }
    ]
  }
];

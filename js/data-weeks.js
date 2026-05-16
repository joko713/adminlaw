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
    cases:['vanstone','evans','toohey','coco','kruse','pbs'],
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
    en:{ title:'Judicial review framework',
         summary:'Skeleton: jurisdiction, justiciability, grounds, materiality (PBS at decision-stage), remedy. Legality not merits (Quin).',
         meta:[
           {label:'Forums',value:'ADJR · 39B(1) · 75(v) · State'},
           {label:'Boundary',value:'Legality not merits'},
           {label:'Anchor',value:'Quin (Brennan J)'},
           {label:'Output',value:'Quash / direct / declare'}],
         points:[
           {h:'Jurisdiction first',t:'Pick the forum: ADJR (Cth admin under enactment), s 39B(1) (Cth officer), s 75(v) (constitutional writs), or State Supreme Court.',c:['bond','tang']},
           {h:'Justiciability',t:'Bond decision; Tang under enactment; M61 workaround for outsourced steps.',c:['bond','tang','m61']},
           {h:'Legality / merits boundary',t:'Court reviews legality, not the wisdom of the decision (Quin).',c:['quin']},
           {h:'Remedy follows ground',t:'Certiorari, mandamus, prohibition, declaration, injunction — chosen for the breach found.',c:[]}
         ]},
    kr:{ title:'사법심사의 골격',
         summary:'골격: 관할, 심사적격, 사유, 중요성(결정 단계 PBS), 구제수단. 본안이 아닌 합법성을 심사한다(Quin).',
         meta:[
           {label:'관할',value:'ADJR · 39B(1) · 75(v) · 주'},
           {label:'경계',value:'본안 아닌 합법성'},
           {label:'기준점',value:'Quin (Brennan J)'},
           {label:'결과',value:'취소 / 명령 / 선언'}],
         points:[
           {h:'관할 먼저',t:'관할 선택: ADJR(연방 행정·수권법에 따른 결정), s 39B(1)(연방 공무원), s 75(v)(헌법적 영장), 주 대법원.',c:['bond','tang']},
           {h:'심사적격',t:'Bond — 결정; Tang — 수권법에 따른; M61 — 외주 단계의 우회 경로.',c:['bond','tang','m61']},
           {h:'합법성·본안 경계',t:'법원은 결정의 지혜가 아닌 합법성을 심사한다(Quin).',c:['quin']},
           {h:'사유에 따른 구제',t:'certiorari, mandamus, prohibition, declaration, injunction — 발견된 위반에 따라 선택한다.',c:[]}
         ]},
    tree:{ en:[
      {id:'j',label:'Which forum?',children:[
        {id:'j-adjr',label:'Cth admin under enactment → ADJR',children:[
          {id:'b',label:'Bond decision? Tang under enactment?',children:[
            {id:'b-y',label:'Both yes',leaf:true,result:'proceed',note:'Standard ADJR review.'},
            {id:'b-n',label:'No',leaf:true,result:'switch',note:'Try s 39B(1) or M61 workaround.'}
          ]}
        ]},
        {id:'j-39b',label:'Cth officer → s 39B(1)',leaf:true,result:'proceed',note:'Common law grounds + remedies.'},
        {id:'j-75v',label:'Constitutional → s 75(v)',leaf:true,result:'proceed',note:'Constitutional writs; cannot be ousted (S157).'},
        {id:'j-state',label:'State decision → State Supreme Court',leaf:true,result:'proceed',note:'Kirk preserves supervisory jurisdiction.'}
      ]}
    ], kr:[
      {id:'j',label:'어느 관할인가?',children:[
        {id:'j-adjr',label:'연방 행정·수권법에 따른 결정 → ADJR',children:[
          {id:'b',label:'Bond 결정? Tang 수권법에 따른?',children:[
            {id:'b-y',label:'둘 다 예',leaf:true,result:'proceed',note:'표준 ADJR 심사.'},
            {id:'b-n',label:'아니오',leaf:true,result:'switch',note:'s 39B(1) 또는 M61 우회 경로 시도.'}
          ]}
        ]},
        {id:'j-39b',label:'연방 공무원 → s 39B(1)',leaf:true,result:'proceed',note:'common law 사유 + 구제수단.'},
        {id:'j-75v',label:'헌법 → s 75(v)',leaf:true,result:'proceed',note:'헌법적 영장; 배제 불가(S157).'},
        {id:'j-state',label:'주 결정 → 주 대법원',leaf:true,result:'proceed',note:'Kirk가 감독 관할을 보호한다.'}
      ]}
    ]},
    detail:{
      en:[
        {h:'Forum selection',t:'ADJR is the most common federal route but limited by Bond + Tang gateways. Where statute uses outsourcing (M61) or a constitutional writ is needed (S157, Kirk), choose s 75(v) or s 39B(1).'},
        {h:'Step ladder',t:'Jurisdiction → justiciability → grounds → materiality (Hossain stage 3) → remedy. Each step is a hurdle the applicant must clear.'},
        {h:'Legality boundary',t:'Quin (Brennan J): "The duty and jurisdiction of the court is to enforce the law, not to substitute its decision for that of the administrator." Courts test process, not outcome wisdom.'}
      ],
      kr:[
        {h:'관할 선택',t:'ADJR이 가장 흔한 연방 경로이지만 Bond·Tang 관문에 제약된다. 외주가 사용된 경우(M61)나 헌법적 영장이 필요한 경우(S157, Kirk)는 s 75(v) 또는 s 39B(1)을 선택한다.'},
        {h:'단계 사다리',t:'관할 → 심사적격 → 사유 → 중요성(Hossain 3단계) → 구제. 각 단계는 원고가 넘어야 할 관문이다.'},
        {h:'합법성 경계',t:'Quin(Brennan J): 법원의 의무와 관할은 법을 집행하는 것이며, 결정자의 결정을 자신의 결정으로 대체하는 것이 아니다. 결과의 지혜가 아닌 절차를 심사한다.'}
      ]
    },
    cases:['bond','tang','m61','quin','pbs'],
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
    en:{ title:'Justiciability',
         summary:'Bond decision (final, operative, determinative); Tang under enactment (two limbs); M61 outsourcing workaround; Argos third-party affected.',
         meta:[
           {label:'Bond',value:'Final / operative / determinative'},
           {label:'Tang',value:'2-limb test'},
           {label:'M61',value:'Workaround for outsourcing'},
           {label:'Argos',value:'3rd-party rights'}],
         points:[
           {h:'Bond decision',t:'A "decision" under ADJR is final, operative, determinative. Preliminary findings → not decisions, but conduct may still be reviewable under s 6.',c:['bond']},
           {h:'Tang under enactment',t:'(1) authorised/required by statute,\n(2) affects legal rights through statutory force.',c:['tang']},
           {h:'M61 workaround',t:'Outsourced steps integrated into statutory scheme remain reviewable on common law grounds via s 39B(1) / s 75(v).',c:['m61']},
           {h:'Third parties (Argos)',t:'Person aggrieved standard: commercial competitors with affected statutory interest can sue.',c:['argos']}
         ]},
    kr:{ title:'심사적격',
         summary:'Bond 결정(최종·실질·결정적); Tang 수권법에 따른(2단계); M61 외주 우회; Argos 제3자 영향.',
         meta:[
           {label:'Bond',value:'최종 / 실질 / 결정적'},
           {label:'Tang',value:'2단계 테스트'},
           {label:'M61',value:'외주 우회 경로'},
           {label:'Argos',value:'제3자 권리'}],
         points:[
           {h:'Bond 결정',t:'ADJR의 "결정" = 최종·실질·결정적. 예비적 인정 → 결정 아님이나, 행위는 s 6에서 심사 가능할 수 있다.',c:['bond']},
           {h:'Tang 수권법에 따른',t:'(1) 법률에 의해 수권/요구되며,\n(2) 법적 효력을 통해 권리에 영향을 준다.',c:['tang']},
           {h:'M61 우회',t:'법체계에 편입된 외주 단계는 s 39B(1) / s 75(v)을 통해 common law 사유로 여전히 심사 가능하다.',c:['m61']},
           {h:'제3자(Argos)',t:'person aggrieved 기준: 영향을 받는 법적 이해를 가진 경쟁자도 제소할 수 있다.',c:['argos']}
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
        {id:'a-n',label:'No (s 39B(1) / s 75(v))',leaf:true,result:'proceed',note:'Justiciability: common law not Bond/Tang; M61 may apply.'}
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
        {id:'a-n',label:'아니오 (s 39B(1) / s 75(v))',leaf:true,result:'proceed',note:'심사적격: common law(Bond/Tang 아님); M61 적용 가능.'}
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
    cases:['bond','tang','m61','argos'],
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
    en:{ title:'Jurisdictional error & materiality',
         summary:'Hossain three-stage analysis with materiality threshold. LPDT rejects reconstruction; WZARH applies for PF; MZAPC formal onus; Kirk-egregious always-JE.',
         meta:[
           {label:'Doctrine',value:'Hossain 3-stage'},
           {label:'Materiality',value:'Realistic possibility'},
           {label:'Standard',value:'No reconstruction'},
           {label:'Onus',value:'Applicant (MZAPC)'}],
         points:[
           {h:'Stage 1 — condition',t:'Identify any condition on the power: PF, mandatory consideration, time limit, jurisdictional fact.',c:[]},
           {h:'Stage 2 — PBS validity',t:'Was Parliament\'s intent that breach invalidate? Most decisional grounds presumed validity-conditioning.',c:['pbs']},
           {h:'Stage 3 — materiality',t:'LPDT: realistic possibility decision could differ. WZARH inferred submissions for PF. Court must NOT reconstruct.',c:['hossain','lpdt','wzarh','mzapc']},
           {h:'Always-JE exceptions',t:'Bias, final unreasonableness, Kirk-egregious PF, jurisdictional facts, delegated legislation — no materiality test.',c:['kirk-criterion']}
         ]},
    kr:{ title:'관할권적 오류 및 중요성',
         summary:'Hossain 3단계 + 중요성 문턱. LPDT가 재구성을 거부, PF는 WZARH, 입증책임은 MZAPC, Kirk 중대 PF는 항상 JE.',
         meta:[
           {label:'법리',value:'Hossain 3단계'},
           {label:'중요성',value:'현실적 가능성'},
           {label:'기준',value:'재구성 금지'},
           {label:'입증책임',value:'원고(MZAPC)'}],
         points:[
           {h:'1단계 — 조건',t:'권한의 조건 식별: PF, 의무 고려사항, 기간, 관할권적 사실 등.',c:[]},
           {h:'2단계 — PBS 유효성',t:'위반이 무효화한다는 의회 의도가 있었는가. 대부분의 결정 사유는 유효성 조건으로 추정된다.',c:['pbs']},
           {h:'3단계 — 중요성',t:'LPDT: 결과가 달라질 현실적 가능성. PF는 WZARH가 추가 주장을 추론. 법원은 의사결정을 재구성해서는 안 된다.',c:['hossain','lpdt','wzarh','mzapc']},
           {h:'항상-JE 예외',t:'편향, 최종 비합리성, Kirk 중대 PF, 관할권적 사실, 위임입법 — 중요성 테스트 없음.',c:['kirk-criterion']}
         ]},
    tree:{ en:[
      {id:'s1',label:'Stage 1: identify condition',children:[
        {id:'s2',label:'Stage 2: PBS validity-conditioning?',children:[
          {id:'s2-n',label:'No',leaf:true,result:'no-je',note:'Directory only.'},
          {id:'s2-y',label:'Yes',children:[
            {id:'cat',label:'Always-JE category?',children:[
              {id:'cat-y',label:'Yes (bias / Kirk PF / jurisdictional fact / final unreasonableness)',leaf:true,result:'je',note:'Skip materiality.'},
              {id:'cat-n',label:'No',children:[
                {id:'mat',label:'Stage 3: realistic possibility of different outcome?',children:[
                  {id:'mat-y',label:'Yes',leaf:true,result:'je',note:'Material → JE.'},
                  {id:'mat-n',label:'No',leaf:true,result:'no-je',note:'Not material; no JE.'}
                ]}
              ]}
            ]}
          ]}
        ]}
      ]}
    ], kr:[
      {id:'s1',label:'1단계: 조건 식별',children:[
        {id:'s2',label:'2단계: PBS 유효성 조건인가?',children:[
          {id:'s2-n',label:'아니오',leaf:true,result:'no-je',note:'훈시 규정에 그친다.'},
          {id:'s2-y',label:'예',children:[
            {id:'cat',label:'항상-JE 범주?',children:[
              {id:'cat-y',label:'예(편향 / Kirk PF / 관할권적 사실 / 최종 비합리성)',leaf:true,result:'je',note:'중요성 생략.'},
              {id:'cat-n',label:'아니오',children:[
                {id:'mat',label:'3단계: 결과가 달라질 현실적 가능성?',children:[
                  {id:'mat-y',label:'예',leaf:true,result:'je',note:'중요 → JE.'},
                  {id:'mat-n',label:'아니오',leaf:true,result:'no-je',note:'중요하지 않음 — JE 아님.'}
                ]}
              ]}
            ]}
          ]}
        ]}
      ]}
    ]},
    detail:{
      en:[
        {h:'Hossain framework',t:'Materiality is presumed an implied condition. Without showing realistic possibility, breach does not amount to JE — but courts must not reconstruct hypothetical decisions.'},
        {h:'LPDT clarification',t:'LPDT v Minister [2024] HCA 12: rejects "(a) had it been disregarded, same conclusion would follow" reasoning; reaffirms WZARH inferential approach; applicant\'s onus is light where realistic possibility self-evident.'},
        {h:'Always-JE list',t:'(1) Apprehended/actual bias (Ebner);\n(2) Kirk-egregious PF;\n(3) Final-decision unreasonableness;\n(4) Jurisdictional fact errors (Enfield);\n(5) Delegated legislation invalidity (no materiality).'}
      ],
      kr:[
        {h:'Hossain 분석틀',t:'중요성은 묵시적 조건으로 추정된다. 현실적 가능성을 입증하지 못하면 위반은 JE에 이르지 못한다 — 그러나 법원은 가상의 의사결정을 재구성해서는 안 된다.'},
        {h:'LPDT 확인',t:'LPDT v Minister [2024] HCA 12: "(a) 무시했더라도 같은 결론" 추론을 거부하고, WZARH의 추론 접근을 재확인했다. 현실적 가능성이 자명한 경우 원고의 입증책임은 가볍다.'},
        {h:'항상-JE 목록',t:'(1) 추정/실제 편향(Ebner);\n(2) Kirk 중대 PF;\n(3) 최종 결정의 비합리성;\n(4) 관할권적 사실 오류(Enfield);\n(5) 위임입법의 무효(중요성 없음).'}
      ]
    },
    cases:['hossain','lpdt','wzarh','mzapc','kirk-criterion','bhardwaj','pbs'],
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
    cases:['annetts','lam','wzarh','lpdt'],
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
    en:{ title:'Bias rule + reasoning norms',
         summary:'Ebner two-step apprehended bias; Tickner active intellectual process; Peko-Wallsend mandatory considerations; Schlieske improper purpose; M1/2021 representations.',
         meta:[
           {label:'Bias test',value:'Ebner double-might'},
           {label:'Steps',value:'Identify + articulate'},
           {label:'Reasoning',value:'Active engagement'},
           {label:'Always-JE',value:'Bias yes'}],
         points:[
           {h:'Apprehended bias',t:'Ebner: fair-minded lay observer might reasonably apprehend judge might not be impartial. Two-step articulation required.',c:['ebner']},
           {h:'Active consideration',t:'Tickner: the mental act cannot be delegated; M1/2021 articulates "read, identify, understand, evaluate" standard.',c:['tickner','m1-2021']},
           {h:'Mandatory considerations',t:'Peko-Wallsend (Mason J\'s 5 principles): mandatory considerations identified by statutory construction.',c:['peko']},
           {h:'Improper purpose',t:'Schlieske: dominant operative purpose; disguised extradition under deportation power held invalid.',c:['schlieske']}
         ]},
    kr:{ title:'편향 규칙 + 추론 규범',
         summary:'Ebner 2단계 추정 편향; Tickner 적극적 지적 과정; Peko-Wallsend 의무 고려사항; Schlieske 부정한 목적; M1/2021 의견 진술.',
         meta:[
           {label:'편향 테스트',value:'Ebner 이중 might'},
           {label:'단계',value:'식별 + 진술'},
           {label:'추론',value:'적극적 관여'},
           {label:'항상-JE',value:'편향 그렇다'}],
         points:[
           {h:'추정 편향',t:'Ebner: 공정한 마음을 가진 일반 관찰자가 재판부의 공정성 결여를 합리적으로 의심할 수 있는가. 2단계 진술 필요.',c:['ebner']},
           {h:'적극적 고려',t:'Tickner: 자체의 정신적 행위는 위임할 수 없다. M1/2021은 "읽기 식별 이해 평가" 기준을 진술.',c:['tickner','m1-2021']},
           {h:'의무 고려사항',t:'Peko-Wallsend(Mason J 5원칙): 의무 고려사항은 법령 해석으로 식별된다.',c:['peko']},
           {h:'부정한 목적',t:'Schlieske: 지배적 작용 목적; 추방 권한 하의 위장 인도는 무효.',c:['schlieske']}
         ]},
    tree:{ en:[
      {id:'b',label:'Bias claim?',children:[
        {id:'b-y',label:'Yes',children:[
          {id:'art',label:'Two-step articulation:\n(1) what might decision-maker decide for non-impartial reason;\n(2) why a fair-minded observer might think so',leaf:true,result:'always-je',note:'Bias is always-JE — no materiality.'}
        ]},
        {id:'b-n',label:'No',children:[
          {id:'reas',label:'Reasoning ground?',children:[
            {id:'reas-tk',label:'Failure to actively consider (Tickner)',leaf:true,result:'check-mat',note:'Materiality required (Hossain).'},
            {id:'reas-pek',label:'Mandatory consideration ignored (Peko)',leaf:true,result:'check-mat',note:'Materiality required.'},
            {id:'reas-irr',label:'Irrelevant consideration weighed',leaf:true,result:'check-mat',note:'Materiality required.'},
            {id:'reas-purp',label:'Improper dominant purpose (Schlieske)',leaf:true,result:'je',note:'Substantive ground; usually JE.'}
          ]}
        ]}
      ]}
    ], kr:[
      {id:'b',label:'편향 주장?',children:[
        {id:'b-y',label:'예',children:[
          {id:'art',label:'2단계 진술:\n(1) 결정자가 비공정한 이유로 무엇을 결정할 수 있는가;\n(2) 왜 공정한 관찰자가 그렇게 생각할 수 있는가',leaf:true,result:'always-je',note:'편향은 항상 JE — 중요성 없음.'}
        ]},
        {id:'b-n',label:'아니오',children:[
          {id:'reas',label:'추론 사유?',children:[
            {id:'reas-tk',label:'적극적 고려 누락(Tickner)',leaf:true,result:'check-mat',note:'중요성 필요(Hossain).'},
            {id:'reas-pek',label:'의무 고려사항 누락(Peko)',leaf:true,result:'check-mat',note:'중요성 필요.'},
            {id:'reas-irr',label:'무관 고려사항 고려',leaf:true,result:'check-mat',note:'중요성 필요.'},
            {id:'reas-purp',label:'부정한 지배적 목적(Schlieske)',leaf:true,result:'je',note:'실체적 사유; 통상 JE.'}
          ]}
        ]}
      ]}
    ]},
    detail:{
      en:[
        {h:'Ebner two-step',t:'(1) Identify what might lead the decision-maker to decide otherwise than on the merits;\n(2) explain the logical connection between that matter and feared deviation. Connection must not be remote.'},
        {h:'Tickner standard',t:'Active intellectual process required. Reliance on summaries can be acceptable, but the decision-maker must engage with the substance of representations.'},
        {h:'Improper purpose',t:'Schlieske required dominant operative purpose to be unauthorised. Mixed-purpose cases turn on which purpose actually drove the decision.'}
      ],
      kr:[
        {h:'Ebner 2단계',t:'(1) 결정자를 본안 외 사유로 이끌 수 있는 사정을 식별;\n(2) 그 사정과 우려되는 일탈 사이의 논리적 연결을 설명. 연결이 너무 멀어서는 안 된다.'},
        {h:'Tickner 기준',t:'적극적 지적 과정이 요구된다. 요약에 의존하는 것 자체는 허용될 수 있으나, 결정자는 의견의 실질에 관여해야 한다.'},
        {h:'부정한 목적',t:'Schlieske는 지배적 작용 목적이 수권되지 않은 것이어야 한다고 요구했다. 복합 목적 사건은 어느 목적이 실제로 결정을 주도했는가에 달려 있다.'}
      ]
    },
    cases:['ebner','tickner','peko','schlieske','m1-2021'],
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
    en:{ title:'Policy norms + cross-cutting',
         summary:'Green v Daniels inflexible application; M64 lawful priority policy with exception clause; cross-cutting reading of multiple grounds.',
         meta:[
           {label:'Inflexible',value:'Unlawful (Green)'},
           {label:'Priority',value:'Lawful w/ exception (M64)'},
           {label:'Cross-cutting',value:'Multi-ground'},
           {label:'Test',value:'Statutory criteria preserved?'}],
         points:[
           {h:'Inflexible application',t:'Green v Daniels: a policy that substitutes for statutory criteria is unlawful — discretion must remain available.',c:['green']},
           {h:'Lawful priority',t:'M64: tiered priorities lawful where exception clause preserves evaluative discretion.',c:['m64']},
           {h:'Cross-cutting',t:'Many problems engage multiple grounds (PF + reasoning + policy). Plead in the alternative; identify common materiality.',c:[]}
         ]},
    kr:{ title:'정책 규범 + 교차 쟁점',
         summary:'Green v Daniels 경직된 적용; M64 예외 조항 있는 적법한 우선순위 정책; 다중 사유의 교차 분석.',
         meta:[
           {label:'경직성',value:'위법(Green)'},
           {label:'우선순위',value:'예외 조항 있으면 적법(M64)'},
           {label:'교차',value:'다중 사유'},
           {label:'테스트',value:'법적 기준 보존?'}],
         points:[
           {h:'경직된 적용',t:'Green v Daniels: 법적 기준을 대체하는 정책은 위법이다 — 재량이 남아 있어야 한다.',c:['green']},
           {h:'적법한 우선순위',t:'M64: 예외 조항이 평가적 재량을 보존하는 경우 계층적 우선순위 정책은 적법하다.',c:['m64']},
           {h:'교차 쟁점',t:'많은 사안이 다중 사유(PF + 추론 + 정책)를 작동시킨다. 예비적 주장; 공통 중요성 식별.',c:[]}
         ]},
    tree:{ en:[
      {id:'p',label:'Policy applied?',children:[
        {id:'p-y',label:'Yes',children:[
          {id:'crit',label:'Does policy substitute for statutory criteria?',children:[
            {id:'crit-y',label:'Yes',leaf:true,result:'invalid',note:'Green v Daniels — inflexible.'},
            {id:'crit-n',label:'No',children:[
              {id:'exc',label:'Exception clause preserves discretion?',children:[
                {id:'exc-y',label:'Yes',leaf:true,result:'valid',note:'M64 — lawful priority policy.'},
                {id:'exc-n',label:'No',leaf:true,result:'check',note:'Risk of fettering — examine carefully.'}
              ]}
            ]}
          ]}
        ]}
      ]}
    ], kr:[
      {id:'p',label:'정책이 적용되었는가?',children:[
        {id:'p-y',label:'예',children:[
          {id:'crit',label:'정책이 법적 기준을 대체하는가?',children:[
            {id:'crit-y',label:'예',leaf:true,result:'invalid',note:'Green v Daniels — 경직됨.'},
            {id:'crit-n',label:'아니오',children:[
              {id:'exc',label:'예외 조항이 재량을 보존하는가?',children:[
                {id:'exc-y',label:'예',leaf:true,result:'valid',note:'M64 — 적법한 우선순위 정책.'},
                {id:'exc-n',label:'아니오',leaf:true,result:'check',note:'재량 구속 위험 — 주의 필요.'}
              ]}
            ]}
          ]}
        ]}
      ]}
    ]},
    detail:{
      en:[
        {h:'Policy in administrative decisions',t:'Policy is necessary for consistency, but cannot displace the statutory test. Decision-maker must apply policy as a guide, not a substitute.'},
        {h:'M64 exception clause',t:'PAM 3 included an explicit override allowing departure from priorities. The exception preserved evaluative judgment, distinguishing from Green v Daniels.'},
        {h:'Cross-cutting grounds',t:'In a single problem, PF + reasoning + policy may all be available. Always plead in alternatives; final-decision unreasonableness may absorb several flaws.'}
      ],
      kr:[
        {h:'행정 결정에서의 정책',t:'정책은 일관성을 위해 필요하나 법적 테스트를 대체할 수 없다. 결정자는 정책을 지침으로 적용하되 대체로 삼아서는 안 된다.'},
        {h:'M64 예외 조항',t:'PAM 3는 우선순위로부터의 일탈을 허용하는 명시적 override를 포함했다. 이 예외가 평가적 재량을 보존해 Green v Daniels와 구별된다.'},
        {h:'교차 사유',t:'하나의 문제에서 PF + 추론 + 정책이 모두 가능할 수 있다. 항상 예비적으로 주장하고, 최종 결정의 비합리성이 여러 결함을 흡수할 수 있다.'}
      ]
    },
    cases:['green','m64','tickner','peko'],
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
    cases:['li','szmds','enfield','dua16','stretton'],
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
    cases:['acf','onus','s157','kirk-jurisdiction'],
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
    cases:['graham','futuris','s157','kirk-jurisdiction','bodruddaza'],
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

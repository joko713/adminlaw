/* Home — single full topic map covering W1–W11. Click any case chip to open its card.
   Two views toggle: 'weeks' (W1→W11 sequential) and 'flow' (analytical reasoning flow). */
function Home({ lang, onJump, onCase }) {
  const KR = lang === 'kr';
  const [viewMode, setViewMode] = React.useState('weeks');

  const T = {
    eyebrow: KR ? '행정법 전체 지도' : 'admin law full map',
    title:   viewMode === 'weeks'
              ? (KR ? 'W1부터 W11까지 한 화면에' : 'W1 through W11 — at a glance')
              : (KR ? '사법심사 — 분석 흐름' : 'Judicial review — reasoning flow'),
    lede:    viewMode === 'weeks'
              ? (KR ? '주차별 핵심 단계와 관련 판례를 한 흐름으로 펼쳐 두었어. 케이스 칩을 누르면 카드가 열린다.' : 'The whole course laid out as one flow — click any case chip to open its card.')
              : (KR ? '문제 풀이 순서대로 — 어디서 시작해서 어디로 가는지. 각 단계에서 길이 갈리는 지점도 함께 보인다.' : 'In the order you reason through a problem — where to start, where to branch.'),
  };

  return (
    <div className="page fw-page">
      <div className="home-header">
        <div className="home-header-text">
          <p className="eyebrow">{T.eyebrow}</p>
          <h1 className="page-title">{T.title}</h1>
        </div>
        <div className="home-view-toggle" role="tablist" aria-label={KR?'뷰 선택':'View'}>
          <button
            role="tab"
            className={"hvt-btn" + (viewMode==='weeks' ? ' active' : '')}
            onClick={()=>setViewMode('weeks')}
            aria-selected={viewMode==='weeks'}>
            {KR ? '주차별' : 'By week'}
          </button>
          <button
            role="tab"
            className={"hvt-btn" + (viewMode==='flow' ? ' active' : '')}
            onClick={()=>setViewMode('flow')}
            aria-selected={viewMode==='flow'}>
            {KR ? '사법심사 분석' : 'Analytical flow'}
          </button>
        </div>
      </div>
      <p className="lede">{T.lede}</p>

      {viewMode === 'weeks'
        ? <FullMap KR={KR} onCase={onCase} />
        : <AnalyticalFlow KR={KR} onCase={onCase} />}

      <div className="fw-cta">
        <button className="home-cta" onClick={()=>onJump('weeks')}>{KR?'주차별 자세히 보기':'Read by week'} <span>→</span></button>
        <button className="home-cta" onClick={()=>onJump('scenario')}>{KR?'시나리오 풀어보기':'Scenario analyser'} <span>→</span></button>
        <button className="home-cta" onClick={()=>onJump('exam')}>{KR?'시험 모드':'Exam mode'} <span>→</span></button>
      </div>
    </div>
  );
}
window.Home = Home;

/* ─── Full topic map — covers W1 → W11 in one continuous flow ───
   1. W1 — Delegated legislation (McEldowney)
   2. W2-W3 — Jurisdiction & gateway (forum + "decision under enactment")
   3. W9 — Standing
   4. W4 — Hossain 3-stage analytical framework
   5. W5-W8 — JE Tree (the visual centrepiece)
   6. W4-W5 — Materiality timeline
   7. W10 — Constitutional limits on legislative restriction
   8. W8-W9 — Remedies
   9. W11 — Tribunals & beyond                                       */
function FullMap({ KR, onCase }) {
  const T = KR ? {
    sections: {
      w1delegated: { h:'W1 · 위임입법 통제',         sub:'McEldowney 3단계 — 위임이 권한 범위 안인가' },
      w23jurisdiction:{ h:'W2-W3 · 관할과 진입',    sub:'어느 법원에서, 어떤 결정을 두고 다투나' },
      w9standing:    { h:'W9 · 원고적격',           sub:'ACF 기본선과 그 확장' },
      w4hossain:     { h:'W4 · Hossain 3단계 분석', sub:'권한 → PBS → 사유 + 중요성' },
      w58je:         { h:'W5-W8 · JE 가지치기',     sub:'명시적 한계 · 묵시적 조건 · 사실·법률 오류' },
      materiality:   { h:'W4-W5 · 중요성 시계열',   sub:'Hossain → MZAPC → Nathanson → LPDT' },
      w10const:      { h:'W10 · 헌법적 한계',       sub:'배제·no-invalidity·비밀·시간 제한' },
      remedies:      { h:'W8-W9 · 구제',            sub:'영장과 declaration, 그리고 재량적 거부' },
      w11alt:        { h:'W11 · 또 다른 길',         sub:'심판소(ART)와 법원 밖의 길' },
    },
    labels: {
      // W1
      delMc3:        'McEldowney 3단계',
      delLegality:   '합법성 원칙이 만난 위임입법',
      // W2-W3
      cthChannel:    '연방 — 헌법 s 75(v) · JA s 39B · ADJR',
      stateChannel:  '주(州) — 대법원 감독관할',
      decision:      '"수권법에 따른 결정"에 해당하나',
      // W9 standing
      standingBase:  'ACF special interest 기본선',
      standingExt:   '확장과 한계',
      // W4 Hossain
      hStage1:       '① 권한 + 조건',
      hStage2:       '② PBS — 권한이 적법하게 행사됐나',
      hStage3:       '③ 사유 + 중요성 — 위반이 어떤 차원에서 어떻게',
      // JE Tree
      express:       '명시적 한계',
      implied:       '묵시적 조건',
      factlaw:       '사실·법률 오류',
      pf:            '절차적 공정 — 공정한 청문',
      bias:          '편향 — Ebner 2단계',
      rc:            '관련 고려사항 — Peko-W',
      reason:        '비합리성 — Wednesbury → Li → DUA16',
      jfObj:         '관할권적 사실 — 객관적',
      jfState:       '관할권적 사실 — 주관적(state of mind)',
      noEvidence:    '증거 부재 사유',
      // W10
      privative:     '배제조항 (S157)',
      noInval:       'No-invalidity 조항 (Futuris)',
      secrecy:       '비밀조항 (Graham)',
      timeBar:       '경직된 기간 제한 (Bodruddaza)',
      alwaysJE:      'Always-JE 바닥선',
      // Remedies
      writs:         '영장 — Cert · Mand · Prohibition',
      declaration:   'Declaration',
      // W11
      tribunals:     '심판소 — ART (2024년 10월~)',
      beyond:        '법원 밖의 길',
    },
    notes: {
      delMc3:        'Vanstone(비례성), Evans(합법성), Kruse(Wednesbury), Toohey(목적), PBS(유효성 의도)로 4종 하위 사유 구성.',
      delLegality:   '※ 분명한 문언 없이는 기본권을 줄일 수 없다. Coco가 깔아 둔 추정을 Evans가 위임입법에 적용.',
      cthEnact:      's 75(v) · s 39B JA · ADJR Act 세 채널. ADJR이 막히면 S157 framing으로 우회.',
      state:         '※ NSW에는 ADJR 같은 법이 없으니, 다툼은 주 대법원 감독관할로 간다.',
      decision:      'Bond(s 5/s 6 결정 vs 행위), Tang(under enactment 2단계), Fuller(2024 재확인), Datafin(영국 기능적 접근, 호주는 미채택).',
      standingBase:  'ACF가 기본선을 깔았고(특별한 이해), 단순 이념은 RTL에서 부족했다.',
      standingExt:   'Onus(문화적 수호), NCEC(시민단체 인정), Bateman\'s Bay/Argos(경제적 경쟁자) — 모두 ACF 위에서 넓힌 사례.',
      hossain:       '※ Hossain(2018) 이후로는 어떤 사유든 3단계 분석을 거친다. 권한 → PBS → 사유 + 중요성.',
      materiality:   '※ 중요성은 결과를 바꿨을 현실적 가능성이 있었는지 묻는다. PF 사안에서는 Nathanson 때문에 문턱이 아주 낮다.',
      w10:           '※ 입법으로 사법심사를 우회하려는 모든 도구는 substance-and-degree로 본다 — 형식이 아니라 실질이 중요. 의도적 위반은 늘 JE로 남는다.',
      remedies:      'JE면 보통 certiorari(무효) + mandamus(다시 결정) + prohibition(금지)이 세트. 주 사법심사에서는 certiorari가 직접 구제.',
      tribunals:     'AAT가 ART로 바뀜(2024년 10월). s 43 — 원결정자의 "자리에 서서(stand in the shoes)" "옳거나 더 바람직한" 결정을 다시 내림. 본안 재심사 3대 축 — Shi(사실 기준 시점), Frugtniet(같은 제약), Drake No 2(정책 — "일관성이 정의보다 우선하지 않는다").',
      beyond:        '"청렴 부문(integrity branch)"으로 묶이는 비사법 책임성 장치. 옴부즈만(Ombudsman Act 1976) — maladministration 기준, 권고만(강제력 없음); Robodebt가 도달과 한계 동시에 보여줌. 의회 — 답할 의무지만 형식적 권한 없음; 감사원장은 의회 공무원 지위로 더 강한 보호(Auditor-General Act 1997 s 50). FOI(FOI Act 1982) — 공개 추정, s 11B 공익 테스트, 개인 사생활(s 47F)이 최다 주장 면제.',
    },
  } : {
    sections: {
      w1delegated: { h:'W1 · Delegated legislation',     sub:'McEldowney 3-stage — within delegated power?' },
      w23jurisdiction:{ h:'W2-W3 · Jurisdiction & gateway', sub:'Which forum, which decision' },
      w9standing:    { h:'W9 · Standing',                 sub:'ACF baseline and its extensions' },
      w4hossain:     { h:'W4 · Hossain 3-stage frame',    sub:'Power → PBS → ground + materiality' },
      w58je:         { h:'W5-W8 · JE tree',               sub:'Express · implied · fact/law errors' },
      materiality:   { h:'W4-W5 · Materiality timeline',  sub:'Hossain → MZAPC → Nathanson → LPDT' },
      w10const:      { h:'W10 · Constitutional limits',   sub:'Privative · no-invalidity · secrecy · time bars' },
      remedies:      { h:'W8-W9 · Remedies',              sub:'Writs, declaration, discretionary refusal' },
      w11alt:        { h:'W11 · Alternative pathways',    sub:'Tribunals (ART) and beyond the courts' },
    },
    labels: {
      delMc3:'McEldowney 3-stage', delLegality:'Legality principle in delegated legislation',
      cthChannel:'Cth — s 75(v) · s 39B JA · ADJR', stateChannel:'State — Supreme Court supervisory',
      decision:'"Decision under enactment"',
      standingBase:'ACF special-interest baseline', standingExt:'Extensions and limits',
      hStage1:'① Power + conditions', hStage2:'② PBS — did the power arise lawfully?',
      hStage3:'③ Ground + materiality — what breach, on what axis',
      express:'Express limits', implied:'Implied conditions', factlaw:'Fact / law errors',
      pf:'Procedural fairness — fair hearing', bias:'Bias — Ebner double-step',
      rc:'Relevant considerations — Peko-W', reason:'Unreasonableness — Wednesbury → Li → DUA16',
      jfObj:'Jurisdictional facts — objective', jfState:'Jurisdictional facts — state of mind',
      noEvidence:'No-evidence ground',
      privative:'Privative clause (S157)', noInval:'No-invalidity (Futuris)',
      secrecy:'Secrecy provision (Graham)', timeBar:'Inflexible time bar (Bodruddaza)',
      alwaysJE:'Always-JE floor',
      writs:'Writs — Cert · Mand · Prohibition', declaration:'Declaration',
      tribunals:'Tribunals — ART (from Oct 2024)', beyond:'Beyond the courts',
    },
    notes: {
      delMc3:'Vanstone (proportionality), Evans (legality), Kruse (Wednesbury), Toohey (purpose), PBS (invalidity intent) — four sub-grounds.',
      delLegality:'※ Fundamental rights cannot be cut down without clear words. Coco\'s presumption; Evans applied it to delegated legislation.',
      cthEnact:'Three Cth channels: s 75(v) · s 39B JA · ADJR. If ADJR is blocked, pivot via S157.',
      state:'※ NSW has no ADJR equivalent — challenge runs through Supreme Court supervisory jurisdiction.',
      decision:'Bond (s 5/s 6 decision vs conduct), Tang (under enactment two-limb), Fuller (2024 confirmation), Datafin (UK functional approach, NOT adopted in Australia).',
      standingBase:'ACF set the baseline (special interest); pure ideology fails (RTL).',
      standingExt:'Onus (cultural custodianship), NCEC (recognised advocacy bodies), Bateman\'s Bay / Argos (commercial competitor) — all built on ACF.',
      hossain:'※ Since Hossain (2018), every ground runs the 3-stage frame: power → PBS → ground + materiality.',
      materiality:'※ Materiality asks whether a different outcome was realistically possible. In PF context the bar is low (Nathanson).',
      w10:'※ Every legislative device aimed at JR is tested by substance and degree — practical impact, not form. Deliberate wrongdoing always remains JE.',
      remedies:'JE typically yields certiorari + mandamus + prohibition together. In State JR, certiorari is a direct (not ancillary) remedy.',
      tribunals:'AAT replaced by ART (Oct 2024). s 43 — "stand in the shoes" of the primary decision-maker and re-make the "correct or preferable" decision. Three pillars of merits review: Shi (time of facts), Frugtniet (same constraints), Drake No 2 (policy — "consistency is not preferable to justice").',
      beyond:'Non-judicial accountability grouped as the "integrity branch". Ombuds (Ombudsman Act 1976) — maladministration basis, recommend only (non-coercive); Robodebt shows both reach and limits. Parliament — answerable but no formal authority; the Auditor-General has stronger officer-of-parliament protection (Auditor-General Act 1997 s 50). FOI (FOI Act 1982) — pro-disclosure presumption, s 11B public interest test, personal privacy (s 47F) is the most-claimed exemption.',
    },
  };

  // — chip helper: tag(id, label?) → React node, opens case panel
  const Tag = ({ id, label }) => {
    const c = window.CASES_DATA && window.CASES_DATA[id];
    const meta = window.CASE_META && window.CASE_META[id];
    const imp1 = meta && meta.importance === 1;
    const prInfo = window.CASE_PRIORITY && window.CASE_PRIORITY[id];
    const prClass = prInfo ? ' prio-' + prInfo.priority : '';
    if (!c) {
      return <span className={"map-case-tag missing"+prClass}><em>{label || id}</em></span>;
    }
    return (
      <button
        className={"map-case-tag" + (imp1 ? ' imp-1' : '') + prClass}
        title={c.cite + (prInfo ? ' · S' + prInfo.seminar + ' · ' + prInfo.priority : '')}
        onClick={(e) => { e.stopPropagation(); onCase && onCase(id); }}
      >
        <em>{label || c.name}</em>
      </button>
    );
  };

  // — block helper
  const Block = ({ label, cases, note, cls }) => (
    <div className={"map-block" + (cls ? ' ' + cls : '')}>
      <div className="map-block-h">{label}</div>
      <div className="map-block-tags">
        {cases.map(([id, name], i) => <Tag key={id+'-'+i} id={id} label={name} />)}
      </div>
      {note && <div className="map-block-note">{note}</div>}
    </div>
  );

  const SectionH = ({ which }) => (
    <div className="map-section-h">
      <span className="map-section-step">{T.sections[which].h}</span>
      <span className="map-section-sub">{T.sections[which].sub}</span>
    </div>
  );

  return (
    <section className="map-page">

      {/* ════ W1 — Delegated legislation ════ */}
      <SectionH which="w1delegated" />
      <div className="map-row-grid map-grid-2">
        <Block
          label={T.labels.delMc3}
          cases={[
            ['vanstone','Vanstone'],['toohey','R v Toohey'],['kruse','Kruse v Johnson'],
            ['pbs','Project Blue Sky'],
          ]}
          note={T.notes.delMc3}
        />
        <Block
          label={T.labels.delLegality}
          cases={[['coco','Coco v The Queen'],['evans','Evans v NSW']]}
          note={T.notes.delLegality}
        />
      </div>

      {/* ════ W2-W3 — Jurisdiction & gateway ════ */}
      <SectionH which="w23jurisdiction" />
      <div className="map-row-grid map-grid-3">
        <Block
          label={T.labels.cthChannel}
          cases={[['m68','Pl M68'],['m61','Pl M61'],['quin','Quin'],['ainsworth','Ainsworth']]}
          note={T.notes.cthEnact}
        />
        <Block
          label={T.labels.stateChannel}
          cases={[['kirk-jurisdiction','Kirk'],['s157','Pl S157']]}
          note={T.notes.state}
        />
        <Block
          label={T.labels.decision}
          cases={[
            ['bond','Bond'],['tang','Tang'],['fuller','Fuller v Lawrence'],
            ['neat','NEAT'],['datafin','Datafin (UK)'],
          ]}
          note={T.notes.decision}
        />
      </div>

      {/* ════ W9 — Standing ════ */}
      <SectionH which="w9standing" />
      <div className="map-row-grid map-grid-2">
        <Block
          label={T.labels.standingBase}
          cases={[['acf','ACF'],['rtl','Right to Life']]}
          note={T.notes.standingBase}
        />
        <Block
          label={T.labels.standingExt}
          cases={[
            ['onus','Onus v Alcoa'],['northcoast','NCEC'],
            ['batemans',"Bateman's Bay LSC"],['argos','Argos'],
          ]}
          note={T.notes.standingExt}
        />
      </div>

      {/* ════ W4 — Hossain 3-stage framework (visual) ════ */}
      <SectionH which="w4hossain" />
      <div className="map-stage hossain-stage">
        <div className="hossain-step">
          <span className="hossain-num">①</span>
          <div className="hossain-body">
            <div className="hossain-h">{T.labels.hStage1}</div>
            <p className="hossain-t">
              {KR
                ? '수권조항을 그대로 인용한 다음, 명시적 조건과 묵시적 조건(Coco의 합법성 추정, Kioa의 PF 추정)으로 나눠서 적는다.'
                : 'Quote the empowering provision, then split conditions into express + implied (Coco legality presumption, Kioa PF presumption).'}
            </p>
            <div className="hossain-tags">
              <Tag id="hossain" /><Tag id="coco" /><Tag id="kioa" /><Tag id="saeed" />
            </div>
          </div>
        </div>
        <div className="hossain-arrow">↓</div>
        <div className="hossain-step">
          <span className="hossain-num">②</span>
          <div className="hossain-body">
            <div className="hossain-h">{T.labels.hStage2}</div>
            <p className="hossain-t">
              {KR
                ? 'Precondition(권한이 발동될 사실·요건이 있었나) · Breadth(권한이 미치는 범위 안에 머물렀나) · Scope(허용된 목적 안에서 행사됐나). Project Blue Sky가 무효 의도를 묻는 자리.'
                : 'Precondition (did the power arise?) · Breadth (within reach?) · Scope (within permitted purposes?). Project Blue Sky asks if Parliament intended breach to invalidate.'}
            </p>
            <div className="hossain-tags">
              <Tag id="pbs" /><Tag id="enfield" /><Tag id="m70" /><Tag id="szmds" />
            </div>
          </div>
        </div>
        <div className="hossain-arrow">↓</div>
        <div className="hossain-step">
          <span className="hossain-num">③</span>
          <div className="hossain-body">
            <div className="hossain-h">{T.labels.hStage3}</div>
            <p className="hossain-t">
              {KR
                ? '네 사유(고려사항·부적절 목적·PF·비합리성)를 모두 살피고, 위반이 있으면 중요성(materiality)을 댄다. PF·편향·관할권적 사실·최종 결정의 비합리성은 always-JE로 중요성을 우회.'
                : 'Run the four sub-grounds (considerations, improper purpose, PF, unreasonableness), then apply materiality. Bias, Kirk-PF, jurisdictional facts, and final-decision unreasonableness bypass materiality (always-JE).'}
            </p>
            <div className="hossain-tags">
              <Tag id="mzapc" /><Tag id="lpdt" /><Tag id="nathanson" /><Tag id="bhardwaj" /><Tag id="m174" />
            </div>
          </div>
        </div>
      </div>
      <div className="marginalia map-note">{T.notes.hossain}</div>

      {/* ════ W5-W8 — JE Tree (visual centrepiece) ════ */}
      <SectionH which="w58je" />
      <div className="map-stage je-tree-stage">
        <div className="map-title-row">
          <div className="map-root">
            JURISDICTIONAL ERROR
            <small>{KR ? '권한의 법적 한계 위반' : 'breach of legal limits on power'}</small>
          </div>
        </div>
        <div className="map-trunk" />
        <div className="map-row map-row-3">

          {/* EXPRESS LIMITS */}
          <div className="map-cell">
            <div className="map-node map-node-cat">
              <p className="map-node-title">{T.labels.express}</p>
              <p className="map-node-cite">{KR ? '법령 명시 위반' : 'breach of statutory terms'}</p>
            </div>
            <div className="map-trunk-mini" />
            <div className="map-leaf-stack">
              <div className="map-leaf-card">
                <div className="map-leaf-h">PBS framework</div>
                <div className="map-leaf-tags"><Tag id="pbs" label="PBS" /></div>
              </div>
              <div className="map-leaf-card">
                <div className="map-leaf-h">{KR ? '법령상 PF 배제' : 'Statutory PF exclusion'}</div>
                <div className="map-leaf-tags"><Tag id="saeed" label="Saeed" /><Tag id="s10" label="S10" /></div>
              </div>
              <div className="map-leaf-card">
                <div className="map-leaf-h">{KR ? '명시적 mandatory considerations' : 'Express MRC'}</div>
                <div className="map-leaf-tags"><Tag id="peko" label="Peko-W" /><Tag id="m1_2021" label="M1/2021" /></div>
              </div>
            </div>
          </div>

          {/* IMPLIED CONDITIONS — workhorse */}
          <div className="map-cell">
            <div className="map-node map-node-cat highlight">
              <p className="map-node-title">{T.labels.implied}</p>
              <p className="map-node-cite">{KR ? '묵시적 조건 위반' : 'implied condition breach'}</p>
            </div>
            <div className="map-trunk-mini" />
            <div className="map-leaf-stack">
              <div className="map-leaf-card big">
                <div className="map-leaf-h">{T.labels.pf}</div>
                <div className="map-leaf-tags">
                  <Tag id="kioa" label="Kioa" /><Tag id="saeed" label="Saeed" />
                  <Tag id="s10" label="S10" /><Tag id="veal" label="VEAL" />
                  <Tag id="wzarh" label="WZARH" /><Tag id="nathanson" label="Nathanson" />
                  <Tag id="lam" label="Lam" /><Tag id="annetts" label="Annetts" />
                </div>
              </div>
              <div className="map-leaf-card big">
                <div className="map-leaf-h">{T.labels.bias}</div>
                <div className="map-leaf-tags">
                  <Tag id="ebner" label="Ebner" /><Tag id="jia" label="Jia" />
                  <Tag id="isbester" label="Isbester" /><Tag id="cny17" label="CNY17" />
                  <Tag id="hotholdings" label="Hot Holdings" />
                </div>
              </div>
              <div className="map-leaf-card big">
                <div className="map-leaf-h">{T.labels.rc}</div>
                <div className="map-leaf-tags">
                  <Tag id="peko" label="Peko-W" /><Tag id="tickner" label="Tickner" />
                  <Tag id="m1_2021" label="M1/2021" /><Tag id="schlieske" label="Schlieske" />
                  <Tag id="green" label="Green v Daniels" /><Tag id="m64" label="M64" />
                </div>
              </div>
              <div className="map-leaf-card big">
                <div className="map-leaf-h">{T.labels.reason}</div>
                <div className="map-leaf-tags">
                  <Tag id="li" label="Li" /><Tag id="stretton" label="Stretton" />
                  <Tag id="dua16" label="DUA16" />
                </div>
              </div>
            </div>
          </div>

          {/* OTHER — fact / law errors */}
          <div className="map-cell">
            <div className="map-node map-node-cat">
              <p className="map-node-title">{T.labels.factlaw}</p>
              <p className="map-node-cite">{KR ? '사실인정·법률 적용 오류' : 'fact-finding & legal errors'}</p>
            </div>
            <div className="map-trunk-mini" />
            <div className="map-leaf-stack">
              <div className="map-leaf-card">
                <div className="map-leaf-h">{T.labels.jfObj}</div>
                <div className="map-leaf-tags"><Tag id="enfield" label="Enfield" /><Tag id="m70" label="Pl M70" /></div>
              </div>
              <div className="map-leaf-card">
                <div className="map-leaf-h">{T.labels.jfState}</div>
                <div className="map-leaf-tags"><Tag id="szmds" label="SZMDS" /></div>
              </div>
              <div className="map-leaf-card">
                <div className="map-leaf-h">{T.labels.noEvidence}</div>
                <div className="map-leaf-tags"><span className="map-case-tag-static">s 5(1)(h) ADJR</span></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ════ W4-W5 — Materiality timeline ════ */}
      <SectionH which="materiality" />
      <div className="map-materiality-flow">
        <div className="map-mat-step">
          <div className="map-mat-year">2018</div>
          <div className="map-mat-h">Hossain</div>
          <div className="map-mat-tags"><Tag id="hossain" label="Hossain" /></div>
          <div className="map-mat-note">{KR ? '중요성을 JE 분석에 못박음' : 'Presumption introduced'}</div>
        </div>
        <div className="map-mat-arrow">→</div>
        <div className="map-mat-step">
          <div className="map-mat-year">2021</div>
          <div className="map-mat-h">MZAPC</div>
          <div className="map-mat-tags"><Tag id="mzapc" label="MZAPC" /></div>
          <div className="map-mat-note">{KR ? '입증책임은 원고에게' : 'Onus on applicant'}</div>
        </div>
        <div className="map-mat-arrow">→</div>
        <div className="map-mat-step">
          <div className="map-mat-year">2022</div>
          <div className="map-mat-h">Nathanson</div>
          <div className="map-mat-tags"><Tag id="nathanson" label="Nathanson" /></div>
          <div className="map-mat-note">{KR ? 'PF 사안은 문턱 낮음' : 'Low bar in PF context'}</div>
        </div>
        <div className="map-mat-arrow">→</div>
        <div className="map-mat-step active">
          <div className="map-mat-year">2024</div>
          <div className="map-mat-h">LPDT</div>
          <div className="map-mat-tags"><Tag id="lpdt" label="LPDT" /></div>
          <div className="map-mat-note">{KR ? '재구성 금지 — 추론적 접근 확정' : 'Inferential approach vindicated'}</div>
        </div>
      </div>
      <div className="marginalia map-note">{T.notes.materiality}</div>

      {/* ════ W10 — Constitutional limits ════ */}
      <SectionH which="w10const" />
      <div className="map-row-grid map-grid-2">
        <Block
          label={T.labels.privative}
          cases={[['s157','Pl S157'],['kirk-jurisdiction','Kirk']]}
          note={KR ? 'S157이 "결정"을 적법한 결정만 가리키도록 좁게 읽었다. Kirk가 주 차원 등가.' : 'S157 read "decision" down to mean lawful decision; Kirk for the State analogue.'}
        />
        <Block
          label={T.labels.noInval}
          cases={[['futuris','Futuris']]}
          note={KR ? 'Pt IVC TAA처럼 대체 다툴 길이 있으면 합헌. 의도적 위반은 늘 JE.' : 'Permissible where an alternative review path (Pt IVC TAA) exists. Conscious maladministration always remains JE.'}
        />
        <Block
          label={T.labels.secrecy}
          cases={[['graham','Graham']]}
          note={KR ? '법원이 자료에 처음부터(in limine) 접근조차 못 하면 무효. 법원 자신은 보는 비밀체계(Gypsy Jokers 등)와 구별.' : 'Invalid if the court is deprived of the material in limine. Contrast valid secrecy regimes where the court itself can see the material.'}
        />
        <Block
          label={T.labels.timeBar}
          cases={[['bodruddaza','Bodruddaza']]}
          note={KR ? '경직된 기간 제한도 실질적으로 s 75(v)를 빼앗으면 무효 — substance-and-degree.' : 'A rigid time bar can also fail the s 75(v) substance-and-degree test if it practically deprives review.'}
        />
      </div>
      <div className="map-row-grid map-grid-1" style={{marginTop:'10px'}}>
        <Block
          label={T.labels.alwaysJE}
          cases={[
            ['ebner','Ebner'],['enfield','Enfield'],['kirk-jurisdiction','Kirk'],
            ['s157','S157'],['futuris','Futuris'],
          ]}
          note={KR ? '편향 · Kirk 수준 PF · 관할권적 사실 · 최종 결정 비합리성 · 위임입법 무효 · 사기·뇌물·부정직·의도적 행정부정 — 이들은 어떤 조항으로도 막을 수 없다.' : 'Bias, Kirk-egregious PF, jurisdictional facts, final-decision unreasonableness, delegated-legislation invalidity, fraud / bribery / dishonesty / conscious maladministration — none of these can be foreclosed.'}
        />
      </div>
      <div className="marginalia map-note">{T.notes.w10}</div>

      {/* ════ W8-W9 — Remedies ════ */}
      <SectionH which="remedies" />
      <div className="map-row-grid map-grid-2">
        <Block
          label={T.labels.writs}
          cases={[
            ['bhardwaj','Bhardwaj'],['m174','Pl M174'],['pbs','PBS'],
          ]}
          note={T.notes.remedies}
        />
        <Block
          label={T.labels.declaration}
          cases={[['ainsworth','Ainsworth'],['m61','Pl M61']]}
          note={KR ? 'Certiorari가 막힌 자리(법적 효과 없는 보고서 등)에서 가능. M61은 외주 절차에도 declaration이 미친다는 예.' : 'Available where certiorari is not — e.g. reports without legal effect (Ainsworth). M61 extended declaration to outsourced processes.'}
        />
      </div>

      {/* ════ W11 — Alternative pathways ════ */}
      <SectionH which="w11alt" />
      <div className="map-row-grid map-grid-2">
        <Block
          label={T.labels.tribunals}
          cases={[['shi','Shi'],['frugtniet','Frugtniet'],['drake','Drake No 2']]}
          note={T.notes.tribunals}
        />
        <Block
          label={T.labels.beyond}
          cases={[]}
          note={T.notes.beyond}
        />
      </div>
    </section>
  );
}
window.FullMap = FullMap;

/* ─── Analytical flow — judicial review reasoning, step by step ──
   This view shows the JR problem-solving sequence (not the syllabus order).
   Where the path branches, each branch shows its key cases as chips. */
function AnalyticalFlow({ KR, onCase }) {
  // Shared chip helper (parallel to FullMap's Tag)
  const Tag = ({ id, label }) => {
    const c = window.CASES_DATA && window.CASES_DATA[id];
    const prInfo = window.CASE_PRIORITY && window.CASE_PRIORITY[id];
    const prClass = prInfo ? ' prio-' + prInfo.priority : '';
    if (!c) {
      return <span className={"map-case-tag missing"+prClass}><em>{label || id}</em></span>;
    }
    return (
      <button
        className={"map-case-tag"+prClass}
        title={c.cite + (prInfo ? ' · S' + prInfo.seminar + ' · ' + prInfo.priority : '')}
        onClick={(e) => { e.stopPropagation(); onCase && onCase(id); }}
      >
        <em>{label || c.name.replace(/^Plaintiff\s+/, 'Pl ')}</em>
      </button>
    );
  };

  // Compact case-name abbreviation for the tight horizontal tiles
  const shortName = (c, id) => {
    if (!c) return id;
    return c.name
      .replace(/^Plaintiff\s+/, 'Pl ')
      .replace(/^Minister for [^v]+v\s+/, '')
      .replace(/^Re Minister[^;]*;\s*Ex parte?\s+/i, '')
      .replace(/^Re\s+Minister[^;]*;\s*Ex p\.?\s+/i, '')
      .replace(/\s+v\s+(The Commonwealth|Commonwealth)$/i, '')
      .replace(/\s+\(.*\)$/, '');
  };

  // Per-case example row — clickable case name + short fact pattern, tinted by priority
  const CaseEx = ({ id, label, ex }) => {
    const c = window.CASES_DATA && window.CASES_DATA[id];
    const meta = window.CASE_META && window.CASE_META[id];
    const prInfo = window.CASE_PRIORITY && window.CASE_PRIORITY[id];
    const prClass = prInfo ? ' prio-' + prInfo.priority : '';
    const impClass = meta && meta.importance === 1 ? ' imp-1' : '';
    const name = label || shortName(c, id);
    return (
      <li className={"flow-ex-item" + prClass + impClass}>
        <button
          className="flow-ex-case"
          onClick={(e) => { e.stopPropagation(); c && onCase && onCase(id); }}
          title={c ? (c.cite + (prInfo ? ' · ' + prInfo.priority : '')) : ''}>
          <em>{name}</em>
        </button>
        <span className="flow-ex-sep"> — </span>
        <span className="flow-ex-text">{ex}</span>
      </li>
    );
  };

  // Step renderer — branches sit side-by-side; inside each branch, label on left, cases on right
  const Step = ({ n, h, sub, body, branches, note }) => (
    <div className="flow-step">
      <span className="flow-num">{n}</span>
      <div className="flow-body">
        <div className="flow-h">{h}</div>
        {sub && <p className="flow-sub">{sub}</p>}
        {body && <p className="flow-t">{body}</p>}
        {branches && branches.length > 0 && (
          <div className={"flow-branches flow-branches-cols-" + Math.min(branches.length, 3)}>
            {branches.map((b, i) => {
              const hasExamples = b.examples && b.examples.length > 0;
              return (
                <div key={i} className="flow-branch">
                  <div className="flow-branch-h">{b.label}</div>
                  <div className="flow-branch-body">
                    {hasExamples ? (
                      <ul className="flow-ex-list">
                        {b.examples.map(([id, ex], k) => (
                          <CaseEx key={id+'-'+k} id={id} ex={ex} />
                        ))}
                      </ul>
                    ) : (
                      (b.cases && b.cases.length > 0) && (
                        <div className="flow-branch-tags">
                          {b.cases.map((cid, j) => {
                            if (Array.isArray(cid)) return <Tag key={cid[0]+'-'+j} id={cid[0]} label={cid[1]} />;
                            return <Tag key={cid+'-'+j} id={cid} />;
                          })}
                        </div>
                      )
                    )}
                    {b.note && <p className="flow-branch-note">{b.note}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {note && <p className="flow-note marginalia">{note}</p>}
      </div>
    </div>
  );

  const Arrow = () => <div className="flow-arrow" aria-hidden>↓</div>;

  return (
    <section className="map-page flow-page">

      {/* Step 1: Start */}
      <Step n="①"
        h={KR ? '시작 — 무엇이 다투어지나' : 'Start — what is being challenged?'}
        sub={KR ? '결정인가, 위임입법인가, 양쪽인가' : 'Decision, delegated legislation, or both'}
        branches={[
          { label: KR ? '행정 결정 / 행위' : 'Administrative decision / conduct',
            cases: ['bond','tang','quin'],
            examples: KR ? [
              ['bond','방송 면허 적합성 평가 — 결정 vs 단순 행위 구분'],
              ['tang','대학 박사과정 종료 — "수권법에 따른" 결정인가'],
              ['quin','지방판사 재임용 거부 — 합법성 vs 본안 구분선'],
            ] : [
              ['bond','Broadcasting licence fitness review — decision vs conduct'],
              ['tang','PhD candidate termination — "under enactment"?'],
              ['quin','Magistrate not reappointed — legality vs merits line'],
            ],
            note: KR ? '→ Step 2로 가서 관할 결정' : '→ Continue to Step 2 for jurisdiction' },
          { label: KR ? '위임입법 (regulation, determination)' : 'Delegated legislation',
            cases: ['mceldowney','vanstone','evans','coco','pbs'],
            examples: KR ? [
              ['mceldowney','북아일랜드 공공행진 금지 규정 — 3단계 첫 적용'],
              ['vanstone','ATSIC 해산 규정 — 비례성 검토'],
              ['evans','WYD2008 "annoyance" 규정 — 합법성 추정으로 무효'],
            ] : [
              ['mceldowney','NI public processions reg — first 3-stage test'],
              ['vanstone','ATSIC dissolution reg — proportionality'],
              ['evans','WYD2008 "annoyance" reg — invalid under legality presumption'],
            ],
            note: KR ? '→ McEldowney 3단계로 별도 분석. ADJR 불가, s 39B(1)로.' : '→ Run McEldowney three-step separately. ADJR excluded; use s 39B(1).' },
        ]}
      />
      <Arrow />

      {/* Step 2: Jurisdiction */}
      <Step n="②"
        h={KR ? '관할 — 어느 법원, 어느 경로' : 'Jurisdiction — which forum, which channel'}
        branches={[
          { label: 'ADJR Act',
            cases: ['bond','tang','fuller','neat','datafin'],
            examples: KR ? [
              ['bond','Bond — 어느 단계가 "결정"이고 어느 게 그저 "행위"인지'],
              ['tang','Tang — 대학 절차는 수권법에 "근거" 안 함 → ADJR 밖'],
              ['neat','NEAT — 민영화된 AWB에 ADJR 미치지 않음'],
              ['datafin','Datafin은 영국 기능적 접근 — 호주는 미채택'],
            ] : [
              ['bond','Bond — which stage is a decision vs mere conduct'],
              ['tang','Tang — university process not "under" enactment → out'],
              ['neat','NEAT — privatised AWB not amenable to ADJR'],
              ['datafin','Datafin — UK functional test NOT adopted in Australia'],
            ],
            note: KR ? 'Bond + Tang 관문 통과 필요. 위임입법은 ADJR 불가.' : 'Must clear Bond + Tang gateway. Excluded for delegated legislation.' },
          { label: 's 39B(1) Judiciary Act / s 75(v) Constitution',
            cases: ['s157','m61','m68'],
            examples: KR ? [
              ['s157','Migration Act 배제조항 시도 → s 75(v)는 못 막음'],
              ['m61','역외 신청자 평가 절차에도 헌법 영장 미침'],
              ['m68','Nauru 처리 — 영연방 공무원이 결정한 한 s 75(v) 가능'],
            ] : [
              ['s157','Migration Act privative clause cannot defeat s 75(v)'],
              ['m61','Offshore RSA process still reached by constitutional writs'],
              ['m68','Nauru — Cth officer decision = s 75(v) handle'],
            ],
            note: KR ? '영연방 공무원. ADJR이 막히면 여기로.' : 'Cth officer. Pivot here when ADJR is blocked.' },
          { label: KR ? '주(州) 대법원 감독관할' : 'State Supreme Court supervisory',
            cases: ['kirk-jurisdiction','forge'],
            examples: KR ? [
              ['kirk-jurisdiction','산업법원의 JE 다툼 — 주 대법원의 감독관할은 헌법적 최소선'],
              ['forge','NSW 대행 판사 임용 — 주 대법원의 "defining characteristic" 보호'],
            ] : [
              ['kirk-jurisdiction','Industrial Court JE — State SC supervisory is a constitutional floor'],
              ['forge','NSW acting judges — defining characteristic of State SCs preserved'],
            ],
            note: KR ? 'NSW에는 ADJR 등가 없음. Kirk가 보호.' : 'No ADJR equivalent in NSW; Kirk entrenches.' },
        ]}
      />
      <Arrow />

      {/* Step 3: Standing */}
      <Step n="③"
        h={KR ? '원고적격 (standing)' : 'Standing'}
        sub={KR ? '신청인의 이해가 일반 시민을 넘어서나' : 'Is the applicant\'s interest more than ordinary public?'}
        branches={[
          { label: KR ? 'ACF 기본선' : 'ACF baseline',
            cases: ['acf','rtl'],
            examples: KR ? [
              ['acf','환경단체가 광산 승인에 도전 — "special interest" 기준 정립'],
              ['rtl','RU-486 등록에 대한 도덕적 반대 — 단순 이념은 부족'],
            ] : [
              ['acf','Environmental NGO challenging mining approval — special interest test'],
              ['rtl','RU-486 registration opposed on moral grounds — ideology insufficient'],
            ],
            note: KR ? '단순한 지적·도덕적 관심은 부족 (RTL).' : 'Pure ideological / moral concern is insufficient (RTL).' },
          { label: KR ? '확장 케이스' : 'Extensions',
            cases: ['onus','northcoast','batemans','argos','animals_angels'],
            examples: KR ? [
              ['onus','신성한 부지의 문화적 수호자 — Aboriginal 원고에 적격 인정'],
              ['northcoast','산림 보전 — 정부가 자문기관으로 인정한 단체는 적격'],
              ['batemans','법률서비스 시장의 경쟁자 — 경제적 이해도 special interest'],
              ['argos','쇼핑센터 약국 면허 — 상업적 경쟁자 적격'],
              ['animals_angels','생체수출 — 외국 enforcement 단체의 적격은 부정'],
            ] : [
              ['onus','Cultural custodians of sacred site — Aboriginal applicants have standing'],
              ['northcoast','Forest conservation — gov-recognised advocacy body qualifies'],
              ['batemans','Legal services market — commercial competitor has special interest'],
              ['argos','Pharmacy approval — competitor standing'],
              ['animals_angels','Live export — foreign-focus enforcement body denied standing'],
            ],
            note: KR ? '문화·수호 / 옹호단체 / 상업적 경쟁자 / 외국 enforcement.' : 'Cultural custodianship / advocacy / commercial competitor / enforcement.' },
        ]}
      />
      <Arrow />

      {/* Step 4: Hossain Stage 1 — Power + Conditions */}
      <Step n="④"
        h={KR ? 'Hossain 1단계 — 권한 + 조건' : 'Hossain Stage 1 — power + conditions'}
        sub={KR ? '의회가 무엇을 줬고, 무엇을 조건으로 걸었나' : 'What did Parliament confer, and what did it condition?'}
        branches={[
          { label: KR ? '명시적 조건' : 'Express conditions',
            cases: ['hossain'],
            examples: KR ? [
              ['hossain','Tribunal Act s 422B — "코드" 조항이 PF를 대체한다고 본 자리'],
            ] : [
              ['hossain','Tribunal Act s 422B — code provision treated as exhausting PF'],
            ],
            note: KR ? '"if satisfied that…", 기간, 절차 등 법령 본문에서.' : '"if satisfied that…", time limits, procedural reqs from statute text.' },
          { label: KR ? '묵시적 조건' : 'Implied conditions',
            cases: ['coco','kioa','saeed'],
            examples: KR ? [
              ['coco','도청장비 설치 — 기본권 침해엔 분명한 문언 필요(합법성 추정)'],
              ['kioa','통가 가족 추방 — 불리한 자료는 사전 공개 필요(PF 기본 추정)'],
              ['saeed','역외 신청자에 대한 사기 인정 — 미공개가 권한 부정'],
            ] : [
              ['coco','Listening device installation — fundamental rights need clear words'],
              ['kioa','Tongan family deportation — adverse material must be disclosed'],
              ['saeed','Offshore fraud finding undisclosed — power denied'],
            ],
            note: KR ? 'Coco — 기본권 침해는 명시 문언 필요. Kioa — PF 기본 추정. Saeed — 배제하려면 분명한 문언.' : 'Coco (legality), Kioa (PF default), Saeed (clear words to exclude).' },
        ]}
      />
      <Arrow />

      {/* Step 5: Hossain Stage 2 — PBS */}
      <Step n="⑤"
        h={KR ? 'Hossain 2단계 — PBS' : 'Hossain Stage 2 — PBS'}
        sub={KR ? '권한이 적법하게 발동되어 범위 안에서 행사됐나' : 'Did the power lawfully arise and stay within bounds?'}
        branches={[
          { label: KR ? 'Precondition — 권한 발동 전제' : 'Precondition — must exist for power to arise',
            cases: ['enfield','m70','szmds'],
            examples: KR ? [
              ['enfield','S Aus 토지 구획 — 객관적 사실 요건은 법원이 재심사'],
              ['m70','말레이시아 송환 합의 — Malaysia가 "보호국" 요건 미충족 → 권한 무'],
              ['szmds','"real chance" — 주관적 만족이지만 비합리성 통제 가능'],
            ] : [
              ['enfield','S Aus zoning — court reviews objective jurisdictional facts itself'],
              ['m70','Malaysia swap — country did not meet protection criterion → no power'],
              ['szmds','"real chance" — subjective satisfaction still subject to unreasonableness'],
            ],
            note: KR ? '관할권적 사실 — Enfield(객관적), SZMDS(주관적). 미충족 = 권한 없음.' : 'Jurisdictional facts. If unmet → power never arose.' },
          { label: KR ? 'Breadth — 권한이 미치는 범위' : 'Breadth — reach of the power',
            cases: ['vanstone','evans'],
            examples: KR ? [
              ['vanstone','ATSIC 해산 — 위임의 범위 안인가, 비례성으로 따짐'],
              ['evans','WYD 행사 "annoyance" 규정 — 위임 범위 초과로 무효'],
            ] : [
              ['vanstone','ATSIC dissolution — within reach, tested by proportionality'],
              ['evans','WYD "annoyance" reg — outside reach, struck down'],
            ],
            note: KR ? '범위 초과 = ultra vires.' : 'Outside reach = ultra vires.' },
          { label: KR ? 'Scope — 허용된 목적' : 'Scope — permitted purposes',
            cases: ['schlieske','murphyores'],
            examples: KR ? [
              ['schlieske','추방을 "사실상 인도"로 사용 — 지배적 목적이 수권법 밖'],
              ['murphyores','광물 수출 금지 — 환경 정책 고려도 목적 범위 안'],
            ] : [
              ['schlieske','Deportation used as de facto extradition — dominant purpose outside scope'],
              ['murphyores','Mineral export ban — environmental policy within scope'],
            ],
            note: KR ? '목적 밖 = 부적절 목적(Schlieske). 다만 장관은 정책 고려의 폭이 넓음(Murphyores).' : 'Outside purpose = improper purpose; but Ministers have wider policy scope.' },
          { label: KR ? 'Project Blue Sky — 무효 의도?' : 'Project Blue Sky — invalidity intent?',
            cases: ['pbs'],
            examples: KR ? [
              ['pbs','ABA의 오스트레일리아 콘텐츠 기준 — 위반해도 결정 자체는 유효'],
            ] : [
              ['pbs','ABA Australian content standard — breach did not invalidate the standard'],
            ],
            note: KR ? '위반이 무효를 의도했는지를 묻는 자리.' : 'Did Parliament intend breach to invalidate?' },
        ]}
      />
      <Arrow />

      {/* Step 6: Hossain Stage 3 — Sub-grounds */}
      <Step n="⑥"
        h={KR ? 'Hossain 3단계 — 사유 분석' : 'Hossain Stage 3 — sub-grounds'}
        sub={KR ? '어느 사유가, 어떻게 위반됐나' : 'Which sub-ground breached, and how?'}
        branches={[
          { label: KR ? '관련 고려사항 (Peko framework)' : 'Relevant considerations',
            cases: ['peko','tickner','m1-2021','sean','wushan','yusuf'],
            examples: KR ? [
              ['peko','Kakadu 광산 — 새로 들어온 자료를 장관이 보지 않음'],
              ['tickner','Hindmarsh Bridge — 장관이 보고서를 직접 읽지 않음'],
              ['m1-2021','캐릭터 취소 — 부양 자녀 이익을 의무 고려에 포함'],
              ['sean','부동산 평가 — 가중치는 결정자 몫, 법원 개입 자제'],
            ] : [
              ['peko','Kakadu mining — Minister did not see new representations'],
              ['tickner','Hindmarsh Bridge — Minister failed to read the report personally'],
              ['m1-2021','Character cancellation — best interests of children mandatory'],
              ['sean','Property valuation — weight is for decision-maker'],
            ],
            note: KR ? 'Sean — 가중치는 결정자 몫. Wushan — 이유서 미세 분석 안 함. Yusuf — JE 성격 확인.' : 'Sean — weight is for DM. Wushan — not astute. Yusuf — confirms JE character.' },
          { label: KR ? '부적절한 목적' : 'Improper purpose',
            cases: ['schlieske'],
            examples: KR ? [
              ['schlieske','추방 권한이 사실상 인도 수단으로 사용 — 지배적 목적이 밖'],
            ] : [
              ['schlieske','Deportation power used as de facto extradition — dominant purpose outside'],
            ],
            note: KR ? '지배적 목적이 수권법 밖.' : 'Dominant purpose outside statutory scope.' },
          { label: KR ? '절차적 공정 — 청문 규칙' : 'PF — hearing rule',
            cases: ['kioa','saeed','veal','wzarh','nathanson','annetts','lam','oshea'],
            examples: KR ? [
              ['kioa','통가 가족 추방 — 불리한 자료(파일 노트) 미공개'],
              ['saeed','역외 신청자의 사기 인정 — 답변 기회 없음'],
              ['veal','익명 제보 — 핵심 내용은 공개해야'],
              ['wzarh','심리관 도중 교체 — 절차 변경 미고지'],
              ['nathanson','부르지 않은 새 사실 인정 — PF + materiality 낮은 문턱'],
              ['annetts','검시 — 사망자 가족도 PF 보호'],
              ['oshea','사면권 — 이후 절차로 치유 불가'],
            ] : [
              ['kioa','Tongan family deportation — adverse file notes not disclosed'],
              ['saeed','Offshore fraud finding — no chance to respond'],
              ['veal','Anonymous letter — substance must be disclosed'],
              ['wzarh','Mid-process change of reviewer — process change not flagged'],
              ['nathanson','Uncalled adverse finding — PF + low materiality bar'],
              ['annetts','Coronial inquest — family deserves PF too'],
              ['oshea','Pardon — earlier breach not cured by later steps'],
            ],
            note: KR ? '기본 추정 → 불리한 자료 공개 → 답변 기회. O\'Shea — 다른 절차로 치유 불가.' : 'Default presumption → disclose adverse material → opportunity to respond.' },
          { label: KR ? '편향 (Ebner 2단계)' : 'Bias (Ebner double-step)',
            cases: ['ebner','jia','isbester','cny17','hotholdings'],
            examples: KR ? [
              ['ebner','판사가 당사자 회사 주식 보유 — 2단계 테스트 정립'],
              ['jia','장관 TV 인터뷰 — 사전 마음굳힘 시사하는 발언'],
              ['isbester','PEMC 위원이 사전 수사도 맡음 — 역할 중첩'],
              ['cny17','장관 보좌관이 회람한 자료 — 외형적 편향'],
              ['hotholdings','광산 로비스트의 가족 — 외부인 합리적 우려'],
            ] : [
              ['ebner','Judge held shares in party company — two-step test'],
              ['jia','Minister TV interview — statements suggesting predisposition'],
              ['isbester','PEMC member also led prior investigation — overlapping roles'],
              ['cny17','Ministerial adviser circulated materials — apparent bias'],
              ['hotholdings','Family of mining lobbyist — fair-minded observer concern'],
            ],
            note: KR ? '항상 JE — materiality 우회.' : 'Always-JE — bypasses materiality.' },
          { label: KR ? '비합리성' : 'Unreasonableness',
            cases: ['wednesbury','li','stretton','dua16','chk16','singh','szvfw','szai'],
            examples: KR ? [
              ['wednesbury','일요일 영화관 영업 조건 — 고전적 비합리성 기준'],
              ['li','심리 연기 거부 — "evident and intelligible justification" 없음'],
              ['stretton','트럭 면허 — 처벌적 결정의 비합리성'],
              ['dua16','추방 결정 단계 — 절차적 불합리성'],
              ['chk16','극단적 상황 — Wednesbury 문턱 초과'],
              ['singh','어머니 호주 거주 vs 추방 — 영향 형량 실패'],
            ] : [
              ['wednesbury','Sunday cinema condition — classical irrationality test'],
              ['li','Adjournment refused — no evident and intelligible justification'],
              ['stretton','Truck licence — punitive decision held unreasonable'],
              ['dua16','Deportation step — procedural unreasonableness'],
              ['chk16','Extreme circumstances — Wednesbury threshold crossed'],
              ['singh','Mother in Australia vs deportation — weighing failure'],
            ],
            note: KR ? 'Wednesbury → Li("evident and intelligible justification") → DUA16 절차적, CHK16 extreme circumstances.' : 'Wednesbury → Li → DUA16/CHK16 extreme circumstances.' },
        ]}
      />
      <Arrow />

      {/* Step 7: Materiality */}
      <Step n="⑦"
        h={KR ? 'Materiality — 결과를 바꿨을까' : 'Materiality — could outcome have differed?'}
        sub={KR ? '"realistic possibility" 기준. 위반이 있어도 결과를 바꿀 수 없었다면 JE 아님.' : '"Realistic possibility" standard. No JE if outcome could not have differed.'}
        branches={[
          { label: KR ? 'Always-JE 우회' : 'Always-JE bypass',
            cases: ['ebner','enfield','kirk-jurisdiction'],
            examples: KR ? [
              ['ebner','편향 — 외형만으로도 JE, 결과 영향 따질 필요 없음'],
              ['enfield','객관적 관할권적 사실 — 미충족 자체가 권한 부정'],
              ['kirk-jurisdiction','수권 범위 자체를 잘못 본 사안 — 항상 JE'],
            ] : [
              ['ebner','Bias — appearance alone is JE, no outcome inquiry'],
              ['enfield','Objective jurisdictional fact — unmet = no power'],
              ['kirk-jurisdiction','Misconception of own jurisdiction — always JE'],
            ],
            note: KR ? '편향 · Kirk-PF · 관할권적 사실 · 최종 결정 비합리성 · 위임입법 무효 — materiality 단계 없음.' : 'Bias / Kirk-PF / JF / final-decision unreasonableness / delegated leg invalidity — no materiality step.' },
          { label: KR ? '통상 materiality 적용' : 'Standard materiality',
            cases: ['hossain','mzapc','lpdt','nathanson','stead'],
            examples: KR ? [
              ['hossain','통역 오류 — 결과를 바꿀 realistic possibility가 있었나'],
              ['mzapc','입증책임은 원고에게 — 가능성을 보여야 함'],
              ['lpdt','비자 취소 — 결정 과정을 사후 재구성해서는 안 됨'],
              ['nathanson','PF 사안 — 문턱이 낮음, 다른 답이 있을 수 있었으면 충분'],
              ['stead','"no easy task" — 결과가 같았을 거라 단정 어려움'],
            ] : [
              ['hossain','Interpreter error — was a different outcome realistically possible'],
              ['mzapc','Onus is on applicant — must show possibility'],
              ['lpdt','Visa cancellation — no post-hoc reconstruction of reasoning'],
              ['nathanson','PF context — low bar, enough that response could have differed'],
              ['stead','"No easy task" to be sure outcome would have been the same'],
            ],
            note: KR ? 'Hossain → MZAPC(원고 입증책임) → LPDT(재구성 금지) → Nathanson(PF 낮은 문턱). Stead — "no easy task".' : 'Hossain → MZAPC (applicant onus) → LPDT (no reconstruction) → Nathanson (low PF bar).' },
        ]}
      />
      <Arrow />

      {/* Step 8: Constitutional safety nets */}
      <Step n="⑧"
        h={KR ? '헌법적 안전망 — 입법으로 막혔나' : 'Constitutional safety net — has Parliament blocked review?'}
        sub={KR ? '배제·no-invalidity·비밀·시간 제한 — substance-and-degree 테스트' : 'Privative / no-invalidity / secrecy / time bar — substance-and-degree test'}
        branches={[
          { label: KR ? '배제조항' : 'Privative clause',
            cases: ['s157','kirk-jurisdiction','hickman'],
            examples: KR ? [
              ['s157','Migration Act privative clause — "결정"은 적법한 결정만 의미한다고 좁게 읽음'],
              ['kirk-jurisdiction','산업법원 배제조항 — 주 대법원 감독관할 침해로 무효'],
              ['hickman','전시 규정 — impossibility 원칙의 시조'],
            ] : [
              ['s157','Migration Act privative clause — "decision" read down to lawful decisions'],
              ['kirk-jurisdiction','Industrial Court privative — defeated by State SC supervisory jurisdiction'],
              ['hickman','Wartime regs — origin of the impossibility principle'],
            ],
            note: KR ? 'S157 — 좁게 읽어 적법한 결정만 가리킴. Hickman impossibility 원칙이 토대.' : 'S157 reads down to lawful decisions only. Hickman impossibility principle as foundation.' },
          { label: 'No-invalidity (Futuris)',
            cases: ['futuris','fjbloemen','maccormick'],
            examples: KR ? [
              ['futuris','조세 평가 — Pt IVC가 대체 경로 제공 → 합헌'],
              ['fjbloemen','과거 입장 — Futuris가 사실상 overrule'],
              ['maccormick','조세 incontestability 금지 — 헌법적 한계'],
            ] : [
              ['futuris','Tax assessment — Pt IVC alternative path made the clause valid'],
              ['fjbloemen','Earlier position effectively overruled by Futuris'],
              ['maccormick','Tax cannot be made incontestable — constitutional limit'],
            ],
            note: KR ? 'Pt IVC가 대체 경로 제공하면 합헌. 의도적 위반은 늘 JE(FJ Bloemen overrule). 조세 incontestability 금지(MacCormick).' : 'Valid if alternative review (Pt IVC) exists. Conscious maladministration always JE. Tax cannot be incontestable.' },
          { label: KR ? '비밀조항 (Graham)' : 'Secrecy clause (Graham)',
            cases: ['graham','gypsy_jokers','sankey'],
            examples: KR ? [
              ['graham','범죄정보로 비자 취소 — 법원이 in limine으로 자료 못 봄 → 무효'],
              ['gypsy_jokers','경찰 비밀자료 — 법원 자신은 볼 수 있어 합헌'],
              ['sankey','내각 문서 PII — 공익 비교형량은 법원이'],
            ] : [
              ['graham','Criminal intel visa cancel — court deprived in limine → invalid'],
              ['gypsy_jokers','Police criteria — valid since court itself can see material'],
              ['sankey','Cabinet docs PII — public-interest balancing is for the court'],
            ],
            note: KR ? '법원이 처음부터 자료 못 보면 무효(Graham). 법원 자신은 볼 수 있으면 합헌(Gypsy Jokers). PII는 법원이 비교형량(Sankey).' : 'Invalid if court deprived in limine. Valid if court itself can use info. PII: court weighs.' },
          { label: KR ? '경직된 시간 제한' : 'Inflexible time bar',
            cases: ['bodruddaza'],
            examples: KR ? [
              ['bodruddaza','이민 결정 28일 절대 차단 — 무효 사유 수용 안 함 → 무효'],
            ] : [
              ['bodruddaza','28-day absolute bar on migration decisions — no escape valve → invalid'],
            ],
            note: KR ? '무효 사유를 수용 못 하는 일률적 차단은 무효.' : 'Blanket bar failing to accommodate vitiating circumstances is invalid.' },
          { label: KR ? 'Always-JE 바닥선' : 'Always-JE floor',
            cases: ['s157','futuris'],
            examples: KR ? [
              ['s157','사기·뇌물·부정직 — 어떤 조항도 막을 수 없음'],
              ['futuris','의도적 행정부정은 늘 JE — Pt IVC와 별개'],
            ] : [
              ['s157','Fraud / bribery / dishonesty — no clause can foreclose'],
              ['futuris','Conscious maladministration always JE — independent of Pt IVC'],
            ],
            note: KR ? '사기 · 뇌물 · 부정직 · 의도적 행정부정 · 부적절한 목적 — 어떤 조항으로도 막을 수 없음.' : 'Fraud / bribery / dishonesty / conscious maladministration / improper purpose — never foreclosed.' },
        ]}
      />
      <Arrow />

      {/* Step 9: Remedies */}
      <Step n="⑨"
        h={KR ? '구제 — 무엇을 받을 것인가' : 'Remedies — what to ask for'}
        branches={[
          { label: KR ? '헌법적 writ' : 'Constitutional writs',
            cases: ['bhardwaj','m174','pbs'],
            examples: KR ? [
              ['bhardwaj','RRT가 JE로 결정 → 처음부터 결정이 아니라 본인이 재결정 가능'],
              ['m174','난민 신청 미처리 — mandamus로 결정 강제'],
              ['pbs','Cert + Mand 결합의 전형'],
            ] : [
              ['bhardwaj','RRT JE → "no decision at all", redecision possible'],
              ['m174','Failure to determine refugee claim — mandamus compelled decision'],
              ['pbs','Classic Cert + Mand pairing'],
            ],
            note: KR ? 'Cert(무효) + Mand(재결정 명령) + Prohibition(금지). Bhardwaj — JE 결정은 처음부터 무효.' : 'Cert + Mand + Prohibition. Bhardwaj: JE decision is no decision at all.' },
          { label: 'Declaration / Injunction',
            cases: ['ainsworth','m61'],
            examples: KR ? [
              ['ainsworth','범죄정의위원회 보고서 — 법적 효과 없어도 declaration 가능'],
              ['m61','역외 평가 절차 — 외주 절차에도 declaration 미침'],
            ] : [
              ['ainsworth','Criminal Justice Comm report — declaration despite no legal effect'],
              ['m61','Offshore RSA — declaration reached outsourced process'],
            ],
            note: KR ? '법적 효과 없는 행위에도 가능(Ainsworth). Cert가 막힌 자리.' : 'Available even where certiorari fails (Ainsworth).' },
          { label: KR ? '재량적 거부' : 'Discretionary refusal',
            cases: ['glennan','rembcbain'],
            examples: KR ? [
              ['glennan','조세 사안 — Pt IVC 대체 경로 있어 재량적 거부'],
              ['rembcbain','IVF 사안 — 적격성 등 다른 이유로 재량적 거부'],
            ] : [
              ['glennan','Tax — Pt IVC alternative led to discretionary refusal'],
              ['rembcbain','IVF case — discretionary refusal on standing-adjacent grounds'],
            ],
            note: KR ? '대체 구제(Pt IVC, ART)가 있으면 법원이 재량으로 거부 가능.' : 'Court may withhold relief where adequate alternative exists.' },
        ]}
      />
      <Arrow />

      {/* Step 10: Alternative path — Merits review */}
      <Step n="⑩"
        h={KR ? '대안 경로 — 본안 재심사 (ART)' : 'Alternative — merits review (ART)'}
        sub={KR ? '결정을 다시 받고 싶다면 사법심사가 아니라 ART로' : 'When the applicant wants the decision re-made, not just reviewed'}
        branches={[
          { label: KR ? 'ART (2024년 10월~)' : 'ART (from Oct 2024)',
            cases: ['shi','frugtniet','drake'],
            examples: KR ? [
              ['shi','측량사 자격 — Tribunal은 결정 당시가 아닌 재심사 시점의 사실로'],
              ['frugtniet','이민 사건 — Tribunal도 본안에서 법적 제약(증거법 등)을 따름'],
              ['drake','대마 사건 No 2 — Tribunal도 정책을 따르되 사안에 따라 이탈 가능'],
            ] : [
              ['shi','Land surveyor — Tribunal decides on facts at time of review, not original decision'],
              ['frugtniet','Migration — Tribunal still bound by legal limits (evidence rules etc.)'],
              ['drake','Cannabis case No 2 — Tribunal applies policy but can depart on the facts'],
            ],
            note: KR ? 'Shi — 시점. Frugtniet — 법적 제약. Drake No 2 — 정책 framework.' : 'Shi (time). Frugtniet (legal limits). Drake No 2 (policy framework).' },
          { label: KR ? '법원 밖의 길 — "청렴 부문"' : 'Beyond courts — "integrity branch"',
            cases: [],
            note: KR ? '옴부즈만(Ombudsman Act 1976) — maladministration 기준, 권고만 · Robodebt가 한계 동시에 보여줌. 의회 — 답할 의무지만 형식적 권한 없음; 감사원장은 의회 공무원 보호. FOI(FOI Act 1982) — 공개 추정 + s 11B 공익 테스트; 강한 면제(s 33/34/37/38) vs 조건부(s 47C 심의·s 47F 사생활 — 최다 주장).' : 'Ombuds (Ombudsman Act 1976) — maladministration basis, recommend only · Robodebt shows the limits. Parliament — answerable but no formal authority; the Auditor-General has officer-of-parliament protection. FOI (FOI Act 1982) — pro-disclosure presumption + s 11B public interest test; hard exemptions (s 33/34/37/38) vs conditional (s 47C deliberative, s 47F personal privacy — the most-claimed).' },
        ]}
      />

      <div className="flow-end">
        <span className="flow-end-tag">{KR ? '여기까지가 한 사이클' : 'End of one analytical cycle'}</span>
      </div>
    </section>
  );
}
window.AnalyticalFlow = AnalyticalFlow;

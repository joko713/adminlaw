/* Exam preparation mode — patterns, IF/THEN trees, criteria, mock plan, pairings, HIRAC */
const E = window.EXAM_DATA;

function ExamMode({ lang, onCase }) {
  const [tab, setTab] = React.useState('patterns');
  const T = window.I18N[lang];
  const tabs = lang === 'kr'
    ? [['patterns','패턴'],['feedback','답안 피드백'],['topics','5대 토픽'],['trees','IF / THEN'],['criteria','채점 기준'],['hirac','HIRAC'],['plan','학습 플랜'],['pairings','케이스 페어링']]
    : [['patterns','Patterns'],['feedback','Answer feedback'],['topics','Five topics'],['trees','IF / THEN'],['criteria','Criteria'],['hirac','HIRAC'],['plan','Plan'],['pairings','Pairings']];
  return (
    <div className="page exam-page">
      <p className="eyebrow">{lang==='kr'?'파이널 시험 대비':'final-exam preparation'}</p>
      <h1 className="page-title">{lang==='kr'?'시험 모드':'Exam mode'}</h1>
      <p className="lede">{lang==='kr'?'2020 – 2023 4년치 분석 + 채점 기준 + 6월 4일 시험을 향한 4주 플랜.':'Four years (2020 – 2023) distilled, mapped to marking criteria, on a four-week ramp to 4 June.'}</p>

      <div className="tabs">
        {tabs.map(([id, label]) => (
          <button key={id} className={"tab-btn"+(tab===id?' active':'')} onClick={()=>setTab(id)}>{label}</button>
        ))}
      </div>

      {tab==='patterns' && <ExamPatterns lang={lang}/>}
      {tab==='feedback' && <window.ExamFeedback lang={lang}/>}
      {tab==='topics'   && <ExamTopics  lang={lang}/>}
      {tab==='trees'    && <ExamTrees   lang={lang} onCase={onCase}/>}
      {tab==='criteria' && <ExamCriteria lang={lang}/>}
      {tab==='hirac'    && <ExamHirac   lang={lang}/>}
      {tab==='plan'     && <ExamPlan    lang={lang}/>}
      {tab==='pairings' && <ExamPairings lang={lang}/>}
    </div>
  );
}

function ExamPatterns({ lang }) {
  const f = E.format[lang];
  const KR = lang === 'kr';
  return <div className="exam-section">
    {/* ── 2026 confirmed format — from the W10 seminar ── */}
    <div className="exam-notice">
      <div className="exam-notice-h">
        <span className="exam-notice-tag">{KR ? '확정 · 2026년 6월 4일' : 'Confirmed · 4 June 2026'}</span>
        <span className="exam-notice-title">{KR ? '시험 포맷 (강의 안내)' : 'Exam format (from lecture)'}</span>
      </div>
      <ul className="exam-notice-list">
        <li><strong>{KR ? '시간' : 'Duration'}</strong> — {KR ? '3시간 (이전보다 길어졌어 — 예전 방식으로 복귀) + reading time' : '3 hours (back to the old length) + reading time'}</li>
        <li><strong>Part A · 60</strong> — {KR ? 'Problem question · 3 sub-questions' : 'Problem question · 3 sub-questions'}</li>
        <li><strong>Part B · 40</strong> — {KR ? '3개의 argumentative/analytical 문항: 1×20점 + 2×10점 (예전 2 essays 형식 폐지)' : '3 argumentative questions: 1 × 20 marks + 2 × 10 marks (no more two-essay format)'}</li>
        <li><strong>{KR ? '범위' : 'Scope'}</strong> — {KR ? 'W1–W12 전부 examinable. Delegated legislation, political accountability(W1) 포함. Mid-sem에서 다룬 LPDT 등도 재출제 가능.' : 'W1–W12 all examinable, including delegated legislation and political accountability (W1). Cases from mid-sem (e.g. LPDT) may recur.'}</li>
        <li><strong>{KR ? 'AAT → ART' : 'AAT → ART'}</strong> — {KR ? 'basic powers 동일. AAT case law(Shi · Frugtniet · Drake No 2)는 ART에 그대로 적용. 새 입법 직접 읽을 필요 없음 — section numbers 는 별도 정리되어 제공됨.' : 'Basic powers identical. AAT case law (Shi, Frugtniet, Drake No 2) carries over. Updated section numbers will be distributed.'}</li>
        <li className="exam-notice-em"><strong>{KR ? '채점 배점' : 'Mark allocation'}</strong> — {KR ? 'Canvas 에 시험 전 indicative allocation 게시 예정.' : 'Indicative allocation will be posted on Canvas before the exam.'}</li>
      </ul>
    </div>

    {/* ── HD 차별화 포인트 — W10 seminar ── */}
    <div className="exam-hd">
      <div className="exam-hd-h">{KR ? 'HD 차별화 — 강의에서 강조된 8가지' : 'HD differentiators — 8 lecture-grade moves'}</div>
      <ol className="exam-hd-list">
        <li>
          <span className="exam-hd-n">01</span>
          <div>
            <p className="exam-hd-t">{KR ? '순수 IRAC 피하기' : 'Avoid pure IRAC'}</p>
            <p className="exam-hd-w">{KR ? '순수 IRAC("rule을 진공에서 추출 → apply")는 회의적으로 봐야 함. Rule 자체를 statutory context 에서 argue 해서 도출해야 함 — 특히 PF. VEAL: "PF의 내용은 statutory context 에 modulated".' : 'Be sceptical of vacuum-extracted rules. The rule itself must be argued out of the statutory context — especially in PF. VEAL: PF\'s content is \"very much modulated to the statutory context.\"'}</p>
          </div>
        </li>
        <li>
          <span className="exam-hd-n">02</span>
          <div>
            <p className="exam-hd-t">{KR ? 'ADJR ↔ s 39B parallel 분석 생략' : 'Drop parallel s 39B when ADJR applies'}</p>
            <p className="exam-hd-w">{KR ? 'ADJR 이 적용되면 그것만으로 풀어라. s 5(1)(j) catch-all 로 거의 모든 JE species 진입 가능. s 5(1)(f) 만 명시적 non-JE ground.' : 'When ADJR applies, run only ADJR — no parallel s 39B. s 5(1)(j) is the catch-all for nearly every JE species. s 5(1)(f) is the one explicit non-JE ground.'}</p>
          </div>
        </li>
        <li>
          <span className="exam-hd-n">03</span>
          <div>
            <p className="exam-hd-t">{KR ? 'Privative clause — S157 obiter 활용' : 'Privative clauses — wield the S157 postscript'}</p>
            <p className="exam-hd-w">{KR ? 'S157 의 postscript 는 obiter 이지만 헌법적 경고. Groom\'s case (rule of conduct 없는 입법은 invalid), separation of powers, 그리고 가장 강력 — 법령 의미를 conclusively 정하는 권한은 exclusively judicial. "Don\'t push us too far."' : 'S157\'s postscript is obiter but a deliberate constitutional warning — Groom\'s case, separation of powers, and most powerfully the proposition that conclusively determining legislative meaning is exclusively judicial. \"Don\'t push us too far.\"'}</p>
          </div>
        </li>
        <li>
          <span className="exam-hd-n">04</span>
          <div>
            <p className="exam-hd-t">{KR ? 'Futuris vs Graham — alternative pathway 가 결정 변수' : 'Futuris vs Graham — alternative pathway is the swing factor'}</p>
            <p className="exam-hd-w">{KR ? 'Futuris 가 합헌이었던 이유는 Pt IVC TAA (Federal Court appeal on question of law) 라는 "functional equivalent of JR" 이 있었기 때문. Functional equivalent 없으면 S157·Kirk territory. 주의: Futuris 에서 너무 extrapolate 하지 마라.' : 'Futuris survived because Pt IVC TAA gave a \"functional equivalent of JR.\" Without one, you\'re back in S157/Kirk territory. Caution: don\'t over-extrapolate from Futuris.'}</p>
          </div>
        </li>
        <li>
          <span className="exam-hd-n">05</span>
          <div>
            <p className="exam-hd-t">{KR ? 'Rule of law 명시적으로 invoke' : 'Invoke rule of law explicitly'}</p>
            <p className="exam-hd-w">{KR ? 'Futuris 다수의견은 "rule of law" 를 한 번도 언급하지 않음 — Kirby J 와의 대비 포인트. 답안에서 이 부재를 짚고, S157·Kirk 의 logic 과 묶어 비판적으로 다루면 HD-level critical analysis.' : 'The Futuris majority never says \"rule of law\" — a clear contrast with Kirby J. Naming that absence and tying it back to S157/Kirk logic is HD-level critical analysis.'}</p>
          </div>
        </li>
        <li>
          <span className="exam-hd-n">06</span>
          <div>
            <p className="exam-hd-t">{KR ? '"In practice" 테스트 (Graham [46]) — practical operation' : '\"In practice\" test (Graham [46]) — practical operation'}</p>
            <p className="exam-hd-w">{KR ? '법원은 clause 가 in practice 무엇을 하는지를 본다. Form 이 아닌 substance-and-degree. 답안에서는 항상 "이 조항이 실제로 작동하면 어떻게 되는가"를 적어라.' : 'Courts look at what the clause does in practice — substance and degree, not form. Always write out what the provision does once it operates.'}</p>
          </div>
        </li>
        <li>
          <span className="exam-hd-n">07</span>
          <div>
            <p className="exam-hd-t">{KR ? 'Reasonableness vs Irrationality 구별' : 'Reasonableness vs irrationality'}</p>
            <p className="exam-hd-w">{KR ? 'Li(legal unreasonableness) → discretion 결정. SZMDS(irrationality) → jurisdictional fact / state of satisfaction 결정. SZMDS 는 unreasonableness 가 not available 전제. Gageler J 가 구별 무의미하다고 시사했지만 minority — jurisdictional fact 에 unreasonableness 가져갈 때는 어려움을 인정.' : 'Li (legal unreasonableness) is for discretion. SZMDS (irrationality) is for jurisdictional fact / satisfaction decisions, on the footing that unreasonableness is not available. Gageler J suggests the distinction may not matter — minority. When running unreasonableness against a jurisdictional fact, acknowledge it\'s harder.'}</p>
          </div>
        </li>
        <li>
          <span className="exam-hd-n">08</span>
          <div>
            <p className="exam-hd-t">{KR ? 'Discretionary refusal 도 무기' : 'Discretionary refusal as a weapon'}</p>
            <p className="exam-hd-w">{KR ? 'Futuris 에서 HCA 는 "Federal Court 가 재량으로 거부했어야 한다"고 별도 의견. Alternative avenue 의 존재 자체가 재량거부의 사유. 답안에서 remedies 다룰 때 이 카드 잊지 마.' : 'In Futuris the HCA also held the Federal Court should have refused relief on discretionary grounds. The mere existence of an alternative avenue can ground discretionary refusal — don\'t forget this card under remedies.'}</p>
          </div>
        </li>
      </ol>
    </div>

    <h2 className="ex-h">{f.title}</h2>
    <p className="ex-lede">{f.lede}</p>
    <table className="ex-table">
      <thead><tr>
        <th style={{width:'8%'}}>{lang==='kr'?'연도':'Year'}</th>
        <th>{lang==='kr'?'Part A':'Part A'}</th>
        <th>{lang==='kr'?'Part B':'Part B'}</th>
        <th style={{width:'18%'}}>{lang==='kr'?'문항':'Q'}</th>
      </tr></thead>
      <tbody>
        {f.cols.map((r,i)=>(
          <tr key={i} className={r.y==='2026'?'ex-pred':''}>
            <td><strong>{r.y}</strong></td><td>{r.a}</td><td>{r.b}</td><td>{r.n}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <h3 className="ex-h2">{lang==='kr'?'법령에 매번 등장하는 5가지 트리거':'Five recurring statutory triggers'}</h3>
    <ol className="ex-trig">
      {f.triggers.map((t,i)=>(
        <li key={i}>
          <span className="ex-trig-n">{String(i+1).padStart(2,'0')}</span>
          <div>
            <p className="ex-trig-t">{t.t}</p>
            <p className="ex-trig-w">{t.why}</p>
          </div>
        </li>
      ))}
    </ol>
  </div>;
}

function ExamTopics({ lang }) {
  return <div className="exam-section">
    <div className="topic-grid">
      {E.topics.map(t => {
        const tl = t[lang];
        return <div className="topic-card" key={t.id}>
          <p className="topic-num">{t.n}</p>
          <h3>{tl.h}</h3>
          <p className="topic-sub">{tl.s}</p>
          <p className="topic-body">{tl.body}</p>
          <ul className="topic-marks">
            {tl.marks.map((m,i)=><li key={i}>{m}</li>)}
          </ul>
        </div>;
      })}
    </div>
  </div>;
}

function ExamTrees({ lang, onCase }) {
  const [open, setOpen] = React.useState({});
  return <div className="exam-section">
    <p className="ex-lede">{lang==='kr'?'조항 문구 / 사실 트리거를 선택하면 적용 케이스가 펼쳐집니다.':'Pick the wording or fact trigger; the applicable cases reveal.'}</p>
    {E.trees.map(t => {
      const tl = t[lang];
      return <div className="tree-block" key={t.id}>
        <h3 className="ex-h2">{tl.h}<span className="ex-h2-sub">— {tl.s}</span></h3>
        <div className="branch-list">
          {t.branches.map((b,i)=>{
            const k = t.id+':'+i;
            const isOpen = !!open[k];
            return <div className={"branch"+(isOpen?' open':'')} key={i}>
              <button className="branch-if" onClick={()=>setOpen(o=>({...o,[k]:!o[k]}))}>
                <span className="branch-tag">IF</span>
                <span className="branch-text">{b['if_'+lang]}</span>
                <span className="branch-toggle">{isOpen?'−':'+'}</span>
              </button>
              {isOpen && <div className="branch-then">
                <span className="branch-tag then">THEN</span>
                <p>{b['then_'+lang]}</p>
                {b.cases && b.cases.length>0 && <div className="branch-cases">
                  {b.cases.map(cid => {
                    const c = window.CASES_DATA[cid]; if (!c) return null;
                    return <button key={cid} className={"case-chip "+c.color} onClick={()=>onCase(cid)}>
                      <span className="peg sm">{c.icon}</span>{c.name}
                    </button>;
                  })}
                </div>}
              </div>}
            </div>;
          })}
        </div>
      </div>;
    })}
  </div>;
}

function ExamCriteria({ lang }) {
  return <div className="exam-section">
    <p className="ex-lede">{lang==='kr'?'5개 채점 기준 — HD(80+)와 D(70-79)의 차이는 주로 기준 2와 4에서 발생.':'Five marking criteria — HD vs D mainly turns on criteria 2 and 4.'}</p>
    <div className="crit-list">
      {E.criteria.map((c,i)=>{
        const cl = c[lang];
        return <div className="crit-card" key={c.id}>
          <div className="crit-head">
            <span className="crit-n">{String(i+1).padStart(2,'0')}</span>
            <div>
              <h3>{cl.h}</h3>
              <span className="crit-w">{c.w}</span>
            </div>
          </div>
          <p className="crit-body">{cl.body}</p>
          <div className="crit-hd">
            <span className="crit-hd-tag">HD</span>
            <p>{cl.hd}</p>
          </div>
        </div>;
      })}
    </div>
  </div>;
}

function ExamHirac({ lang }) {
  const h = E.hirac[lang];
  return <div className="exam-section">
    <h2 className="ex-h">{h.h}</h2>
    <p className="ex-lede">{h.s}</p>
    <ol className="hirac-list">
      {h.body.map((row,i)=>(
        <li key={i}>
          <span className="hirac-l">{row.l}</span>
          <span className="hirac-t">{row.t}</span>
        </li>
      ))}
    </ol>
  </div>;
}

function ExamPlan({ lang }) {
  return <div className="exam-section">
    <p className="ex-lede">{lang==='kr'?'6월 4일까지의 4주 — 매주 한 채점 기준에 집중.':'Four weeks to 4 June — one criterion per week.'}</p>
    <ol className="plan-list">
      {E.plan.map((p,i)=>{
        const pl = p[lang];
        return <li key={i}>
          <span className="plan-w">{p.w}</span>
          <div>
            <p className="plan-focus">{pl.focus}</p>
            <p className="plan-task">{pl.task}</p>
          </div>
        </li>;
      })}
    </ol>
  </div>;
}

function ExamPairings({ lang }) {
  return <div className="exam-section">
    <p className="ex-lede">{lang==='kr'?'Argument question은 보통 케이스 페어링 — 공통/차이를 한 페이지로.':'Argument questions usually run on case pairings — one page each on shared theme + key difference.'}</p>
    <div className="pair-grid">
      {E.pairings.map((p,i)=>{
        const pl = p[lang];
        return <div className="pair-card" key={p.id}>
          <p className="pair-n">P{String(i+1).padStart(2,'0')}</p>
          <p className="pair-a">{pl.a}</p>
          <span className="pair-x">↔</span>
          <p className="pair-b">{pl.b}</p>
          <div className="pair-fld">
            <span className="pair-l">{lang==='kr'?'공통':'Shared'}</span>
            <p>{pl.shared}</p>
          </div>
          <div className="pair-fld">
            <span className="pair-l">{lang==='kr'?'차이':'Difference'}</span>
            <p>{pl.diff}</p>
          </div>
        </div>;
      })}
    </div>
  </div>;
}

window.ExamMode = ExamMode;

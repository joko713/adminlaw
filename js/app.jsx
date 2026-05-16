/* Administrative Law W1-W9 — main React app */
const { useState, useEffect, useMemo, useRef, useCallback } = React;
const I = window.I18N, WEEKS = window.WEEKS_DATA, CASES = window.CASES_DATA;
const SCENARIOS = window.SCENARIOS_DATA, STEPS = window.STEPS_DATA;

/* ─── Right slide panel — supports expand-to-fullscreen ───────── */
function Panel({ open, onClose, fullscreen, onToggleFullscreen, onPrint, lang, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') {
        if (fullscreen && onToggleFullscreen) onToggleFullscreen();
        else onClose();
      }
      if ((e.key === 'f' || e.key === 'F') && !e.metaKey && !e.ctrlKey && !e.altKey
          && !e.target.matches('input, textarea, [contenteditable]')) {
        if (onToggleFullscreen) onToggleFullscreen();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, fullscreen, onToggleFullscreen]);
  const KR = lang === 'kr';
  return (<>
    <div className={"panel-backdrop" + (open?" open":"") + (fullscreen?" fullscreen":"")} onClick={onClose}></div>
    <aside className={"panel" + (open?" open":"") + (fullscreen?" fullscreen":"")} role="dialog" aria-hidden={!open}>
      <div className="panel-toolbar">
        {onPrint && (
          <button className="panel-tool" onClick={onPrint} title={KR?'인쇄 (이 카드만)':'Print this card'} aria-label="Print">
            <span aria-hidden>⎙</span>
          </button>
        )}
        {onToggleFullscreen && (
          <button className="panel-tool" onClick={onToggleFullscreen}
                  title={fullscreen ? (KR?'창 모드 (F)':'Restore (F)') : (KR?'전체 화면 (F)':'Fullscreen (F)')}
                  aria-label={fullscreen?'Restore':'Expand'}>
            <span aria-hidden>{fullscreen ? '⛶' : '⛶'}</span>
          </button>
        )}
        <button className="panel-tool panel-close-x" onClick={onClose} aria-label="Close"
                title={KR?'닫기 (Esc)':'Close (Esc)'}>×</button>
      </div>
      {children}
    </aside>
  </>);
}

function CasePanel({ caseId, lang, onClose }) {
  const [fullscreen, setFullscreen] = useState(false);
  const contentRef = useRef(null);
  // Reset to compact mode whenever a new case is opened
  useEffect(() => { setFullscreen(false); }, [caseId]);
  const c = caseId && CASES[caseId];
  if (!c) return <Panel open={false} onClose={onClose}/>;
  const t = c[lang] || c.en;
  const T = I[lang];
  const KR = lang === 'kr';
  const prInfo = window.CASE_PRIORITY && window.CASE_PRIORITY[c.id];
  const prLabels = window.PRIORITY_LABEL && window.PRIORITY_LABEL[lang];
  const prLabel = prInfo && prLabels ? prLabels[prInfo.priority] : null;
  const meta = window.CASE_META && window.CASE_META[c.id];
  const testLine = meta && meta.test ? (meta.test[lang] || meta.test.en) : null;

  // Quick-jump TOC sections that exist for this case
  const toc = [
    t.facts && { id:'facts', label: KR?'사실':'Facts' },
    { id:'issue', label: KR?'쟁점':'Issue' },
    { id:'rule', label: KR?'법리':'Rule' },
    t.principle && { id:'principle', label: KR?'원칙':'Principle' },
    { id:'when', label: KR?'적용':'Apply' },
    { id:'conclusion', label: KR?'결론':'Held' },
    (t.keywords && t.keywords.length>0) && { id:'keywords', label: KR?'키워드':'Keywords' },
  ].filter(Boolean);

  const jumpTo = (id) => {
    const el = contentRef.current && contentRef.current.querySelector('[data-anchor="'+id+'"]');
    if (el) el.scrollIntoView({ behavior:'smooth', block:'start' });
  };

  const handlePrint = () => {
    const w = window.open('', '_blank', 'width=800,height=900');
    if (!w) return;
    const title = c.name + ' — ' + c.cite;
    const html = (contentRef.current && contentRef.current.innerHTML) || '';
    w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${title}</title>
      <style>
        body { font-family: 'EB Garamond', Georgia, serif; max-width: 720px; margin: 32px auto; padding: 0 24px; color: #2a221b; line-height: 1.6; }
        h2 { font-size: 22px; margin: 0 0 4px; }
        h4 { font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: #a02e1a; margin: 18px 0 4px; }
        .panel-cite { font-style: italic; color: #75614c; margin: 0 0 16px; font-size: 13px; }
        .panel-section p { margin: 0 0 8px; white-space: pre-line; }
        ol { margin: 6px 0 0 18px; padding: 0; }
        .case-test { border-top: 1px dotted #b9a884; padding-top: 6px; margin-top: 8px; font-style: italic; color: #4d3f31; }
        .case-test-tag { display: inline-block; padding: 1px 8px; border: 1px solid #b9a884; border-radius: 999px; font-size: 10px; letter-spacing: .14em; text-transform: uppercase; margin-right: 6px; font-style: normal; }
        .kw span { display: inline-block; margin: 2px 4px 2px 0; padding: 2px 8px; background: #e8d9b3; border-radius: 999px; font-size: 12px; }
        .panel-toc, .panel-toolbar { display: none; }
        .peg, .prio-badge { display: none; }
      </style></head><body>${html}</body></html>`);
    w.document.close();
    setTimeout(() => { w.print(); }, 200);
  };

  return (<Panel open={!!caseId} onClose={onClose}
                fullscreen={fullscreen}
                onToggleFullscreen={() => setFullscreen(f => !f)}
                onPrint={handlePrint}
                lang={lang}>
    <div className="panel-content" ref={contentRef}>
      <h2><span className={"peg lg "+c.color}>{c.icon}</span>{c.name}</h2>
      <p className="panel-cite">{c.cite} · <em>{c.topic}</em> · {c.category}
        {prLabel && (
          <span className={"prio-badge panel-prio prio-"+prInfo.priority} title={prLabel.desc}>
            {prLabel.full}{prInfo.seminar ? ' · S'+prInfo.seminar : ''}
          </span>
        )}
      </p>

      {/* Quick-jump TOC */}
      <nav className="panel-toc" aria-label={KR?'섹션 바로가기':'Section quick-jump'}>
        {toc.map(item => (
          <button key={item.id} className="panel-toc-btn" onClick={() => jumpTo(item.id)}>{item.label}</button>
        ))}
      </nav>

      {/* Memory peg — surface the Test line at the top for quick recall */}
      {testLine && (
        <div className="panel-peg" data-anchor="peg">
          <span className="panel-peg-tag">{KR?'한 줄 단서':'Memory peg'}</span>
          <p className="panel-peg-body">{testLine}</p>
        </div>
      )}

      {t.facts && <div className="panel-section" data-anchor="facts"><h4>{T.facts}</h4><p>{t.facts}</p></div>}
      <div className="panel-section" data-anchor="issue"><h4>{T.issue}</h4><p>{t.issue}</p></div>
      <div className="panel-section" data-anchor="rule"><h4>{T.rule}</h4>
        <p>{t.rule}</p>
        {testLine && (
          <div className="case-test">
            <span className="case-test-tag">{KR?'테스트':'Test'}</span>
            <span className="case-test-body">{testLine}</span>
          </div>
        )}
      </div>
      {t.principle && (
        <div className="panel-section" data-anchor="principle">
          <h4>{T.principle || (KR?'정립된 원칙':'Principle established')}</h4>
          <p>{t.principle}</p>
        </div>
      )}
      <div className="panel-section" data-anchor="when">
        <h4>{T.when}</h4>
        <p>{t.when}</p>
        <div className="case-howto">
          <span className="case-howto-l">{KR?'적용 방법':'How to apply'}</span>
          <ol>
            {(t.howApply && t.howApply.length > 0)
              ? t.howApply.map((step, i) => <li key={i}>{step}</li>)
              : (KR
                  ? [
                      '먼저 사실관계에서 이 법리가 다루는 결정이나 행위가 무엇인지 짚는다.',
                      '법리의 요건을 사실에 한 줄씩 대입하면서 충족·미충족을 표시한다.',
                      '미충족이 하나라도 있으면 사유가 성립한 것이니, 곧장 중요성(materiality) 단계로 간다.'
                    ]
                  : [
                      'Identify the decision or conduct in your facts that this rule governs.',
                      'Map each element of the rule above onto the facts, marking satisfied / not satisfied.',
                      'If any element fails, the ground is engaged → proceed to the materiality step.'
                    ]
                ).map((step, i) => <li key={i}>{step}</li>)
            }
          </ol>
        </div>
      </div>
      <div className="panel-section" data-anchor="conclusion"><h4>{T.conclusion}</h4><p>{t.conclusion}</p></div>
      {t.keywords && t.keywords.length>0 && <div className="panel-section" data-anchor="keywords">
        <h4>{T.keywords}</h4>
        <div className="kw">{t.keywords.map((k,i)=><span key={i}>{k}</span>)}</div>
      </div>}
    </div>
  </Panel>);
}

/* ─── Notes (per-section, session-only) ──────────── */
function Notes({ sectionId, lang }) {
  const T = I[lang];
  const [val, setVal] = useState('');
  // Reset only when sectionId changes (session-only memory in window.__NOTES)
  useEffect(() => {
    window.__NOTES = window.__NOTES || {};
    setVal(window.__NOTES[sectionId] || '');
  }, [sectionId]);
  const onChange = e => {
    setVal(e.target.value);
    window.__NOTES[sectionId] = e.target.value;
  };
  return (<div className="notes-area">
    <h2>{T.studyAt}</h2>
    <textarea value={val} onChange={onChange} placeholder={T.notesPlaceholder}></textarea>
    <div className="note-meta">{lang==='kr'?'이 세션에서만 유지된다.':'Session-only memory.'}</div>
  </div>);
}

/* ─── Decision tree (interactive) ────────────────── */
function DecisionTree({ tree, lang, onCase }) {
  const [picked, setPicked] = useState({});
  const T = I[lang];
  const renderNode = (node, depth=0) => {
    if (node.leaf) {
      return <div className={"tree-leaf "+node.result} key={node.id}>
        <span className="glyph">{node.result==='je'||node.result==='always-je'||node.result==='invalid'?'✕':node.result==='valid'||node.result==='no-je'?'✓':'→'}</span>
        <strong>{node.label}</strong>
        {node.note && <span className="note">— {node.note}</span>}
      </div>;
    }
    if (node.children && node.children[0] && !node.children[0].label && node.children[0].id) {
      // shouldn't happen
    }
    // a question node with children that are answer choices
    return <div className="tree-node" key={node.id}>
      <div className="tree-q"><span className="qmark">¶</span>{node.label}</div>
      <div className="tree-choices">
        {node.children.map(ch => (
          <button key={ch.id}
                  className={"tree-choice"+(picked[node.id]===ch.id?" picked":"")}
                  onClick={()=>setPicked(p=>{ const np={...p,[node.id]:ch.id}; // clear deeper picks
                    if (ch.children) ch.children.forEach(_=>{}); return np; })}>
            {ch.label}
          </button>
        ))}
      </div>
      {picked[node.id] && (() => {
        const chosen = node.children.find(c => c.id === picked[node.id]);
        if (!chosen) return null;
        if (chosen.leaf) return <div className="tree-children">{renderNode(chosen, depth+1)}</div>;
        if (chosen.children) return <div className="tree-children">{chosen.children.map(c=>renderNode(c, depth+1))}</div>;
        return null;
      })()}
    </div>;
  };
  return <div className="tree-stage">
    <p className="tree-hint">{T.legend.branch}</p>
    {tree.map(n => renderNode(n))}
    <button className="tree-reset" onClick={()=>setPicked({})}>
      {lang==='kr'?'분기 초기화':'Reset branches'}
    </button>
  </div>;
}

/* ─── Quiz card (single) ─────────────────────────── */
function QuizQ({ q, lang, onAnswered }) {
  const t = q[lang] || q.en;
  const [picked, setPicked] = useState(null);
  const T = I[lang];
  const letters = ['A','B','C','D','E','F'];
  return <div className="quiz-card">
    <p className="quiz-q">{t.q}</p>
    <div className="quiz-opts">
      {t.opts.map((o,i)=>(
        <button key={i} className={"quiz-opt"+(picked!==null && i===t.ans?" correct":"")+(picked!==null && picked===i && i!==t.ans?" wrong":"")}
                disabled={picked!==null} onClick={()=>{ setPicked(i); onAnswered && onAnswered(i===t.ans); }}>
          <span className="letter">{letters[i]}</span><span>{o}</span>
        </button>
      ))}
    </div>
    {picked!==null && <div className="quiz-feedback">
      <strong>{picked===t.ans?T.quizCorrect:T.quizWrong}.</strong> {t.why}
    </div>}
  </div>;
}

/* ─── Week page ─────────────────────────────────── */
function WeekPage({ week, lang, onCase }) {
  const t = week[lang] || week.en;
  const T = I[lang];
  const [tab, setTab] = useState('overview');
  const [accOpen, setAccOpen] = useState({});
  useEffect(()=>{ setTab('overview'); setAccOpen({}); }, [week.id]);
  return <div className="page">
    <p className="eyebrow">{T.week} {week.num}</p>
    <h1 className="page-title">{t.title}</h1>
    <p className="lede">{t.summary}</p>
    <div className="meta-grid">
      {t.meta.map((m,i)=><div className="meta-cell" key={i}>
        <div className="meta-label">{m.label}</div>
        <div className="meta-value">{m.value}</div>
      </div>)}
    </div>
    <div className="tabs">
      {['overview','tree','detail','cases','quiz'].map(k=>
        <button key={k} className={"tab-btn"+(tab===k?" active":"")} onClick={()=>setTab(k)}>{T.tabs[k]}</button>)}
    </div>
    {tab==='overview' && <>
      <div className="section-rule"><span>{T.keyPoints}</span></div>
      <div className="points">
        {t.points.map((p,i)=><div className="point" key={i}>
          <div className="point-num">{String(i+1).padStart(2,'0')}.</div>
          <div>
            <h3 className="point-h">{p.h}</h3>
            <p className="point-t">{p.t}</p>
            {p.c && p.c.length>0 && <div className="point-cases">
              {p.c.map(cid => CASES[cid] && (
                <button key={cid} className="case-tag" onClick={()=>onCase(cid)}>
                  <span className={"glyph"} style={{color:`var(--${CASES[cid].color}-fg)`}}>{CASES[cid].icon}</span>
                  {CASES[cid].name}
                </button>
              ))}
            </div>}
          </div>
        </div>)}
      </div>
      {window.LECTURES && window.LECTURES[week.id] && (() => {
        const L = window.LECTURES[week.id][lang] || window.LECTURES[week.id].en;
        return <div className="lecture-note">
          <span className="lec-tag">{lang==='kr'?'강의 노트':'Lecture note'}</span>
          {L.lead && <p style={{fontSize:'17.5px',color:'var(--ink)',fontWeight:500}}>{L.lead}</p>}
          {L.paras && L.paras.map((p,i)=><p key={i}>{p}</p>)}
          {L.aside && <div className="lec-aside">{L.aside}</div>}
        </div>;
      })()}
      <Notes sectionId={`w-${week.id}-overview`} lang={lang}/>
    </>}
    {tab==='tree' && <>
      <div className="section-rule"><span>{lang==='kr'?'결정 흐름':'flow of reasoning'}</span></div>
      <DecisionTree tree={week.tree[lang]||week.tree.en} lang={lang} onCase={onCase}/>
      <Notes sectionId={`w-${week.id}-tree`} lang={lang}/>
    </>}
    {tab==='detail' && <>
      <div className="section-rule"><span>{lang==='kr'?'상세 분석':'detail'}</span></div>
      <div className="acc">
        {(week.detail[lang]||week.detail.en).map((d,i)=><div className="acc-item" key={i}>
          <button className="acc-h" aria-expanded={!!accOpen[i]} onClick={()=>setAccOpen(o=>({...o,[i]:!o[i]}))}>
            <span>{d.h}</span><span className="arrow">▸</span>
          </button>
          {accOpen[i] && <div className="acc-body">{d.t}</div>}
        </div>)}
      </div>
      <Notes sectionId={`w-${week.id}-detail`} lang={lang}/>
    </>}
    {tab==='cases' && <>
      <div className="section-rule"><span>{T.keyCases}</span></div>
      <div className="case-grid">
        {week.cases.map(cid => CASES[cid] && (() => {
          const c = CASES[cid], ct = c[lang] || c.en;
          const prInfo = window.CASE_PRIORITY && window.CASE_PRIORITY[cid];
          const prLabel = prInfo && window.PRIORITY_LABEL && window.PRIORITY_LABEL[lang]
            ? window.PRIORITY_LABEL[lang][prInfo.priority] : null;
          const impClass = "imp-"+(window.CASE_META && window.CASE_META[cid] ? window.CASE_META[cid].importance : 3);
          const prClass = prInfo ? " prio-" + prInfo.priority : "";
          return <button key={cid} className={"case-card "+impClass+prClass} onClick={()=>onCase(cid)}>
            <span className={"peg "+c.color}>{c.icon}</span>
            <div>
              <div className="case-card-badges">
                {window.CASE_META && window.CASE_META[cid] && (
                  <span className={"imp-badge imp-"+window.CASE_META[cid].importance}>
                    {window.IMP_LABEL[lang][window.CASE_META[cid].importance]}
                  </span>
                )}
                {prLabel && (
                  <span className={"prio-badge prio-"+prInfo.priority} title={prLabel.desc}>
                    {prLabel.full}
                  </span>
                )}
              </div>
              <p className="name">{c.name}</p>
              <p className="cite">{c.cite}</p>
              <p className="why">{ct.rule}</p>
            </div>
          </button>;
        })())}
      </div>
      <Notes sectionId={`w-${week.id}-cases`} lang={lang}/>
    </>}
    {tab==='quiz' && <>
      <div className="section-rule"><span>{T.tabs.quiz}</span></div>
      {week.quiz.map((q,i)=><QuizQ key={i} q={q} lang={lang}/>)}
      <Notes sectionId={`w-${week.id}-quiz`} lang={lang}/>
    </>}
  </div>;
}

/* ─── DB search ──────────────────────────────────── */
function DBSearch({ lang, onCase }) {
  const T = I[lang];
  const [q, setQ] = useState('');
  const [topic, setTopic] = useState('all');
  const [cat, setCat] = useState('all');
  const [priority, setPriority] = useState('all');
  const [moreOpen, setMoreOpen] = useState(false);
  const all = Object.values(CASES);
  const topics = ['all', ...Array.from(new Set(all.map(c=>c.topic))).sort((a,b)=>{
    const na = parseInt((a||'').replace(/\D/g,''), 10) || 999;
    const nb = parseInt((b||'').replace(/\D/g,''), 10) || 999;
    return na - nb;
  })];
  const cats = ['all', ...Array.from(new Set(all.map(c=>c.category)))];
  const PR = window.CASE_PRIORITY || {};
  const PL = window.PRIORITY_LABEL && window.PRIORITY_LABEL[lang];
  const priorityOrder = ['required', 'recommended', 'mentioned', 'external'];
  const priorityCounts = priorityOrder.reduce((m, k) => {
    m[k] = all.filter(c => PR[c.id] && PR[c.id].priority === k).length;
    return m;
  }, {});
  priorityCounts.all = all.length;
  const ql = q.trim().toLowerCase();
  const results = all.filter(c => {
    if (topic!=='all' && c.topic!==topic) return false;
    if (cat!=='all' && c.category!==cat) return false;
    if (priority !== 'all') {
      const p = PR[c.id] ? PR[c.id].priority : 'none';
      if (p !== priority) return false;
    }
    if (!ql) return true;
    const t = c[lang] || c.en;
    const hay = [c.name, c.cite, t.rule, t.when, t.issue, t.conclusion, ...(t.keywords||[])].join(' ').toLowerCase();
    return hay.includes(ql);
  });
  if (priority === 'all') {
    const rank = { required:0, recommended:1, mentioned:2, external:3, none:4 };
    results.sort((a, b) => {
      const ra = rank[(PR[a.id] && PR[a.id].priority) || 'none'];
      const rb = rank[(PR[b.id] && PR[b.id].priority) || 'none'];
      if (ra !== rb) return ra - rb;
      return (a.topic || '').localeCompare(b.topic || '');
    });
  }
  const highlight = (text) => {
    if (!ql) return text;
    const idx = text.toLowerCase().indexOf(ql);
    if (idx<0) return text;
    return <>{text.slice(0,idx)}<mark>{text.slice(idx, idx+ql.length)}</mark>{text.slice(idx+ql.length)}</>;
  };
  const activeFilters =
    (priority !== 'all' ? 1 : 0) +
    (topic !== 'all' ? 1 : 0) +
    (cat !== 'all' ? 1 : 0);
  const resetAll = () => { setPriority('all'); setTopic('all'); setCat('all'); setQ(''); setMoreOpen(false); };
  return <div className="page db-page">
    <p className="eyebrow">{lang==='kr'?'데이터베이스':'database'}</p>
    <h1 className="page-title">{T.nav.db}</h1>

    <div className="db-controls">
      <div className="search-bar db-search">
        <span aria-hidden style={{color:'var(--ink-3)'}}>⌕</span>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder={T.search}/>
        {q && <button className="db-clear" onClick={()=>setQ('')} aria-label="Clear">×</button>}
      </div>

      <div className="db-prio-row">
        <button className={"chip prio-chip"+(priority==='all'?" active":"")} onClick={()=>setPriority('all')}>
          {lang==='kr'?'전체':'All'} <span className="chip-count">{priorityCounts.all}</span>
        </button>
        {priorityOrder.map(k => (
          <button key={k}
                  className={"chip prio-chip prio-"+k+(priority===k?" active":"")}
                  onClick={()=>setPriority(k)}
                  title={PL ? PL[k].desc : k}>
            {PL ? PL[k].full : k} <span className="chip-count">{priorityCounts[k]}</span>
          </button>
        ))}
        <button className={"db-more"+(moreOpen?" open":"")} onClick={()=>setMoreOpen(o=>!o)} aria-expanded={moreOpen}>
          {lang==='kr'?'더보기':'More'}
          {activeFilters > 0 && <span className="db-more-count">{activeFilters}</span>}
          <span className="db-more-arrow" aria-hidden>{moreOpen ? '▴' : '▾'}</span>
        </button>
      </div>

      {moreOpen && (
        <div className="db-more-panel">
          <div className="db-more-grp">
            <span className="filter-label">{T.filterTopic}</span>
            <div className="db-more-chips">
              {topics.map(t => <button key={t}
                                       className={"chip"+(topic===t?" active":"")}
                                       onClick={()=>setTopic(t)}>{t==='all'?T.all:t}</button>)}
            </div>
          </div>
          <div className="db-more-grp">
            <span className="filter-label">{T.filterCategory}</span>
            <div className="db-more-chips">
              {cats.map(t => <button key={t}
                                     className={"chip"+(cat===t?" active":"")}
                                     onClick={()=>setCat(t)}>{t==='all'?T.all:t}</button>)}
            </div>
          </div>
        </div>
      )}

      <div className="db-meta-row">
        <span className="db-count">{lang==='kr'?`결과 ${results.length}개`:`${results.length} result${results.length===1?'':'s'}`}</span>
        {(activeFilters > 0 || q) && (
          <button className="db-reset" onClick={resetAll}>{lang==='kr'?'초기화':'Reset'}</button>
        )}
      </div>
    </div>

    <div className="results">
      {results.length===0 && <div className="empty">{lang==='kr'?'결과 없음':'No results'}</div>}
      {results.map(c => {
        const p = PR[c.id] ? PR[c.id].priority : null;
        const label = p && PL ? PL[p] : null;
        return <button key={c.id} className={"result-card"+(p?" has-prio prio-"+p:"")} onClick={()=>onCase(c.id)}>
          <span className={"peg "+c.color}>{c.icon}</span>
          <div className="result-body">
            <div className="result-name">{highlight(c.name)}</div>
            <div className="result-sub">
              <span className="result-cite">{c.cite}</span>
              <span className="result-topic">{c.topic}</span>
              {label && <span className={"prio-badge prio-"+p} title={label.desc}>{label.full}</span>}
            </div>
          </div>
        </button>;
      })}
    </div>
  </div>;
}

/* ─── Flashcards ─────────────────────────────────── */
function Flashcards({ lang, onCase }) {
  const T = I[lang];
  const [deckTopic, setDeckTopic] = useState('all');
  const [direction, setDirection] = useState('front'); // front=case→rule, back=rule→case
  const [flipped, setFlipped] = useState(false);
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState({}); // id → 0..3 confidence
  const all = Object.values(CASES);
  const topics = ['all', ...Array.from(new Set(all.map(c=>c.topic))).sort((a,b)=>{
    const na = parseInt((a||'').replace(/\D/g,''), 10) || 999;
    const nb = parseInt((b||'').replace(/\D/g,''), 10) || 999;
    return na - nb;
  })];
  const deck = useMemo(() => {
    const filtered = deckTopic==='all' ? all : all.filter(c=>c.topic===deckTopic);
    // SRS-like ordering: lowest confidence first
    return [...filtered].sort((a,b)=>(progress[a.id]||0)-(progress[b.id]||0));
  }, [deckTopic, progress]);
  useEffect(()=>{ setIdx(0); setFlipped(false); }, [deckTopic, direction]);
  const card = deck[idx];
  const total = deck.length;
  const done = idx >= total;
  const rate = (delta) => {
    if (!card) return;
    setProgress(p => ({...p, [card.id]: Math.max(0, Math.min(3, (p[card.id]||0)+delta))}));
    setFlipped(false);
    setIdx(i=>i+1);
  };
  const masteredCount = deck.filter(c=>(progress[c.id]||0)>=2).length;
  const pct = total>0 ? Math.round(((idx)/total)*100) : 0;
  if (!card || done) {
    return <div className="page">
      <p className="eyebrow">{lang==='kr'?'플래시카드':'flashcards'}</p>
      <h1 className="page-title">{T.nav.flash}</h1>
      <div className="flash-stage">
        <div className="flash-controls">
          <span>{T.flashDeck}: {deckTopic==='all'?T.all:deckTopic}</span>
        </div>
        <p style={{textAlign:'center', fontStyle:'italic', color:'var(--ink-3)', padding:'40px 0'}}>{T.flashDone}</p>
        <div style={{textAlign:'center'}}>
          <button className="btn primary" onClick={()=>{ setIdx(0); setFlipped(false); }}>{T.flashRestart}</button>
        </div>
      </div>
    </div>;
  }
  const t = card[lang] || card.en;
  return <div className="page">
    <p className="eyebrow">{lang==='kr'?'플래시카드':'flashcards'}</p>
    <h1 className="page-title">{T.nav.flash}</h1>
    <p className="lede">{lang==='kr'?'케이스 ↔ 법리. 자신감을 평가해 다음 등장 시점을 정해.':'Case ↔ rule. Rate your confidence so cards return when you need them.'}</p>
    <div className="flash-stage">
      <div className="flash-controls">
        <div className="deck-pick">
          {topics.map(t=><button key={t} className={"chip"+(deckTopic===t?" active":"")} onClick={()=>setDeckTopic(t)}>{t==='all'?T.all:t}</button>)}
        </div>
        <span>{idx+1} / {total} · {masteredCount} mastered</span>
      </div>
      <div className="flash-progress"><div className="flash-progress-bar" style={{width:pct+'%'}}></div></div>
      <div className="flash-controls">
        <button className={"chip"+(direction==='front'?" active":"")} onClick={()=>setDirection('front')}>{T.flashFront}</button>
        <button className={"chip"+(direction==='back'?" active":"")} onClick={()=>setDirection('back')}>{T.flashBack}</button>
      </div>
      <div className="flash-card" onClick={()=>setFlipped(f=>!f)}>
        <div className={"flash-inner"+(flipped?" flipped":"")}>
          <div className="flash-face">
            <span className="corner">{direction==='front'?'CASE':'RULE'}</span>
            {direction==='front' ? <>
              <div style={{textAlign:'center', marginBottom:14}}>
                <span className={"peg lg "+card.color}>{card.icon}</span>
              </div>
              <p className="flash-name">{card.name}</p>
              <p className="flash-cite">{card.cite}</p>
            </> : <>
              <p className="flash-rule">{t.rule}</p>
            </>}
          </div>
          <div className="flash-face back">
            <span className="corner">{direction==='front'?'RULE':'CASE'}</span>
            {direction==='front' ? <>
              <p className="flash-back-rule">{t.rule}</p>
              <p className="flash-back-name">— {card.name}</p>
              <p className="flash-back-cite">{card.cite}</p>
            </> : <>
              <div style={{textAlign:'center', marginBottom:14}}>
                <span className={"peg lg "+card.color}>{card.icon}</span>
              </div>
              <p className="flash-name">{card.name}</p>
              <p className="flash-cite">{card.cite}</p>
            </>}
          </div>
        </div>
      </div>
      <p className="flash-flip-hint">{T.flashFlip}</p>
      <div className="flash-rate">
        <button className="flash-btn again" onClick={()=>rate(-1)}>{T.flashAgain}</button>
        <button className="flash-btn good" onClick={()=>rate(1)}>{T.flashGood}</button>
        <button className="flash-btn easy" onClick={()=>rate(2)}>{T.flashEasy}</button>
      </div>
      <div style={{textAlign:'center', marginTop:18}}>
        <button className="btn" onClick={()=>onCase(card.id)}>{lang==='kr'?'전체 카드 보기':'Open full card'}</button>
      </div>
    </div>
  </div>;
}

/* ─── Mixed quiz ─────────────────────────────────── */
function MixedQuiz({ lang }) {
  const T = I[lang];
  const allQs = useMemo(()=> WEEKS.flatMap(w => w.quiz.map((q,i)=>({...q, _w: w.num, _id: w.id+'-'+i}))), []);
  const [running, setRunning] = useState(false);
  const [order, setOrder] = useState([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const start = () => {
    const shuffled = [...allQs].sort(()=>Math.random()-0.5);
    setOrder(shuffled);
    setIdx(0); setScore(0); setRunning(true);
  };
  if (!running) {
    return <div className="page">
      <p className="eyebrow">{lang==='kr'?'섞기 퀴즈':'mixed quiz'}</p>
      <h1 className="page-title">{T.nav.quiz}</h1>
      <p className="lede">{lang==='kr'?'전 주차의 문항을 섞어 능동적으로 복습한다.':'All weeks shuffled — active recall across the whole course.'}</p>
      <div style={{textAlign:'center', padding:'40px 0'}}>
        <button className="btn primary" onClick={start}>{T.quizStart}</button>
      </div>
    </div>;
  }
  const total = order.length;
  if (idx >= total) {
    return <div className="page">
      <p className="eyebrow">{lang==='kr'?'섞기 퀴즈':'mixed quiz'}</p>
      <h1 className="page-title">{T.nav.quiz}</h1>
      <div className="mixed-final">
        <p style={{fontStyle:'italic', color:'var(--ink-3)', marginBottom:8}}>{T.quizFinal}</p>
        <div className="score">{score}<span className="out-of"> / {total}</span></div>
        <button className="btn primary" style={{marginTop:30}} onClick={start}>{T.quizRestart}</button>
      </div>
    </div>;
  }
  const q = order[idx];
  return <div className="page">
    <p className="eyebrow">{lang==='kr'?'섞기 퀴즈':'mixed quiz'}</p>
    <h1 className="page-title">{T.nav.quiz}</h1>
    <div className="mixed-stage">
      <div className="mixed-meta">
        <span>{T.quizQ} {idx+1} {T.quizOf} {total} · W{q._w}</span>
        <span>{T.quizScore}: {score}</span>
      </div>
      <div className="flash-progress"><div className="flash-progress-bar" style={{width:((idx)/total*100)+'%'}}></div></div>
      <QuizQ key={q._id} q={q} lang={lang} onAnswered={correct => {
        if (correct) setScore(s=>s+1);
      }}/>
      <div style={{textAlign:'center', marginTop:14}}>
        <button className="btn primary" onClick={()=>setIdx(i=>i+1)}>{T.quizNext}</button>
      </div>
    </div>
  </div>;
}

/* ─── Scenario analyser ──────────────────────────── */
function ScenarioMode({ lang, onCase }) {
  const T = I[lang];
  const [scenarioId, setScenarioId] = useState(null);
  const [customFacts, setCustomFacts] = useState('');
  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState({jurisdiction:[], justiciability:[], grounds:[], materiality:null, remedies:[]});
  const stepKeys = ['scenario','jurisdiction','justiciability','grounds','materiality','remedies','irac'];
  const stepLabels = lang==='kr'
    ? ['시나리오','관할','심사 범위','사유','중요성','구제','IRAC']
    : ['Scenario','Jurisdiction','Scope','Grounds','Materiality','Remedies','IRAC'];
  const scenario = SCENARIOS.find(s=>s.id===scenarioId);
  const facts = scenarioId ? (scenario[lang]||scenario.en).facts : customFacts;

  const togglePick = (key, id) => setPicks(p => {
    const list = p[key];
    if (STEPS[key].multi) {
      return {...p, [key]: list.includes(id) ? list.filter(x=>x!==id) : [...list, id]};
    } else {
      return {...p, [key]: list===id ? null : id};
    }
  });

  const reset = () => { setScenarioId(null); setCustomFacts(''); setStep(0); setPicks({jurisdiction:[], justiciability:[], grounds:[], materiality:null, remedies:[]}); };

  const renderStep = () => {
    const k = stepKeys[step];
    if (k==='scenario') {
      return <>
        <div className="section-rule"><span>{T.sScenario}</span></div>
        <div className="scenario-grid">
          {SCENARIOS.map(s => {
            const t = s[lang] || s.en;
            return <button key={s.id} className={"scenario-card"+(scenarioId===s.id?" picked":"")}
                          onClick={()=>{ setScenarioId(s.id); setCustomFacts(''); }}>
              <span className={"peg "+s.color}>{s.icon}</span>
              <div>
                <p className="title">{t.title}</p>
                <p className="sub">{t.sub}</p>
              </div>
            </button>;
          })}
        </div>
        <div className="facts-card">
          <label>{scenarioId ? T.sFacts : T.sCustom}</label>
          {scenarioId
            ? <p style={{margin:0}}>{facts}</p>
            : <textarea value={customFacts} onChange={e=>setCustomFacts(e.target.value)} placeholder={lang==='kr'?'사실관계를 자유롭게 적어봐':'Describe your facts here'}></textarea>}
        </div>
      </>;
    }
    if (k==='irac') return renderIRAC();
    const def = STEPS[k];
    const lbl = def[lang]||def.en;
    return <>
      <div className="section-rule"><span>{lbl.label}</span></div>
      <p className="lede" style={{marginTop:0}}>{lbl.help}</p>
      <div className="opt-grid">
        {def.options.map(o => {
          const picked = def.multi ? picks[k].includes(o.id) : picks[k]===o.id;
          return <button key={o.id} className={"opt-card"+(picked?" picked":"")} onClick={()=>togglePick(k, o.id)}>
            <span className="ck">{picked?'✓':''}</span>
            <div>
              <div className="lbl">{o[lang]||o.en}</div>
              <div className="nt">{o['note_'+lang] || o.note_en}</div>
            </div>
          </button>;
        })}
      </div>
    </>;
  };

  const renderIRAC = () => {
    const isReg = picks.justiciability.includes('skip-leg');
    const groundOpts = STEPS.grounds.options;
    const matOpts = STEPS.materiality.options;
    const jurOpts = STEPS.jurisdiction.options;
    const remOpts = STEPS.remedies.options;
    const justOpts = STEPS.justiciability.options;
    const lbl = (arr, ids) => ids.map(id => {
      const f = arr.find(x=>x.id===id); return f && (f[lang]||f.en);
    }).filter(Boolean);
    const issue = isReg
      ? (lang==='kr' ? '쟁점은 위임입법이 McEldowney 분석틀(수권 → PBS → 하위 사유) 하에서 유효한지이다.'
                     : 'Issue: whether the delegated legislation is valid under McEldowney (empowerment → PBS → sub-grounds).')
      : (lang==='kr' ? '쟁점은 결정이 관할권적 오류로 무효인지(Hossain 3단계 + 중요성)이다.'
                     : 'Issue: whether the decision is invalidated by jurisdictional error (Hossain 3-stage + materiality).');
    const concl = lang==='kr'
      ? `결론적으로 ${lbl(groundOpts, picks.grounds).join(', ') || '선택된 사유'} 사유에 따라 결정은 무효이며, ${lbl(remOpts, picks.remedies).join(', ') || '적절한 구제수단'}으로 시정되어야 한다.`
      : `In conclusion, on the grounds of ${lbl(groundOpts, picks.grounds).join(', ')||'the selected grounds'}, the decision is invalid and ought to be remedied by ${lbl(remOpts, picks.remedies).join(', ')||'the appropriate writ'}.`;
    const matLabel = picks.materiality ? lbl(matOpts, [picks.materiality])[0] : '—';
    return <>
      <div className="section-rule"><span>{T.sIRAC}</span></div>
      <div className="irac-grid">
        <div className="irac-letter I">I</div>
        <div className="irac-block">
          <h3>{T.sIssue}</h3>
          <p>{issue}</p>
          {scenario && <p style={{fontStyle:'italic', color:'var(--ink-3)'}}>{(scenario[lang]||scenario.en).facts}</p>}
          {!scenario && customFacts && <p style={{fontStyle:'italic', color:'var(--ink-3)'}}>{customFacts}</p>}
        </div>
        <div className="irac-letter R">R</div>
        <div className="irac-block">
          <h3>{T.sRule}</h3>
          <div className="irac-sub">
            <strong>{lang==='kr'?'관할':'Jurisdiction'}:</strong> {lbl(jurOpts, picks.jurisdiction).join(' · ')||'—'}
          </div>
          <div className="irac-sub">
            <strong>{lang==='kr'?'심사 범위':'Scope'}:</strong> {lbl(justOpts, picks.justiciability).join(' · ')||'—'}
          </div>
          <div className="irac-sub">
            <strong>{lang==='kr'?'사유':'Grounds'}:</strong> {lbl(groundOpts, picks.grounds).join(' · ')||'—'}
          </div>
          <div className="irac-sub">
            <strong>{lang==='kr'?'중요성':'Materiality'}:</strong> {matLabel}
          </div>
        </div>
        <div className="irac-letter A">A</div>
        <div className="irac-block">
          <h3>{T.sApp}</h3>
          {picks.grounds.length===0 && <p>{lang==='kr'?'사유를 선택해.':'Select grounds to populate application blocks.'}</p>}
          {picks.grounds.map(gid => {
            const g = groundOpts.find(o=>o.id===gid);
            if (!g) return null;
            return <div key={gid} className="irac-sub app">
              <strong>{g[lang]||g.en}.</strong>
              <p style={{margin:'6px 0 0'}}>{g['note_'+lang] || g.note_en}</p>
              {g.cases && g.cases.length>0 && <div style={{marginTop:6, display:'flex', gap:6, flexWrap:'wrap'}}>
                {g.cases.map(cid => CASES[cid] && (
                  <button key={cid} className="case-tag" onClick={()=>onCase(cid)}>
                    <span className="glyph">{CASES[cid].icon}</span>{CASES[cid].name}
                  </button>
                ))}
              </div>}
            </div>;
          })}
        </div>
        <div className="irac-letter C">C</div>
        <div className="irac-block">
          <h3>{T.sConcl}</h3>
          <p>{concl}</p>
        </div>
      </div>
    </>;
  };

  const canNext = () => {
    if (step===0) return scenarioId || customFacts.trim().length>10;
    return true;
  };
  return <div className="page">
    <p className="eyebrow">{lang==='kr'?'시나리오 분석':'scenario analyser'}</p>
    <h1 className="page-title">{T.nav.scenario}</h1>
    <p className="lede">{lang==='kr'?'시나리오를 골라 단계별로 IRAC 답안 골격을 만든다 — 관할 → 심사 범위 → 사유 → 중요성 → 구제.':'Pick a scenario and build an IRAC skeleton step by step — jurisdiction → scope → grounds → materiality → remedies.'}</p>
    <div className="steps-bar">
      {stepLabels.map((lbl,i)=>(
        <button key={i} className={"step-pill"+(step===i?" active":"")+(i<step?" done":"")} onClick={()=>setStep(i)}>
          <span className="stp-num">{T.sStep} {i+1}</span>
          <span className="stp-l">{lbl}</span>
        </button>
      ))}
    </div>
    {renderStep()}
    <div className="step-nav">
      <button className="btn" onClick={()=>setStep(s=>Math.max(0,s-1))} disabled={step===0}>{T.sBack}</button>
      <div style={{display:'flex', gap:10}}>
        <button className="btn" onClick={reset}>{T.sReset}</button>
        {step < stepKeys.length-1 && <button className="btn primary" onClick={()=>setStep(s=>s+1)} disabled={!canNext()}>{T.sNext}</button>}
        {step === stepKeys.length-1 && <button className="btn" onClick={()=>window.print()}>{T.print}</button>}
      </div>
    </div>
  </div>;
}

/* ─── Sidebar + main ─────────────────────────────── */
function App() {
  const [lang, setLang] = useState('kr');
  // Global L-key toggles language (ignore when typing in inputs)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'l' && e.key !== 'L') return;
      const tag = (e.target && e.target.tagName) || '';
      if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target && e.target.isContentEditable)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      setLang(l => l === 'kr' ? 'en' : 'kr');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const [mode, setMode] = useState('home');
  const [weekIdx, setWeekIdx] = useState(0);
  const [caseId, setCaseId] = useState(null);
  const T = I[lang];
  return <div className="app">
    <aside className="sidebar">
      <p className="brand">{T.appTitle}</p>
      <p className="brand-sub">{T.subtitle}</p>
      <nav className="modes">
        <button className={"mode-btn"+(mode==='home'?' active':'')} onClick={()=>setMode('home')}><i className="glyph">◇</i>{lang==='kr'?'개요':'Overview'}</button>
        <button className={"mode-btn"+(mode==='weeks'?' active':'')} onClick={()=>setMode('weeks')}><i className="glyph">§</i>{T.nav.weeks}</button>
        <button className={"mode-btn"+(mode==='scenario'?' active':'')} onClick={()=>setMode('scenario')}><i className="glyph">¶</i>{T.nav.scenario}</button>
        <button className={"mode-btn"+(mode==='db'?' active':'')} onClick={()=>setMode('db')}><i className="glyph">⌕</i>{T.nav.db}</button>
        <button className={"mode-btn"+(mode==='glossary'?' active':'')} onClick={()=>setMode('glossary')}><i className="glyph">☰</i>{T.nav.glossary}</button>
        <button className={"mode-btn"+(mode==='flash'?' active':'')} onClick={()=>setMode('flash')}><i className="glyph">◧</i>{T.nav.flash}</button>
        <button className={"mode-btn"+(mode==='quiz'?' active':'')} onClick={()=>setMode('quiz')}><i className="glyph">?</i>{T.nav.quiz}</button>
        <button className={"mode-btn"+(mode==='exam'?' active':'')} onClick={()=>setMode('exam')}><i className="glyph">★</i>{lang==='kr'?'시험 모드':'Exam mode'}</button>
      </nav>
      {mode==='weeks' && <>
        <hr className="divider"/>
        <div className="week-list">
          {WEEKS.map((w,i)=>{
            const t = w[lang]||w.en;
            return <button key={w.id} className={"week-btn"+(weekIdx===i?' active':'')} onClick={()=>setWeekIdx(i)}>
              <span className="week-num">W{w.num}</span>
              <span className="week-title">{t.title}</span>
            </button>;
          })}
        </div>
      </>}
      <div className="lang-toggle">
        <button onClick={()=>setLang(l=>l==='kr'?'en':'kr')} title="L">{T.lang} <kbd style={{fontSize:'10px',opacity:.5,marginLeft:4}}>L</kbd></button>
        <button onClick={()=>window.print()} style={{marginLeft:'auto'}}>{T.print}</button>
      </div>
    </aside>
    <main>
      {mode==='home' && <window.Home lang={lang} onJump={setMode} onCase={setCaseId}/>}
      {mode==='weeks' && <WeekPage week={WEEKS[weekIdx]} lang={lang} onCase={setCaseId}/>}
      {mode==='scenario' && <ScenarioMode lang={lang} onCase={setCaseId}/>}
      {mode==='db' && <DBSearch lang={lang} onCase={setCaseId}/>}
      {mode==='glossary' && <window.Glossary lang={lang} onCase={setCaseId}/>}
      {mode==='flash' && <Flashcards lang={lang} onCase={setCaseId}/>}
      {mode==='quiz' && <MixedQuiz lang={lang}/>}
      {mode==='exam' && <window.ExamMode lang={lang} onCase={setCaseId}/>}
    </main>
    <CasePanel caseId={caseId} lang={lang} onClose={()=>setCaseId(null)}/>
  </div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

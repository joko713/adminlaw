/* Glossary — institutions, abbreviations, statutes, concepts.
   Renders a searchable, category-grouped dictionary. Case chips open the case panel. */
function Glossary({ lang, onCase }) {
  const KR = lang === 'kr';
  const [query, setQuery] = React.useState('');
  const [activeCat, setActiveCat] = React.useState('all');

  const T = KR ? {
    eyebrow: '기관·용어 사전',
    title: '약어·법률·개념을 한눈에',
    lede: '강의·판례에 등장하는 기관 약자, 법률·조항, 행정법 개념을 카테고리별로 정리했어. 단어를 검색하거나 카테고리 탭으로 좁혀 봐. 케이스 칩을 누르면 판례 카드가 열린다.',
    search: '약어·이름·설명으로 검색…',
    cats: { all:'전체', institutions:'기관·법원·심판소', statutes:'법률·조항', abbreviations:'법리 약어', concepts:'핵심 개념' },
    empty: '해당하는 항목이 없어.',
    related: '관련 판례',
  } : {
    eyebrow: 'Institutions & key-term dictionary',
    title: 'Acronyms, statutes & concepts at a glance',
    lede: 'A categorised dictionary of the institutions, statutory provisions, doctrinal abbreviations, and key concepts that recur across the course. Search by term, or use the tabs to narrow. Click any case chip to open its panel.',
    search: 'Search abbreviation, name or description…',
    cats: { all:'All', institutions:'Institutions, courts & tribunals', statutes:'Statutes & provisions', abbreviations:'Doctrinal abbreviations', concepts:'Key concepts' },
    empty: 'No entries match.',
    related: 'Related cases',
  };

  const G = window.GLOSSARY_DATA || {};
  const categories = [
    { key: 'institutions', items: G.institutions || [] },
    { key: 'statutes', items: G.statutes || [] },
    { key: 'abbreviations', items: G.abbreviations || [] },
    { key: 'concepts', items: G.concepts || [] },
  ];

  const q = query.trim().toLowerCase();
  const matches = (e) => {
    if (!q) return true;
    const haystack = [
      e.abbr || '',
      e.full_en || '', e.full_kr || '',
      e.desc_en || '', e.desc_kr || '',
      (e.cases || []).join(' '),
    ].join(' ').toLowerCase();
    return haystack.includes(q);
  };

  const totalMatched = categories.reduce(
    (n, c) => n + (activeCat !== 'all' && activeCat !== c.key ? 0 : c.items.filter(matches).length),
    0
  );

  const Tag = ({ id }) => {
    const c = window.CASES_DATA && window.CASES_DATA[id];
    const prInfo = window.CASE_PRIORITY && window.CASE_PRIORITY[id];
    const prClass = prInfo ? ' prio-' + prInfo.priority : '';
    if (!c) {
      return <span className={"map-case-tag missing"+prClass}><em>{id}</em></span>;
    }
    return (
      <button
        className={"map-case-tag"+prClass}
        title={c.cite + (prInfo ? ' · S' + prInfo.seminar + ' · ' + prInfo.priority : '')}
        onClick={(e) => { e.stopPropagation(); onCase && onCase(id); }}
      >
        <em>{c.name.replace(/^Plaintiff\s+/, 'Pl ')}</em>
      </button>
    );
  };

  const Entry = ({ e }) => (
    <article className="gloss-entry">
      <div className="gloss-entry-head">
        <span className="gloss-abbr">{e.abbr}</span>
        <span className="gloss-full">{KR ? (e.full_kr || e.full_en) : e.full_en}</span>
      </div>
      <p className="gloss-desc">{KR ? (e.desc_kr || e.desc_en) : e.desc_en}</p>
      {e.cases && e.cases.length > 0 && (
        <div className="gloss-cases">
          <span className="gloss-cases-l">{T.related}</span>
          <div className="gloss-chips">
            {e.cases.map((id, i) => <Tag key={id+'-'+i} id={id} />)}
          </div>
        </div>
      )}
    </article>
  );

  return (
    <div className="page gloss-page">
      <p className="eyebrow">{T.eyebrow}</p>
      <h1 className="page-title">{T.title}</h1>
      <p className="lede">{T.lede}</p>

      <div className="gloss-controls">
        <input
          className="gloss-search"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={T.search}
        />
        <div className="gloss-tabs" role="tablist">
          <button
            role="tab"
            className={"gloss-tab" + (activeCat === 'all' ? ' active' : '')}
            onClick={() => setActiveCat('all')}
          >{T.cats.all}</button>
          {categories.map(c => (
            <button
              key={c.key}
              role="tab"
              className={"gloss-tab" + (activeCat === c.key ? ' active' : '')}
              onClick={() => setActiveCat(c.key)}
            >{T.cats[c.key]} <span className="gloss-tab-count">{c.items.length}</span></button>
          ))}
        </div>
      </div>

      {totalMatched === 0 && (
        <p className="gloss-empty">{T.empty}</p>
      )}

      {categories.map(c => {
        if (activeCat !== 'all' && activeCat !== c.key) return null;
        const filtered = c.items.filter(matches);
        if (filtered.length === 0) return null;
        return (
          <section key={c.key} className="gloss-section">
            <h2 className="gloss-section-h">
              <span>{T.cats[c.key]}</span>
              <span className="gloss-section-count">{filtered.length}{c.items.length !== filtered.length ? ` / ${c.items.length}` : ''}</span>
            </h2>
            <div className="gloss-grid">
              {filtered.map((e, i) => <Entry key={(e.abbr||'') + '-' + i} e={e} />)}
            </div>
          </section>
        );
      })}
    </div>
  );
}
window.Glossary = Glossary;

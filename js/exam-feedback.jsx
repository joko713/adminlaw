/* Examiner-feedback tab — renders window.FEEDBACK_2024 */
function ExamFeedback({ lang }) {
  const F = window.FEEDBACK_2024;
  const h = F.hero[lang];
  const four = F.fourStep[lang];
  const dont = F.donts[lang];
  const mat = F.materiality[lang];
  const priv = F.privative[lang];
  const cu = F.caseUpdates[lang];
  const tl = F.threeLines[lang];
  const mantra = F.mantra[lang];

  return (
    <div className="exam-section fb-section">
      <div className="fb-hero">
        <p className="eyebrow">{h.eyebrow}</p>
        <p className="ex-lede" style={{fontSize:18, marginTop:6}}>{h.lede}</p>
        <blockquote className="fb-quote">{h.quote}</blockquote>
      </div>

      <div className="fb-grid-2">
        <section className="fb-panel">
          <h3 className="fb-h">{four.h}</h3>
          <ol className="fb-steps">
            {four.items.map((it,i)=>(
              <li key={i}><span className="fb-num">{String(i+1).padStart(2,'0')}</span><span>{it}</span></li>
            ))}
          </ol>
        </section>
        <section className="fb-panel fb-mantra-panel">
          <h3 className="fb-h">{lang==='kr'?'단일 만트라':'The single mantra'}</h3>
          <ul className="fb-mantra">
            {mantra.map((m,i)=><li key={i}>{m}</li>)}
          </ul>
        </section>
      </div>

      <section className="fb-panel">
        <h3 className="fb-h">{dont.h}</h3>
        <div className="fb-dont">
          {dont.items.map(([bad, good], i) => (
            <div className="fb-dont-row" key={i}>
              <div className="fb-bad"><span className="fb-x">✕</span> {bad}</div>
              <div className="fb-good"><span className="fb-check">→</span> {good}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="fb-panel">
        <h3 className="fb-h">{mat.h}</h3>
        <table className="fb-table">
          <tbody>
            {mat.rows.map((r,i)=>(
              <tr key={i}><th>{r[0]}</th><td>{r[1]}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="fb-panel">
        <h3 className="fb-h">{priv.h}</h3>
        <table className="fb-table">
          <tbody>
            {priv.rows.map((r,i)=>(
              <tr key={i}><th>{r[0]}</th><td>{r[1]}</td></tr>
            ))}
          </tbody>
        </table>
        <p className="fb-note">{priv.note}</p>
      </section>

      <section className="fb-panel">
        <h3 className="fb-h">{tl.h}</h3>
        <div className="fb-lines">
          {tl.lines.map((l,i)=>(
            <div className={"fb-line fb-line-"+(i+1)} key={i}>
              <div className="fb-line-num">{i+1}</div>
              <div>
                <p className="fb-line-t">{l.t}</p>
                <p className="fb-line-b">{l.b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="fb-panel">
        <h3 className="fb-h">{cu.h}</h3>
        <table className="fb-table fb-table-cases">
          <tbody>
            {cu.rows.map((r,i)=>(
              <tr key={i}><th>{r[0]}</th><td>{r[1]}</td></tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
window.ExamFeedback = ExamFeedback;

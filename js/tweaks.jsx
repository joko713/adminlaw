/* Tweaks panel for Admin Law Study — sophistication options */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "editorial",
  "accent": "indigo",
  "headFont": "sans",
  "density": "regular",
  "texture": "off"
}/*EDITMODE-END*/;

const ACCENTS = {
  indigo: '#2c4a7a',
  sepia:  '#8a5b1c',
  forest: '#3f5e2b',
  rust:   '#9b3919',
  plum:   '#5a3266',
};

function ApplyTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const b = document.body;
    b.dataset.theme = t.theme;
    b.dataset.accent = t.accent;
    b.dataset.headfont = t.headFont;
    b.dataset.density = t.density;
    b.dataset.texture = t.texture;
  }, [t.theme, t.accent, t.headFont, t.density, t.texture]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Theme"/>
      <TweakSelect
        label="Mood"
        value={t.theme}
        options={[
          { value: 'editorial', label: 'Editorial — off-white, charcoal' },
          { value: 'archive',   label: 'Archive — ivory, navy ink' },
          { value: 'paper',     label: 'Paper — warm beige (original)' },
          { value: 'noir',      label: 'Noir — dark sepia' },
        ]}
        onChange={(v) => setTweak('theme', v)}
      />
      <TweakRadio
        label="Texture"
        value={t.texture}
        options={[
          { value: 'off', label: 'Clean' },
          { value: 'on',  label: 'Grain' },
        ]}
        onChange={(v) => setTweak('texture', v)}
      />

      <TweakSection label="Accent"/>
      <TweakColor
        label="Highlight"
        value={ACCENTS[t.accent] || ACCENTS.indigo}
        options={Object.values(ACCENTS)}
        onChange={(v) => {
          const name = Object.keys(ACCENTS).find(k => ACCENTS[k] === v) || 'indigo';
          setTweak('accent', name);
        }}
      />

      <TweakSection label="Type"/>
      <TweakRadio
        label="Headings"
        value={t.headFont}
        options={[
          { value: 'serif', label: 'Serif' },
          { value: 'sans',  label: 'Sans' },
        ]}
        onChange={(v) => setTweak('headFont', v)}
      />
      <TweakRadio
        label="Density"
        value={t.density}
        options={[
          { value: 'regular', label: 'Regular' },
          { value: 'compact', label: 'Compact' },
        ]}
        onChange={(v) => setTweak('density', v)}
      />
    </TweaksPanel>
  );
}

const __tweaksRoot = document.createElement('div');
document.body.appendChild(__tweaksRoot);
ReactDOM.createRoot(__tweaksRoot).render(<ApplyTweaks/>);

/* Apply defaults at startup so first paint already looks refined,
   even before the user opens the Tweaks panel. */
(function bootstrapDefaults() {
  const b = document.body;
  if (!b.dataset.theme) {
    b.dataset.theme = TWEAK_DEFAULTS.theme;
    b.dataset.accent = TWEAK_DEFAULTS.accent;
    b.dataset.headfont = TWEAK_DEFAULTS.headFont;
    b.dataset.density = TWEAK_DEFAULTS.density;
    b.dataset.texture = TWEAK_DEFAULTS.texture;
  }
})();

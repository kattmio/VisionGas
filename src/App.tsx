const tracks = [
  { name: 'Video 1', color: '#73ba25', duration: '00:00:12:15', isActive: true },
  { name: 'Audio A', color: '#3ec4ff', duration: '00:00:12:18', isActive: false },
  { name: 'B-roll', color: '#b56cf5', duration: '00:00:09:28', isActive: false },
]

const bins = [
  { title: 'OPENING SHOT', type: 'VIDEO', duration: '00:00:04:12' },
  { title: 'MOUNTAIN PASS', type: 'VIDEO', duration: '00:00:11:09' },
  { title: 'AERIAL PAN', type: 'VIDEO', duration: '00:00:08:02' },
  { title: 'AMBIENCE', type: 'AUDIO', duration: '00:01:18:00' },
  { title: 'LOGO MOTION', type: 'FX', duration: '00:00:03:00' },
]

const effects = [
  'Color Match',
  'Cinematic Glow',
  'Soft Focus',
  'Warp Stabilizer',
  'Audio EQ',
  'Transient Shaper',
]

const markers = ['A', 'B', 'C']

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">V</div>
          <div>
            <div className="brand-name">VisionGas</div>
            <div className="brand-subtitle">OpenSUSE Production Suite</div>
          </div>
        </div>

        <nav className="top-actions" aria-label="Main menu">
          <button className="chip active">Project</button>
          <button className="chip">Edit</button>
          <button className="chip">Effects</button>
          <button className="chip">Render</button>
        </nav>

        <div className="status-panel">
          <div className="status-dot" />
          <span>Ready</span>
        </div>
      </header>

      <main className="workspace">
        <aside className="sidebar left-panel">
          <div className="panel-header">
            <span>Media Bin</span>
            <button className="small-button">+ Add</button>
          </div>

          <div className="search-box">Search media</div>

          <div className="bin-list">
            {bins.map((item) => (
              <div className="bin-item" key={item.title}>
                <div className="thumbnail" />
                <div className="bin-meta">
                  <strong>{item.title}</strong>
                  <span>{item.type}</span>
                </div>
                <div className="duration">{item.duration}</div>
              </div>
            ))}
          </div>
        </aside>

        <section className="editor-area">
          <div className="preview-panel">
            <div className="preview-header">
              <div className="preview-title-group">
                <span className="pill success">LIVE</span>
                <h2>Autumn Skyline</h2>
              </div>
              <div className="preview-stats">
                <span>4K</span>
                <span>30 fps</span>
                <span>10-bit</span>
              </div>
            </div>

            <div className="preview-canvas">
              <div className="sun" />
              <div className="mountains mountain-back" />
              <div className="mountains mountain-front" />
              <div className="glow-overlay" />
            </div>

            <div className="scrub-bar">
              <div className="scrub-head" />
              {markers.map((m) => (
                <span key={m} className="marker" data-label={m} />
              ))}
              <div className="timeline-ruler" />
            </div>
          </div>

          <div className="timeline-panel">
            <div className="timeline-toolbar">
              <button className="tool-button">Cut</button>
              <button className="tool-button">Trim</button>
              <button className="tool-button">Fade</button>
              <button className="tool-button accent">Export</button>
            </div>

            <div className="track-list">
              {tracks.map((track, index) => (
                <div key={track.name} className={`track ${track.isActive ? 'active' : ''}`}>
                  <div className="track-label">
                    <span className="track-dot" style={{ background: track.color }} />
                    {track.name}
                  </div>
                  <div className="track-body">
                    <div className="clip clip-main" style={{ background: track.color }}>
                      <span>{track.name}</span>
                      <small>{track.duration}</small>
                    </div>
                    {index === 0 && (
                      <div className="clip clip-small purple">
                        <span>Motion</span>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="clip clip-small blue">
                        <span>Overlay</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="sidebar right-panel">
          <div className="panel-header">
            <span>Inspector</span>
            <button className="small-button">Save</button>
          </div>

          <div className="inspector-card">
            <label>Project</label>
            <div className="project-name">Autumn Skyline</div>
          </div>

          <div className="inspector-card">
            <label>Effects</label>
            <div className="effect-list">
              {effects.map((effect) => (
                <button className="effect-item" key={effect}>{effect}</button>
              ))}
            </div>
          </div>

          <div className="inspector-card">
            <label>Render</label>
            <div className="render-card">
              <div className="render-stats">
                <span>H.264</span>
                <strong>4K UHD</strong>
              </div>
              <div className="progress">
                <div className="progress-bar" />
              </div>
              <small>Ready for OpenSUSE export</small>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}

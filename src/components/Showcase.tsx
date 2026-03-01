'use client'

import styles from '@/styles/Showcase.module.css'

export default function Showcase() {
  return (
    <section id="showcase" className={styles.showcase}>
      <div className={styles.showcaseInner}>
        <div className={styles.showcaseText}>
          <div className={styles.sectionTag}>L'APP</div>
          <h2 className={styles.sectionTitle}>
            Conçu pour
            <br />
            <span style={{
              background: 'linear-gradient(90deg,var(--purple-light),var(--cyan))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              l'essentiel
            </span>
          </h2>
          <p className={styles.sectionSub}>
            Une interface épurée, sombre, rapide. Pas de distractions — juste toi, ton groupe, et ton objectif.
          </p>

          <div className={styles.showcaseList}>
            <div className={styles.showcaseItem}>
              <div className={styles.siIcon}>⚡</div>
              <div>
                <div className={styles.siTitle}>2 minutes par jour</div>
                <div className={styles.siDesc}>
                  Le check-in complet prend moins de 2 minutes. Pas d'excuse, pas de friction.
                </div>
              </div>
            </div>
            <div className={styles.showcaseItem}>
              <div className={styles.siIcon}>🌐</div>
              <div>
                <div className={styles.siTitle}>Synchronisation instantanée</div>
                <div className={styles.siDesc}>
                  Tout ton groupe voit ton check-in en temps réel. L'accountability fonctionne.
                </div>
              </div>
            </div>
            <div className={styles.showcaseItem}>
              <div className={styles.siIcon}>🔒</div>
              <div>
                <div className={styles.siTitle}>Données privées</div>
                <div className={styles.siDesc}>
                  Tes données restent dans ton cercle. Seuls tes membres voient ce que tu partages.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.showcasePhones}>
          {/* Phone 1 */}
          <div className={styles.phoneMock1}>
            <div className={styles.phoneNotch}></div>
            <div className={styles.phoneScreen}>
              <div className={styles.psGrad}>
                <div className={styles.psTopbar}>
                  <span>9:41</span>
                  <span>🔋</span>
                </div>
                <div className={styles.psContent}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: '900',
                      background: 'linear-gradient(90deg,#B060FF,#00CFFF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      Circl
                    </span>
                    <span style={{
                      background: 'rgba(56,189,248,.14)',
                      border: '1px solid rgba(56,189,248,.3)',
                      borderRadius: '20px',
                      padding: '1px 5px',
                      fontSize: '6px',
                      fontWeight: '700',
                      color: '#38BDF8',
                    }}>
                      BETA
                    </span>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: 'white', lineHeight: '1.2' }}>
                    Lancer mon side-project
                  </div>
                  <div style={{
                    background: 'rgba(255,255,255,.06)',
                    border: '1px solid rgba(255,255,255,.08)',
                    borderRadius: '12px',
                    padding: '9px 10px',
                    marginTop: '8px',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '16px', fontWeight: '800', color: 'var(--cyan)' }}>2 840</span>
                      <span style={{ fontSize: '11px', fontWeight: '700', color: '#F5A623' }}>🔥 12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 2 */}
          <div className={styles.phoneMock2}>
            <div className={styles.phoneNotch}></div>
            <div className={styles.phoneScreen}>
              <div className={styles.psGrad2}>
                <div style={{
                  background: 'rgba(19,18,42,.9)',
                  padding: '42px 12px 10px',
                  borderBottom: '1px solid rgba(255,255,255,.05)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  flexShrink: 0,
                }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '9px',
                    background: 'linear-gradient(135deg,#9333EA,#38BDF8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: '800',
                    color: 'white',
                    flexShrink: 0,
                  }}>
                    F
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: '700', color: 'white' }}>
                      Focus Achievers
                    </div>
                    <div style={{ fontSize: '7px', color: 'rgba(255,255,255,.4)' }}>
                      7 membres
                    </div>
                  </div>
                </div>
                <div style={{ flex: 1, overflow: 'hidden', padding: '8px 10px' }}>
                  <div style={{ fontSize: '8px', color: 'rgba(255,255,255,.8)' }}>
                    💬 Check-in fait ! 6h de code 🚀
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

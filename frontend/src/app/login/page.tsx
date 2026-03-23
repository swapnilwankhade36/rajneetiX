'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [activeTab, setActiveTab] = useState<'pan' | 'voter'>('pan');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans" style={{ background: '#060e1f' }}>

      {/* ══════════════════════════════════════════
          LAYER 1 – PARLIAMENT PHOTO BACKGROUND
      ══════════════════════════════════════════ */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541904815592-cb8e670d8a59?auto=format&fit=crop&w=2400&q=90')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          filter: 'brightness(0.35) saturate(1.2)',
        }}
      />

      {/* ══════════════════════════════════════════
          LAYER 2 – DARK GRADIENT OVERLAY (bottom fade)
      ══════════════════════════════════════════ */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(180deg, rgba(6,14,31,0.3) 0%, rgba(6,14,31,0.75) 60%, rgba(6,14,31,0.97) 100%)',
        }}
      />

      {/* ══════════════════════════════════════════
          LAYER 3 – GLOWING INDIA MAP (center-left)
      ══════════════════════════════════════════ */}
      <div
        className="absolute z-[2] pointer-events-none"
        style={{
          width: 780,
          height: 780,
          left: '3%',
          top: '14%',
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/e/e4/India_map_en.svg')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'brightness(4) saturate(100) hue-rotate(185deg) drop-shadow(0 0 24px rgba(0,190,255,0.9))',
          opacity: 0.22,
          mixBlendMode: 'screen',
        }}
      />

      {/* ══════════════════════════════════════════
          LAYER 4 – TECH GRID (subtle dot pattern)
      ══════════════════════════════════════════ */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,120,255,0.18) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          opacity: 0.6,
          mixBlendMode: 'screen',
        }}
      />

      {/* ══════════════════════════════════════════
          LAYER 5 – RIGHT SIDE NETWORK GLOW
      ══════════════════════════════════════════ */}
      <div
        className="absolute right-0 top-0 bottom-0 z-[4] pointer-events-none"
        style={{
          width: '45%',
          background:
            'radial-gradient(ellipse at 80% 50%, rgba(0,74,153,0.35) 0%, transparent 70%)',
        }}
      />

      {/* ══════════════════════════════════════════
          LAYER 6 – AMBIENT LIGHT STREAKS
      ══════════════════════════════════════════ */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: 1,
              height: '100%',
              left: `${12 + i * 14}%`,
              background: `linear-gradient(180deg, transparent 0%, rgba(0,140,255,0.06) 50%, transparent 100%)`,
              transform: `rotate(${-5 + i * 2}deg)`,
              transformOrigin: 'center',
            }}
          />
        ))}
      </div>

      {/* ══════════════════════════════════════════
          TOP HEADER BAR
      ══════════════════════════════════════════ */}
      <header className="relative z-20 w-full flex flex-col items-center">
        {/* White banner (full width) */}
        <div
          className="w-full flex flex-col items-center"
          style={{
            background: 'linear-gradient(90deg, rgba(240,245,255,0.97) 0%, rgba(255,255,255,0.92) 50%, rgba(220,230,245,0.88) 100%)',
            borderBottom: '1px solid rgba(0,74,153,0.25)',
            boxShadow: '0 2px 24px rgba(0,40,120,0.18)',
            paddingTop: 8,
            paddingBottom: 4,
          }}
        >
          {/* TransparencyGov top-left */}
          <div className="w-full max-w-[1400px] px-8 flex items-center justify-between">
            <span
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: '#0A1F44',
                letterSpacing: '-0.5px',
                textShadow: '0 1px 4px rgba(0,74,153,0.12)',
              }}
            >
              TransparencyGov
            </span>
            <div style={{ width: 140 }} />
          </div>

          {/* Ashoka Emblem */}
          <div className="flex flex-col items-center mt-1 mb-1" style={{ gap: 2 }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/800px-Emblem_of_India.svg.png"
              alt="Emblem of India"
              style={{
                height: 68,
                width: 'auto',
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
              }}
            />
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                color: '#7A5C00',
                letterSpacing: 3,
                marginTop: 2,
              }}
            >
              सत्यमेव जयते
            </span>
          </div>
        </div>

        {/* Sub-banner */}
        <div
          className="w-full flex items-center justify-center"
          style={{
            background: 'rgba(240,244,252,0.88)',
            borderBottom: '2px solid rgba(0,74,153,0.22)',
            padding: '6px 0',
          }}
        >
          <span
            style={{
              fontSize: 13.5,
              fontWeight: 600,
              color: '#1a2e5a',
              letterSpacing: 0.6,
            }}
          >
            National Portal of India
          </span>
          <span style={{ color: '#8096bb', margin: '0 10px', fontSize: 14 }}>|</span>
          <span
            style={{
              fontSize: 13.5,
              fontWeight: 600,
              color: '#1a2e5a',
              letterSpacing: 0.6,
            }}
          >
            e-Verification Services
          </span>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════ */}
      <main
        className="relative z-10 flex items-center justify-between w-full max-w-[1400px] mx-auto px-12"
        style={{ minHeight: 'calc(100vh - 160px)', paddingTop: 40, paddingBottom: 80 }}
      >
        {/* ——— LEFT: HERO TEXT ——— */}
        <div style={{ maxWidth: 560, marginTop: 20 }}>
          {/* Indian Flag badge */}
          <div
            className="flex items-center gap-3 mb-8"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 40,
              padding: '6px 18px 6px 10px',
              backdropFilter: 'blur(8px)',
              display: 'inline-flex',
              width: 'fit-content',
            }}
          >
            {/* Tricolor mini bar */}
            <div style={{ display: 'flex', flexDirection: 'column', width: 20, height: 16, borderRadius: 2, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.3)', flexShrink: 0 }}>
              <div style={{ flex: 1, background: '#FF9933' }} />
              <div style={{ flex: 1, background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', border: '1.5px solid #003087' }} />
              </div>
              <div style={{ flex: 1, background: '#138808' }} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: 0.8 }}>
              Government of India — Digital Initiative
            </span>
          </div>

          <h1
            style={{
              fontSize: 62,
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              textShadow: '0 0 60px rgba(0,120,255,0.5), 0 4px 32px rgba(0,0,0,0.6)',
              marginBottom: 20,
            }}
          >
            Your Voice,<br />
            <span
              style={{
                background: 'linear-gradient(90deg, #60b4ff 0%, #a0d8ff 60%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Verified.
            </span>
          </h1>

          <p
            style={{
              fontSize: 19,
              fontWeight: 400,
              color: 'rgba(200,220,255,0.88)',
              lineHeight: 1.65,
              maxWidth: 420,
              textShadow: '0 2px 12px rgba(0,0,0,0.5)',
              marginBottom: 36,
            }}
          >
            Access political accountability through secure, government-grade verification.
          </p>

          {/* Trust badges */}
          <div className="flex items-center gap-4 flex-wrap">
            {[
              { icon: '🔒', label: 'End-to-End Encrypted' },
              { icon: '🏛️', label: 'Govt. Certified' },
              { icon: '✅', label: 'ISO 27001' },
            ].map((badge) => (
              <div
                key={badge.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  borderRadius: 8,
                  padding: '6px 14px',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span style={{ fontSize: 14 }}>{badge.icon}</span>
                <span style={{ fontSize: 11.5, fontWeight: 600, color: 'rgba(180,210,255,0.9)', letterSpacing: 0.4 }}>
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ——— RIGHT: GLASS LOGIN CARD ——— */}
        <div style={{ width: 460, flexShrink: 0, position: 'relative' }}>
          {/* Outer glow ring */}
          <div
            style={{
              position: 'absolute',
              inset: -2,
              borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(0,120,255,0.5) 0%, rgba(0,74,153,0.2) 50%, rgba(40,167,69,0.3) 100%)',
              zIndex: 0,
              filter: 'blur(1px)',
            }}
          />

          {/* Card */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              background: 'linear-gradient(145deg, rgba(6,18,45,0.75) 0%, rgba(10,25,55,0.85) 100%)',
              backdropFilter: 'blur(28px) saturate(160%)',
              WebkitBackdropFilter: 'blur(28px) saturate(160%)',
              border: '1px solid rgba(100,160,255,0.25)',
              borderRadius: 22,
              overflow: 'visible',
              boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06) inset, 0 1px 0 rgba(255,255,255,0.12) inset',
              paddingBottom: 8,
            }}
          >
            {/* Top emblem badge */}
            <div
              style={{
                position: 'absolute',
                top: -44,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 88,
                height: 88,
                borderRadius: '50%',
                background: 'linear-gradient(145deg, #fff8d6 0%, #f5e070 50%, #e8c940 100%)',
                border: '3px solid rgba(255,255,255,0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(0,0,0,0.35), 0 0 0 4px rgba(255,255,255,0.15)',
                zIndex: 10,
                flexDirection: 'column',
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/800px-Emblem_of_India.svg.png"
                alt="Emblem"
                style={{ height: 50, width: 'auto' }}
              />
              <span style={{ fontSize: 4.5, fontWeight: 800, color: '#5a3e00', letterSpacing: 1.5, marginTop: 1 }}>
                सत्यमेव जयते
              </span>
            </div>

            {/* Card header */}
            <div style={{ textAlign: 'center', padding: '60px 32px 20px' }}>
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.3px',
                  lineHeight: 1.25,
                  textShadow: '0 2px 16px rgba(0,80,200,0.4)',
                }}
              >
                Citizen Login &<br />Accountability Portal
              </h2>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(100,160,255,0.3), transparent)', margin: '0 24px 24px' }} />

            {/* Card body */}
            <div style={{ padding: '0 28px 24px' }}>

              {/* TABS */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 12,
                  padding: 4,
                  marginBottom: 22,
                }}
              >
                {(['pan', 'voter'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '10px 0',
                      borderRadius: 9,
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 700,
                      fontSize: 14,
                      letterSpacing: 0.3,
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 7,
                      ...(activeTab === tab
                        ? {
                            background: 'linear-gradient(135deg, #004A99 0%, #0066cc 100%)',
                            color: '#ffffff',
                            boxShadow: '0 4px 16px rgba(0,74,153,0.5)',
                          }
                        : {
                            background: 'transparent',
                            color: 'rgba(180,200,240,0.7)',
                          }),
                    }}
                  >
                    {tab === 'pan' ? (
                      <>
                        {/* PAN icon */}
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="5" width="20" height="14" rx="2" />
                          <line x1="2" y1="10" x2="22" y2="10" />
                        </svg>
                        PAN Card
                      </>
                    ) : (
                      <>
                        {/* Voter icon */}
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        Voter ID
                      </>
                    )}
                  </button>
                ))}
              </div>

              {/* INPUTS */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {/* PAN / Voter field */}
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    placeholder={activeTab === 'pan' ? 'Enter PAN Number' : 'Enter Voter ID'}
                    style={{
                      width: '100%',
                      height: 52,
                      background: 'rgba(255,255,255,0.92)',
                      border: '1.5px solid rgba(0,74,153,0.3)',
                      borderRadius: 12,
                      padding: '0 48px 0 18px',
                      fontSize: 14.5,
                      fontWeight: 500,
                      color: '#0A1F44',
                      outline: 'none',
                      boxSizing: 'border-box',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.15), inset 0 1px 3px rgba(0,0,0,0.06)',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#004A99';
                      e.target.style.boxShadow = '0 0 0 3px rgba(0,74,153,0.2), 0 2px 12px rgba(0,0,0,0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(0,74,153,0.3)';
                      e.target.style.boxShadow = '0 2px 12px rgba(0,0,0,0.15), inset 0 1px 3px rgba(0,0,0,0.06)';
                    }}
                  />
                  <svg
                    style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', color: '#004A99' }}
                    width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>

                {/* Password field */}
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter Password"
                    style={{
                      width: '100%',
                      height: 52,
                      background: 'rgba(255,255,255,0.92)',
                      border: '1.5px solid rgba(0,74,153,0.3)',
                      borderRadius: 12,
                      padding: '0 48px 0 18px',
                      fontSize: 14.5,
                      fontWeight: 500,
                      color: '#0A1F44',
                      outline: 'none',
                      boxSizing: 'border-box',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.15), inset 0 1px 3px rgba(0,0,0,0.06)',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#004A99';
                      e.target.style.boxShadow = '0 0 0 3px rgba(0,74,153,0.2), 0 2px 12px rgba(0,0,0,0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(0,74,153,0.3)';
                      e.target.style.boxShadow = '0 2px 12px rgba(0,0,0,0.15), inset 0 1px 3px rgba(0,0,0,0.06)';
                    }}
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: 14,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#004A99',
                      padding: 2,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {showPassword ? (
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* BUTTONS */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 6 }}>
                  {/* Request OTP */}
                  <button
                    style={{
                      width: '100%',
                      height: 52,
                      background: 'linear-gradient(135deg, #004A99 0%, #0062cc 50%, #0075d4 100%)',
                      border: 'none',
                      borderRadius: 12,
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: 15,
                      letterSpacing: 0.4,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 9,
                      boxShadow: '0 6px 24px rgba(0,74,153,0.5), 0 1px 0 rgba(255,255,255,0.15) inset',
                      transition: 'transform 0.15s, box-shadow 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 10px 32px rgba(0,74,153,0.6), 0 1px 0 rgba(255,255,255,0.15) inset';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 24px rgba(0,74,153,0.5), 0 1px 0 rgba(255,255,255,0.15) inset';
                    }}
                  >
                    <svg width="19" height="19" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <line x1="12" y1="18" x2="12" y2="18" strokeLinecap="round" strokeWidth="3" />
                    </svg>
                    Request OTP
                  </button>

                  {/* Login with Password */}
                  <button
                    onClick={() => router.push('/dashboard')}
                    style={{
                      width: '100%',
                      height: 52,
                      background: 'linear-gradient(135deg, #1a3a6b 0%, #1e4a8a 100%)',
                      border: '1.5px solid rgba(100,160,255,0.3)',
                      borderRadius: 12,
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: 15,
                      letterSpacing: 0.4,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 9,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                      transition: 'transform 0.15s, background 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                      (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg, #243f7a 0%, #2357a5 100%)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(135deg, #1a3a6b 0%, #1e4a8a 100%)';
                    }}
                  >
                    <svg width="19" height="19" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Login with Password
                  </button>
                </div>
              </div>

              {/* ── CARD FOOTER LINKS ── */}
              <div
                style={{
                  borderTop: '1px solid rgba(100,160,255,0.15)',
                  marginTop: 22,
                  paddingTop: 18,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <a
                    href="#"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 12.5,
                      color: 'rgba(180,210,255,0.85)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(180,210,255,0.85)')}
                  >
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    Detail Register
                  </a>
                  <a
                    href="#"
                    style={{
                      fontSize: 12.5,
                      color: 'rgba(180,210,255,0.85)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(180,210,255,0.85)')}
                  >
                    Forgot Password?
                  </a>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <a
                    href="#"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 12.5,
                      color: 'rgba(180,210,255,0.85)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(180,210,255,0.85)')}
                  >
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    Sign in using other methods
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ══════════════════════════════════════════
          FOOTER DISCLAIMER
      ══════════════════════════════════════════ */}
      <footer
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 30,
          textAlign: 'center',
          padding: '8px 20px',
          background: 'rgba(4,10,26,0.92)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(100,140,255,0.12)',
        }}
      >
        <p style={{ fontSize: 11.5, color: 'rgba(140,165,210,0.75)', fontWeight: 500, letterSpacing: 0.3 }}>
          Official disclaimers: National portal of India including e-services or accountabilities. Citizens, registers and for official government purposes only.
        </p>
      </footer>
    </div>
  );
}

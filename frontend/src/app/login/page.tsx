'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [activeTab, setActiveTab] = useState<'pan' | 'voter'>('pan');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        fontFamily: '"Inter", "Segoe UI", sans-serif',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── LAYER 1: Parliament background ── */}
      {/* CSS-based dark government building ambiance (fallback when image blocked) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: 'linear-gradient(160deg, #07112a 0%, #0c1e3d 25%, #0b1a35 55%, #091528 100%)',
        }}
      />
      {/* Parliament photo overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: "url('/parliament.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          filter: 'brightness(0.45) saturate(1.05) sepia(0.15)',
        }}
      />

      {/* ── LAYER 2: Blue-dark tint overlay ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(180deg, rgba(5,15,40,0.35) 0%, rgba(5,18,45,0.6) 55%, rgba(3,12,35,0.85) 100%)',
        }}
      />

      {/* ── LAYER 3: Cyan dotted India map (left side) ── */}
      <div
        style={{
          position: 'absolute',
          zIndex: 2,
          pointerEvents: 'none',
          width: 640,
          height: 720,
          left: '-40px',
          top: '140px',
          backgroundImage: "url('/map_india.svg')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter:
            'brightness(5) saturate(200) hue-rotate(180deg) drop-shadow(0 0 18px rgba(0,210,255,0.85))',
          opacity: 0.28,
          mixBlendMode: 'screen',
        }}
      />

      {/* ── LAYER 4: Network glow on right ── */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 2,
          pointerEvents: 'none',
          width: '42%',
          background:
            'radial-gradient(ellipse at 90% 50%, rgba(0,80,180,0.22) 0%, transparent 70%)',
        }}
      />

      {/* ══════════════════════════════════════
          TOP HEADER (exact match to reference)
      ══════════════════════════════════════ */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top white→transparent gradient bar */}
        <div
          style={{
            width: '100%',
            background:
              'linear-gradient(90deg, rgba(240,244,252,0.97) 0%, rgba(235,241,250,0.92) 30%, rgba(200,215,240,0.55) 65%, rgba(120,150,200,0.15) 100%)',
            display: 'flex',
            alignItems: 'center',
            padding: '8px 24px 4px',
            position: 'relative',
            minHeight: 90,
            borderBottom: '1px solid rgba(180,200,230,0.4)',
          }}
        >
          {/* TransparencyGov — left */}
          <span
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: '#0d1f3c',
              letterSpacing: '-0.3px',
              position: 'absolute',
              left: 28,
              bottom: 22,
            }}
          >
            TransparencyGov
          </span>

          {/* Emblem — centered */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src="/emblem.svg"
              alt="Emblem of India"
              style={{ height: 72, width: 'auto' }}
            />
            <span
              style={{
                fontSize: 8.5,
                fontWeight: 700,
                color: '#5c3f00',
                letterSpacing: 2.5,
                marginTop: 2,
              }}
            >
              सत्यमेव जयते
            </span>
          </div>
        </div>

        {/* Sub-banner: "National Portal of India | e-Verification Services" */}
        <div
          style={{
            width: '100%',
            background: 'rgba(228,236,248,0.72)',
            backdropFilter: 'blur(4px)',
            borderBottom: '1.5px solid rgba(160,185,220,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5px 0',
          }}
        >
          <span
            style={{
              fontSize: 13.5,
              fontWeight: 500,
              color: '#1a2e54',
              letterSpacing: 0.3,
            }}
          >
            National Portal of India
          </span>
          <span
            style={{ color: '#8ca0c4', margin: '0 10px', fontSize: 14 }}
          >
            |
          </span>
          <span
            style={{
              fontSize: 13.5,
              fontWeight: 500,
              color: '#1a2e54',
              letterSpacing: 0.3,
            }}
          >
            e-Verification Services
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MAIN CONTENT AREA
      ══════════════════════════════════════ */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 1300,
          width: '100%',
          margin: '0 auto',
          padding: '32px 48px 80px',
        }}
      >
        {/* ── LEFT: Hero text ── */}
        <div style={{ maxWidth: 420 }}>
          <h1
            style={{
              fontSize: '3.15rem',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: 14,
              letterSpacing: '-1px',
              textShadow: '0 2px 24px rgba(0,0,0,0.55)',
            }}
          >
            Your Voice, Verified.
          </h1>
          <p
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: 'rgba(210,225,250,0.88)',
              lineHeight: 1.55,
              maxWidth: 360,
              textShadow: '0 1px 10px rgba(0,0,0,0.4)',
            }}
          >
            Access political accountability
            <br />
            through secure verification.
          </p>
        </div>

        {/* ── RIGHT: Login card ── */}
        <div style={{ width: 390, flexShrink: 0, position: 'relative' }}>

          {/* Emblem badge on top of card */}
          <div
            style={{
              position: 'absolute',
              top: -44,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
              width: 86,
              height: 86,
              borderRadius: '50%',
              background:
                'linear-gradient(145deg, #fffbe8 0%, #f5e070 45%, #e8c230 100%)',
              border: '2.5px solid rgba(255,255,255,0.9)',
              boxShadow:
                '0 6px 28px rgba(0,0,0,0.3), 0 0 0 4px rgba(255,255,255,0.18)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/emblem.svg"
              alt="Emblem"
              style={{ height: 50, width: 'auto' }}
            />
            <span
              style={{
                fontSize: 4.5,
                fontWeight: 800,
                color: '#3a2800',
                letterSpacing: 1.5,
                marginTop: 1,
              }}
            >
              सत्यमेव जयते
            </span>
          </div>

          {/* Card body */}
          <div
            style={{
              background:
                'linear-gradient(155deg, rgba(30,60,120,0.52) 0%, rgba(20,45,95,0.65) 100%)',
              backdropFilter: 'blur(22px) saturate(150%)',
              WebkitBackdropFilter: 'blur(22px) saturate(150%)',
              border: '1px solid rgba(140,180,255,0.28)',
              borderRadius: 18,
              boxShadow:
                '0 20px 60px rgba(0,0,80,0.45), 0 0 0 1px rgba(255,255,255,0.07) inset',
              padding: '60px 28px 0',
            }}
          >
            {/* Title */}
            <div style={{ textAlign: 'center', marginBottom: 18 }}>
              <h2
                style={{
                  fontSize: 20.5,
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.3,
                  letterSpacing: '-0.2px',
                  margin: 0,
                }}
              >
                Citizen Login &<br />Accountability Portal
              </h2>
            </div>

            {/* TABS */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                background: 'rgba(255,255,255,0.14)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: 10,
                padding: 3,
                marginBottom: 16,
              }}
            >
              {/* PAN Card tab */}
              <button
                onClick={() => setActiveTab('pan')}
                style={{
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: 8,
                  padding: '9px 0',
                  fontSize: 13.5,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 7,
                  transition: 'all 0.18s',
                  ...(activeTab === 'pan'
                    ? {
                        background: '#ffffff',
                        color: '#0d1f3c',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                      }
                    : {
                        background: 'transparent',
                        color: 'rgba(220,232,255,0.75)',
                      }),
                }}
              >
                {/* Credit card icon */}
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
                PAN Card
              </button>

              {/* Voter ID tab */}
              <button
                onClick={() => setActiveTab('voter')}
                style={{
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: 8,
                  padding: '9px 0',
                  fontSize: 13.5,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.18s',
                  ...(activeTab === 'voter'
                    ? {
                        background: '#ffffff',
                        color: '#0d1f3c',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                      }
                    : {
                        background: 'transparent',
                        color: 'rgba(220,232,255,0.75)',
                      }),
                }}
              >
                Voter ID
              </button>
            </div>

            {/* Input: PAN / Voter ID */}
            <div style={{ position: 'relative', marginBottom: 11 }}>
              <input
                type="text"
                placeholder={activeTab === 'pan' ? 'Enter PAN Number' : 'Enter Voter ID'}
                style={{
                  width: '100%',
                  height: 48,
                  background: 'rgba(255,255,255,0.93)',
                  border: '1px solid rgba(200,215,240,0.6)',
                  borderRadius: 10,
                  padding: '0 46px 0 16px',
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#0d1f3c',
                  outline: 'none',
                  boxSizing: 'border-box',
                  boxShadow: '0 2px 8px rgba(0,0,60,0.12)',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2B6CC4';
                  e.target.style.boxShadow = '0 0 0 2.5px rgba(43,108,196,0.22)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(200,215,240,0.6)';
                  e.target.style.boxShadow = '0 2px 8px rgba(0,0,60,0.12)';
                }}
              />
              {/* Card icon right */}
              <svg
                style={{
                  position: 'absolute',
                  right: 14,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#888',
                }}
                width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
            </div>

            {/* Input: Password */}
            <div style={{ position: 'relative', marginBottom: 14 }}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                style={{
                  width: '100%',
                  height: 48,
                  background: 'rgba(255,255,255,0.93)',
                  border: '1px solid rgba(200,215,240,0.6)',
                  borderRadius: 10,
                  padding: '0 46px 0 16px',
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#0d1f3c',
                  outline: 'none',
                  boxSizing: 'border-box',
                  boxShadow: '0 2px 8px rgba(0,0,60,0.12)',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2B6CC4';
                  e.target.style.boxShadow = '0 0 0 2.5px rgba(43,108,196,0.22)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(200,215,240,0.6)';
                  e.target.style.boxShadow = '0 2px 8px rgba(0,0,60,0.12)';
                }}
              />
              {/* Eye-slash icon right */}
              <button
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 2,
                  color: '#888',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {showPassword ? (
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                    <path d="M6.51 6.51L17.49 17.49"/>
                  </svg>
                )}
              </button>
            </div>

            {/* Button: Request OTP */}
            <button
              style={{
                width: '100%',
                height: 46,
                background: 'linear-gradient(90deg, #2B6CC4 0%, #3578d4 100%)',
                border: 'none',
                borderRadius: 10,
                color: '#ffffff',
                fontSize: 14.5,
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 9,
                marginBottom: 10,
                boxShadow: '0 4px 18px rgba(43,108,196,0.45)',
                letterSpacing: 0.2,
                transition: 'opacity 0.15s, transform 0.12s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = '1';
              }}
            >
              {/* Phone icon */}
              <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeWidth="3"/>
              </svg>
              Request OTP
            </button>

            {/* Button: Login with Password */}
            <button
              onClick={() => router.push('/dashboard')}
              style={{
                width: '100%',
                height: 46,
                background: 'linear-gradient(90deg, #2B6CC4 0%, #3578d4 100%)',
                border: 'none',
                borderRadius: 10,
                color: '#ffffff',
                fontSize: 14.5,
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 0,
                boxShadow: '0 4px 18px rgba(43,108,196,0.45)',
                letterSpacing: 0.2,
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = '1';
              }}
            >
              Login with Password
            </button>

            {/* Card footer */}
            <div
              style={{
                borderTop: '1px solid rgba(255,255,255,0.13)',
                marginTop: 18,
                padding: '14px 0 16px',
              }}
            >
              {/* Detail Register | Forgot Password? */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 10,
                }}
              >
                <a
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    fontSize: 12.5,
                    color: 'rgba(215,228,255,0.85)',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  {/* Document icon */}
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                  Detail Register
                </a>
                <a
                  href="#"
                  style={{
                    fontSize: 12.5,
                    color: 'rgba(215,228,255,0.85)',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  Forgot Password?
                </a>
              </div>

              {/* Sign in using other methods */}
              <div style={{ textAlign: 'center' }}>
                <a
                  href="#"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 12.5,
                    color: 'rgba(215,228,255,0.85)',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  {/* Eye icon */}
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  Sign in using other methods
                  {/* External link icon */}
                  <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          FOOTER DISCLAIMER
      ══════════════════════════════════════ */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 30,
          background: 'rgba(3,10,28,0.88)',
          backdropFilter: 'blur(8px)',
          borderTop: '1px solid rgba(100,140,220,0.15)',
          padding: '7px 20px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: 11,
            color: 'rgba(140,165,210,0.72)',
            fontWeight: 400,
            margin: 0,
            letterSpacing: 0.2,
          }}
        >
          Official disclaimers: Natiol and spoce of India siiincluding: ovennocoudund:t or accoatablities. | Citizzars, registers andefor official government.
        </p>
      </div>
    </div>
  );
}

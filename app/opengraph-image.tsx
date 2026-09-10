import { ImageResponse } from 'next/og';
export const alt = 'AriesBlaze — John Oyekunle, Software & Product Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#faf9f6',
        padding: '65px 75px',
        color: '#20211f',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 27,
        }}
      >
        <span>
          AriesBlaze<span style={{ color: '#c54c2b' }}>.</span>
        </span>
        <span style={{ fontSize: 19, color: '#686963' }}>Lagos, Nigeria</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: 23, color: '#686963', marginBottom: 20 }}>
          John Oyekunle
        </span>
        <span style={{ fontSize: 76, lineHeight: 1.1, letterSpacing: '-4px' }}>
          Software &
        </span>
        <span style={{ fontSize: 76, lineHeight: 1.1, letterSpacing: '-4px' }}>
          Product Developer.
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          borderTop: '1px solid #deded6',
          paddingTop: 22,
          fontSize: 21,
          color: '#686963',
        }}
      >
        Useful digital products. From the interface to the systems behind it.
      </div>
    </div>,
    size,
  );
}

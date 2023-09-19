/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.

// https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#

export const runtime = 'edge';

export const alt = 'main';

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            fontSize: 60,
            color: 'black',
            background: '#f6f6f6',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="https://wedding-invitation-orpin.vercel.app/main.png"
            alt="main"
          />
        </div>
      ),
      {
        width: 2000,
        height: 1428,
      }
    );
  } catch (err) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

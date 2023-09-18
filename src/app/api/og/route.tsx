/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.

// https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples#

export const runtime = 'edge';

export async function GET() {
  const image = (await fetch(new URL('./main.png', import.meta.url)).then(
    (res) => res.arrayBuffer()
  )) as string;
  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            background: '#f6f6f6',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={image} alt="main" />
        </div>
      ),
      {
        width: 1200,
        height: 800,
      }
    );
  } catch (err) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

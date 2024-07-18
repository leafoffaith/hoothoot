// app/page.tsx (or any Server Component)

import { cookies } from 'next/headers';

async function TaddyTest() {
    const cookieStore = cookies(); // Access Next.js cookies

    try {
        const query = encodeURIComponent(`
      query {
        getPodcastSeries(name:"The Daily"){
          uuid
          name
          itunesId
          description
          imageUrl
          itunesInfo{
            uuid
            baseArtworkUrlOf(size:640)
          }
        }
      }
    `);

        const response = await fetch(`https://api.taddy.org/?query=${query}`, {
            method: 'GET',
            headers: {
                'X-USER-ID': cookieStore.get('userId')?.value || '1632', // Get from cookies
                'X-API-KEY': cookieStore.get('apiKey')?.value || '', // Get from cookies
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const data = await response.json();

        return (
            <div>
                <h1>Hello</h1>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        );

    } catch (error) {
        console.error("Error fetching data:", error);
        return (
            <div>
                <h1>Hello</h1>
                <p>Error loading podcast data.</p>
            </div>
        );
    }
}

export default TaddyTest;

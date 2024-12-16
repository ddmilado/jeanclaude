import { Client, Databases, ID } from 'appwrite';
import type { APIContext } from 'astro';

export async function POST({ request }: APIContext) {
  try {
    const client = new Client()
      .setEndpoint('YOUR_APPWRITE_ENDPOINT')
      .setProject('YOUR_PROJECT_ID');

    const databases = new Databases(client);

    const formData = await request.json();
    
    const response = await databases.createDocument(
      'YOUR_DATABASE_ID',
      'YOUR_COLLECTION_ID',
      ID.unique(),
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        details: formData.details,
        createdAt: new Date().toISOString(),
      }
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error: unknown) {
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
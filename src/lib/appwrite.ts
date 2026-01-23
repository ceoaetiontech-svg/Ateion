import { Client, TablesDB } from 'appwrite';

export const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6973046200335547c988");

export const tablesDB = new TablesDB(client);  // ← NEW TablesDB

export const DATABASE_ID = '697304e10007a4a5f52f';    // From console URL
export const TABLE_ID = 'enquires';             // Your collection/table ID

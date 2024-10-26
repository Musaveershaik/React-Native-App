// src/appwrite.ts
import { Client, Account } from 'appwrite';

// Initialize the AppWrite client
const client = new Client();
client
    .setEndpoint('http://localhost/v1') // Your AppWrite endpoint
    .setProject('your_project_id');      // Your project ID from AppWrite

// Initialize the Account service
const account = new Account(client);

export { account };

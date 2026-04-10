import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {
    url: 'https://fra.cloud.appwrite.io/v1',
    projectId: '69d72ebf0016fac1d1ab',
    databaseId: '69d72f1b0026ae2affc1',
    postsStorageId: '69d73844000b7729b559',
    officialPostsStorageId: '69d73844000b7729b559',
    officialPostsCollectionId: 'official_posts',
    profileStorageId: '69d73844000b7729b559',
    userCollectionId: 'user',
    adminCollectionId: 'admin',
    groupCollectionId: 'group',
    groupPostsCollectionId: 'group_posts',
    counsellorCollectionId: 'counsellor',
    buddyCollectionId: 'buddy',
    studentCollectionId: 'student',
    scheduleCollectionId: 'schedule',
    appointmentCollectionId: 'appointment',
    summaryCollectionId: 'summary',
    activityCollectionId: 'activity'
}

export const client = new Client();
client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
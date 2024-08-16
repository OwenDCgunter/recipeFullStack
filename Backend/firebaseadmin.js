const admin = require('firebase-admin');
//const serviceAccount = require('./recipefinder-5fdfd-firebase-adminsdk-gufkh-a5ce0c4724.json'); // Download this from Firebase Console
console.log("Firebase Private Key:", process.env.FIREBASE_PRIVATE_KEY);
console.log("Firebase ID:", process.env.FIREBASE_PROJECT_ID);
const serviceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
};

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://recipefinder-5fdfd.firebaseio.com',
  storageBucket: 'recipefinder-5fdfd.appspot.com',
  });
  console.log('Firebase Admin SDK initialized successfully');
} catch (error) {
  console.error('Failed to initialize Firebase Admin SDK:', error.message);
}
const app = admin.app(); // This should work if initialized correctly
console.log('Default Firebase app name:', app.name); // Should print '[DEFAULT]'

const bucket = admin.storage().bucket();
console.log('Firebase Storage bucket initialized:', bucket.name);
module.exports = { admin, bucket };
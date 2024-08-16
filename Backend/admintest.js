const admin = require('./firebaseadmin');

console.log('Testing admin functions in a separate script');

try {
  const defaultApp = admin.app();
  console.log('Default Firebase app name:', defaultApp.name); // Should log '[DEFAULT]'
} catch (error) {
  console.error('Error:', error.message);
}
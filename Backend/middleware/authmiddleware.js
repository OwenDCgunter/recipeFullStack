const { admin } = require('../firebaseadmin'); 

module.exports = (req, res, next) => {
  console.log('Auth middleware is running');

  // Check if the admin object is working
  try {
    const defaultApp = admin.app(); // This should return the default app instance
    console.log('Default Firebase app name:', defaultApp.name); // Should log '[DEFAULT]'

    const allApps = admin.apps; // This returns an array of all initialized apps
    console.log('All initialized Firebase apps:', allApps);

    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log('Token received:', token);

    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    admin.auth().verifyIdToken(token)
      .then((decodedToken) => {
        console.log('Decoded Token:', decodedToken);
        req.user = decodedToken;
        next();
      });

  } catch (error) {
    console.error('Error with Firebase Admin SDK:', error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};
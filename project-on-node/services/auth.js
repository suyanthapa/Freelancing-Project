import jwt from 'jsonwebtoken';

const secret= process.env.secret_Key;
const tokenBlacklist = new Set();

function setUser( user) {

  return jwt.sign({
    _id:user._id,
    email:user.email,
    role: user.role
  },secret)
}

function getUser(token) {
  if (!token) {
    return null;
  }

  try {
   
    // Verify the token and decode the payload
    const decoded = jwt.verify(token, secret);
    console.log(decoded);
    return decoded;
  } catch (error) {
    // If verification fails (e.g., expired or invalid token), return null
    console.error("Invalid or expired token", error);
    return null;
  }
}
function logout(token) {
  if (token) {
    // Add the token to the blacklist
    tokenBlacklist.add(token);
    console.log('Token blacklisted (logged out):', token);
  }
}
export{ setUser, getUser,logout };
// Utility function to generate random user ID
const generateUserId = () => {
  return Math.random().toString(36).substr(2, 20);
};

export default generateUserId
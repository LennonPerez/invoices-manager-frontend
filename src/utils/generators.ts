export const generateIDs = (length: number): string[] => {
  const uniqueIds: string[] = [];

  for (let i = 0; i < length; i++) {
    const uniqueId = generateUniqueId();
    uniqueIds.push(uniqueId);
  }

  return uniqueIds;
};

export const generateUniqueId = () => {
  const timestamp = new Date().getTime().toString(16);
  const counter = Math.random().toString(16).substr(2, 4);

  return `${timestamp}${counter}`;
};

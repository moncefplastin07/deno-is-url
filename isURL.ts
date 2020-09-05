/**
 * 
 * @param inputString string 
 * @return boolean
 * 
 */
export const isURL = (inputString: string): boolean => {
  try {
    const url: any = new URL(inputString);
  } catch (_) {
    return false;
  }

  return true;
};


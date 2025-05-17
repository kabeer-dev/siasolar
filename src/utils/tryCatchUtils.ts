import {TryCatchProps} from '@/interfaces/general';

export const asyncTryCatch = async (fn): Promise<TryCatchProps> => {
  try {
    const response = await fn();

    return {success: true, response};
  } catch (error) {
    return {success: false, error};
  }
};

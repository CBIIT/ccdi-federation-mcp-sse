import { sampleMetadataSchema, fileMetadataSchema, apiInfoSchema } from '../schemas/index.ts';
import fetch from 'node-fetch';

export const sampleMetadataHandler = async (params: unknown) => {
  const validatedParams = sampleMetadataSchema.parse(params);
  try {
    const response = await fetch(`https://federation.ccdi.cancer.gov/api/v1/sample?per_page=${validatedParams.per_page}`);
    if (!response.ok) throw new Error('Failed to fetch sample metadata');
    return await response.json();
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export const fileMetadataHandler = async (params: unknown) => {
  const validatedParams = fileMetadataSchema.parse(params);
  try {
    const response = await fetch(`https://federation.ccdi.cancer.gov/api/v1/file?per_page=${validatedParams.per_page}`);
    if (!response.ok) throw new Error('Failed to fetch file metadata');
    return await response.json();
  } catch (error) {
    return { error: (error as Error).message };
  }
};

export const apiInfoHandler = async (params: unknown) => {
  const validatedParams = apiInfoSchema.parse(params);
  try {
    const response = await fetch('https://federation.ccdi.cancer.gov/api/v1/info');
    if (!response.ok) throw new Error('Failed to fetch API info');
    return await response.json();
  } catch (error) {
    return { error: (error as Error).message };
  }
};
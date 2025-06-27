import * as z from 'zod';

const createServerEnv = () => {
  const ServerEnvSchema = z.object({
    POCKETBASE_TOKEN: z.string(),
    POCKETBASE_URL: z.string(),
  });

  const serverEnvVars = {
    POCKETBASE_TOKEN: process.env.POCKETBASE_TOKEN,
    POCKETBASE_URL: process.env.POCKETBASE_URL,
  };

  const parsedServerEnv = ServerEnvSchema.safeParse(serverEnvVars);

  if (!parsedServerEnv.success) {
    throw new Error(
      `Invalid server env provided.
      The following variables are missing or invalid:
      ${Object.entries(parsedServerEnv.error.flatten().fieldErrors)
        .map(([k, v]) => `- ${k}: ${v}`)
        .join('\n')}
  `
    );
  }

  return parsedServerEnv.data ?? {};
};

export const serverEnv = createServerEnv();

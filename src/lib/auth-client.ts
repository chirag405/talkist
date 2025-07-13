import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // No baseURL needed when running on the same domain
});

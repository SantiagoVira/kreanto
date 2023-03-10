import type { User as PrismaUser, PrinterProfile } from "@prisma/client";

/**
 * Module augmentation for `next-auth` types.
 * Allows us to add custom properties to the `session` object and keep type
 * safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 **/

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User;
  }

  interface User extends PrismaUser {
    age: number;
    lastActive: Date;
    name?: string;
    location?: string;
    avgRespTime: number;
    numResponses: number;
    printerProfile?: PrinterProfile;
  }
}

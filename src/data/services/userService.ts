// userService.ts
// For using the low level network calls with axios client
// The file handles                                                           the calling and transformation of data if any.

import { getUsers, getUserById } from "../api/userApi";

export async function fetchAllUser() {
  const users = await getUsers();
  return { ...users };
}

export async function fetchUserById(id: string) {
  const user = await getUserById(id);

  return { ...user, displayName: `${user.firstName} ${user.lastName}` };
}

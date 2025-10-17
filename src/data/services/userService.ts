// userService.ts
import { getUsers, getUserById } from "../api/userApi";

export async function fetchAllUser() {
  const users = await getUsers();
  return { ...users };
}

export async function fetchUserById(id: string) {
  const user = await getUserById(id);

  return { ...user, displayName: `${user.firstName} ${user.lastName}` };
}

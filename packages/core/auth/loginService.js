import { users } from "../../data/users";

export async function loginWithMockData({ identifier, password }) {
  const normalizedIdentifier = identifier.trim().toLowerCase();
  const normalizedPassword = password.trim();

  const matchedUser = users.find(
    (user) =>
      user.email.toLowerCase() === normalizedIdentifier &&
      user.password === normalizedPassword,
  );

  if (!matchedUser) {
    throw new Error("E-mail ou senha inválidos.");
  }

  return matchedUser;
}
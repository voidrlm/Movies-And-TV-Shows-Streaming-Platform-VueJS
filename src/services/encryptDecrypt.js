// Encryption utility removed — keep stubs to avoid breaking imports
export function encrypt(o) {
  return JSON.stringify(o);
}

export function decrypt(o) {
  try {
    return JSON.parse(o);
  } catch (e) {
    return {};
  }
}

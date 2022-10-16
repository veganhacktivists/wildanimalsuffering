/**
 * CSS classnames utility that allows you to compose multiple classes and turn
 * them into a string.
 */
export function cx(...args) {
  return args.filter((arg) => arg && typeof arg === "string").join(" ");
}

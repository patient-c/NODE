import { characters } from "../../src/js-foundation/02-destructuring";

describe("js-foundation/02-destructuring", () => {
  test("characters should containt at least 1", () => {
    expect(characters).toHaveLength(4);
  });
  test("characters should containt Flash, Superman", () => {
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });

  test("first character should be Flash, and second Superman", () => {
    const [flash, superman] = characters; // Desestructuramos la posicion 0 y 1

    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");
  });
});

import { describe, expect, it } from "vitest";

import { lite } from "./lite";

describe("Lite", () => {
  it("Equal", async () => {
    expect(lite()).toEqual("lite");
  });
});

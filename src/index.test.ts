import { describe, expect, it } from "vitest";

import { index } from "./index";

describe("Index", () => {
  it("Equal", async () => {
    expect(index()).toEqual("index");
  });
});

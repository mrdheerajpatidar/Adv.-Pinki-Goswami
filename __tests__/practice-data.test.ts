/**
 * Property 4: Practice Areas Data Integrity
 *
 * For any rendering of the Practice section, exactly 8 practice area cards
 * SHALL be displayed, each with a non-empty title and description string.
 *
 * **Validates: Requirements 5.1**
 */

import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { practiceAreas, type PracticeArea } from "@/lib/constants";

describe("Property 4: Practice Areas Data Integrity", () => {
  it("practiceAreas array contains exactly 8 items", () => {
    expect(practiceAreas).toHaveLength(8);
  });

  it("every practice area has a non-empty title string", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: practiceAreas.length - 1 }),
        (index) => {
          const area: PracticeArea = practiceAreas[index];
          expect(typeof area.title).toBe("string");
          expect(area.title.trim().length).toBeGreaterThan(0);
        }
      )
    );
  });

  it("every practice area has a non-empty description string", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: practiceAreas.length - 1 }),
        (index) => {
          const area: PracticeArea = practiceAreas[index];
          expect(typeof area.description).toBe("string");
          expect(area.description.trim().length).toBeGreaterThan(0);
        }
      )
    );
  });

  it("every practice area has a non-empty icon string", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: practiceAreas.length - 1 }),
        (index) => {
          const area: PracticeArea = practiceAreas[index];
          expect(typeof area.icon).toBe("string");
          expect(area.icon.trim().length).toBeGreaterThan(0);
        }
      )
    );
  });

  it("all practice areas have unique titles", () => {
    const titles = practiceAreas.map((area) => area.title);
    const uniqueTitles = new Set(titles);
    expect(uniqueTitles.size).toBe(practiceAreas.length);
  });
});

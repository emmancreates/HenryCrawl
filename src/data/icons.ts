import type { ServiceSlug } from "@data/services";

// SVG inner markup (paths) for each service, drawn on a 24x24 stroke grid.
export const serviceIcons: Record<ServiceSlug, string> = {
  "crawl-space-encapsulation":
    '<path d="M4 7.5 12 4l8 3.5v9L12 20l-8-3.5z"/><path d="M4 7.5 12 11l8-3.5"/><path d="M12 11v9"/>',
  "crawl-space-repair":
    '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.3L4 17l3 3 5.4-5.3a4 4 0 0 0 5.3-5.4l-2.5 2.5-2.2-2.2z"/>',
  "vapor-barrier-installation":
    '<path d="M12 3 3 8l9 5 9-5z"/><path d="m3 13 9 5 9-5"/><path d="m3 18 9 5 9-5"/>',
  "crawl-space-moisture-control":
    '<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z"/><path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5"/>',
  "crawl-space-mold-removal":
    '<path d="M12 3 4 6v5c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6z"/><path d="m9 12 2 2 4-4"/>',
  "wet-crawl-space-repair":
    '<path d="M4 14c2-2 4 2 6 0s4 2 6 0 4 2 4 2"/><path d="M4 9c2-2 4 2 6 0s4 2 6 0 4 2 4 2"/><path d="M4 19c2-2 4 2 6 0s4 2 6 0 4 2 4 2"/>',
  "crawl-space-dehumidifier-installation":
    '<path d="M3 8h11a3 3 0 1 0-3-3"/><path d="M3 12h15a3 3 0 1 1-3 3"/><path d="M3 16h9a2.5 2.5 0 1 1-2.5 2.5"/>',
  "crawl-space-drainage":
    '<path d="M5 4v7a4 4 0 0 0 4 4h6"/><path d="m12 12 3 3-3 3"/><path d="M19 4v9"/>',
  "basement-waterproofing":
    '<path d="M3 10.5 12 4l9 6.5"/><path d="M5 9.5V20h14V9.5"/><path d="M12 20v-5"/><path d="M9.5 13a2.5 2.5 0 0 0 5 0c0-1.6-2.5-4-2.5-4S9.5 11.4 9.5 13Z"/>',
};

import { siteConfig } from "./site";

export const legalConfig = {
  effectiveDate: "September 11, 2026",
  lastUpdated: "September 11, 2026",
  controller: {
    name: siteConfig.name,
    owner: siteConfig.owner,
    email: siteConfig.email,
    url: siteConfig.url,
    address: "South Korea",
  },
  retention: "2 years or until deletion is requested",
  governingLaw: "Republic of Korea",
  jurisdiction: "Seoul, Republic of Korea",
};

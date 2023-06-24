import { WorkingGroup } from "./interfaces";

export const ZOOM_API_URL = "https://api.zoom.us/v2";
export const ZOOM_AUTHORIZE_URL = "https://zoom.us/oauth/authorize";
export const ZOOM_TOKEN_URL = "https://zoom.us/oauth/token";
export const ZOOM_USER_ID = "410467";

export const GOOGLE_AUTHORIZE_URL = "https://accounts.google.com/o/oauth2/auth";
export const GOOGLE_TOKEN_URL = "https://accounts.google.com/o/oauth2/token";

export const YOUTUBE_CHANNEL_ID = "UCERcwLeheOXp_u61jEXxHMA";

function wg(
  spec: Partial<WorkingGroup> & Pick<WorkingGroup, "name" | "repo">
): WorkingGroup {
  return {
    aliases: [],
    ...spec,
  };
}

export const workingGroups = Object.freeze({
  WG: wg({
    name: "GraphQL Working Group",
    aliases: ["Working Group Meeting"],
    repo: "https://github.com/graphql/graphql-wg",
  }),
  JS: wg({
    name: "GraphQL.js Working Group",
    aliases: ["GraphQL js Working Group"],
    repo: "https://github.com/graphql/graphql-js",
  }),
  GRAPHIQL: wg({
    name: "GraphiQL Working Group",
    repo: "https://github.com/graphql/graphiql",
  }),
  INCREMENTAL: wg({
    name: "Incremental Delivery Working Group",
    aliases: ["Incremental Delivery WG"],
    repo: "https://github.com/robrichard/defer-stream-wg",
  }),
  COMPOSITE: wg({
    name: "Composite Schemas Working Group",
    repo: "https://github.com/graphql/composite-schemas-wg",
  }),
  INPUT_UNIONS: wg({
    name: "Input Unions Working Group",
    aliases: ["Input Unions"],
    repo: "https://github.com/graphql/graphql-wg/blob/main/rfcs/InputUnion.md",
  }),
  HTTP: wg({
    name: "GraphQL-over-HTTP Working Group",
    aliases: ["GraphQL over HTTP Working Group", "GraphQL over HTTP"],
    repo: "https://github.com/graphql/graphql-over-http",
  }),
  METADATA: wg({
    name: "Metadata Working Group",
    repo: "https://github.com/graphql/graphql-spec/issues/300",
  }),
  IGNORE_CONFERENCE_TALKS: wg({
    name: "CONFERENCE TALKS",
    repo: "",
    ignore: true,
  }),
});

export const playlistIds: { [key in keyof typeof workingGroups]: string } = {
  WG: "PLP1igyLx8foH30_sDnEZnxV_8pYW3SDtb",
  JS: "PLP1igyLx8foHghwopNuQM7weyP5jR147I",
  GRAPHIQL: "PLP1igyLx8foGJaxw3z0rlUMAuXu7kcsVm",
  INCREMENTAL: "PLP1igyLx8foHTSNBi4tKUByY5kz4pqz1u",
  COMPOSITE: "PLP1igyLx8foFjxyTg6wPn4pUkZwuAk2GR",
  INPUT_UNIONS: "PLP1igyLx8foH4M0YAbVqpSo2fS1ElvNVD",
  HTTP: "PLP1igyLx8foEz9127xc0SsabIrbTMt9g5",
  METADATA: "PLP1igyLx8foF5nZFcwhvKszPMK_LpgjDf",
  IGNORE_CONFERENCE_TALKS: "PLP1igyLx8foGJrtkgYL9nunvC5qMXTVaa",
};

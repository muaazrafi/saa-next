import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://184b551e44604c358fcba14f61420ae2@sentry.studyabroadapartments.com/3",
  tracesSampleRate: 1.0,
});

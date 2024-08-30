import posthog  from 'posthog-js';


const posthogInstance = posthog.init("phc_6B2ue8GeX1gKB6PxZejTzfgMR3pdQPPPq8ViNhkNBdN",{
  api_host: "https://eu.posthog.com",
});

export default posthogInstance;

export const posthogModule = {
  posthog: posthogInstance
}
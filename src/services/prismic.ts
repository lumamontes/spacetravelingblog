import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';

import sm from '../../sm.json';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */

export interface PrismicConfig {
  req?: prismic.HttpRequestLike;
}

export const getPrismicClient = (config?: PrismicConfig): prismic.Client => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  enableAutoPreviews({
    client,
    req: config?.req,
  });

  return client;
};

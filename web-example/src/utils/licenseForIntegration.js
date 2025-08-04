import { licenses } from '../data/integrationLicense'

export const licenseForIntegration = (integration) => {
  return licenses[integration.toLowerCase()]
}

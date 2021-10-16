const serviceConfig: Record<string, string | number | boolean> = {
  port: 3000,
  basePath: "http://localhost",
  enableStripePayments: true,
};

type ServiceConfigParams = "port" | "basePath" | "enableStripePayments";
const serviceConfig2: Record<ServiceConfigParams, string | number | boolean> = {
  port: 3000,
  basePath: "http://localhost",
  enableStripePayments: true,
};

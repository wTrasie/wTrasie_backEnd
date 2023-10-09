module.exports = ({env}) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: env("DEFAULT_EMAIL"),
        defaultReplyTo: env("DEFAULT_EMAIL"),
        testAddress: env("DEFAULT_EMAIL"),
      },
    },
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_ACCESS_SECRET"),
          region: env("AWS_REGION"),
          params: {
            Bucket: env("AWS_BUCKET"),
          },
        },
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 500,
      amountLimit: 1000,
      apolloServer: {
        tracing: false,
      },
    },
  },
  meilisearch: {
    config: {
      // Your meili host
      host: "https://ms-8b35a48a0214-5386.sfo.meilisearch.io",
      // Your master key or private key
      apiKey: env("MEILI_SEARCH"),
    }
  }
});

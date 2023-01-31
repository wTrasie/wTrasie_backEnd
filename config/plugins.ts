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
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        params: {
          Bucket: env("AWS_BUCKET"),
        },
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 20,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::article.article",
          modelName: "news",
          fuzzysortOptions: {
            threshold: -600,
            limit: 5,
            keys: [
              {
                name: "title",
              },
            ],
          },
        },
        {
          uid: "api::tag.tag",
          modelName: "news",
          fuzzysortOptions: {
            threshold: -600,
            limit: 5,
            keys: [
              {
                name: "title",
              },
            ],
          },
        },
      ],
    },
  },
});

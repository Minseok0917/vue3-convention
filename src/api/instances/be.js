export default [
    {
        baseURL: "",
    },
    {
        request: {
            success(config) {
                config.headers.authorization = "ABC";
                return config;
            },
        },
        response: {},
    },
];

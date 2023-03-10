module.exports = {
    reactStrictMode: true,
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: ['raw-loader','glslify-loader'],
        });

        config.resolve.fallback = { fs: false }

        return config;
    }
};
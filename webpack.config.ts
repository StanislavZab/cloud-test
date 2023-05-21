import path from 'path';
import { Configuration } from 'webpack';
import { BuildWebpackConfig } from './config/build/BuildWebpackConfig';
import type { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const mode: BuildMode = env.mode || 'development';
    const port = env.port || 3000;
    const apiUrl = env.apiUrl || 'https://job.kitactive.ru/api';

    const isDev = mode === 'development';

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const config: Configuration = BuildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        apiUrl,
    });

    return config;
};

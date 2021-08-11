import rollupConfig from '../../rollup.config';

export default rollupConfig('react', {
  input: './src/index.ts',
  output: {
    name: 'Thumbnail',
  },
});

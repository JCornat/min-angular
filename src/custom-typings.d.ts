// support NodeJS modules without type definitions
declare module '*';

// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare var ENV: string;

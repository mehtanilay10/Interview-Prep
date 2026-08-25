declare module 'prismjs' {
  interface Language {
    [key: string]: any;
  }
  interface Prism {
    languages: Record<string, Language>;
    highlight(code: string, grammar: Language, language: string): string;
    manual: boolean;
    disableWorkerMessageHandler: boolean;
    hooks: {
      add(name: string, callback: (...args: any[]) => void): void;
      run(name: string, env: Record<string, any>): void;
    };
    plugins: Record<string, any>;
    util: {
      encode(value: string): string;
      type(obj: unknown): string;
      clone(obj: unknown): unknown;
      getLanguage(id: string): Language | undefined;
      currentScript(): HTMLScriptElement | null;
      isActive(element: Element, prefix: string, defaultActive: boolean): boolean;
    };
    Token: {
      type: string;
      content: string | Token[];
      alias?: string | string[];
      length?: number;
      addPattern(pattern: RegExp, lang?: string, alias?: string): void;
      insertBefore(inside: string, before: string, insert: Language): void;
      addAlias(alias: string, type: string): void;
    };
  }
  const Prism: Prism;
  export default Prism;
}

declare module 'prismjs/components/prism-sql' {
  import 'prismjs';
}

declare module 'prismjs/components/prism-csharp' {
  import 'prismjs';
}

declare module 'prismjs/themes/prism-solarizedlight.css' {
  const content: string;
  export default content;
}

declare module 'prismjs/themes/prism-coy.css' {
  const content: string;
  export default content;
}

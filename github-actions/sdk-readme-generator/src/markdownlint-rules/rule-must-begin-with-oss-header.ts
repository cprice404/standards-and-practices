import * as markdownlint from 'markdownlint';
import {RuleOnErrorInfo} from 'markdownlint';
import {arrayEquals} from '../collections';

/*
  const customMarkdownLintRule: markdownlint.Rule = {
    names: ['awesome-custom-rule'],
    description: 'content must be awesome',
    tags: ['momento-oss'],
    function: (params, onError) => {
      console.log(`IN CUSTOM MARKDOWNLINT RULE; params.name: ${params.name}`);
      for (const token of params.tokens) {
        console.log(`MARKDOWN TOKEN: ${JSON.stringify(token)}`);
      }
    },
  };

 */

const ossHeaderTag = 'ossHeader';

export const mustBeginWithOssHeader: markdownlint.Rule = {
  names: ['must-begin-with-oss-header'],
  description: 'Template must begin with OSS Header',
  tags: ['momento-oss'],
  information: new URL(
    'https://github.com/momentohq/standards-and-practices/github-actions/oss-readme-generator'
  ),
  function: (params, onError) => {
    const firstThreeTokens = params.tokens.slice(0, 3);
    if (firstThreeTokens.length !== 3) {
      onError({
        lineNumber: params.tokens[0].lineNumber,
        detail: 'Template is possibly empty?',
      });
      return;
    }
    const firstThreeTokenTypes = firstThreeTokens.map(t => t.type);

    if (
      !arrayEquals(
        ['paragraph_open', 'inline', 'paragraph_close'],
        firstThreeTokenTypes
      )
    ) {
      console.error(
        `First three token types: ${JSON.stringify(firstThreeTokenTypes)}`
      );
      onError({
        lineNumber: firstThreeTokens[0].lineNumber,
        detail: `Expected template file to begin with {{ ${ossHeaderTag} }}, on a line by itself.`,
      });
      return;
    }

    const inlineToken = firstThreeTokens[1];
    if (inlineToken.content !== `{{ ${ossHeaderTag} }}`) {
      console.error(`First template line: '${inlineToken.content}'`);
      onError({
        lineNumber: firstThreeTokens[0].lineNumber,
        detail: `Expected template file to begin with {{ ${ossHeaderTag} }}, on a line by itself.`,
      });
      return;
    }
  },
};

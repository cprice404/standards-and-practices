import * as markdownlint from 'markdownlint';

interface Header {
  tag: string;
  content: string;
}

interface HeaderWithLineNumber extends Header {
  lineNumber: number;
}

export const verifySdkSectionHeaders: markdownlint.Rule = {
  names: ['expected-sdk-section-headers'],
  description: 'SDK must have required section headers',
  tags: ['momento-oss'],
  information: new URL(
    'https://github.com/momentohq/standards-and-practices/github-actions/oss-readme-generator'
  ),
  function: (params, onError) => {
    const headers: Array<HeaderWithLineNumber> = [];
    let insideHeaderOpenTag = false;
    let headerOpenLineNumber = 1;
    let currentContent: string | undefined = undefined;
    for (const token of params.tokens) {
      // console.log(`TYPE: '${token.type}'`);
      if (!insideHeaderOpenTag) {
        if (token.type === 'heading_open') {
          insideHeaderOpenTag = true;
          headerOpenLineNumber = token.lineNumber;
          continue;
        }
      } else {
        if (token.type === 'heading_close') {
          if (currentContent !== undefined) {
            headers.push({
              lineNumber: headerOpenLineNumber,
              tag: token.tag,
              content: currentContent,
            });
            currentContent = undefined;
            insideHeaderOpenTag = false;
          }
        } else if (token.type === 'inline') {
          currentContent = token.content;
        }
      }
    }

    if (headers.length === 0) {
      onError({
        lineNumber: 1,
        detail: 'No section headers found!',
      });
    }

    const firstHeader: HeaderWithLineNumber =
      headers.shift() as HeaderWithLineNumber;
    if (firstHeader.tag !== 'h1') {
      onError({
        lineNumber: firstHeader.lineNumber,
        detail:
          'Expected first header to be an h1 with string "Momento <language> Client Library".',
      });
    }
    if (!firstHeader.content.match(/^Momento [^ ]+ Client$/)) {
      onError({
        lineNumber: firstHeader.lineNumber,
        detail: `Expected first header to be an h1 with string "Momento <language> Client Library", found: '${firstHeader.content}'`,
      });
    }

    const expectedRemainingHeaders: Array<Header> = [
      {
        tag: 'h2',
        content: 'Getting Started :running:',
      },
      {
        tag: 'h3',
        content: 'Requirements',
      },
      {
        tag: 'h3',
        content: 'Installing Momento and Running the Example',
      },
      {
        tag: 'h3',
        content: 'Using Momento',
      },
      {
        tag: 'h2',
        content: 'Running Tests :zap:',
      },
    ];

    for (const expectedHeader of expectedRemainingHeaders) {
      const nextActualHeader: HeaderWithLineNumber =
        headers.shift() as HeaderWithLineNumber;
      if (expectedHeader.tag !== nextActualHeader.tag) {
        onError({
          lineNumber: nextActualHeader.lineNumber,
          detail: `Expected to find next header with tag '${expectedHeader.tag}', found '${nextActualHeader.tag}`,
        });
      }

      if (expectedHeader.content !== nextActualHeader.content) {
        onError({
          lineNumber: nextActualHeader.lineNumber,
          detail: `Expected to find next header with content '${expectedHeader.content}', found '${nextActualHeader.content}`,
        });
      }
    }

    return;
  },
};

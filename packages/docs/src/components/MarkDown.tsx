import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MarkDownProps {
  url: string;
}

const MarkDown: React.FC<MarkDownProps> = ({ url }: MarkDownProps) => {
  const [md, setMd] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const text = await response.text();
      setMd(text);
    })();
  }, [url]);
  return md ? (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            // @ts-ignore
            <SyntaxHighlighter
              style={darcula}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {md}
    </ReactMarkdown>
  ) : null;
};

export default MarkDown;

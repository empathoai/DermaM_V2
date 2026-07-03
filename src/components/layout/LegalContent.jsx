import React from 'react';
import { Link } from 'react-router-dom';

function LegalBlock({ block }) {
  if (block.type === 'list') {
    return (
      <ul className="list-disc space-y-2 pl-6">
        {block.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    );
  }

  if (block.type === 'notice') {
    return (
      <div className="border border-[#363633]/20 bg-[#EFEFEB] p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#141313]">
          {block.title}
        </p>
        <p>{block.text}</p>
      </div>
    );
  }

  if (block.type === 'link') {
    return (
      <p>
        {block.before}
        <Link className="font-normal text-[#141313] underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141313]" to={block.to}>
          {block.label}
        </Link>
        {block.after}
      </p>
    );
  }

  if (block.type === 'externalLink') {
    return (
      <p>
        {block.before}
        <a
          className="font-normal text-[#141313] underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141313]"
          href={block.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {block.label}
        </a>
        {block.after}
      </p>
    );
  }

  return <p>{block.text}</p>;
}

function LanguageContent({ blocks, lang, label }) {
  return (
    <div lang={lang} className="space-y-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#666463]">
        {label}
      </p>
      {blocks.map((block, index) => (
        <LegalBlock key={`${block.type}-${index}`} block={block} />
      ))}
    </div>
  );
}

export function renderLegalSections(sections) {
  return sections.map((section) => ({
    id: section.id,
    shortTitle: section.shortTitle,
    title: section.title,
    content: (
      <div className="space-y-7">
        <LanguageContent blocks={section.es} lang="es" label="Español" />
        <div className="border-t border-[#363633]/10 pt-6">
          <LanguageContent blocks={section.en} lang="en" label="English" />
        </div>
      </div>
    )
  }));
}

// Only bold, emphasis, and inline code are recognized; source text is never treated as HTML.
export default function InlineText({ text }: { text: string }) {
  return <>{text.split(/(\*\*[\s\S]+?\*\*|\*[^*\n]+\*|`[^`]+`)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> :
    part.startsWith("*") && part.endsWith("*") ? <em key={i}>{part.slice(1, -1)}</em> :
    part.startsWith("`") && part.endsWith("`") ? <code key={i}>{part.slice(1, -1)}</code> : part
  )}</>;
}

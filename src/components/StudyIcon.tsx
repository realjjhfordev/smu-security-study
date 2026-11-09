/** Shared line icons keep navigation and learning cards visually consistent. */
export default function StudyIcon({index}:{index:number}) {
 const paths = [
  <g key="dashboard"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></g>,
  <g key="book"><path d="M12 5C9 3 6 3 3 4v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1v15"/><path d="M6 8h3M15 8h3M6 12h3M15 12h3"/></g>,
  <g key="pencil"><path d="m15 4 5 5-11 11-6 1 1-6L15 4Z"/><path d="m12 7 5 5M4 15l5 5"/></g>,
  <g key="chart"><path d="M4 3v17h17M8 15v-4M13 15V7M18 15V4"/></g>,
  <g key="spark"><path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3ZM20 2v4M18 4h4"/></g>,
  <g key="flag"><path d="M5 21V4c5-5 9 5 14 0v10c-5 5-9-5-14 0"/></g>,
  <g key="chat"><path d="M21 14a3 3 0 0 1-3 3H9l-6 4V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8Z"/><path d="M7 8h10M7 12h7"/></g>,
  <g key="user"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></g>
 ];
 return <svg className="study-icon" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[index]||paths[0]}</svg>;
}

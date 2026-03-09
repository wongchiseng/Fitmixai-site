const fs = require('fs');

function replaceFile(filePath, replacements) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    for (const [oldStr, newStr] of replacements) {
        content = content.split(oldStr).join(newStr);
    }
    fs.writeFileSync(filePath, content);
}

replaceFile('app/layout.tsx', [
    ['className="flex items-center justify-between p-6 max-w-7xl mx-auto"', 'className="flex items-center justify-between p-6 max-w-7xl mx-auto dark:text-gray-100"'],
    ['hover:text-blue-600', 'hover:text-blue-600 dark:hover:text-blue-400'],
    ['bg-gray-50 border-t py-12 mt-20', 'bg-gray-50 dark:bg-zinc-950 border-t dark:border-zinc-800 py-12 mt-20'],
    ['text-sm text-gray-500', 'text-sm text-gray-500 dark:text-gray-400'],
    ['text-sm text-gray-600', 'text-sm text-gray-600 dark:text-gray-400'],
    ['text-sm text-gray-400', 'text-sm text-gray-400 dark:text-gray-500'],
]);

replaceFile('app/page.tsx', [
    ['text-gray-600', 'text-gray-600 dark:text-gray-400'],
    ['bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800', 'bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-200'],
    ['text-gray-200 mb-4', 'text-gray-200 dark:text-gray-700 mb-4'],
    ['bg-gray-50 p-12', 'bg-gray-50 dark:bg-zinc-900/50 p-12'],
    ['bg-white p-6 rounded-2xl shadow-sm', 'bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm dark:border dark:border-zinc-800'],
    ['bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center hover:bg-gray-200', 'bg-gray-100 dark:bg-zinc-900 rounded-2xl overflow-hidden flex items-center justify-center hover:bg-gray-200 dark:hover:bg-zinc-800 dark:border dark:border-zinc-800'],
    ['pb-6 border-b', 'pb-6 border-b dark:border-zinc-800'],
]);

replaceFile('app/about/page.tsx', [
    ['prose prose-lg prose-blue', 'prose prose-lg prose-blue dark:prose-invert text-justify'],
    ['text-gray-600', 'text-gray-600 dark:text-gray-400'],
    ['bg-gray-50 rounded-2xl not-prose', 'bg-gray-50 dark:bg-zinc-900 rounded-2xl not-prose border dark:border-zinc-800'],
]);

replaceFile('app/contact/page.tsx', [
    ['text-gray-600', 'text-gray-600 dark:text-gray-400'],
    ['text-gray-500', 'text-gray-500 dark:text-gray-400'],
    ['bg-gray-50 border border-gray-100', 'bg-gray-50 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800'],
]);

replaceFile('app/features/page.tsx', [
    ['text-gray-600 max-w-2xl', 'text-gray-600 dark:text-gray-400 max-w-2xl text-justify'],
    ['text-gray-600 leading-relaxed', 'text-gray-600 dark:text-gray-400 leading-relaxed text-justify'],
    ['bg-gray-50 border border-gray-100', 'bg-gray-50 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800'],
    ['bg-blue-600 text-white p-12', 'bg-blue-600 dark:bg-blue-600/20 text-white dark:text-blue-100 p-12 border dark:border-blue-500/30'],
    ['bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100', 'bg-white dark:bg-blue-500 text-blue-600 dark:text-white px-8 py-3 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-blue-600'],
]);

replaceFile('app/styles/page.tsx', [
    ['text-gray-600', 'text-gray-600 dark:text-gray-400 text-justify'],
    ['bg-gray-100 rounded-2xl p-8 h-64 flex flex-col justify-end group-hover:bg-gray-200 transition', 'bg-gray-100 dark:bg-zinc-900 rounded-2xl p-8 h-64 flex flex-col justify-end group-hover:bg-gray-200 dark:hover:bg-zinc-800 transition dark:border dark:border-zinc-800'],
    ['text-gray-700', 'text-gray-700 dark:text-gray-400 text-justify'],
]);

replaceFile('app/styles/[style]/page.tsx', [
    ['text-gray-600 mb-12', 'text-gray-600 dark:text-gray-400 mb-12 text-justify'],
    ['bg-blue-50 p-8 rounded-2xl mb-12', 'bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl mb-12 border dark:border-blue-900/50'],
    ['prose max-w-none', 'prose max-w-none dark:prose-invert text-justify'],
]);

replaceFile('app/blog/page.tsx', [
    ['border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition', 'border border-gray-200 dark:border-zinc-800 dark:bg-zinc-900/50 rounded-3xl p-8 hover:shadow-lg dark:hover:border-zinc-600 transition'],
    ['text-sm text-gray-500 mb-2', 'text-sm text-gray-500 dark:text-gray-400 mb-2'],
    ['text-gray-600', 'text-gray-600 dark:text-gray-400 text-justify'],
]);

const blogPosts = [
    'app/blog/10-best-ai-outfit-generators-2026/page.tsx',
    'app/blog/how-ai-virtual-try-on-works/page.tsx'
];
for (const post of blogPosts) {
    replaceFile(post, [
        ['prose prose-lg prose-blue', 'prose prose-lg prose-blue dark:prose-invert text-justify'],
        ['text-gray-500 mb-2', 'text-gray-500 dark:text-gray-400 mb-2']
    ]);
}

replaceFile('app/privacy/page.tsx', [
    ['prose prose-blue', 'prose prose-blue dark:prose-invert text-justify']
]);
replaceFile('app/terms/page.tsx', [
    ['prose prose-blue', 'prose prose-blue dark:prose-invert text-justify']
]);

console.log('Script completed.');

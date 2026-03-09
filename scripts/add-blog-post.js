const fs = require('fs');
const path = require('path');

// A robust script to inject a new blog post with automatic ID and duplicate detection
// Usage: node scripts/add-blog-post.js '<json_string>'

function addBlogPost(jsonStr) {
    const indexPath = path.join(process.cwd(), 'skills/content-management/index.ts');
    let content = fs.readFileSync(indexPath, 'utf-8');

    // Parse the new post
    let newPost;
    try {
        newPost = JSON.parse(jsonStr);
    } catch (e) {
        console.error("Invalid JSON provided");
        process.exit(1);
    }

    // --- AUTOMATIC ID GENERATION ---
    // Extract all existing IDs to find the maximum
    const idMatches = content.match(/id:\s*'(\d+)'/g);
    let nextId = 1;
    if (idMatches) {
        const ids = idMatches.map(m => parseInt(m.match(/'(\d+)'/)[1]));
        const maxId = Math.max(...ids.filter(id => id < 1000000000000)); // Filter out timestamps
        nextId = maxId + 1;
    }
    newPost.id = nextId.toString();

    // --- DUPLICATE DETECTION ---
    // Check for duplicate slug
    if (content.includes(`slug: '${newPost.slug}'`)) {
        console.error(`ERROR: Post with slug "${newPost.slug}" already exists!`);
        process.exit(1);
    }

    // Check for duplicate or very similar title (case-insensitive)
    const normalizedTitle = newPost.title.toLowerCase().trim();
    if (content.toLowerCase().includes(`title: \`${normalizedTitle}\``) ||
        content.toLowerCase().includes(`title: '${normalizedTitle}'`)) {
        console.error(`ERROR: Post with title "${newPost.title}" already exists!`);
        process.exit(1);
    }

    // --- INJECTION ---
    // Format the post as a TypeScript object string
    const tagsStr = newPost.tags ? `[${newPost.tags.map(t => "'" + t.replace(/'/g, "\\'") + "'").join(', ')}]` : '[]';

    const postCode = `    {
        id: '${newPost.id}',
        title: \`${newPost.title.replace(/`/g, "\\`")}\`,
        slug: '${newPost.slug}',
        excerpt: \`${(newPost.excerpt || '').replace(/`/g, "\\`")}\`,
        content: \`${(newPost.content || '').replace(/`/g, "\\`")}\`,
        image: getAssetPath('${newPost.image || '/images/blog/header.png'}'),
        author: '${newPost.author || 'Visit Colombia Team'}',
        date: '${newPost.date || new Date().toISOString().split('T')[0]}',
        tags: ${tagsStr}
    }`;

    // Find the end of the array (last closing brace before the export)
    const searchString = '];\n\nexport function getBlogPosts()';
    const insertIndex = content.lastIndexOf(searchString);

    if (insertIndex === -1) {
        console.error("Could not find the end of the blogPosts array in index.ts");
        process.exit(1);
    }

    // Check if we need a comma for the previous item
    const arrayContentBefore = content.substring(0, insertIndex).trimEnd();
    const needsComma = !arrayContentBefore.endsWith(',') && !arrayContentBefore.endsWith('[');

    const commaInsertion = needsComma ? ',\n' : '\n';

    const newContent = content.substring(0, insertIndex).trimEnd() +
        commaInsertion + postCode + '\n' +
        content.substring(insertIndex);

    fs.writeFileSync(indexPath, newContent, 'utf-8');
    console.log(`Successfully added blog post ID ${newPost.id}: ${newPost.slug}`);
}

const arg = process.argv[2];
if (!arg) {
    console.error("Please provide a JSON string with the blog post data.");
    process.exit(1);
}

addBlogPost(arg);

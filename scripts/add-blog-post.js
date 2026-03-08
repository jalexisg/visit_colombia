const fs = require('fs');
const path = require('path');

// A simple script to safely inject a new blog post into the index.ts array
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

    // Check for duplicate slug
    if (content.includes(`slug: '${newPost.slug}'`)) {
        console.error(`Post with slug "${newPost.slug}" already exists!`);
        process.exit(1);
    }

    // Format the post as a TypeScript object string
    const tagsStr = newPost.tags ? `[${newPost.tags.map(t => "'" + t.replace(/'/g, "\\'") + "'").join(', ')}]` : '[]';

    // Ensure content uses backticks to avoid escaping issues
    const postCode = `    {
        id: '${newPost.id || Date.now()}',
        title: \`${newPost.title.replace(/`/g, "\\`")}\`,
        slug: '${newPost.slug}',
        excerpt: \`${(newPost.excerpt || '').replace(/`/g, "\\`")}\`,
        content: \`${(newPost.content || '').replace(/`/g, "\\`")}\`,
        image: getAssetPath('${newPost.image || '/images/blog-header.png'}'),
        author: '${newPost.author || 'Visit Colombia Team'}',
        date: '${newPost.date || new Date().toISOString().split('T')[0]}',
        tags: ${tagsStr}
    }`;

    // Find the end of the array
    const searchString = '];\n\nexport function getBlogPosts()';
    const insertIndex = content.indexOf(searchString);

    if (insertIndex === -1) {
        console.error("Could not find the end of the blogPosts array in index.ts");
        process.exit(1);
    }

    // Check if we need a comma
    const arrayContentBefore = content.substring(0, insertIndex).trimEnd();
    const needsComma = !arrayContentBefore.endsWith(',');

    const commaInsertion = needsComma ? ',\n' : '\n';

    const newContent = content.substring(0, insertIndex).trimEnd() +
        commaInsertion + postCode + '\n' +
        content.substring(insertIndex);

    fs.writeFileSync(indexPath, newContent, 'utf-8');
    console.log(`Successfully added blog post: ${newPost.slug}`);
}

const arg = process.argv[2];
if (!arg) {
    console.error("Please provide a JSON string with the blog post data.");
    process.exit(1);
}

addBlogPost(arg);

# Editorial Guidelines for Visit Colombia Blog Posts

To maintain the quality, depth, and beauty of the "Visit Colombia" project, all blog posts should follow these guidelines:

## Structure & Length
- **Comprehensive Coverage**: Posts should be detailed (usually 600-1000 words) and cover multiple aspects of the topic (e.g., History, Culture, Nature, Gastronomy).
- **Logical Flow**: Use a clear introduction, 3-5 themed sections with descriptive `<h2>` headers, and a conclusive summary.
- **Semantic HTML**: Use standard HTML tags within the content string (`<p>`, `<h2>`, `<ul>`, `<li>`, `<strong>`) for proper rendering and SEO.
- **Engaging Excerpt**: Provide a 2-3 sentence teaser that encourages readers to click.

## Aesthetic & Content
- **Image Reuse (Priority)**: Instead of generating new images, the agent should first look for relevant high-quality images already available in the project's asset directories (e.g., `/public/images/blog/` or `/public/images/departments/`).
- **Professional Photography**: If no suitable existing image is found, a high-quality, professional-grade image must be used. Only generate a new one using the `generate_image` tool if absolutely necessary, using a detailed "golden hour/premium" prompt.
- **Regional Authenticity**: Use local names, cite specific landmarks, and mention regional dishes to provide an authentic "traveler's paradise" feel.
- **SEO-Friendly Slugs**: Always use descriptive, lowercase slugs (e.g., `norte-de-santander-hidden-gems` instead of just `norte-santander` or `undefined`).

## Code Integration
- **Correct Mapping**: Add the post to the `blogPosts` array in `skills/content-management/index.ts`.
- **Proper Metadata**: Ensure `id`, `author`, `date` (YYYY-MM-DD), and relevant tags are included.

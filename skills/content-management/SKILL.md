---
name: content-management
description: Manage static content and mock data for the blog.
---

# Content Management Skill

This skill handles the retrieval of blog posts and other static content. Currently using mock data, but designed to be replaced by a CMS integration.

## Usage

```typescript
import { getBlogPosts, getBlogPost } from '@/skills/content-management';

// Get all posts
const posts = await getBlogPosts();

// Get single post
const post = await getBlogPost('slug');
```

## Tools
- `getBlogPosts()`: Returns all blog posts.
- `getBlogPost(slug)`: Returns a specific blog post by slug.

/**
 * Get the correct asset path with basePath prefix for GitHub Pages
 * @param path - The path relative to public directory (e.g., '/images/hero.png')
 * @returns The full path including basePath
 */
export function getAssetPath(path: string): string {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return `${basePath}${path}`;
}

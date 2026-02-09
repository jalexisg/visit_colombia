import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

// Mock next/navigation
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
        replace: jest.fn(),
        prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
        get: jest.fn(),
    }),
    usePathname: () => '',
}))

// Mock the API to avoid network requests and provide predictable data
jest.mock('@/lib/api', () => ({
    api: {
        getFeaturedDestinations: jest.fn().mockResolvedValue([
            {
                id: 1,
                name: 'Bogota',
                description: 'Capital city',
                departmentId: 1
            },
            {
                id: 2,
                name: 'Medellin',
                description: 'City of Eternal Spring',
                departmentId: 2
            }
        ])
    }
}))

// Mock resolve for getAssetPath since it is used in the component
jest.mock('@/lib/utils', () => ({
    getAssetPath: (path: string) => path
}))

describe('Page', () => {
    it('renders a heading', async () => {
        // async Server Components are just async functions that return JSX
        const jsx = await Page()
        render(jsx)

        // h1 is in Hero component
        const heroHeading = screen.getByRole('heading', { level: 1, name: /discover the magic of/i })
        expect(heroHeading).toBeInTheDocument()

        // h2 is "Featured Destinations"
        const featuredHeading = screen.getByRole('heading', { level: 2, name: /featured destinations/i })
        expect(featuredHeading).toBeInTheDocument()

        // Also check for "Why Visit Colombia?"
        expect(screen.getByRole('heading', { level: 2, name: /why visit colombia/i })).toBeInTheDocument()
    })
})

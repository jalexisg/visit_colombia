'use client';

import dynamic from 'next/dynamic';

const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-muted animate-pulse rounded-xl" />
});

interface MapClientWrapperProps {
    attractions: any[];
}

export default function MapClientWrapper({ attractions }: MapClientWrapperProps) {
    return <InteractiveMap attractions={attractions} />;
}

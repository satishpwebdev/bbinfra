'use client';

import { useEffect, useRef } from 'react';
import { type CarouselApi } from '@/components/ui/carousel';

export function useCarouselAuto(api: CarouselApi | null, interval = 5000) {
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!api) return;

    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, interval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [api, interval]);
}
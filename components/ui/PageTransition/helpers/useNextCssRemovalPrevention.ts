import * as React from 'react';

export const useNextCssRemovalPrevention = () => {
    React.useEffect(() => {
        document
            .querySelectorAll('head > link[rel="stylesheet"][data-n-p]')
            .forEach(node => node.removeAttribute('data-n-p'));

        const mutationHandler = (mutations: MutationRecord[]) => {
            mutations.forEach(({ target }: MutationRecord) => {
                if (target.nodeName === 'STYLE') {
                    const el = target as Element;
                    if (el.getAttribute('media') === 'x') {
                        el.removeAttribute('media');
                    }
                }
            });
        };

        const observer = new MutationObserver(mutationHandler);

        observer.observe(document.head, {
            attributeFilter: ['media'],
            subtree: true,
        });

        return () => {
            observer.disconnect();
        };
    }, []);
}

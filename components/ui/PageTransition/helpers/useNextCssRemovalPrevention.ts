import * as React from 'react';

export const useNextCssRemovalPrevention = () => {
    React.useEffect(() => {
        document.querySelectorAll('head > link[data-n-p]').forEach(linkElement => {
            linkElement.removeAttribute('data-n-p');
        });

        const mutationHandler = (mutations: MutationRecord[]) => {
            mutations.forEach(({ target, addedNodes }: MutationRecord) => {
                if (target.nodeName === 'HEAD') {
                    addedNodes.forEach((node: Node) => {
                        const el = node as Element;
                        if (el.nodeName === 'STYLE' && el.hasAttribute('data-n-href')) {
                            const href = el.getAttribute('data-n-href');
                            if (href) {
                                el.setAttribute('data-n-href-perm', href);
                                el.removeAttribute('data-n-href');
                                el.removeAttribute('media');
                            }
                        }
                    });

                    // Remove all style nodes that we don't need anymore (all except the last two)
                    const styleNodes = document.querySelectorAll('head > style[data-n-href-perm]');
                    const requiredHrefs = new Set<string>();
                    for (let i = styleNodes.length - 1; i >= 0; i--) {
                        const el = styleNodes[i] as Element;
                        if (requiredHrefs.size < 2) {
                            const href = el.getAttribute('data-n-href-perm');
                            if (href) {
                                if (requiredHrefs.has(href)) {
                                    el.parentNode!.removeChild(el);
                                } else {
                                    requiredHrefs.add(href);
                                }
                            }
                        } else {
                            el.parentNode!.removeChild(el);
                        }
                    }
                }
            });
        };

        const observer = new MutationObserver(mutationHandler);
        observer.observe(document.head, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
        };
    }, []);
};

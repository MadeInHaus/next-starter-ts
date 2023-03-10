import cx from 'clsx';

import { useTheme } from 'components/misc/Theme';
import { Link } from '@madeinhaus/nextjs-page-transition';
import Head from 'components/misc/Head';
import Text from 'components/ui/Text';

import grid from 'styles/modules/grid.module.scss';
import styles from './Landing.module.scss';

const demoLinks = [
    { href: '/demos/carousel', label: 'Carousel' },
    { href: '/demos/image-loader', label: 'UseImageLoader' },
    { href: '/demos/intersection-observer', label: 'UseIntersectionObserver' },
    { href: '/demos/intersection-observer#anchor', label: 'UseIntersectionObserver (anchor)' },
];

const Landing = () => {
    const { theme, setTheme } = useTheme() ?? {};

    const handleThemeClick = (theme: string) => () => {
        setTheme?.(theme);
    };

    return (
        <div className={cx(styles.root, grid.container)}>
            <Head
                title="HAUS Next.js TS Starter"
                description="A skeleton Next.js app to quickly get started."
            />
            <section className={styles.section}>
                <Text as="h2" className={styles.sectionHeadline}>
                    Demos
                </Text>
                <ul className={styles.links}>
                    {demoLinks.map(({ href, label }, i) => (
                        <li key={i} className={styles.link}>
                            <Link href={href}>
                                <Text as="span">{label}</Text>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={styles.section}>
                <Text as="h2" className={styles.sectionHeadline}>
                    Theme
                </Text>
                <ul>
                    {['auto', 'light', 'dark'].map(themeValue => (
                        <li key={themeValue}>
                            <button
                                onClick={handleThemeClick(themeValue)}
                                disabled={themeValue === theme}
                                className={styles.themeButton}
                            >
                                {themeValue}
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Landing;

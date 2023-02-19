import cx from 'clsx';

import Head from 'components/misc/Head';
import Text from 'components/ui/Text';
import { Link } from 'components/ui/PageTransition';

import grid from 'styles/modules/grid.module.scss';
import styles from './Landing.module.scss';

const demoLinks = [
    { href: '/demos/carousel', label: 'Carousel' },
    { href: '/demos/image-loader', label: 'UseImageLoader' },
    { href: '/demos/intersection-observer', label: 'UseIntersectionObserver' },
    { href: '/demos/intersection-observer#anchor', label: 'UseIntersectionObserver (anchor)' },
];

const Landing = () => {
    return (
        <div className={cx(styles.root, grid.container)}>
            <Head
                title="HAUS Next.js Starter"
                description="A skeleton Next.js app to quickly get started."
            />
            <ul className={styles.links}>
                {demoLinks.map(({ href, label }, i) => (
                    <li key={i} className={styles.link}>
                        <Link href={href}>
                            <Text as="span">{label}</Text>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Landing;

import * as React from 'react';
import cx from 'clsx';

import Text from 'components/ui/Text';
import { Link, usePageTransitionState } from 'components/ui/PageTransition';

import grid from 'styles/modules/grid.module.scss';
import styles from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
    const { phase } = usePageTransitionState();
    return (
        <div className={cx(styles.root, className)}>
            <div className={cx(styles.container, grid.container)}>
                <Text as="h1" className={styles.home}>
                    <Link href="/">
                        HAUS Next.JS Starter
                    </Link>
                </Text>
                <Text className={styles.phase}>PageTransitionPhase.{phase}</Text>
            </div>
        </div>
    );
};

export default Header;

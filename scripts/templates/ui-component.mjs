export const uiComponentJS = name => `import * as React from 'react';
import cx from 'clsx';

import styles from './${name}.module.css';

interface ${name}Props {
    className?: string;
}

const ${name}: React.FC<${name}Props> = ({ className }) => {
    return (
        <div className={cx(styles.root, className)}>

        </div>
    );
};

export default ${name};
`;

export const uiComponentCSS = () => `.root {
}

@media (width >= 768px) {
}

@media (width >= 1280px) {
}

@media (width >= 1920px) {
}
`;

export const uiComponentIndex = name => `export { default } from './${name}';
`;

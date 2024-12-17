export const pageComponentRoute = name => {
    return `export { default } from 'components/pages/${name}';
`;
};

export const pageComponentJS = name => {
    return `import * as React from 'react';

import styles from './${name}.module.css';

interface ${name}Props {}

const ${name}: React.FC<${name}Props> = () => {
    return (
        <div className={styles.root}>

        </div>
    );
};

export default ${name};
`;
};

export const pageComponentCSS = () => {
    return `.root {
}

@media (width >= 768px) {
}

@media (width >= 1280px) {
}

@media (width >= 1920px) {
}
`;
};

export const pageComponentIndex = name => {
    return `export { default } from './${name}';
`;
};

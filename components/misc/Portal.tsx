import * as React from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
    selector: string;
    children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ selector = '#__portal__', children }) => {
    const [element, setElement] = React.useState<Element | null>(null);

    React.useEffect(() => {
        setElement(document.querySelector(selector));
    }, [selector]);

    if (element) {
        return ReactDOM.createPortal(children, element);
    }

    return null;
};

export default Portal;

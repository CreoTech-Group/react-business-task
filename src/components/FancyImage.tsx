import React from 'react';
import 'components/FancyImage.scss';
import { LoadingIndicator } from 'components';

interface IProps {
    url: string;
    containerClassName?: string;
}

const FancyImage: React.FC<IProps> = ({ url, containerClassName }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        const image = new Image();
        image.onload = () => setIsLoaded(true);
        image.src = url;
        return () => { image.onload = null };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={['fancy-image-container', containerClassName].join(' ')}>
            {!isLoaded && <LoadingIndicator />}
            {isLoaded && <img src={url} alt="" />}
        </div>
    );
};

export default FancyImage;
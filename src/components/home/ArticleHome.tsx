import imageTick from '../../assets/images/tick .png'
import imageArrow from '../../assets/images/arrow.png'
import { Title } from '../../styled/Title.styled';

interface ArticleHomeProps {
    title: string;
    image: string;
    isArrowOnRight?: boolean;
}

export function ArticleHome({ title, image, isArrowOnRight  }: ArticleHomeProps) {
    return (
        <div className='py-20'>
            <header className="relative">
                <div className="relative">
                    <Title>
                        {title}
                    </Title>
                    <img
                        src={imageTick}
                        alt="Imagen de logo tick"
                        className="image__tick" />
                </div>
            </header>
            <div className='flex flex-col items-center justify-center'>
                <img
                    src={imageArrow}
                    alt="Imagen de Flecha"
                    className={`transition-transform ${isArrowOnRight ? 
                        'rotate-90 -mr-40' : '-ml-40'}`}
                />
                <img src={image} alt={`Imagen portada de ${title}`} />
            </div>
        </div>
    )
}
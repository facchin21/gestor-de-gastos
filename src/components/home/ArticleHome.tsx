import imageTick from '../../assets/images/tick .png'
import imageArrow from '../../assets/images/arrow.png'
import { Title } from '../../styled/Container.styled';

interface ArticleHomeProps {
    title: string;
    image?: string;
    isArrowOnRight?: boolean;
    fontSize?: string;
}

export function ArticleHome({ title, image, isArrowOnRight, fontSize  }: ArticleHomeProps) {
    return (
        <div className='py-20'>
            <header className="relative">
                <div className="relative">
                    <Title fontSize={fontSize}>
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
                    {image && 
                        <img src={image} alt={`Imagen portada de ${title}`} />
                    }
                </div>
        </div>
    )
}
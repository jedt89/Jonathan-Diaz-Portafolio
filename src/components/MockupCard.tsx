import { forwardRef } from 'react';
import { Button } from '@heroui/react';
import { ModalContext } from '../context/ModalContext';
import { useContext } from 'react';
import images from '../assets/img/index';

const MockupCard = forwardRef(
  (
    {
      projectImg,
      description,
      title,
      imgList,
      headDescription,
      tech,
      source,
      code,
      audiovisual,
      ...motionProps
    }: any,
    ref
  ) => {
    const { showProjectModal, setModalContent } = useContext(ModalContext);
    const handleOpenModal = () => {
      setModalContent((prevContent: any) => ({
        ...prevContent,
        title,
        description,
        headDescription,
        size: 'full',
        projectImg,
        imgList,
        tech,
        source,
        code,
        audiovisual
      }));
      showProjectModal();
    };
    const { codeIcon3 } = images;

    return (
      <div ref={ref} className='mockupCard' {...motionProps}>
        <img src={projectImg} style={{borderRadius: '0.5rem'}}/>
        <label>{title}</label>
        <p>{headDescription}</p>
        <div className='projectCardButtons'>
          <Button
            color='success'
            variant='ghost'
            radius='full'
            size='sm'
            onPress={handleOpenModal}
          >
            🔎 Visualizar
          </Button>
          {code && (
            <Button
              color='primary'
              variant='ghost'
              radius='full'
              size='sm'
              onPress={() => window.open(source, '_blank')}
              startContent={
                <img
                  src={codeIcon3}
                  alt='Code icon'
                  style={{ width: '1rem', borderRadius: '0 !important' }}
                ></img>
              }
            >
              Código
            </Button>
          )}
        </div>
      </div>
    );
  }
);

export default MockupCard;

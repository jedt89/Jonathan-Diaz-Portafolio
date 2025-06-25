import { forwardRef } from 'react';
import { Button, Image } from '@heroui/react';
import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import images from '../assets/img/index';

const ProjectCard = forwardRef(
  (
    {
      projectImg,
      description,
      title,
      imgList,
      tech,
      headDescription,
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
      <div ref={ref} className='projectCard' {...motionProps}>
        <div className='imgContainer'>
          <Image
            className='head-img'
            isBlurred
            src={projectImg}
            style={{ height: audiovisual ? '80%' : '100%' }}
          />
          <label className='bold'>{title}</label>
          <p>{headDescription}</p>
        </div>
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
                  style={{ width: '1rem', borderRadius: '0px !important' }}
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

export default ProjectCard;

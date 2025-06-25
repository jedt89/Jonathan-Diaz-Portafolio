import { useContext } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Chip
} from '@heroui/react';
import { ModalContext } from '../context/ModalContext';
import images from '../assets/img/index';

const ProjectModal = () => {
  const { codeIcon3 } = images;
  const { modalContent, projectModalIsOpen, projectModalOpenChange } =
    useContext(ModalContext);
  const {
    title,
    description,
    imgList,
    size,
    tech,
    source,
    code,
    audiovisual
  }: any = modalContent;

  return (
    <>
      <Modal
        isOpen={projectModalIsOpen}
        onOpenChange={projectModalOpenChange}
        backdrop='blur'
        className='projectModal'
        size={size}
        scrollBehavior='inside'
        placement='center'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-4'>{title}</ModalHeader>
              <ModalBody style={{ alignItems: 'center' }}>
                <div className='flex flex-col gap-4 items-center'>
                  {description.length > 1 && (
                    <p style={{ maxWidth: '800px', marginBottom: '1rem' }}>
                      {description}
                    </p>
                  )}
                  <div
                    style={{
                      gap: '2rem',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      marginBottom: '1rem'
                    }}
                  >
                    {tech &&
                      tech.length > 0 &&
                      tech.map((item: any, index: number) => {
                        return (
                          <Chip
                            style={{
                              borderWidth: '1px',
                              gap: '0.5rem',
                              height: '40px',
                              padding: '0 1rem'
                            }}
                            key={index}
                            color='success'
                            variant='bordered'
                            startContent={
                              <img
                                src={item[1]}
                                alt={item[0]}
                                style={{
                                  width: '1.5rem',
                                  borderRadius: '0px !important'
                                }}
                              />
                            }
                          >
                            {item[0]}
                          </Chip>
                        );
                      })}
                  </div>
                  {imgList && (
                    <div className='mockupsImgList'>
                      {Object.values(imgList).map((img: any, index: number) => {
                        return (
                          <img
                            key={index}
                            src={img}
                            onClick={() => window.open(img, '_blank')}
                          />
                        );
                      })}
                    </div>
                  )}
                  {audiovisual && (
                    <div>
                      <iframe
                        src={source}
                        width='800'
                        height='500'
                        frameBorder='0'
                        scrolling='no'
                        allow='autoplay; fullscreen'
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                {code && (
                  <Button
                    color='success'
                    variant='ghost'
                    radius='full'
                    size='md'
                    style={{ marginRight: '2rem' }}
                    onPress={() => {
                      window.open(source, '_blank', 'noopener,noreferrer');
                    }}
                    startContent={<img src={codeIcon3} alt='Code icon' style={{ width: '1rem', borderRadius: '0 !important' }}></img>}
                  >
                    Código
                  </Button>
                )}
                <Button
                  color='danger'
                  variant='ghost'
                  radius='full'
                  size='md'
                  onPress={onClose}
                >
                  X Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectModal;

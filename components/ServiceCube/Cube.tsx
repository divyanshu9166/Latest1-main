import React from 'react';

interface CubeProps {
  rotation: {
    x: number;
    y: number;
    z: number;
  };
}

const Cube: React.FC<CubeProps> = ({ rotation }) => {
  const transformStyle = {
    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
    transition: 'none'
  };
  return (
    <div 
      className="box-cube relative preserve-3d" 
      style={{
        ...transformStyle,
        width: '256px',
        height: '256px',
      }}    >
      <img 
        src="https://cdn.prod.website-files.com/6788d32a6a5b8aa5fc3d79b8/678dfd71c14a1aebeaa3cd3f_Imgs64.webp" 
        alt="woman posing with grey background" 
        className="cube-face right"
        loading="lazy"
      />
      <img 
        src="https://cdn.prod.website-files.com/6788d32a6a5b8aa5fc3d79b8/678dfe7701cafb7df821f74c_Work1.webp" 
        alt="man wearing shade with white background" 
        className="cube-face top"
        loading="lazy"
      />
      <img 
        src="https://cdn.prod.website-files.com/6788d32a6a5b8aa5fc3d79b8/678f66c0419ee9402c7edcac_Imgs26.webp" 
        alt="silver jacket with light background" 
        className="cube-face back"
        loading="lazy"
      />
      <img 
        src="https://cdn.prod.website-files.com/6788d32a6a5b8aa5fc3d79b8/678dfd70658e7ee4765d25f9_Imgs69.webp" 
        alt="tin can and orange with light background" 
        className="cube-face bottom"
        loading="lazy"
      />
      <img 
        src="https://cdn.prod.website-files.com/6788d32a6a5b8aa5fc3d79b8/678f67588a461c052053a1bd_Imgs42.webp" 
        alt="bag with dark background" 
        className="cube-face left"
        loading="lazy"
      />
      <img 
        src="https://cdn.prod.website-files.com/6788d32a6a5b8aa5fc3d79b8/678dfd70ef7479f4b2e2587e_Imgs83.webp" 
        alt="back pack with light background" 
        className="cube-face front"
        loading="lazy"
      />
    </div>
  );
};

export default Cube;

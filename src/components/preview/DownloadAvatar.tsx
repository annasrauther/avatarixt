import styles from './Button.module.css';

type DownloadAvatarProps = {
  avatarRef: React.RefObject<SVGSVGElement>;
};

const DownloadAvatar: React.FC<DownloadAvatarProps> = ({ avatarRef }) => {
  const downloadFile = () => {
    const svg = avatarRef.current;
    if (!svg) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const img = new Image();

    const svgSize = svg.getBoundingClientRect();
    canvas.width = svgSize.width;
    canvas.height = svgSize.height;

    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);

    img.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      const pngBlob = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.download = 'avatar.png';
      a.href = pngBlob;
      a.click();

      URL.revokeObjectURL(pngBlob);
      URL.revokeObjectURL(svgUrl);
    };

    img.src = svgUrl;
  };

  return (
    <button className={styles.button} onClick={downloadFile}>
      Download
    </button>
  );
};

export default DownloadAvatar;

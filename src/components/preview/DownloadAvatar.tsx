import styles from './Button.module.css';

type DownloadAvatarProps = {
  avatarRef: React.RefObject<SVGSVGElement>;
};

const DownloadAvatar: React.FC<DownloadAvatarProps> = ({ avatarRef }) => {
  const downloadFile = () => {
    const svg = avatarRef.current;
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      const pngBlob = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngBlob;
      downloadLink.download = 'avatar.png';

      downloadLink.click();
    };

    const svgSize = svg.getBoundingClientRect();
    canvas.width = svgSize.width;
    canvas.height = svgSize.height;

    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);

    img.src = svgUrl;
  };

  return (
    <button
      type="button"
      className={styles.button}
      onClick={downloadFile}
      aria-label="Download Avatar"
    >
      Download
    </button>
  );
};

export default DownloadAvatar;

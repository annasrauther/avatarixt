import styles from './Button.module.css';

/**
 * Represents the Download Avatar Button props.
 * @interface DownloadAvatarProps
 * @property {React.RefObject<SVGSVGElement>} avatarRef The SVG element reference.
 */
interface DownloadAvatarProps {
  avatarRef: React.RefObject<SVGSVGElement>;
}
/**
 * Represents the Download Avatar Button.
 * 
 * The `DownloadAvatar` component displays a button that, when clicked, downloads the avatar as a PNG file.
 * 
 * @component
 * @param {DownloadAvatarProps} props - The component props.
 * @returns {React.FC} The Download Avatar Button component.
 */
const DownloadAvatar: React.FC<DownloadAvatarProps> = ({ avatarRef }) => {
  /**
   * Handles the avatar download process.
   *
   * This function converts the SVG element representing the avatar to a PNG image and initiates the download
   * by creating a download link with the PNG blob.
   *
   * @function
   * @returns {void}
   */
  const downloadFile = () => {
    // Ensure the avatarRef is provided
    const svg = avatarRef.current;
    if (!svg) return;

    // Convert the SVG element to a PNG blob
    const svgData = new XMLSerializer().serializeToString(svg);

    // Create a canvas element and draw the SVG element on it
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create an image element and draw the canvas on it
    const img = new Image();
    img.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      // Create a download link and click it
      const pngBlob = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngBlob;
      downloadLink.download = 'avatar.png';

      downloadLink.click();
    };

    // Set the canvas size and image source
    const svgSize = svg.getBoundingClientRect();
    canvas.width = svgSize.width;
    canvas.height = svgSize.height;

    // Create a blob from the SVG data and set the image source
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);

    img.src = svgUrl;
  };

  // Renders the Download Avatar button
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

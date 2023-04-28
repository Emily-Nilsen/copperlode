export function BackgroundVideo({ src, autoPlay, muted, poster }) {
  return (
    <div>
      <video width="100%" height="100%" autoPlay muted playsInline poster="">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

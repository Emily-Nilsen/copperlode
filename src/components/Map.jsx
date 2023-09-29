export function Map() {
  return (
    <div className="relative w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.4048272308128!2d145.7423657123177!3d-17.003801653832333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6978623ce42a19f7%3A0x11434d21f74e59c3!2s1%20Hargreaves%20St%2C%20Edmonton%20QLD%204869%2C%20Australia!5e0!3m2!1sen!2sno!4v1682756267782!5m2!1sen!2sno"
        width="600"
        height="800"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 h-64 overflow-hidden rounded-xl sm:h-full"
      />
    </div>
  );
}
